export type EpisodeTheme = 'Faith' | 'Relationships' | 'Boundaries' | 'Self-Worth' | 'All';

export interface Episode {
  id: string;
  title: string;
  url: string;
  videoId: string;
  theme: EpisodeTheme[];
  description?: string;
}

export const episodes: Episode[] = [
  {
    id: '1',
    title: "The Power of No",
    url: "https://youtube.com/shorts/JX1h2l6E78I?si=TTFbIn06oWoQWrhw",
    videoId: "JX1h2l6E78I",
    theme: ['Boundaries', 'Self-Worth'],
    description: "Learn about the power of setting boundaries and saying no.",
  },
  {
    id: '2',
    title: "Faith Through Fire",
    url: "https://youtube.com/shorts/qC9q8ygDtvQ?si=1A-7Qp1S6G3iWmsk",
    videoId: "qC9q8ygDtvQ",
    theme: ['Faith'],
    description: "Discover how faith can guide you through life's toughest challenges.",
  },
];

