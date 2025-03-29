import ChallengesService from '@features/challenges/challenges.service';
import { Challenge } from '@features/challenges/type';
import HomePage from '@features/homepage/home.page';
import { getCurrentLocale } from '@locales/service';
import { DEFAULT_METADATA } from '@misc';

export function generateMetadata() {
  return {
    ...DEFAULT_METADATA,
  };
}

export default async function Home() {
  const challengeService = new ChallengesService();
  const locale = await getCurrentLocale();
  const allChallenges: Challenge[] =
    await challengeService.loadAllChallenges(locale);
  return <HomePage challenges={allChallenges} />;
}
