'use client';

import { useState } from 'react';

export default function QuestionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // TODO: Replace with actual email API integration
    // For now, just simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', question: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-burgundy mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border-2 border-burgundy/30 focus:border-burgundy focus:outline-none bg-cream text-burgundy"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-burgundy mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border-2 border-burgundy/30 focus:border-burgundy focus:outline-none bg-cream text-burgundy"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="question" className="block text-sm font-medium text-burgundy mb-2">
            Your Question
          </label>
          <textarea
            id="question"
            name="question"
            value={formData.question}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-2 rounded-lg border-2 border-burgundy/30 focus:border-burgundy focus:outline-none bg-cream text-burgundy resize-none"
            placeholder="Ask Queen E your question..."
          />
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            Thank you for your question! Queen E will get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            Something went wrong. Please try again later.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-burgundy text-cream px-6 py-3 rounded-lg font-semibold hover:bg-burgundy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Question'}
        </button>

        <p className="text-sm text-burgundy/60 text-center">
          Note: Email integration will be configured soon. Your question is being saved for processing.
        </p>
      </form>
    </div>
  );
}

