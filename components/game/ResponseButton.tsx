'use client';

import { ResponseType } from '@/lib/types/game';
import { Button } from '@/components/ui/Button';

interface ResponseButtonProps {
  responseType: ResponseType;
  text: string;
  points: number;
  onClick: () => void;
  disabled?: boolean;
  keyboardShortcut: string;
}

export function ResponseButton({
  responseType,
  text,
  points,
  onClick,
  disabled,
  keyboardShortcut,
}: ResponseButtonProps) {
  const getVariant = (type: ResponseType) => {
    switch (type) {
      case 'lazy':
        return 'lazy' as const;
      case 'moderate':
        return 'moderate' as const;
      case 'diligent':
        return 'diligent' as const;
    }
  };

  return (
    <Button
      variant={getVariant(responseType)}
      onClick={onClick}
      disabled={disabled}
      className="w-full p-3 text-left flex flex-col items-start gap-1.5 h-auto"
    >
      <div className="flex items-center justify-between w-full">
        <span className="text-xs font-bold opacity-90">{text}</span>
        <div className="flex items-center gap-1.5">
          <span className="text-xs opacity-75 border border-white/30 px-1.5 py-0.5 rounded">
            {keyboardShortcut}
          </span>
          <span className="text-xs font-semibold">+{points} pts</span>
        </div>
      </div>
    </Button>
  );
}
