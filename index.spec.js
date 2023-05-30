'use strict';

const cipherExercise = require('.');
const { simpleShift2, trickyShift2, wordsShift2, complexShift2 } = require('./fixtures');

describe('cipher-exercise', () => {
  const { decrypt, encrypt } = cipherExercise || {};

  it('is an object', () => expect(typeof cipherExercise).toBe('object'));
  it('has a decrypt property', () => expect(decrypt).toBeDefined());
  it('has a encrypt property', () => expect(encrypt).toBeDefined());

  describe('encrypt', () => {
    it('is a function', () => expect(typeof encrypt).toBe('function'));
    it('that takes 2 parameters', () => expect(encrypt).toHaveLength(2));

    describe('when called with a shift of 2 characters', () => {
      let result;
      let shift = 2;
      
        describe('with a simple message', () => {
          beforeEach(() => {
            result = encrypt(simpleShift2.message, shift);
          });

          it('returns a string', () => expect(typeof result).toBe('string'));
          it('in which the letters are shifted by 2', () => expect(result).toBe(simpleShift2.shifted));
        });

        describe('with a tricky message', () => {
          beforeEach(() => {
            result = encrypt(trickyShift2.message, shift);
          });

          it('returns a string', () => expect(typeof result).toBe('string'));
          it('in which the letters are shifted by 2 and wrap', () => expect(result).toBe(trickyShift2.shifted));
        });

        describe('with a multi-word message', () => {
          beforeEach(() => {
            result = encrypt(wordsShift2.message, shift);
          });

          it('returns a string', () => expect(typeof result).toBe('string'));
          it('in which the letters (but NOT spaces) are shifted by 2', () => expect(result).toBe(wordsShift2.shifted));
        });

        describe('with a complex message', () => {
          beforeEach(() => {
            result = encrypt(complexShift2.message, 2);
          });

          it('returns a string', () => expect(typeof result).toBe('string'));
          it('in which the letters are shifted by 2', () => expect(result).toBe(complexShift2.shifted));
        });
      });
  });

  describe('decrypt', () => {
    it('is a function', () => expect(typeof decrypt).toBe('function'));
    it('that takes 2 parameters', () => expect(decrypt).toHaveLength(2));

    describe('when called, reverses the effects of encrypt if the same character shift is applied', () => {
      let result;
      let shift = 2

      describe('with a simple message', () => {
        beforeEach(() => {
          result = decrypt(encrypt(simpleShift2.message, 2), 2);
        });

        it('restores the message', () => expect(result).toBe(simpleShift2.message));
      });

      describe('with a tricky message', () => {
        beforeEach(() => {
          result = decrypt(encrypt(trickyShift2.message, 2), 2);
        });

        it('restores the message', () => expect(result).toBe(trickyShift2.message));
      });

      describe('with a multi-word message', () => {
        beforeEach(() => {
          result = decrypt(encrypt(wordsShift2.message, 2), 2);
        });

        it('restores the message', () => expect(result).toBe(wordsShift2.message));
      });

      describe('with a complex message', () => {
        beforeEach(() => {
          result = decrypt(encrypt(complexShift2.message, 2), 2);
        });

        it('restores the message', () => expect(result).toBe(complexShift2.message));
      });
    });
  });
});
