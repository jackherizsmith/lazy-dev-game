'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="office-bg flex min-h-screen flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl text-center"
      >
        <h1 className="mb-4 text-6xl font-bold">
          <span className="text-5xl">💼</span> Lazy Dev
        </h1>
        <p className="mb-8 text-2xl text-muted-foreground">The Office Survival Game</p>

        <div className="mb-12 rounded-lg border bg-card p-8 text-left shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">How to Play</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-xl">🎯</span>
              <span>
                <strong>Goal:</strong> Survive from 9am to 5pm without getting fired
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">⚡</span>
              <span>
                <strong>Starting Points:</strong> You begin with 5 laziness points
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">💬</span>
              <span>
                <strong>Events:</strong> Respond to junior devs, bug reports, and feature requests
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">🎲</span>
              <span>
                <strong>Choices:</strong> Lazy (+2), Moderate (+1), or Diligent (+0)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">⚠️</span>
              <span>
                <strong>Risk:</strong> Lazy choices can backfire based on task importance!
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">❌</span>
              <span>
                <strong>Game Over:</strong> Reach 0 points and you're replaced by AI
              </span>
            </li>
          </ul>
        </div>

        <Button onClick={() => router.push('/game')} className="px-12 py-6 text-xl">
          Start Your Day
        </Button>

        <p className="mt-6 text-sm text-muted-foreground">
          Use keyboard shortcuts (1, 2, 3) for quick responses
        </p>
      </motion.div>
    </div>
  );
}
