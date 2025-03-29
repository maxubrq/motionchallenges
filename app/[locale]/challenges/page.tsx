import ChallengesService from '@features/challenges/challenges.service';
import HomePage from '@features/homepage/home.page';
import { getCurrentLocale } from '@locales/service';
import { DEFAULT_METADATA } from '@misc';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...DEFAULT_METADATA,
    title: 'Challenges',
  };
}

export default async function Challenges() {
  const locale = await getCurrentLocale();
  const challengesService = new ChallengesService();
  const allChallenges = await challengesService.loadAllChallenges(locale);
  return <HomePage challenges={allChallenges} />;
}
