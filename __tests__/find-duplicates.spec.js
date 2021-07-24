'use strict';

const { findDuplicates, isOneAway, isDuplicate } = require('../find-duplicates.js');

describe('isOneAway', () => {
    it('should return a true with equal strings', () => {
        const s1 = 'abcde@example.com';
        const s2 = 'abcde@example.com';

        const actual = isOneAway(s1, s2);
        expect(actual).toBe(true);
    });

    it('should return a true with one removed character from emails', () => {
        const s1 = 'abcde@example.com';
        const s2 = 'abcd@example.com';

        const actual = isOneAway(s1, s2);
        expect(actual).toEqual(true);
    });

    it('should return a true with one changed character from emails', () => {
        const s1 = 'abcde@example.com';
        const s2 = 'bbcde@example.com';

        const actual = isOneAway(s1, s2);
        expect(actual).toEqual(true);
    });

    it.only('should return a false with two removed character from emails', () => {
        const s1 = 'abcde@example.com';
        const s2 = 'abcd@example.co';

        const actual = isOneAway(s1, s2);
        expect(actual).toEqual(false);
    });

    it('should return a false when emails are completely different', () => {
        const s1 = '12345@example.com';
        const s2 = 'abcde@example.com';

        const actual = isOneAway(s1, s2);
        expect(actual).toEqual(false);
    });
})