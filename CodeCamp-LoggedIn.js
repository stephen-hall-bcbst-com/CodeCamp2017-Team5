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
           var ImBackPhrases = ['what is your parent/guardian name? '] + ['what is the child name?'];
           {Slack.postMessageToChannel(channel, helper.phraseAtRandom(ImBackPhrases));
        }

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
