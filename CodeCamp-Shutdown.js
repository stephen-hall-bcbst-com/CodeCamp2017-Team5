'use strict';
module.exports = {
    /**
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    shutdown_received: function(channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channelName, "I need to feed my cats bye kiddo, stay safe!");

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
