import React, { useState } from 'react';
import {Input, InputContainer, ErrorMessage, Select, Button, FormContainer, AddressContainer, SubTitle, InputsContainer } from '../style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../schema';
import { EnterprisesApi } from '../../../services/api/enterprises';
import { Address, getAddress } from '../../../utils/helpers/getAddress';
import Swal from 'sweetalert2';
import { useRouter } from 'next/dist/client/router';
import { Routes } from '../../../utils/environment/routes';
import { Enterprise, Purpose, Status } from '../../../utils/types/enterprises';


type FormValues = {
  name: string;
  status: Status | string;
  purpose: Purpose | string;
  cep: string;
  number: string;
  ri_number: string;
};

export default function RegisterForm () {

  const [address, setAddress] = useState<Address>({
    district: '',
    city: '',
    street: '',
    state: '',
    number: '',
    cep: ''
  });
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData: FormValues) => {
    try {
      const address = await getAddress(formData.cep);
  
      if (!address.cep) {
        setError('cep', {
          type: 'manual',
          message: 'CEP inválido',
        });
        return;
      }
  
      const enterpriseData = prepareEnterpriseData(formData, address);
      const response = await createEnterprise(enterpriseData);
  
      handleSuccessResponse(response);
    } catch (error) {
      handleErrorResponse(error);
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

  const prepareEnterpriseData = (formData: FormValues, address: Address): Omit<Enterprise, '_id'> => {
    return {
      name: formData.name,
      status: formData.status,
      purpose: formData.purpose,
      ri_number: formData.ri_number,
      address: {
        number: formData.number,
        district: address.district,
        city: address.city,
        street: address.street,
        state: address.state,
        cep: address.cep
      },
    };
  };
  
  const createEnterprise = async (enterpriseData: any) => {
    return await EnterprisesApi.create({...enterpriseData});
  };
  
  const handleSuccessResponse = (response: any) => {
    if (response) {
      Swal.fire({
        title: "Empreendimento cadastrado com sucesso! Você deseja cadastrar mais um?",
        showDenyButton: true,
        confirmButtonText: "Sim",
        denyButtonText: `Retornar ao menu`
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        } else {
          router.push(Routes.HOME);
        }
      });
    }
  };
  
  const handleErrorResponse = (error: any) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo deu errado! Tente novamente mais tarde.",
      footer: '<a href="https://www.construtorapatriani.com.br/">Se o erro persistir, contate-nos</a>'
    });
  };

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
      <Button type="submit">Cadastrar</Button>
    </FormContainer>
  );
};
