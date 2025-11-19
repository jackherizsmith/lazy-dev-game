import { NextResponse } from 'next/server';
import { db } from '@/lib/db/client';
import { games } from '@/lib/db/schema';
import { desc, eq } from 'drizzle-orm';

export async function GET() {
  try {
    const topGames = await db
      .select({
        id: games.id,
        playerName: games.playerName,
        score: games.score,
        survived: games.survived,
        createdAt: games.createdAt,
      })
      .from(games)
      .where(games.survived)
      .orderBy(desc(games.score))
      .limit(10);

    return NextResponse.json({ leaderboard: topGames });
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 });
  }
}
