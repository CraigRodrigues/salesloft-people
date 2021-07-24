'use strict';
const sendError = require('../send-error');

module.exports = function(req, res) {
    try {
        const frequency = require('../cache/frequency.json');
        res.json({ date: frequency });
    } catch (e) {
        sendError(e, res);
    }
};
