# Be Life Premium Home Care

Marketing site for Be Life Premium Home Care — nursing, elderly, and
post-surgery care delivered at home across India and the Gulf.

Built with Next.js (App Router), React 19, and TypeScript. No UI framework or
CSS library — the styling is hand-written CSS transcribed from the approved
design.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the real phone numbers
npm run dev                  # http://localhost:3000
```

Requires Node 20.9+ (see `.nvmrc`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (`next/core-web-vitals` + `next/typescript`) |
| `npm run typecheck` | `tsc --noEmit` |

## Project structure

```
src/
├── app/
│   ├── layout.tsx      # Fonts (Playfair Display + Mulish), metadata
│   ├── page.tsx        # Page composition
│   └── globals.css     # All styling and design tokens
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Enquiry.tsx
│   ├── EnquiryForm.tsx # Client component — the only one
│   ├── Footer.tsx
│   ├── ConsultationDock.tsx
│   └── icons.tsx
└── lib/
    ├── site.ts         # Phone / WhatsApp / email
    └── services.tsx    # Service cards, assurances, dropdown options
```

Everything except `EnquiryForm` renders on the server. The page is fully static
(prerendered at build time).

## Configuration

Contact details live in `src/lib/site.ts` and read from the environment:

| Variable | Default |
| --- | --- |
| `NEXT_PUBLIC_PHONE_NUMBER` | `+91 90000 00000` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | falls back to the phone number |

These drive the header call button, the hero WhatsApp link, the footer, and the
floating consultation dock. The email address is set directly in `site.ts`.

## Styling

`src/app/globals.css` holds the design tokens:

| Token | Value | Used for |
| --- | --- | --- |
| `--ink` | `#0f3a45` | Body text, dark buttons |
| `--teal` | `#12454f` | Hero and enquiry gradients |
| `--teal-darkest` | `#0a2830` | Footer |
| `--gold` | `#c1954c` | Primary CTAs, accents |
| `--gold-light` | `#d9b877` | Headings on dark, hover states |
| `--cream` | `#faf7f1` | Page background, cards on dark |
| `--cream-text` | `#f7f2e9` | Text on dark sections |

Breakpoints are 1024px, 900px, and 620px. A `prefers-reduced-motion` block
disables the float and fade-up animations.

## Deployment

Deploys as-is to any Next.js host. On Vercel: import the repo, set the two
`NEXT_PUBLIC_*` variables, and deploy — no other configuration needed.

## Known gaps

- **Hero image** — the hero uses a styled placeholder ("CAREGIVER + ELDERLY
  PATIENT PHOTO") because no photograph was supplied. Replace the
  `.bl-hero-frame` block in `src/components/Hero.tsx` when the asset is ready.
- **Enquiry form does not send** — it shows the confirmation state optimistically
  and discards the submission. See the `TODO` in `src/components/EnquiryForm.tsx`;
  this needs wiring to an inbox or CRM before launch.
- **Placeholder links** — footer About/Careers/Gallery/FAQ and the Privacy and
  Terms links point at `#`.
