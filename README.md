# Rawan Alghamdi — Portfolio

Personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a responsive design with light/dark theme, smooth scrolling navigation, an EmailJS-powered contact form, and sections for experience, education, skills, projects, and certifications.

## Live Demo

> Deploy to Vercel or Netlify and update this link.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tooling and dev server
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — accessible component primitives (Radix UI)
- **EmailJS** — contact form email delivery
- **React Router** — client-side routing
- **Lucide React** — icons

## Project Structure

```
src/
├── components/          # Page sections and UI components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Certifications.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── ui/              # shadcn/ui primitives
├── data/
│   └── portfolio-data.ts  # All content lives here
├── hooks/
├── pages/
│   └── Index.tsx
└── main.tsx
```

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# Clone the repo
git clone https://github.com/Rawalghamdi/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

## Contact Form Setup

The form uses [EmailJS](https://emailjs.com). The service ID, template ID, and public key are already configured in `Contact.tsx`. To use your own EmailJS account:

1. Create an account at [emailjs.com](https://emailjs.com)
2. Create a service and email template
3. Replace the credentials in `src/components/Contact.tsx`:

```ts
emailjs.init('YOUR_PUBLIC_KEY');
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { ... });
```

## Build & Deploy

```bash
# Production build
npm run build

# Preview the build locally
npm run preview
```

The `dist/` folder can be deployed to any static host:

- **Vercel** — connect your GitHub repo, zero config needed
- **Netlify** — drag and drop the `dist/` folder or connect via Git
- **GitHub Pages** — set `base` in `vite.config.ts` to your repo name

## License

MIT
