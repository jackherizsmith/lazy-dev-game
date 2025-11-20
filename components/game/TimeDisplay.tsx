'use client';

interface TimeDisplayProps {
  currentTime: string;
}

export function TimeDisplay({ currentTime }: TimeDisplayProps) {
  return (
    <div className="flex items-center gap-1.5">
      <svg
        className="h-4 w-4 text-muted-foreground"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="text-sm font-semibold">{currentTime}</span>
    </div>
  );
}
