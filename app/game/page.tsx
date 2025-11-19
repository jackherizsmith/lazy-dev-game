'use client';

import { useEffect } from 'react';
import { useGameStore } from '@/lib/store/gameStore';
import { GameBoard } from '@/components/game/GameBoard';

export default function GamePage() {
  const startGame = useGameStore(state => state.startGame);

  useEffect(() => {
    startGame();
  }, [startGame]);

  return <GameBoard />;
}
