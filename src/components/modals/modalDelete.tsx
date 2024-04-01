import {Alert, Button, } from "@material-ui/core";
import { EnterprisesApi } from "../../services/api/enterprises";
import { Enterprise } from "../../utils/types/enterprises";

type ModalDeleteProps = {
    setOpenModalDelete: (open: boolean) => void;
    enterprises: Enterprise[];
    setEnterprises: (enterprises: Enterprise[]) => void;
    id: string;
}

export default  function ModalDelete(
    { setOpenModalDelete, enterprises, setEnterprises, id }: ModalDeleteProps) {

    async function DeleteEnterprise(id: string) {
        try {
            await EnterprisesApi.delete(id);
            const newEnterprises = enterprises.filter((enterprise:Enterprise) => enterprise._id !== id);
            setEnterprises(newEnterprises);
            setOpenModalDelete(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Alert
        severity="error"
        action={
            <>
            <Button onClick={() => setOpenModalDelete(false)}color="inherit" size="small">
            Cancelar
            </Button>
            <Button onClick={() => DeleteEnterprise(id)}color="inherit" size="small">
            Confirmar
            </Button>
            </>
        }
    >
        Confirma a exclusão do Empreendimento?
    </Alert>
    );
}