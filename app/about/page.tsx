export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block shimmer mb-6">
            <div className="w-32 h-32 rounded-full bg-burgundy/20 flex items-center justify-center mx-auto">
              <span className="text-6xl">👑</span>
            </div>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-burgundy mb-4">
            About Queen E
          </h1>
        </div>

        <div className="prose prose-lg max-w-none space-y-6">
          <section className="bg-cream/50 rounded-lg p-8 mb-8">
            <h2 className="font-serif text-2xl font-semibold text-burgundy mb-4">
              Persona Story
            </h2>
            <p className="text-burgundy/80 text-lg leading-relaxed">
              Queen E is a wise elder sharing timeless truths. With grace, wisdom, and unwavering faith,
              she serves as a beacon of light for younger women navigating life&apos;s challenges. Through
              her words and presence, she reminds us that wisdom doesn&apos;t wrinkle—it grows deeper,
              richer, and more valuable with time.
            </p>
          </section>

          <section className="bg-burgundy/5 rounded-lg p-8">
            <h2 className="font-serif text-2xl font-semibold text-burgundy mb-4">
              Mission Statement
            </h2>
            <p className="text-burgundy/80 text-lg leading-relaxed">
              Queen E is dedicated to empowering younger women with wisdom and faith. Through her
              inspiring episodes and compassionate guidance, she addresses the core themes of Faith,
              Relationships, Boundaries, and Self-Worth. Her mission is to help women recognize their
              inherent value, build strong foundations, and walk confidently in their purpose.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl font-semibold text-burgundy mb-4">
              Core Values
            </h2>
            <ul className="space-y-4 text-burgundy/80 text-lg">
              <li className="flex items-start">
                <span className="text-gold mr-3">✦</span>
                <span><strong className="text-burgundy">Faith:</strong> Grounding life in spiritual wisdom and divine guidance</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">✦</span>
                <span><strong className="text-burgundy">Relationships:</strong> Building healthy, meaningful connections with others</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">✦</span>
                <span><strong className="text-burgundy">Boundaries:</strong> Understanding the power of saying &quot;no&quot; and protecting your peace</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">✦</span>
                <span><strong className="text-burgundy">Self-Worth:</strong> Recognizing and embracing your inherent value and dignity</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

