// next.config.js
const nextConfig = {
  env: {
    NEXT_PUBLIC_HOST_URL: process.env.NODE_ENV === 'production' ? 'https://rewards11.com' : 'http://localhost:3000'
  },
  experimental: {
    transpilePackages: ['@reservoir0x/reservoir-kit-ui'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/market',
        permanent: true,
      },
      // {
      //   source: '/metadata',
      //   destination: '/metadata/pages',
      //   permanent: true,
      // },
    ]
  },
};

module.exports = nextConfig;
// next.config.js