# Gemini AI Chatbot Setup Instructions

## Quick Setup Guide

Your FireGuard website now includes a futuristic AI chatbot powered by Google's Gemini AI. Follow these steps to get it running:

### Step 1: Get Your Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Click "Get API Key" or create a new project
4. Copy your API key (it will look like: `AIzaSy...`)

### Step 2: Configure the API Key

**For Development:**
1. Create a `.env.local` file in your project root
2. Add the following line:
   ```
   NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
   ```
3. Replace `your_api_key_here` with your actual API key

**For Production (GitHub Pages):**
Since we're using static export, you'll need to set this as an environment variable or build-time variable. 

**Option A: Build-time variable**
1. Set the environment variable before building:
   ```bash
   export NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
   npm run build:docs
   ```

**Option B: Use GitHub Secrets (if using GitHub Actions)**
Add the API key as a repository secret and access it during the build process.

### Step 3: Test Locally

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Look for the chat button in the bottom-right corner
3. Click it and try asking: "Tell me about FireGuard"

### Step 4: Deploy

1. Build for production:
   ```bash
   npm run build:docs
   ```

2. Commit and push:
   ```bash
   git add .
   git commit -m "Add Gemini AI chat widget"
   git push origin main
   ```

3. GitHub Pages will automatically deploy your site

## Features

✨ **Modern Design**
- Floating chat button with pulse animation
- Smooth open/close animations
- Glassmorphic UI matching FireGuard branding
- Responsive design for all devices

🤖 **Smart AI**
- Powered by Gemini 1.5 Flash (fast and efficient)
- Maintains conversation context
- Optimized for FireGuard customer support

🎨 **UI Details**
- Red gradient theme matching FireGuard brand
- Loading states and animations
- Auto-scrolling chat
- Keyboard shortcuts (Enter to send)

## Cost Considerations

- Gemini 1.5 Flash offers 15 requests per minute (RPM) for free tier
- First 15 requests per day are free
- After that: $0.075 per 1M tokens (~750k characters input)
- Very cost-effective for customer support use case

## Troubleshooting

**Chat button doesn't appear:**
- Check browser console for errors
- Verify Framer Motion is installed correctly

**AI not responding:**
- Verify your API key is set correctly
- Check network tab for API errors
- Ensure `NEXT_PUBLIC_` prefix is used

**Build errors:**
- Make sure all dependencies are installed: `npm install`
- Check TypeScript errors: `npm run type-check`

## Security Notes

⚠️ **Important:** The API key is exposed to the browser (NEXT_PUBLIC prefix required). This is safe for Gemini API because:
- Usage is tracked and billable to your account
- You can set usage limits in Google Cloud Console
- Rate limiting is handled by Google's infrastructure

For additional security:
1. Set up API key restrictions in Google Cloud Console
2. Monitor usage in Google AI Studio dashboard
3. Implement your own rate limiting if needed
4. Consider server-side proxy for enterprise deployments

## Support

For issues or questions:
- Check [Gemini API Docs](https://ai.google.dev/docs)
- FireGuard Support: support@fireguard.ai

