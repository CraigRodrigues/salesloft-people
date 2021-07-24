'use strict';

const fs = require('fs');
const axios = require('axios');
axios.defaults.baseURL = 'https://api.salesloft.com/v2/people.json';
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.SALES_LOFT_API_KEY}`;

// let etag = '';
// let if_modified_since = '';

async function fetchPeople() {
    let results = [];
    let next_page = 1;

    // while we still have pages continue to gather data and map into an array of people
    while (next_page) {
        const config = {
            params: { page: next_page, per_page: 50 }
        };

        const response = await axios.get('https://api.salesloft.com/v2/people.json', config);

        next_page = response.data.metadata.paging.next_page;

        const mappedResults = response.data.data.map((person) => {
            return {
                name: person.display_name,
                email: person.email_address,
                title: person.title
            }
        });

        results = [...results, ...mappedResults];

        // perhaps store the ETag and date for future use
        // etag = response.headers.etag;
        // if_modified_since = response.headers.date;
    }

    return results;
}

function createFrequencyMap(people) {
    return people;
}

function findDuplicates(people) {
    return people;
}

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

run();

module.exports = { fetchPeople, createFrequencyMap, findDuplicates }