import React from 'react';
import { Container, Title } from './styles';
import RegisterForm from '../components/forms/register';

export default function RegisterEnterprise() {

  return (
    <Container>
      <Title>Cadastro de Empreendimento</Title>
      <RegisterForm />
    </Container>
  );
}
