/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { Enterprise } from "../../utils/types/enterprises";
import ModalDelete from "../modals/modalDelete";
import {
  BoxNameEnterprise,
  ContainerHome,
  ContainerOptions,
  ContentHome,
  ContentOptions,
  ContentStatus,
} from "./styles";
import { Routes } from "../../utils/environment/routes";

type EnterpriseCardProps = {
  enterprise: Enterprise;
  enterprises: Enterprise[];
  setEnterprises: (enterprises: Enterprise[]) => void;
};

export default function EnterpriseCard({
  enterprise,
  setEnterprises,
  enterprises,
}: EnterpriseCardProps) {
  const [openModalDelete, setOpenModalDelete] = useState(false);

  return (
    <ContainerHome>
      <ContentHome>
        {openModalDelete ? (
          <ModalDelete
            setOpenModalDelete={setOpenModalDelete}
            id={enterprise._id}
            setEnterprises={setEnterprises}
            enterprises={enterprises}
          />
        ) : (
          <>
            <BoxNameEnterprise>
              <span>{enterprise.name}</span>
              <p>
                {enterprise.address.street}, {enterprise.address.number} -{" "}
                {enterprise.address.district}, {enterprise.address.state}
              </p>
            </BoxNameEnterprise>
          </>
        )}
        <ContainerOptions isModalOpen={openModalDelete}>
          <ContentStatus>
            <div>
              {enterprise.status === "RELEASE"
                ? "Lançamento"
                : enterprise.status}
            </div>
            <div>
              {enterprise.purpose === "HOME"
                ? "Residencial"
                : enterprise.purpose}
            </div>
          </ContentStatus>
          <ContentOptions>
            <button disabled={openModalDelete}>
            <Link href={`${Routes.UPDATE}/${enterprise._id}`} passHref>
              <img src="/images/Vector.svg" alt="Icone de Lapis" />
            </Link>
            </button>
            <button
              onClick={() => {
                setOpenModalDelete(true);
              }}
              type="button"
              disabled={openModalDelete}
            >
              <img src="/images/Vector-1.svg" alt="Icone de Lixeira" />
            </button>
          </ContentOptions>
        </ContainerOptions>
      </ContentHome>
    </ContainerHome>
  );
}
