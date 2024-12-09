const checkStringLength = (str, length) => str.length <= length;

const isPalindrome = (str) => {
  let temporaryString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    temporaryString += str[i];
  }

  const reverseString = temporaryString.toLowerCase().replaceAll(' ', '');
  const string = str.toLowerCase().replaceAll(' ', '');

  return reverseString === string;
};

const strChecker = (str) => {
  const NUMBERS = '0123456789';
  let result = '';

  for (let i = 0; i <= str.length - 1; i++) {
    for (let j = 0; j <= NUMBERS.length - 1; j++) {
      if (NUMBERS[j] === str[i]) {
        result += str[i];
      }
    }
  }

  return Math.floor(+result);
};

checkStringLength('проверяемая строка', 10);
isPalindrome('Лёша на полке клопа нашёл');
strChecker('а я томат');
