const isPalindrome = (str) => {
  let tmp = '';

  for (let i = str.length - 1; i >= 0; i--) {
    tmp += str[i];
  }

  const reverseString = tmp.toLowerCase().replaceAll(' ', '');
  const string = str.toLowerCase().replaceAll(' ', '');

  return reverseString === string;
};

isPalindrome('Лёша на полке клопа нашёл');
