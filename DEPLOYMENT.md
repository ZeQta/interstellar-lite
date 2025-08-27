# Vercel Deployment Guide

## Quick Deploy to Vercel

### Method 1: Direct Deploy Button
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/interstellar-lite-pro)

### Method 2: Manual Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository

3. **Deploy Settings**
   - Framework Preset: **Other**
   - Build Command: Leave empty (static site)
   - Output Directory: Leave empty (uses root)
   - Install Command: `npm install` (optional)

4. **Environment Variables** (Optional)
   - Add your OpenRouter API key as `OPENROUTER_API_KEY`
   - Add your GitHub token as `GITHUB_TOKEN`

### Method 3: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N** (for first deployment)
   - Project name? **interstellar-lite-pro**
   - Directory? **./** (current directory)

## Configuration

The project includes:
- `vercel.json` - Minimal Vercel configuration
- `package.json` - Project metadata
- `.vercelignore` - Files to exclude from deployment

## Features

✅ **Production Ready**
- AI-powered website generation
- Mobile-responsive design
- GitHub integration
- Progressive Web App features
- Professional UI/UX

## Troubleshooting

If deployment fails:
1. Ensure `index.html` is in the root directory
2. Check that `vercel.json` is valid JSON
3. Make sure no conflicting files exist
4. Try deploying with Vercel CLI for detailed logs

## Support

The app is optimized for Vercel's free tier and includes:
- Static site optimization
- CDN-friendly resources
- Mobile-first design
- Error handling
- Performance optimizations

Your app will be live at: `https://your-project-name.vercel.app`