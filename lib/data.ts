import postgres from "postgres";
import { Task } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, {ssl: require});

export async function fetchTask(){
    try{
    const data = await sql<Task[]>`SELECT id, name, description FROM tasks`;
    return data;
    } catch(error){
        console.error('Database Error:', error);
        throw new Error('Failed to fetch task.');
    }
}