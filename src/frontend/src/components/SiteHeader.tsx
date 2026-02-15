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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="bg-logo-badge rounded-xl p-2.5 shadow-soft transition-all duration-300 hover:shadow-premium hover:scale-105 motion-reduce:hover:scale-100">
              <SafeImage
                src="/assets/generated/hnd-logo-badge-chef-transparent-clean.dim_512x512.png"
                alt="HND Restaurant logo"
                fallbackSrc={defaultMenuImage}
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-lg md:text-xl font-bold text-foreground hidden sm:inline">
              {businessContent.name}
            </span>
          </div>

          {/* Navigation - Horizontally scrollable on mobile */}
          <nav className="flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex items-center justify-end gap-1 md:gap-2 min-w-max">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate(item.id)}
                  className="text-xs md:text-sm whitespace-nowrap hover:bg-accent/10 hover:text-accent transition-all duration-300 relative group motion-reduce:transition-none"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-3/4 motion-reduce:transition-none" />
                </Button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
