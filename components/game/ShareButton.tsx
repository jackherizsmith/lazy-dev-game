'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GameState } from '@/lib/types/game';
import { generateShareText, copyToClipboard } from '@/lib/utils/shareResults';

interface ShareButtonProps {
  gameState: GameState;
}

export function ShareButton({ gameState }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const shareText = generateShareText(gameState);

  const handleShare = async () => {
    const success = await copyToClipboard(shareText);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="w-full">
      <div className="flex gap-2">
        <button
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-1.5 rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white hover:bg-secondary/90 transition-colors"
        >
          {copied ? (
            <>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Copied to Clipboard!
            </>
          ) : (
            <>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share Results
            </>
          )}
        </button>

        <button
          onClick={() => setShowPreview(!showPreview)}
          className="rounded-md border-2 border-secondary px-2.5 py-2 text-sm font-semibold text-secondary hover:bg-secondary/10 transition-colors"
          aria-label="Preview share text"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={showPreview ? 'M19 9l-7 7-7-7' : 'M15 12a3 3 0 11-6 0 3 3 0 016 0z'}
            />
            {!showPreview && (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Preview */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-3 rounded-lg bg-muted p-3 text-left">
              <p className="mb-1.5 text-xs font-semibold uppercase text-muted-foreground">
                Preview:
              </p>
              <pre className="whitespace-pre-wrap text-xs font-mono">{shareText}</pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
