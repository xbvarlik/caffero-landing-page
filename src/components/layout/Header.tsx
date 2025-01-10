import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { useState } from 'react';
import { env } from '../../config/env';
import { useLanguage } from '../../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { translations } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-brown-900/95 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-brown-700/30 p-2 rounded-full flex items-center justify-center w-12 h-12">
              <img
                src={env.LOGO_PATH}
                alt={`${env.APP_NAME} ${translations.accessibility.logo}`}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-2xl font-bold">{env.APP_NAME}</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#discover">{translations.nav.discover}</NavLink>
            <NavLink href="#scan">{translations.nav.scan}</NavLink>
            <NavLink href="#shelf">{translations.nav.myShelf}</NavLink>
            <NavLink href="#recipes">{translations.nav.recipes}</NavLink>
            <NavLink href="#wishlist">{translations.nav.wishlist}</NavLink>
            <LanguageSwitcher />
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher />
            <button 
              className="z-50" 
              onClick={toggleMenu}
              aria-label={translations.accessibility.toggleMenu}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-brown-900 md:hidden pt-20">
          <nav className="container mx-auto px-4 flex flex-col items-center gap-8 py-8">
            <NavLink href="#discover" onClick={() => setIsMenuOpen(false)}>{translations.nav.discover}</NavLink>
            <NavLink href="#scan" onClick={() => setIsMenuOpen(false)}>{translations.nav.scan}</NavLink>
            <NavLink href="#shelf" onClick={() => setIsMenuOpen(false)}>{translations.nav.myShelf}</NavLink>
            <NavLink href="#recipes" onClick={() => setIsMenuOpen(false)}>{translations.nav.recipes}</NavLink>
            <NavLink href="#wishlist" onClick={() => setIsMenuOpen(false)}>{translations.nav.wishlist}</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}