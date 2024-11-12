// next.config.js

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const isHostinger = process.env.HOSTINGER_DEPLOYMENT || false; // custom environment variable

const repoName = isGithubActions ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: isGithubActions ? `/${repoName}/` : '',
  basePath: isGithubActions && !isHostinger ? `/${repoName}` : '', // Set basePath only for GitHub Pages
};

export default nextConfig;
