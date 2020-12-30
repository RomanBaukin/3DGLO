'use strict';

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

export default changeFoto;
