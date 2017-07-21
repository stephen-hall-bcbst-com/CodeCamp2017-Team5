'use strict';

var botData = require('./data/bot');
// Stores data for parent and child names as well as for if someone was sick.
module.exports = {
    botData: botData,
    wasSomeonesick: 'no',
    parent: '',
    child: '',
};
