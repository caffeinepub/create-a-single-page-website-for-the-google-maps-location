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
    muted: 'bg-muted/20',
    accent: 'bg-accent/5',
  };

  return (
    <section className={cn(
      'py-16 md:py-20 lg:py-24 animate-fade-in motion-reduce:animate-none',
      variantClasses[variant],
      className
    )}>
      {children}
    </section>
  );
}
