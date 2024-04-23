import axios from 'axios';

export async function getImages(query, currentPage = 1) {
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '42600049-cf2a2f9bce39b2068dfff6d8c';

  const queryUser = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: currentPage,
  });

  const LINK = `${URL}?${queryUser}`;

  const response = await axios.get(LINK);

  return response.data;
}
