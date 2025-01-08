import React, { useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
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
            className="px-6 py-3 bg-brown-600 text-white rounded-lg hover:bg-brown-700 transition-colors"
          >
            Join
          </button>
        </div>
        {status === 'success' && (
          <p className="text-center text-green-400">Thanks for joining! We'll notify you when Caffero launches.</p>
        )}
      </form>
    </div>
  );
}