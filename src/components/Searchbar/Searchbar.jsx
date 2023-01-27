import React from 'react';
import css from './Searchbar.module.css';
import SearchForm  from 'components/SearchForm/SearchForm';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.searchbar}>
      <SearchForm  onSubmit={onSubmit}/>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
