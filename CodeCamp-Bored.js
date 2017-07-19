'use strict';

module.exports = {
    settings: {
        enabled: true,
        timeoutInSeconds: 15,
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
            case 2: Slack.postMessageToChannel(channel, 'Im thinking of a "number" between HURRY and UP!, Right NOW!');
                break;
            case 3: Slack.postMessageToChannel(channel, 'I could be spending this time knitting, you know...');
                break;
            case 4: Slack.postMessageToChannel(channel, 'Im old but my patience is kind of "new", hint hint...!');
                break;
            case 5: Slack.postMessageToChannel(channel, 'Where did you go Honey? Still there?');
                break; 
            case 6: Slack.postMessageToChannel(channel, 'Are you shy sugar? Say something..');
        }
        

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
