'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // TODO: Replace with actual email service integration (e.g., Mailchimp, ConvertKit)
    // For now, just simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setEmail('');
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 rounded-full border-2 border-burgundy/20 focus:border-burgundy focus:outline-none text-burgundy placeholder:text-burgundy/40 bg-white"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-burgundy text-cream rounded-full font-semibold hover:bg-burgundy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
            Thank you for subscribing! You&apos;ll receive Queen&apos;s Weekly Blessing soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            Something went wrong. Please try again later.
          </div>
        )}

        <p className="text-sm text-burgundy/60 text-center">
          Sign up for &ldquo;Queen&apos;s Weekly Blessing&rdquo; to receive wisdom and inspiration.
        </p>
      </form>
    </div>
  );
}

