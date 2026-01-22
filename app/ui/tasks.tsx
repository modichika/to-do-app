import { fetchTask } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Task } from "@/lib/definitions";

export default async function CreateTasks(){
    const task = await fetchTask();
    if (!task) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return(
    <main>
    <section>
          <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome To Your To-Do-App</h1>
          <p className="text-muted-foreground">Create your lists.</p>
          </div>
          </section>
         
          <div className="hidden h-full flex-1 flex-col gap-8 p-8 md:flex">
  <div className="flex items-center justify-between gap-2">
   <div className="flex flex-col gap-1">
   <h2 className="text-2xl font-semibold tracking-tight"> Your Tasks </h2>
   <p className="text-muted-foreground"> Here are the lists of your tasks</p>
   </div>
  </div>
    <div className="flex flex-col gap-4">
        
    <div className="overflow-hidden rounded-md border">
      <Table>
  <TableHeader>
    <TableRow>
      <TableHead><div>
        <Checkbox/>
        </div>
        </TableHead>
        <TableHead className="w-[100px]">
        Tasks</TableHead>
        <TableHead>Title</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    
      {task.map((list:Task) => (
         <TableRow key={list.id}>
        <TableCell>
          <Checkbox />
        </TableCell>
        {/* ID goes in the Tasks column */}
        <TableCell className="font-medium">
          {list.name}
        </TableCell>
        {/* Name goes in the Title column */}
        <TableCell>
          {list.description}
        </TableCell>
      </TableRow>
        )
        )}
       
      
  </TableBody>
</Table>
</div>
</div>

</div>
</main>
  );
}