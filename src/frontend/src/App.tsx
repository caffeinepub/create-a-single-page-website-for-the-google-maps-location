import { SiteHeader } from './components/SiteHeader';
import { Section } from './components/Section';
import { RevealableSection } from './components/RevealableSection';
import { LocationMapPreview } from './components/LocationMapPreview';
import { SafeImage } from './components/SafeImage';
import { MenuCategoryGrid } from './components/MenuCategoryGrid';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, Mail, ExternalLink, UtensilsCrossed, Heart } from 'lucide-react';
import { SiX, SiFacebook, SiInstagram } from 'react-icons/si';
import { businessContent, defaultMenuImage } from './content/business';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRevealableSections } from './hooks/useRevealableSections';

function App() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || 'hotel-nasra-da');
  const { isRevealed, revealThenScroll } = useRevealableSections();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader onNavigate={revealThenScroll} />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden pt-16">
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
              src="/assets/generated/hnd-logo.dim_512x512.png"
              alt="HND logo"
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            <Card className="border-border/50 shadow-premium">
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
            <Card className="border-border/50 shadow-premium">
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

      {/* Menu Section - Hidden until revealed */}
      <RevealableSection id="menu" isRevealed={isRevealed('menu')}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <UtensilsCrossed className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Menu</h2>
            <p className="text-lg text-muted-foreground">Explore our delicious offerings</p>
          </div>

          <Tabs defaultValue="tandoor" className="w-full premium-tabs">
            <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-card/50 backdrop-blur-sm p-3 mb-10 border border-border/50 rounded-xl">
              <TabsTrigger value="tandoor" className="flex-1 min-w-[120px] font-medium">Tandoor</TabsTrigger>
              <TabsTrigger value="handi" className="flex-1 min-w-[120px] font-medium">Handi</TabsTrigger>
              <TabsTrigger value="karahi" className="flex-1 min-w-[120px] font-medium">Karahi</TabsTrigger>
              <TabsTrigger value="chinese" className="flex-1 min-w-[120px] font-medium">Chinese</TabsTrigger>
              <TabsTrigger value="bbq" className="flex-1 min-w-[120px] font-medium">BBQ</TabsTrigger>
              <TabsTrigger value="fastfood" className="flex-1 min-w-[120px] font-medium">Fast Food</TabsTrigger>
              <TabsTrigger value="deals" className="flex-1 min-w-[120px] font-medium">Deals</TabsTrigger>
              <TabsTrigger value="drinks" className="flex-1 min-w-[120px] font-medium">Drinks</TabsTrigger>
            </TabsList>

            {/* Tandoor */}
            <TabsContent value="tandoor" className="space-y-6">
              {businessContent.menu
                .filter(cat => cat.category === "Tandoor")
                .map((category, idx) => (
                  <MenuCategoryGrid key={idx} category={category} />
                ))}
            </TabsContent>

            {/* Handi */}
            <TabsContent value="handi" className="space-y-6">
              {businessContent.menu
                .filter(cat => cat.category === "Handi Special")
                .map((category, idx) => (
                  <MenuCategoryGrid key={idx} category={category} />
                ))}
            </TabsContent>

            {/* Karahi */}
            <TabsContent value="karahi" className="space-y-6">
              {businessContent.menu
                .filter(cat => 
                  cat.category === "Desi Food - Chicken" || 
                  cat.category === "Desi Food - Beef" || 
                  cat.category === "Desi Food - Mutton" ||
                  cat.category === "Steaks"
                )
                .map((category, idx) => (
                  <MenuCategoryGrid key={idx} category={category} />
                ))}
            </TabsContent>

            {/* Chinese */}
            <TabsContent value="chinese" className="space-y-6">
              {businessContent.menu
                .filter(cat => 
                  cat.category === "Chinese Rice" || 
                  cat.category === "Chinese Gravy"
                )
                .map((category, idx) => (
                  <MenuCategoryGrid key={idx} category={category} />
                ))}
            </TabsContent>

            {/* BBQ */}
            <TabsContent value="bbq" className="space-y-6">
              {businessContent.menu
                .filter(cat => cat.category === "BBQ")
                .map((category, idx) => (
                  <MenuCategoryGrid key={idx} category={category} />
                ))}
            </TabsContent>

            {/* Fast Food */}
            <TabsContent value="fastfood" className="space-y-6">
              {businessContent.menu
                .filter(cat => cat.category === "Fast Food")
                .map((category, idx) => (
                  <MenuCategoryGrid key={idx} category={category} />
                ))}
            </TabsContent>

            {/* Deals */}
            <TabsContent value="deals" className="space-y-6">
              {businessContent.menu
                .filter(cat => cat.category === "Deals")
                .map((category, idx) => (
                  <MenuCategoryGrid key={idx} category={category} />
                ))}
            </TabsContent>

            {/* Drinks */}
            <TabsContent value="drinks" className="space-y-6">
              {businessContent.menu
                .filter(cat => 
                  cat.category === "Drinks" ||
                  cat.category === "Hot & Cold Bar" ||
                  cat.category === "Fresh Juice Seasonal" ||
                  cat.category === "Lawazmat (Salads)" ||
                  cat.category === "Salad" ||
                  cat.category === "Soup" ||
                  cat.category === "Desserts"
                )
                .map((category, idx) => (
                  <MenuCategoryGrid key={idx} category={category} />
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </RevealableSection>

      {/* Hours Section - Hidden until revealed */}
      <RevealableSection id="hours" background="muted" isRevealed={isRevealed('hours')}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Opening Hours</h2>
            <p className="text-lg text-muted-foreground">We're here to serve you</p>
          </div>
          
          <Card className="border-border/50 shadow-premium">
            <CardContent className="pt-6">
              <div className="space-y-3">
                {Object.entries(businessContent.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                    <span className="font-medium capitalize">{day}</span>
                    <span className="text-muted-foreground">{hours}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </RevealableSection>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <SafeImage
                    src="/assets/generated/hnd-logo.dim_512x512.png"
                    alt="HND logo"
                    fallbackSrc={defaultMenuImage}
                    className="w-10 h-10 object-contain"
                  />
                  <span className="font-bold text-lg">{businessContent.name}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {businessContent.tagline}
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => revealThenScroll('about')}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => revealThenScroll('menu')}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Menu
                  </button>
                  <button
                    onClick={() => revealThenScroll('hours')}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Hours
                  </button>
                  <button
                    onClick={() => revealThenScroll('contact')}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </div>
              </div>

              {/* Social & Contact */}
              <div>
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-3 mb-4">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <SiFacebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <SiX className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <SiInstagram className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  <a href={`tel:${businessContent.contact.phone}`} className="hover:text-primary transition-colors">
                    {businessContent.contact.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
              <p>
                © {currentYear} {businessContent.name}. All rights reserved.
              </p>
              <p className="mt-2 flex items-center justify-center gap-1">
                Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
