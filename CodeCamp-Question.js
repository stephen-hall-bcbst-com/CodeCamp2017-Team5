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
       var helper = require('./helpers');
       var WydPhrases = ["I'm knittin' yah a sweater!", "I'm readin the Knittin' Catalog!", "Playin a fun game of Bingo with all mah friends!"];

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
<<<<<<< HEAD
     
=======

// Sends a messsage when asked "How are you?"
 if (lc.includes('how are you')) {
    response = "I'm doin' fine!";
 }
>>>>>>> e3333c8425d548053f62a1a61e1208f457f01a79

// Suffles through 3 responses to send when asked "What you doing?"
if (lc.includes('what') && lc.includes('you') && lc.includes('doing'));
    {Slack.postMessageToChannel(channelName, helper.phraseAtRandom(WydPhrases));
 }
<<<<<<< HEAD

// 
if (lc.includes('+') || lc.includes('plus') ||

=======
        
>>>>>>> d58271b6ede6a66fe463868b8e1f1ec4481ef4c9
        
        
        // *********************************************************************

        Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
