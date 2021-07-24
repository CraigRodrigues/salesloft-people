'use strict';

const PORT = process.env.PORT || '8080';
const HOST = process.env.HOST || 'localhost.com';
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const peopleRouter = require('./middleware/people');
const frequencyRouter = require('./middleware/frequency');
const duplicatesRouter = require('./middleware/duplicates');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));

app.use(express.static(path.resolve(__dirname, '../client/build')));

// TODO: serve static react files
app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/people.json', peopleRouter);
app.get('/frequency.json', frequencyRouter);
app.get('/duplicates.json', duplicatesRouter);

app.listen(PORT, () => {
    console.log(`Listening at ${HOST}:${PORT}`);
});

module.exports = app;