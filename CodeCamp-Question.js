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
       var response = (response);
       var helper = require('./helpers');
       var WydPhrases = ["I'm knittin' yah a sweater!", 
                         "I'm readin the Knittin' Catalog!", 
                         "Playin a fun game of Bingo with all mah friends!"];
       var MathPhrases = ["I believe the answer is 35,785.", 
                          "2/7 of course!", 
                          "Clearly the answer is 3", 
                          "-505. I may be old, but I still got it!", 
                          "Is it 65 and 3/8?", 
                          "11 billion.", 
                          "Uh.. is it 670?", 
                          "7 hundred thousand!", 
                          "I believe the answer is 33 billion!"];

// List of responses triggered by words included in questions       
               if (lc.includes('food') && lc.includes('favorite')) {
                 response = "mmMMm. I love me some prune puddin'. I'll make ya some when me and my cats to visit ya!";
        } else if (lc.includes('color') && lc.includes('favorite')) {
                 response = 'Magenta, of course! I bought the cutest magenta sun hat last saturday! Large and covered in frills with a giant feather on top!';
        } else if (lc.includes('animal') && lc.includes('favorite')) {
                 response = "Favorite animal? Well, mah cats of course! I love mah furry babies more then I love plum puddin'! ";
        } else if (lc.includes('drink') && lc.includes('favorite')) {
                 response = "I love me a big ol' jug of pink lemonade! Perfect for days lounging under the sun with mah new magenta hat.";
        } else if (lc.includes('show') && lc.includes('favorite')) {
                 response = "Dance Moms! Those ladies keep mah young, with their cracka lackin' and their pop hop!";
        } else if (lc.includes('shape') && lc.includes('favorite')) {
                 response = "Hmm, hearts of course!";
        } else if (lc.includes('cereal') && lc.includes('favorite')) {
                 response = "Rasion Bran! MmMm. Delicous.";
        } else if (lc.includes('fruit') && lc.includes('favorite')) {
                 response = "Prunes! Pruney old prunes.";
// Sends a messsage when asked "How are you?"
        } else if (lc.includes('how are you')) {
                 response = "I'm doin' fine!";                    
// Suffles through a list of responses and sends when asked "What are you doing?"     
        } else if (lc.includes('what') && lc.includes('you') && lc.includes('doing')) {
                 response = (helper.phraseAtRandom(WydPhrases));
/* Recognizes math problems through the use of operation words and supplies wrong answers.
 * She's an old lady! Her brain has a lil trouble with doing math.*/
        } else if (lc.includes('+') || lc.includes('plus') || lc.includes('minus') || lc.includes('times') || lc.includes('divided by')) {
                 response = (helper.phraseAtRandom(MathPhrases));
// Replies to questions pertaining to Marg's opinions
        } else if (lc.includes('what') && lc.includes('you') && lc.includes('think') && lc.includes('cats')) {
                 response = "Cats are heavenly angels on Earth!";
        } else if (lc.includes('what') && lc.includes('you') && lc.includes('think') && lc.includes('dogs')) {
                 response = "Dogs! Ugh! Horrible mangy beasts! No where near as cuddly as my beautiful cats";
        } else if (lc.includes('what') && lc.includes('you') && lc.includes('think') && lc.includes('me')) {
                 response = "You're really great, honeybun!";
        } else if (lc.includes('what') && lc.includes('you') && lc.includes('think') && lc.includes('rock and roll')) {
                 response = "Rock and roll! Ugh! Horrible, horrible music! No one appreciates real music any more!";
        } else if (lc.includes('what') && lc.includes('you') && lc.includes('think') && lc.includes('')) {
                 response = "  ";
        
// If none apply, sends "Well.. I'm not sure what you mean honeybun!"        
        } else {
                 response = "Well.. I'm not sure what you mean, honeybun!";          
        } 

          Slack.postMessageToChannel(channelName, response);
        // *********************************************************************

        

        // *********************************************************************
        // STOP CODING!
        // ********************************************************************   
    },
};
