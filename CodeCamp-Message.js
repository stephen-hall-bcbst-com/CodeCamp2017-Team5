'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    message_received: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        var lc = message.toLowerCase();
        var helper = require('./helpers');
        var activities = ['color a picture','jogging','read a book','30 minute rest','watch TV','play videos games','go over homework','go over fire escape plan', 'water the garden'];
        var jokes = ['what do you call a container of ducks?... a box of quackers!', 'what do you get when you cross a snowman and a vampire?... frost bite!', 'why do seagulls fly over the sea?... because if they flew over a bay they would be called bagels!', 'why is detective duck so good?... because he always quacks the case!', 'why is the mouse a good ninja?... because he is very squeaky', 'why are the pizza jokes is bad?... because they are very cheesy', 'why come little lion doesnt have friends?... because he is not cool!']; 
             // this function just simply says bye 
        if (lc.includes('hi') || lc.includes('hey')) {
            Slack.postMessageToChannel(channelName, 'Hi there buttercup');
            // this function just simply says hi
        } else if (lc.includes('bye') || lc.includes('goodbye')) {
            Slack.postMessageToChannel(channelName, 'Take care see you later honey');
            // this function makes sure the child is not hungry at home 
        } else if (lc.includes('hungry') || lc.includes('starving')) {
            Slack.postMessageToChannel(channelName, 'microwave the frozen nuggets hon.');
            // this function makes sure the kids are active at home
        } else if (lc.includes('next') || lc.includes('action')) {
            Slack.postMessageToChannel(channelName, helper.phraseAtRandom(activities));
            // this function makes sur the child is healthy at home
        } else if (lc.includes('tired') || lc.includes('sleepy') || lc.includes('drowsy')) {
            Slack.postMessageToChannel(channelName, 'take a minute and chill buttercup');
            // this function makes sure the child is okay at home
        } else if (lc.includes('sick') || lc.includes('hurts')) {
            Slack.postMessageToChannel(channelName, 'how bad does it hurt, take some medicine');
            // this function makes sure the child is safe at home
        } else if (lc.includes('very bad')|| lc.includes('a lot') || lc.includes('stranger')) {
            Slack.postMessageToChannel(channelName, 'ill call 911');
            // this function helps the child/kid be entertained at home
        } else if (lc.includes('joke') || lc.includes('funny')) {
            Slack.postMessageToChannel(channelName, helper.phraseAtRandom(jokes));
        }
        
        
      
      
      
        // Slack.postMessageToChannel(channelName, "Message received.");
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
