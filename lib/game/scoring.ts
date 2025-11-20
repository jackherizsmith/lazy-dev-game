import { Importance, ResponseType } from '../types/game';

export const STARTING_POINTS = 1;
export const WIN_THRESHOLD = 0;

export const IMPORTANCE_PENALTIES: Record<Importance, number> = {
  low: -1,
  medium: -2,
  high: -3,
  critical: -5,
};

// Determine if a lazy/moderate response causes a penalty
export function calculatePenalty(responseType: ResponseType, importance: Importance): number {
  // Diligent responses never get penalties
  if (responseType === 'diligent') {
    return 0;
  }

  // Lazy responses have higher chance of penalty
  if (responseType === 'lazy') {
    // Critical: 100% penalty
    // High: 80% penalty
    // Medium: 50% penalty
    // Low: 30% penalty
    const penaltyChance = {
      critical: 1.0,
      high: 0.8,
      medium: 0.5,
      low: 0.3,
    };

    if (Math.random() < penaltyChance[importance]) {
      return IMPORTANCE_PENALTIES[importance];
    }
  }

  // Moderate responses have lower chance of penalty
  if (responseType === 'moderate') {
    // Critical: 70% penalty
    // High: 50% penalty
    // Medium: 20% penalty
    // Low: 10% penalty
    const penaltyChance = {
      critical: 0.7,
      high: 0.5,
      medium: 0.2,
      low: 0.1,
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
