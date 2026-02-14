import { SiteHeader } from './components/SiteHeader';
import { Section } from './components/Section';
import { RevealableSection } from './components/RevealableSection';
import { LocationMapPreview } from './components/LocationMapPreview';
import { SafeImage } from './components/SafeImage';
import { MenuCategoryGrid } from './components/MenuCategoryGrid';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, Mail, ExternalLink, UtensilsCrossed, Heart } from 'lucide-react';
import { SiFacebook } from 'react-icons/si';
import { businessContent, defaultMenuImage } from './content/business';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRevealableSections } from './hooks/useRevealableSections';

// TikTok icon component (custom SVG since react-icons/si doesn't have the latest TikTok icon)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

function App() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || 'hotel-nasra-da');
  const { isRevealed, revealThenScroll } = useRevealableSections();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader onNavigate={revealThenScroll} />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden pt-16 bg-background">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/assets/generated/hero-bg-premium-dark.dim_1920x1080.png)' }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 max-w-6xl text-center">
          <div className="flex justify-center mb-6 md:mb-8">
            <SafeImage
              src="/assets/generated/hnd-logo-badge-chef.dim_512x512.png"
              alt="HND Restaurant logo"
              fallbackSrc={defaultMenuImage}
              className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
            {businessContent.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            {businessContent.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="text-base px-8 py-6 shadow-premium">
              <a
                href={businessContent.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                View on Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="text-base px-8 py-6 bg-card/80 backdrop-blur-sm border-border/50"
            >
              <a href={`tel:${businessContent.contact.phone}`} className="inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </Button>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 justify-center items-center">
            <a
              href={businessContent.social.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background shadow-premium"
              aria-label="Facebook"
            >
              <SiFacebook className="w-5 h-5" />
            </a>
            <a
              href={businessContent.social.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background shadow-premium"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - Always visible */}
      <Section id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">We'd love to hear from you</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Address Card */}
            <Card className="border-border/50 shadow-premium bg-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <CardTitle>Address</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <address className="not-italic text-muted-foreground leading-relaxed">
                  <p>{businessContent.address.street}</p>
                  <p>{businessContent.address.city}, {businessContent.address.state}</p>
                  <p>{businessContent.address.country}</p>
                </address>
              </CardContent>
            </Card>

            {/* Contact Info Card */}
            <Card className="border-border/50 shadow-premium bg-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href={`tel:${businessContent.contact.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                  >
                    {businessContent.contact.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href={`mailto:${businessContent.contact.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded break-all"
                  >
                    {businessContent.contact.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Location Section - Always visible */}
      <Section id="location" background="muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Visit Us</h2>
            <p className="text-lg text-muted-foreground">Find us on the map</p>
          </div>
          
          <LocationMapPreview />
        </div>
      </Section>

      {/* About Section - Hidden until revealed */}
      <RevealableSection id="about" background="muted" isRevealed={isRevealed('about')}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {businessContent.description}
          </p>
        </div>
      </RevealableSection>

      {/* Menu Section - Hidden until revealed with premium dark background */}
      <RevealableSection 
        id="menu" 
        isRevealed={isRevealed('menu')}
        className="menu-section-premium relative"
      >
        {/* Premium Menu Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/assets/generated/menu-bg-premium-neon-gold.dim_3840x2160.png)' }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        </div>

        {/* Menu Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 mb-4">
              <UtensilsCrossed className="w-7 h-7 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Menu</h2>
            <p className="text-lg text-muted-foreground">Discover our delicious offerings</p>
          </div>
          
          <Tabs defaultValue={businessContent.menu[0]?.category || 'menu'} className="w-full">
            <TabsList className="w-full flex-wrap h-auto gap-2 bg-card/80 backdrop-blur-sm border border-border/30 p-2">
              {businessContent.menu.map((category) => (
                <TabsTrigger 
                  key={category.category} 
                  value={category.category}
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {businessContent.menu.map((category) => (
              <TabsContent key={category.category} value={category.category} className="mt-6">
                <MenuCategoryGrid category={category} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </RevealableSection>

      {/* Hours Section - Hidden until revealed */}
      <RevealableSection id="hours" background="muted" isRevealed={isRevealed('hours')}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Opening Hours</h2>
            <p className="text-lg text-muted-foreground">We're here to serve you</p>
          </div>
          
          <Card className="border-border/50 shadow-premium bg-card">
            <CardContent className="pt-6">
              <div className="space-y-3">
                {Object.entries(businessContent.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                    <span className="font-medium capitalize text-foreground">{day}</span>
                    <span className="text-muted-foreground">{hours}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </RevealableSection>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} {businessContent.name}. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              {/* Social Links */}
              <a
                href={businessContent.social.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                aria-label="Facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href={businessContent.social.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground text-center md:text-right flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
