import { useState } from 'react';
import { Enterprise } from '../../utils/types/enterprises';

interface UseEnterpriseHook {
  enterprises: Enterprise[];
  searchResults: Enterprise[];
  rowsPerPage: number;
  enterprisesNumber: number;
  setEnterprises: React.Dispatch<React.SetStateAction<Enterprise[]>>;
  setSearchResults: React.Dispatch<React.SetStateAction<Enterprise[]>>;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setEnterprisesNumber: React.Dispatch<React.SetStateAction<number>>;
}

const useEnterpriseHook = (initialEnterprises: any[]): UseEnterpriseHook => {
  const [enterprises, setEnterprises] = useState(initialEnterprises);
  const [searchResults, setSearchResults] = useState(initialEnterprises);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [enterprisesNumber, setEnterprisesNumber] = useState(0);

  return {
    enterprises,
    searchResults,
    rowsPerPage,
    enterprisesNumber,
    setEnterprises,
    setSearchResults,
    setRowsPerPage,
    setEnterprisesNumber,
  };
};

export default useEnterpriseHook;