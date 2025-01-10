import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { translations } = useLanguage();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-brown-600 p-3 rounded-lg shadow-lg hover:bg-brown-700 transition-colors z-50"
      aria-label={translations.accessibility.scrollToTop}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  ) : null;
}