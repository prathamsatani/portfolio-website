const groups = [
  ["Generative & agentic", ["LangChain", "LangGraph", "LangSmith", "RAG", "LLMs", "Prompt eng."]],
  ["Machine learning", ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "HuggingFace", "statsmodels"]],
  ["MLOps & serving", ["Docker", "Kubernetes", "MLflow", "DVC", "GitHub Actions", "FastAPI", "Flask"]],
  ["Cloud", ["GCP Vertex AI", "Cloud Run", "BigQuery", "AWS Bedrock", "SageMaker", "DynamoDB"]],
  ["Languages & data", ["Python", "C++", "TypeScript", "SQL", "NoSQL", "NumPy", "Pandas"]],
  ["Vector stores", ["Chroma", "Milvus", "FAISS", "Pinecone"]],
] as const;

export default function Toolkit() {
  return (
    <section id="skills" className="bg-surface" aria-labelledby="skills-title">
      <div className="section wrap">
        <div className="flex items-baseline gap-6 border-b border-hairline pb-5">
          <span className="label text-accent">03</span>
          <h2 id="skills-title" className="font-serif text-display-l">
            Toolkit
          </h2>
        </div>
        <div className="mt-16 grid gap-x-6 gap-y-12 md:grid-cols-3">
          {groups.map(([title, tags]) => (
            <div key={title}>
              <h3 className="font-serif text-display-s">{title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
