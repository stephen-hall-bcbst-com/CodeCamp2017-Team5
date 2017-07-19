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

// This checks if someone is asking about Marg's interests
if (lc.includes('favorite')) {
    checktext(lc);

// This sends a response based on what interest is being questioned
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
            if (text.includes('season')) {
                 response = "Winter! That's when I can break out mah knitting tools and get to work!";
        }
            if (text.includes('emoji')) {
                 response = "Eh? Emo-ji? What's that? Is it one of them new rock bands. Dreadful noises..";
        }
            if (text.includes('sport')) {
                 response = "Rythmic Gymnastics!";
        }
            if (text.includes('hobby')) {
                 response = "Knitting! Why? Should I make ya a new sweater to wear to school? I'll do that right now!";
        }      
            if (text.includes('fruit')) {
                 response = "Prunes! Pruney old prunes!";
        }
            if (text.includes('cereal')) {
                 response = "Raison Bran! Delicous!";
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
