import { Button } from "@/components/ui/button";
import { columns } from "@/components/user-table-columns";
import { DataTable } from "@/components/user-table";
import { getUsers } from "@/services/users";

export default async function Home() {
  const users = await getUsers();
  console.log("asdasd", users);
  return (
    <main className="">
      <section className="m-11">
        <DataTable columns={columns} data={users} />
      </section>
    </main>
  );
}
