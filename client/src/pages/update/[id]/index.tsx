import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { Container } from '../../styles';
import Header from '../../../components/Header';
import { EnterprisesApi } from '../../../services/api/enterprises';
import { Enterprise } from '../../../utils/types/enterprises';
import { GetServerSidePropsContext } from 'next';
import UpdateForm from '../../../components/forms/update';
import { Routes } from '../../../utils/environment/routes';

type UpdateEnterpriseType = {
    enterprise: Enterprise;
}

export default function UpdateEnterprise({ enterprise }: UpdateEnterpriseType) {
  const router = useRouter();
  const goToHome = () => {
    router.push(Routes.HOME);
  }
  return (
    <>
        <Header 
                  title="Editar Empreendimento" 
                  button={false} 
                  IconReturn={true} 
                  PushButton={() => {}}
                  PushButtonReturn={goToHome}
        />
      <Container>
        <UpdateForm enterprise={enterprise} />
      </Container>
    </>
  );
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
    try {
        const { id } = context.params as { id: string };
        const enterprise = await EnterprisesApi.getEnterprise(id);
        return {
            props: {
                enterprise: enterprise
            }
        }
    } catch (error) {
        console.log(error)
        return { redirect: { destination: Routes.HOME, permanent: false } };
    }
}