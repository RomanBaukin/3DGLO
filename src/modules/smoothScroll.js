'use strict';

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

export default smoothScrolling;
