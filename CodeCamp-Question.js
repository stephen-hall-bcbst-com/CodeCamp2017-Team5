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

// 
if (lc.includes('favorite')) {
    checktext(lc);

        function checktext(text) {
            if (text.includes('food')) {
                 response = "mmMMm. I love me some prune puddin'. I'll make ya some when me and mah cats to visit ya!";
        }
            if (text.includes('color')) {
                 response = 'Magenta, of course! I bought the cutest magenta hat last saturday!';
        }      
            if (text.includes('animal')) {
                 response = "Favorite animal? Well, mah cats of course! I love mah furry babies more then I love plum puddin'! ";
        }
    }
}
     

        // *********************************************************************

        Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
