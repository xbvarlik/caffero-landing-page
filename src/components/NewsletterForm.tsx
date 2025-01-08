import React, { useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-brown-400"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-brown-600 text-white rounded-lg hover:bg-brown-700 transition-colors"
        >
          Subscribe
        </button>
      </div>
      {status === 'success' && (
        <p className="mt-2 text-green-400">Thanks for subscribing!</p>
      )}
    </form>
  );
}