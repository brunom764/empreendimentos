import {Alert, Button, } from "@material-ui/core";
import { EnterprisesApi } from "../../services/api/enterprises";
import Swal from "sweetalert2";

type ModalDeleteProps = {
    setOpenModalDelete: (open: boolean) => void;
    id: string;
    deleteEnterprise: (id: string) => void;
}

export default  function ModalDelete(
    { setOpenModalDelete, id, deleteEnterprise }: ModalDeleteProps) {

    async function DeleteEnterprise(id: string) {
        try {
            await EnterprisesApi.delete(id);
            setOpenModalDelete(false);
            deleteEnterprise(id);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo deu errado! Tente novamente mais tarde.",
                footer: '<a href="https://www.construtorapatriani.com.br/">Se o erro persistir, contate-nos</a>'
              });
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