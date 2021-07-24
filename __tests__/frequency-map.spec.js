'use strict';

const { createFrequencyMap } = require('../app');
const samplePeopleData = require('./data/sample-people-data.json');

describe('createFrequencyMap', () => {
    it ('should properly create a map of all characters in emails returned', () => {
        const actual = createFrequencyMap(samplePeopleData);
        const expected = {

        };

        expect(actual).toEqual(expected);
    });
})