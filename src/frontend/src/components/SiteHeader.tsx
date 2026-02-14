import { Button } from '@/components/ui/button';
import { SafeImage } from './SafeImage';
import { businessContent, defaultMenuImage } from '@/content/business';

type SectionId = 'about' | 'menu' | 'hours' | 'contact' | 'location';

interface SiteHeaderProps {
  onNavigate: (sectionId: SectionId) => void;
}

export function SiteHeader({ onNavigate }: SiteHeaderProps) {
  const navItems: { id: SectionId; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'menu', label: 'Menu' },
    { id: 'hours', label: 'Hours' },
    { id: 'contact', label: 'Contact' },
    { id: 'location', label: 'Location' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <SafeImage
              src="/assets/generated/hnd-logo-badge-chef-transparent-fixed.dim_512x512.png"
              alt="HND Restaurant logo"
              fallbackSrc={defaultMenuImage}
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-lg hidden sm:inline">{businessContent.name}</span>
          </div>

          {/* Navigation - visible on all screen sizes */}
          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide flex-1 justify-end">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => onNavigate(item.id)}
                className="text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0 px-2 sm:px-4"
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
