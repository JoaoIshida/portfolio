'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export type ScrollRevealAnimation = 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: ScrollRevealAnimation;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

const ANIMATION_CLASSES: Record<ScrollRevealAnimation, string> = {
  'fade-in-up': 'fade-in-up',
  'fade-in-down': 'fade-in-down',
  'fade-in-left': 'fade-in-left',
  'fade-in-right': 'fade-in-right',
};

export default function ScrollReveal({
  children,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.15,
  rootMargin = '0px',
  className = '',
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce: true,
    delay,
  });

  const animationClass = ANIMATION_CLASSES[animation];
  const visibleClass = isVisible ? animationClass : 'opacity-0 translate-y-4';

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${visibleClass} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
