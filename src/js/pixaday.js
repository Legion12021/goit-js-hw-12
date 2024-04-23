import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '42600049-cf2a2f9bce39b2068dfff6d8c';

export async function getImages(query, currentPage = 1) {
  try {
    const response = await axios.get(URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: currentPage,
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
