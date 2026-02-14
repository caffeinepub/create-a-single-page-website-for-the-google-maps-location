import { useState, useEffect } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { businessContent } from '../content/business';

export function LocationMapPreview() {
  const [embedFailed, setEmbedFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to show fallback if embed takes too long
    const timeout = setTimeout(() => {
      if (isLoading) {
        setEmbedFailed(true);
        setIsLoading(false);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setEmbedFailed(true);
    setIsLoading(false);
  };

  if (embedFailed) {
    return (
      <Card className="overflow-hidden">
        <CardHeader className="bg-muted/50">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <CardTitle>Our Location</CardTitle>
          </div>
          <CardDescription>
            Find us at the address below
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <p className="font-medium text-foreground">{businessContent.address.street}</p>
              <p className="text-muted-foreground">
                {businessContent.address.city}, {businessContent.address.state} {businessContent.address.zip}
              </p>
              <p className="text-muted-foreground">{businessContent.address.country}</p>
            </div>
            
            <Button asChild className="w-full sm:w-auto">
              <a
                href={businessContent.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Open in Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-border shadow-lg">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
            <div className="text-center space-y-2">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm text-muted-foreground">Loading map...</p>
            </div>
          </div>
        )}
        <iframe
          src={businessContent.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          title="Business location map"
          className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity'}
        />
      </div>
      
      <div className="flex justify-center">
        <Button asChild variant="outline" size="lg">
          <a
            href={businessContent.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            Open in Google Maps
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
