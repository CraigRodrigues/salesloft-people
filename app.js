'use strict';

const axios = require('axios');
axios.defaults.baseURL = 'https://api.salesloft.com/v2/people.json';
axios.deafults.headers.common['Authorization'] = `Bearer ${process.env.SALES_LOFT_API_KEY}`;

// let etag = '';
// let if_modified_since = '';

async function fetchPeople() {
    const data = [];
    let next_page = 1;

    // while we still have pages continue to gather data and map into an array of people
    while (next_page) {
        const config = {
            params: { page: next_page, per_page: 50 }
        };

        const response = await axios.get('https://api.salesloft.com/v2/people.json', config);

        next_page = response.data.metadata.paging.next_page;
        console.log(next_page);
        console.log(response.data.data);

        // perhaps store the ETag and date for future use
        // etag = response.headers.etag;
        // if_modified_since = response.headers.date;
    }

}

async function run() {
    const people = await fetchPeople();
    console.log(people)
    // Fetch initial data from SalesLoft API
    // Create People.json file in cache
    // Use people.json data to create a frequency map
    // Use people.json data to create a possible duplicates list
    // Begin cron job
    // Start api server
}

run();

module.exports = { fetchPeople }