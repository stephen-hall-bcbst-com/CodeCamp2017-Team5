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

        switch (helper.numberBetweenXandY(1, 4)) {
            case 1: Slack.postMessageToChannel(channel, 'Hurry!!! I AM WAITINGGG! HELLOOO!');
                break;
            case 2: Slack.postMessageToChannel(channel, 'Im thinking of a "number" between HURRY and UP!, Right NOW!');
                break;
            case 3: Slack.postMessageToChannel(channel, 'Are you still there? Cause if not BYE!');
                break;
            case 4: Slack.postMessageToChannel(channel, 'TIME is of the ESSENCE, hint hint...!');
                break;
        }
        Slack.postMessageToChannel(channel, 'Hurry!!! I AM WAITINGGG! HELLOOO!');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
