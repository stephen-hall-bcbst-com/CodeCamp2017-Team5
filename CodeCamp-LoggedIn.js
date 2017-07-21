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
           memory.child = helper.readDataFromFile('child name');
           var ImBackPhrases = ["Hi buttercup! Back fromg bingo! What is your parent and child name? Please answer seperately"];
           {Slack.postMessageToChannel(channel, helper.phraseAtRandom(ImBackPhrases));
        }

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
