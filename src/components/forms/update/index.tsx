import React, { useEffect, useState } from 'react';
import {Input, InputContainer, ErrorMessage, Select, Button, FormContainer, AddressContainer, SubTitle, InputsContainer } from '../style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../schema';
import { EnterprisesApi } from '../../../services/api/enterprises';
import { Address, getAddress } from '../../../utils/helpers/getAddress';
import { Enterprise } from '../../../utils/types/enterprises';


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
      address.number = formData.number;
      address.cep = formData.cep;
      const response = await EnterprisesApi.update({...formData, address, _id: enterprise._id});
      if (response) {
        alert('Empreendimento atualizado com sucesso');
      }
    } catch (error) {
      console.error(error);
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
          <option value="SOON_RELEASE">Breve lançamento</option>
          <option value="IN_WORKS">Em obras</option>
          <option value="RELEASE">Lançamento</option>
          <option value="READY">Pronto para morar</option>

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
          <option value="HOME">Residencial</option>
          <option value="COMMERCIAL">Comercial</option>
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
        {errors.status && <ErrorMessage>{errors.status.message}</ErrorMessage>}
      </InputContainer>
      </InputsContainer>
      <Button type="submit">Editar</Button>
    </FormContainer>
  );
};
