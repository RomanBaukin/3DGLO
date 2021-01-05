/* eslint-disable object-shorthand */
'use strict';

window.addEventListener('DOMContentLoaded', () => {
  // Таймер
  function countTimer(deadline) {
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

    setInterval(updateClock, 1000);
  }

  countTimer('31 dec 2020');

  // Меню
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', handlerMenu);

    closeBtn.addEventListener('click', handlerMenu);

    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
  };

  toggleMenu();

  // PopUp
  const togglePopUp = () => {
    const popUp = document.querySelector('.popup'),
      popUpBtn = document.querySelectorAll('.popup-btn'),
      popUpClose = document.querySelector('.popup-close'),
      popUpContent = popUp.querySelector('.popup-content');

    let count = -10;

    function popUpAnimate() {
      if (document.documentElement.clientWidth > 768) {
        count++;
        popUpContent.style.left = `${count}%`;
        if (count < 40) {
          setTimeout(popUpAnimate, 10);
        } else {
          count = -10;
          clearTimeout(popUpAnimate);
        }
      }
    }

    popUpBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popUpAnimate();
        popUp.style.display = 'block';
      });
    });

    popUpClose.addEventListener('click', () => {
      popUp.style.display = 'none';
    });
  };

  togglePopUp();

  // Плавный скролл

  const smoothScrolling = () => {
    const links = document.querySelectorAll('.smooth-scroll');

    links.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;
        if (!target.getAttribute('href')) {
          target = target.closest('.smooth-scroll');
        }
        const blockID = target.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    });
  };

  smoothScrolling();
});
