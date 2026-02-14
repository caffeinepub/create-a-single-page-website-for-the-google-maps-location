import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MenuItemCard } from './MenuItemCard';

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
    <Card className="border-border/30 shadow-premium overflow-hidden bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl text-accent">{category.category}</CardTitle>
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
