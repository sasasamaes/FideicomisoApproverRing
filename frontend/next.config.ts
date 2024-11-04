import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/escrow/:path*', // Proxy requests to this route
        destination: 'https://api.trustlesswork.com/escrow/:path*', // External API destination
      },
    ];
  },
};

export default nextConfig;
