import { useEffect, useState } from "react";
import ButtonFooter from "../components/buttonFooter/buttonFooter";
import Header from "../components/Header";
import { EnterprisesApi } from "../services/api/enterprises";
import { Enterprise } from "../utils/types/enterprises";
import SearchBar from "../components/searchBar";
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

    const numberEnterprises = () => {
        setEnterprisesNumber(enterprises.length)
    }

    useEffect(() => {
        numberEnterprises()
    })

    const handleHereNewEnterprise = () => {
        setIsHome(false);
    }

    const handleHome = () => {
        setIsHome(true);
    }

    const handleSearch = () => {
        const results = enterprises.filter(
        (enterprise) => enterprise.name.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
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
            <SearchBar handleSearch={handleSearch}
                        searchTerm={search}
                        setSearchTerm={setSearch}
            />
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
            {(enterprisesNumber >= rowsPerPage) && <ButtonFooter description={"Carregar mais"} pushClick={() => setRowsPerPage(rowsPerPage + 5)}/>}
            </>
            }
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