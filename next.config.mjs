/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/sample' : '',
  assetPrefix: isProd ? '/sample' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/sample' : ''
  }
};

export default nextConfig;
