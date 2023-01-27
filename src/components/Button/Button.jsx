import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onLoadMore }) => {
  return (
    <div className={css.wrap}>
    <button type="button" className={css.button} onClick={onLoadMore}>
      Load More
    </button>
    </div>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
