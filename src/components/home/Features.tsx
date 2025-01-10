import React from 'react';
import { Scan, Coffee, BookMarked, ChefHat, List } from 'lucide-react';
import { FeatureHero } from './FeatureHero';
import { useLanguage } from '../../contexts/LanguageContext';

export function Features() {
  const { translations } = useLanguage();

  const features = [
    {
      id: 'discover',
      icon: Coffee,
      title: translations.features.discover.title,
      description: translations.features.discover.description,
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80',
      imageAlt: translations.features.discover.imageAlt,
      reverse: false
    },
    {
      id: 'scan',
      icon: Scan,
      title: translations.features.scan.title,
      description: translations.features.scan.description,
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80',
      imageAlt: translations.features.scan.imageAlt,
      reverse: true,
      showScanFrame: true
    },
    {
      id: 'shelf',
      icon: BookMarked,
      title: translations.features.shelf.title,
      description: translations.features.shelf.description,
      image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=1200&q=80',
      imageAlt: translations.features.shelf.imageAlt,
      reverse: false
    },
    {
      id: 'recipes',
      icon: ChefHat,
      title: translations.features.recipes.title,
      description: translations.features.recipes.description,
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
      imageAlt: translations.features.recipes.imageAlt,
      reverse: true
    },
    {
      id: 'wishlist',
      icon: List,
      title: translations.features.wishlist.title,
      description: translations.features.wishlist.description,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
      imageAlt: translations.features.wishlist.imageAlt,
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