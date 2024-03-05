"use client";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { ModalEditUser } from "./modal-edit-user";
import { ListCollapse, Trash2 } from "lucide-react";
import { useContext } from "react";
import { PersonContext } from "@/context/PersonContext";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const notVisibleColumns = {
  cpf: false,
  rg: false,
  signo: false,
  mae: false,
  pai: false,
  senha: false,
  cep: false,
  endereco: false,
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    accessorKey: "data_nasc",
    header: "Data de Nascimento",
  },
  {
    accessorKey: "idade",
    header: "Idade",
  },
  {
    accessorKey: "cpf",
    header: "CPF",
  },
  {
    accessorKey: "rg",
    header: "RG",
  },

  {
    accessorKey: "sexo",
    header: "Sexo",
  },
  {
    accessorKey: "signo",
    header: "Signo",
  },
  {
    accessorKey: "mae",
    header: "Nome da Mãe",
  },
  {
    accessorKey: "pai",
    header: "Nome do Pai",
  },
  {
    accessorKey: "senha",
    header: "Senha",
  },
  {
    accessorKey: "cep",
    header: "CEP",
  },
  {
    accessorKey: "endereco",
    header: "Endereço",
  },
  {
    accessorKey: "numero",
    header: "Número",
  },
  {
    header: "Detalhes",
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;
      const router = useRouter();
      return (
        <Button
          variant="outline"
          onClick={() => {
            router.push(
              `/details?nome=${user.nome}&idade=${user.idade}&cpf=${user.cpf}&rg=${user.rg}&data_nasc=${user.data_nasc}&sexo=${user.sexo}&signo=${user.signo}&mae=${user.mae}&pai=${user.pai}&email=${user.email}&senha=${user.senha}&cep=${user.cep}&endereco=${user.endereco}&numero=${user.numero}&bairro=${user.bairro}&cidade=${user.cidade}&estado=${user.estado}&telefone_fixo=${user.telefone_fixo}&celular=${user.celular}&altura=${user.altura}&peso=${user.peso}&tipo_sanguineo=${user.tipo_sanguineo}&cor=${user.cor}`
            );
          }}
        >
          <ListCollapse className="h-4 w-4" />
        </Button>
      );
    },
  },
  {
    header: "Editar",
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;
      return <ModalEditUser user={user} />;
    },
  },
  {
    header: "Deletar",
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const { deleteUser } = useContext(PersonContext);
      const user = row.original;
      return (
        <Button
          variant="outline"
          onClick={() => {
            deleteUser(user.email || "");
          }}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      );
    },
  },
];

// export type Payment = {
//   id: string;
//   amount: number;
//   status: "pending" | "processing" | "success" | "failed";
//   email: string;
// };
// export const columnsEx: ColumnDef<Payment>[] = [
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => (
//       <div className="capitalize">{row.getValue("status")}</div>
//     ),
//   },
//   {
//     accessorKey: "email",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           Email
//           <CaretSortIcon className="ml-2 h-4 w-4" />
//         </Button>
//       );
//     },
//     cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
//   },
//   {
//     accessorKey: "amount",
//     header: () => <div className="text-right">Amount</div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("amount"));

//       // Format the amount as a dollar amount
//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount);

//       return <div className="text-right font-medium">{formatted}</div>;
//     },
//   },
//   {
//     id: "actions",
//     enableHiding: false,
//     cell: ({ row }) => {
//       const payment = row.original;

//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <DotsHorizontalIcon className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem
//               onClick={() => navigator.clipboard.writeText(payment.id)}
//             >
//               Copy payment ID
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>View customer</DropdownMenuItem>
//             <DropdownMenuItem>View payment details</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       );
//     },
//   },
// ];
