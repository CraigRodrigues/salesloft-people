'use strict';
const { CronJob } = require('cron');
const cacheData = require('./cache-data');

async function run() {
    await cacheData();

    // Begin CronJob
    // const job = new CronJob('* * * * *', async () => {
    //     console.log('Re-caching data');
    //     await cacheData();
    // }, null, true, 'America/New_York');

    // job.start();
}

run().catch(e => {
    console.error(e);
    process.exit(1);
});
