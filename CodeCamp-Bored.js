'use strict';

module.exports = {
    settings: {
        enabled: false,
        timeoutInSeconds: 15,
    },

    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    bored: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channel, 'What are you waiting for?');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
