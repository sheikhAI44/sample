# Deployment Instructions

## ✅ Setup Complete!

Your FireGuard website now includes a fully functional Gemini AI chat widget!

## Quick Deployment Steps

### 1. Commit Your Changes
```bash
git add .
git commit -m "Add futuristic Gemini AI chat widget with FireGuard branding"
git push origin main
```

### 2. Important: Set Environment Variable for Production

Since we're using static export for GitHub Pages, the API key needs to be baked into the build. You have two options:

**Option A: Build before pushing (Recommended)**
```bash
# Build with API key embedded
NEXT_PUBLIC_GEMINI_API_KEY=AIzaSyCXb-vNFEoJ7164tVB-pYlyOrKvN277bqg npm run build:docs

# Commit the docs folder
git add docs/
git commit -m "Update static build with Gemini AI"
git push origin main
```

**Option B: Use GitHub Actions (Advanced)**
Set up a GitHub Action to automatically build with the API key as a secret.

### 3. Verify Deployment

After pushing:
1. Go to https://github.com/sheikhAI44/sample
2. Navigate to Settings → Pages
3. Check that the deployment completed successfully
4. Visit your live site: https://sheikhAI44.github.io/sample/

### 4. Test the Chat

Click the floating "AI Assistant" button in the bottom-right corner and try:
- "Tell me about FireGuard"
- "What does the installation process look like?"
- "How does the AI fire detection work?"

## Features Implemented

✨ **UI/UX**
- Futuristic glassmorphic design matching FireGuard brand
- Smooth animations with Framer Motion
- Pulse effect on chat button
- Auto-scrolling messages
- Keyboard shortcuts (Enter to send)
- Loading states
- Error handling

🤖 **AI Functionality**
- Powered by Google Gemini 1.5 Flash
- Maintains conversation context
- Professional FireGuard-focused responses
- System instruction for brand consistency
- Client-side integration (no server required)

🎨 **Design Details**
- Red gradient theme matching FireGuard
- Gold accents for premium feel
- Responsive layout (works on mobile & desktop)
- Fixed positioning (stays visible while scrolling)
- Smooth open/close transitions

## File Structure

```
app/
├── components/
│   └── AIChat.tsx          # Main chat widget component
├── layout.tsx              # App layout (includes AIChat)
└── page.tsx                # Homepage

.env.local                  # API key (gitignored)
env.example                 # Example env file
GEMINI_SETUP.md            # Detailed setup guide
DEPLOYMENT_NOTES.md        # This file
```

## Security Notes

⚠️ **Important**: The API key is embedded in the client-side bundle because:
- Gemini API supports client-side usage
- Static site hosting (GitHub Pages) requires this approach
- Usage is tracked and billed to your Google Cloud account

**Security Best Practices:**
1. Set up API key restrictions in Google Cloud Console
2. Monitor usage in Google AI Studio dashboard
3. Set spending limits/alerts
4. Consider rotating keys periodically
5. Never commit `.env.local` file (already in .gitignore)

## Troubleshooting

**Chat button not appearing:**
- Check browser console for JavaScript errors
- Verify Framer Motion is installed: `npm list framer-motion`
- Rebuild: `npm run build:docs`

**AI not responding:**
- Open browser DevTools → Console
- Look for API key errors
- Verify the key is set correctly in environment variables
- Check network tab for API call failures

**Build errors:**
- Run `npm install` to ensure all deps are installed
- Check TypeScript: `npm run type-check`
- Clear cache: `rm -rf .next node_modules && npm install`

## Cost Management

Gemini 1.5 Flash Pricing:
- **Free tier**: 15 requests per minute
- **After free**: $0.075 per 1M tokens (~750k characters)
- Very cost-effective for support use case

Monitor usage at: https://aistudio.google.com/apikey

## Support

Need help?
- Check GEMINI_SETUP.md for detailed setup
- Review Gemini docs: https://ai.google.dev/docs
- FireGuard support: support@fireguard.ai

