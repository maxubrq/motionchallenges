'use client';

import { useEffect, useState } from 'react';

export default function Logo() {
  const finalText = '100 Motion Challenges';
  const [text, setText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let iterations = 0;
    const maxIterations = 3; // Number of "decode" iterations per character
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

    const interval = setInterval(() => {
      // Create a new string based on current state
      setText((prevText) => {
        let result = prevText;

        // If we haven't completed all characters
        if (currentIndex < finalText.length) {
          // Get random character if still iterating, or final character if done
          const char =
            iterations < maxIterations
              ? characters[Math.floor(Math.random() * characters.length)]
              : finalText[currentIndex];

          // Build the new text
          result =
            prevText.substring(0, currentIndex) +
            char +
            prevText.substring(currentIndex + 1);

          // Increment iteration count
          iterations++;

          // Move to next character when iterations are complete
          if (iterations >= maxIterations + 1) {
            currentIndex++;
            iterations = 0;
          }
        } else {
          // Animation complete
          clearInterval(interval);
        }

        return result;
      });
    }, 25); // Controls animation speed

    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className={`font-logo text-yellow text-9xl font-bold tracking-tight transition-colors duration-1000`}
    >
      {text || ' '.repeat(finalText.length)}
    </h1>
  );
}
