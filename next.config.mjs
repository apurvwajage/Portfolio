/** @type {import('next').NextConfig} */

const basePath = "/Portfolio";

const nextConfig = {
  basePath: basePath,
  assetPrefix: basePath + "/",

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
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
