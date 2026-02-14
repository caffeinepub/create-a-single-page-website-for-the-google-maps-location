import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppOrderLink, getAvailableVariants, VariantOption } from '@/lib/whatsapp';

interface MenuItem {
  name: string;
  description?: string;
  price?: number | null;
  full?: number;
  half?: number;
  fullPrice?: number;
  halfPrice?: number;
  single?: number;
  large?: number;
  medium?: number;
  small?: number;
  family?: number;
  beef?: number;
  chicken?: number;
  [key: string]: any;
}

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<VariantOption | null>(null);
  
  const variants = getAvailableVariants(item);
  const hasMultipleVariants = variants.length > 1;

  const handleOrderClick = () => {
    if (hasMultipleVariants) {
      setIsDialogOpen(true);
    } else {
      // Single price - order directly
      const whatsappUrl = buildWhatsAppOrderLink(item);
      if (whatsappUrl) {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }
    }
  };

  const handleVariantOrder = () => {
    if (selectedVariant) {
      const whatsappUrl = buildWhatsAppOrderLink(item, selectedVariant);
      if (whatsappUrl) {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }
      setIsDialogOpen(false);
      setSelectedVariant(null);
    }
  };

  return (
    <>
      <Card className="border-border/30 bg-card/80 backdrop-blur-sm shadow-md hover:shadow-premium transition-all duration-300 hover:scale-[1.02] motion-reduce:hover:scale-100 group">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl text-foreground group-hover:text-accent transition-colors duration-300">
            {item.name}
          </CardTitle>
          {item.description && (
            <CardDescription className="text-sm text-muted-foreground line-clamp-2">
              {item.description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2 items-center">
            {item.price && (
              <span className="text-xl font-bold text-accent">
                Rs. {item.price}
              </span>
            )}
            {item.halfPrice && (
              <span className="text-lg font-semibold text-muted-foreground">
                Half: Rs. {item.halfPrice}
              </span>
            )}
            {item.fullPrice && (
              <span className="text-lg font-semibold text-muted-foreground">
                Full: Rs. {item.fullPrice}
              </span>
            )}
          </div>
          
          <Button 
            onClick={handleOrderClick}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105 motion-reduce:hover:scale-100"
            size="sm"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Order via WhatsApp
          </Button>
        </CardContent>
      </Card>

      {/* Variant Selection Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Select Size</DialogTitle>
            <DialogDescription>
              Choose your preferred size for {item.name}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-3 py-4">
            {variants.map((variant) => (
              <button
                key={variant.key}
                onClick={() => setSelectedVariant(variant)}
                className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                  selectedVariant?.key === variant.key
                    ? 'border-accent bg-accent/10'
                    : 'border-border hover:border-accent/50'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{variant.label}</span>
                  <span className="text-lg font-bold text-accent">Rs. {variant.price}</span>
                </div>
              </button>
            ))}
          </div>

          <DialogFooter>
            <Button
              onClick={handleVariantOrder}
              disabled={!selectedVariant}
              className="w-full transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Continue to WhatsApp
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
