import '../css/common.css';

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};

refs.start.addEventListener('click', onStartClick);
refs.stop.addEventListener('click', onStopClick);

const DELAY = 1000;
let timerId = null;

function onStartClick() {
  refs.start.disabled = true;
  refs.stop.disabled = false;

  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, DELAY);
}

function onStopClick() {
  refs.start.disabled = false;
  refs.stop.disabled = true;

  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
