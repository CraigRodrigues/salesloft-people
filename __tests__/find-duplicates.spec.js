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

describe('findDuplicates', () => {
    const duplicatePeople = [
        {
            name: 'Steven Pease',
            email: 'sakatius@gmail.com',
            title: 'Software Engineer'
        },
        {
            name: 'Possibly Duplicate',
            email: 'sakatiuss@gmail.com',
            title: 'My Job'
        },
        {
            name: 'SomethingNewHere Here1',
            email: 'last@me.com',
            title: 'Baby Yoda Keeper'
        },
        {
            name: 'Something New Newer',
            email: 'newemailisnew@menew.com',
            title: 'My Job Is New'
        },
        { name: 'Testers Two', email: 'testt@gmail.com', title: 'Testing' },
        {
            name: 'Keagan Tromp',
            email: 'raa_beetty@google.com',
            title: 'Central Assurance Administrator'
        },
        {
            name: 'Sheridan Bogisich',
            email: 'erik@lubowitz.name',
            title: 'Lead Applications Planner'
        },
        {
            name: 'Marisa Casper',
            email: 'amixe@lindgren.info',
            title: 'Direct Security Representative'
        },
        {
            name: 'Griffin Hand',
            email: 'mamixe@lindgren.info',
            title: 'International Usability Agent'
        },
        {
            name: 'Mikel Reynolds',
            email: 'george_aiegwnd@boyer.name',
            title: 'Global Solutions Technician'
        }
    ];

    it('should find duplicates', () => {
        const actual = findDuplicates(duplicatePeople);
        const expected = [
            {
                name: 'Steven Pease',
                email: 'sakatius@gmail.com',
                title: 'Software Engineer'
            },
            {
                name: 'Possibly Duplicate',
                email: 'sakatiuss@gmail.com',
                title: 'My Job'
            },
            {
                name: 'Marisa Casper',
                email: 'amixe@lindgren.info',
                title: 'Direct Security Representative'
            },
            {
                name: 'Griffin Hand',
                email: 'mamixe@lindgren.info',
                title: 'International Usability Agent'
            }
        ];

        expect(actual).toEqual(expected);
    });

    it('should not find any duplicates', () => {
        const actual = findDuplicates(uniquePeople);
        const expected = [];

        expect(actual).toEqual(expected);
    });

    it('should not find any duplicates if people is empty', () => {
        const actual = findDuplicates([]);

        expect(actual).toEqual([]);
    });

    it('should not find any duplicates if people is null', () => {
        const actual = findDuplicates(null);

        expect(actual).toEqual([]);
    });
});