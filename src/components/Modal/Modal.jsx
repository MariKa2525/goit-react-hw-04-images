import css from './Modal.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const Modal = ({ toggleModal, src }) => {
  useEffect(() => {
    const onClose = evt => {
      if (evt.code === 'Escape' || evt.currentTarget === evt.target) {
        toggleModal();
      }
    };

    window.addEventListener('keydown', onClose);
    return () => {
      window.removeEventListener('keydown', onClose);
    };
  }, [toggleModal]);

  return (
    <div className={css.overlay} onClick={toggleModal}>
      <div className={css.modal}>
        <img src={src} alt="large img" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};
