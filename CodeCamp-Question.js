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
       var response = 'well..';

// Response when questioned about birthday.
        if (lc.includes('when') && lc.includes('your') && lc.includes('birthday')) {
        response = "Why do you care? You're not invited to my birthday party anyway.";
    }
    
// Response when questioned about weather.
        if (lc.includes('weather') && lc.includes('what')) {
            response = "I don't know. Why don't you try going outside and try checking?";
    }

// Response when questioned about favorite color.
        if (lc.includes('favorite') && lc.includes('color')) {
            response = "Any color that you don't like.";
    }

// Response when questioned about mean behavior.
        if (lc.includes('why') && lc.includes('you') && lc.includes('mean')) {
            response = "Well, I have to be around you all day.";
    }

// Response when questioned about favorite things
        if (lc.includes('favorite')) {
        
            switch(text) {
               case 'food' : 
                    Slack.postMessageToChannel(channelName, 'Strawberry Pie');
                    break;
               case 'color' :
                    Slack.postMessageToChannel(channelName, 'Green');
                    break;
        }
        


        // *********************************************************************

        Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
