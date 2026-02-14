import { ReactNode } from 'react';
import { Section } from './Section';

interface RevealableSectionProps {
  id: string;
  background?: 'default' | 'muted';
  isRevealed: boolean;
  children: ReactNode;
}

export function RevealableSection({ id, background, isRevealed, children }: RevealableSectionProps) {
  if (!isRevealed) {
    // Keep the section in DOM with its ID for navigation, but hidden
    return (
      <section 
        id={id} 
        className="hidden" 
        aria-hidden="true"
      />
    );
  }

  return (
    <Section id={id} background={background}>
      {children}
    </Section>
  );
}
