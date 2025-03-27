'use client';

import { useMDXComponents } from '@/mdx-components';
import { MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote';
import { Suspense, useEffect, useState } from 'react';

export type ChallengePageProps = {
  serializedChallenge: MDXRemoteSerializeResult;
};
export default function ChallengeClientPage({
  serializedChallenge,
}: ChallengePageProps) {
  const [mounted, setMounted] = useState(false);
  const components = useMDXComponents({});

  // Wait for browser mount to render MDX content
  useEffect(() => {
    console.log('ChallengeClientPage mounted');
    setMounted(true);
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {mounted && (
        <MDXRemote {...serializedChallenge} components={components} />
      )}
    </Suspense>
  );
}
