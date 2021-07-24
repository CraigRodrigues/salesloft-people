'use strict';

// assumption: we want a map of every character in an email including @ and .
// frequency count of all the unique characters in all the email addresses of all the People you have access to
// sorted by frequency count
function createFrequencyMap(people) {
    const map = {};
    const emails = people.map((p) => p.email);

    emails.forEach((email) => {
        for (const char of email) {
            map[char] ? map[char] += 1 : map[char] = 1;
        }
    });

    // TODO: sort by key then by value
    return map;
}

module.exports = { createFrequencyMap };
