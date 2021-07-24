'use strict';

function sendError(e, res) {
    console.error(e, res);
    res.status(500).send('Internal server error');
}

module.exports = sendError;
