'use strict';

module.exports = function(req, res) {
    const frequency = require('../cache/frequency.json');
    res.json({ data: frequency });
};
