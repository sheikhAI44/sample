# Fix Favicon on IONOS

## The Problem

Favicons need to be:
1. **In the `public` folder** (for Next.js to include them in the build)
2. **Referenced in the HTML** (which I've added to the metadata)
3. **Uploaded to IONOS** in the correct location

## Solution

### Step 1: Add Favicon to Your Project

**On your Mac:**

1. **Place your favicon file in the `public` folder:**
   ```
   /Users/wasifghory/Desktop/sample 2/public/favicon.ico
   ```

2. **Supported formats:**
   - `favicon.ico` (most common)
   - `favicon.png`
   - `icon.png`
   - `apple-icon.png`

### Step 2: Rebuild Your Site

```bash
cd "/Users/wasifghory/Desktop/sample 2"
npx next build
```

This will copy the favicon from `public/` to `out/` folder.

### Step 3: Upload to IONOS

**After building, upload the favicon:**

1. **Check your `out` folder:**
   ```bash
   ls -la out/
   ```
   You should see `favicon.ico` (or whatever you named it)

2. **Upload to IONOS:**
   - Upload `favicon.ico` from `out/` folder to `htdocs` root
   - Same location as `index.html`

3. **Set permissions:**
   - Set favicon to `644` (same as other files)

### Step 4: Verify

**Check the file structure in IONOS:**
```
htdocs/
├── index.html
├── favicon.ico    ← Should be here!
├── _next/
└── ...
```

## Alternative: Direct Upload to IONOS

**If you already uploaded favicon to IONOS:**

1. **Make sure it's in `htdocs` root** (same folder as `index.html`)
2. **Make sure it's named correctly:**
   - `favicon.ico` (most common)
   - Or update the metadata to match your filename

3. **Update metadata if needed:**
   - If your favicon is named differently, update `app/layout.tsx`:
   ```typescript
   icons: {
     icon: '/your-favicon-name.ico',
   }
   ```

## Common Issues

### Favicon not showing:

1. **Wrong location:**
   - Must be in `htdocs` root (not in subfolder)
   - Same folder as `index.html`

2. **Wrong filename:**
   - Must match what's in the metadata
   - Default is `favicon.ico`

3. **Browser cache:**
   - Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
   - Or clear browser cache

4. **File permissions:**
   - Set to `644` (readable by web server)

### Check if it's working:

1. **Visit:** `yourdomain.com/favicon.ico`
   - If this shows the image, the file is there
   - If 404, the file is missing or in wrong location

2. **Check browser tab:**
   - Look at the browser tab - should show your favicon
   - May take a few seconds to load

## Quick Fix

**If favicon is already in IONOS `htdocs`:**

1. **Check the filename** - what is it called?
2. **Update metadata** in `app/layout.tsx` to match:
   ```typescript
   icons: {
     icon: '/your-actual-filename.ico',
   }
   ```
3. **Rebuild and re-upload** `index.html`

The metadata I added will reference `/favicon.ico` - make sure your file matches this name or update the metadata!
