import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Star, Sparkles } from 'lucide-react';

export function PremiumBasicSpecialPanels() {
  const [activeTab, setActiveTab] = useState('premium');

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-card border border-border shadow-soft p-1.5 h-auto gap-1">
          <TabsTrigger 
            value="premium" 
            className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=inactive]:bg-background data-[state=inactive]:text-foreground hover:bg-muted transition-all duration-300 py-3 motion-reduce:transition-none"
          >
            <Crown className="w-4 h-4 mr-2 motion-reduce:animate-none group-hover:animate-icon-wiggle" />
            Premium
          </TabsTrigger>
          <TabsTrigger 
            value="basic" 
            className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=inactive]:bg-background data-[state=inactive]:text-foreground hover:bg-muted transition-all duration-300 py-3 motion-reduce:transition-none"
          >
            <Star className="w-4 h-4 mr-2 motion-reduce:animate-none group-hover:animate-icon-wiggle" />
            Basic
          </TabsTrigger>
          <TabsTrigger 
            value="special" 
            className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=inactive]:bg-background data-[state=inactive]:text-foreground hover:bg-muted transition-all duration-300 py-3 motion-reduce:transition-none"
          >
            <Sparkles className="w-4 h-4 mr-2 motion-reduce:animate-none group-hover:animate-icon-wiggle" />
            Special
          </TabsTrigger>
        </TabsList>

        <TabsContent 
          value="premium" 
          className="mt-6 animate-fade-in-up motion-reduce:animate-none"
        >
          <Card className="border-2 border-accent/20 bg-gradient-to-br from-card to-accent/5 shadow-luxury">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Crown className="w-8 h-8 text-accent motion-reduce:animate-none animate-icon-pulse" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">Premium Experience</CardTitle>
              </div>
              <CardDescription className="text-base">
                Indulge in our finest culinary creations with exclusive premium dishes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our Premium selection features the most exquisite dishes crafted with the finest ingredients. 
                Each item is prepared with meticulous attention to detail, ensuring an unforgettable dining experience.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Signature dishes with premium ingredients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Expertly crafted by our master chefs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Perfect for special occasions and celebrations</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent 
          value="basic" 
          className="mt-6 animate-fade-in-up motion-reduce:animate-none"
        >
          <Card className="border-2 border-soft-blue/30 bg-gradient-to-br from-card to-soft-blue/5 shadow-luxury">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-soft-blue/10 rounded-xl">
                  <Star className="w-8 h-8 text-soft-blue motion-reduce:animate-none animate-icon-pulse" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">Basic Favorites</CardTitle>
              </div>
              <CardDescription className="text-base">
                Classic dishes that have made us a local favorite
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our Basic menu offers authentic, time-tested recipes that have delighted our customers for years. 
                These are the dishes that built our reputation for quality and taste.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-soft-blue mt-1">✓</span>
                  <span>Traditional recipes passed down through generations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-blue mt-1">✓</span>
                  <span>Great value without compromising on quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-blue mt-1">✓</span>
                  <span>Perfect for everyday dining and family meals</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent 
          value="special" 
          className="mt-6 animate-fade-in-up motion-reduce:animate-none"
        >
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 shadow-luxury">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Sparkles className="w-8 h-8 text-primary motion-reduce:animate-none animate-icon-pulse" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">Special Offerings</CardTitle>
              </div>
              <CardDescription className="text-base">
                Limited-time creations and seasonal specialties
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our Special menu features unique dishes that showcase seasonal ingredients and innovative culinary techniques. 
                These limited-time offerings are crafted to surprise and delight adventurous food lovers.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Seasonal ingredients at their peak freshness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Innovative fusion of traditional and modern flavors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Available for a limited time only</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
