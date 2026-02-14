import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  background?: 'default' | 'muted';
  children: ReactNode;
  className?: string;
}

export function Section({ id, background = 'default', children, className = '' }: SectionProps) {
  const bgClass = background === 'muted' 
    ? 'bg-muted/30' 
    : 'bg-background';

  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${bgClass} ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
