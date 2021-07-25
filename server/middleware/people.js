'use strict';

module.exports = function(req, res) {
    const people = require('../cache/people.json');
    res.json({ data: people });
};
