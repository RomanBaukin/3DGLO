'use strict';

const validator = () => {
  const inputsValid = document.querySelectorAll('input'),
    buttons = document.querySelectorAll('button[type=submit]');

  inputsValid.forEach((elem) => {
    elem.addEventListener('input', () => {
      elem.style.cssText = 'border: none';
      if (elem.name === 'user_name') {
        elem.value = elem.value.replace(/[^\W\s]+|[!-@]/gi, '');
      }
      if (elem.matches('.mess')) {
        elem.value = elem.value.replace(/[^\W]+/gi, '');
      }
    });
  });

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const target = e.target,
        form = target.closest('form'),
        inputs = form.querySelectorAll('input'),
        message = document.createElement('div');

      inputs.forEach((elem) => {
        if (elem.value === '') {
          button.disabled = true;
          message.textContent = 'Заполните пустые поля';
          message.style.cssText = 'color: red;';
          elem.style.cssText = 'border: solid 2px red';
        } else if (elem.matches('[type=tel]')) {
          if (elem.value.length < 18) {
            button.disabled = true;
            message.textContent = 'Введите полный номер телефона';
            message.style.cssText = 'color: red;';
            elem.style.cssText = 'border: solid 2px red';
          }
        }
      });

      form.appendChild(message);

      setTimeout(() => {
        message.remove();
        button.disabled = false;
      }, 3000);
    });
  });
};

export default validator;
