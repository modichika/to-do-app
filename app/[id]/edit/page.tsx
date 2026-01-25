import { Form } from '@/components/ui/form';
import Breadcrumbs from '@/app/ui/tasks/breadcrumbs';
import { fetchTask, fetchTaskById } from '@/lib/data';
 
export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id; 
   const [task] = await Promise.all([
    fetchTaskById(id),
  ]);
  console.log("Fetched Task:", task);
  {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Tasks', href: '/' },
          {
            label: 'Edit Task',
            href: `/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form initialData={task}/>
    </main>
  );
}
}