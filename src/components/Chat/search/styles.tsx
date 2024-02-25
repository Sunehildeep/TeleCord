import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 8px 12px;
  margin: 5px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  margin-left: 8px;
  font-size: 16px;
`;

export const SearchIcon = styled(FiSearch)`
  font-size: 20px;
  color: #919191;
`;