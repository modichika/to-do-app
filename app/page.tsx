import { Suspense } from "react";
import { TableRowSkeleton } from "./ui/skeletons";
import { CreateTask } from "./ui/tasks/button";
import TasksTable from "./ui/tasks/table";

export default async function Page()
  {
  return (
        <main>
           <section>
          <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome To Your To-Do-App</h1>
          <p className="text-muted-foreground">Create your lists.</p>
          </div>
          </section>
    <div className="flex items-center justify-between gap-2">
   <div className="flex flex-col gap-1">
   <h2 className="text-2xl font-semibold tracking-tight"> Your Tasks </h2>
   <p className="text-muted-foreground"> Here are the lists of your tasks</p>
   </div>
  </div>
          <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <CreateTask />
            </div>
          <Suspense fallback={<TableRowSkeleton/>}>
          <TasksTable/>
          </Suspense>
          
        </main>
        
  );
}
