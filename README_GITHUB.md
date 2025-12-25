# Code Adventures - STEM Tutorial Website

A modern, bilingual (English & Traditional Chinese) website for Code Adventures, offering Python programming courses for S1-S3 students and Google Blockly courses for P4-P6 students in Hong Kong.

## Features

- **Bilingual Support**: Full English and Traditional Chinese translations with easy language switching
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern UI**: Built with React, Tailwind CSS, and shadcn/ui components
- **Course Information**: Detailed pages for Python and Google Blockly courses
- **Contact Form**: Easy way for students and parents to get in touch
- **Testimonials**: Student reviews and success stories
- **Company Information**: Mission, vision, and teaching philosophy

## Quick Start

### Local Development

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Start development server**:
   ```bash
   pnpm dev
   ```

3. **Open in browser**:
   - Navigate to `http://localhost:3000`
   - You should see the website running

### Build for Production

```bash
pnpm build
```

The built files will be in the `dist/public` directory.

## Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click **+** → **New repository**
3. Name it: `code-adventures` (or your preferred name)
4. Choose **Public** (required for free GitHub Pages)
5. Click **Create repository**

### Step 2: Push Your Code

```bash
# Initialize git (if needed)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Code Adventures website"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/code-adventures.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Go to **Pages** (left sidebar)
4. Under "Source", select **GitHub Actions**
5. The workflow will automatically deploy your site!

### Step 4: View Your Live Website

After pushing, GitHub Actions will automatically build and deploy your website:

- **URL**: `https://YOUR_USERNAME.github.io/code-adventures`
- **Time to deploy**: Usually 1-2 minutes
- Check the **Actions** tab to see build progress

## Making Updates

After the initial setup, updating is simple:

```bash
# Make changes to your files

# Stage changes
git add .

# Commit with a message
git commit -m "Update: describe your changes"

# Push to GitHub
git push
```

Your website will automatically rebuild and update within 1-2 minutes!

## Project Structure

```
stem_tutorial_website/
├── client/
│   ├── src/
│   │   ├── pages/          # Page components
│   │   ├── components/     # Reusable UI components
│   │   ├── contexts/       # React contexts (Language, Theme)
│   │   ├── App.tsx         # Main app component
│   │   └── main.tsx        # Entry point
│   ├── public/             # Static assets
│   └── index.html          # HTML template
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── vite.config.ts          # Vite configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## Customization

### Change Company Information

Edit `client/src/contexts/LanguageContext.tsx` to update:
- Company name
- Location
- Course descriptions
- Testimonials
- Contact information

### Update Styling

- **Colors**: Edit `client/src/index.css`
- **Tailwind Config**: Edit `tailwind.config.ts`
- **Components**: Modify files in `client/src/components/`

### Add Images

1. Place images in `client/public/images/`
2. Reference them in components: `<img src="/images/your-image.jpg" />`

## Technologies Used

- **React 19**: UI framework
- **Vite**: Build tool and dev server
- **Tailwind CSS 4**: Utility-first CSS
- **shadcn/ui**: Pre-built UI components
- **TypeScript**: Type-safe JavaScript
- **Wouter**: Lightweight routing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Build Fails on GitHub Actions

1. Check the **Actions** tab in your repository
2. Click the failed workflow to see error details
3. Common issues:
   - Missing dependencies: Run `pnpm install` locally
   - Syntax errors: Check `pnpm build` output locally

### Website Not Updating

1. Wait 1-2 minutes for the build to complete
2. Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. Check the **Actions** tab to confirm deployment succeeded

### Port Already in Use

If port 3000 is busy:
```bash
# Vite will automatically use the next available port
pnpm dev
```

## Custom Domain

To use your own domain (e.g., `codeadventures.hk`):

1. Go to **Settings → Pages** in your GitHub repository
2. Enter your domain under "Custom domain"
3. Update your domain's DNS settings to point to GitHub Pages
4. GitHub will provide specific DNS records to add

See [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for details.

## Performance Tips

- Images are optimized for web
- Code is minified in production
- Lazy loading for better performance
- Responsive images for different screen sizes

## Support & Help

- **GitHub Issues**: Report bugs in your repository
- **GitHub Discussions**: Ask questions
- **GitHub Pages Docs**: https://docs.github.com/en/pages

## License

This project is open source and available for personal and commercial use.

---

**Happy coding! 🚀**

For more information, see `GITHUB_DEPLOYMENT.md` for detailed deployment instructions.
