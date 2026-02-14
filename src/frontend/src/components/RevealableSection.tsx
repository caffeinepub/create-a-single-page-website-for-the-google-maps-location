import { Section } from './Section';
import { ReactNode } from 'react';

interface RevealableSectionProps {
  id: string;
  background?: 'default' | 'muted';
  isRevealed: boolean;
  children: ReactNode;
  className?: string;
}

export function RevealableSection({ 
  id, 
  background = 'default', 
  isRevealed, 
  children,
  className 
}: RevealableSectionProps) {
  // If not revealed, don't render the section at all (removes from DOM flow and prevents focus)
  if (!isRevealed) {
    return null;
  }

  return (
    <Section 
      id={id} 
      background={background}
      className={className}
    >
      {children}
    </Section>
  );
}
