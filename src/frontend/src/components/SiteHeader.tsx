import { Button } from '@/components/ui/button';
import { SafeImage } from './SafeImage';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type SectionId = 'about' | 'menu' | 'hours' | 'contact' | 'location';

interface SiteHeaderProps {
  onNavigate: (sectionId: SectionId) => void;
}

export function SiteHeader({ onNavigate }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: SectionId) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  const navItems: Array<{ id: SectionId; label: string }> = [
    { id: 'about', label: 'About' },
    { id: 'menu', label: 'Menu' },
    { id: 'hours', label: 'Hours' },
    { id: 'contact', label: 'Contact' },
    { id: 'location', label: 'Location' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-premium">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <SafeImage
              src="/assets/generated/hnd-logo.dim_512x512.png"
              alt="HND logo"
              fallbackSrc="/assets/generated/menu-thumb-default-hnd.dim_256x256.jpg"
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-lg hidden sm:inline">HOTEL NASRA DA</span>
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavClick(item.id)}
                  className="justify-start text-sm font-medium"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
