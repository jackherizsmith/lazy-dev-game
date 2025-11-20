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

export function GameBoard() {
  const {
    points,
    currentTime,
    currentEventIndex,
    events,
    isGameOver,
    survived,
    finalPenaltyOutcome,
    submitResponse,
  } = useGameStore();

  const [penaltyAlert, setPenaltyAlert] = useState<{
    outcome: string;
    penalty: number;
  } | null>(null);

  const currentEvent = events[currentEventIndex];

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
      if (isGameOver || !currentEvent) return;

      const keyMap: Record<string, ResponseType> = {
        '1': 'lazy',
        '2': 'moderate',
        '3': 'diligent',
      };

      const responseType = keyMap[e.key];
      if (responseType) {
        handleResponse(responseType);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isGameOver, currentEvent]);

  if (isGameOver) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-2xl text-center"
        >
          <div className="rounded-lg border bg-card p-8 shadow-lg">
            <h1 className="mb-4 text-4xl font-bold">
              {survived ? '🎉 You Survived!' : '😱 You\'re Fired!'}
            </h1>
            <p className="mb-6 text-xl text-muted-foreground">
              {survived
                ? `Made it to 5pm with ${points} laziness points remaining!`
                : 'Replaced by AI. Better luck next time!'}
            </p>

            {/* Show final penalty if player was fired due to penalty */}
            {!survived && finalPenaltyOutcome && (
              <div className="mb-6 rounded-lg border-2 border-red-500 bg-red-50 dark:bg-red-950 p-4">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  <h3 className="text-lg font-bold text-red-900 dark:text-red-100">
                    What Went Wrong:
                  </h3>
                </div>
                <p className="text-red-800 dark:text-red-200">{finalPenaltyOutcome}</p>
              </div>
            )}

            <div className="mb-6 rounded-lg bg-muted p-4">
              <p className="text-lg">
                <strong>Final Score:</strong> {points} points
              </p>
              <p className="text-lg">
                <strong>Events Handled:</strong> {currentEventIndex} / {events.length}
              </p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="w-full rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
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
    <div className="office-bg min-h-screen p-4">
      {/* Penalty Alert */}
      {penaltyAlert && (
        <PenaltyAlert
          outcome={penaltyAlert.outcome}
          penalty={penaltyAlert.penalty}
          onClose={() => setPenaltyAlert(null)}
        />
      )}

      <div className="mx-auto max-w-4xl py-8">
        {/* Header */}
        <div className="mb-8 flex items-centre justify-between rounded-lg bg-card p-4 shadow">
          <TimeDisplay currentTime={currentTime} />
          <ScoreDisplay points={points} />
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="mb-2 flex justify-between text-sm text-muted-foreground">
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
        <div className="mb-6">
          <AnimatePresence mode="wait">
            <EventCard key={currentEvent.id} event={currentEvent} />
          </AnimatePresence>
        </div>

        {/* Response Buttons */}
        <div className="space-y-4">
          <ResponseButton
            responseType="lazy"
            text={currentEvent.responses.lazy.text}
            points={currentEvent.responses.lazy.points}
            onClick={() => handleResponse('lazy')}
            keyboardShortcut="1"
          />
          <ResponseButton
            responseType="moderate"
            text={currentEvent.responses.moderate.text}
            points={currentEvent.responses.moderate.points}
            onClick={() => handleResponse('moderate')}
            keyboardShortcut="2"
          />
          <ResponseButton
            responseType="diligent"
            text={currentEvent.responses.diligent.text}
            points={currentEvent.responses.diligent.points}
            onClick={() => handleResponse('diligent')}
            keyboardShortcut="3"
          />
        </div>

        {/* Help text */}
        <p className="mt-6 text-centre text-sm text-muted-foreground">
          Use keyboard shortcuts 1, 2, 3 or click to respond
        </p>
      </div>
    </div>
  );
}
