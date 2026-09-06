# Setup & Run Commands

## 🚀 Initial Setup (Run Once)

```bash
npm install
```

This installs all required dependencies including:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- Lucide Icons
- EmailJS

## 📊 Running the Portfolio

### Development Mode
```bash
npm run dev
```
Then open: http://localhost:3000

The app will auto-reload when you make changes.

### Production Build
```bash
npm run build
npm start
```

### Linting (Optional)
```bash
npm run lint
```

## 🎨 Customization Commands

### Quick Edit Commands
```bash
# Edit personal info
code src/components/sections/Hero.tsx
code src/components/sections/About.tsx
code src/components/sections/Contact.tsx

# Edit projects
code src/components/sections/Projects.tsx

# Edit colors/theme
code tailwind.config.js
code src/app/globals.css

# Edit animations
code src/components/CustomCursor.tsx
code src/components/MagneticText.tsx
```

## 📦 Common Tasks

### Change the Theme
Edit `tailwind.config.js` colors section:
```javascript
colors: {
  'accent': '#00d4ff',              // Main color (cyan)
  'accent-tertiary': '#ff006e',     // Pink accent
  'dark-bg': '#050608',             // Background
  // ... more colors
}
```

### Update Personal Info
Edit these sections in VS Code:
1. Hero name: `src/components/sections/Hero.tsx`
2. About bio: `src/components/sections/About.tsx`
3. Contact links: `src/components/sections/Contact.tsx`
4. Projects: `src/components/sections/Projects.tsx`

### Add Projects
In `src/components/sections/Projects.tsx`, add to the `projects` array:
```typescript
{
  title: "Your Project",
  tags: "Tag1 · Tag2",
  description: "Short description",
  longDescription: "Long description for modal",
  features: ["Feature 1", "Feature 2"],
  challenges: ["Challenge 1", "Challenge 2"],
  techStack: ["Tech1", "Tech2"],
  github: "https://github.com/...",
  icon: NameOfIcon,
}
```

### Deploy to Vercel
1. Push to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

Done! Your site is live.

## 🐛 Troubleshooting

### Cursor Not Responsive?
```bash
# Clear cache and restart
rm -r .next
npm run dev
```

### Animations Stuttering?
- Close other applications
- Clear browser cache (Ctrl+Shift+Delete)
- Disable browser extensions
- Test in incognito mode

### Module Not Found Error?
```bash
# Reinstall dependencies
rm -r node_modules package-lock.json
npm install
```

### Port 3000 Already in Use?
```bash
# Use different port
npm run dev -- -p 3001
```

## 📝 Environment Setup

### For EmailJS Contact Form
1. Create account at emailjs.com
2. Add email service
3. Create template with: `{{name}}`, `{{email}}`, `{{message}}`
4. Copy these from EmailJS dashboard:
   - Service ID
   - Template ID
   - Public Key

5. Update in `src/components/ContactModal.tsx`:
```typescript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',      // From EmailJS
  'YOUR_TEMPLATE_ID',     // From EmailJS
  formRef.current!,
  'YOUR_PUBLIC_KEY'       // From EmailJS
)
```

## 🔗 File Structure

```
PortfolioPranit/
├── src/
│   ├── app/
│   │   ├── page.tsx              ← Main page
│   │   ├── layout.tsx            ← HTML structure
│   │   └── globals.css           ← Global styles (theme colors)
│   └── components/
│       ├── CustomCursor.tsx      ← Cursor logic
│       ├── MagneticText.tsx      ← Text effects
│       ├── ProjectModal.tsx      ← Project details
│       └── sections/
│           ├── Hero.tsx          ← Your name & tagline
│           ├── About.tsx         ← Bio & activities
│           ├── Projects.tsx      ← Your projects
│           ├── Skills.tsx        ← Technical skills
│           ├── Experience.tsx    ← Work history
│           └── Contact.tsx       ← Contact form
├── public/
│   └── resume.pdf               ← Your resume
├── tailwind.config.js           ← Colors & animations
├── package.json                 ← Dependencies
└── README.md
```

## 🎯 Performance Tips

1. **Optimize images**: Use WebP format if possible
2. **Lazy load**: Framer Motion handles this automatically
3. **Monitor**: Use Chrome DevTools Performance tab
4. **Cache**: Vercel handles caching automatically

## 📱 Testing on Mobile

### Local Testing
1. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. On phone, visit: `http://YOUR_IP:3000`
3. Test all features on mobile

### Mobile Features to Check
- Cursor hides on form inputs ✓
- Animations smooth (no jank) ✓
- Text readable on small screens ✓
- Buttons easily clickable ✓
- Layout adapts properly ✓

## 🔄 Regular Workflow

```bash
# 1. Start development
npm run dev

# 2. Make changes to files
# (Auto-saves in VS Code)

# 3. See changes in browser
# (Auto-refreshes)

# 4. When ready to deploy
npm run build
git add .
git commit -m "Your message"
git push

# 5. Vercel auto-deploys!
```

## 📞 Getting Help

If something breaks:
1. Check the error message
2. Look in browser console (F12)
3. Try clearing cache: `rm -r .next`
4. Restart server: Ctrl+C then `npm run dev`

---

## Quick Start Command Sequence

```bash
# Copy and paste all at once:
npm install && npm run dev
```

Then open http://localhost:3000 in your browser!

The portfolio is ready to customize. Start by editing the files mentioned in "Update Personal Info" section above.