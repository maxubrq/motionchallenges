'use client';
import CoinPad from '@/registry/coin/coin-pad';
import { Challenge } from '@features/challenges/type';
import { useCurrentLocale } from '@locales/client';
import { motion } from 'motion/react';
import { COIN_CONTENT } from './locale';
import CoinFlipCover from '@/registry/coin/coin-flip-cover';

type CoinPageProps = {} & Challenge;

export default function CoinPage(props: CoinPageProps) {
  const { title, description } = props;
  const locale = useCurrentLocale();

  const css = `
    .line {
      margin: 1rem 2rem;
    }
  `;
  return (
    <motion.div className="coin-page flex h-screen w-full flex-col px-12 py-6">
      <style jsx>{css}</style>
      <motion.h1 className="font-heading my-12 text-center text-9xl font-bold">
        {title}
      </motion.h1>
      <motion.p className="mb-8 text-center text-2xl">{description}</motion.p>
      <motion.p className="line">{COIN_CONTENT[locale].line1}</motion.p>
      <motion.p className="line">
        {COIN_CONTENT[locale].line2}{' '}
        <motion.a href="/resources/coin.svg" className="text-blue-500" target='_blank'>
          {locale === 'en' ? 'here' : 'đây'}
        </motion.a>
      </motion.p>
      <motion.div className="my-12 flex h-[400px] flex-row items-center justify-center">
        <motion.div className="my-12 flex h-full w-1/3 flex-col">
          <CoinFlipCover />
        </motion.div>
      </motion.div>
      <CoinPad />
    </motion.div>
  );
}
