/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // using static images from /public; can enable optimization behind a loader/CDN
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

module.exports = nextConfig;
