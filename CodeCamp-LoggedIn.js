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

        Slack.postMessageToChannel(channel, "Hi there sunny! Just woke up form mah nap.");

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
