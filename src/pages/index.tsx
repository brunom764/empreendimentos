import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import ButtonFooter from "../components/buttonFooter/buttonFooter";
import Header from "../components/Header";
import { IconButton, Input, InputAdornment, Alert, Button, Dialog } from "@material-ui/core";
import { 
    BoxNameEnterprise, 
    ContainerHome,  
    ContentHome, 
    ContentStatus,
    ContainertLupa, 
    ContentLupa, 
} from "./styles";
import { EnterprisesApi } from "../services/api/enterprises";
import { Enterprise } from "../utils/types/enterprises";
import SearchBar from "../components/searchBar";

type HomeProps = {
    enterprises: Enterprise[];
}

export default function Home(props: HomeProps) {
    const [enterprises, setEnterprises] = useState(props.enterprises);
    const [isHome, setIsHome] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [enterprisesNumber, setEnterprisesNumber] = useState(0)
    const [search, setSearch] = useState("")
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [searchResults, setSearchResults] = useState(enterprises);


function numberEnterprises() {
    setEnterprisesNumber(enterprises.length)
}

useEffect(() => {
    numberEnterprises()
})

function handleHereNewEnterprise() {
    setIsHome(false);
}

function handleHome() {
    setIsHome(true);
}


async function DeleteEnterprise(id: string) {
    try {
        await EnterprisesApi.delete(id);
        const newEnterprises = enterprises.filter((enterprise) => enterprise._id !== id);
        setEnterprises(newEnterprises);
        setOpenModalDelete(false);
    } catch (error) {
        console.log(error);
    }
}


const handleSearch = () => {
    const results = enterprises.filter(
      (enterprise) => enterprise.name.toLowerCase().includes(search.toLowerCase())
    );
  
    setSearchResults(results);
  };

    return (
      <>
        <Head>
          <title>ChallengJob</title>
        </Head>

        <main>
            {isHome &&
            <>
            <Header 
                title="Empreendimentos" 
                button={true} 
                IconReturn={false} 
                PushButton={handleHereNewEnterprise}
                PushButtonReturn={handleHome}
            />
            <ContainertLupa>
                <ContentLupa>
                    <SearchBar handleSearch={handleSearch}
                               searchTerm={search}
                               setSearchTerm={setSearch}
                    />
                </ContentLupa>
            </ContainertLupa>
            {searchResults.slice(0, rowsPerPage).map((data: Enterprise) => {
                return (
                    <ContainerHome key={data._id}>
                        <ContentHome>
                            {openModalDelete && 
                                <Alert
                                    maxWidth="md"
                                    severity="error"
                                    action={
                                        <>
                                        <Button onClick={() => setOpenModalDelete(false)}color="inherit" size="small">
                                        Cancelar
                                        </Button>
                                        <Button onClick={() => DeleteEnterprise()}color="inherit" size="small">
                                        Confirmar
                                        </Button>
                                        </>
                                    }
                                >
                                    Confirma a exclusão do Empreendimento?
                                </Alert>
                            }
                            
                            {!openModalDelete && 
                                <div>
                                    <BoxNameEnterprise>                      
                                        <span>{data.name}</span>
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
                                    <p>{data.address.street}, {data.address.number} - {data.address.district}, {data.address.state}</p>
                                </div>
                            }
                            <ContentStatus>
                                <div>{data.status === "RELEASE" ? "Lançamento" : data.status}</div>
                                <div>{data.purpose === "HOME" ? "Residencial" : data.purpose}</div>
                            </ContentStatus>
                        </ContentHome>
                    </ContainerHome>
                )
            })}
            {(enterprisesNumber >= rowsPerPage) && <ButtonFooter description={"Carregar mais"} pushClick={() => setRowsPerPage(rowsPerPage + 5)}/>}
            </>
            }
        </main>
      </>
    )
  }


  export async function getServerSideProps() {
    try {
        const enterprises = await EnterprisesApi.getEnterprises();
        return {
            props: {
                enterprises: enterprises
            }
        }
    } catch (error) {
        console.log(error)
        return {
            props: {
                enterprises: []
            }
        
        }
    }
  }