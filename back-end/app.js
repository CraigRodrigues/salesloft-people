'use strict';

const fs = require('fs');
const { exec } = require('child_process');
const CronJob = require('cron').CronJob;
const { fetchPeople } = require('./fetch-people');
const { createFrequencyMap } = require('./create-frequency');
const { findDuplicates } = require('./find-duplicates');

async function run() {
    // Fetch initial data from SalesLoft API
    const people = await fetchPeople();

    // Create People.json file in cache
    fs.writeFileSync(`${__dirname}/cache/people.json`, JSON.stringify(people, 0, 2));
    console.log('people.json cached');

    // Use people.json data to create a frequency map
    const frequencyMap = createFrequencyMap(people);

    fs.writeFileSync(`${__dirname}/cache/frequency.json`, JSON.stringify(frequencyMap, 0, 2));
    console.log('freqency.json cached');

    // Use people.json data to create a possible duplicates list
    const duplicates = findDuplicates(people);

    fs.writeFileSync(`${__dirname}/cache/duplicates.json`, JSON.stringify(duplicates, 0, 2));
    console.log('duplicates.json cached');

    // Begin cron job
    // new CronJob('', async () => {
    //     const { stdout, stderr } = await exec('node api.js');
    //     console.log('stdout:', stdout);
    //     console.error('stderr:', stderr);
    // });
}

run().catch(e => {
    console.error(e);
    process.exit(1);
});
