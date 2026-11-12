import Image from "next/image";

const socials = [
  ["GitHub", "https://github.com/prathamsatani"],
  ["LinkedIn", "https://linkedin.com/in/prathamsatani"],
  ["X", "https://x.com/prathahahaham"],
  ["Instagram", "https://www.instagram.com/oye.pratham"],
];

export default function Hero() {
  return (
    <section className="section wrap fade-in" aria-labelledby="hero-title">
      <div className="grid gap-12 md:grid-cols-[1fr_400px] md:items-center">
        <div className="relative h-[400px] w-full overflow-hidden rounded md:order-last md:h-[500px]">
          <Image
            src="/images/Pratham.jpg"
            alt="Portrait of Pratham Satani"
            fill
            priority
            sizes="(min-width: 768px) 400px, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="label text-accent">● ML Engineer · MS AI @ Northeastern · Boston, MA</p>
          <h1 id="hero-title" className="mt-6 font-serif text-display-xl">
            Machine learning, built for <em className="text-accent">the real world</em>.
          </h1>
          <p className="mt-8 max-w-[640px] text-body-l text-muted">
            I build production ML — RAG and agentic systems, multimodal retrieval, and the pipelines that keep them
            honest. Currently a Data Scientist Co-op while pursuing an M.S. in AI at Northeastern.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="btn-primary">
              View selected work →
            </a>
            <a href="/docs/Pratham_Satani_MLE.pdf" target="_blank" rel="noopener" className="btn">
              Download résumé →
            </a>
          </div>
        </div>
      </div>
      <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3">
        {socials.map(([label, href]) => (
          <li key={href}>
            <a href={href} target="_blank" rel="noopener" className="label text-muted hover:text-accent">
              {label} ↗
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
