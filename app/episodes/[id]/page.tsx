import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { episodes } from '@/data/episodes';

interface EpisodePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return episodes.map((episode) => ({
    id: episode.id,
  }));
}

export async function generateMetadata({ params }: EpisodePageProps): Promise<Metadata> {
  const { id } = await params;
  const episode = episodes.find((ep) => ep.id === id);

  if (!episode) {
    return {
      title: 'Episode Not Found',
    };
  }

  return {
    title: `${episode.title} - Queen E`,
    description: episode.description || `Watch ${episode.title} by Queen E`,
  };
}

export default async function EpisodePage({ params }: EpisodePageProps) {
  const { id } = await params;
  const episode = episodes.find((ep) => ep.id === id);

  if (!episode) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 fade-in">
      <Link
        href="/episodes"
        className="inline-flex items-center text-burgundy hover:text-gold mb-6 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Episodes
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-burgundy mb-6">
          {episode.title}
        </h1>

        <div className="relative aspect-video bg-burgundy rounded-lg overflow-hidden shadow-2xl mb-8">
          <iframe
            src={`https://www.youtube.com/embed/${episode.videoId}`}
            title={episode.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {episode.description && (
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-burgundy/80 text-lg">{episode.description}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-3 mb-8">
          {episode.theme.map((theme) => (
            <span
              key={theme}
              className="px-4 py-2 bg-gold/20 text-burgundy rounded-full font-medium"
            >
              {theme}
            </span>
          ))}
        </div>

        <div className="border-t border-burgundy/20 pt-8">
          <a
            href={episode.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-burgundy hover:text-gold transition-colors"
          >
            Watch on YouTube
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

