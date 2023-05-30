'use strict';

const { charToInt, intToChar } = require('./helpers');

const N = 26;

const shiftChar = char => char === ' ' ? ' ' : intToChar((charToInt(char) + 2) % N);

const shiftCharBack = char => char === ' ' ? ' ' : intToChar((charToInt(char) - 2 + N) % N);

const encrypt = (message, shift) => (
  message
    .split('')
    .map(shiftChar)
    .join('')
);

const decrypt = (message, shift) => (
  message
    .split('')
    .map(shiftCharBack)
    .join('')
);

module.exports = {
  decrypt,
  encrypt
};
