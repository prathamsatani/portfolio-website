"use client";

import { useState } from "react";

const links = [
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

const Links = ({ onClick }: { onClick?: () => void }) => (
  <>
    {links.map(([label, href]) => (
      <li key={href}>
        <a href={href} onClick={onClick} className="label hover:text-accent">
          {label}
        </a>
      </li>
    ))}
    <li>
      <a href="/docs/Pratham_Satani_MLE.pdf" target="_blank" rel="noopener" className="label text-accent hover:underline">
        Résumé ↗
      </a>
    </li>
  </>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-10 border-b border-hairline bg-page">
      <nav aria-label="Primary" className="wrap flex h-16 items-center justify-between">
        <a href="#" className="font-serif text-display-s">
          Pratham Satani
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          <Links />
        </ul>
        <button
          type="button"
          className="label md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="wrap flex flex-col gap-5 border-t border-hairline py-6 md:hidden">
          <Links onClick={() => setOpen(false)} />
        </ul>
      )}
    </header>
  );
}
