
const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '32297274-6805a2e4fdba4765ca35c3823';

export const getImage = (textSeach, page) => {
    return fetch(`${BASE_URL}?q=${textSeach}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
  };