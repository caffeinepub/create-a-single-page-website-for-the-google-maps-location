import { MenuItemCard } from './MenuItemCard';
import { SafeImage } from './SafeImage';
import { categoryBannerImages, defaultMenuImage } from '@/content/business';

interface MenuItem {
  name: string;
  description?: string;
  price?: number | null;
  [key: string]: any;
}

interface MenuCategoryGridProps {
  category: string;
  items: MenuItem[];
}

export function MenuCategoryGrid({ category, items }: MenuCategoryGridProps) {
  const bannerImage = categoryBannerImages[category] || defaultMenuImage;

  return (
    <div className="space-y-8">
      {/* Category Banner */}
      <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-luxury">
        <SafeImage
          src={bannerImage}
          alt={`${category} category`}
          fallbackSrc={defaultMenuImage}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        
        {/* HND Logo Watermark */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-16 h-16 md:w-20 md:h-20 opacity-40 pointer-events-none">
          <img
            src="/assets/generated/hnd-logo-badge-chef-transparent-clean.dim_512x512.png"
            alt="HND Logo"
            className="w-full h-full object-contain drop-shadow-md"
          />
        </div>
        
        <h3 className="absolute bottom-6 left-6 text-3xl md:text-4xl font-bold text-foreground drop-shadow-lg">
          {category}
        </h3>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="animate-fade-in-up motion-reduce:animate-none"
            style={{
              animationDelay: `${Math.min(index * 100, 500)}ms`,
            }}
          >
            <MenuItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
