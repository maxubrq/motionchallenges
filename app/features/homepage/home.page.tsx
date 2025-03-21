'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#030303] text-[#FFEB00]">
      {/* Header */}
      <header className="p-8 border-b-2 border-[#FFEB00]">
        <h1 className="text-5xl font-bold tracking-tight">
          100 Motion Challenges
        </h1>
      </header>

      {/* Hero Section */}
      <section className="px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Dive in. Master motion. No excuses.
          </h2>
          <p className="mb-8 text-xl">
            A bold, raw challenge to push the boundaries of web animation. Join
            the movement, share your journey, and redefine what&#39;s possible.
          </p>
          <Link href="/submit">
            <span className="inline-block bg-[#FFEB00] text-[#030303] px-6 py-3 font-semibold border-2 border-[#FFEB00] hover:bg-[#030303] hover:text-[#FFEB00] transition-colors">
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
          className="max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3"
        >
          {/* Example Challenge Card */}
          <div className="p-6 border-2 border-[#FFEB00] bg-[#FFEB00] text-[#030303]">
            <h3 className="text-2xl font-bold mb-2">Challenge #1</h3>
            <p className="mb-4">Kick off with a simple fade-in effect.</p>
            <Link href="/challenge/challenge-1">
              <span>View Details</span>
            </Link>
          </div>
          <div className="p-6 border-2 border-[#FFEB00] bg-[#FFEB00] text-[#030303]">
            <h3 className="text-2xl font-bold mb-2">Challenge #2</h3>
            <p className="mb-4">
              Build a sliding transition that grabs attention.
            </p>
            <Link href="/challenge/challenge-2">
              <span className="underline">View Details</span>
            </Link>
          </div>
          <div className="p-6 border-2 border-[#FFEB00] bg-[#FFEB00] text-[#030303]">
            <h3 className="text-2xl font-bold mb-2">Challenge #3</h3>
            <p className="mb-4">
              Design an animated navigation menu using motion.
            </p>
            <Link href="/challenge/challenge-3">
              <span className="underline">View Details</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="p-8 border-t-2 border-[#FFEB00] text-center">
        <p className="text-sm">
          Built with motion for those who dare to move. ©{' '}
          {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
