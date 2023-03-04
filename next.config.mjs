/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    transpilePackages: ['@reservoir0x/reservoir-kit-ui'],
  },
}
export default nextConfig