import React from 'react';
import { Container, Title } from './styles';
import RegisterForm from '../components/forms/register';
import Header from '../components/Header';
import { useRouter } from 'next/dist/client/router';

export default function RegisterEnterprise() {
  const router = useRouter();
  const goToHome = () => {
    router.push('/');
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
