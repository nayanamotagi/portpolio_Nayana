# Portfolio Website - Nayana

A modern, responsive portfolio website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a clean, professional design.

## 🚀 Features

- **Modern Design**: Clean, minimalist, and professional UI
- **Responsive**: Fully responsive for mobile, tablet, and desktop
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion animations throughout
- **SEO Optimized**: Built-in metadata and SEO best practices
- **Server Components**: Uses Next.js 14 App Router with Server Components
- **Type Safe**: Full TypeScript support
- **Contact Form**: API route for handling form submissions

## 📁 Project Structure

```
portfolio-nayana/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css                # Global styles and Tailwind imports
│   ├── layout.tsx                 # Root layout with Navbar and Footer
│   └── page.tsx                   # Main page combining all sections
├── components/
│   ├── sections/
│   │   ├── Hero.tsx              # Hero section
│   │   ├── About.tsx             # About section
│   │   ├── Skills.tsx            # Skills section
│   │   ├── Projects.tsx          # Projects section
│   │   ├── Experience.tsx        # Experience/Education timeline
│   │   └── Contact.tsx           # Contact form section
│   ├── Button.tsx                # Reusable button component
│   ├── Footer.tsx                # Footer component
│   ├── Navbar.tsx                # Navigation bar with dark mode toggle
│   ├── ProjectCard.tsx           # Project card component
│   └── SectionTitle.tsx          # Section title component
├── data/
│   ├── experience.json           # Work experience and education data
│   ├── projects.json             # Portfolio projects data
│   └── skills.json               # Skills and technologies data
├── public/                        # Static assets (images, etc.)
├── package.json
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## 📦 Installation

1. **Clone the repository** (or use this as a template)

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Update Personal Information

1. **Update metadata** in `app/layout.tsx`:
   - Change title, description, and keywords
   - Update OpenGraph metadata

2. **Update Hero section** in `components/sections/Hero.tsx`:
   - Change name and title
   - Update description text
   - Update resume link (if you have one)

3. **Update About section** in `components/sections/About.tsx`:
   - Change image URL
   - Update personal description
   - Modify highlights

4. **Update Contact section** in `components/sections/Contact.tsx`:
   - Change email, phone, and location
   - Update social media links in `components/Footer.tsx`

5. **Update data files**:
   - `data/skills.json`: Add your skills
   - `data/projects.json`: Add your projects
   - `data/experience.json`: Add your work experience and education

### Customize Colors

Edit `tailwind.config.ts` to change the color palette:
- `primary`: Main brand color (blue)
- `accent`: Accent color (purple)
- `dark`: Dark mode colors

### Add Images

1. Place images in the `public/` folder
2. Update image paths in components (use `/image-name.jpg` for public folder)
3. Or use external URLs (already configured for Unsplash)

## 📧 Contact Form Setup

The contact form currently logs submissions to the console. To enable email functionality:

1. **Option 1: Use Resend** (Recommended)
   ```bash
   npm install resend
   ```
   Then update `app/api/contact/route.ts` with Resend integration.

2. **Option 2: Use SendGrid**
   ```bash
   npm install @sendgrid/mail
   ```
   Then update the API route accordingly.

3. **Option 3: Use Nodemailer**
   ```bash
   npm install nodemailer
   ```
   Configure with your SMTP settings.

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones (`primary-600`, etc.)
- **Accent**: Purple tones (`accent-600`, etc.)
- **Dark Mode**: Gray scale (`dark-50` to `dark-900`)

### Typography
- **Font**: Inter (loaded via Next.js)
- **Headings**: Bold, large sizes
- **Body**: Regular weight, readable sizes

### Spacing
- Consistent spacing scale using Tailwind's spacing system
- Sections: `py-20` (vertical padding)
- Container: `max-w-7xl mx-auto` (max width with centering)

### Components
- **Buttons**: Three variants (primary, secondary, outline)
- **Cards**: Rounded corners, shadows, hover effects
- **Sections**: Consistent padding and max-width

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Customization Tips

1. **Add more sections**: Create new components in `components/sections/`
2. **Modify animations**: Adjust Framer Motion props in components
3. **Change layout**: Edit `app/page.tsx` to reorder or add sections
4. **Add blog**: Use Next.js dynamic routes for a blog section
5. **Add analytics**: Integrate Google Analytics or Vercel Analytics

## 🐛 Troubleshooting

### Images not loading
- Check image URLs in data files
- Ensure images are in `public/` folder or use valid external URLs
- Update `next.config.mjs` with your image domains

### Dark mode not working
- Clear browser cache
- Check localStorage for theme preference
- Ensure `darkMode: "class"` in `tailwind.config.ts`

### Build errors
- Run `npm run lint` to check for errors
- Ensure all dependencies are installed
- Check TypeScript errors with `npx tsc --noEmit`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

If you have any questions or need help, feel free to open an issue or reach out!

---

**Happy Coding! 🎉**

