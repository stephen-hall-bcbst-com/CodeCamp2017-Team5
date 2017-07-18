'use strict';

module.exports = {
    settings: {
        enabled: true,
        timeoutInSeconds: 50,
    },

    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    bored: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channel, 'Can you respond? Or are you too stupid to do that.');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
