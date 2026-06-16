# Decipher Global Website

A production-ready Next.js website for Decipher Global, a media production, marketing technology, and software solutions company.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- API route for contact form submissions
- Deployable on Vercel

## Folder Structure

```txt
app/
  api/contact/route.ts       Contact form API route
  about/page.tsx             About page
  case-studies/page.tsx      Marketing case studies page
  contact/page.tsx           Contact page
  marketing-tech/page.tsx    Everything Marketing Tech page
  media/page.tsx             Everything Media page
  tech-solutions/page.tsx    Tech Solutions page
  work/page.tsx              Portfolio / Work page
  layout.tsx                 Global layout and metadata
  page.tsx                   Home page
components/
  Button.tsx
  CaseStudyCard.tsx
  ContactForm.tsx
  CTASection.tsx
  Footer.tsx
  Navbar.tsx
  PortfolioCard.tsx
  PortfolioFilter.tsx
  Section.tsx
  ServiceCard.tsx
lib/
  data.ts                    Editable services, portfolio, metrics, and case studies
```

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Contact Form

The contact form posts to `app/api/contact/route.ts`.

Current behavior:

- Validates required fields
- Validates email format
- Logs the structured enquiry to the server console
- Returns success and error states to the UI

To integrate email, CRM, Google Sheets, or a webhook, replace the `console.log` block in `app/api/contact/route.ts`.

## Content Updates

Update real company work in `lib/data.ts`.

Recommended replacements:

- Portfolio thumbnails and optional video URLs
- Real case study metrics
- Client industries or logo cards
- Contact details and social links
- Team profiles

## Vercel Deployment

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js.
4. Deploy.

No custom server is required.
