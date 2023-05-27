/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    experimental: {
      outputStandalone: true,
    },
  },
};

module.exports = nextConfig;
