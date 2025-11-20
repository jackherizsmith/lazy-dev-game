export type EventType = 'junior_dev' | 'bug_report' | 'feature_request';
export type ResponseType = 'lazy' | 'moderate' | 'diligent';
export type Importance = 'low' | 'medium' | 'high' | 'critical';

export interface GameResponse {
  type: ResponseType;
  text: string;
  points: number;
  penaltyOutcome?: string; // What happens if this choice backfires
}

export interface GameEvent {
  id: string;
  type: EventType;
  description: string;
  importance: Importance;
  responses: {
    lazy: GameResponse;
    moderate: GameResponse;
    diligent: GameResponse;
  };
}

export interface GameState {
  points: number;
  currentTime: string; // e.g., "9:00am"
  currentEventIndex: number;
  events: GameEvent[];
  eventHistory: {
    event: GameEvent;
    chosenResponse: ResponseType;
    pointsChange: number;
  }[];
  isGameOver: boolean;
  survived: boolean;
}
