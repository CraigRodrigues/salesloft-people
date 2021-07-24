'use strict';
const sendError = require('../send-error');

module.exports = function(req, res) {
    try {
        const duplicates = require('../cache/duplicates.json');
        res.json({ date: duplicates });
    } catch (e) {
        sendError(e, res);
    }
};
