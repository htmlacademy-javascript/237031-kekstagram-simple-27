// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomNumber = (min, max) => {
  if (min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return 'Ошибка! Число «до» меньшее, чем значение «от», или равное ему';
};

getRandomNumber (5,10);

// Функция для проверки максимальной длины строки. Проверяет длину введёного комментария.

const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('Комментарий', 140);
