'use strict';

const { createFrequencyMap } = require('../create-frequency');

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
        const expected = [
            { character: 'e', count: 21 },
            { character: 'm', count: 17 },
            { character: 'a', count: 16 },
            { character: 'i', count: 16 },
            { character: 'o', count: 13 },
            { character: 'n', count: 12 },
            { character: '.', count: 10 },
            { character: '@', count: 10 },
            { character: 'g', count: 10 },
            { character: 'l', count: 9 },
            { character: 't', count: 9 },
            { character: 's', count: 8 },
            { character: 'c', count: 6 },
            { character: 'r', count: 6 },
            { character: 'w', count: 5 },
            { character: 'b', count: 3 },
            { character: 'd', count: 3 },
            { character: 'k', count: 3 },
            { character: 'u', count: 3 },
            { character: '_', count: 2 },
            { character: 'f', count: 2 },
            { character: 'x', count: 2 },
            { character: 'y', count: 2 },
            { character: 'z', count: 1 }
        ];

        expect(actual).toEqual(expected);
    });
});