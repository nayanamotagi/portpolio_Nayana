# Quick Setup Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## ✏️ Customization Checklist

Before deploying, make sure to update:

### 1. Personal Information
- [ ] `app/layout.tsx` - Update metadata (title, description)
- [ ] `components/sections/Hero.tsx` - Change name, title, description
- [ ] `components/sections/About.tsx` - Update image and bio
- [ ] `components/sections/Contact.tsx` - Update contact details
- [ ] `components/Footer.tsx` - Update social media links

### 2. Content Data
- [ ] `data/skills.json` - Add your skills
- [ ] `data/projects.json` - Add your projects
- [ ] `data/experience.json` - Add work experience and education

### 3. Images
- [ ] Add your profile image (update path in About.tsx)
- [ ] Add project images (update paths in projects.json)
- [ ] Or use placeholder images from Unsplash

### 4. Contact Form (Optional)
- [ ] Set up email service (Resend, SendGrid, etc.)
- [ ] Update `app/api/contact/route.ts` with email integration

### 5. Resume
- [ ] Add your resume PDF to `public/` folder
- [ ] Update resume link in Hero.tsx

---

## 🎨 Design Customization

### Colors
Edit `tailwind.config.ts` to change:
- Primary color (blue)
- Accent color (purple)
- Dark mode colors

### Fonts
- Default: Inter (loaded automatically)
- Change in `app/layout.tsx` if needed

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- Any Next.js-compatible platform

---

## 💡 Tips

- Use `npm run lint` to check for errors
- Test dark mode toggle
- Test responsive design on mobile/tablet
- Verify all links work
- Test contact form submission

---

**That's it! Your portfolio is ready! 🎉**

