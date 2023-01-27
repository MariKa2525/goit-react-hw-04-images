import React, { Component } from 'react';
import css from './SearchForm.module.css';
import  toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { ReactComponent as AddIcon } from '../../icons/search.svg';


export default class SearchForm extends Component {
  state = {
    imageName: '',
  };
  
  handleNameChange = evt => {
    this.setState({ imageName: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault()
    if(this.state.imageName.trim() === '') {
      toast.error('Please enter seach image title')
    }
    this.props.onSubmit(this.state.imageName)
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <form className={css.searchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}><AddIcon /></span>
        </button>
        <input
          className={css.searchFormInput}
          type="text"
          name="imageName"
          value={this.state.imageName}
          onChange={this.handleNameChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
