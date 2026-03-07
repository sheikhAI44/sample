import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionContainer({
  children,
  className = '',
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`relative py-20 px-6 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
}
