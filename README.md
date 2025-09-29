# Harsh Dwivedi - Landing Page

A professional landing page built with Next.js 14, designed for career fair QR/NFC card destinations.

## Features

- **Modern Design**: Clean, minimalist layout with plenty of whitespace
- **Responsive**: Optimized for all device sizes
- **Animations**: Smooth Framer Motion animations for enhanced UX
- **Analytics**: Plausible Analytics integration for visitor tracking
- **Email Integration**: Automated resume sending via Resend API
- **Contact Options**: Save contact, direct email, and automated resume delivery
- **SEO Optimized**: Proper meta tags and Open Graph support

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide React (icons)
- Resend (email service)

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

### Email Setup (Optional)

To enable automated resume sending:

1. Create a free account at [Resend](https://resend.com)
2. Get your API key from the dashboard
3. Create a `.env.local` file in the root directory:
```bash
RESEND_API_KEY=your_actual_api_key_here
```
4. Verify your domain in Resend (or use the default `onboarding@resend.dev`)

**Note**: Without the API key, the form will still work but won't send actual emails.

## Deployment

This project is ready for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## Customization

### Adding Your Resume
1. Add your resume PDF to the `public` folder as `resume.pdf`
2. The download button will automatically link to it

### Updating Analytics
1. Update the Plausible domain in `app/layout.tsx`
2. Replace `yourdomain.com` with your actual domain

### Content Updates
- Update personal information in the respective component files
- Modify links in `components/QuickLinks.tsx`
- Update project details in `components/ProjectHighlight.tsx`

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ContactCard.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProjectHighlight.tsx
│   ├── QuickLinks.tsx
│   └── ResumeButton.tsx
├── app/api/send-resume/
│   └── route.ts
├── public/
│   └── resume.pdf (add your resume here)
└── ...config files
```

## License

MIT License - feel free to use this template for your own landing page!
