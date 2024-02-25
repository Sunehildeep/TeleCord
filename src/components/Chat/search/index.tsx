import React from 'react';
import { SearchContainer, SearchIcon, SearchInput } from './styles';


const Search = () => {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput type="text" placeholder="Search..." />
    </SearchContainer>
  );
}

export default Search;
