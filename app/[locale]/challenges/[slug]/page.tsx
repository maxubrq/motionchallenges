import ChallengesService from '@features/challenges/challenges.service';
import { Challenge } from '@features/challenges/type';
import { getCurrentLocale } from '@locales/service';
import { serialize } from 'next-mdx-remote/serialize';
import ChallengeClientPage from './components/challenge.page';
import { DEFAULT_METADATA } from '@misc';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = await getCurrentLocale();
  const challengeService = new ChallengesService();
  const challenge: Challenge = await challengeService.loadChallengeBySlug(
    (await params).slug,
    locale
  );

  return {
    ...DEFAULT_METADATA,
    title: challenge.title,
    description: challenge.description,
  };
}

export default async function ChallengePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = await getCurrentLocale();
  const challengeService = new ChallengesService();
  const challenge: Challenge = await challengeService.loadChallengeBySlug(
    (await params).slug,
    locale
  );

  const serializeContent = await serialize(challenge.rawContent ?? '');

  return <ChallengeClientPage serializedChallenge={serializeContent} />;
}
