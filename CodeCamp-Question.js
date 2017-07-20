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
       var MathPhrases = ["I believe the answer is 35,785.", "2/7 of course!", "Clearly the answer is 3", "-505. I may be old, but I still got it!", "Is it 65 and 3/8?", "11 billion.", "Uh.. is it 670?", "7 hundred thousand!", "I believe the answer is 33 billion!"];

// 
if (lc.includes('favorite')) {
    checktext(lc);
<<<<<<< HEAD
// This sends a response based on what interest is being questioned
=======

>>>>>>> 4df83522aa1a7b14b51c3875fb41b024ebad8d00
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
     

// Sends a messsage when asked "How are you?"
 if (lc.includes('how are you')) {
    response = "I'm doin' fine!";
 }

// Suffles through 3 responses to send when asked "What you doing?"
if (lc.includes('what') && lc.includes('you') && lc.includes('doing'));
    {Slack.postMessageToChannel(channelName, helper.phraseAtRandom(WydPhrases));
 }

// Recognizes math problems through the use of operation words and supplies wrong answers.
// She's an old lady! Her brain has a lil trouble with doing math.
if (lc.includes('+') || lc.includes('plus') || lc.includes('minus') || lc.includes('times') || lc.includes('divided by'));
    {Slack.postMessageToChannel(channelName, helper.phraseAtRandom(MathPhrases));
 }

        
        
        
        // *********************************************************************

        Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
