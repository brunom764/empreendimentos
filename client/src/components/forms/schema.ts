import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  status: yup
    .string()
    .required('Status é obrigatório'),
  purpose: yup
    .string()
    .required('Finalidade é obrigatório'),
  cep: yup.string().required('CEP é obrigatório'),
  number: yup.string().required('Número é obrigatório'),
  });