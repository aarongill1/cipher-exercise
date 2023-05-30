'use strict';

const { charToInt, intToChar } = require('./helpers');

const N = 26;

const shiftChar = (char, shift) => char === ' ' ? ' ' : intToChar((charToInt(char) + shift) % N);

const shiftCharBack = (char, shift) => char === ' ' ? ' ' : intToChar((charToInt(char) - shift + N) % N);

const encrypt = (message, shift) => (
  message
    .split('')
    .map(char => shiftChar(char, shift) )
    .join('')
);

const decrypt = (message, shift) => (
  message
    .split('')
    .map(char => shiftCharBack(char, shift))
    .join('')
);

module.exports = {
  decrypt,
  encrypt
};
