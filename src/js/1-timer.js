import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateTimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');
const daysElem = document.querySelector('[data-days]');
const hoursElem = document.querySelector('[data-hours]');
const minutesElem = document.querySelector('[data-minutes]');
const secondsElem = document.querySelector('[data-seconds]');

let userSelectedDate;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (userSelectedDate <= new Date()) {
      iziToast.error({
        position: 'topRight',
        color: '#EF4040',
        message: 'Please choose a date in the future',
        messageColor: '#fff',
        iconUrl: '/src/img/icon-error.svg',
        displayMode: 2,
        timeout: 5000,
        progressBar: false,
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', handleClick);

function handleClick() {
  console.log(userSelectedDate);
  startBtn.disabled = true;
  dateTimePicker.disabled = true;

  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    let delta = userSelectedDate - currentTime;

    if (delta <= 0) {
      clearInterval(intervalId);
      showTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      dateTimePicker.disabled = false;
      return;
    }

    const time = convertMs(delta);
    showTime(time);
  }, 1000);
}

function showTime({ days, hours, minutes, seconds }) {
  daysElem.textContent = addLeadingZero(days);
  hoursElem.textContent = addLeadingZero(hours);
  minutesElem.textContent = addLeadingZero(minutes);
  secondsElem.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
