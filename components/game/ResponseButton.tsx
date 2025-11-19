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

  const getLabel = (type: ResponseType) => {
    switch (type) {
      case 'lazy':
        return 'Lazy';
      case 'moderate':
        return 'Moderate';
      case 'diligent':
        return 'Diligent';
    }
  };

  return (
    <Button
      variant={getVariant(responseType)}
      onClick={onClick}
      disabled={disabled}
      className="w-full p-6 text-left flex flex-col items-start gap-2 h-auto"
    >
      <div className="flex items-center justify-between w-full">
        <span className="font-bold text-base">{getLabel(responseType)}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs opacity-75 border border-white/30 px-2 py-1 rounded">
            {keyboardShortcut}
          </span>
          <span className="text-sm font-semibold">+{points} points</span>
        </div>
      </div>
      <span className="text-sm font-normal opacity-90">{text}</span>
    </Button>
  );
}
