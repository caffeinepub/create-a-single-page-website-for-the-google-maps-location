import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'muted' | 'accent';
}

export function Section({ children, className, variant = 'default' }: SectionProps) {
  const variantClasses = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    accent: 'bg-accent/5',
  };

  return (
    <section className={cn(
      'py-12 md:py-16 animate-fade-in motion-reduce:animate-none',
      variantClasses[variant],
      className
    )}>
      {children}
    </section>
  );
}
