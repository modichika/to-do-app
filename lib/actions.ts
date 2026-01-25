'use server';

import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import postgres from 'postgres';
import { Task } from "./definitions";
 
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function createTask(data: { name: string; description: string }) {
    
     const {name, description} = data;
     

    await sql`
    INSERT INTO tasks (id, name, description)
    VALUES (gen_random_uuid(), ${name}, ${description})
  `;
    revalidatePath('/');
    redirect('/');
}

export async function updateTask(data: {name: string; description: string; id:string}){
     
        await sql `
        UPDATE tasks 
        SET name = ${data.name}, description = ${data.description}
        WHERE id = ${data.id}
        `;

    revalidatePath('/');
    redirect('/');
 
}

export async function deleteTask(id: string){
   await sql `
   DELETE FROM tasks WHERE id = ${id}
   `;
   revalidatePath("/");
}