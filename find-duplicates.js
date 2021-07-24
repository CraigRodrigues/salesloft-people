'use strict';

function differenceCount(a, b) {
    let i = 0;
    let difference = 0;

    while (i < b.length) {
        if (a[i + difference] === b[i]) {
            i += 1;
        } else {
            difference += 1;

            if (difference > 1) return false;
        }
    }

    return true;
}

// will return true if there is one difference between the strings
function isOneAway(a, b) {
    // if the length if over 2 then there cannot be one difference
    if (Math.abs(a.length - b.length) >= 2) return false;

    if (a.length >= b.length) return differenceCount(a, b) <= 1;
    if (a.length < b.length) return differenceCount(b, a) <= 1;
}

// naive O(n^2) solution
// attempts to find possible duplicate accounts via email
function findDuplicates(people) {
    const duplicates = [];
    // iterate over all the people comparing one email to the all the rest after it
    for (let i = 0; i < people.length; i++) {
        const currentDuplicates = [];
        for (let j = i + 1; j < people.length; j++) {
            // check for at most one difference between the files
            // difference being one letter to add or remove or change
            if (isOneAway(people[i].email, people[j].email)) {
                // if difference between remains at one at to an array of possible duplicates
                currentDuplicates.push(people[i], people[j]);
            }
        }

        // continue through all the emails
        duplicates.push(currentDuplicates);
    }

    // return 2D array of duplicates
    return duplicates;
}

module.exports = { findDuplicates, isOneAway, differenceCount };
