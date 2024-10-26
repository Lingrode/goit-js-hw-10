import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
        resolve(`Fulfilled promise in ${delay}ms`);
      }
      if (selectedValue === 'rejected') {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(value => {
      iziToast.show({
        messageDefaultSettings,
        title: 'OK',
        message: `${value}`,
        iconUrl: 'src/img/icon-ok.svg',
        backgroundColor: 'rgb(89, 161, 13)',
      });
    })
    .catch(value => {
      iziToast.error({
        messageDefaultSettings,
        title: 'Error',
        message: `${value}`,
        iconUrl: 'src/img/icon-error.svg',
        backgroundColor: 'rgb(239, 64, 64)',
      });
    });

  form.reset();
}
