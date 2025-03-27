import HomePage from '@features/homepage/home.page';
import { DEFAULT_METADATA } from '@misc';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...DEFAULT_METADATA,
    title: 'Challenges',
  };
}

export default function Challenges() {
  return <HomePage />;
}
