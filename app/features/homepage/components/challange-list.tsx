'use client';

import { Challenge } from '@features/challenges/type';
import { motion } from 'motion/react';
import ChallengeItem from './challenge-item';
import { useState } from 'react';
import { ScrollArea } from '@ui/scroll-area';
type ChallengesListProps = {
  challenges: Challenge[];
};
export default function ChallengesList({ challenges }: ChallengesListProps) {
  const [hoverItem, setHoverItem] = useState<string>('');

  const onChallengeHover = (challenge: Challenge) => {
    setHoverItem(challenge.slug ?? '');
  };
  const onChallengeLeave = () => {
    setHoverItem('');
  };

  return (
    <motion.section
      className="home-page__content flex h-full w-full flex-1 flex-col items-start justify-start overflow-hidden"
      onMouseLeave={onChallengeLeave}
    >
      <ScrollArea className='w-full h-full'>
        {challenges.map((challenge, i) => {
          return (
            <ChallengeItem
              key={`challenge-${i}-${challenge.slug}`}
              challenge={challenge}
              onChallengeHover={onChallengeHover}
              isHover={hoverItem === challenge.slug}
            />
          );
        })}
      </ScrollArea>
    </motion.section>
  );
}
