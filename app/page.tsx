import Add from "./add/page";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

export default function Page() {
  return (
        <main>
          <section>
          <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome To Your To-Do-App</h1>
          <p className="text-muted-foreground">Create your lists.</p>
          </div>
          </section>
         <section>
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
        </div></TableHead>
      <TableHead className="w-[100px]">
        Tasks</TableHead>
      <TableHead>Title</TableHead>
      <TableHead>Description</TableHead>
      
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>
        <div>
        <Checkbox/>
        </div>
      </TableCell>
      <TableCell className="font-medium">Task 1</TableCell>
      <TableCell>Wake Up</TableCell>
      <TableCell>9 AM wake up </TableCell>
      
    </TableRow>
  </TableBody>
</Table>
    </div>
    </div>

</div>
         </section>
        </main>
        
  );
}
