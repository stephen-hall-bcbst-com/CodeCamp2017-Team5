'use strict';
module.exports = {
    /**
     * @param {string} question
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    question_received: function(question, channelName, userName, Slack) {
        // *********************************************************************
       var lc = question.toLowerCase();
       var response = 'Well.....';

        if (lc.includes('when') && lc.includes('your') && lc.includes('birthday')) {
        response = "Why do you care? You're not invited to my birthday party anyway.";
        }
        
        if (lc.includes('weather') && lc.includes('what')) {
            response = "I don't know. Why don't you try going outside and checking?";
        }
        // *********************************************************************

        Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
