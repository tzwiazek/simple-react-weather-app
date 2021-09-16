import React from 'react';
import PropTypes from 'prop-types';
import { SearchBar, SearchInput, SearchIcon } from './search.styles';
import { SearchInterface } from '../../shared/interfaces/search.interface';

const Search = ({ submit, value, change, showResult }: SearchInterface): JSX.Element => (
  <>
    <SearchBar showResult={showResult} onSubmit={submit}>
      <SearchInput type="text" value={value} placeholder="Enter city" onChange={change} />
      <SearchIcon showResult={showResult}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path
            d="M15.5,14h-.79l-.28-.27a6.51,6.51,0,1,0-.7.7l.27.28v.79l5,4.99L20.49,19Zm-6,0A4.5,4.5,0,1,1,14,9.5,4.494,4.494,0,0,1,9.5,14Z"
            transform="translate(-3 -3)"
          />
        </svg>
      </SearchIcon>
    </SearchBar>
  </>
);

Search.propTypes = {
  submit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  showResult: PropTypes.bool.isRequired,
};

export default Search;
