import { ReactNode, useEffect, useState } from 'react';
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
  const [shouldRender, setShouldRender] = useState(isRevealed);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    if (isRevealed) {
      setShouldRender(true);
      setIsAnimatingOut(false);
    } else if (shouldRender) {
      // Start fade-out animation
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsAnimatingOut(false);
      }, 400); // Match fade-out duration
      return () => clearTimeout(timer);
    }
  }, [isRevealed, shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <Section 
      variant={background} 
      className={`${className || ''} ${isAnimatingOut ? 'animate-fade-out' : ''}`}
    >
      {children}
    </Section>
  );
}
