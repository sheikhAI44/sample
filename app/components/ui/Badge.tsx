import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'pink' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({
  children,
  variant = 'cyan',
  size = 'md',
  className = '',
}: BadgeProps) {
  const variants = {
    cyan: 'bg-cyan/10 text-cyan border-cyan/30',
    purple: 'bg-purple/10 text-purple border-purple/30',
    pink: 'bg-pink/10 text-pink border-pink/30',
    outline: 'bg-transparent text-foreground border-border',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center
        border rounded-full font-medium
        backdrop-blur-sm
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
