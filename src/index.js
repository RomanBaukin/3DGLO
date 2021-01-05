'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeFoto from './modules/changeFoto';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';
import maskPhone from './modules/maskPhone';
import smoothScrolling from './modules/smoothScroll';

// Таймер
countTimer('11 jan 2021');

// Меню
toggleMenu();

// PopUp
togglePopUp();

// Табы
tabs();

// Слайдер
slider();

//Меняем фоо при наведении
changeFoto();

// Калькулятор
calculator(100);

//send-ajax-form
sendForm();

//Маска для телефонов
maskPhone('.form-phone');

//Плавный скролл
smoothScrolling();
