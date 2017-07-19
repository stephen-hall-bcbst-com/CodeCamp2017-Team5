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
        var helper = require('./helpers');
        var activities = ['color a picture','jogging','read a book','']
 
        if (lc.includes('hi') || lc.includes('hey')) {
            Slack.postMessageToChannel(channelName, 'Hi there buttercup');
        }
         else if (lc.includes('bye') || lc.includes('goodbye')) {
            Slack.postMessageToChannel(channelName, 'Take care see you later honey');
        }
        else if (lc.includes('hungry') || lc.includes('starving')) {
            Slack.postMessageToChannel(channelName, 'microwave the frozen nuggets hon.');
        }
        else if (lc.includes('next') || lc.includes('action')) {
            Slack.postMessageToChannel(channelName, helper.phraseAtRandom(activities));
        }
      
      
      
      
      
       //Slack.postMessageToChannel(channelName, "Message received.");
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
