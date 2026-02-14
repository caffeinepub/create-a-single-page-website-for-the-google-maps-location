import { ReactNode } from 'react';
import { Section } from './Section';

interface RevealableSectionProps {
  id: string;
  isRevealed: boolean;
  children: ReactNode;
  background?: 'default' | 'muted';
  className?: string;
}

export function RevealableSection({
  id: _id,
  isRevealed,
  children,
  background = 'default',
  className,
}: RevealableSectionProps) {
  if (!isRevealed) {
    return null;
  }

  return (
    <Section variant={background} className={className}>
      {children}
    </Section>
  );
}
