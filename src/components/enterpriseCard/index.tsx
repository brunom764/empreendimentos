/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { BoxNameEnterprise } from "../../pages/styles";
import { Enterprise } from "../../utils/types/enterprises";
import ModalDelete from "../modals/modalDelete";

type EnterpriseCardProps = {
    enterprise: Enterprise;
    enterprises: Enterprise[]; 
    setEnterprises: (enterprises: Enterprise[]) => void; 
}

export default function EnterpriseCard({enterprise, enterprises, setEnterprises }: EnterpriseCardProps) {
    const [openModalDelete, setOpenModalDelete] = useState(false);
    
    return  (
      <div>
       { openModalDelete ?
          (<ModalDelete 
          setOpenModalDelete={setOpenModalDelete}
          enterprises={enterprises}
          setEnterprises={setEnterprises}
          id={enterprise._id}
        />) :
        <>
        <BoxNameEnterprise>                      
            <span>{enterprise.name}</span>
            <img 
                src="/images/Vector.svg" 
                alt="Icone de Lapis" 
                />
                <img 
                onClick={() => {
                    setOpenModalDelete(true);
                }}
                src="/images/Vector-1.svg" 
                alt="Icone de Lixeira" 
            />
        </BoxNameEnterprise>
        <p>{enterprise.address.street}, {enterprise.address.number} - {enterprise.address.district}, {enterprise.address.state}</p>
        </>
        }
    </div>
    )
}