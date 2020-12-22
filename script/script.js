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
    updateClock();
    setInterval(updateClock, 1000);
  }

  countTimer('31 dec 2020');

  // Меню
  const toggleMenu = () => {
    const menu = document.querySelector('menu');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    document.addEventListener('click', (event) => {
      let target = event.target;

      if (target.matches('.menu, .menu>img, .menu>small, .active-menu a')) {
        handlerMenu();
      } else {
        target = target.closest('.active-menu');
        if (!target && menu.classList.contains('active-menu')) {
          handlerMenu();
        } else {
          return;
        }
      }
    });
  };

  toggleMenu();

  // PopUp
  const togglePopUp = () => {
    const popUp = document.querySelector('.popup'),
      popUpBtn = document.querySelectorAll('.popup-btn'),
      popUpContent = popUp.querySelector('.popup-content');

    let count = 0;

    function popUpAnimate() {
      if (document.documentElement.clientWidth > 768) {
        count++;
        popUpContent.style.transform = `translateY(${count}%)`;
        if (count < 30) {
          setTimeout(popUpAnimate, 10);
        } else {
          count = 0;
          clearTimeout(popUpAnimate);
        }
      } else {
        popUpContent.style.transform = `translateY(0)`;
      }
    }

    popUpBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popUp.style.display = 'block';
        popUpAnimate();
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

  // Слайдер

  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      slider = document.querySelector('.portfolio-content'),
      dots = document.querySelector('.portfolio-dots');

    let currentSlide = 0,
      interval;

    const renderDots = () => {
      for (let i = 0; i < slide.length; i++) {
        const li = document.createElement('li');
        li.classList.add('dot');
        if (i === 0) {
          li.classList.add('dot-active');
        }
        dots.append(li);
      }
    };

    renderDots();

    const dot = dots.querySelectorAll('.dot');

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
      event.preventDefault();

      const target = event.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }

      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }

      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {
      if (event.target.matches('.portfolio-btn, .dot')) {
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', (event) => {
      if (event.target.matches('.portfolio-btn, .dot')) {
        startSlide();
      }
    });

    startSlide(1500);
  };

  slider();

  //Меняем фото при наведении

  const changeFoto = () => {
    const img = document.querySelectorAll('.command__photo');
    let src;

    img.forEach((item) => {
      item.addEventListener('mouseenter', (event) => {
        src = event.target.src;
        event.target.src = event.target.dataset.img;
      });

      item.addEventListener('mouseleave', (event) => {
        event.target.src = src;
      });
    });
  };

  changeFoto();

  // Калькулятор

  const calculator = (price = 100) => {
    const input = document.querySelectorAll('input.calc-item'),
      calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcDay = document.querySelector('.calc-day'),
      calcCount = document.querySelector('.calc-count'),
      totalValue = document.getElementById('total');

    input.forEach((item) => {
      item.addEventListener('input', () => {
        item.value = item.value.replace(/\D/g, '');
      });
    });

    const countSum = () => {
      let total = 0,
        countValue = 1,
        dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      }

      totalValue.textContent = total;
    };

    calcBlock.addEventListener('change', (event) => {
      const target = event.target;

      if (
        target.matches('.calc-type') ||
        target.matches('.calc-square') ||
        target.matches('.calc-day') ||
        target.matches('.calc-count')
      ) {
        countSum();
      }
    });
  };

  calculator(100);
});
