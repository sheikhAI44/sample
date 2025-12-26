# Gemini Model Configuration Fix

## Issue
The error `models/gemini-pro is not found for API version v1beta` occurs when:
1. Your API key doesn't have access to the specified model
2. The model name format is incorrect
3. Your API key needs to be enabled for specific models

## Solution

### Step 1: Check Your API Key Permissions
1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Check which models your API key has access to
3. Verify your API key is active and not restricted

### Step 2: Update Your .env.local File
Add the model name that your API key supports:

```bash
NEXT_PUBLIC_GEMINI_API_KEY=your_actual_api_key_here
NEXT_PUBLIC_GEMINI_MODEL=gemini-pro
```

### Step 3: Try Different Model Names
If `gemini-pro` doesn't work, try these in your `.env.local`:

**Option 1:**
```bash
NEXT_PUBLIC_GEMINI_MODEL=gemini-1.5-pro
```

**Option 2:**
```bash
NEXT_PUBLIC_GEMINI_MODEL=gemini-1.5-flash
```

**Option 3:** (if you have access to newer models)
```bash
NEXT_PUBLIC_GEMINI_MODEL=gemini-2.0-flash-exp
```

### Step 4: Restart Your Dev Server
After updating `.env.local`, restart your development server:
```bash
npm run dev
```

## How the Fix Works

The updated code:
1. ✅ Uses `generateContent` instead of `startChat` (more reliable)
2. ✅ Builds conversation history manually
3. ✅ Allows configurable model name via environment variable
4. ✅ Provides better error messages

## Testing

1. Make sure your `.env.local` has both variables set
2. Restart your dev server
3. Open the chat widget
4. Send a test message
5. Check the browser console for any errors

## Common Model Names

- `gemini-pro` - Standard model (most common)
- `gemini-1.5-pro` - More capable model
- `gemini-1.5-flash` - Faster, lighter model
- `gemini-2.0-flash-exp` - Experimental newer model

## Still Having Issues?

1. **Check API Key**: Verify your API key is valid at https://aistudio.google.com/apikey
2. **Check Console**: Open browser DevTools → Console to see detailed error messages
3. **Try Different Model**: Update `NEXT_PUBLIC_GEMINI_MODEL` in `.env.local` and restart
4. **Check API Quota**: Make sure you haven't exceeded your API quota

## Code Changes Made

- Switched from `startChat()` to `generateContent()` for better compatibility
- Made model name configurable via `NEXT_PUBLIC_GEMINI_MODEL` environment variable
- Improved error handling and messages
- Fixed conversation history building




