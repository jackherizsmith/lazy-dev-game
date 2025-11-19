import { pgTable, serial, text, integer, timestamp, boolean, varchar } from 'drizzle-orm/pg-core';

export const games = pgTable('games', {
  id: serial('id').primaryKey(),
  playerName: varchar('player_name', { length: 100 }),
  score: integer('score').notNull(),
  survived: boolean('survived').notNull(),
  duration: integer('duration').notNull(), // in seconds
  finalTime: varchar('final_time', { length: 10 }).notNull(), // e.g., "2:30pm"
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const gameEvents = pgTable('game_events', {
  id: serial('id').primaryKey(),
  gameId: integer('game_id')
    .references(() => games.id)
    .notNull(),
  eventType: varchar('event_type', { length: 50 }).notNull(), // 'junior_dev', 'bug_report', 'feature_request'
  eventDescription: text('event_description').notNull(),
  responseType: varchar('response_type', { length: 20 }).notNull(), // 'lazy', 'moderate', 'diligent'
  responseText: text('response_text').notNull(),
  pointsChange: integer('points_change').notNull(),
  importance: varchar('importance', { length: 20 }).notNull(), // 'low', 'medium', 'high', 'critical'
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
