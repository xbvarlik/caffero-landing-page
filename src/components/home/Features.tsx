import React from 'react';
import { Scan, Coffee, BookMarked, ChefHat, List } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  const features = [
    {
      icon: Coffee,
      title: 'Discover',
      description: 'Explore curated coffee selections from around the world'
    },
    {
      icon: Scan,
      title: 'Smart Scan',
      description: 'Instantly identify coffee packages and add to your collection'
    },
    {
      icon: BookMarked,
      title: 'Digital Shelf',
      description: 'Keep track of your coffee inventory and equipment'
    },
    {
      icon: ChefHat,
      title: 'Recipes',
      description: 'Create and share your perfect brewing recipes'
    },
    {
      icon: List,
      title: 'Wishlist',
      description: 'Save coffees you want to try next'
    }
  ];

  return (
    <section className="py-20 bg-brown-800/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}