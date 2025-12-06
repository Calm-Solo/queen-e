# Queen E Website

A Next.js website for Queen E - sharing timeless wisdom and empowering younger women with faith, relationships, boundaries, and self-worth.

## Features

- **Home Page** - Hero section with Queen E avatar, tagline, and featured video
- **Episodes Page** - Grid of video thumbnails with theme filtering
- **Episode Detail Pages** - Individual episode viewing
- **About Page** - Persona story and mission statement
- **Gallery** - Static image gallery for events, achievements, awards, and members
- **Ask Queen E** - Question submission form
- **Contact/Newsletter** - Email signup for "Queen's Weekly Blessing"

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **React 18**
- **Tailwind CSS**
- **Vercel** (for deployment)

## Design Theme

- **Colors**: Gold (#D4AF37), Burgundy (#800020), Cream (#FFF8E7)
- **Typography**: Playfair Display (serif headers), Inter (sans-serif body)
- **Animations**: Gentle fade-ins, crown logo shimmer on hover

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
queen-e/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── episodes/          # Episodes pages
│   ├── about/             # About page
│   ├── gallery/           # Gallery page
│   ├── community/         # Ask Queen E page
│   ├── contact/           # Contact/Newsletter page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
├── data/                  # Static data (episodes, gallery)
├── lib/                   # Utility functions
└── public/                # Static assets
```

## Adding Content

### Episodes
Edit `data/episodes.ts` to add new episodes. Each episode requires:
- `id`: Unique identifier
- `title`: Episode title
- `url`: Full YouTube URL
- `videoId`: YouTube video ID
- `theme`: Array of themes (Faith, Relationships, Boundaries, Self-Worth)
- `description`: Optional description

### Gallery Images
1. Add images to `public/images/` directory
2. Update `data/gallery.ts` with image information

## Deployment

This project is configured for deployment on Vercel:

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## Email Integration

Forms are currently set up with placeholder functionality. To integrate:

- **Ask Queen E Form**: Configure email service in `components/QuestionForm.tsx`
- **Newsletter Form**: Integrate with email service (Mailchimp, ConvertKit, etc.) in `components/NewsletterForm.tsx`

## Developed By

McBride Tech Services
www.mcbridetechservices.com

