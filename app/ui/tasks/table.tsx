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
import { DeleteTask, UpdateTask } from "./button";

export default async function TasksTable(
   
){
  const lists = await fetchTask();
  return(
    <main>      
    <div className="hidden h-full flex-1 flex-col gap-8 p-8 md:flex">
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
    
      {lists.map((list:Task) => (
        
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
        <TableCell>
          <div>
          <UpdateTask id={list.id} />
        </div>
        </TableCell>
        <TableCell>
          <div>
          <DeleteTask id={list.id}/>
        </div>
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