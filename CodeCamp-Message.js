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
        var activities = ['color a picture', 'jogging', 'read a book', '30 minute rest', 'watch TV', 'play videos games', 'go over homework', 'go over fire escape plan']
 
        if (lc.includes('hi') || lc.includes('hey')) {
            Slack.postMessageToChannel(channelName, 'Hi there buttercup'); 
        } else if (lc.includes('bye') || lc.includes('goodbye')) {
            Slack.postMessageToChannel(channelName, 'Take care see you later honey');
        } else if (lc.includes('hungry') || lc.includes('starving')) {
            Slack.postMessageToChannel(channelName, 'microwave the frozen nuggets hon.');
        } else if (lc.includes('next') || lc.includes('action')) {
            Slack.postMessageToChannel(channelName, helper.phraseAtRandom(activities));
        } else if (lc.includes('tired') || lc.includes('sleepy') || lc.includes('drowsy')) {
            Slack.postMessageToChannel(channelName, 'take a minute and chill buttercup');
        } else if (lc.includes('sick') || lc.includes('hurts')) {
            Slack.postMessageToChannel(channelName, 'how bad does it hurt, take some medicine');
        } else if (lc.includes('very bad')|| lc.includes('a lot') || lc.includes('stranger')) {
            Slack.postMessageToChannel(channelName, 'ill call the hospital');
        }
      
      
      
         // Slack.postMessageToChannel(channelName, "Message received.");
         // *********************************************************************
         // STOP CODING!
         // *********************************************************************
    };
},
};
