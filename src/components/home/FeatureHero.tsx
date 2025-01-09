import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureHeroProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export function FeatureHero({ id, icon: Icon, title, description, image, imageAlt, reverse }: FeatureHeroProps) {
  return (
    <div id={id} className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} items-center justify-center gap-16 max-w-7xl mx-auto`}>
          <div className="flex-1 max-w-xl">
            <div className="lg:mx-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brown-700/30 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-brown-400" />
                </div>
                <h2 className="text-4xl font-bold">{title}</h2>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">{description}</p>
            </div>
          </div>
          <div className="flex-1 max-w-xl w-full">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}