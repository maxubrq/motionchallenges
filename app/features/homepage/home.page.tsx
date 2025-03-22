'use client';
import { useCurrentLocale } from '@locales/client';
import Logo from '@ui/logo';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function HomePage() {
  const pages: {
    en: { name: string; slug: string }[];
    vi: { name: string; slug: string }[];
  } = {
    en: [
      {
        name: 'Gallery',
        slug: 'gallery',
      },
      {
        name: 'About',
        slug: 'about',
      },
    ],
    vi: [
      {
        name: 'Thư viện',
        slug: 'gallery',
      },
      {
        name: 'Giới thiệu',
        slug: 'about',
      },
    ],
  };

  const locale = useCurrentLocale();
  const pageByLocale = pages[locale];

  const pageSlugWithLocale = (slug: string) => `/${locale}/${slug}`;

  return (
    <motion.main className="home-page flex h-screen w-screen flex-col overflow-hidden">
      <motion.section className="home-page__header flex flex-row items-center justify-between px-12 py-6">
        <Logo className="font-logo font-light" />
        <motion.nav className="home-page__nav" layout>
          <motion.ul
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
          >
            {pageByLocale.map((page) => (
              <motion.li key={page.slug}>
                <Link href={pageSlugWithLocale(page.slug)}>
                  <motion.span
                    className="font-heading inline-block cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {page.name}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </motion.section>
    </motion.main>
  );
}
