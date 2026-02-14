import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SafeImage } from './SafeImage';
import { MenuItemCard } from './MenuItemCard';
import { defaultMenuImage } from '@/content/business';

interface MenuCategoryGridProps {
  category: {
    category: string;
    image: string;
    items: Array<{
      name: string;
      image: string;
      alt: string;
      [key: string]: any;
    }>;
  };
}

export function MenuCategoryGrid({ category }: MenuCategoryGridProps) {
  return (
    <Card className="border-border/50 shadow-premium overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
            <SafeImage
              src={category.image}
              alt={category.category}
              fallbackSrc={defaultMenuImage}
              className="w-full h-full object-cover"
            />
          </div>
          <CardTitle className="text-xl">{category.category}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.items.map((item, idx) => (
            <MenuItemCard key={idx} item={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
