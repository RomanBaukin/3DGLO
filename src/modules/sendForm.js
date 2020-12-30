'use strict';

const sendForm = () => {
  const errorMessage = 'Что то пошло не так...',
    loadMessage = `
      <div class="loadingio-spinner-blocks-eshrbad6nd" style="margin-top: 20px;">
        <div class="ldio-ettmtdppwza">
          <div style='left:-3px;top:-3px;animation-delay:0s'></div>
          <div style='left:33px;top:-3px;animation-delay:0.125s'></div>
          <div style='left:69px;top:-3px;animation-delay:0.25s'></div>
          <div style='left:-3px;top:33px;animation-delay:0.875s'></div>
          <div style='left:69px;top:33px;animation-delay:0.375s'></div>
          <div style='left:-3px;top:69px;animation-delay:0.75s'></div>
          <div style='left:33px;top:69px;animation-delay:0.625s'></div>
          <div style='left:69px;top:69px;animation-delay:0.5s'></div>
        </div>
      </div>
        <style type="text/css">
        @keyframes ldio-ettmtdppwza {
          0% { background: #f2f8f9 }
          12.5% { background: #f2f8f9 }
          12.625% { background: #19b5fe }
          100% { background: #19b5fe }
        }
        .ldio-ettmtdppwza div {
          position: absolute;
          width: 34px;
          height: 34px;
          background: #19b5fe;
          animation: ldio-ettmtdppwza 1s linear infinite;
        }
        .loadingio-spinner-blocks-eshrbad6nd {
          width: 50px;
          height: 50px;
          display: inline-block;
          overflow: hidden;
          background: #ffffff;
        }
        .ldio-ettmtdppwza {
          width: 100%;
          height: 100%;
          position: relative;
          transform: translateZ(0) scale(0.5);
          backface-visibility: hidden;
          transform-origin: 0 0; /* see note above */
        }
        .ldio-ettmtdppwza div { box-sizing: content-box; }
        /* generated by https://loading.io/ */
        </style>`,
    successMessage = 'Спасибо! Мы скоро с вами свяжемся';

  const form = document.querySelectorAll('form'),
    input = document.querySelectorAll('form input');

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;';

  input.forEach((item) => {
    item.addEventListener('input', (event) => {
      const target = event.target;

      if (target.matches('.form-name, .mess, #form2-name')) {
        target.value = target.value.replace(/[^а-яё\s]/gi, '');
      }
    });
  });

  form.forEach((item) => {
    item.addEventListener('submit', (event) => {
      event.preventDefault();
      const target = event.target;

      if (target.matches('#form1, #form2, #form3')) {
        target.appendChild(statusMessage);
        statusMessage.innerHTML = loadMessage;
        const formData = new FormData(target);
        const body = {};

        formData.forEach((val, key) => {
          body[key] = val;
        });

        const outputData = () => {
          input.forEach((item) => {
            item.value = '';
          });
          statusMessage.textContent = successMessage;
          const statusMessageRemove = () => {
            target.removeChild(statusMessage);
          };

          setTimeout(statusMessageRemove, 5000);
        };

        postData(body)
          .then((response) => {
            if (response.status !== 200) {
              throw new Error('status network not 200');
            }
            outputData();
          })
          .catch((error) => {
            statusMessage.textContent = errorMessage;
            console.error(error);
          });
      }
    });
  });

  const postData = (body) =>
    fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
};

export default sendForm;
