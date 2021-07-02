// Источник: https://learn.javascript.ru/task/random-min-max
//           https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random


function getIntegerNumber(x, y) {
  if (x >= 0 && y >= 0) {
    min = Math.ceil(Math.min(x, y));
    max = Math.floor(Math.max(x, y));
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
  } else {
    return ('Введите положительные числа');
  }
}

function getFloatNumber(x, y, point) {
  if (x >= 0 && y >= 0) {
    min = Math.min(x, y);
    max = Math.max(x, y);
    const result = Math.random() * (max - min + 1) + min;
    return result.toFixed(point);
  } else {
    return ('Введите положительные числа');
  }
}

