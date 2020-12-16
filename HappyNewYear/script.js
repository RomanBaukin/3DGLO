'use strict';

const timeNewYear = document.getElementById('time-new-year');

// Функции
const showCurrentTime = () => {
  const today = new Date(),
    currentTime = today.toLocaleTimeString('en-US', {
      hour: 'numeric',
      hour12: true,
      minute: 'numeric',
      second: 'numeric',
    }),
    indexDay = today.getDay() - 1,
    week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

  let timeOfDay;

  if (today.getHours() > 0 && today.getHours() <= 6) {
    timeOfDay = 'ой ночи!';
  } else if (today.getHours() > 6 && today.getHours() <= 12) {
    timeOfDay = 'ое утро!';
  } else if (today.getHours() > 12 && today.getHours() <= 18) {
    timeOfDay = 'ый день!';
  } else {
    timeOfDay = 'ый вечер!';
  }

  function getTimeRemaining() {
    const dateStop = new Date('01 jan 2021').getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      days = Math.floor(timeRemaining / 60 / 60 / 24);

    const decCache = [],
      decCases = [2, 0, 1, 1, 1, 2];

    function decOfNum(number, titles) {
      if (!decCache[number]) {
        decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
      }
      return titles[decCache[number]];
    }

    const showDays = days + ' ' + decOfNum(days, ['день', 'дня', 'дней']);

    return showDays;
  }

  const showTime = `
  Добр${timeOfDay}<br>
  Сегодня: ${week[indexDay]}<br>
  Текущее время: ${currentTime}<br>
  До Нового года осталось ${getTimeRemaining()}`;

  timeNewYear.innerHTML = showTime;
  timeNewYear.style.color = 'red';
};

showCurrentTime();
setInterval(showCurrentTime, 1000);
