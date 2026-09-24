# Deployment Setup Guide

## ✅ What's Already Configured

Your website is now configured for automatic deployment to GitHub Pages. Here's what has been set up:

### 1. GitHub Actions Workflow
- File: `.github/workflows/deploy.yml`
- Automatically builds and deploys on every push to `main` branch
- Can also be triggered manually from GitHub Actions tab

### 2. Custom Domain Configuration
- File: `public/CNAME`
- Configured for: `talkpointcommunication.com`
- This file ensures your custom domain is maintained after each deployment

### 3. Vite Configuration
- File: `vite.config.ts`
- Base path configured for GitHub Pages
- Optimized build settings

## 🚀 How Automatic Deployment Works

1. You make changes to your code locally
2. Commit changes: `git commit -m "Your message"`
3. Push to GitHub: `git push`
4. GitHub Actions automatically:
   - Installs dependencies using Bun
   - Builds the project
   - Deploys to GitHub Pages
   - Updates your live website

**Deployment time:** Typically 2-5 minutes after pushing

## 📋 Final Steps in GitHub (One-Time Setup)

### 1. Configure GitHub Pages Settings

1. Go to your repository: https://github.com/talkpointcommunication/talkpoint
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Build and deployment":
   - Source: Should be set to **GitHub Actions** ✅
   - This allows the workflow to deploy automatically

### 2. Configure Custom Domain DNS

In your domain registrar (where you bought talkpointcommunication.com):

Add these DNS records:

**For apex domain (talkpointcommunication.com):**
```
Type: A
Host: @
Value: 185.199.108.153
```
```
Type: A
Host: @
Value: 185.199.109.153
```
```
Type: A
Host: @
Value: 185.199.110.153
```
```
Type: A
Host: @
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Host: www
Value: talkpointcommunication.github.io
```

### 3. Enable HTTPS (After DNS propagates)

1. Go to repository Settings → Pages
2. Check "Enforce HTTPS" checkbox
3. GitHub will automatically provision an SSL certificate

**Note:** DNS propagation can take 24-48 hours

## 🔄 Making Updates

### Standard Workflow:
```bash
# 1. Make your changes to the code
# 2. Stage changes
git add .

# 3. Commit with descriptive message
git commit -m "Update phone numbers and add new features"

# 4. Push to GitHub (triggers automatic deployment)
git push
```

### Viewing Deployment Status:
1. Go to your repository on GitHub
2. Click the **Actions** tab
3. See the latest workflow run and its status
4. Click on a run to see detailed logs

### Manual Deployment:
If you need to redeploy without making changes:
1. Go to repository → **Actions** tab
2. Click "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select `main` branch
5. Click "Run workflow"

## 🌐 Accessing Your Site

- **Production URL:** https://talkpointcommunication.com
- **GitHub Pages URL:** https://talkpointcommunication.github.io/talkpoint/

## 🐛 Troubleshooting

### Deployment fails
- Check the Actions tab for error messages
- Ensure all dependencies are properly listed in `package.json`
- Verify the build works locally: `bun run build`

### Custom domain not working
- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Check that CNAME file exists in `public/` folder
- Verify custom domain is set in GitHub Pages settings

### Changes not appearing
- Clear browser cache
- Check if deployment succeeded in Actions tab
- Verify you pushed to `main` branch

## 📞 Support

If you encounter issues:
- Check workflow logs in GitHub Actions
- Verify build works locally
- Review GitHub Pages documentation: https://docs.github.com/pages

## 🎉 Success!

Your website is now:
- ✅ Deployed to GitHub Pages
- ✅ Configured with custom domain
- ✅ Set up for automatic deployments
- ✅ Ready to receive updates on every push

Just push your changes and they'll be live in minutes!
