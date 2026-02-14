import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { businessContent, defaultMenuImage } from '@/content/business';

type SectionId = 'about' | 'menu' | 'hours' | 'contact' | 'location';

interface SiteHeaderProps {
  onNavigate: (sectionId: SectionId) => void;
}

export function SiteHeader({ onNavigate }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: SectionId) => {
    setIsOpen(false);
    onNavigate(sectionId);
  };

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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <SafeImage
              src="/assets/generated/hnd-logo-badge-chef.dim_512x512.png"
              alt="HND Restaurant logo"
              fallbackSrc={defaultMenuImage}
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-lg hidden sm:inline">{businessContent.name}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => handleNavClick(item.id)}
                    className="justify-start text-base font-medium"
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
