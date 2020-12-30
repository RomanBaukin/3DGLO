'use strict';

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

    function animate({ timing, draw, duration }) {
      const start = performance.now();

      requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        const progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        }
      });
    }

    animate({
      //скорость анимации
      duration: 1000,
      //функция расчета времени
      timing(timeFraction) {
        return timeFraction;
      },
      //функция отрисовки
      draw(progress) {
        totalValue.textContent = Math.floor(progress * total);
      },
    });
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

export default calculator;
