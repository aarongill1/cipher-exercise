'use strict';

const { charToInt, intToChar } = require('./helpers');

const N = 26;

const shiftCharUp = (char, shift) => char === ' ' ? ' ' : intToChar((charToInt(char) + shift) % N);

const shiftCharDown = (char, shift) => char === ' ' ? ' ' : intToChar((charToInt(char) - shift + N) % N);

const encrypt = (message, shift) => (
  message
    .split('')
    .map(char => shiftCharUp(char, shift) )
    .join('')
);

const decrypt = (message, shift) => (
  message
    .split('')
    .map(char => shiftCharDown(char, shift))
    .join('')
);

module.exports = {
  decrypt,
  encrypt
};
