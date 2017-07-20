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
            
        if (lc.includes('help')) {
        Slack.postMessageToChannel(channelName, 'What can i assist you with?');
        }
        if (lc.includes('hurt')) {
        Slack.postMessageToChannel(channelName, 'Ouch! I would recommend first aid for you.');
        }
        if (lc.includes('aching')) {
        Slack.postMessageToChannel(channelName, 'Try taking pain relievers or medicine.');
        }
        if (lc.includes('assist')) {
        Slack.postMessageToChannel(channelName, 'I would be glad to help, what do you need?');
        }

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
