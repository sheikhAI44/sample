# Get Your Website Running on IONOS - Complete Guide

## Step 1: Build Your Site

**On your Mac, in Terminal:**

```bash
cd "/Users/wasifghory/Desktop/sample 2"

# Build the site
npm run build
```

**Wait for:** "Export successful"

**Verify build:**
```bash
ls -la out/
```

You should see:
- ✅ `index.html`
- ✅ `404.html`
- ✅ `_next/` folder

## Step 2: Prepare Files for Upload

**Files to upload from `out` folder:**
- `index.html`
- `404.html`
- `_next/` folder (entire folder with all contents)
- `.nojekyll` (optional, hidden file)

## Step 3: Upload to IONOS

### Using IONOS File Manager:

1. **Log into IONOS** customer portal
2. **Go to your hosting package** → **File Manager**
3. **Navigate to `htdocs` or `public_html`** (this is your web root)
4. **Delete any old files** (if you uploaded before)
5. **Upload files:**
   - Upload `index.html` to `htdocs` root
   - Upload `404.html` to `htdocs` root
   - Upload `_next` folder to `htdocs` root
   - **Important:** Files must be directly in `htdocs`, not in a subfolder!

### Using FTP (Alternative):

1. **Connect to IONOS via FTP** (FileZilla, Cyberduck, etc.)
2. **Navigate to `htdocs` or `public_html`**
3. **Upload all contents** from your `out` folder
4. **Make sure files are in root**, not in a subfolder

## Step 4: Set File Permissions

**In IONOS File Manager:**

1. **Select `index.html`** → Right-click → Properties → Permissions
2. **Set to `644`** → Save
3. **Select `_next` folder** → Right-click → Properties → Permissions
4. **Set to `755`** → Save
5. **Go inside `_next` folder:**
   - Select all files → Set to `644`
   - Select all folders → Set to `755`

## Step 5: Create .htaccess (Optional but Recommended)

**In IONOS File Manager:**

1. **Go to `htdocs`**
2. **Create new file** named `.htaccess` (with the dot!)
3. **Paste this content:**

```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
</IfModule>
```

4. **Save**
5. **Set permissions to `644`**

## Step 6: Verify File Structure

**In IONOS `htdocs`, you should have:**

```
htdocs/
├── index.html          ← Must be here!
├── 404.html
├── .htaccess           ← Optional
└── _next/              ← Must be here!
    ├── static/
    └── ... (other folders)
```

**Important:** Files must be directly in `htdocs`, NOT in a subfolder like `htdocs/out/`

## Step 7: Test Your Site

1. **Visit your domain:** `https://yourdomain.com`
2. **Or test directly:** `https://yourdomain.com/index.html`

**If you see your site:** ✅ Success!

**If you get errors:**
- **403 Forbidden** → Check file permissions (Step 4)
- **404 Not Found** → Check file location (Step 6)
- **500 Error** → Check `.htaccess` content (Step 5)

## Troubleshooting

### Site Not Loading?

**Check:**
1. ✅ Is `index.html` in `htdocs` root? (not in subfolder)
2. ✅ Are permissions correct? (644 for files, 755 for folders)
3. ✅ Does `_next` folder exist and have files inside?
4. ✅ Did build complete successfully?

### Still Having Issues?

**Try accessing directly:**
- `yourdomain.com/index.html`
- If this works, the issue is with `.htaccess` routing
- If this doesn't work, check file location and permissions

## Quick Checklist

- [ ] Built site successfully (`npm run build`)
- [ ] Uploaded `index.html` to `htdocs` root
- [ ] Uploaded `_next` folder to `htdocs` root
- [ ] Set file permissions (644 for files, 755 for folders)
- [ ] Created `.htaccess` file (optional)
- [ ] Tested site at your domain

## Success!

Once everything is uploaded and permissions are set, your site should be live at your domain! 🎉

If you run into any specific errors, let me know and I can help troubleshoot!
