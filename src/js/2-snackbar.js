import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconError from '../img/icon-error.svg';
import iconOk from '../img/icon-ok.svg';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

const messageDefaultSettings = iziToast.settings({
  titleColor: '#fff',
  titleSize: 16,
  messageColor: '#fff',
  messageSize: 16,
  progressBar: false,
  position: 'topRight',
});

function handleSubmit(event) {
  event.preventDefault();

  const delay = form.delay.value;
  const selectedValue = form.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedValue === 'fulfilled') {
        resolve(delay);
      }
      if (selectedValue === 'rejected') {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        messageDefaultSettings,
        title: 'OK',
        message: `Fulfilled promise in ${delay}ms`,
        iconUrl: `${iconOk}`,
        backgroundColor: 'rgb(89, 161, 13)',
      });
    })
    .catch(delay => {
      iziToast.error({
        messageDefaultSettings,
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
        iconUrl: `${iconError}`,
        backgroundColor: 'rgb(239, 64, 64)',
      });
    });

  form.reset();
}
