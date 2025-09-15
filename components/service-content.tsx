interface ServiceContentProps {
  content: string;
}

export function ServiceContent({ content }: ServiceContentProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <div className="text-slate-700 leading-relaxed whitespace-pre-line">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}
