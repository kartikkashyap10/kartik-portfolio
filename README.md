# 🚀 Kartik Kashyap - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, showcasing my professional experience, projects, and skills.

## ✨ Features

- 🎨 Modern and clean design with dark/light mode
- 📱 Fully responsive across all devices
- ⚡ Optimized for performance with Next.js 14
- 🎭 Smooth animations with Framer Motion
- 📊 Interactive components and UI elements
- 🔗 SEO optimized with metadata
- 📄 Resume PDF download functionality
- 🌐 Ready for Vercel deployment

## 🏗️ Project Structure

```
kartik-portfolio/
├── public/
│   └── resume/
│       └── Kartik_resume_updated.pdf
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── lib/
│       └── utils.ts
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/kartikkashyap10/kartik-portfolio.git
cd kartik-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Create the remaining project structure**
```bash
# Create src directory structure
mkdir -p src/app/components src/lib

# Create essential files
touch src/app/layout.tsx
touch src/app/page.tsx
touch src/app/globals.css
touch tsconfig.json
touch postcss.config.js
touch .env.local
```

4. **Run development server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📋 Current Status

✅ **Completed:**
- Package.json with all dependencies
- Next.js configuration
- Tailwind CSS configuration
- Resume PDF uploaded to `/public/resume/`
- Repository structure ready

🔄 **To Complete:**
1. Create TypeScript configuration (`tsconfig.json`)
2. Create PostCSS configuration (`postcss.config.js`)
3. Create the Next.js app structure in `/src/app/`
4. Build components based on resume content
5. Add styling with Tailwind CSS

## 📝 About Kartik Kashyap

**Senior Software Engineer** with 3+ years of experience in full-stack development, specializing in:

### 🏢 Experience
- **Atrina Technologies** - Senior Software Engineer (Jul 2024 - Present)
  - Building peer-to-peer finance platform with Node.js, Next.js, AWS, PostgreSQL

- **LenDenClub** - Software Development Engineer (Jul 2023 - Apr 2024)
  - Integrated attribution platforms, automated processes, improved business metrics
  - 28% reduction in funnel drop rate, 1-2 crore monthly business increase

- **Xoriant** - Software Engineer (Jul 2021 - Jul 2024)
  - Infrastructure provisioning with Terraform, Azure, GCP
  - 53% reduction in manual debugging time, 30% boot time improvement

### 🚀 Featured Projects
- **FlyEase** - Airline Ticket Booking System (Node.js, MySQL, Microservices)
- **SnapCut** - Object Detection Mobile App (React Native, Deep Learning)

### 🛠️ Technical Skills
- **Languages:** JavaScript, Python, TypeScript, Go, SQL
- **Frameworks:** Node.js, Express, React.js, Django, Next.js
- **Cloud:** AWS, Azure, Terraform, Kubernetes, Docker
- **Databases:** PostgreSQL, MySQL

### 🎓 Education
- **B.E. Computer Engineering** - Xavier Institute Of Engineering (2017-2021)
- **CGPA:** 8.45/10

### 🏆 Achievements
- Top of the class with 10 SGPA
- Published two research papers
- Microsoft Azure Administrator Associate
- Deep Learning Specialization
- Delivered Go training sessions

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (Already done!)

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Import your repository
   - Deploy with default settings

3. **Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard

### Alternative Deployment Options
- **Netlify:** Connect GitHub repo and deploy
- **Render:** Similar to Vercel with GitHub integration
- **Self-hosted:** Build with `npm run build` and serve static files

## 📞 Contact

- **Email:** kykashyap10@gmail.com
- **Phone:** +91-9082415471
- **GitHub:** [@kartikkashyap10](https://github.com/kartikkashyap10)
- **LinkedIn:** [Kartik Kashyap](https://linkedin.com/in/kartik-kashyap)

## 📜 Resume

Download my latest resume: [Kartik_resume_updated.pdf](./public/resume/Kartik_resume_udpated.pdf)

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Kartik Kashyap**
