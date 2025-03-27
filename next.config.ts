import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    '/': ['./features/**/*', './app/features/*'],
  },
  pageExtensions: ['tsx', 'mdx'],
};

export const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX({
  experimental: {
    mdxRs: true,
  },
  ...nextConfig,
});
