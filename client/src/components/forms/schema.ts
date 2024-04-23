import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  status: yup.string().required("Status é obrigatório"),
  purpose: yup.string().required("Finalidade é obrigatório"),
  cep: yup
    .string()
    .matches(/^\d{5}-\d{3}$/, "CEP deve estar no formato correto")
    .required("CEP é obrigatório"),
  number: yup
    .string()
    .required("Número é obrigatório")
    .matches(/^\d+$/, "Número deve conter apenas números"),
  ri_number: yup
    .string()
    .matches(/^\d+$/, "Número do RI deve conter apenas números")
    .required("Número do RI é obrigatório"),
});
