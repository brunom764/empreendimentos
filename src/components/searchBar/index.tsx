/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Input, InputAdornment, IconButton } from '@material-ui/core';
import { ContainerLupa, ContentLupa } from './style';

type SearchBarProps = {
  handleSearch: () => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

export default function SearchBar ({ handleSearch, searchTerm, setSearchTerm }: SearchBarProps) {

  return (
    <ContainerLupa>
        <ContentLupa>
          <Input
            fullWidth
            id="standard-adornment-password"
            placeholder='Buscar'
            onChange={(e) => setSearchTerm(e.target.value)}
            startAdornment={
              <InputAdornment onClick={handleSearch} position="start">
                <IconButton type="submit" aria-label="search">
                <img src="/images/Vector (1).svg" alt="Icone Lupa" />
                </IconButton>
              </InputAdornment>
            }
          />
          </ContentLupa>
    </ContainerLupa>
  );
};

