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
      menu = document.querySelector('menu');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', handlerMenu);

    menu.addEventListener('click', (event) => {
      const target = event.target;

      if (target.classList.contains('close-btn') || target.matches('a')) handlerMenu();
    });
  };

  toggleMenu();

  // PopUp
  const togglePopUp = () => {
    const popUp = document.querySelector('.popup'),
      popUpBtn = document.querySelectorAll('.popup-btn'),
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

    popUp.addEventListener('click', (event) => {
      let target = event.target;

      if (target.classList.contains('popup-close')) {
        popUp.style.display = 'none';
      } else {
        target = target.closest('.popup-content');

        if (!target) {
          popUp.style.display = 'none';
        }
      }
    });
  };

  togglePopUp();

  // Табы
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', (event) => {
      let target = event.target;

      target = target.closest('.service-header-tab');

      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };

  tabs();
});
