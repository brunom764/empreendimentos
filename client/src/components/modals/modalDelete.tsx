import { Button, useMediaQuery, useTheme } from "@material-ui/core";
import { EnterprisesApi } from "../../services/api/enterprises";
import Swal from "sweetalert2";
import { Enterprise } from "../../utils/types/enterprises";
import { StyledAlert } from "./style";

type ModalDeleteProps = {
  setOpenModalDelete: (open: boolean) => void;
  id: string;
  enterprises: Enterprise[];
  setEnterprises: (enterprises: Enterprise[]) => void;
};

export default function ModalDelete({
  setOpenModalDelete,
  id,
  enterprises,
  setEnterprises,
}: ModalDeleteProps) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  async function DeleteEnterprise(id: string) {
    try {
      await EnterprisesApi.delete(id);
      const newEnterprises = enterprises.filter(
        (enterprise: Enterprise) => enterprise._id !== id
      );
      setEnterprises(newEnterprises);
      setOpenModalDelete(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo deu errado! Tente novamente mais tarde.",
        footer:
          '<a href="https://www.construtorapatriani.com.br/">Se o erro persistir, contate-nos</a>',
      });
    }
  }

  return (
    <StyledAlert
      severity="error"
      icon={!smallScreen ? null : false}
      action={
        <>
          <Button
            onClick={() => setOpenModalDelete(false)}
            color="inherit"
            size="small"
          >
            Cancelar
          </Button>
          <Button
            onClick={() => DeleteEnterprise(id)}
            color="inherit"
            size="small"
          >
            Confirmar
          </Button>
        </>
      }
    >
      <p>
        Confirma a exclusão<span> do Empreendimento</span>?
      </p>
    </StyledAlert>
  );
}
