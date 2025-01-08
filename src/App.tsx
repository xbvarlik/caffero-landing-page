import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';

function App() {
  return (
    <div className="min-h-screen bg-brown-900 text-white">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      
      <footer className="bg-brown-900/50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Caffero. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;