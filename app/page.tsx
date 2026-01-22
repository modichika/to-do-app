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
import { fetchTask } from "@/lib/data";
import { tasks } from "@/lib/placeholder-data";
import CreateTasks from "./ui/tasks";

export default async function Page() {
  const list = await fetchTask();
  return (
        <main>
          <CreateTasks/>
        </main>
        
  );
}
