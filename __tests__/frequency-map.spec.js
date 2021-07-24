'use strict';

const { createFrequencyMap } = require('../app');

describe('createFrequencyMap', () => {
    it('should properly create a map of all characters in emails returned', () => {
        const data = [
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

        const actual = createFrequencyMap(data);
        const expected = {
            "s": 8,
            "a": 16,
            "k": 3,
            "t": 9,
            "i": 16,
            "u": 3,
            "@": 10,
            "g": 10,
            "m": 17,
            "l": 9,
            ".": 10,
            "c": 6,
            "o": 13,
            "e": 21,
            "n": 12,
            "w": 5,
            "r": 6,
            "_": 2,
            "b": 3,
            "y": 2,
            "z": 1,
            "x": 2,
            "d": 3,
            "f": 2
        };

        expect(actual).toEqual(expected);
    });
});