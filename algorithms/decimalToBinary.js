const Stack = require('../data-structures/stack');


/**
 * Calculates base string requivalent of decimal number ( 2 <= base <= 36)
 * @param {Number} base Base to convert to
 * @param {Number} decNumber Decimal number to convert
 * @returns {String} Base string equivalent of decimal number
 */
module.exports.baseConverter = (base = 2) => decNumber => {
  const remStack = new Stack();
  let number = decNumber;
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if (base < 2 || base > 36) return '';

  while (number !== 0) {
    remStack.push(number % base);
    number = Math.floor(number / base);
  }

  let baseString = '';
  while (!remStack.isEmpty()) baseString += digits[remStack.pop()];

  return baseString;

};


/**
 * Returns binary string equivalent of decimal number
 * @param {Number} decNumber decimal number
 */
module.exports.decimalToBinary = this.baseConverter();

