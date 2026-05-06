# St. Ann's RCM Church Website

A modern, production-ready church website built with Next.js 16, TypeScript, Tailwind CSS, and Supabase.

## Features

- **3D Hero Section**: Interactive 3D rotation of church image on scroll
- **Daily Bible Verse**: Catholic Bible verses that change daily
- **Mass Times & Services**: Complete schedule of masses, confessions, and adoration
- **Contact Section**: Full contact information with form
- **Responsive Design**: Mobile-first design with dark mode support
- **Modern UI**: Built with shadcn/ui components and Framer Motion animations

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Database**: Supabase
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jagadish7-25/churchw.git
cd churchw
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables

Make sure to add these in your Vercel project settings:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Project Structure

```
churchw/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── hero-section.tsx
│   │   ├── daily-verse.tsx
│   │   ├── church-listings.tsx
│   │   ├── contact-section.tsx
│   │   └── footer.tsx
│   └── lib/
│       ├── utils.ts
│       └── supabase.ts
├── public/
│   └── church-image.png
└── package.json
```

## Church Information

- **Name**: St. Ann's RCM Church
- **Address**: 95V5+749, SH 21, Nagarjuna Nagar, Sattenapalle, Andhra Pradesh 522403
- **Phone**: 08641-232260
- **Priest**: Fr. Rajesh Kumar Nettam

## License

This project is licensed under the MIT License.
