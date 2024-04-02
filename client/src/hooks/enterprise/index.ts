import { useState } from 'react';

interface UseEnterpriseHook {
  enterprises: any[];
  rowsPerPage: number;
  enterprisesNumber: number;
  setEnterprises: React.Dispatch<React.SetStateAction<any[]>>;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setEnterprisesNumber: React.Dispatch<React.SetStateAction<number>>;
}

const useEnterpriseHook = (initialEnterprises: any[]): UseEnterpriseHook => {
  const [enterprises, setEnterprises] = useState(initialEnterprises);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [enterprisesNumber, setEnterprisesNumber] = useState(0);

  return {
    enterprises,
    rowsPerPage,
    enterprisesNumber,
    setEnterprises,
    setRowsPerPage,
    setEnterprisesNumber,
  };
};

export default useEnterpriseHook;