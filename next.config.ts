import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/resume',
        destination: '/resume/index.html',
      },
    ];
  },
};

export default nextConfig;
