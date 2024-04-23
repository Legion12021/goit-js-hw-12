export function renderImage(images) {
  return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `
      <li class='gallery-item'>
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" width="360"/>
        </a>
        <div class='image-info'>
          ${renderImageInfo(likes, 'Likes')}
          ${renderImageInfo(views, 'Views')}
          ${renderImageInfo(comments, 'Comments')}
          ${renderImageInfo(downloads, 'Downloads')}
        </div>
      </li>`;
  }).join('');
}

function renderImageInfo(value, label) {
  return `
    <div class="info">
      <h3 class="info-label">${label}</h3>
      <p>${value}</p>
    </div>`;
}
