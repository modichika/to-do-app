import postgres from 'postgres';
import {tasks} from '@/lib/placeholder-data'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedTasks(){
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS tasks (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL
    );
  `;

  const insertedTasks = await Promise.all(
    tasks.map(async (task) => {
      return sql`
        INSERT INTO tasks (id, name, description)
        VALUES (${task.id}, ${task.name}, ${task.description})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedTasks;

}



export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedTasks(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}