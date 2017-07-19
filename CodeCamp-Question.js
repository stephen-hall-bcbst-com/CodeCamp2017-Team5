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
                 response = 'Magenta, of course! I bought the cutest magenta sun hat last saturday! Large and covered in frills with a giant feather on top!';
        }      
            if (text.includes('animal')) {
                 response = "Favorite animal? Well, mah cats of course! I love mah furry babies more then I love plum puddin'! ";
        }   
            if (text.includes('drink')) {
                 response = "I love me a big ol' jug of pink lemonade! Perfect for days lounging under the sun with mah new magenta hat.";
        }
            if (text.includes('show')) {
                 response = "Dance Moms! Those ladies keep mah young, with their cracka lackin' and their pop hop!";
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
