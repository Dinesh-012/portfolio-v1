# Dinesh Kumar S — Backend Developer Portfolio

Single-page portfolio built with **React 18**, **Vite 5**, **TypeScript**, **Tailwind CSS 3**, **Framer Motion**, and **Lucide** icons.

## Prerequisites

- Node.js 18+ (20 LTS recommended)
- npm 9+

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

- **Dev server:** http://localhost:5173  
- **Production output:** `dist/` (static files ready for any host)

## Updating content

Edit typed data files—no need to hunt through JSX:

| File | Contents |
|------|----------|
| `src/data/profile.ts` | Name, contact, summary, resume download URL |
| `src/data/skills.ts` | Skill groups and chips |
| `src/data/projects.ts` | Featured projects |
| `src/data/experience.ts` | Work history |
| `src/data/education.ts` | Education |

## Assets

- Profile photo: `public/assets/profile/photo.png`
- Resume PDF: `public/assets/resume/Dinesh-Kumar-S-Resume.pdf`

After replacing the PDF, keep `resumeDownloadUrl` in `profile.ts` in sync.

## Project structure

```
src/
  components/ui/       Reusable UI (Button, GlassPanel, LoadingSpinner, …)
  components/layout/   Navbar, Footer, ScrollProgress
  components/sections/ Page sections
  data/                Site copy and links
  hooks/               Scroll spy, reduced motion
  lib/constants.ts     Section IDs and navigation
```

## Theming

- **Default:** dark mode (`html.dark`).
- **Toggle:** navbar sun/moon control; preference stored in `localStorage` under `theme`.
- **Tokens:** indigo primary + cyan accent in [`tailwind.config.ts`](tailwind.config.ts); glass cards via `.glass-card` in [`src/styles/index.css`](src/styles/index.css).
- **Fonts:** Inter (UI), JetBrains Mono (hero mono line).

To swap hero photo shape, see comments in [`src/components/sections/Hero.tsx`](src/components/sections/Hero.tsx) (portrait active, round variant commented).

## License

Private portfolio — all rights reserved.
