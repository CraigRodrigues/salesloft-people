'use strict';

// assumes a length is greater >= b length
// could be broken into two functions
function isOneAway(a, b) {
    let i = 0;
    let difference = 0;

    if (a.length !== b.length) {
        while (i <= b.length) {
            if (a[i + difference] === b[i]) {
                i += 1;
            } else {
                difference += 1;

                if (difference > 1) return false;
            }
        }
    } else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                difference += 1;
                if (difference > 1) return false;
            }
        }
    }

    return true;
}

// will return true if there is one difference between the strings
function isDuplicate(a, b) {
    // if either email does not exist return false
    if (!a || !b) return false;

    // if the length if over 2 then there cannot be one difference
    if (Math.abs(a.length - b.length) >= 2) return false;

    if (a.length >= b.length) return isOneAway(a, b);
    if (a.length < b.length) return isOneAway(b, a);
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
            const isDuplicate = isDuplicate(people[i].email, people[j].email);

            if (isDuplicate) {
                // if difference between remains at one at to an array of possible duplicates
                if (!currentDuplicates.length) currentDuplicates.push(people[i]);
                currentDuplicates.push(people[j]);
            }
        }

        // continue through all the emails
        duplicates.push(currentDuplicates);
    }

    // return 2D array of duplicates
    return duplicates;
}

module.exports = { findDuplicates, isDuplicate, isOneAway };
