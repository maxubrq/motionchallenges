'use client';
import { Challenge } from '@features/challenges/type';
import { useChangeLocale, useCurrentLocale } from '@locales/client';
import { Button } from '@ui/button';
import Logo from '@ui/logo';
import { Tooltip, TooltipContent, TooltipTrigger } from '@ui/tooltip';
import { SunMoon } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import ChallengesList from './components/challange-list';

type HomePageProps = {
  challenges: Challenge[];
};
export default function HomePage({ challenges }: HomePageProps) {
  const pages: {
    en: { name: string; slug: string }[];
    vi: { name: string; slug: string }[];
  } = {
    en: [
      {
        name: 'About',
        slug: 'about',
      },
    ],
    vi: [
      {
        name: 'Giới thiệu',
        slug: 'about',
      },
    ],
  };

  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const { setTheme, theme } = useTheme();
  const pageByLocale = pages[locale];

  const pageSlugWithLocale = (slug: string) => `/${locale}/${slug}`;

  const handlerLocaleChange = (newLocale: string) => {
    changeLocale(newLocale as 'en' | 'vi');
  };

  const handlerThemeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <motion.main className="home-page relative flex h-screen w-screen flex-col overflow-hidden">
      <motion.section className="home-page__header flex flex-row items-center justify-between px-12 py-6">
        <Logo className="font-logo font-light" />
        <motion.nav
          className="home-page__nav flex flex-row items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
          layout
        >
          <motion.ul className="flex space-x-4">
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
          <motion.div className="ml-4 flex flex-row items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  onClick={() =>
                    handlerLocaleChange(locale === 'en' ? 'vi' : 'en')
                  }
                >
                  {locale === 'en' ? 'EN' : 'VI'}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {locale === 'vi'
                  ? 'Chuyển sang tiếng Anh'
                  : 'Switch to Vietnamese'}
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" onClick={() => handlerThemeChange()}>
                  <SunMoon />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {locale === 'vi'
                  ? 'Chuyển sang chế độ sáng/tối'
                  : 'Switch to light/dark mode'}
              </TooltipContent>
            </Tooltip>
          </motion.div>
        </motion.nav>
      </motion.section>
      <motion.div className="home-page__content-title my-12 flex w-full flex-row items-start justify-start px-12 py-6">
        <motion.h1
          className="font-heading text-center text-6xl font-bold text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {locale === 'en' ? 'Challenges' : 'Thử thách'}
          <motion.span> {`[${challenges.length}]`}</motion.span>
        </motion.h1>
      </motion.div>
      <motion.div className="flex flex-1 flex-row items-center justify-center">
        <ChallengesList challenges={challenges} />
      </motion.div>
    </motion.main>
  );
}
