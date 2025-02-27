import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedElementProps {
  children: ReactNode;
  animation: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation,
  delay = 0,
  duration = 500,
  className = '',
  threshold = 0.1,
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold });

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fade-up':
        return 'animate-fade-up';
      case 'fade-down':
        return 'animate-fade-down';
      case 'fade-left':
        return 'animate-fade-left';
      case 'fade-right':
        return 'animate-fade-right';
      case 'zoom-in':
        return 'animate-zoom-in';
      case 'zoom-out':
        return 'animate-zoom-out';
      default:
        return 'animate-fade-up';
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClass()}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </div>
  );
};