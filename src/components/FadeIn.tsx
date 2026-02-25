'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: ReactNode;
  className?: string;
}

export function FadeIn({ children, className }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // We only want to trigger this once
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 motion-safe:translate-y-4',
        'motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out',
        isVisible && 'opacity-100 motion-safe:translate-y-0',
        className
      )}
    >
      {children}
    </div>
  );
}
