import VideoGrid from '@/components/VideoGrid';

export default function EpisodesPage() {
  return (
    <div className="container mx-auto px-4 py-12 fade-in">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-burgundy mb-4">
          Episodes
        </h1>
        <p className="text-lg text-burgundy/70 max-w-2xl mx-auto">
          Explore Queen E&apos;s wisdom through her video episodes. Filter by theme to find exactly what you need.
        </p>
      </div>
      
      <VideoGrid />
    </div>
  );
}

