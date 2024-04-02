import React from 'react';
import { Container } from './styles';
import RegisterForm from '../components/forms/register';
import Header from '../components/Header';
import { useRouter } from 'next/dist/client/router';
import { Routes } from '../utils/environment/routes';

export default function RegisterEnterprise() {
  const router = useRouter();
  const goToHome = () => {
    router.push(Routes.HOME);
  }
  return (
    <>
        <Header 
                  title="Cadastro de Empreendimento" 
                  button={false} 
                  IconReturn={true} 
                  PushButton={() => {}}
                  PushButtonReturn={goToHome}
              />
      <Container>
        <RegisterForm />
      </Container>
    </>
  );
}
