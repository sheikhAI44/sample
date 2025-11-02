# FireGuard — AI Fire Prevention System

A modern Next.js landing page for FireGuard AI-powered fire prevention systems, featuring an interactive AI chat assistant powered by Google Gemini.

## Features

- 🌟 **Modern UI** - Sleek, futuristic design with smooth animations
- 🤖 **AI Chatbot** - Integrated Google Gemini AI assistant
- 📱 **Responsive** - Works seamlessly on all devices
- ⚡ **Performance** - Optimized for speed and SEO
- 🎨 **Animations** - Beautiful micro-interactions with Framer Motion
- 🔒 **Secure** - Production-ready with GitHub Pages deployment

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Gemini AI:**
   - Get your free API key from [Google AI Studio](https://aistudio.google.com/)
   - Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build:docs
   ```

## Deployment

This project is configured for GitHub Pages deployment:

1. Push to your `main` branch
2. Go to repository Settings → Pages
3. Set source to `/docs` folder
4. Your site will be live at `https://<username>.github.io/sample`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:docs` - Build and export for GitHub Pages
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **AI:** Google Gemini 1.5 Flash
- **Deployment:** GitHub Pages

## Notes

- The AI chat widget requires a valid Gemini API key to function
- API keys are exposed to the browser (NEXT_PUBLIC_ prefix) but this is safe for Gemini's usage-based pricing
- For production, consider implementing rate limiting and monitoring

## License

© 2025 Lights Of America Corp. — FireGuard. All Rights Reserved.
