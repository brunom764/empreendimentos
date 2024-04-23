import React, { useEffect, useState } from 'react';
import {Input, InputContainer, ErrorMessage, Select, Button, FormContainer, AddressContainer, SubTitle, InputsContainer } from '../style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../schema';
import { EnterprisesApi } from '../../../services/api/enterprises';
import { Address, getAddress } from '../../../utils/helpers/getAddress';
import { Enterprise, Purpose, Status } from '../../../utils/types/enterprises';
import Swal from 'sweetalert2';
import { useRouter } from 'next/dist/client/router';
import { Routes } from '../../../utils/environment/routes';


type FormValues = {
  name: string;
  status: string;
  purpose: string;
  cep: string;
  number: string;
  ri_number: string;
};

export default function UpdateForm ({enterprise}: {enterprise: Enterprise}) {

  const [address, setAddress] = useState<Address>(enterprise.address);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors},
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("name", enterprise.name);
    setValue("status", enterprise.status);
    setValue("purpose", enterprise.purpose);
    setValue("cep", enterprise.address.cep);
    setValue("number", enterprise.address.number);
    setValue("ri_number", enterprise.ri_number);
  }, [setValue, enterprise]);


  const onSubmit = async (formData: FormValues) => {
    try {
      const address = await getAddress(formData.cep);
      address.number = formData.number;
      const response = await EnterprisesApi.update({...formData, address, _id: enterprise._id});
      if (response) {
        Swal.fire({
          title: "Empreendimento atualizado com sucesso! Você deseja continuar editando-o?",
          showDenyButton: true,
          confirmButtonText: "Sim",
          denyButtonText: `Retornar ao menu `
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          } else if (result) {
              router.push(Routes.HOME);
          }
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo deu errado! Tente novamente mais tarde.",
        footer: '<a href="https://www.construtorapatriani.com.br/">Se o erro persistir, contate-nos</a>'
      });
    }
  };

  const updateAddress = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const cep = event.target.value;
    try {
      const address = await getAddress(cep);
      setAddress(address);
    } catch (error) {
      setError('cep', {
        type: 'manual',
        message: 'CEP inválido',
      });
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputsContainer>
      <SubTitle>Informações</SubTitle>
      <InputContainer>
      <Select id="status" {...register("status")} >
        {Object.entries(Status).map(([key, value]) => (
          <option key={key} value={value}>
            {value}
          </option>
      ))}
         </Select>
        {errors.status && <ErrorMessage>{errors.status.message}</ErrorMessage>}
      </InputContainer>
      
      <InputContainer>
        <Input
          type="text"
          id="name"
          {...register("name")}
          placeholder="Nome do Empreendimento"
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </InputContainer>

      <InputContainer>
        <Input
          type="text"
          id="ri_number"
          {...register("ri_number")}
          placeholder="Número do RI"
        />
        {errors.ri_number && <ErrorMessage>{errors.ri_number.message}</ErrorMessage>}
      </InputContainer>

      <InputContainer>
      <Select id="purpose" {...register("purpose")} >
        {Object.entries(Purpose).map(([key, value]) => (
          <option key={key} value={value}>
            {value}
          </option>
      ))}
        </Select>
        {errors.purpose && <ErrorMessage>{errors.purpose.message}</ErrorMessage>}
      </InputContainer>

      <InputContainer>
        <Input
          type="text"
          id="cep"
          {...register("cep")}
          placeholder="CEP"
          onChange={(e) => {
            if (e.target.value.length === 8) {
                updateAddress(e);
            }
        }}
        />
        {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
      </InputContainer>

      {address.city && (
        <AddressContainer>
          <span>{address.street},</span> <br></br>
          <span>{address.district},</span> <br></br>
          <span>{address.city},</span> <br></br>
          <span>{address.state}</span>
        </AddressContainer>
      )}

      <InputContainer>
        <Input
          type="text"
          id="number"
          placeholder="Number"
          {...register("number")}
        />
        {errors.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}
      </InputContainer>
      </InputsContainer>
      <Button type="submit">Editar</Button>
    </FormContainer>
  );
};
