/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  // Configured for IONOS root domain deployment
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  // Optimize for SEO
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: ''
  }
};

export default nextConfig;
