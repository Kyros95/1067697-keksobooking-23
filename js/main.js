// Источник: https://learn.javascript.ru/task/random-min-max
//           https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random


function getIntegerNumber(firstNumber, secondNumber) {
  if (firstNumber >= 0 && secondNumber >= 0) {
    const min = Math.ceil(Math.min(firstNumber, secondNumber));
    const max = Math.floor(Math.max(firstNumber, secondNumber));
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
  }
  throw new Error('Введите положительные числа');
}

function getFloatNumber(firstNumber, secondNumber, point) {
  if (firstNumber >= 0 && secondNumber >= 0) {
    const min = Math.min(firstNumber, secondNumber);
    const max = Math.max(firstNumber, secondNumber);
    const result = Math.random() * (max - min + 1) + min;
    return result.toFixed(point);
  }
  throw new Error('Введите положительные числа');
}

