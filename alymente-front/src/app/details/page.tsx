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
          <AvatarImage src="https://assets-global.website-files.com/5eff59773da5d811be472a26/5f35a54ca83376309fea8041_alymente_LOGO_1_2.svg" />
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
        <DetailsWrapper title="CPF" content={searchParams.cpf || "Nao informado"} />
        <DetailsWrapper title="RG" content={searchParams.rg|| "Nao informado"} />
        <DetailsWrapper
          title="Data de nescimento"
          content={searchParams.data_nasc|| "Nao informado"}
        />
        <DetailsWrapper title="Signo" content={searchParams.signo|| "Nao informado"} />
        <DetailsWrapper
          title="Telefone fixo"
          content={searchParams.telefone_fixo || "Nao informado"}
        />
        <DetailsWrapper title="Mãe" content={searchParams.mae|| "Nao informado"} />
        <DetailsWrapper title="Pai" content={searchParams.pai|| "Nao informado"} />
        <DetailsWrapper title="Senha" content={searchParams.senha|| "Nao informado"} />
      </aside>

      <h2 className="text-lg">Dados físicos</h2>
      <aside className="flex justify-between flex-wrap">
        <DetailsWrapper title="Sexo" content={searchParams.sexo|| "Nao informado"} />
        <DetailsWrapper title="Altura" content={searchParams.altura|| "Nao informado"} />
        <DetailsWrapper title="Idade" content={searchParams.idade|| "Nao informado"} />
        <DetailsWrapper title="Peso" content={searchParams.peso|| "Nao informado"} />
        <DetailsWrapper
          title="Tipo Sanguíneo"
          content={searchParams.tipo_sanguineo|| "Nao informado"}
        />
        <DetailsWrapper title="Cor" content={searchParams.cor|| "Nao informado"} />
      </aside>
      <h2 className="text-lg">Endereço</h2>
      <aside className="flex justify-between flex-wrap">
        <DetailsWrapper title="CEP" content={searchParams.cep|| "Nao informado"} />
        <DetailsWrapper title="Endereço" content={searchParams.endereco|| "Nao informado"} />
        <DetailsWrapper title="numero" content={searchParams.numero|| "Nao informado"} />
        <DetailsWrapper title="Bairro" content={searchParams.bairro|| "Nao informado"} />
        <DetailsWrapper title="Cidade" content={searchParams.cidade|| "Nao informado"} />
        <DetailsWrapper title="Estado" content={searchParams.estado|| "Nao informado"} />
        <DetailsWrapper title="Bairro" content={searchParams.bairro|| "Nao informado"} />
      </aside>
    </section>
  );
};

export default Details;
