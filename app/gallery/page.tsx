import { galleryImages } from '@/data/gallery';

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12 fade-in">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-burgundy mb-4">
          Gallery
        </h1>
        <p className="text-lg text-burgundy/70 max-w-2xl mx-auto">
          Celebrate special moments, achievements, and the community that makes Queen E&apos;s mission possible.
        </p>
      </div>

      {galleryImages.length === 0 || galleryImages.every(img => img.src.includes('placeholder')) ? (
        <div className="text-center py-12">
          <p className="text-burgundy/60 text-lg mb-4">
            Gallery images will be added soon.
          </p>
          <p className="text-burgundy/50 text-sm">
            This section will showcase events, achievements, awards, and pictures of viewers and members.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square bg-burgundy/10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-cream/50">
                <span className="text-4xl">📸</span>
              </div>
              {image.category && (
                <div className="absolute top-2 right-2 bg-burgundy/80 text-cream px-3 py-1 rounded-full text-xs font-medium">
                  {image.category}
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-burgundy/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-cream font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 text-center">
        <p className="text-burgundy/60 text-sm">
          To add images to the gallery, place them in the <code className="bg-cream px-2 py-1 rounded">public/images/</code> directory
          and update <code className="bg-cream px-2 py-1 rounded">data/gallery.ts</code>
        </p>
      </div>
    </div>
  );
}

