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
    Slack.postMessageToChannel(channelName, 
} else {
    Slack.postMessageToChannel(channelName,
if (lc.includes('dumb')) {
    Slack.postMessageToChannel(channelName,
    }



        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
