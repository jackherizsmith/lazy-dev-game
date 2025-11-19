import { GameEvent } from '../types/game';

export const gameEvents: GameEvent[] = [
  // Junior Developer Questions - Low Importance
  {
    id: 'jd_1',
    type: 'junior_dev',
    description: 'A junior dev asks: "How do I centre a div?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Have you tried Googling it?',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "Check the CSS docs, there's a few ways to do it",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "Let me show you - flexbox, grid, and margin auto all work",
        points: 0,
      },
    },
  },
  {
    id: 'jd_2',
    type: 'junior_dev',
    description: 'Junior dev: "What\'s the difference between let and const?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: "Just use const for everything, you'll be fine",
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'const is immutable, let is mutable. See MDN for details',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: 'Let me explain with examples and walk you through it',
        points: 0,
      },
    },
  },
  {
    id: 'jd_3',
    type: 'junior_dev',
    description: 'Junior: "My async function isn\'t working, can you help?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Did you remember to await it?',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll look at it after lunch, send me the code",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: 'Let me debug it with you right now',
        points: 0,
      },
    },
  },
  {
    id: 'jd_4',
    type: 'junior_dev',
    description: 'Junior: "Should I use a forEach or a map here?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: "Doesn't really matter, flip a coin",
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'Use map if you need the return value, forEach otherwise',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "Let's review the differences and when to use each",
        points: 0,
      },
    },
  },
  {
    id: 'jd_5',
    type: 'junior_dev',
    description: 'Junior: "How do I handle errors in try/catch blocks?"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Just console.log the error and move on',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'Check the docs on error handling best practices',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll show you proper error handling patterns",
        points: 0,
      },
    },
  },

  // Bug Reports - Low Importance
  {
    id: 'br_1',
    type: 'bug_report',
    description: 'User report: "Button is slightly misaligned by 2px"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: "That's a feature, not a bug - design choice",
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll add it to the backlog for next sprint",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: 'Let me fix the alignment right now',
        points: 0,
      },
    },
  },
  {
    id: 'br_2',
    type: 'bug_report',
    description: 'Bug: "Dark mode has wrong shade of grey (#333 instead of #444)"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Looks the same to me, probably their monitor',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll check the design system docs later",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll update the colour tokens immediately",
        points: 0,
      },
    },
  },
  {
    id: 'br_3',
    type: 'bug_report',
    description: 'User: "Tooltip appears 100ms too slowly"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Working as intended, users need patience',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll tweak the timing when I have a moment",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll adjust the animation timing right away",
        points: 0,
      },
    },
  },

  // Bug Reports - Medium Importance
  {
    id: 'br_4',
    type: 'bug_report',
    description: 'Report: "Form validation not working on Safari"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Tell them to use Chrome like everyone else',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll investigate the Safari compatibility issue",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll test and fix the Safari issue immediately",
        points: 0,
      },
    },
  },
  {
    id: 'br_5',
    type: 'bug_report',
    description: 'Bug: "Search results missing for items added today"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Probably a caching issue, wait 24 hours',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll check the indexing service logs",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll debug the search indexing pipeline now",
        points: 0,
      },
    },
  },
  {
    id: 'br_6',
    type: 'bug_report',
    description: 'Report: "Mobile menu doesn\'t close on navigation"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Users can close it manually, not urgent',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll look at the navigation logic this afternoon",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll fix the menu behaviour immediately",
        points: 0,
      },
    },
  },

  // Bug Reports - High Importance
  {
    id: 'br_7',
    type: 'bug_report',
    description: 'URGENT: "Users can\'t login, getting 500 errors"',
    importance: 'high',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Probably their browser, ask them to clear cache',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll check the logs in 10 minutes",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: 'Dropping everything to debug this now!',
        points: 0,
      },
    },
  },
  {
    id: 'br_8',
    type: 'bug_report',
    description: 'CRITICAL: "Payment processing fails randomly"',
    importance: 'critical',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Works on my machine, probably their card',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll investigate after this meeting",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: 'Emergency! Investigating payment gateway immediately!',
        points: 0,
      },
    },
  },
  {
    id: 'br_9',
    type: 'bug_report',
    description: 'URGENT: "Database queries timing out for 20% of users"',
    importance: 'high',
    responses: {
      lazy: {
        type: 'lazy',
        text: "It's just slow internet on their end",
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll check the database performance metrics",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll optimise the queries and check indexes now",
        points: 0,
      },
    },
  },
  {
    id: 'br_10',
    type: 'bug_report',
    description: 'CRITICAL: "Data deletion not working, users can\'t remove accounts"',
    importance: 'critical',
    responses: {
      lazy: {
        type: 'lazy',
        text: "Good for retention metrics, ship it",
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll fix this before end of day",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: 'GDPR violation! Fixing immediately!',
        points: 0,
      },
    },
  },

  // Feature Requests - Low Importance
  {
    id: 'fr_1',
    type: 'feature_request',
    description: 'Marketing: "Can we make the logo 2px bigger?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'The logo is perfect as is, no changes needed',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll add it to the backlog",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll update the logo size right away",
        points: 0,
      },
    },
  },
  {
    id: 'fr_2',
    type: 'feature_request',
    description: 'Marketing: "Users want the button to be blue instead of green"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: "Green converts better according to 'studies'",
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "Let's A/B test it first",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll change the colour scheme now",
        points: 0,
      },
    },
  },
  {
    id: 'fr_3',
    type: 'feature_request',
    description: 'Marketing: "Can we add a confetti animation on sign-up?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Animations hurt performance, hard pass',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll look into animation libraries",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll implement the confetti effect today",
        points: 0,
      },
    },
  },

  // Feature Requests - Medium Importance
  {
    id: 'fr_4',
    type: 'feature_request',
    description: 'Product: "Can we add export to CSV functionality?"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Users can just copy-paste into Excel',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll research CSV libraries and scope it out",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll implement CSV export this week",
        points: 0,
      },
    },
  },
  {
    id: 'fr_5',
    type: 'feature_request',
    description: 'Marketing: "We need AI integration somewhere in the product"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Just add "AI-powered" to the marketing copy',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll evaluate what AI features make sense",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll research and implement relevant AI features",
        points: 0,
      },
    },
  },
  {
    id: 'fr_6',
    type: 'feature_request',
    description: 'Marketing: "Can we add blockchain integration?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Web3 is dead, moving on',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "Let's discuss the business case first",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll research blockchain integration options",
        points: 0,
      },
    },
  },
  {
    id: 'fr_7',
    type: 'feature_request',
    description: 'Product: "Users requesting dark mode support"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Tell them to use browser extensions',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll plan dark mode implementation",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll implement dark mode this sprint",
        points: 0,
      },
    },
  },

  // Feature Requests - High Importance
  {
    id: 'fr_8',
    type: 'feature_request',
    description: 'Product: "Major client needs SSO integration ASAP"',
    importance: 'high',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'They can use regular login, SSO is overrated',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll scope out SSO requirements this week",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll prioritise SSO implementation immediately",
        points: 0,
      },
    },
  },
  {
    id: 'fr_9',
    type: 'feature_request',
    description: 'Sales: "Enterprise client needs API rate limiting"',
    importance: 'high',
    responses: {
      lazy: {
        type: 'lazy',
        text: "Our servers can handle it, no limits needed",
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll implement basic rate limiting",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll build a robust rate limiting system",
        points: 0,
      },
    },
  },
  {
    id: 'fr_10',
    type: 'feature_request',
    description: 'Compliance: "We need audit logging for regulatory requirements"',
    importance: 'critical',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Regulations are more like guidelines anyway',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll implement basic logging",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll implement comprehensive audit logging now",
        points: 0,
      },
    },
  },
];

export function getRandomEvents(count: number = 15): GameEvent[] {
  const shuffled = [...gameEvents].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
