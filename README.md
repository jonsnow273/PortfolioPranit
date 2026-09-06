# Pranit Bharat More - Portfolio Website

A modern, dark-themed portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🚀 Modern single-page portfolio with smooth scrolling
- 🎨 Dark theme with accent colors and dot-pattern backgrounds
- ✨ Interactive animations and magnetic text effects
- 📱 Fully responsive design
- 🎯 Scroll-spy navigation
- 📧 Contact form with EmailJS integration
- 🎭 Animated skill marquees
- 🔥 Optimized for performance

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Email:** EmailJS

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** to view it in the browser.

## Setup Contact Form

To enable the contact form, you need to set up EmailJS:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{name}}`, `{{email}}`, and `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Replace the placeholders in `src/components/ContactModal.tsx`:
   ```typescript
   const result = await emailjs.sendForm(
     'YOUR_SERVICE_ID_HERE',    // Replace with your EmailJS service ID
     'YOUR_TEMPLATE_ID_HERE',   // Replace with your EmailJS template ID
     formRef.current!,
     'YOUR_PUBLIC_KEY_HERE'     // Replace with your EmailJS public key
   )
   ```

## Customization

### Personal Information
Update personal details in:
- `src/components/sections/Hero.tsx` - Name and tagline
- `src/components/sections/About.tsx` - Bio and education
- `src/components/sections/Experience.tsx` - Work experience
- `src/components/sections/Contact.tsx` - Social links

### Projects
Update project information in `src/components/sections/Projects.tsx`

### Skills
Modify skill categories and items in `src/components/sections/Skills.tsx`

### Resume
Replace `public/resume.pdf` with your actual resume file.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo-name)

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navigation.tsx
│       ├── ContactModal.tsx
│       └── sections/
│           ├── Hero.tsx
│           ├── About.tsx
│           ├── Projects.tsx
│           ├── Skills.tsx
│           ├── Experience.tsx
│           └── Contact.tsx
├── public/
│   └── resume.pdf
├── tailwind.config.js
└── package.json
```

## Performance Features

- Optimized animations with Framer Motion
- Lazy loading for smooth scrolling
- Responsive images and components
- Efficient re-renders with React hooks
- Tailwind CSS purging for smaller bundle size

## License

MIT License - feel free to use this as a template for your own portfolio!