// next.config.mjs

// Check if we are running on GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS || false;

// Set base path and asset prefix based on whether we are on GitHub Actions
const repoName = isGithubActions ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
const basePath = isGithubActions ? `/${repoName}` : '';
const assetPrefix = isGithubActions ? `/${repoName}/` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export for GitHub Pages
  images: {
    unoptimized: true, // Disables Next.js image optimization for static export
  },
  assetPrefix: assetPrefix || undefined, // Only use assetPrefix when in production on GitHub Pages
  basePath: basePath || undefined,       // Only use basePath when in production on GitHub Pages
  publicRuntimeConfig: {
    basePath: basePath, // Expose basePath to the entire app
  },
};

export default nextConfig;

