import Hero from '@/components/Hero';
import { episodes } from '@/data/episodes';
import NewsletterForm from '@/components/NewsletterForm';

export default function Home() {
  // Featured video ID for Hero section (separate from episodes list)
  const featuredVideoId = "vw6xxkmJ-mc";

  return (
    <div className="fade-in">
      <Hero featuredVideoId={featuredVideoId} />
      
      {/* Latest Episodes Section */}
      <section className="relative py-24 bg-gradient-to-b from-cream via-white to-cream overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-burgundy rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* Decorative line above */}
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold"></div>
              <div className="mx-4">
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold"></div>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy mb-6 tracking-tight">
              Latest Episodes
            </h2>
            <p className="text-lg md:text-xl text-burgundy/70 max-w-2xl mx-auto leading-relaxed">
              Discover timeless wisdom through Queen E&apos;s inspiring episodes
            </p>
          </div>
          
          {/* Episodes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {episodes.slice(-2).reverse().map((episode, index) => (
              <div 
                key={episode.id} 
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Video Container */}
                <div className="relative aspect-video bg-gradient-to-br from-burgundy to-burgundy/80 overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${episode.videoId}`}
                    title={episode.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gold/20 rounded-bl-full"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full mb-3">
                        Episode {episodes.length - index}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-burgundy mb-3 group-hover:text-burgundy/80 transition-colors leading-tight">
                        {episode.title}
                      </h3>
                    </div>
                  </div>
                  {episode.description && (
                    <p className="text-burgundy/70 leading-relaxed mb-4">
                      {episode.description}
                    </p>
                  )}
                  {/* Watch indicator */}
                  <div className="flex items-center text-sm text-burgundy/50 group-hover:text-burgundy/70 transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                    Watch now
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center">
            <a
              href="/episodes"
              className="group inline-flex items-center gap-3 bg-burgundy text-cream px-10 py-4 rounded-full font-semibold text-lg hover:bg-burgundy/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Episodes
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="relative py-24 bg-gradient-to-br from-burgundy via-burgundy to-burgundy/90 overflow-hidden">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Image placeholder - left side */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20 hidden lg:block">
          <div className="w-full h-full bg-gold/30 rounded-full blur-3xl"></div>
          {/* Replace above with: <img src="/path-to-decorative-image.png" alt="" className="w-full h-full object-cover rounded-full" /> */}
        </div>
        
        {/* Image placeholder - right side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20 hidden lg:block">
          <div className="w-full h-full bg-gold/30 rounded-full blur-3xl"></div>
          {/* Replace above with: <img src="/path-to-decorative-image.png" alt="" className="w-full h-full object-cover rounded-full" /> */}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Icon placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              {/* Placeholder icon - replace with your custom icon/image */}
              <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 tracking-tight">
            Join the Community
          </h2>
          <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Have a question? Ask Queen E and receive wisdom tailored to your journey.
          </p>
          
          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-2xl mx-auto">
            <span className="px-4 py-2 bg-cream/10 backdrop-blur-sm text-cream rounded-full text-sm font-medium border border-cream/20">
              ✨ Personal Guidance
            </span>
            <span className="px-4 py-2 bg-cream/10 backdrop-blur-sm text-cream rounded-full text-sm font-medium border border-cream/20">
              💬 Community Support
            </span>
            <span className="px-4 py-2 bg-cream/10 backdrop-blur-sm text-cream rounded-full text-sm font-medium border border-cream/20">
              🌟 Timeless Wisdom
            </span>
          </div>
          
          <a
            href="/community"
            className="group inline-flex items-center gap-3 bg-gold text-burgundy px-10 py-4 rounded-full font-semibold text-lg hover:bg-gold/90 transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:scale-105"
          >
            Ask Queen E
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>

      {/* Newsletter/Subscribe Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gold/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-burgundy/10 to-transparent rounded-tr-full"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-burgundy mb-4">
                Stay Connected
              </h3>
              <p className="text-lg text-burgundy/70 mb-8 max-w-2xl mx-auto">
                Subscribe to receive updates on new episodes and exclusive wisdom from Queen E
              </p>
              
              {/* Newsletter Form - Styled to match enhanced design */}
              <div className="max-w-md mx-auto">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
