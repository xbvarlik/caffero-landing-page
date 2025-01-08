import React from 'react';
import { Menu } from 'lucide-react';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <header className="bg-brown-900/95 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/coffee-maker-logo.png"
              alt="Caffero Logo" 
              className="w-12 h-12"
            />
            <span className="text-2xl font-bold">Caffero</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#discover">Discover</NavLink>
            <NavLink href="#scan">Scan</NavLink>
            <NavLink href="#shelf">My Shelf</NavLink>
            <NavLink href="#recipes">Recipes</NavLink>
            <NavLink href="#wishlist">Wishlist</NavLink>
          </nav>

          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}