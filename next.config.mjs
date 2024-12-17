/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.hashnode.com',
          pathname: '/**',
        },
      ],
    },
  };
export default nextConfig;
