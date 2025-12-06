export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: 'events' | 'achievements' | 'awards' | 'members';
}

export const galleryImages: GalleryImage[] = [
  // Placeholder images - to be replaced with actual images
  {
    id: '1',
    src: '/images/placeholder-1.jpg',
    alt: 'Queen E Event',
    category: 'events',
  },
  {
    id: '2',
    src: '/images/placeholder-2.jpg',
    alt: 'Achievement',
    category: 'achievements',
  },
  {
    id: '3',
    src: '/images/placeholder-3.jpg',
    alt: 'Award',
    category: 'awards',
  },
];

