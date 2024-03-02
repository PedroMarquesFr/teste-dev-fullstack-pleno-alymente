import { z } from "zod";
const formSchema = z.object({
  nome: z.string().min(2).max(50),
  idade: z.number().int().positive(),
  cpf: z.string(),
  rg: z.string(),
  data_nasc: z.string().optional(),
  sexo: z.string().optional(),
  signo: z.string().refine((value) => signos.includes(value), {
    message: "Signo inválido",
  }).optional(),
  mae: z.string().optional(),
  pai: z.string().optional(),
  email: z.string().email(),
  senha: z.string().min(6),
  cep: z.string().optional(),
  endereco: z.string().optional(),
  numero: z.number().int().positive().optional(),
  bairro: z.string().optional(),
  cidade: z.string().optional(),
  estado: z.string().refine((value) => estados.includes(value), {
    message: "Estado inválido",
  }).optional(),
  telefone_fixo: z.string().min(6).optional(),
  celular: z.string().min(6).optional(),
  altura: z.string().optional(),
  peso: z.number().positive().optional(),
  tipo_sanguineo: z
    .string()
    .refine(
      (value) =>
        ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].includes(value),
      {
        message: "Tipo sanguíneo inválido",
      }
    ).optional(),
  cor: z.string().optional(),
});

const signos = [
  "Áries",
  "Touro",
  "Gêmeos",
  "Câncer",
  "Leão",
  "Virgem",
  "Libra",
  "Escorpião",
  "Sagitário",
  "Capricórnio",
  "Aquário",
  "Peixes",
];

const estados = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];
const tiposSanguineos = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
export { formSchema, signos, estados, tiposSanguineos };
