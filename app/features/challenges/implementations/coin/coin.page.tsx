'use client';
import CoinPad from '@/registry/coin/coin-pad';
import { Challenge } from '@features/challenges/type';
import { motion } from 'motion/react';

type CoinPageProps = {} & Challenge;

export default function CoinPage(props: CoinPageProps) {
  const { title, description } = props;
  return (
    <motion.div className="coin-page flex h-screen w-full flex-col px-12 py-6">
      <motion.h1 className="font-heading my-12 text-center text-9xl font-bold">
        {title}
      </motion.h1>
      <motion.p className="mb-8 text-center text-2xl">{description}</motion.p>
      <CoinPad />
    </motion.div>
  );
}
