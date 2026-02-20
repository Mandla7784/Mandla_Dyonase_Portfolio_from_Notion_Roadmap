# Mandla Dyonase — Portfolio

Web developer portfolio built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The “Get in touch” form uses [Formspree](https://formspree.io). To enable it:

1. Sign up at formspree.io and create a form.
2. Copy your form ID from the form endpoint (e.g. `https://formspree.io/f/abcdexyz` → `abcdexyz`).
3. Create `.env.local` in the project root and add:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=your_form_id
   ```
4. Restart the dev server.

## Build

```bash
npm run build
npm start
```

## Sections

- Hero (with profile image)
- About
- Skills (icon grid)
- Experience
- Education (CodeSpace Academy)
- Projects
- Contact (links + form)
- Footer
