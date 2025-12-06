'use client';

import { useState } from 'react';
import { episodes, EpisodeTheme } from '@/data/episodes';
import VideoCard from './VideoCard';
import EpisodeFilter from './EpisodeFilter';

export default function VideoGrid() {
  const [activeTheme, setActiveTheme] = useState<EpisodeTheme>('All');

  const filteredEpisodes = activeTheme === 'All'
    ? episodes
    : episodes.filter((episode) => episode.theme.includes(activeTheme));

  return (
    <div>
      <EpisodeFilter activeTheme={activeTheme} onThemeChange={setActiveTheme} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEpisodes.map((episode) => (
          <VideoCard key={episode.id} episode={episode} />
        ))}
      </div>
      {filteredEpisodes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-burgundy/60 text-lg">No episodes found for this theme.</p>
        </div>
      )}
    </div>
  );
}

