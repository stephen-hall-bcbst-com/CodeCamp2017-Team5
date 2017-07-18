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

        Slack.postMessageToChannel(channel, "Ugh. You're still here.");

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
