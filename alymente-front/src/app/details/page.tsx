import DetailsWrapper from "@/components/details-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, Mail } from "lucide-react";
import React from "react";

interface DetailsProps {
  searchParams: User;
}
const Details: React.FC<DetailsProps> = ({ searchParams }) => {
  return (
    <section className="m-8">
      <h1 className="text-xl font-bold mb-6">Visualização de dados</h1>
      <section className="flex items-center mb-4">
        <Avatar className="mr-3">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <aside className="flex flex-col">
          <p>{searchParams.nome}</p>
          <section className="flex text-gray-500">
            <p className="flex items-center mr-6">
              <Phone width={14} className="mr-1" />
              {searchParams.celular}
            </p>
            <p className="flex items-center">
              <Mail width={14} className="mr-1" />
              {searchParams.email}
            </p>
          </section>
        </aside>
      </section>
      <h2 className="text-lg">Detalhes</h2>
      <aside className="flex justify-between flex-wrap">
        <DetailsWrapper title="CPF" content={searchParams.cpf} />
        <DetailsWrapper title="RG" content={searchParams.rg} />
        <DetailsWrapper
          title="Data de nescimento"
          content={searchParams.data_nasc}
        />
        <DetailsWrapper title="Signo" content={searchParams.signo} />
        <DetailsWrapper
          title="Telefone fixo"
          content={searchParams.telefone_fixo}
        />
        <DetailsWrapper title="Mãe" content={searchParams.mae} />
        <DetailsWrapper title="Pai" content={searchParams.pai} />
        <DetailsWrapper title="Senha" content={searchParams.senha} />
      </aside>

      <h2 className="text-lg">Dados físicos</h2>
      <aside className="flex justify-between flex-wrap">
        <DetailsWrapper title="Sexo" content={searchParams.sexo} />
        <DetailsWrapper title="Altura" content={searchParams.altura} />
        <DetailsWrapper title="Idade" content={searchParams.idade} />
        <DetailsWrapper title="Peso" content={searchParams.peso} />
        <DetailsWrapper
          title="Tipo Sanguíneo"
          content={searchParams.tipo_sanguineo}
        />
        <DetailsWrapper title="Cor" content={searchParams.cor} />
      </aside>
      <h2 className="text-lg">Endereço</h2>
      <aside className="flex justify-between flex-wrap">
        <DetailsWrapper title="CEP" content={searchParams.cep} />
        <DetailsWrapper title="Endereço" content={searchParams.endereco} />
        <DetailsWrapper title="numero" content={searchParams.numero} />
        <DetailsWrapper title="Bairro" content={searchParams.bairro} />
        <DetailsWrapper title="Cidade" content={searchParams.cidade} />
        <DetailsWrapper title="Estado" content={searchParams.estado} />
        <DetailsWrapper title="Bairro" content={searchParams.bairro} />
      </aside>
    </section>
  );
};

export default Details;
