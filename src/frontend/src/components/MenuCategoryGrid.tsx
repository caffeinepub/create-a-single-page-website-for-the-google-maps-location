import { MenuItemCard } from './MenuItemCard';
import { SafeImage } from './SafeImage';
import { defaultMenuImage } from '@/content/business';

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

interface MenuCategory {
  category: string;
  image?: string;
  items: MenuItem[];
}

interface MenuCategoryGridProps {
  category: MenuCategory;
}

export function MenuCategoryGrid({ category }: MenuCategoryGridProps) {
  return (
    <div className="space-y-8 animate-fade-in motion-reduce:animate-none">
      {/* Category Banner Image */}
      {category.image && (
        <div className="w-full overflow-hidden rounded-xl shadow-lg">
          <SafeImage
            src={category.image}
            alt={`${category.category} category photo`}
            fallbackSrc={defaultMenuImage}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
        </div>
      )}

      {/* Category Title */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {category.category}
        </h3>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.items.map((item, idx) => (
          <div 
            key={idx}
            className="animate-fade-in-up"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <MenuItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
