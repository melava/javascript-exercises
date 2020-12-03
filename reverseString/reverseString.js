const reverseString = function(string) {
  let splittedString = string.split('');
  let arrayLength = splittedString.length;
  let reversedString = '';
  for (let i = arrayLength - 1; i >= 0; i--) {
      reversedString += splittedString[i];
  }
  return reversedString
}

module.exports = reverseString
