import type { MDXComponents } from 'mdx/types';
import CoinPad from '@/registry/coin/coin-pad';
import CoinPage from '@features/challenges/implementations/coin/coin.page';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    CoinPad,
    CoinPage,
  };
}
