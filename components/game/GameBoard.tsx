'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/lib/store/gameStore';
import { ResponseType } from '@/lib/types/game';
import { EventCard } from './EventCard';
import { ResponseButton } from './ResponseButton';
import { ScoreDisplay } from './ScoreDisplay';
import { TimeDisplay } from './TimeDisplay';
import { PenaltyAlert } from './PenaltyAlert';
import { ShareButton } from './ShareButton';

export function GameBoard() {
  const {
    points,
    currentTime,
    currentEventIndex,
    events,
    eventHistory,
    isGameOver,
    survived,
    finalPenaltyOutcome,
    submitResponse,
  } = useGameStore();

  const [penaltyAlert, setPenaltyAlert] = useState<{
    outcome: string;
    penalty: number;
  } | null>(null);

  const [shuffledResponses, setShuffledResponses] = useState<
    Array<{ type: ResponseType; shortcut: string }>
  >([]);

  const currentEvent = events[currentEventIndex];

  // Shuffle responses when event changes
  useEffect(() => {
    if (currentEvent) {
      const responses: Array<{ type: ResponseType; shortcut: string }> = [
        { type: 'lazy', shortcut: '1' },
        { type: 'moderate', shortcut: '2' },
        { type: 'diligent', shortcut: '3' },
      ];

      // Fisher-Yates shuffle
      for (let i = responses.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [responses[i], responses[j]] = [responses[j], responses[i]];
      }

      setShuffledResponses(responses);
    }
  }, [currentEvent]);

  const handleResponse = (responseType: ResponseType) => {
    const result = submitResponse(responseType);

    if (result.penaltyOutcome) {
      setPenaltyAlert({
        outcome: result.penaltyOutcome,
        penalty: result.penalty,
      });
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isGameOver || !currentEvent || shuffledResponses.length === 0) return;

      // Map keyboard shortcuts to the shuffled response types
      const response = shuffledResponses.find(r => r.shortcut === e.key);
      if (response) {
        handleResponse(response.type);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isGameOver, currentEvent, shuffledResponses]);

  if (isGameOver) {
    return (
      <div className="flex min-h-screen items-center justify-center p-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-2xl text-center"
        >
          <div className="rounded-lg border bg-card p-4 shadow-lg">
            <h1 className="mb-2 text-2xl font-bold">
              {survived ? '🎉 You survived one more day!' : "😱 You're fired!"}
            </h1>
            <p className="mb-3 text-base text-muted-foreground">
              {survived
                ? `Made it to 5pm with ${points} laziness kudos remaining!`
                : 'Replaced by AI. Better luck next time!'}
            </p>

            {/* Show final penalty if player was fired due to penalty */}
            {!survived && finalPenaltyOutcome && (
              <div className="mb-3 rounded-lg border-2 border-red-500 bg-red-50 dark:bg-red-950 p-3">
                <div className="mb-1 flex items-center justify-center gap-2">
                  <span className="text-xl">⚠️</span>
                  <h3 className="text-base font-bold text-red-900 dark:text-red-100">
                    What went wrong:
                  </h3>
                </div>
                <p className="text-sm text-red-800 dark:text-red-200">{finalPenaltyOutcome}</p>
              </div>
            )}

            <div className="mb-3 rounded-lg bg-muted p-3">
              <p className="text-sm mb-1">
                <strong>Final Score:</strong> {points} kudos
              </p>
              <p className="text-sm">
                <strong>Events Handled:</strong> {currentEventIndex} / {events.length}
              </p>
            </div>

            {/* Share Results */}
            <div className="mb-3">
              <ShareButton
                gameState={{
                  points,
                  currentTime,
                  currentEventIndex,
                  events,
                  eventHistory,
                  isGameOver,
                  survived,
                  finalPenaltyOutcome,
                }}
              />
            </div>

            <button
              onClick={() => window.location.reload()}
              className="w-full rounded-md bg-primary px-4 py-2.5 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Play Again
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!currentEvent) {
    return (
      <div className="flex min-h-screen items-centre justify-centre">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="office-bg min-h-screen p-3">
      {/* Penalty Alert */}
      {penaltyAlert && (
        <PenaltyAlert
          outcome={penaltyAlert.outcome}
          penalty={penaltyAlert.penalty}
          onClose={() => setPenaltyAlert(null)}
        />
      )}

      <div className="mx-auto max-w-4xl py-4">
        {/* Header */}
        <div className="mb-4 flex items-centre justify-between rounded-lg bg-card p-3 shadow">
          <TimeDisplay currentTime={currentTime} />
          <ScoreDisplay points={points} />
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="mb-1.5 flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>
              {currentEventIndex + 1} / {events.length}
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${((currentEventIndex + 1) / events.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Event Card */}
        <div className="mb-4">
          <AnimatePresence mode="wait">
            <EventCard key={currentEvent.id} event={currentEvent} />
          </AnimatePresence>
        </div>

        {/* Response Buttons */}
        <div className="space-y-2.5">
          {shuffledResponses.map(response => (
            <ResponseButton
              key={response.type}
              responseType={response.type}
              text={currentEvent.responses[response.type].text}
              points={currentEvent.responses[response.type].points}
              onClick={() => handleResponse(response.type)}
              keyboardShortcut={response.shortcut}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
