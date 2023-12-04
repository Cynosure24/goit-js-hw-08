// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// змінні по роботі
const galleryEl = document.querySelector('.gallery');

// сформування розмітки з класами для  html
const galleryImg = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}" ><img class="gallery__image" src="${preview}" alt="Image ${description}"/></a>`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', galleryImg);

// створення виклику
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  close: false,
  showCounter: false,
});