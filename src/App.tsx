import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

function App() {
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
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Caffero. All rights reserved.</p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}

export default App;