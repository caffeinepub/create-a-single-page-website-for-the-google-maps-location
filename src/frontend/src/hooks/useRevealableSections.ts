import { useState, useCallback } from 'react';

type SectionId = 'about' | 'menu' | 'hours' | 'contact' | 'location' | 'home';

export function useRevealableSections() {
  // Track the currently active section (default to 'home' on initial load)
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  const isRevealed = useCallback((sectionId: SectionId) => {
    // Only the active section is revealed
    return activeSection === sectionId;
  }, [activeSection]);

  const revealThenScroll = useCallback((sectionId: SectionId) => {
    // Set the clicked section as the active section (hiding all others)
    setActiveSection(sectionId);
    
    // Scroll to top of page immediately to position content below fixed header
    // Use requestAnimationFrame to ensure DOM has updated
    requestAnimationFrame(() => {
      // Calculate header height to offset scroll position
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 64;
      
      window.scrollTo({
        top: 0,
        behavior: 'instant' as ScrollBehavior
      });
    });
  }, []);

  return {
    isRevealed,
    revealThenScroll,
    activeSection
  };
}
