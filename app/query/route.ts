import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// query/route.ts
async function listTasks() {
  const data = await sql`
    SELECT tasks.name
    FROM tasks
    WHERE tasks.id = '39e45718-901d-491a-b673-318803c44820';
  `;
  return data;
}


export async function GET() {

    try {
    	return Response.json(await listTasks());
    } catch (error) {
    	return Response.json({ error }, { status: 500 });
    }
}
