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
           var ImBackPhrases = ["I'm back from bingo with the girls!", "Just finished feeding my cats!", "Finally done with knitting you a brand new scarf!"];
           {Slack.postMessageToChannel(channel, helper.phraseAtRandom(ImBackPhrases));
            Slack.postMessageToChannel(channel, 'what is your parent/guardian name? ');
        }

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
