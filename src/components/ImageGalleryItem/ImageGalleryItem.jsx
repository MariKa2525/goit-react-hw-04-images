import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, alt, largeImageURL, showLargeImage }) => {
  return (
    <li className={css.galleryItem} onClick={() => showLargeImage(largeImageURL)}>
      <img className={css.galleryImage} src={src} alt={alt} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  showLargeImage: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,

};
