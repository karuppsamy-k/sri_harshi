import React from 'react';
import { cn } from '@/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  intensity?: 'low' | 'medium' | 'high';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    { className, interactive = false, intensity = 'medium', padding = 'lg', children, ...props },
    ref
  ) => {
    const intensityClasses = {
      low: 'bg-white/70 backdrop-blur-md border border-white/60 shadow-xs',
      medium: interactive ? 'glass-card-interactive' : 'glass-card',
      high: 'bg-white/92 backdrop-blur-2xl border border-white/95 shadow-glass',
    };

    const paddingClasses = {
      none: 'p-0',
      sm: 'p-3 sm:p-4',
      md: 'p-4 sm:p-6',
      lg: 'p-6 sm:p-8',
      xl: 'p-8 sm:p-10',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'relative rounded-2xl overflow-hidden',
          intensityClasses[intensity],
          paddingClasses[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';
