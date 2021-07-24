'use strict';

const orderBy = require('lodash.orderby');

// assumption: we want a map of every character in an email including @ and .
// frequency count of all the unique characters in all the email addresses of all the People you have access to
// sorted by frequency count
function createFrequencyMap(people) {
    const charMap = {};
    const emails = people.map((p) => p.email);

    emails.forEach((email) => {
        for (const char of email) {
            charMap[char] ? charMap[char] += 1 : charMap[char] = 1;
        }
    });

    const frequencyArray = [];

    for (const [character, count] of Object.entries(charMap)) {
        frequencyArray.push({ character, count });
    }

    return orderBy(frequencyArray, ['count', 'character'], ['desc']);
}

module.exports = { createFrequencyMap };
