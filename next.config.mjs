const isGithubActions = process.env.GITHUB_ACTIONS || false;
const isProduction = process.env.NODE_ENV === "production";
const isGitHubPages = typeof window !== "undefined" && window.location.hostname === "chas3pap3rs.github.io";
const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  target: 'serverless',
  output: 'export',
  basePath: '',
  assetPrefix: isProd ? '' : undefined,
  images: {
    unoptimized: true, // Disable image optimization to prevent Next.js from using a server-based image optimization service
  },
  assetPrefix: isGitHubPages ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '', // Only apply basePath for GitHub Pages
  basePath: isGitHubPages ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '', // Only apply basePath for GitHub Pages

  // For Hostinger, the basePath should not be used
};

export default nextConfig;
