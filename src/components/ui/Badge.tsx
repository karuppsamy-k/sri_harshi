import React from 'react';
import { cn } from '@/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'green' | 'earth' | 'gold' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'green',
  size = 'md',
  children,
  ...props
}) => {
  const variantClasses = {
    green: 'bg-emerald-100/80 text-emerald-800 border-emerald-200/80',
    earth: 'bg-amber-100/80 text-amber-900 border-amber-200/80',
    gold: 'bg-yellow-100/90 text-yellow-900 border-yellow-200/90',
    neutral: 'bg-slate-100/80 text-slate-700 border-slate-200/80',
    outline: 'bg-white/60 text-emerald-800 border-emerald-300',
  };

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5 font-medium',
    md: 'text-xs sm:text-sm px-3 py-1 font-semibold',
  };

  return (
    <span
      className={cn(
        'glass-badge transition-colors',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
