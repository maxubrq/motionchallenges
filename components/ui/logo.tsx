import { cn } from '@lib/utils';
import Link from 'next/link';
import { motion } from 'motion/react';

export type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn('inline-block cursor-pointer', className)}
      >
        100 Motion Challenges
      </motion.span>
    </Link>
  );
}
