# Quick Start Guide

## Running Your Portfolio

### Development Mode
```bash
npm run dev
```
Then open http://localhost:3000 in your browser.

### Production Build
```bash
npm run build
npm start
```

## 🎯 What's New

### Cursor System
- **Custom cursor** appears on the page and moves smoothly
- **Hides automatically** when you hover over input fields
- **Changes size** when hovering over different elements
- Shows helpful labels like "Click to expand" on project cards

### Magnetic Text
- Hover near the big "PRANIT MORE." name
- Letters move toward your cursor
- Creates an interactive, engaging effect

### Project Details
- **Click on any project card** to see full details
- Modal opens with:
  - Long description
  - Key features (7-9 per project)
  - Technical challenges faced
  - Full tech stack
  - Link to GitHub code

### Personal Sections
- **About → Favorite Activities:**
  - Football (Messi fan!)
  - Writing Code
  - Training MMA
  
- **About → Hobbies:**
  - Movies & Shows
  - Favorite films: Shiki-Jitsu, Oslo August 31st

### Animations
Throughout the site you'll see:
- Smooth fade-in animations
- Floating particles
- Shimmer effects on text
- Wave animations
- Scale pulses
- Gradient transitions
- Rotating icons
- Parallax effects on scroll

## 📝 Customization

### Change Personal Info
Update these files:
- `src/components/sections/Hero.tsx` - Name & tagline
- `src/components/sections/About.tsx` - Bio, activities, hobbies
- `src/components/sections/Contact.tsx` - Social links

### Update Projects
Edit `src/components/sections/Projects.tsx`:
```typescript
const projects = [
  {
    title: "Your Project",
    tags: "AI · Full-Stack",
    description: "Short description",
    longDescription: "Detailed description",
    features: ["Feature 1", "Feature 2", ...],
    challenges: ["Challenge 1", ...],
    techStack: ["Tech 1", "Tech 2", ...],
    github: "your-github-link"
  }
]
```

### Add Resume
Replace `/public/resume.pdf` with your actual resume file.

### Setup Contact Form
1. Go to [emailjs.com](https://www.emailjs.com)
2. Create free account
3. Set up email service (Gmail, Outlook, etc.)
4. Create email template with: `{{name}}`, `{{email}}`, `{{message}}`
5. Copy your Service ID, Template ID, and Public Key
6. Update `src/components/ContactModal.tsx`:
```typescript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formRef.current!,
  'YOUR_PUBLIC_KEY'
)
```

## 🎨 Animations & Effects

All animations use **Framer Motion** and CSS keyframes for smooth 60fps performance.

### Main Animation Types:
- **Fade In Up** - Elements slide up and fade in on scroll
- **Magnetic** - Text/elements follow cursor proximity
- **Marquee** - Continuous horizontal scrolling
- **Spring** - Physics-based smooth motion
- **Shimmer** - Text gradient animation
- **Wave** - Floating, oscillating motion
- **Scale Pulse** - Breathing scale effect
- **Stagger** - Sequential element animations

## 🖱️ Cursor Behavior

| Context | Cursor | Effect |
|---------|--------|--------|
| Default | Small dot | Follows smoothly |
| Links/Buttons | Large ring | Shows "Navigate" or link text |
| Project Cards | Large circle | Shows "Click to expand" |
| Input Fields | Hidden | Default text cursor appears |
| Text Elements | Medium | Subtle glow |

## 📱 Responsive Design

- **Desktop** - Full 2-column layouts, large animations
- **Tablet** - Adjusted spacing, flexible grids
- **Mobile** - Single column, touch-optimized, simplified animations

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm run build
git push  # Push to GitHub
# Then connect to Vercel dashboard
```

### Other Platforms
- Netlify: Connect GitHub repo
- Docker: Use Node.js base image
- Self-hosted: Use `npm run build` + `npm start`

## 🐛 Troubleshooting

### Cursor not working?
- Check that custom cursor component is in `page.tsx`
- Ensure z-index is high enough (9999)
- Clear browser cache

### Animations not smooth?
- Disable browser extensions (especially ad blockers)
- Check GPU acceleration is enabled
- Test on fresh browser tab

### Form not sending emails?
- Verify EmailJS credentials are correct
- Check email template variables match
- Ensure you're on EmailJS free plan limits

### Modal not opening?
- Check ProjectModal import in Projects.tsx
- Verify onClick handler is attached to cards
- Check browser console for errors

## 📚 Useful Commands

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm start         # Start prod server
npm run lint      # Run ESLint
```

## 🎓 Learning Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Ready to go live?** Your portfolio is production-ready. Just customize the content and deploy! 🚀