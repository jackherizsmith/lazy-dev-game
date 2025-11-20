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

  // More Junior Developer Questions
  {
    id: 'jd_6',
    type: 'junior_dev',
    description: 'Junior: "What does this cryptic error message mean?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Error messages are just suggestions',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'Copy it into Stack Overflow search',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "Let me help you debug the root cause",
        points: 0,
      },
    },
  },
  {
    id: 'jd_7',
    type: 'junior_dev',
    description: 'Junior: "Should I commit directly to main?"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'YOLO, ship it!',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'No, read the git workflow docs',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "Let me explain branches and pull requests properly",
        points: 0,
      },
    },
  },
  {
    id: 'jd_8',
    type: 'junior_dev',
    description: 'Junior: "Why is my API call not working?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Did you try turning CORS off?',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'Check the network tab for errors',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll pair programme and debug it with you",
        points: 0,
      },
    },
  },
  {
    id: 'jd_9',
    type: 'junior_dev',
    description: 'Junior: "How do I name this variable?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'x, y, or temp are fine',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'Make it descriptive of what it does',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "Let's review naming conventions together",
        points: 0,
      },
    },
  },
  {
    id: 'jd_10',
    type: 'junior_dev',
    description: 'Junior: "What\'s the difference between == and ===?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'They\'re basically the same',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'Always use ===, it\'s type safe',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "Let me explain type coercion with examples",
        points: 0,
      },
    },
  },
  {
    id: 'jd_11',
    type: 'junior_dev',
    description: 'Junior: "My code works but the tests are failing"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'The tests are probably wrong then',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'Read the test output carefully',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll help you understand what the tests expect",
        points: 0,
      },
    },
  },
  {
    id: 'jd_12',
    type: 'junior_dev',
    description: 'Junior: "Should I write tests for this?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Tests are for people who write bugs',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'Yes, especially for critical paths',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll show you how to write effective tests",
        points: 0,
      },
    },
  },
  {
    id: 'jd_13',
    type: 'junior_dev',
    description: 'Junior: "What\'s the best way to learn React?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Just copy examples from the docs',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'Start with the official React tutorial',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll mentor you through a small project",
        points: 0,
      },
    },
  },
  {
    id: 'jd_14',
    type: 'junior_dev',
    description: 'Junior: "Is it okay to use any as a TypeScript type?"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'any is TypeScript on easy mode',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'Avoid it, defeats the purpose of TypeScript',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "Let me help you type this properly",
        points: 0,
      },
    },
  },
  {
    id: 'jd_15',
    type: 'junior_dev',
    description: 'Junior: "How many comments should I write?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Zero. Code should be self-documenting',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'Only when the logic is complex',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll review your code and show you where comments help",
        points: 0,
      },
    },
  },

  // More Bug Reports
  {
    id: 'br_11',
    type: 'bug_report',
    description: 'User: "Images loading slowly on mobile"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'They should get better internet',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll add lazy loading",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll optimise images and implement progressive loading",
        points: 0,
      },
    },
  },
  {
    id: 'br_12',
    type: 'bug_report',
    description: 'Bug: "Console showing warnings in production"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Users can\'t see the console anyway',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll investigate when I have time",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll clean up the warnings right away",
        points: 0,
      },
    },
  },
  {
    id: 'br_13',
    type: 'bug_report',
    description: 'Report: "Forgot password link is broken"',
    importance: 'high',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'They can just make a new account',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll look into it this afternoon",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll fix the password reset flow immediately",
        points: 0,
      },
    },
  },
  {
    id: 'br_14',
    type: 'bug_report',
    description: 'Bug: "Memory leak causing browser to crash"',
    importance: 'critical',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Just refresh the page periodically',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll profile it tomorrow",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "Emergency! Profiling and fixing now!",
        points: 0,
      },
    },
  },
  {
    id: 'br_15',
    type: 'bug_report',
    description: 'User: "Dropdown menu appears behind modal"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'It\'s a feature - minimalist UI',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll adjust the z-index later",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll fix the layer stacking now",
        points: 0,
      },
    },
  },
  {
    id: 'br_16',
    type: 'bug_report',
    description: 'Report: "API returns 500 errors intermittently"',
    importance: 'critical',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Add a retry button, problem solved',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll check the logs",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll investigate and fix the root cause immediately",
        points: 0,
      },
    },
  },
  {
    id: 'br_17',
    type: 'bug_report',
    description: 'Bug: "Autocomplete suggestions are irrelevant"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Users can just type the full thing',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll tweak the search algorithm",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll improve the ranking and relevance",
        points: 0,
      },
    },
  },
  {
    id: 'br_18',
    type: 'bug_report',
    description: 'User: "Session expires too quickly"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'It\'s for security, deal with it',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll extend the timeout to 30 minutes",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll implement sliding sessions properly",
        points: 0,
      },
    },
  },
  {
    id: 'br_19',
    type: 'bug_report',
    description: 'Bug: "Print stylesheet is completely broken"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Who even prints webpages anymore?',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll add print styles to the backlog",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll create proper print stylesheets",
        points: 0,
      },
    },
  },
  {
    id: 'br_20',
    type: 'bug_report',
    description: 'Report: "Email notifications going to spam"',
    importance: 'high',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Tell them to check their spam folder',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll look into email authentication",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll configure SPF, DKIM, and DMARC properly",
        points: 0,
      },
    },
  },

  // More Feature Requests
  {
    id: 'fr_11',
    type: 'feature_request',
    description: 'Product: "Can we add infinite scroll?"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Pagination works fine, users can click',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll research scroll libraries",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll implement infinite scroll with virtualisation",
        points: 0,
      },
    },
  },
  {
    id: 'fr_12',
    type: 'feature_request',
    description: 'Marketing: "We need social media login buttons"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Email login is plenty',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll add Google OAuth first",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll implement OAuth for Google, Facebook, and Twitter",
        points: 0,
      },
    },
  },
  {
    id: 'fr_13',
    type: 'feature_request',
    description: 'Sales: "Client wants keyboard navigation support"',
    importance: 'high',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Mice exist for a reason',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll add basic tab navigation",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll implement full keyboard accessibility (WCAG 2.1)",
        points: 0,
      },
    },
  },
  {
    id: 'fr_14',
    type: 'feature_request',
    description: 'Product: "Can users customise the dashboard?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Our design is perfect as is',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll add some basic toggles",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll build a drag-and-drop dashboard customiser",
        points: 0,
      },
    },
  },
  {
    id: 'fr_15',
    type: 'feature_request',
    description: 'Marketing: "Add animations to make it pop!"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Animations are so 2010',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll add some subtle transitions",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll create a cohesive animation system",
        points: 0,
      },
    },
  },
  {
    id: 'fr_16',
    type: 'feature_request',
    description: 'Product: "We need real-time collaboration features"',
    importance: 'critical',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Just email each other updates',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll look into WebSocket libraries",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll implement WebSockets with conflict resolution",
        points: 0,
      },
    },
  },
  {
    id: 'fr_17',
    type: 'feature_request',
    description: 'Marketing: "Can we add a chatbot?"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'FAQ page is cheaper',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll integrate a third-party chatbot",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll build a custom chatbot with NLP",
        points: 0,
      },
    },
  },
  {
    id: 'fr_18',
    type: 'feature_request',
    description: 'Sales: "Client needs offline mode support"',
    importance: 'high',
    responses: {
      lazy: {
        type: 'lazy',
        text: "It's a web app, internet required",
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll cache some static assets",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll implement a full PWA with service workers",
        points: 0,
      },
    },
  },
  {
    id: 'fr_19',
    type: 'feature_request',
    description: 'Product: "Add multi-language support"',
    importance: 'high',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Everyone speaks English anyway',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll add support for 3-4 major languages",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll implement i18n with 20+ languages",
        points: 0,
      },
    },
  },
  {
    id: 'fr_20',
    type: 'feature_request',
    description: 'Marketing: "Can we add gamification with badges?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Users should use it because it\'s useful',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll add a basic points system",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll build a full achievement and rewards system",
        points: 0,
      },
    },
  },

  // More varied scenarios
  {
    id: 'jd_16',
    type: 'junior_dev',
    description: 'Junior: "Git says I have merge conflicts, help!"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Delete your branch and start over',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'Read the git conflict markers carefully',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll help you resolve them step by step",
        points: 0,
      },
    },
  },
  {
    id: 'jd_17',
    type: 'junior_dev',
    description: 'Junior: "What\'s the difference between PUT and PATCH?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Just use POST for everything',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'PUT replaces, PATCH updates partially',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "Let me explain REST semantics properly",
        points: 0,
      },
    },
  },
  {
    id: 'jd_18',
    type: 'junior_dev',
    description: 'Junior: "Should I learn Vim or VS Code?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Notepad is fine',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'Start with VS Code, easier learning curve',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll show you the pros and cons of both",
        points: 0,
      },
    },
  },
  {
    id: 'br_21',
    type: 'bug_report',
    description: 'Bug: "Loading spinner never stops on slow connections"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Adds suspense to the user experience',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll add a timeout",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll implement proper loading states with error handling",
        points: 0,
      },
    },
  },
  {
    id: 'br_22',
    type: 'bug_report',
    description: 'User: "Can\'t copy text from the application"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'DRM protection feature',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll remove the user-select: none CSS",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll audit and fix all selection issues",
        points: 0,
      },
    },
  },
  {
    id: 'fr_21',
    type: 'feature_request',
    description: 'Product: "Add undo/redo functionality"',
    importance: 'high',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'People should be more careful',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll add basic undo for the main actions",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll implement a full command pattern with history",
        points: 0,
      },
    },
  },
  {
    id: 'fr_22',
    type: 'feature_request',
    description: 'Marketing: "Can we add video tutorials in-app?"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'YouTube exists for a reason',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll embed some YouTube videos",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll build an interactive tutorial system",
        points: 0,
      },
    },
  },
  {
    id: 'jd_19',
    type: 'junior_dev',
    description: 'Junior: "How do I handle null values in JavaScript?"',
    importance: 'low',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Just use || everywhere',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'Use optional chaining (?.) and nullish coalescing (??)',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll explain the different approaches with examples",
        points: 0,
      },
    },
  },
  {
    id: 'jd_20',
    type: 'junior_dev',
    description: 'Junior: "What\'s the best way to manage state in React?"',
    importance: 'medium',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Global variables work fine',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: 'Start with useState and useContext',
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll explain when to use different state management approaches",
        points: 0,
      },
    },
  },
  {
    id: 'br_23',
    type: 'bug_report',
    description: 'Bug: "Race condition causing duplicate entries"',
    importance: 'critical',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Just dedupe them in the UI',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll add some debouncing",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll implement proper locking and idempotency",
        points: 0,
      },
    },
  },
  {
    id: 'fr_23',
    type: 'feature_request',
    description: 'Sales: "Client wants two-factor authentication"',
    importance: 'critical',
    responses: {
      lazy: {
        type: 'lazy',
        text: 'Strong passwords are enough',
        points: 2,
      },
      moderate: {
        type: 'moderate',
        text: "I'll add SMS 2FA",
        points: 1,
      },
      diligent: {
        type: 'diligent',
        text: "I'll implement TOTP with backup codes",
        points: 0,
      },
    },
  },
];

export function getRandomEvents(count: number = 15): GameEvent[] {
  const shuffled = [...gameEvents].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
