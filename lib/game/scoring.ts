import { Importance, ResponseType } from '../types/game';

export const STARTING_POINTS = 1;
export const WIN_THRESHOLD = 0;

export const IMPORTANCE_PENALTIES: Record<Importance, number> = {
  low: -2,
  medium: -4,
  high: -6,
  critical: -8,
};

// Determine if a lazy/moderate response causes a penalty
export function calculatePenalty(responseType: ResponseType, importance: Importance): number {
  // Diligent responses never get penalties
  if (responseType === 'diligent') {
    const penaltyChance = {
      critical: 0.1,
      high: 0.1,
      medium: 0.2,
      low: 0.2,
    };

    if (Math.random() < penaltyChance[importance]) {
      return IMPORTANCE_PENALTIES[importance];
    }
  }

  // Lazy responses have higher chance of penalty
  if (responseType === 'lazy') {
    const penaltyChance = {
      critical: 0.8,
      high: 0.7,
      medium: 0.6,
      low: 0.5,
    };

    if (Math.random() < penaltyChance[importance]) {
      return IMPORTANCE_PENALTIES[importance];
    }
  }

  // Moderate responses have lower chance of penalty
  if (responseType === 'moderate') {
    const penaltyChance = {
      critical: 0.6,
      high: 0.5,
      medium: 0.4,
      low: 0.3,
    };

    if (Math.random() < penaltyChance[importance]) {
      return IMPORTANCE_PENALTIES[importance];
    }
  }

  return 0;
}

export function calculateNewPoints(
  currentPoints: number,
  responsePoints: number,
  penalty: number
): number {
  return currentPoints + responsePoints + penalty;
}

export function isGameOver(points: number): boolean {
  return points <= WIN_THRESHOLD;
}
