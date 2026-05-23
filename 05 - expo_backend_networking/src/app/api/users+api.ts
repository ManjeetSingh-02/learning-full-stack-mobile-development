import { db } from '@/lib/db';

export async function GET(_request: Request) {
  try {
    const query = await db.query('SELECT * FROM users_data');
    return Response.json({ data: query }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
