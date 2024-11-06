// next.config.mjs

// Check if we are running on GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';

// Configure the asset prefix and base path for GitHub Pages
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, ''); // Get the repo name
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Enables static HTML export for GitHub Pages
  images: {
    unoptimized: true,     // Disables Next.js image optimization
  },
  assetPrefix: isGithubActions ? assetPrefix : undefined, // Set the asset prefix for GitHub Pages
  basePath: isGithubActions ? basePath : undefined,       // Set the base path for GitHub Pages
};

export default nextConfig;