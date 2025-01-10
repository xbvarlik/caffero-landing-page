import { Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-5 h-5" />
        <span className="uppercase">{language}</span>
      </button>
      <div className="absolute right-0 mt-2 py-2 w-24 bg-brown-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <button
          className={`w-full px-4 py-2 text-left hover:bg-brown-700 transition-colors ${
            language === 'en' ? 'text-brown-400' : 'text-gray-400'
          }`}
          onClick={() => setLanguage('en')}
        >
          English
        </button>
        <button
          className={`w-full px-4 py-2 text-left hover:bg-brown-700 transition-colors ${
            language === 'tr' ? 'text-brown-400' : 'text-gray-400'
          }`}
          onClick={() => setLanguage('tr')}
        >
          Türkçe
        </button>
      </div>
    </div>
  );
} 