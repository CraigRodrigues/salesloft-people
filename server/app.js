'use strict';

const PORT = process.env.PORT || '8080';
const HOST = process.env.HOST || 'localhost.com';
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const getPeople = require('./middleware/people');
const getFrequency = require('./middleware/frequency');
const getDuplicates = require('./middleware/duplicates');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/people.json', getPeople, );
app.get('/frequency.json', getFrequency);
app.get('/duplicates.json', getDuplicates);
app.get('*', (req, res) => res.status(404).json({ 'message': 'Url not found' }));

app.listen(PORT, () => {
    console.log(`Listening at ${HOST}:${PORT}`);
});

module.exports = app;