import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { SafeImage } from './SafeImage';
import { defaultMenuImage } from '@/content/business';
import { buildWhatsAppOrderLink, isWhatsAppConfigured, getAvailableVariants, VariantOption } from '@/lib/whatsapp';
import { MessageCircle } from 'lucide-react';
import { ReactElement, useState } from 'react';

interface MenuItemCardProps {
  item: {
    name: string;
    image: string;
    alt: string;
    description?: string;
    note?: string;
    price?: number | null;
    full?: number;
    half?: number;
    single?: number;
    large?: number;
    medium?: number;
    small?: number;
    family?: number;
    beef?: number;
    chicken?: number;
    [key: string]: any;
  };
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const hasWhatsApp = isWhatsAppConfigured();
  const availableVariants = getAvailableVariants(item);

  // Ensure item name starts with "HND " prefix
  const displayName = item.name.startsWith('HND ') ? item.name : `HND ${item.name}`;
  
  // Build price display
  const priceElements: ReactElement[] = [];
  
  if (item.price !== undefined && item.price !== null) {
    priceElements.push(<span key="price">Rs. {item.price}</span>);
  }
  if (item.full) {
    priceElements.push(<span key="full">Full: Rs. {item.full}</span>);
  }
  if (item.half) {
    priceElements.push(<span key="half">Half: Rs. {item.half}</span>);
  }
  if (item.single) {
    priceElements.push(<span key="single">Single: Rs. {item.single}</span>);
  }
  if (item.large) {
    priceElements.push(<span key="large">Large: Rs. {item.large}</span>);
  }
  if (item.medium) {
    priceElements.push(<span key="medium">Medium: Rs. {item.medium}</span>);
  }
  if (item.small) {
    priceElements.push(<span key="small">Small: Rs. {item.small}</span>);
  }
  if (item.family) {
    priceElements.push(<span key="family">Family: Rs. {item.family}</span>);
  }
  if (item.beef) {
    priceElements.push(<span key="beef">Beef: Rs. {item.beef}</span>);
  }
  if (item.chicken) {
    priceElements.push(<span key="chicken">Chicken: Rs. {item.chicken}</span>);
  }

  const handleOrderClick = () => {
    // If multiple variants exist, show selection dialog
    if (availableVariants.length > 1) {
      setIsDialogOpen(true);
    } else if (availableVariants.length === 1) {
      // Single variant: order directly with prefixed name
      const itemWithPrefix = { ...item, name: displayName };
      const whatsappLink = buildWhatsAppOrderLink(itemWithPrefix, availableVariants[0]);
      if (whatsappLink) {
        window.open(whatsappLink, '_blank', 'noopener,noreferrer');
      }
    } else {
      // No variants: fallback to generic order with prefixed name
      const itemWithPrefix = { ...item, name: displayName };
      const whatsappLink = buildWhatsAppOrderLink(itemWithPrefix);
      if (whatsappLink) {
        window.open(whatsappLink, '_blank', 'noopener,noreferrer');
      }
    }
  };

  const handleVariantSelect = (variant: VariantOption) => {
    const itemWithPrefix = { ...item, name: displayName };
    const whatsappLink = buildWhatsAppOrderLink(itemWithPrefix, variant);
    if (whatsappLink) {
      window.open(whatsappLink, '_blank', 'noopener,noreferrer');
      setIsDialogOpen(false);
    }
  };

  return (
    <>
      <Card className="menu-item-card border-border/30 overflow-hidden hover:shadow-premium transition-all duration-300 hover:scale-[1.02] flex flex-col h-full bg-card/95 backdrop-blur-sm">
        {/* Responsive layout: stacked on mobile, side-by-side on sm+ */}
        <div className="flex flex-col sm:flex-row h-full">
          {/* Content column - left on sm+ */}
          <div className="flex flex-col flex-1 order-2 sm:order-1">
            <CardHeader className="pb-2 flex-grow">
              <CardTitle className="text-base text-foreground">{displayName}</CardTitle>
              {(item.description || item.note) && (
                <CardDescription className="text-xs line-clamp-2">
                  {item.description || item.note}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              {priceElements.length > 0 ? (
                <div className="flex flex-wrap gap-2 text-sm font-semibold text-accent">
                  {priceElements}
                </div>
              ) : (
                <div className="text-sm text-muted-foreground">Price on request</div>
              )}
              
              {hasWhatsApp ? (
                <Button
                  onClick={handleOrderClick}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="sm"
                  variant="default"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Order on WhatsApp
                </Button>
              ) : (
                <Button
                  disabled
                  className="w-full"
                  size="sm"
                  variant="outline"
                  title="WhatsApp ordering is not configured"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Order Unavailable
                </Button>
              )}
            </CardContent>
          </div>

          {/* Image column - right on sm+ */}
          <div className="w-full sm:w-40 md:w-48 flex-shrink-0 overflow-hidden bg-muted/50 relative order-1 sm:order-2">
            <SafeImage
              src={item.image}
              alt={displayName}
              fallbackSrc={defaultMenuImage}
              className="w-full h-40 sm:h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            {/* HND Logo Watermark Overlay - refined positioning */}
            <img
              src="/assets/generated/hnd-logo-restaurant-transparent.dim_512x512.png"
              alt=""
              className="menu-watermark absolute top-2 right-2 w-10 h-10 opacity-40 pointer-events-none"
              loading="lazy"
              aria-hidden="true"
            />
          </div>
        </div>
      </Card>

      {/* Variant selection dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-card">
          <DialogHeader>
            <DialogTitle>Select an option</DialogTitle>
            <DialogDescription>
              Choose your preferred option for {displayName}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 py-4">
            {availableVariants.map((variant) => (
              <Button
                key={variant.key}
                onClick={() => handleVariantSelect(variant)}
                variant="outline"
                className="w-full justify-between h-auto py-3 px-4 hover:bg-accent/10 hover:border-accent"
              >
                <span className="font-medium">{variant.label}</span>
                <span className="text-accent font-semibold">Rs. {variant.price}</span>
              </Button>
            ))}
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
