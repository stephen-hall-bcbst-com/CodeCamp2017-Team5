'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    message_received: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        var lc = message.toLowerCase();

        if (lc.includes('hi') || lc.includes('hey')) {
            Slack.postMessageToChannel(channelName, 'Hi there buttercup');
        }

        //Slack.postMessageToChannel(channelName, "Message received.");

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
