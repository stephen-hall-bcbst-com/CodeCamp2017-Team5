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
        
<<<<<<< HEAD
if (lc.includes('')) {
    Slack.postMessageToChannel(channelName, '');
} else {
    Slack.postMessageToChannel(channelName, '');
}
if (lc.includes('')) {
    Slack.postMessageToChannel(channelName, '');
=======
if (lc.includes()) {
    Slack.postMessageToChannel(channelName, 
} else {
    Slack.postMessageToChannel(channelName,
if (lc.includes()) {
    Slack.postMessageToChannel(channelName,
>>>>>>> e3333c8425d548053f62a1a61e1208f457f01a79
    }



        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
