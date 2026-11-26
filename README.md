# MAHESH.SYS — Portfolio of Mahesh Jaiswal

A personal portfolio built as a **live runtime control panel**. Built with **Angular 20** (standalone components,
signals, new control flow), SCSS and zero external UI libraries.

## Unique features

- **Boot sequence intro** — the site "boots" like an OS on first visit (once per session, click to skip, `?noboot` to bypass)
- **Command palette** — press `Ctrl+K` to navigate like a developer tool
- **Live telemetry hero** — animated canvas performance graph, real-time career uptime counter, status LEDs
- **Skills as loaded modules** — service cards with animated proficiency bars
- **Experience as a process tree** — career history rendered like `ps --tree`
- **Projects as deployed services** — window-chrome cards with expandable `tail -f` logs
- **Terminal contact section** — SSH-styled contact card with copy-to-clipboard
- **Deep links** — `/#skills`, `/#projects`, etc. scroll straight to a section
- Fully responsive (mobile → desktop), respects `prefers-reduced-motion`

## Commands

```bash
npm start          # dev server → http://localhost:4200
npm run build      # production build → dist/mahesh-portfolio
```

## Editing content

All text/content lives in one file: [`src/app/data/resume.data.ts`](src/app/data/resume.data.ts)
— profile, skills, experience, projects, boot lines. Update it and the whole site follows.

Static assets live in [`public/`](public/): `profile.jpg` (photo) and
`Mahesh_Jaiswal_Senior_Software_Engineer_DotNet_FullStack_AI.pdf` (resume download).

## Deploying

The production build is a static site (`dist/mahesh-portfolio/browser`) — host it
anywhere: GitHub Pages, Azure Static Web Apps, Netlify, Vercel or Azure Blob static hosting.
