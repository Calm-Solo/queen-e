import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="font-serif text-6xl font-bold text-burgundy mb-4">404</h1>
      <h2 className="font-serif text-3xl font-semibold text-burgundy mb-4">
        Page Not Found
      </h2>
      <p className="text-burgundy/70 text-lg mb-8">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-block bg-burgundy text-cream px-8 py-3 rounded-lg font-semibold hover:bg-burgundy/90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}

