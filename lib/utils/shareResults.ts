import { GameState } from '../types/game';

export function generateShareText(gameState: GameState): string {
  const { survived, points, eventHistory } = gameState;

  // Count lazy choices
  const lazyChoices = eventHistory.filter(h => h.chosenResponse === 'lazy').length;
  const moderateChoices = eventHistory.filter(h => h.chosenResponse === 'moderate').length;
  const diligentChoices = eventHistory.filter(h => h.chosenResponse === 'diligent').length;

  // Game URL
  const gameUrl = typeof window !== 'undefined' ? window.location.origin : 'https://lazy-dev.game';

  // Build share text
  const result = survived ? 'I made it to 5pm!' : 'I was replaced by AI!';
  const emoji = survived ? '💰' : '🤖';

  return `${emoji} ${result}

📊 ${points} kudos
💼 ${eventHistory.length} events

😴 ${lazyChoices} | 😐 ${moderateChoices} | 🤓 ${diligentChoices}

${gameUrl}`;
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        textArea.remove();
        return true;
      } catch (error) {
        console.error('Fallback: Could not copy text', error);
        textArea.remove();
        return false;
      }
    }
  } catch (error) {
    console.error('Could not copy text', error);
    return false;
  }
}
