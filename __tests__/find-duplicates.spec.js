'use strict';

const duplicates = require('../find-duplicates');
const { findDuplicates, isOneAway, isDuplicate } = duplicates;

describe('isOneAway', () => {
    it('should return true with equal strings', () => {
        const s1 = 'abcde@example.com';
        const s2 = 'abcde@example.com';

        const actual = isOneAway(s1, s2);
        expect(actual).toBe(true);
    });

    it('should return true with one removed character from emails', () => {
        const s1 = 'abcde@example.com';
        const s2 = 'abcd@example.com';

        const actual = isOneAway(s1, s2);
        expect(actual).toEqual(true);
    });

    it('should return true with one changed character from emails', () => {
        const s1 = 'abcde@example.com';
        const s2 = 'bbcde@example.com';

        const actual = isOneAway(s1, s2);
        expect(actual).toEqual(true);
    });

    it('should return false with two removed character from emails', () => {
        const s1 = 'abcde@example.com';
        const s2 = 'abcd@example.co';

        const actual = isOneAway(s1, s2);
        expect(actual).toEqual(false);
    });

    it('should return false when emails are completely different', () => {
        const s1 = '12345@example.com';
        const s2 = 'abcde@example.com';

        const actual = isOneAway(s1, s2);
        expect(actual).toEqual(false);
    });
});

describe('isDuplicate', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should return false when one email is more than 1 character length apart', () => {
        const s1 = 'abcde@example.com';
        const s2 = 'abc@example.com';

        const spy = jest.spyOn(duplicates, 'isOneAway');
        const actual = isDuplicate(s1, s2);

        expect(spy).not.toHaveBeenCalled();
        expect(actual).toBe(false);
    });

    it('should return false when one email is falsey', () => {
        const s1 = '';
        const s2 = 'abc@example.com';

        const spy = jest.spyOn(duplicates, 'isOneAway');
        const actual = isDuplicate(s1, s2);

        expect(spy).not.toHaveBeenCalled();
        expect(actual).toBe(false);
    });
});