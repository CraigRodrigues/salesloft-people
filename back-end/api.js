'use strict';

const PORT = process.env.PORT || '3000';
const HOST = process.env.HOST || 'localhost.com';
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));

function sendError(e, res) {
    console.error(e, res);
    res.status(500).send('Internal server error');
}

// TODO: serve static react files
app.get('/', (req, res) => {
    res.send('hello');
});

// GET for people
app.get('/people.json', (req, res) => {
    try {
        const people = require('./cache/people.json');
        res.json({ date: people });
    } catch (e) {
        sendError(e, res);
    }
});

// GET for frequency
app.get('/frequency.json', (req, res) => {
    try {
        const frequency = require('./cache/frequency.json');
        res.json({ data: frequency });
    } catch (e) {
        sendError(e, res);
    }
});

// GET for duplicates
app.get('/duplicates.json', (req, res) => {
    try {
        const duplicates = require('./cache/duplicates.json');
        res.json({ data: duplicates });
    } catch (e) {
        sendError(e, res);
    }
});

app.listen(PORT, () => {
    console.log(`Listening at ${HOST}:${PORT}`);
});

module.exports = app;