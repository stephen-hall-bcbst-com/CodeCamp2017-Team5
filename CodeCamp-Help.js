'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    asked_for_help: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************
        var lc = message.toLowerCase();
            
        if (lc.includes('homework')) {
        Slack.postMessageToChannel(channelName, 'Ok what are you working on ?');
        } else {
        Slack.postMessageToChannel(channelName, 'What can i do for you.');
        }
        if (lc.includes('hurt')) {
        Slack.postMessageToChannel(channelName, 'Do you need a band aid or something ');
        }

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
