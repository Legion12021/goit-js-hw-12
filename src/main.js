
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImages } from './js/pixaday';
import { renderImage } from './js/render-functions';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('.form');
const searchInput = document.querySelector('input[name="search"]');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.js-load-btn');

let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', event => {
  event.preventDefault();
  currentPage = 1;
  gallery.innerHTML = '';

  currentQuery = searchInput.value.trim();
  console.log(currentQuery);
  if (currentQuery.length === 0 || currentQuery === '') {
    hideLoadMoreBtn();
    warningSearchQuery();
  } else {
    showLoader();

    async function fetchImages() {
      try {
        const data = await getImages(currentQuery, currentPage);
        if (data.hits.length === 0) {
          hideLoadMoreBtn();
          onError();
        }
        console.log(data);
        return data;
      } catch (error) {
        hideLoadMoreBtn();
        console.log(error);
      } finally {
        hideLoader();
        form.reset();
      }
    }

    fetchImages().then(data => {
      console.log(data);
      gallery.innerHTML = renderImage(data.hits);

      lightbox.refresh();

      if (data.hits.length >= 15) {
        showLoadMoreBtn();
      }
    });
  }
});

loadMoreBtn.addEventListener('click', onClick);

async function onClick() {
  try {
    hideLoadMoreBtn();
    showLoader();

    currentPage += 1;

    const res = await getImages(currentQuery, currentPage);

    gallery.insertAdjacentHTML('beforeend', renderImage(res.hits));
    lightbox.refresh();

    showLoadMoreBtn();
    smoothScroll();
    hideLoader();

    if (res.hits.length < 15) {
      infoResult();
      hideLoadMoreBtn();
      hideLoader();
    }
  } catch (error) {
    hideLoadMoreBtn();
  }
}


function smoothScroll() {
  const galleryItem = document.querySelector('.gallery-item');
  const galleryItemHeight = galleryItem.getBoundingClientRect().height;

  window.scrollBy({
    top: galleryItemHeight * 2,
    behavior: 'smooth',
  });
}


function onError(err) {
  console.log(err);
  iziToast.error({
    theme: 'dark',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    messageColor: '#ffffff',
    backgroundColor: '#ef4040',
    position: 'topRight',
    pauseOnHover: false,
    progressBarColor: '#b51b1b',
    timeout: 3000,
  });
}


function warningSearchQuery() {
  iziToast.warning({
    message: 'Please enter a search query',
    messageColor: 'black',
    backgroundColor: '#ffac26',
    position: 'topRight',
    pauseOnHover: false,
    progressBarColor: 'black',
    timeout: 3000,
  });
}


function infoResult() {
  iziToast.info({
    maxWidth: '432px',
    messageSize: '16px',
    titleColor: ' #fafafb',
    messageColor: '#fff',
    message: "We're sorry, but you've reached the end of search results.",
    closeOnEscape: true,
    position: 'topRight',
    backgroundColor: '#34c0eb',
  });
}

function showLoadMoreBtn() {
  loadMoreBtn.classList.remove('is-hidden');
}

function hideLoadMoreBtn() {
  loadMoreBtn.classList.add('is-hidden');
}

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}