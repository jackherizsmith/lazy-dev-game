import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/client';
import { games } from '@/lib/db/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { playerName, score, survived, duration, finalTime } = body;

    if (typeof score !== 'number' || typeof survived !== 'boolean') {
      return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
    }

    const result = await db
      .insert(games)
      .values({
        playerName: playerName || null,
        score,
        survived,
        duration: duration || 0,
        finalTime: finalTime || '5:00pm',
      })
      .returning();

    return NextResponse.json({ success: true, gameId: result[0].id });
  } catch (error) {
    console.error('Error saving game:', error);
    return NextResponse.json({ error: 'Failed to save game' }, { status: 500 });
  }
}
