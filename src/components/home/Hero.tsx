import { NewsletterForm } from '../forms/NewsletterForm';
import { env } from '../../config/env';

export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-brown-900 to-brown-800">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="bg-brown-700/30 p-2 rounded-full mb-8 flex items-center justify-center w-24 h-24">
          <img
            src={env.LOGO_PATH}
            alt={`${env.APP_NAME} Logo`}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Your Personal
          <span className="text-brown-400"> Coffee </span>
          Journey
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl">
          Discover new coffees, track your collection, and perfect your brewing
          with Caffero. Scan, save, and share your coffee experiences.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}
