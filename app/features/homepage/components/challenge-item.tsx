/* eslint-disable @typescript-eslint/no-explicit-any */
import { Challenge } from '@features/challenges/type';
import { useCurrentLocale } from '@locales/client';
import { AnimatePresence, motion } from 'motion/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const CoinFlipCover = dynamic(() => import('@/registry/coin/coin-flip-cover'), {
  ssr: false,
});

type ChallengeItemProps = {
  challenge: Challenge;
  onChallengeHover?: (challenge: Challenge) => void;
  isHover?: boolean;
};

const COVER_COMPONENTS: { [key: string]: any } = {
  CoinFlipCover: CoinFlipCover,
};

function getCover(cover: string) {
  if (cover.startsWith('component:')) {
    const componentName = cover.split(':')[1];
    return COVER_COMPONENTS[componentName] || null;
  } else {
    const imgSrc = cover.split('image:')[1];
    return (
      <motion.img
        src={imgSrc}
        alt="cover"
        className="h-full w-full object-cover"
      />
    );
  }
}

export function ChallengeItemCover({ challenge }: ChallengeItemProps) {
  const Cover = getCover(challenge.cover ?? 'image:/default.jpg');
  return (
    <motion.div className="challenge-item-cover flex h-[clamp(240px,20vh,400px)] w-1/4 flex-row items-center justify-center">
      <Cover />
    </motion.div>
  );
}

export function ChallengeItemInfo({ challenge }: ChallengeItemProps) {
  return (
    <motion.div className="challenge-item-info flex h-full w-3/4 flex-col items-start justify-start px-12 py-6">
      <motion.h2 className="text-5xl font-bold font-heading">{challenge.title}</motion.h2>
      <motion.p className="text-md mt-8 text-gray-500">
        {challenge.description}
      </motion.p>
    </motion.div>
  );
}

export default function ChallengeItem({
  challenge,
  isHover,
  onChallengeHover,
}: ChallengeItemProps) {
  const locale = useCurrentLocale();
  const slugWithLocale = `/${locale}/challenges/${challenge.slug}`;
  const router = useRouter();
  const onChallengeClick = () => {
    router.push(slugWithLocale);
  };
  return (
    <>
      <motion.div
        className="challenge-item relative flex w-full cursor-pointer flex-row items-center justify-start overflow-hidden"
        initial={{ opacity: 0.5, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        onClick={onChallengeClick}
        transition={{ duration: 0.5, type: 'spring' }}
        layout
        onHoverStart={() => {
          if (onChallengeHover) {
            onChallengeHover(challenge);
          }
        }}
      >
        <ChallengeItemCover challenge={challenge} />
        <ChallengeItemInfo challenge={challenge} />
        <AnimatePresence initial={false}>
          {isHover && (
            <motion.div
              layoutId="challenge-selected"
              className="bg-yellow absolute top-0 right-0 bottom-0 z-10 h-full w-[3px]"
            ></motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
