import { SiteHeader } from './components/SiteHeader';
import { RevealableSection } from './components/RevealableSection';
import { LocationMapPreview } from './components/LocationMapPreview';
import { SafeImage } from './components/SafeImage';
import { MenuCategoryGrid } from './components/MenuCategoryGrid';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, Mail, ExternalLink, UtensilsCrossed } from 'lucide-react';
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
  const { isRevealed, revealThenScroll } = useRevealableSections();

  // Filter out "Deals" category as a defensive measure
  const filteredMenu = businessContent.menu.filter(
    (category) => category.category.toLowerCase() !== 'deals'
  );

  // Convert hours object to array for rendering
  const hoursArray = [
    { days: 'Monday', hours: businessContent.hours.monday },
    { days: 'Tuesday', hours: businessContent.hours.tuesday },
    { days: 'Wednesday', hours: businessContent.hours.wednesday },
    { days: 'Thursday', hours: businessContent.hours.thursday },
    { days: 'Friday', hours: businessContent.hours.friday },
    { days: 'Saturday', hours: businessContent.hours.saturday },
    { days: 'Sunday', hours: businessContent.hours.sunday },
  ];

  // Format address from address object
  const fullAddress = [
    businessContent.address.street,
    businessContent.address.city,
    businessContent.address.state,
    businessContent.address.country
  ].filter(Boolean).join(', ');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader onNavigate={revealThenScroll} />
      
      {/* Main content area - positioned below fixed header */}
      <main className="pt-16">
        {/* Hero Section - Only visible when home/default */}
        <RevealableSection id="home" isRevealed={isRevealed('home')}>
          <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
              style={{ backgroundImage: 'url(/assets/generated/hero-bg-premium-dark.dim_1920x1080.png)' }}
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
            </div>
            
            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 max-w-6xl text-center">
              <div className="flex justify-center mb-6 md:mb-8 animate-fade-in-up">
                <div className="bg-logo-badge rounded-2xl p-5 shadow-soft">
                  <SafeImage
                    src="/assets/generated/hnd-logo-badge-chef-transparent-fixed.dim_512x512.png"
                    alt="HND Restaurant logo"
                    fallbackSrc={defaultMenuImage}
                    className="w-24 h-24 md:w-32 md:h-32 object-contain"
                  />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight animate-fade-in-up animation-delay-100">
                {businessContent.name}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                {businessContent.tagline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up animation-delay-300">
                <Button asChild size="lg" className="text-base px-8 py-6 shadow-soft transition-all duration-300 hover:scale-105">
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
                  className="text-base px-8 py-6 bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-300 hover:scale-105"
                >
                  <a href={`tel:${businessContent.contact.phone}`} className="inline-flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Us
                  </a>
                </Button>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
                <a
                  href={businessContent.social.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                  aria-label="Visit our Facebook page"
                >
                  <SiFacebook className="w-5 h-5" />
                </a>
                <a
                  href={businessContent.social.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                  aria-label="Visit our TikTok page"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>
        </RevealableSection>

        {/* About Section */}
        <RevealableSection id="about" isRevealed={isRevealed('about')}>
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">About Us</h2>
                <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <UtensilsCrossed className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Our Story</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {businessContent.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <UtensilsCrossed className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Our Commitment</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We believe in purity and quality. Every dish is prepared with the finest ingredients and authentic recipes passed down through generations, ensuring an unforgettable dining experience for our guests.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <SafeImage
                    src="/assets/generated/hero-bg-premium-dark.dim_1920x1080.png"
                    alt="Restaurant ambiance"
                    fallbackSrc={defaultMenuImage}
                    className="rounded-lg shadow-soft w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>
        </RevealableSection>

        {/* Menu Section */}
        <RevealableSection id="menu" isRevealed={isRevealed('menu')}>
          <section 
            className="py-16 md:py-24 bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: 'url(/assets/generated/menu-bg-premium-neon-gold.dim_3840x2160.png)' }}
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-sm"></div>
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Menu</h2>
                <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore our diverse selection of authentic Pakistani and Chinese cuisine, crafted with passion and served with pride.
                </p>
              </div>

              <Tabs defaultValue={filteredMenu[0]?.category || 'pizza'} className="w-full">
                <TabsList className="w-full flex flex-wrap justify-center gap-2 h-auto bg-card/50 backdrop-blur-sm p-2 mb-8">
                  {filteredMenu.map((category) => (
                    <TabsTrigger
                      key={category.category}
                      value={category.category}
                      className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                    >
                      {category.category}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {filteredMenu.map((category) => (
                  <TabsContent key={category.category} value={category.category}>
                    <MenuCategoryGrid category={category} />
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>
        </RevealableSection>

        {/* Hours Section */}
        <RevealableSection id="hours" isRevealed={isRevealed('hours')}>
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Opening Hours</h2>
                <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              </div>

              <Card className="max-w-2xl mx-auto shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Clock className="w-5 h-5 text-accent" />
                    Weekly Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {hoursArray.map((day) => (
                      <div
                        key={day.days}
                        className="flex justify-between items-center py-2 border-b border-border/50 last:border-0"
                      >
                        <span className="font-medium text-foreground">{day.days}</span>
                        <span className="text-muted-foreground">{day.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </RevealableSection>

        {/* Contact Section */}
        <RevealableSection id="contact" isRevealed={isRevealed('contact')}>
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Contact Us</h2>
                <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <Phone className="w-5 h-5 text-accent" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`tel:${businessContent.contact.phone}`}
                      className="text-lg text-muted-foreground hover:text-accent transition-colors"
                    >
                      {businessContent.contact.phone}
                    </a>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <Mail className="w-5 h-5 text-accent" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`mailto:${businessContent.contact.email}`}
                      className="text-lg text-muted-foreground hover:text-accent transition-colors break-all"
                    >
                      {businessContent.contact.email}
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </RevealableSection>

        {/* Location Section */}
        <RevealableSection id="location" isRevealed={isRevealed('location')}>
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Visit Us</h2>
                <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <MapPin className="w-5 h-5 text-accent" />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {fullAddress}
                    </p>
                    <Button asChild className="w-full">
                      <a
                        href={businessContent.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                      >
                        <MapPin className="w-4 h-4" />
                        Open in Google Maps
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <div className="h-[400px] rounded-lg overflow-hidden shadow-soft">
                  <LocationMapPreview />
                </div>
              </div>
            </div>
          </section>
        </RevealableSection>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} {businessContent.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Built with love using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'hnd-restaurant'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
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
