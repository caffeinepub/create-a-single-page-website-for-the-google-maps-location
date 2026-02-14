import { type ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'default' | 'muted';
}

export function Section({ id, children, className = '', background = 'default' }: SectionProps) {
  const bgClass = background === 'muted' ? 'bg-muted/20' : '';
  
  return (
    <section id={id} className={`py-20 md:py-28 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {children}
      </div>
    </section>
  );
}
