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
  return (
    <Section 
      id={id} 
      background={background}
      className={`${!isRevealed ? 'hidden' : ''} ${className || ''}`}
      aria-hidden={!isRevealed}
    >
      {children}
    </Section>
  );
}
