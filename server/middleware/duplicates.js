'use strict';

module.exports = function(req, res) {
    const duplicates = require('../cache/duplicates.json');
    res.json({ data: duplicates });
};
