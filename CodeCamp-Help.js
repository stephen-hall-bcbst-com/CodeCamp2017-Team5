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
            
// Sends message when someone says they are hurt
        if (lc.includes('hurt') || lc.includes('hurts')) {
        Slack.postMessageToChannel(channelName, 'Ouch! If you are in serious pain, try calling your parents number. If you can not, call 911. If you are in dull pain, bandage the wound.');
        }
// Sends message when someone says they are aching      
        if (lc.includes('aching')) {
        Slack.postMessageToChannel(channelName, 'Try relaxing and drinking water. Do not use the aching body part too much.');
        }
// Sends message when someone says they are having trouble with homework        
        if (lc.includes('homework')) {
        Slack.postMessageToChannel(channelName, 'Try searching it up and reading over the question extensively.');
        }
// Sends message when someone says they are in pain        
        if (lc.includes('pain')) {
        Slack.postMessageToChannel(channelName, 'Do what you would do if you were aching or hurt.');
        }
// Sends messgae when someone says they are bored    
        if (lc.includes('boring')) {
                Slack.postMessageToChannel(channelName, 'Try saying "Tell me a joke"');
        }
// Sends message when someone says they are hungry      
        if (lc.includes('hungry')) {
                Slack.postMessageToChannel(channelName, 'Try asking your parent.');
        }
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************      
    },
};
