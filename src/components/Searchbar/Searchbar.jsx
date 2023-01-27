import React from 'react';
import css from './Searchbar.module.css';
import { SearchForm } from 'components/SearchForm/SearchForm';
import PropTypes from 'prop-types';

export const Searchbar = ({ changeSearch }) => {
  return (
    <header className={css.searchbar}>
      <SearchForm changeSearch={changeSearch} />
    </header>
  );
};

Searchbar.propTypes = {
  changeSearch: PropTypes.func.isRequired,
};
