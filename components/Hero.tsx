'use client';

import Image from 'next/image';

interface HeroProps {
  featuredVideoId?: string;
}

export default function Hero({ featuredVideoId }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-burgundy/20 to-cream py-16 md:py-24 fade-in">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="mb-6">
              <div className="inline-block shimmer mb-4 mx-auto md:mx-0">
                {/* Framed container with texture and shadows for better integration */}
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 relative mx-auto md:mx-0">
                  {/* Outer shadow layers for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-burgundy/20 via-cream/40 to-gold/20 rounded-full blur-2xl transform scale-110"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/15 to-burgundy/15 rounded-full blur-xl"></div>
                  
                  {/* Decorative frame with texture */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cream/90 via-cream/70 to-cream/90 rounded-full p-3 md:p-4 shadow-[0_8px_32px_rgba(128,0,32,0.25),inset_0_2px_8px_rgba(212,175,55,0.1)] border-2 border-gold/20">
                    {/* Inner texture overlay */}
                    <div className="absolute inset-0 rounded-full opacity-30" style={{
                      backgroundImage: `radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                                       radial-gradient(circle at 70% 70%, rgba(128, 0, 32, 0.1) 0%, transparent 50%)`
                    }}></div>
                    
                    {/* Logo container with padding */}
                    <div className="relative w-full h-full">
                      <div className="absolute inset-4 md:inset-5 lg:inset-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.15),0_0_24px_rgba(212,175,55,0.25)]">
                        <Image
                          src="/images/backgroundphoto5.jpeg"
                          alt="Queen E Logo"
                          fill
                          className="object-contain"
                          priority
                          style={{ 
                            filter: 'drop-shadow(0 2px 12px rgba(128, 0, 32, 0.3)) drop-shadow(0 0 16px rgba(212, 175, 55, 0.2))'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full ring-4 ring-gold/10 ring-offset-2 ring-offset-cream/50"></div>
                </div>
              </div>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-burgundy mb-4">
              Queen E
            </h1>
            <p className="font-serif text-2xl md:text-3xl text-gold mb-6">
              &ldquo;Wisdom doesn&apos;t wrinkle.&rdquo;
            </p>
            <p className="text-lg text-burgundy/80 max-w-xl">
              A wise Queen sharing timeless truths. Empowering younger women with wisdom and faith.
            </p>
          </div>
          
          {featuredVideoId && (
            <div className="flex-1 w-full max-w-2xl">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${featuredVideoId}`}
                  title="Featured Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

