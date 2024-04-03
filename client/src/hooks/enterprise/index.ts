import { useState } from 'react';
import { Enterprise } from '../../utils/types/enterprises';

interface UseEnterpriseHook {
  enterprises: Enterprise[];
  searchResults: Enterprise[];
  currentPage: number;
  setEnterprises: React.Dispatch<React.SetStateAction<Enterprise[]>>;
  setSearchResults: React.Dispatch<React.SetStateAction<Enterprise[]>>;
  setcurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const useEnterpriseHook = (initialEnterprises: any[]): UseEnterpriseHook => {
  const [enterprises, setEnterprises] = useState(initialEnterprises);
  const [searchResults, setSearchResults] = useState(initialEnterprises);
  const [currentPage, setcurrentPage] = useState(1);

  return {
    enterprises,
    searchResults,
    currentPage,
    setEnterprises,
    setSearchResults,
    setcurrentPage,
  };
};

export default useEnterpriseHook;