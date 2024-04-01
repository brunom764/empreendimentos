import React, { useState } from 'react';
import { Input, InputAdornment, IconButton } from '@material-ui/core';

type SearchBarProps = {
  handleSearch: () => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

export default function SearchBar ({ handleSearch, searchTerm, setSearchTerm }: SearchBarProps) {

  return (
    <div>
      <Input
        fullWidth
        id="standard-adornment-password"
        onChange={(e) => setSearchTerm(e.target.value)}
        endAdornment={
          <InputAdornment onClick={handleSearch} position="start">
            <IconButton type="submit" aria-label="search">
            <img src="/images/Vector (1).svg" alt="Icone Lupa" />
              Buscar
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};

