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
         else if (lc.includes('bye') || lc.includes('goodbye')) {
            Slack.postMessageToChannel(channelName, 'Take care see you later honey');
        }
        else if (lc.includes('hungry') || lc.includes('starving')) {
            Slack.postMessageToChannel(channelName, 'microwave the frozen nuggets hon.');
        }
        else if (lc.includes('next') || lc.includes('action')) {

      
      
      
      
      
       //Slack.postMessageToChannel(channelName, "Message received.");
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
