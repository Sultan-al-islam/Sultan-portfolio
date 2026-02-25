# Sultan Al Islam — Portfolio

A personal portfolio built with React and Vite showcasing academic background, technical skills, projects, competitive programming stats, and contact information.

## Features
- Responsive, animated UI with Framer Motion.
- Tailwind CSS for utility-first styling.
- Sections: Hero, Academic, Skills, Projects, Competitive, Contact.
- Project cards with GitHub / Live links and animated stats.

## Tech Stack
- [Vite](vite.config.js)
- [React](package.json)
- [Tailwind CSS](src/index.css)
- [Framer Motion](package.json)
- [React Icons](package.json)
- Utilities: [`clsx`](src/utils/cn.js), [`tailwind-merge`](package.json)

## Quick Start

Prerequisites: Node.js (>=16) and npm.

Install
```sh
npm install
```

Run dev server
```sh
npm run dev
```

Build
```sh
npm run build
```

Preview production build
```sh
npm run preview
```

Lint
```sh
npm run lint
```

## Important Files
- [index.html](index.html) — HTML entry.
- [vite.config.js](vite.config.js) — Vite config / plugins.
- [package.json](package.json) — Scripts & dependencies.
- [src/main.jsx](src/main.jsx) — React entry.
- [src/App.jsx](src/App.jsx) — App root and layout.
- [src/index.css](src/index.css) — Tailwind + custom styles.
- Components:
  - [`Navbar`](src/components/Navbar.jsx)
  - [`Hero`](src/components/Hero.jsx)
  - [`Academic`](src/components/Academic.jsx)
  - [`Skills`](src/components/Skills.jsx)
  - [`Projects`](src/components/Projects.jsx)
  - [`Competitive`](src/components/Competitive.jsx)
  - [`Contact`](src/components/Contact.jsx)
- Utils:
  - [`cn`](src/utils/cn.js)

Open any of the linked files to edit content, layout, or data.

## Customization
- Replace the profile image referenced in [`Hero`](src/components/Hero.jsx) (currently `/siam.jpeg`) by adding a file to [public/](public/).
- Update CV / external links inside components (Hero, Academic, Contact, Projects).
- Adjust theme or fonts in [index.html](index.html) and [src/index.css](src/index.css).

## Notes
- Tailwind is configured via PostCSS; see dependencies in [package.json](package.json).
- Framer Motion powers most animations — check component `motion` usage in the components listed above.

## License
Add your preferred license or keep proprietary.

```// filepath: d:\AntiGrab\portfolio\README.md
// ...existing code...
# Sultan Al Islam — Portfolio

A personal portfolio built with React and Vite showcasing academic background, technical skills, projects, competitive programming stats, and contact information.

## Features
- Responsive, animated UI with Framer Motion.
- Tailwind CSS for utility-first styling.
- Sections: Hero, Academic, Skills, Projects, Competitive, Contact.
- Project cards with GitHub / Live links and animated stats.

## Tech Stack
- [Vite](vite.config.js)
- [React](package.json)
- [Tailwind CSS](src/index.css)
- [Framer Motion](package.json)
- [React Icons](package.json)
- Utilities: [`clsx`](src/utils/cn.js), [`tailwind-merge`](package.json)

## Quick Start

Prerequisites: Node.js (>=16) and npm.

Install
```sh
npm install
```

Run dev server
```sh
npm run dev
```

Build
```sh
npm run build
```

Preview production build
```sh
npm run preview
```

Lint
```sh
npm run lint
```

## Important Files
- [index.html](index.html) — HTML entry.
- [vite.config.js](vite.config.js) — Vite config / plugins.
- [package.json](package.json) — Scripts & dependencies.
- [src/main.jsx](src/main.jsx) — React entry.
- [src/App.jsx](src/App.jsx) — App root and layout.
- [src/index.css](src/index.css) — Tailwind + custom styles.
- Components:
  - [`Navbar`](src/components/Navbar.jsx)
  - [`Hero`](src/components/Hero.jsx)
  - [`Academic`](src/components/Academic.jsx)
  - [`Skills`](src/components/Skills.jsx)
  - [`Projects`](src/components/Projects.jsx)
  - [`Competitive`](src/components/Competitive.jsx)
  - [`Contact`](src/components/Contact.jsx)
- Utils:
  - [`cn`](src/utils/cn.js)

Open any of the linked files to edit content, layout, or data.

## Customization
- Replace the profile image referenced in [`Hero`](src/components/Hero.jsx) (currently `/siam.jpeg`) by adding a file to [public/](public/).
- Update CV / external links inside components (Hero, Academic, Contact, Projects).
- Adjust theme or fonts in [index.html](index.html) and [src/index.css](src/index.css).

## Notes
- Tailwind is configured via PostCSS; see dependencies in [package.json](package.json).
- Framer Motion powers most animations — check component `motion` usage in the components listed above.

## License
Add your preferred license or keep proprietary.
