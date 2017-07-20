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
       var memory = require('./CodeCamp-Memory');
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
      var BoringStories = [ ];

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
        } else if (lc.includes('my') && lc.includes('name')) {
                 response = "The parent's name is" + memory.parent + ". The child's name is" + memory.child + ".";
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
// Sends message when question about age
        } else if (lc.includes('how') && lc.includes('old') && lc.includes('you')) {
                 response = "Old enough to give you a spankin'!";
// Sends a story if Marg is asked to tell a story       
        } else if (lc.includes('tell') && lc.includes('story')) {
                 response = "Well, once, long ago, in a land far, far away, I was engaged to a handsome rich guy, but I was still sad because I hate handsome rich guys. Like, who even likes handsome rich guys, they are the worst. Always so handsome. And rich. SO stupid! So he gave me one fancy necklace. Liver of the Ocean, I believe it was called. So, while I was off crying because I had to be engaged to a stupid handsome, rich guy, I accidentally slipt on a pina coladoa, and fell off the boat, but I was saved, by a handsome poor guy. Name was Jake, I think? So, I became bffs with Jake and left my stupid rich, handsome, fiance for him, but then, suddenly, a giant, handsome squid came out of the ocean and cut the boat I was on with a giant pair of scissors. Everyone was getting onto the lifeboats and sailing away, but I didn't want to do that because lifeboats are lame, so I grabbed a door and yanked Jake into the water with me. So, we were floating away when Jake started complaining that he was getting hypothermia and drowning and other stupid stuff and he asked me to let him onto the door I was currently surfing to victory, but I told him to suck it and stop being such a crybaby. Yeah, my adventures on the Titanic were great.";     
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
