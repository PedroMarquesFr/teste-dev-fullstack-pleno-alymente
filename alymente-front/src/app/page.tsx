"use client"
import { columns } from "@/components/user-table-columns";
import { DataTable } from "@/components/user-table";
import { PersonContext } from "@/context/PersonContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const { data, fetchUsers } = useContext(PersonContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="m-8">
      <h1 className="text-xl font-bold mb-6">Listagem de dados</h1>
      <section className="m-2">
        <DataTable columns={columns} data={data} />
      </section>
    </main>
  );
}
