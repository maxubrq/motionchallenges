import HomePage from '@features/homepage/home.page';
import { DEFAULT_METADATA } from '@misc';

export function generateMetadata() {
  return {
    ...DEFAULT_METADATA,
  };
}

export default function Home() {
  return <HomePage />;
}
