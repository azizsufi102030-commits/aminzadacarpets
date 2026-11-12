/**
 * AMINZADA CARPETS — Client-Side Router
 * 
 * Accessible, lightweight, zero-dependency browser router.
 * Supports HTML5 pushState, popstate (browser back/forward), query params,
 * path parameters (e.g. /products/:slug, /collections/:slug), and scroll restoration.
 */

import React, { createContext, useContext, useEffect, useState } from 'react';

interface RouteContextType {
  path: string;
  search: string;
  params: Record<string, string>;
  navigate: (to: string) => void;
}

const RouteContext = createContext<RouteContextType>({
  path: '/',
  search: '',
  params: {},
  navigate: () => {},
});

export function useRouter() {
  return useContext(RouteContext);
}

export function parseRoute(currentPath: string): { routeName: string; params: Record<string, string> } {
  // Normalize path
  const normalized = currentPath.split('?')[0].replace(/\/+$/, '') || '/';

  if (normalized === '/') {
    return { routeName: 'home', params: {} };
  }
  if (normalized === '/collections') {
    return { routeName: 'collections', params: {} };
  }
  if (normalized.startsWith('/collections/')) {
    const slug = normalized.replace('/collections/', '');
    return { routeName: 'collection-detail', params: { slug } };
  }
  if (normalized === '/products') {
    return { routeName: 'products', params: {} };
  }
  if (normalized.startsWith('/products/')) {
    const slug = normalized.replace('/products/', '');
    return { routeName: 'product-detail', params: { slug } };
  }
  if (normalized === '/about') {
    return { routeName: 'about', params: {} };
  }
  if (normalized === '/craftsmanship') {
    return { routeName: 'craftsmanship', params: {} };
  }
  if (normalized === '/quality') {
    return { routeName: 'quality', params: {} };
  }
  if (normalized === '/wholesale') {
    return { routeName: 'wholesale', params: {} };
  }
  if (normalized === '/contact') {
    return { routeName: 'contact', params: {} };
  }
  if (normalized === '/faq') {
    return { routeName: 'faq', params: {} };
  }
  if (normalized === '/request-a-quote') {
    return { routeName: 'request-a-quote', params: {} };
  }
  if (normalized === '/privacy') {
    return { routeName: 'privacy', params: {} };
  }
  if (normalized === '/terms') {
    return { routeName: 'terms', params: {} };
  }
  if (normalized === '/admin') {
    return { routeName: 'admin', params: {} };
  }

  return { routeName: 'not-found', params: {} };
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [currentPath, setCurrentPath] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );
  const [currentSearch, setCurrentSearch] = useState<string>(
    typeof window !== 'undefined' ? window.location.search : ''
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      setCurrentSearch(window.location.search);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', to);
      const [path, search = ''] = to.split('?');
      setCurrentPath(path);
      setCurrentSearch(search ? `?${search}` : '');
      window.scrollTo(0, 0);
    }
  };

  const { params } = parseRoute(currentPath);

  return (
    <RouteContext.Provider value={{ path: currentPath, search: currentSearch, params, navigate }}>
      {children}
    </RouteContext.Provider>
  );
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

export function Link({ href, children, className = '', activeClassName = '', onClick, ...rest }: LinkProps) {
  const { path, navigate } = useRouter();
  const isActive = path === href || (href !== '/' && path.startsWith(href));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // Allow default if modifier keys are pressed (e.g. Cmd+click / Ctrl+click)
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      navigate(href);
    }
  };

  const combinedClass = `${className} ${isActive ? activeClassName : ''}`.trim();

  return (
    <a href={href} onClick={handleClick} className={combinedClass} {...rest}>
      {children}
    </a>
  );
}
