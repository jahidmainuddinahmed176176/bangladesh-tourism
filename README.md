# Bangladesh Tourism Agency

A premium tourism agency website for exploring the beauty of Bangladesh. Book guided tours to Cox's Bazar, Sundarbans, Sylhet, Bandarban, and more.

![Bangladesh Tourism](public/images/hero-bangladesh.jpg)

## Features

- **Tour Packages** - Curated tour packages with detailed itineraries
- **Destination Pages** - Explore popular destinations with stunning imagery
- **Online Booking** - Easy-to-use booking form for tour reservations
- **User Authentication** - Sign up and sign in functionality
- **Responsive Design** - Beautiful on all devices

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: shadcn/ui

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/jahidmainuddinahmed176176/bangladesh-tourism.git

# Navigate to the project
cd bangladesh-tourism

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── page.tsx              # Homepage
│   ├── sign-in/              # Sign in page
│   ├── sign-up/              # Sign up page
│   ├── book/                 # Tour booking form
│   ├── destinations/         # Destinations listing & details
│   ├── packages/             # Tour packages
│   └── about/                # About the agency
├── components/
│   ├── header.tsx            # Navigation header
│   ├── footer.tsx            # Site footer
│   └── ui/                   # shadcn/ui components
└── public/
    └── images/               # Destination images
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, featured destinations, testimonials |
| Sign In | `/sign-in` | User login |
| Sign Up | `/sign-up` | User registration |
| Book Tour | `/book` | Tour booking form |
| Destinations | `/destinations` | All destinations |
| Destination Detail | `/destinations/[slug]` | Individual destination info |
| Packages | `/packages` | Tour packages with pricing |
| About | `/about` | About the agency |

## Deployment

This project can be deployed on:

- **Vercel** (Recommended for Next.js)
- **Netlify** (Requires Next.js adapter)

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jahidmainuddinahmed176176/bangladesh-tourism)

### Deploy on Netlify

> **Important**: This is now a Next.js project. You need to configure Netlify for Next.js:

1. Install the Netlify CLI or use the Netlify dashboard
2. Set the build command to: `pnpm build`
3. Set the publish directory to: `.next`
4. Add the `@netlify/plugin-nextjs` plugin

## Related Repositories

- [bangladesh-dotnet-api](https://github.com/jahidmainuddinahmed176176/bangladesh-dotnet-api) - Backend API (.NET)
- [bangladesh-tourism-mobile](https://github.com/jahidmainuddinahmed176176/bangladesh-tourism-mobile) - Mobile app

## License

MIT License

---

Built with Next.js and Tailwind CSS
