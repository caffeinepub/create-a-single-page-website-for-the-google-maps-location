import { useState, useCallback } from 'react';

type SectionId = 'about' | 'menu' | 'hours' | 'contact' | 'location';

export function useRevealableSections() {
  const [revealedSections, setRevealedSections] = useState<Set<SectionId>>(
    new Set(['contact', 'location']) // Contact and Location are visible by default
  );

  const revealSection = useCallback((sectionId: SectionId) => {
    setRevealedSections(prev => new Set(prev).add(sectionId));
  }, []);

  const isRevealed = useCallback((sectionId: SectionId) => {
    return revealedSections.has(sectionId);
  }, [revealedSections]);

  const revealThenScroll = useCallback((sectionId: SectionId) => {
    // First reveal the section
    setRevealedSections(prev => new Set(prev).add(sectionId));
    
    // Then scroll to it after a brief delay to ensure DOM update
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  }, []);

  return {
    revealedSections,
    revealSection,
    isRevealed,
    revealThenScroll
  };
}
