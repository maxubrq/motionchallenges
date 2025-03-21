'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="bg-buried min-h-screen bg-[#030303] text-[#FFEB00]">
      {/* Header */}
      <header className="border-b-2 border-[#FFEB00] p-8">
        <h1 className="font-logo text-9xl font-bold tracking-tight">
          100 Motion Challenges
        </h1>
      </header>

      {/* Hero Section */}
      <section className="px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading mb-4 text-3xl font-bold">
            Dive in. Master motion. No excuses.
          </h2>
          <p className="font-body mb-8 text-xl">
            A bold, raw challenge to push the boundaries of web animation. Join
            the movement, share your journey, and redefine what&#39;s possible.
          </p>
          <Link href="/submit">
            <span className="font-heading inline-block border-2 border-[#FFEB00] bg-[#FFEB00] px-6 py-3 font-semibold text-[#030303] transition-colors hover:bg-[#030303] hover:text-[#FFEB00]">
              Submit Your Challenge
            </span>
          </Link>
        </motion.div>
      </section>

      {/* Challenges Grid */}
      <section className="px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3"
        >
          {/* Example Challenge Card */}
          <div className="border-2 border-[#FFEB00] bg-[#FFEB00] p-6 text-[#030303]">
            <h3 className="mb-2 text-2xl font-bold font-heading">Challenge #1</h3>
            <p className="font-body mb-4">
              Kick off with a simple fade-in effect.
            </p>
            <Link href="/challenge/challenge-1">
              <span className='underline font-heading'>View Details</span>
            </Link>
          </div>
          <div className="border-2 border-[#FFEB00] bg-[#FFEB00] p-6 text-[#030303]">
            <h3 className="mb-2 text-2xl font-bold font-heading">Challenge #2</h3>
            <p className="font-body mb-4">
              Build a sliding transition that grabs attention.
            </p>
            <Link href="/challenge/challenge-2">
              <span className="underline font-heading">View Details</span>
            </Link>
          </div>
          <div className="border-2 border-[#FFEB00] bg-[#FFEB00] p-6 text-[#030303]">
            <h3 className="mb-2 text-2xl font-bold font-heading">Challenge #3</h3>
            <p className="font-body mb-4">
              Design an animated navigation menu using motion.
            </p>
            <Link href="/challenge/challenge-3">
              <span className="underline font-heading">View Details</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-[#FFEB00] p-8 text-center">
        <p className="font-body text-sm font-heading">
          Built with love for those who dare to move. ©{' '}
          {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
