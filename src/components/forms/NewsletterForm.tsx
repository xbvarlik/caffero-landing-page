import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { translations } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://caffero-landing-backend.onrender.com/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Failed to subscribe');

      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={translations.newsletter.placeholder}
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-brown-400"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-brown-600 text-white rounded-lg hover:bg-brown-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? translations.newsletter.button.loading : translations.newsletter.button.idle}
          </button>
        </div>
        {status === 'success' && (
          <p className="text-center text-green-400">{translations.newsletter.success}</p>
        )}
        {status === 'error' && (
          <p className="text-center text-red-400">{translations.newsletter.error}</p>
        )}
      </form>
    </div>
  );
}