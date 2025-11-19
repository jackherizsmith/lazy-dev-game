import { create } from 'zustand';
import { GameState, ResponseType } from '../types/game';
import { getRandomEvents } from '../game/events';
import { STARTING_POINTS, calculatePenalty, calculateNewPoints, isGameOver } from '../game/scoring';
import { getTimeForEvent, TOTAL_EVENTS } from '../game/time';

interface GameStore extends GameState {
  startGame: () => void;
  submitResponse: (responseType: ResponseType) => {
    pointsChange: number;
    newPoints: number;
    penalty: number;
  };
  resetGame: () => void;
}

const initialState: GameState = {
  points: STARTING_POINTS,
  currentTime: getTimeForEvent(0),
  currentEventIndex: 0,
  events: [],
  eventHistory: [],
  isGameOver: false,
  survived: false,
};

export const useGameStore = create<GameStore>((set, get) => ({
  ...initialState,

  startGame: () => {
    const events = getRandomEvents(TOTAL_EVENTS);
    set({
      ...initialState,
      events,
      currentTime: getTimeForEvent(0),
    });
  },

  submitResponse: (responseType: ResponseType) => {
    const state = get();
    const currentEvent = state.events[state.currentEventIndex];

    if (!currentEvent || state.isGameOver) {
      return { pointsChange: 0, newPoints: state.points, penalty: 0 };
    }

    const response = currentEvent.responses[responseType];
    const penalty = calculatePenalty(responseType, currentEvent.importance);
    const pointsChange = response.points + penalty;
    const newPoints = calculateNewPoints(state.points, response.points, penalty);

    const nextEventIndex = state.currentEventIndex + 1;
    const isLastEvent = nextEventIndex >= state.events.length;
    const gameOver = isGameOver(newPoints) || isLastEvent;
    const survived = isLastEvent && newPoints > 0;

    set({
      points: newPoints,
      currentEventIndex: nextEventIndex,
      currentTime: getTimeForEvent(nextEventIndex),
      eventHistory: [
        ...state.eventHistory,
        {
          event: currentEvent,
          chosenResponse: responseType,
          pointsChange,
        },
      ],
      isGameOver: gameOver,
      survived,
    });

    return { pointsChange, newPoints, penalty };
  },

  resetGame: () => {
    set(initialState);
  },
}));
