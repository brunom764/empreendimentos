/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Input, InputAdornment, IconButton } from '@material-ui/core';
import { ContainerLupa, ContentLupa } from './style';

type SearchBarProps = {
  handleSearch: (search: string) => void;
};

export default function SearchBar ({ handleSearch }: SearchBarProps) {

  return (
    <ContainerLupa>
        <ContentLupa>
          <Input
            fullWidth
            id="standard-adornment-password"
            placeholder='Buscar'
            onChange={(e) =>  { 
              handleSearch(e.target.value)
            }}
            startAdornment={
              <InputAdornment position="start">
                <IconButton  aria-label="search">
                <img src="/images/Vector (1).svg" alt="Icone Lupa" />
                </IconButton>
              </InputAdornment>
            }
          />
          </ContentLupa>
    </ContainerLupa>
  );
};

