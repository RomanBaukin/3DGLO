'use strict';

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

export default toggleMenu;
