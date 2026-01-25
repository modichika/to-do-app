import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";

export function TableRowSkeleton() {
    const skeletonRows = Array.from({ length: 2 });
  return (
    <main> 
   
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead className="w-[100px]">
                    <Skeleton className="h-4 w-12" /> {/* Placeholder for "Tasks" */}
                  </TableHead>
                  <TableHead>
                    <Skeleton className="h-4 w-16" /> {/* Placeholder for "Title" */}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {skeletonRows.map((_, i) => (
                  <TableRow key={i}>
                    <TableCell></TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-24" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-48" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          
</main>

  );
}

export function AddTasksTableSkeleton() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-7">
      <div className="flex flex-col gap-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-8 w-full" />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-full" />
      </div>
      <Skeleton className="h-8 w-24" />
    </div>
  )
}
