# GitHub Pages Deployment Guide

This guide will help you deploy your Code Adventures website to GitHub Pages in just a few steps.

## Prerequisites

- GitHub account (free)
- Git installed on your computer
- Node.js and pnpm installed

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon in the top right and select **New repository**
3. Name your repository: `code-adventures` (or any name you prefer)
4. Choose **Public** (required for free GitHub Pages)
5. Click **Create repository**

## Step 2: Initialize Git and Push Code

Open your terminal and run these commands:

```bash
# Navigate to your project directory
cd stem_tutorial_website

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Code Adventures website"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/code-adventures.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** section (left sidebar)
4. Under "Source", select **GitHub Actions**
5. This will automatically use the workflow file we've provided

## Step 4: Deploy with GitHub Actions

The workflow file (`.github/workflows/deploy.yml`) will automatically:
- Build your website when you push code
- Deploy it to GitHub Pages
- Make it live at: `https://YOUR_USERNAME.github.io/code-adventures`

## Step 5: View Your Live Website

After the first push, GitHub Actions will automatically build and deploy your site. 

1. Wait about 1-2 minutes for the build to complete
2. Go to **Settings > Pages** to see your site URL
3. Visit `https://YOUR_USERNAME.github.io/code-adventures` to see your live website!

## Making Updates

After the initial setup, just make changes and push:

```bash
# Make your changes to files

# Add changes
git add .

# Commit changes
git commit -m "Update: describe your changes here"

# Push to GitHub
git push
```

The website will automatically rebuild and update within 1-2 minutes!

## Custom Domain (Optional)

If you have your own domain:

1. Go to **Settings > Pages**
2. Under "Custom domain", enter your domain (e.g., `codeadventures.hk`)
3. Update your domain's DNS settings to point to GitHub Pages
4. GitHub will provide specific DNS records to add

## Troubleshooting

**Build fails?**
- Check the Actions tab in your repository for error messages
- Ensure all files are committed and pushed

**Site not updating?**
- Wait 1-2 minutes for the build to complete
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check the Actions tab to see build status

**Want to use a different branch?**
- Edit `.github/workflows/deploy.yml` and change the `branches` section

## Local Development

To test changes locally before pushing:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

## Build for Production

To create a production build:

```bash
pnpm build
```

The built files will be in the `dist/public` directory.

---

**Need help?** Check GitHub's official Pages documentation: https://docs.github.com/en/pages
