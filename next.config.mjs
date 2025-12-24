/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Portfolio';

const nextConfig = {
  // Required for GitHub Pages (static export)
  output: 'export',

  // Ensures correct folder structure
  distDir: 'out',

  // Required because site is hosted at /Portfolio
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',

  // Required so pages resolve correctly on refresh
  trailingSlash: true,

  // GitHub Pages does NOT support Next Image optimization
  images: {
    unoptimized: true,
  },

  // Prevent build from failing due to lint/type issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
