import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SafeImage } from './SafeImage';
import { defaultMenuImage } from '@/content/business';
import { buildWhatsAppOrderLink, isWhatsAppConfigured } from '@/lib/whatsapp';
import { MessageCircle } from 'lucide-react';
import { ReactElement } from 'react';

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
  const whatsappLink = buildWhatsAppOrderLink(item);
  const hasWhatsApp = isWhatsAppConfigured();

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
    if (whatsappLink) {
      window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card className="border-border/30 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <SafeImage
          src={item.image}
          alt={item.alt}
          fallbackSrc={defaultMenuImage}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-2 flex-grow">
        <CardTitle className="text-base">{item.name}</CardTitle>
        {(item.description || item.note) && (
          <CardDescription className="text-xs line-clamp-2">
            {item.description || item.note}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        {priceElements.length > 0 ? (
          <div className="flex flex-wrap gap-2 text-sm font-medium text-primary">
            {priceElements}
          </div>
        ) : (
          <div className="text-sm text-muted-foreground">Price on request</div>
        )}
        
        {hasWhatsApp && whatsappLink ? (
          <Button
            onClick={handleOrderClick}
            className="w-full"
            size="sm"
            variant="default"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Order on WhatsApp
          </Button>
        ) : (
          hasWhatsApp === false && (
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
          )
        )}
      </CardContent>
    </Card>
  );
}
