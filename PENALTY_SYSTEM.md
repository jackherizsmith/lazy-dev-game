# 🚨 Penalty Alert System

## Overview

The game now features a comprehensive penalty outcome system with **66 unique consequences** that appear when lazy or moderate responses backfire. Each event has custom-written outcomes that add narrative weight and humour to the gameplay.

## How It Works

### Penalty Probability

Based on task importance:
- **Low Importance**: 30% penalty chance (lazy), 10% (moderate)
- **Medium Importance**: 50% penalty chance (lazy), 20% (moderate)
- **High Importance**: 80% penalty chance (lazy), 50% (moderate)
- **Critical Importance**: 100% penalty chance (lazy), 70% (moderate)
- **Diligent Responses**: Never penalised (0% chance)

### Penalty Points

- **Low**: -1 point
- **Medium**: -2 points
- **High**: -3 points
- **Critical**: -5 points (often instant game over)

### Visual Feedback

When a penalty occurs:
1. Red alert banner slides in from top
2. Shows ⚠️ warning icon
3. Displays the penalty amount
4. Shows dramatic consequence text
5. Auto-dismisses after 5 seconds (or manual close)

## Penalty Examples by Category

### Junior Developer Questions (20 outcomes)

**Humorous Failures:**
- "They used Notepad. No syntax highlighting. Took 10x longer. Fell behind."
- "Codebase filled with temp1, temp2, x, y. Code review rejected. Refactor took days."

**Production Issues:**
- "They used == everywhere. '0' == 0 caused critical authentication bypass bug."
- "Global variables everywhere. React rendering broken. Props drilling nightmare."

**Career Damage:**
- "They deleted branch with 3 days of work. Hadn't pushed. All work lost. Quit."

### Bug Reports (23 outcomes)

**Revenue Loss:**
- "£50,000 in failed transactions. Stripe flagged your account. You're fired."
- "Lost a £500k enterprise contract. Client went with competitor who had SSO."

**Security Breaches:**
- "GDPR violation. £20 million fine. Company shutdown. Police investigation."
- "Account takeovers. Customer data breached. ICO fine. Company shut down."

**PR Disasters:**
- "Browser tab consuming 8GB RAM. Users' computers froze. Viral complaint on Reddit."
- "Tech journalist called you out for 'AI-washing'. Viral tweet mocking your product."

### Feature Requests (23 outcomes)

**Lost Opportunities:**
- "Enterprise clients demanded real-time collab. All chose competitors. Revenue down 60%."
- "Field workers in low-connectivity areas couldn't use it. Lost entire vertical."

**Competitive Disadvantage:**
- "Competitor added infinite scroll. Users said their UX was 'so much better'. Lost market share."
- "Onboarding completion rate 15%. Competitors with in-app tutorials at 80%."

**Business Impact:**
- "User accidentally deleted 1000 records. No undo. Support couldn't recover. Lawsuit."
- "SOC 2 audit failed. Lost all enterprise clients. Company facing legal action."

## Severity Levels

### Mild (Low Importance)
- Annoyed colleagues
- Minor delays
- Small bugs
- Aesthetic issues

### Moderate (Medium Importance)
- Support ticket floods
- Conversion drops
- User complaints
- Bad reviews

### Severe (High Importance)
- Lost contracts
- Major downtime
- Security issues
- Client churn

### Catastrophic (Critical Importance)
- Legal violations (GDPR, SOC 2)
- Company shutdown
- £20M+ fines
- Criminal investigations
- Getting fired

## Best Outcomes (Most Dramatic)

1. **GDPR Violation**: "£20 million fine. Company shutdown. Police investigation."
2. **Payment Failure**: "£50,000 in failed transactions. Stripe flagged your account. You're fired."
3. **Memory Leak**: "Tomorrow it made TechCrunch. 'Worst memory leak of 2024'. Stock price dropped."
4. **Data Loss**: "User accidentally deleted 1000 records. No undo. Support couldn't recover. Lawsuit."
5. **Security Breach**: "Account takeovers. Customer data breached. ICO fine. Company shut down."

## Technical Implementation

### Type System
```typescript
interface GameResponse {
  type: ResponseType;
  text: string;
  points: number;
  penaltyOutcome?: string;
}
```

### Store Return
```typescript
{
  pointsChange: number;
  newPoints: number;
  penalty: number;
  penaltyOutcome?: string; // Only if penalty < 0
}
```

### Component
```tsx
<PenaltyAlert 
  outcome={penaltyAlert.outcome}
  penalty={penaltyAlert.penalty}
  onClose={() => setPenaltyAlert(null)}
/>
```

## Writing Style

Penalties follow a consistent tone:
- **Present tense**: "Users can't login" not "Users couldn't login"
- **Specific numbers**: "£50,000 in lost revenue" not "lots of money"
- **Escalation**: Start with immediate impact, then show consequences
- **Dark humour**: Satirical but not mean-spirited
- **Realistic**: Based on real workplace scenarios

## Statistics

- **Total Penalties**: 66 unique outcomes
- **Average Length**: 15-25 words
- **Shortest**: "Quit." (1 word)
- **Longest**: ~50 words (multi-consequence scenarios)
- **Categories**: Tech failures, revenue loss, legal issues, career damage, user impact

## Future Enhancements

Potential additions:
- [ ] Different outcomes based on event importance
- [ ] Chain reactions (one penalty triggers another)
- [ ] "Close call" messages when penalty nearly triggered
- [ ] Success feedback for diligent responses
- [ ] Penalty statistics in game over screen
- [ ] Achievement for "survived without any penalties"

---

The penalty system transforms the game from simple risk/reward into a narrative experience where every lazy choice has a story-driven consequence.
