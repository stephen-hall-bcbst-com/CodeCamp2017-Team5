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
            
        
        if (lc.includes('hurt') || lc.includes('hurts')) {
        Slack.postMessageToChannel(channelName, 'Ouch! there should br some band-aids in the cabnit.');
        }
        if (lc.includes('aching')) {
        Slack.postMessageToChannel(channelName, 'Try taking pain relievers or medicine.');
        }
        if (lc.includes('homework')) {
        Slack.postMessageToChannel(channelName, 'Ok what are you doing?');
        }
        if (lc.includes('pain')) {
        Slack.postMessageToChannel(channelName, 'Do you want some pain killers?');
    }
    
        if (lc.includes('boring')) {
                Slack.postMessageToChannel(channelName, 'Well I am ni able to do what i used to do i cant help you.');
       
        if (lc.includes('hungry')) {
                Slack.postMessageToChannel(channelName, 'There should be some food in the kitchen ');
        }
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************      
        }
    },
};
