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

        if (lc.includes('know')) {
            Slack.postMessageToChannel(channelName, 'Who cares about that anyway... just go away...');
      
      } else if (lc.includes('joke')) {
            Slack.postMessageToChannel(channelName, 'Joke? the only joke here is you!');

            Slack.postMessageToChannel(channelName, 'WHAT ELSE!');
      } else if (lc.includes('robot')) {
            Slack.postmessageToChannel(channelName, 'heh... im not a ro..bot');
     
      } else if (lc.includes('girl')) {
            Slack.postmessageToChannel(channelName, 'yeah Im married, see...  ');
    
      } else if (lc.includes('depression')) {
            Slack.postmessageToChannel(channelName, 'yeah I got that speaking to you!');
   
      } else if (lc.includes('nice')) {  
            Slack.postmessageToChannel(channelName, 'hey you are kinda nice thanks, but that changes NOTHING!');
      
      } else if (lc.includes('hey')) { 
            Slack.
      }

        



        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
