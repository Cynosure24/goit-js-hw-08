import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};
const KEY_FORM = 'feedback-form-state';

refs.form.addEventListener('input', throttle(formInput, 500));
refs.form.addEventListener('submit', formOnSubmit);

populateTextarea();

function formInput() {
  // функція вводу забераємо в об'єкт тещо ввели
  const allInput = {
    email: refs.email.value.trim(),
    message: refs.message.value.trim(),
  };
  // записуємо в сховище дані , ключ та обєкт -перезаписавши його рядком
  localStorage.setItem(KEY_FORM, JSON.stringify(allInput));
}

function formOnSubmit(event) {
  event.preventDefault();
  // перевірка заповнення всіх полів
  if (refs.email.value === '' || refs.message.value === '') {
    return alert('Будь ласка, заповніть усі поля!');
  }
  // вивод обєкта що був заведенний
  // console.log({ email: refs.email.value, message: refs.message.value });
  console.log(JSON.parse(localStorage.getItem(KEY_FORM))); // ще варіант як визвати обєктзі сховища
  refs.form.reset(); // чистим форму
  localStorage.removeItem(KEY_FORM); // чистим від цих данних лок сховище
}

function populateTextarea() {
  const storageAllForm = JSON.parse(localStorage.getItem(KEY_FORM));
  // storageAllForm якщо пуста видає null, тобто false
  if (storageAllForm) {
    refs.email.value = storageAllForm.email;
    refs.message.value = storageAllForm.message;
  }
}
