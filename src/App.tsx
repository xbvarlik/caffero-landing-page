import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './contexts/LanguageContext';

function AppContent() {
  const { translations } = useLanguage();

  return (
    <div className="min-h-screen bg-brown-900 text-white">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      
      <footer className="bg-brown-900/50 py-8">
        <div className="container mx-auto px-4 flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/company/cafferocoffee" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/cafferocoffee?igsh=MXRmMzRybm11dnZyYg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://x.com/cafferocoffee?t=t9eiPFMh9oq4N3W2IMgTRQ&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Caffero. {translations.footer.rights}</p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;