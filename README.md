# Strategic Resources Initiatives (SRI) Website

A modern, optimized React website built with Vite, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
The website will open automatically at `http://localhost:3000`

### Production
```bash
# Build and preview production version
npm run start
```

## 📦 Optimized Build

The project includes several optimizations:

- **Code Splitting**: Automatic chunk splitting for better loading performance
- **Minification**: Terser-based minification with console removal in production
- **Asset Optimization**: Optimized asset handling and inline limits
- **Dependency Pre-bundling**: Key dependencies are pre-bundled for faster dev startup

### Build Output
- `react-vendor`: React core libraries (~140KB)
- `router`: React Router (~20KB)  
- `ui-lib`: Radix UI components (~67KB)
- `animations`: Framer Motion & GSAP (~182KB)
- `charts`: Recharts & D3 (~412KB)
- `three`: Three.js (~461KB)

## 🛠 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run start` - Build and start production server
- `npm run lint` - Run ESLint

## 🏗 Architecture

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5 with SWC
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI primitives
- **Routing**: React Router v6
- **Animations**: Framer Motion & GSAP
- **Charts**: Recharts & D3
- **3D Graphics**: Three.js

## 🎯 Performance Features

- Lazy loading for route components
- Optimized chunk splitting
- Asset compression and optimization
- Modern ES modules
- Fast refresh in development
- Production-ready minification

## 🌐 Deployment

The website is optimized for deployment on any static hosting service. The build output in `dist/` can be served directly.

---

Built for Strategic Resources Initiatives
