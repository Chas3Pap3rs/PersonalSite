const isGithubActions = process.env.GITHUB_ACTIONS || false;
const isProduction = process.env.NODE_ENV === "production";
const isGitHubPages = typeof window !== "undefined" && window.location.hostname === "chas3pap3rs.github.io";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization to prevent Next.js from using a server-based image optimization service
  },
  assetPrefix: isGitHubPages ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '', // Only apply basePath for GitHub Pages
  basePath: isGitHubPages ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '', // Only apply basePath for GitHub Pages

  // For Hostinger, the basePath should not be used
};

export default nextConfig;
