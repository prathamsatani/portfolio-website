const experience = [
  ["Jun 2026 — Now", "Data Scientist Co-op", "Northeastern University · Portland, ME", "AI-native digital-risk-protection pipeline across text, image and video."],
  ["Jan — Jun 2025", "AI Engineer Intern", "Softmax AI", "Agentic RAG framework that cut support workload 80%; 95% retrieval accuracy, sub-1s latency."],
  ["Jan — Dec 2024", "Machine Learning Engineer", "CasePoint", "Multimodal apparel recommender (fashionSigLIP + Vertex AI Vector Search) over 1.6M products."],
];

const education = [
  ["Sep 2025 — Dec 2027", "M.S. Artificial Intelligence", "Northeastern University · Boston, MA", "Graduate studies in AI."],
  ["2021 — 2025", "B.Tech, Information Technology", "Gujarat Technological University · BVM", "Chairperson, ML Club · Secretary, IEEE CS BVM SB"],
];

const columns = [
  ["Experience", experience],
  ["Education", education],
] as const;

export default function Experience() {
  return (
    <section id="experience" className="section wrap" aria-labelledby="experience-title">
      <div className="flex items-baseline gap-6 border-b border-hairline pb-5">
        <span className="label text-accent">02</span>
        <h2 id="experience-title" className="font-serif text-display-l">
          Experience &amp; Education
        </h2>
      </div>
      <div className="grid gap-16 pt-10 md:grid-cols-2 md:gap-6">
        {columns.map(([title, rows]) => (
          <div key={title}>
            <h3 className="label border-b border-hairline pb-4 text-muted">{title}</h3>
            <ul>
              {rows.map(([period, role, org, note]) => (
                <li key={role} className="border-b border-hairline py-7">
                  <p className="label text-muted">{period}</p>
                  <h4 className="mt-3 font-serif text-display-s">{role}</h4>
                  <p className="mt-1 text-muted">{org}</p>
                  <p className="mt-3 text-body-s text-muted">{note}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
