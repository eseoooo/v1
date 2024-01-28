/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    webVitalsAttribution: ['FCP', 'LCP', 'CLS', 'FID', 'TTFB', 'INP']
  }
};

export default nextConfig;
