import React, { useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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
            placeholder="Enter your email for early access"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-brown-400"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-brown-600 text-white rounded-lg hover:bg-brown-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Joining...' : 'Join'}
          </button>
        </div>
        {status === 'success' && (
          <p className="text-center text-green-400">Thanks for joining! We'll notify you when Caffero launches.</p>
        )}
        {status === 'error' && (
          <p className="text-center text-red-400">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}