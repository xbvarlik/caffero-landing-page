import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { useState } from 'react';
import { env } from '../../config/env';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-brown-900/95 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-brown-700/30 p-2 rounded-full flex items-center justify-center w-12 h-12">
              <img
                src={env.LOGO_PATH}
                alt={`${env.APP_NAME} Logo`}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-2xl font-bold">{env.APP_NAME}</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#discover">Discover</NavLink>
            <NavLink href="#scan">Scan</NavLink>
            <NavLink href="#shelf">My Shelf</NavLink>
            <NavLink href="#recipes">Recipes</NavLink>
            <NavLink href="#wishlist">Wishlist</NavLink>
          </nav>

          <button 
            className="md:hidden z-50" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-brown-900 md:hidden pt-20">
          <nav className="container mx-auto px-4 flex flex-col items-center gap-8 py-8">
            <NavLink href="#discover" onClick={() => setIsMenuOpen(false)}>Discover</NavLink>
            <NavLink href="#scan" onClick={() => setIsMenuOpen(false)}>Scan</NavLink>
            <NavLink href="#shelf" onClick={() => setIsMenuOpen(false)}>My Shelf</NavLink>
            <NavLink href="#recipes" onClick={() => setIsMenuOpen(false)}>Recipes</NavLink>
            <NavLink href="#wishlist" onClick={() => setIsMenuOpen(false)}>Wishlist</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}