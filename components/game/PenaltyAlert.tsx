'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface PenaltyAlertProps {
  outcome: string;
  penalty: number;
  onClose: () => void;
}

export function PenaltyAlert({ outcome, penalty, onClose }: PenaltyAlertProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="fixed top-3 left-1/2 z-50 w-full max-w-2xl -translate-x-1/2 px-3"
      >
        <div className="rounded-lg border-2 border-red-500 bg-red-50 dark:bg-red-950 p-3 shadow-xl">
          <div className="flex items-start gap-2">
            <div className="flex-shrink-0">
              <span className="text-2xl">⚠️</span>
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-sm font-bold text-red-900 dark:text-red-100">
                It Backfired! ({penalty} points)
              </h3>
              <p className="text-xs text-red-800 dark:text-red-200">{outcome}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200"
              aria-label="Close alert"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
