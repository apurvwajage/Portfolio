/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio/",
  
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
