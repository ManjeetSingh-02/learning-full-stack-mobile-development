import { db } from '@/lib/db';

export async function GET(_request: Request) {
  try {
    const query = await db`SELECT * FROM users_data`;
    return Response.json({ data: query }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const query = await db`
      INSERT INTO users_data (name, email)
      VALUES (${body.name}, ${body.email})
      RETURNING *
    `;
    return Response.json({ data: query }, { status: 201 });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
