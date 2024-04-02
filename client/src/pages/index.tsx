/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ButtonFooter from "../components/buttonFooter/buttonFooter";
import Header from "../components/Header";
import { EnterprisesApi } from "../services/api/enterprises";
import { Enterprise } from "../utils/types/enterprises";
import SearchBar from "../components/searchBar";
import EnterpriseCard from "../components/enterpriseCard";
import { useRouter } from "next/dist/client/router";
import { CardsContainer } from "./styles";
import { Routes } from "../utils/environment/routes";

type HomeProps = {
    enterprises: Enterprise[];
}

export default function Home(props: HomeProps) {
    const [enterprises, setEnterprises] = useState(props.enterprises);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [enterprisesNumber, setEnterprisesNumber] = useState(0)
    const [searchResults, setSearchResults] = useState(enterprises);
    const router = useRouter();

    const numberEnterprises = () => {
        setEnterprisesNumber(enterprises.length)
    }

    useEffect(() => {
        numberEnterprises()
    })

    const handleSearch = (search?: string) => {
        if (!search) {
            setSearchResults(enterprises);
            return;
        }
        const results = enterprises.filter(
        (enterprise) => enterprise.name.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(results);
    };

    useEffect(() => {
        handleSearch()
    }, [enterprises])

    const goToRegister = () => {
        router.push(Routes.REGISTER);
    }

    return (
        <main>
            <Header 
                title="Empreendimentos" 
                button={true} 
                IconReturn={false} 
                PushButton={goToRegister}
                PushButtonReturn={() => {}}
            />
            <SearchBar handleSearch={handleSearch}/>
            <CardsContainer>
                {searchResults.slice(0, rowsPerPage).map((data: Enterprise) => {
                    return (
                        <EnterpriseCard 
                            key= {data._id} 
                            enterprise={data}
                            enterprises={enterprises}
                            setEnterprises={setEnterprises}
                        />
                    )
                })}
                {(enterprisesNumber >= rowsPerPage) &&
                    <ButtonFooter description={"Carregar mais"} 
                    pushClick={() => setRowsPerPage(rowsPerPage + 5)}
                />}
            </CardsContainer>
        </main>
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