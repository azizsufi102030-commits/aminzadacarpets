import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase once
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore with specific database ID if specified
export const db = firebaseConfig.firestoreDatabaseId
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

// Initialize Storage
export const storage = getStorage(app);

// Skill directive: validate Firestore connection on application boot
export async function testFirestoreConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firestore offline or checking connection:', error.message);
    }
  }
}

// Test connection on module load
if (typeof window !== 'undefined') {
  testFirestoreConnection();
}

/**
 * Uploads an image file to Firebase Storage with a fallback to high-efficiency compressed data URL
 * so mobile photo uploads never fail even if cloud storage permissions or CORS are strict.
 */
export async function uploadCarpetImage(file: File, folder: string = 'carpets'): Promise<string> {
  const timestamp = Date.now();
  const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  const path = `${folder}/${timestamp}_${safeName}`;

  try {
    const storageRef = ref(storage, path);
    const uploadPromise = (async () => {
      const snapshot = await uploadBytes(storageRef, file);
      return await getDownloadURL(snapshot.ref);
    })();
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Firebase Storage upload timed out')), 8000)
    );
    return await Promise.race([uploadPromise, timeoutPromise]);
  } catch (storageError) {
    console.warn('Direct Firebase Storage upload unavailable, using client compression fallback:', storageError);
    return await compressImageToDataUrl(file);
  }
}

/**
 * Compresses an image client-side to a web-optimized JPEG data URL
 * kept compact (< ~180KB) so 4 perspectives fit comfortably within Firestore's 1MB document limit.
 */
export function compressImageToDataUrl(
  file: File,
  maxDimension: number = 900,
  quality: number = 0.72
): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        let dataUrl = canvas.toDataURL('image/jpeg', quality);
        // Step down quality if still large so 4 images stay well under Firestore's 1MB doc cap
        if (dataUrl.length > 220000) {
          dataUrl = canvas.toDataURL('image/jpeg', 0.56);
        }
        if (dataUrl.length > 220000) {
          const smallCanvas = document.createElement('canvas');
          smallCanvas.width = Math.round(width * 0.7);
          smallCanvas.height = Math.round(height * 0.7);
          const smallCtx = smallCanvas.getContext('2d');
          if (smallCtx) {
            smallCtx.drawImage(img, 0, 0, smallCanvas.width, smallCanvas.height);
            dataUrl = smallCanvas.toDataURL('image/jpeg', 0.52);
          }
        }
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error('Failed to load image for compression'));
      img.src = e.target?.result as string;
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}
