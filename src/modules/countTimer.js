'use strict';

const countTimer = (deadline) => {
  const timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');

  function getTimeRemaining() {
    const dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor(timeRemaining / 60 / 60);

    return { timeRemaining, hours, minutes, seconds };
  }

  const addNull = (timeValue) => {
    if (timeValue.length === 1) {
      timeValue = '0' + timeValue;
    }
    return timeValue;
  };

  function updateClock() {
    const timer = getTimeRemaining();

    if (timer.timeRemaining > 0) {
      timerHours.textContent = addNull(timer.hours + '');
      timerMinutes.textContent = addNull(timer.minutes + '');
      timerSeconds.textContent = addNull(timer.seconds + '');
    } else {
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
  }
  updateClock();
  setInterval(updateClock, 1000);
};

export default countTimer;
