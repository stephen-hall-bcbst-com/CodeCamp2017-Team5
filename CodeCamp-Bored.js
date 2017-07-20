'use strict';

module.exports = {
    settings: {
        enabled: true,
        timeoutInSeconds: 30,
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
        switch (helper.numberBetweenXandY(1, 6)) {
            case 1: Slack.postMessageToChannel(channel, 'What do you need? Oh, and remember to drink 8, 8 ounce cups of water each day');
                break;
            case 2: Slack.postMessageToChannel(channel, 'I could be spending this time knitting, you know...');
                break;
            case 3: Slack.postMessageToChannel(channel, 'Im old but my patience is kind of "new", hint hint...!');
                break;
            case 4: Slack.postMessageToChannel(channel, 'Where did you go Honey? Still there?');
                break; 
            case 5: Slack.postMessageToChannel(channel, 'Are you shy sugar? Say something..');
                break;
            case 6: Slack.postMessageToChannel(channel, 'You come here for something??? Huh?');
                break;
            case 7: Slack.postMessageToChannel(channel, 'I wont give you a spanking if you speak to me darling.');
                break;
            case 8: Slack.postMessageToChannel(channel, 'You making me old with your silence..whats wrong?');
                break;
            case 9: Slack.postMessageToChannel(channel, 'Do you have something in your mouth? Are you not able to talk?');
                break;
            case 10: Slack.postMessageToChannel(channel, 'Closed mouths do not get fed honey...');
        }
        

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
