const projects = [
  {
    category: "RAG · GenAI",
    title: "WebGPT",
    description:
      "Web-scale RAG system: crawls sites, chunks and embeds content into ChromaDB, and serves grounded Gemini answers via FastAPI with Phoenix tracing.",
    tags: ["FastAPI", "ChromaDB", "Postgres"],
    href: "https://github.com/prathamsatani/webgpt",
  },
  {
    category: "Agentic AI",
    title: "Product Discovery Agent",
    description:
      "Multi-agent e-commerce assistant: a LangGraph supervisor routes queries to data-lookup, ordering and policy agents, streamed to a Next.js UI.",
    tags: ["LangGraph", "Gemini", "Next.js"],
    href: "https://github.com/prathamsatani/ai-agent-for-product-discovery",
  },
  {
    category: "Deep learning",
    title: "GPT from Scratch",
    description:
      "A working GPT assembled from first principles — attention, multi-head attention and transformer blocks written by hand.",
    tags: ["Python", "PyTorch", "Transformers"],
    href: "https://github.com/prathamsatani/neetcode-gpt",
  },
  {
    category: "NLP",
    title: "ANLI NLI Pipeline",
    description:
      "Config-driven multiclass natural-language-inference pipeline on Facebook ANLI-R2: entailment, neutral, contradiction.",
    tags: ["HuggingFace", "PyTorch", "YAML"],
    href: "https://github.com/prathamsatani/anli-nli-pipeline",
  },
  {
    category: "ML · Agritech",
    title: "KrishiMitra",
    description: "ML-driven crop recommendation; Random Forest and XGBoost models reaching 92% cross-validated accuracy.",
    tags: ["scikit-learn", "XGBoost", "Django"],
    href: "https://github.com/prathamsatani/KrishiMitra-Server",
  },
  {
    category: "Data · Analytics",
    title: "BI Dashboard",
    description:
      "Self-service analytics: upload CSV/Excel, auto-clean, and explore interactive visualizations. Live on Hugging Face Spaces.",
    tags: ["Pandas", "Gradio", "Plotly"],
    href: "https://huggingface.co/spaces/titanite09/business-intelligence-dashboard",
  },
];

export default function Work() {
  return (
    <section id="work" className="section wrap" aria-labelledby="work-title">
      <div className="flex items-baseline gap-6 border-b border-hairline pb-5">
        <span className="label text-accent">01</span>
        <h2 id="work-title" className="font-serif text-display-l">
          Selected work
        </h2>
      </div>
      <ul className="mt-16 grid gap-x-6 gap-y-[72px] md:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.href}>
            <a href={p.href} target="_blank" rel="noopener" className="group block">
              <div aria-hidden className="aspect-[16/10] rounded bg-hairline" />
              <p className="label mt-6 flex gap-4">
                <span className="text-muted">P/0{i + 1}</span>
                <span className="text-accent">{p.category}</span>
              </p>
              <h3 className="mt-3 font-serif text-display-m group-hover:underline">{p.title}</h3>
              <p className="mt-3 text-muted">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
      <a
        href="https://github.com/prathamsatani?tab=repositories"
        target="_blank"
        rel="noopener"
        className="label mt-16 inline-block text-accent hover:underline"
      >
        All projects on GitHub ↗
      </a>
    </section>
  );
}
