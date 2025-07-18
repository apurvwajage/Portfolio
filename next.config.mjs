/** @type {import('next').NextConfig} */

// This variable checks if the build is for production (like on GitHub Pages)
const isProd = process.env.NODE_ENV === 'production';

// Define the repository name
const repoName = "/Portfolio";


const basePath = "/Portfolio";

const nextConfig = {
  basePath: isProd ? repoName : "",
  assetPrefix: isProd ? repoName + "/" : "",

  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoName : "",
  },

  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
