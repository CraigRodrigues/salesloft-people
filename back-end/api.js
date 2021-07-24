'use strict';

const PORT = process.env.PORT || '3000';
const HOST = process.env.HOST || 'localhost.com';
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));

// Create express app with three routes
app.get('/', (req, res) => {
    res.send('hello');
});

// GET for people
app.get('/people.json', (req, res) => {
    res.send('people');
});

// GET for frequency
app.get('/frequency.json', (req, res) => {
    res.send('frequency');
});

// GET for duplicates
app.get('/duplicates.json', (req, res) => {
    res.send('duplicates');
});

app.listen(PORT, () => {
    console.log(`Listening at ${HOST}:${PORT}`);
});

module.exports = app;