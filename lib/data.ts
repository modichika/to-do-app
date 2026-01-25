import postgres from "postgres";
import { Task } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, {ssl: require});

export async function fetchTask(){
    try{
        console.log('Fetching data...');
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await sql<Task[]>`SELECT id, name, description FROM tasks`;
    console.log('Data fetch completed after 3 seconds.');
    return data;
    } catch(error){
        console.error('Database Error:', error);
        throw new Error('Failed to fetch task.');
    }
}

// const ITEMS_PER_PAGE = 6;
// export async function fetchFilteredLists(
//     query: string,
//     currentPage: number,
// ) {
//     const offset = (currentPage - 1) * ITEMS_PER_PAGE;

//     try {
//         const invoices = await sql<Task[]>`
//       SELECT id, name, description FROM tasks
//     `;

//         return invoices;
//     } catch (error) {
//         console.error('Database Error:', error);
//         throw new Error('Failed to fetch invoices.');
//     }
// }

// export async function fetchListsPages(query: string) {
//     try {
//         const data = await sql`SELECT COUNT(*)
//     FROM tasks
//   `;
//         const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
//         return totalPages;
//     } catch (error) {
//         console.error('Database Error:', error);
//         throw new Error('Failed to fetch total number of invoices.');
//     }
// }


export async function fetchTaskById(id: string){
       try{
        const data = await sql<Task[]>`SELECT id, name, description FROM tasks WHERE id = ${id}`;
        const task = data[0];

        const formattedTask = {
      id: task.id,
      name: task.name, // Rename it here!
      description: task.description,
    };
        

        console.log('Formatted task...', formattedTask);
        return formattedTask;
       }catch(error){
           console.error('Database Error:', error);
        throw new Error('Failed to fetch task.');
       }
}