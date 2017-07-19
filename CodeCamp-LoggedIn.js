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
           var ImBackPhrases = ['Hi there sunny! Just woke up from mah nap.', 'Hi there pumpkin. Just finished feeding mah cats.', 'Hello Buttercup! Back from Bingo with the girls!']
        {
            Slack.postMessageToChannel(channel, helper.phraseAtRandom(ImBackPhrases));
        }

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
