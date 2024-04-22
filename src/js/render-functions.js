export function renderImage(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class ='gallery-item'>
        <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
                width="360"/>
        </a>
        <div class='image-info'>
            <div class="info">
                <h3 class = "info-likes">Likes</h3>
                <p>${likes}</p>
            </div>
            <div class="info">
                <h3 class = "info-views">Views</h3>
                <p>${views}</p>
            </div>
            <div class="info">
                <h3 class = "info-comments">Comments</h3>
                <p>${comments}</p>
            </div>
            <div class="info">
                <h3 class = "info-downloads">Downloads</h3>
                <p>${downloads}</p>
            </div>
        </div>
    </li>`
    )
    .join('');
}