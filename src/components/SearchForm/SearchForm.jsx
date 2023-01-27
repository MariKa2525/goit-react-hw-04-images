import { useState } from 'react';
import css from './SearchForm.module.css';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { ReactComponent as AddIcon } from '../../icons/search.svg';

export const SearchForm = ({ changeSearch }) => {
  const [imageName, setImageName] = useState('');

  const handleNameChange = ({ target: { value } }) => {
    setImageName(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (imageName.trim() === '') {
      toast.error('Please enter seach image title');
    }
    changeSearch(imageName);
    setImageName('');
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <button type="submit" className={css.searchFormButton}>
        <span className={css.searchFormButtonLabel}>
          <AddIcon />
        </span>
      </button>
      <input
        className={css.searchFormInput}
        type="text"
        name="imageName"
        value={imageName}
        onChange={handleNameChange}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
};

SearchForm.propTypes = {
  changeSearch: PropTypes.func.isRequired,
};
