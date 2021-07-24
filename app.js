'use strict';

const fs = require('fs');
const { fetchPeople } = require('./fetch-people');
const { createFrequencyMap } = require('./create-frequency');
const { findDuplicates } = require('./find-duplicates');

async function run() {
    // Fetch initial data from SalesLoft API
    const people = await fetchPeople();
    console.log('People fetched: %j', results);

    // Create People.json file in cache
    fs.writeFileSync('cache/people.json', JSON.stringify(people, 0, 2));
    console.log('people.json cached');

    // Use people.json data to create a frequency map
    const frequencyMap = createFrequencyMap(people);

    console.log('Frequency map created: %j', frequencyMap);
    fs.writeFileSync('cache/frequency.json', JSON.stringify(frequencyMap, 0, 2));
    console.log('freqency.json cached');

    // Use people.json data to create a possible duplicates list
    const duplicates = findDuplicates(people);

    console.log('Potential duplicates found: %j', duplicates);
    fs.writeFileSync('cache/duplicates.json', JSON.stringify(duplicates, 0, 2));
    console.log('duplicates.json cached');

    // Begin cron job

    // Start api server
}

run().catch(e => console.error(e));
