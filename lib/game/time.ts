export const WORK_DAY_START = 9; // 9am
export const WORK_DAY_END = 17; // 5pm
export const TOTAL_WORK_HOURS = WORK_DAY_END - WORK_DAY_START; // 8 hours
export const TOTAL_EVENTS = 15;

export function getTimeForEvent(eventIndex: number, totalEvents: number = TOTAL_EVENTS): string {
  // Calculate the time based on event progress
  const progress = eventIndex / totalEvents;
  const totalMinutes = TOTAL_WORK_HOURS * 60;
  const currentMinutes = Math.floor(progress * totalMinutes);

  const hour = WORK_DAY_START + Math.floor(currentMinutes / 60);
  const minute = currentMinutes % 60;

  // Format as 12-hour time
  const isPM = hour >= 12;
  const displayHour = hour > 12 ? hour - 12 : hour;
  const period = isPM ? 'pm' : 'am';

  // Pad minutes with zero if needed
  const displayMinute = minute.toString().padStart(2, '0');

  return `${displayHour}:${displayMinute}${period}`;
}

export function getEndOfDayTime(): string {
  return '5:00pm';
}

export function calculateDuration(startTime: Date, endTime: Date): number {
  return Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
}
