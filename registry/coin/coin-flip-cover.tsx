'use client';
import { motion } from 'motion/react';
import Coin from './coin';
export default function CoinFlipCover() {
  return (
    <motion.div className="coin-pad__content flex h-full w-full flex-row items-center justify-center bg-[url('/background/batthern.png')] border border-gray-700">
      <motion.div className="relative flex h-full w-full flex-row items-center justify-center">
        <Coin autoRotate={true} />
      </motion.div>
    </motion.div>
  );
}
//
