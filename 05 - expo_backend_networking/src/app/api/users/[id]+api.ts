import { db } from '@/lib/db';

type Params = {
  id: string;
};

export async function GET(_request: Request, params: Params) {
  try {
    const query = await db`SELECT * FROM users_data WHERE id = ${params.id}`;
    return Response.json({ data: query }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}

export async function PATCH(request: Request, params: Params) {
  try {
    const body = await request.json();
    await db`UPDATE users_data SET name = ${body.name} WHERE id = ${params.id}`;
    return Response.json({ message: 'User updated successfully' }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}

export async function DELETE(_request: Request, params: Params) {
  try {
    await db`DELETE FROM users_data WHERE id = ${params.id}`;
    return Response.json({ message: 'User deleted successfully' }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
