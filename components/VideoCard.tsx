'use client';

import Link from 'next/link';
import { getThumbnailUrl } from '@/lib/youtube';
import { Episode } from '@/data/episodes';

interface VideoCardProps {
  episode: Episode;
}

export default function VideoCard({ episode }: VideoCardProps) {
  const thumbnailUrl = getThumbnailUrl(episode.videoId);

  return (
    <Link href={`/episodes/${episode.id}`} className="group">
      <div className="bg-cream rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 fade-in">
        <div className="relative aspect-video bg-burgundy overflow-hidden">
          <img
            src={thumbnailUrl}
            alt={episode.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-burgundy ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-serif text-xl font-semibold text-burgundy mb-2 group-hover:text-gold transition-colors">
            {episode.title}
          </h3>
          {episode.description && (
            <p className="text-sm text-burgundy/70 line-clamp-2">
              {episode.description}
            </p>
          )}
          <div className="flex flex-wrap gap-2 mt-3">
            {episode.theme.map((theme) => (
              <span
                key={theme}
                className="px-2 py-1 text-xs bg-gold/20 text-burgundy rounded-full"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

