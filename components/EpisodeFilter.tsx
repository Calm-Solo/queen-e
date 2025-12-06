'use client';

import { EpisodeTheme } from '@/data/episodes';

interface EpisodeFilterProps {
  activeTheme: EpisodeTheme;
  onThemeChange: (theme: EpisodeTheme) => void;
}

const themes: EpisodeTheme[] = ['All', 'Faith', 'Relationships', 'Boundaries', 'Self-Worth'];

export default function EpisodeFilter({ activeTheme, onThemeChange }: EpisodeFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {themes.map((theme) => (
        <button
          key={theme}
          onClick={() => onThemeChange(theme)}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            activeTheme === theme
              ? 'bg-burgundy text-cream shadow-lg'
              : 'bg-cream text-burgundy hover:bg-burgundy/10 border-2 border-burgundy'
          }`}
        >
          {theme}
        </button>
      ))}
    </div>
  );
}

