# Required Images for SEO - Action Items

## Missing Images That Need to be Created

Your site references several images in the metadata that don't exist yet. These are critical for SEO and social media sharing.

### 1. OG Image (Open Graph Image)
**File**: `/public/og-image.jpg`
**Dimensions**: 1200 x 630 pixels
**Purpose**: Shows when your site is shared on social media (Facebook, LinkedIn, Twitter, etc.)

**Content Suggestions**:
- Acceleryn Agency logo
- Tagline: "Digital Product Marketing & Ebook Selling Services"
- Professional gradient background matching your brand colors (navy blue, violet, cyan)
- Clean, modern design

**Tools to Create**:
- Canva (easiest, has OG image templates)
- Figma
- Photoshop
- https://www.opengraph.xyz/ (OG image generator)

### 2. Favicon
**File**: `/public/favicon.ico`
**Dimensions**: 16x16, 32x32, 48x48 (multi-size ICO file)
**Purpose**: Browser tab icon

**How to Create**:
- Design a simple "A" logo or Acceleryn icon
- Use https://favicon.io/ to convert PNG to ICO
- Or use https://realfavicongenerator.net/ for full favicon package

### 3. Logo
**File**: `/public/logo.png`
**Dimensions**: 512 x 512 pixels (square, transparent background)
**Purpose**: Schema.org Organization logo, used by Google

**Content**:
- Acceleryn Agency logo
- Transparent PNG background
- High quality, scalable

### 4. Apple Touch Icon (Optional but Recommended)
**File**: `/public/apple-touch-icon.png`
**Dimensions**: 180 x 180 pixels
**Purpose**: iOS home screen icon when users save your site

---

## Quick Win: Temporary OG Image

Until you create a professional OG image, you can:

1. Go to Canva
2. Search for "Open Graph" template
3. Add your brand name and tagline
4. Download as JPG (1200x630)
5. Save as `og-image.jpg` in `/public/` folder

---

## Google Search Console Verification

In `app/layout.tsx` line 63, you have:
```typescript
verification: {
  google: 'your-google-verification-code',
},
```

**Action Required**:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (https://acceleryn.agency)
3. Choose "HTML tag" verification method
4. Copy the verification code from the meta tag
5. Replace 'your-google-verification-code' with your actual code

---

## Image Optimization Tips

When you create these images:

1. **Optimize file sizes**:
   - Use https://tinypng.com/ or https://squoosh.app/
   - Keep OG image under 500KB
   - Keep favicon under 50KB

2. **Format**:
   - OG Image: JPG (better compression for photos/gradients)
   - Logo: PNG (supports transparency)
   - Favicon: ICO (multi-size, browser standard)

3. **Alt Text** (handled in code):
   - All images already have proper alt text in metadata
   - Make sure to add alt text to any future images in components

---

## Testing Your Images

After adding the images:

1. **OG Image Testing**:
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/post-inspector/

2. **Favicon Testing**:
   - Just open your site and check the browser tab

3. **Schema Testing**:
   - https://validator.schema.org/
   - https://search.google.com/test/rich-results

---

## Priority

1. **High Priority**: OG Image (og-image.jpg) - needed for social sharing
2. **High Priority**: Favicon (favicon.ico) - improves brand recognition
3. **Medium Priority**: Logo (logo.png) - for schema markup
4. **Low Priority**: Apple Touch Icon - nice to have

Create the OG image first, as it has the biggest impact on social media sharing and click-through rates.
