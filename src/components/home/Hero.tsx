import { NewsletterForm } from '../forms/NewsletterForm';
import { env } from '../../config/env';
import { useLanguage } from '../../contexts/LanguageContext';

export function Hero() {
  const { translations } = useLanguage();

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-brown-900 to-brown-800">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="bg-brown-700/30 p-2 rounded-full mb-8 flex items-center justify-center w-24 h-24">
          <img
            src={env.LOGO_PATH}
            alt={`${env.APP_NAME} ${translations.accessibility.logo}`}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {translations.hero.title.start}{' '}
          <span className="text-brown-400">{translations.hero.title.highlight}</span>{' '}
          {translations.hero.title.end}
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl">
          {translations.hero.description}
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}
