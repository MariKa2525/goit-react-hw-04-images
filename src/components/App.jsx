import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { getImage } from '../services/getImage';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export const App = () => {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [largeImage, setLargeImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoadMoreBtn, setIsLoadMoreBtn] = useState(false);

  useEffect(() => {
    if (imageName !== '') {
      setLoading(true);
      getImage(imageName, page)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error('Sorry no image'));
        })
        .then(images => {
          if (images.hits.length === 0) {
            toast.error(
              'Sorry, there are no images matching your search query'
            );
          }
          if (images.hits.length < 12) {
            setIsLoadMoreBtn(true);
          }
          setImages(prevImages => [...prevImages, ...images.hits]);
        })
        .catch(error => console.log(error))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [imageName, page]);

  const changeSearchValue = imageName => {
    setImageName(imageName);
    setPage(1);
    setImages([]);
    setIsLoadMoreBtn(false);
  };

  const toggleModal = () => {
    setLargeImage(!largeImage);
  };

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const getLargeImage = largeImage => {
    setLargeImage(largeImage);
  };

  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
      <Searchbar changeSearch={changeSearchValue} />
      {loading && <Loader />}
      {images.length > 0 && (
        <ImageGallery images={images} showLargeImage={getLargeImage} />
      )}
      {images.length !== 0 && !isLoadMoreBtn && (
        <Button onLoadMore={onLoadMore} />
      )}
      {largeImage && (
        <Modal toggleModal={toggleModal} src={largeImage} images={images} />
      )}
    </>
  );
};
