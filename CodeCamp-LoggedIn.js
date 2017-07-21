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
           // Takes parent and child name data and places it in Memory
           memory.parent = helper.readDataFromFile('parent name');
           memory.child = helper.readDataFromFile('child name');
           var ImBackPhrases = ["Hi buttercup! Back from bingo! What is your parent and child name? Please answer seperately. (Enter 'My parent's name is -'. Then enter 'My name is -')"];
           {Slack.postMessageToChannel(channel, helper.phraseAtRandom(ImBackPhrases));
        }

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
