'use strict';
const sendError = require('../send-error');

module.exports = function(req, res) {
    try {
        const people = require('../cache/people.json');
        res.json({ data: people });
    } catch (e) {
        sendError(e, res);
    }
};
