'use strict';

module.exports = {
    settings: {
        enabled: true,
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

        Slack.postMessageToChannel(channel, 'Hurry!!! I AM WAITINGGG! HELLOOO!');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
