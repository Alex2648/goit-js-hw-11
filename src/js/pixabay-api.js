import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loader = document.querySelector('.loader');
const KEY = '42549902-185aac32f1223c9241b6c0bc7';
const BASE_URI = 'https://pixabay.com/api/';

export function getImages(QUERY) {
  loader.style.display = 'flex';
  const LINK = `${BASE_URI}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      loader.style.display = 'none';
      return data;
    })
    .catch(error => {
      console.log(error);
    });
}
