import QuestionForm from '@/components/QuestionForm';

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-12 fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-burgundy mb-4">
            Ask Queen E
          </h1>
          <p className="text-lg text-burgundy/70 max-w-2xl mx-auto">
            Have a question about faith, relationships, boundaries, or self-worth? Submit your question
            and receive wisdom from Queen E.
          </p>
        </div>

        <div className="bg-cream/50 rounded-lg p-8 md:p-12">
          <QuestionForm />
        </div>

        <div className="mt-12 text-center">
          <p className="text-burgundy/60 text-sm">
            Your questions are valuable and will be answered with care and wisdom. Please allow some time
            for Queen E to respond.
          </p>
        </div>
      </div>
    </div>
  );
}

