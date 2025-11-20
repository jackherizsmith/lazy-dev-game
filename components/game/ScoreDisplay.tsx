'use client';

import { motion } from 'framer-motion';

interface ScoreDisplayProps {
  points: number;
}

export function ScoreDisplay({ points }: ScoreDisplayProps) {
  const getColour = (points: number) => {
    if (points >= 4) return 'text-green-600';
    if (points >= 2) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="flex items-center gap-1.5">
      <span className="text-xs font-medium text-muted-foreground">Laziness kudos:</span>
      <motion.span
        key={points}
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        className={`text-lg font-bold ${getColour(points)}`}
      >
        {points}
      </motion.span>
    </div>
  );
}
