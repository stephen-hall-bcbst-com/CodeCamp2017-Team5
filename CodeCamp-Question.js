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

// Questions will be runned through 
    if (lc.includes('favorite')) {
          checktext(lc);
           
        function checktext(text) {
            switch (text) {
               case 'food': 
                    response = 'Strawberry Pie';
                    break;
               case 'color':
                    Slack.postMessageToChannel(channelName, 'Green');
                    break;
            }
        }
        
        

        // *********************************************************************

        Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
