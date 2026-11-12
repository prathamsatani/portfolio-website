const stats = [
  ["1.6M", "products embedded for multimodal retrieval"],
  ["95%", "retrieval accuracy on a production RAG agent"],
  ["80%", "less repetitive support work, via agentic RAG"],
];

export default function About() {
  return (
    <section className="bg-surface" aria-labelledby="about-title">
      <div className="section wrap grid gap-8 md:grid-cols-[280px_1fr]">
        <h2 id="about-title" className="label text-muted">
          About
        </h2>
        <div>
          <p className="font-serif text-display-m">
            I like owning the whole loop — data, model, API and the interface around it — then measuring whether it
            actually helped. Lately that means agentic RAG, multimodal embeddings at scale, and evaluation that catches
            drift before users do.
          </p>
          <ul className="mt-16 grid gap-8 sm:grid-cols-3">
            {stats.map(([value, caption]) => (
              <li key={value} className="border-t border-hairline pt-5">
                <p className="font-serif text-display-l text-accent">{value}</p>
                <p className="mt-2 text-body-s text-muted">{caption}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
