import React from 'react';
import { Link } from '../router/Router';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`text-xs uppercase tracking-wider text-[#77716B] ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <Link href="/" className="hover:text-[#5E0006] transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-[#EED9B9]" aria-hidden="true" />
              {isLast || !item.href ? (
                <span className="text-[#5E0006] font-medium" aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-[#5E0006] transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
