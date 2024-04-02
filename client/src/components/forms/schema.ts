import * as yup from "yup";
import { Purpose, Status } from "../../utils/types/enterprises";

export const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  status: yup
    .string()
    .oneOf(Object.keys(Status), 'Status inválido')
    .required('Status é obrigatório'),
  purpose: yup
    .string()
    .oneOf(Object.keys(Purpose), 'Finalidade inválida')
    .required('Finalidade é obrigatório'),
  cep: yup.string().required('CEP é obrigatório'),
  number: yup.string().required('Número é obrigatório'),
  ri_number: yup.string().required('Número do RI é obrigatório'),
  });