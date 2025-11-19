'use client';

import { motion } from 'framer-motion';
import { GameEvent } from '@/lib/types/game';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

interface EventCardProps {
  event: GameEvent;
}

export function EventCard({ event }: EventCardProps) {
  const getEventIcon = (type: GameEvent['type']) => {
    switch (type) {
      case 'junior_dev':
        return '👨‍💻';
      case 'bug_report':
        return '🐛';
      case 'feature_request':
        return '✨';
    }
  };

  const getEventTitle = (type: GameEvent['type']) => {
    switch (type) {
      case 'junior_dev':
        return 'Junior Developer Question';
      case 'bug_report':
        return 'Bug Report';
      case 'feature_request':
        return 'Feature Request';
    }
  };

  const getImportanceColour = (importance: GameEvent['importance']) => {
    switch (importance) {
      case 'low':
        return 'bg-blue-100 text-blue-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'critical':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{getEventIcon(event.type)}</span>
              <div>
                <CardTitle className="text-xl">{getEventTitle(event.type)}</CardTitle>
                <span
                  className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase ${getImportanceColour(
                    event.importance
                  )}`}
                >
                  {event.importance}
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">{event.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
