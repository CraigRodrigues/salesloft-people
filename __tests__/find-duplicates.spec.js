'use strict';

const { findDuplicates, isOneAway, differenceCount } = require('../find-duplicates.js');

describe('differenceCount', () => {
    it('should return a difference of 1 with equal strings', () => {
        const actual = '';
        const expected = '';

        expect(actual).toEqual(null);
    });

    it('should return a difference of 1 with one removed character from emails', () => {
        const actual = 'abcde@gmail.com';
        const expected = 'abcd@gmail.com';

        expect(actual).toEqual(null);
    });

    it('should return a difference of 1 with one changed character from emails', () => {
        const actual = 'abcde@gmail.com';
        const expected = 'bbcde@gmail.com';

        expect(actual).toEqual(null);
    });

    it('should return a difference of 2 with two removed character from emails', () => {
        const actual = 'abcde@gmail.com';
        const expected = 'abcd@gmail.co';

        expect(actual).toEqual(null);
    });

    it('should return a difference of 2 when emails are completely different', () => {
        const actual = '12345@gmail.com';
        const expected = 'abcde@gmail.com';

        expect(actual).toEqual(null);
    });

    it('should return a difference of 2 when one email is empty or null', () => {
        const actual = '';
        const expected = 'abcde@gmail.com';

        expect(actual).toEqual(null);
    });
})