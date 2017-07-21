'use strict';

module.exports = {
    settings: {
        enabled: true,
        timeoutInSeconds: 40,
    },

    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    bored: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************
        var helper = require('./helpers');
        // Response(s) when bot gets bored at a given time, (15) seconds
        switch (helper.numberBetweenXandY(1, 10)) {
            case 1: Slack.postMessageToChannel(channel, 'What do you need? Oh, and remember to drink 8, 8 ounce cups of water each day');
                break;
            case 2: Slack.postMessageToChannel(channel, 'I could be spending this time knitting, you know...');
                break;
            case 3: Slack.postMessageToChannel(channel, 'Im old but my patience is kind of "new", hint hint...!');
                break;
            case 4: Slack.postMessageToChannel(channel, "Did you know that I can do math? I'm SOOO good at it!");
                break; 
            case 5: Slack.postMessageToChannel(channel, 'Are you shy sugar? Say something..');
                break;
            case 6: Slack.postMessageToChannel(channel, 'Wanna hear a story? Just ask "Can you tell me a story?"');
                break;
            case 7: Slack.postMessageToChannel(channel, 'I wont give you a spanking if you speak to me darling.');
                break;
            case 8: Slack.postMessageToChannel(channel, 'Wanna hear a joke? Just ask "Tell me a joke"');
                break;
            case 9: Slack.postMessageToChannel(channel, 'Do you have something in your mouth? Are you not able to talk?');
                break;
            case 10: Slack.postMessageToChannel(channel, 'Closed mouths do not get fed honey...');
                break;
            case 11: Slack.postMessageToChannel(channel, "Im SUPER good at math! Just ask me to subtract,add, multiply, or divide something!");
                break;
}
        // Randomly generates a number with a given response. It then post that message from the attached number to the channel.

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
