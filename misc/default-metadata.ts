import { Metadata } from 'next';

export const DEFAULT_METADATA: Metadata = {
  title: '100 Motion Challenges (Or more)',
  description:
    'A collection of 100 motion challenges to help you improve your animation skills.',
  keywords: 'animation, challenges, motion, skills',
  icons: [
    {
      url: '/favicon/favicon.ico',
      type: 'image/x-icon',
    },
    {
      url: '/favicon/favicon-16x16.png',
      type: 'image/png',
      sizes: '16x16',
    },
    {
      url: '/favicon/favicon-32x32.png',
      type: 'image/png',
      sizes: '32x32',
    },
    {
      url: '/favicon/apple-touch-icon.png',
      type: 'image/png',
      sizes: '180x180',
    },
    // Chrome 192x192
    {
      url: '/favicon/android-chrome-192x192.png',
      type: 'image/png',
      sizes: '192x192',
    }, 
    // Chrome 512x512
    {
      url: '/favicon/android-chrome-512x512.png',
      type: 'image/png',
      sizes: '512x512',
    },
  ],
};
