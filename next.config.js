// next.config.js
const nextConfig = {
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