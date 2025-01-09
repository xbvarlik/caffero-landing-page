import React from 'react';
import { Scan, Coffee, BookMarked, ChefHat, List } from 'lucide-react';
import { FeatureHero } from './FeatureHero';

export function Features() {
  const features = [
    {
      id: 'discover',
      icon: Coffee,
      title: 'Discover Your Perfect Cup',
      description: 'Embark on a journey through the world\'s finest coffee selections. From single-origin beans to artisanal blends, explore carefully curated collections from renowned roasters worldwide. Our platform helps you discover new flavors, understand roast profiles, and find your next favorite brew.',
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Various coffee beans and brewing equipment',
      reverse: false
    },
    {
      id: 'scan',
      icon: Scan,
      title: 'Smart Coffee Recognition',
      description: 'Simply point your camera at any coffee package, and our advanced AI instantly identifies the brand, roast type, and flavor notes. Add new coffees to your collection with a single tap, complete with detailed information about origin, processing method, and roast date. Never forget that amazing coffee you tried.',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Coffee viewed from above with scanning frame',
      reverse: true,
      showScanFrame: true
    },
    {
      id: 'shelf',
      icon: BookMarked,
      title: 'Your Digital Coffee Shelf',
      description: 'Transform your coffee corner into a well-organized digital collection. Track your inventory, monitor freshness dates, and maintain detailed notes about each coffee. Rate your favorites, log brewing parameters, and build your personal coffee journey. Your comprehensive coffee diary, always at your fingertips.',
      image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Organized coffee shelf with various beans and equipment',
      reverse: false
    },
    {
      id: 'recipes',
      icon: ChefHat,
      title: 'Master Your Brew',
      description: 'Whether you\'re a pour-over perfectionist or an espresso enthusiast, create and save your ideal brewing recipes. Fine-tune variables like grind size, water temperature, and brewing time. Share your successful recipes with the community and discover techniques from fellow coffee lovers. Turn every morning brew into a masterpiece.',
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Coffee brewing process',
      reverse: true
    },
    {
      id: 'wishlist',
      icon: List,
      title: 'Coffee Bucket List',
      description: 'Never miss out on coffees you want to try. Create personalized wishlists organized by roaster, origin, or processing method. Get notifications when your desired coffees become available or when your favorite roasters release new beans. Plan your coffee adventures and expand your palate with intention.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Coffee wishlist planning',
      reverse: false
    }
  ];

  return (
    <section className="bg-brown-800/50">
      {features.map((feature, index) => (
        <FeatureHero key={index} {...feature} />
      ))}
    </section>
  );
}