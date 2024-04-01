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
import ModalDelete from "../components/modals/modalDelete";
import EnterpriseCard from "../components/enterpriseCard";

type HomeProps = {
    enterprises: Enterprise[];
}

export default function Home(props: HomeProps) {
    const [enterprises, setEnterprises] = useState(props.enterprises);
    const [isHome, setIsHome] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [enterprisesNumber, setEnterprisesNumber] = useState(0)
    const [search, setSearch] = useState("")
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
                               <EnterpriseCard  
                                enterprise={data}
                                enterprises={enterprises}
                                setEnterprises={setEnterprises}
                            />
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