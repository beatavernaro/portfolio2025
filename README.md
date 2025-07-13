# ☕ Personal Portfolio - Beatriz

A modern and responsive portfolio developed with Angular for a full stack developer specialized in .NET and Angular. Features a clean, coffee-inspired design with warm, professional aesthetics.

## 🚀 Technologies Used

- **Angular 17** - Frontend framework with standalone components
- **Angular Material** - UI components and design system
- **TypeScript** - Programming language with strict mode
- **SCSS** - CSS preprocessor with custom variables
- **Font Awesome** - Professional icon library
- **Angular SSR** - Server-Side Rendering for better performance

## 🎨 Design Features

- **Coffee Theme** - Clean and warm design with coffee-inspired colors
- **Light Background** - Professional cream background (#e6dfd2)
- **Coffee Palette** - Warm brown tones (#ce8651, #ab7a66, #89543d)
- **One-Page Layout** - All sections in smooth scrolling format
- **Card-Based Design** - Modern white cards with subtle shadows
- **Responsive** - Mobile-first approach with CSS Grid/Flexbox
- **Smooth Animations** - Elegant transitions and hover effects

## 📱 Portfolio Sections

1. **Hero/Home** - Main presentation with floating icons and social links
2. **About Me** - Experience, technical skills, and certifications
3. **Projects** - Showcase of development work with technologies and links
4. **Articles & Talks** - Content, presentations, and speaking engagements
5. **Contact** - Professional contact form and information

## 🎯 Key Features

- ✅ Fixed top navigation with smooth scroll
- ✅ Coffee-themed color scheme with CSS variables
- ✅ Responsive grid layouts for all sections
- ✅ Professional project showcases with pagination
- ✅ Centralized text management for easy updates
- ✅ Form validation and user interaction
- ✅ Social media integration
- ✅ SEO optimized with meta tags
- ✅ GitHub Actions CI/CD pipeline
- ✅ Accessible design patterns

## 🛠️ How to Run

### Prerequisites
- Node.js 18+
- Angular CLI 17+
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/beatavernaro/portfolio2025.git

# Navigate to the directory
cd portfolio2025

# Install dependencies
npm install

# Run the development server
ng serve

# Access http://localhost:4200
```

### Production Build
```bash
# Optimized build for production
ng build --configuration production

# Files will be generated in the dist/ folder
```

### Development Commands
```bash
# Run tests
ng test

# Run e2e tests
ng e2e

# Lint code
ng lint

# Generate component
ng generate component component-name
```

## 🎯 Features

- ✅ Fixed top navigation
- ✅ Smooth scroll between sections
- ✅ Responsive design
- ✅ Custom dark theme
- ✅ CSS animations
- ✅ Modular components
- ✅ TypeScript with strong typing
- ✅ SSR enabled
- ✅ GitHub Actions deployment
- ✅ Centralized text management

## 🎨 Color Palette

The portfolio uses a carefully crafted coffee-inspired color scheme:

```scss
:root {
  --bg-primary: #e6dfd2;      // Light cream background
  --accent-primary: #ce8651;   // Warm coffee brown
  --accent-secondary: #ab7a66; // Medium coffee brown
  --accent-dark: #89543d;      // Dark coffee brown
  --text-primary: #3d2b1f;     // Dark brown text
  --text-secondary: #6b4a3a;   // Medium brown text
  --card-bg: #ffffff;          // Pure white cards
  --border-color: #d4c4b0;     // Light brown borders
}
```

## 📄 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navigation/     # Fixed top navigation
│   │   ├── hero/          # Main section with floating icons
│   │   ├── about/         # About me with skills grid
│   │   ├── projects/      # Projects showcase with cards
│   │   ├── articles/      # Articles and talks with pagination
│   │   └── contact/       # Contact form and information
│   ├── services/
│   │   ├── navigation.service.ts  # Navigation scroll logic
│   │   └── text.service.ts        # Centralized text management
│   ├── app.component.*    # Root component
│   ├── app.config.ts      # Application configuration
│   └── app.routes.ts      # Routing configuration
├── assets/                # Static resources and images
├── styles.scss           # Global styles and CSS variables
└── index.html            # Main HTML file
```

## 🚀 Deployment

The project is configured for automatic deployment using GitHub Actions:

### GitHub Pages (Current)
- **URL**: [https://beatavernaro.github.io/portfolio2025/](https://beatavernaro.github.io/portfolio2025/)
- **CI/CD**: Automated with GitHub Actions
- **Build**: Angular production build with base-href configuration

### Alternative Deployment Options
- **Vercel** - Zero-config deployment
- **Netlify** - Continuous deployment from Git
- **Azure Static Web Apps** - Microsoft cloud hosting
- **Firebase Hosting** - Google cloud platform

## 📧 Contact

- **Email**: betavernaro.dev@gmail.com
- **LinkedIn**: [beatriz-tavernaro](https://linkedin.com/in/beatriz-tavernaro/)
- **GitHub**: [beatavernaro](https://github.com/beatavernaro)
- **Microsoft MVP**: [Student Ambassador Profile](https://mvp.microsoft.com/en-US/studentambassadors/profile/5fe90cb3-bfb3-464f-99b3-87f705e7dc07)

## 🌐 Live Demo

Visit the live portfolio: [https://beatavernaro.github.io/portfolio2025/](https://beatavernaro.github.io/portfolio2025/)

---

Developed with ☕ by Beatriz - Curious by nature. Always learning. Always building.

**Latest Update**: Coffee-themed redesign with clean, professional aesthetics and improved user experience.
