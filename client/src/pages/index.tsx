/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import ButtonFooter from "../components/buttonFooter/buttonFooter";
import Header from "../components/Header";
import { EnterprisesApi } from "../services/api/enterprises";
import { Enterprise } from "../utils/types/enterprises";
import SearchBar from "../components/searchBar";
import EnterpriseCard from "../components/enterpriseCard";
import { useRouter } from "next/dist/client/router";
import { CardsContainer } from "./styles";
import { Routes } from "../utils/environment/routes";
import useEnterpriseHook from "../hooks/enterprise";

type HomeProps = {
    enterprises: Enterprise[];
    currentPage: number;
    lastPage: number;
    totalItems: number;
}

export default function Home(props: HomeProps) {
    const {
        enterprises,
        currentPage,
        searchResults,
        setEnterprises,
        setcurrentPage,
        setSearchResults
      } = useEnterpriseHook(props.enterprises);
    const router = useRouter();

    const addNewEnterprises = async (currentPage: number) => {
        const nextPage = (currentPage * 1) + 1;
        setcurrentPage(nextPage);
        const newEnterprises = await EnterprisesApi.getEnterprises(nextPage);
        setEnterprises(prevEnterprises => {
            const newEntities = newEnterprises.entities.filter(
                entity => !prevEnterprises.some(e => e._id === entity._id)
            );
            return [...prevEnterprises, ...newEntities];
        });
    }

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
                {searchResults.map((data: Enterprise) => {
                    return (
                        <EnterpriseCard 
                            key= {data._id} 
                            enterprise={data}
                            enterprises={enterprises}
                            setEnterprises={setEnterprises}
                        />
                    )
                })}
                {(props.lastPage !== currentPage) &&
                    <ButtonFooter description={"Carregar mais"} 
                    pushClick={() => addNewEnterprises(props.currentPage)}
                />}
            </CardsContainer>
        </main>
    )
  }

  export async function getServerSideProps() {
    try {
        const enterprises = await EnterprisesApi.getEnterprises(1);
        return {
            props: {
                enterprises: enterprises.entities,
                currentPage: enterprises.currentPage,
                lastPage: enterprises.lastPage,
                totalItems: enterprises.totalItems
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