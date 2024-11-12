const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repoName = isGithubActions ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: isGithubActions ? `/${repoName}/` : '',
  basePath: isGithubActions ? `/${repoName}` : '',
};

export default nextConfig;
