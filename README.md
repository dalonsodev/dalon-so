# dalon.so

**Personal portfolio — Frontend Engineer focused on React, TypeScript, and product systems that actually ship.**

![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)

**🔗 [dalon.so](https://dalon.so)**

---

Most portfolio sites are a list of projects with screenshots and bullet points. This one tries to be honest about what kind of engineer I am and what kind of work I actually do well.

Built with **Astro + TypeScript + Tailwind CSS v4**, deployed on Netlify with CI on push to `main`. Static, fast, zero client-side JS — unless it earns its place.

---

## 🛠️ Tech Stack

| Technology      | Purpose                                                               |
| --------------- | --------------------------------------------------------------------- |
| Astro 5         | Static site generation — zero JS shipped by default                   |
| TypeScript      | Type-safe data layer and component props                              |
| Tailwind CSS v4 | Utility-first styling with CSS-first config (no `tailwind.config.js`) |
| ESLint          | Linting (Astro + TS rules)                                            |
| Prettier        | Formatting                                                            |
| Netlify         | Hosting + CI/CD — auto-deploys on push to `main`                      |

---

## 📂 Project Structure

```
src/
├── components/
│   ├── About.astro
│   ├── ButtonLink.astro
│   ├── Contact.astro
│   ├── Container.astro
│   ├── Head.astro        # SEO, OG tags, canonical — driven by Astro.site
│   ├── Hero.astro
│   ├── Navbar.astro
│   ├── ProjectCard.astro
│   ├── Projects.astro
│   ├── Section.astro
│   └── Stack.astro
├── data/
│   └── projects.ts       # Project data — single source of truth for the Projects section
├── layouts/
│   └── Layout.astro      # Root layout — injects Head, Navbar, skip link
├── pages/
│   └── index.astro
└── styles/
    └── global.css
public/
├── dalonso-resume.pdf
├── favicon.svg
├── og.png
└── robots.txt
```

---

## 🚀 Commands

All commands run from the project root:

```bash
npm install        # Install dependencies
npm run dev        # Dev server at localhost:4321
npm run build      # Production build → ./dist
npm run preview    # Preview production build locally
npm run lint       # ESLint
npm run format     # Prettier
```

---

## 📬 Contact

**David Alonso** · [dalon.so](https://dalon.so) · [masdavidalonso@gmail.com](mailto:hello@dalon.so)

Available for remote contract work · Based in Spain 🇪🇸 · CET
