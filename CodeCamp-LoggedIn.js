'use strict';

module.exports = {
    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    logged_in: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************
           var helper = require('./helpers');
           var memory = require('./CodeCamp-Memory');
           memory.parent = helper.readDataFromFile('parent name');
           var ImBackPhrases = ["what is your parent and child name? please answer seperately"];
           {Slack.postMessageToChannel(channel, helper.phraseAtRandom(ImBackPhrases));
        }

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
