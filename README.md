# Pratham Satani — Portfolio

Personal site for Pratham Satani, ML engineer in Boston: [pratham-satani.vercel.app](https://pratham-satani.vercel.app)

Built with Next.js 15 (App Router), React 18, TypeScript and Tailwind CSS. It's one page in a minimal editorial style, with light and dark mode that follow the OS setting.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Where things live

| What | Where |
|---|---|
| Page sections (content is inlined at the top of each file) | `src/sections/*.tsx` |
| Section order | `src/app/page.tsx` |
| Colour tokens (light + dark) and shared classes | `src/app/globals.css` |
| Tailwind theme (colours, fonts, type scale) | `tailwind.config.ts` |
| Fonts, page metadata | `src/app/layout.tsx` |
| Social preview image, robots, sitemap | `src/app/opengraph-image.tsx`, `robots.ts`, `sitemap.ts` |
| Résumé and portrait | `public/docs/`, `public/images/` |

To update the résumé, replace `public/docs/Pratham_Satani_MLE.pdf` and keep the same filename.

The contact form has no backend. Submitting it opens the visitor's email client with a prefilled message.

## Design

The Figma design is at [Portfolio Redesign — Minimal Editorial](https://www.figma.com/design/5GxbyjBmuwvvZCuw8XOeuS). The type is Instrument Serif for display, Inter for body and JetBrains Mono for labels.

## Deploy

Deployed on Vercel. Pushing to `main` deploys to production.
