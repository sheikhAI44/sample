import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
}: ButtonProps) {
  const variantClass = variant === 'outline' ? 'btn-outline' : 'btn-primary';
  const sizeClass = size === 'sm' ? 'btn-primary-sm' : size === 'lg' ? 'btn-primary-lg' : '';

  const classes = `${variantClass} ${sizeClass} ${className}`.trim();

  const content = (
    <>
      {children}
      {icon && <span>{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      {content}
    </motion.button>
  );
}
