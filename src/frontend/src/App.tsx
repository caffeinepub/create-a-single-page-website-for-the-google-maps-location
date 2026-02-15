import { SiteHeader } from './components/SiteHeader';
import { RevealableSection } from './components/RevealableSection';
import { LocationMapPreview } from './components/LocationMapPreview';
import { SafeImage } from './components/SafeImage';
import { MenuCategoryGrid } from './components/MenuCategoryGrid';
import { PremiumBasicSpecialPanels } from './components/PremiumBasicSpecialPanels';
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
          <section className="relative min-h-[700px] md:min-h-[800px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-8"
              style={{ backgroundImage: 'url(/assets/generated/hero-bg-premium-dark.dim_1920x1080.png)' }}
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
            </div>
            
            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 max-w-6xl text-center space-y-12">
              <div className="flex justify-center mb-8 animate-fade-in-up">
                <div className="bg-logo-badge rounded-3xl p-6 shadow-luxury hover:shadow-glow transition-all duration-500 hover:scale-105 motion-reduce:hover:scale-100">
                  <SafeImage
                    src="/assets/generated/hnd-logo-badge-chef-transparent-clean.dim_512x512.png"
                    alt="HND Restaurant logo"
                    fallbackSrc={defaultMenuImage}
                    className="w-28 h-28 md:w-36 md:h-36 object-contain"
                  />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up animation-delay-100 leading-tight">
                {businessContent.name}
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                {businessContent.tagline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-300">
                <Button 
                  asChild 
                  size="lg" 
                  className="text-base px-10 py-7 shadow-premium hover:shadow-luxury transition-all duration-300 hover:scale-105 hover:-translate-y-1 motion-reduce:hover:scale-100 motion-reduce:hover:translate-y-0"
                >
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
                  className="text-base px-10 py-7 bg-card border-2 border-border hover:border-accent shadow-soft hover:shadow-premium transition-all duration-300 hover:scale-105 hover:-translate-y-1 motion-reduce:hover:scale-100 motion-reduce:hover:translate-y-0"
                >
                  <a href={`tel:${businessContent.contact.phone}`} className="inline-flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Us
                  </a>
                </Button>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-5 justify-center items-center mb-12 animate-fade-in-up animation-delay-400">
                <a
                  href={businessContent.social.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-card border-2 border-border hover:border-accent hover:bg-accent hover:text-accent-foreground shadow-soft hover:shadow-premium transition-all duration-300 hover:scale-110 motion-reduce:hover:scale-100 group"
                  aria-label="Visit our Facebook page"
                >
                  <SiFacebook className="w-6 h-6 group-hover:animate-icon-wiggle motion-reduce:group-hover:animate-none" />
                </a>
                <a
                  href={businessContent.social.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-card border-2 border-border hover:border-accent hover:bg-accent hover:text-accent-foreground shadow-soft hover:shadow-premium transition-all duration-300 hover:scale-110 motion-reduce:hover:scale-100 group"
                  aria-label="Visit our TikTok page"
                >
                  <TikTokIcon className="w-6 h-6 group-hover:animate-icon-wiggle motion-reduce:group-hover:animate-none" />
                </a>
              </div>

              {/* Premium/Basic/Special Panels */}
              <div className="animate-fade-in-up animation-delay-500">
                <PremiumBasicSpecialPanels />
              </div>
            </div>
          </section>
        </RevealableSection>

        {/* About Section */}
        <RevealableSection id="about" isRevealed={isRevealed('about')}>
          <section className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Us</h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8 rounded-full"></div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Discover the story behind our passion for authentic cuisine
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-start gap-5 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shadow-soft group-hover:shadow-premium transition-all duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100">
                      <UtensilsCrossed className="w-7 h-7 text-accent group-hover:animate-icon-wiggle motion-reduce:group-hover:animate-none" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-foreground">Our Story</h3>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {businessContent.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shadow-soft group-hover:shadow-premium transition-all duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100">
                      <UtensilsCrossed className="w-7 h-7 text-accent group-hover:animate-icon-wiggle motion-reduce:group-hover:animate-none" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-foreground">Our Commitment</h3>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        We believe in purity and quality. Every dish is prepared with the finest ingredients and authentic recipes passed down through generations, ensuring an unforgettable dining experience for our guests.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <SafeImage
                    src="/assets/generated/hero-bg-premium-dark.dim_1920x1080.png"
                    alt="Restaurant ambiance"
                    fallbackSrc={defaultMenuImage}
                    className="relative rounded-3xl shadow-luxury w-full h-auto group-hover:scale-[1.02] transition-transform duration-500 motion-reduce:group-hover:scale-100"
                  />
                </div>
              </div>
            </div>
          </section>
        </RevealableSection>

        {/* Menu Section */}
        <RevealableSection id="menu" isRevealed={isRevealed('menu')}>
          <section className="py-20 md:py-28 bg-muted/20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Menu</h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8 rounded-full"></div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Explore our diverse selection of authentic Pakistani and Chinese cuisine, crafted with passion and served with pride.
                </p>
              </div>

              <Tabs defaultValue={filteredMenu[0]?.category || 'pizza'} className="w-full">
                <TabsList className="w-full flex flex-wrap justify-center gap-2 h-auto bg-card border-2 border-border p-3 mb-12 shadow-premium rounded-2xl">
                  {filteredMenu.map((category) => (
                    <TabsTrigger
                      key={category.category}
                      value={category.category}
                      className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-soft data-[state=inactive]:bg-background data-[state=inactive]:text-foreground hover:bg-muted transition-all duration-300 px-6 py-3 rounded-xl font-medium motion-reduce:transition-none"
                    >
                      {category.category}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {filteredMenu.map((category) => (
                  <TabsContent
                    key={category.category}
                    value={category.category}
                    className="mt-0 animate-fade-in-up motion-reduce:animate-none"
                  >
                    <MenuCategoryGrid
                      category={category.category}
                      items={category.items}
                    />
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>
        </RevealableSection>

        {/* Hours Section */}
        <RevealableSection id="hours" isRevealed={isRevealed('hours')}>
          <section className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Opening Hours</h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8 rounded-full"></div>
                <p className="text-lg text-muted-foreground">We're here to serve you</p>
              </div>

              <Card className="border-2 border-border bg-card shadow-luxury hover:shadow-glow transition-all duration-500">
                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-accent/10 rounded-2xl shadow-soft">
                      <Clock className="w-10 h-10 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">Weekly Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {hoursArray.map((day, index) => (
                      <div
                        key={day.days}
                        className="flex justify-between items-center p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02] motion-reduce:hover:scale-100 animate-fade-in-up motion-reduce:animate-none"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <span className="font-semibold text-foreground text-base md:text-lg">
                          {day.days}
                        </span>
                        <span className="text-muted-foreground text-base md:text-lg">
                          {day.hours}
                        </span>
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
          <section className="py-20 md:py-28 bg-muted/20">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get in Touch</h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8 rounded-full"></div>
                <p className="text-lg text-muted-foreground">We'd love to hear from you</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-border bg-card shadow-premium hover:shadow-luxury transition-all duration-300 hover:scale-[1.02] motion-reduce:hover:scale-100 group">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-3 bg-accent/10 rounded-xl shadow-soft group-hover:shadow-premium transition-all duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100">
                        <Phone className="w-6 h-6 text-accent group-hover:animate-icon-wiggle motion-reduce:group-hover:animate-none" />
                      </div>
                      <CardTitle className="text-xl">Phone</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`tel:${businessContent.contact.phone}`}
                      className="text-lg text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      {businessContent.contact.phone}
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border bg-card shadow-premium hover:shadow-luxury transition-all duration-300 hover:scale-[1.02] motion-reduce:hover:scale-100 group">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-3 bg-accent/10 rounded-xl shadow-soft group-hover:shadow-premium transition-all duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100">
                        <Mail className="w-6 h-6 text-accent group-hover:animate-icon-wiggle motion-reduce:group-hover:animate-none" />
                      </div>
                      <CardTitle className="text-xl">Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`mailto:${businessContent.contact.email}`}
                      className="text-lg text-muted-foreground hover:text-accent transition-colors duration-300 break-all"
                    >
                      {businessContent.contact.email}
                    </a>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2 border-2 border-border bg-card shadow-premium hover:shadow-luxury transition-all duration-300 hover:scale-[1.02] motion-reduce:hover:scale-100 group">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-3 bg-accent/10 rounded-xl shadow-soft group-hover:shadow-premium transition-all duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100">
                        <MapPin className="w-6 h-6 text-accent group-hover:animate-icon-wiggle motion-reduce:group-hover:animate-none" />
                      </div>
                      <CardTitle className="text-xl">Address</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground mb-4">
                      {fullAddress}
                    </p>
                    <Button asChild variant="outline" className="shadow-soft hover:shadow-premium transition-all duration-300">
                      <a
                        href={businessContent.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open in Google Maps
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </RevealableSection>

        {/* Location Section */}
        <RevealableSection id="location" isRevealed={isRevealed('location')}>
          <section className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Find Us</h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8 rounded-full"></div>
                <p className="text-lg text-muted-foreground">Visit us at our location</p>
              </div>

              <LocationMapPreview />
            </div>
          </section>
        </RevealableSection>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              © {new Date().getFullYear()} {businessContent.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
