import { Form } from "@/components/ui/form";
import Breadcrumbs from "../ui/tasks/breadcrumbs";
import { fetchTask } from "@/lib/data";


export default async function Add() {
  const lists = await fetchTask();
  return (
        <main>
          <Breadcrumbs
        breadcrumbs={[
          { label: 'Tasks', href: '/' },
          {
            label: 'Create Task',
            href: '/add',
            active: true,
          },
        ]}
      />
      <Form/>
        </main>  
  );
}