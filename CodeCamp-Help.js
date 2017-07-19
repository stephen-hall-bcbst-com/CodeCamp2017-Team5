'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    asked_for_help: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************
var lc = message.toLowerCase();
        
if (lc.includes('homework')) {
    Slack.postMessageToChannel(channelName, 'Why dont you use your notes you got at school instead of asking me.');
} else {
    Slack.postMessageToChannel(channelName, 'WHAT DO YOU WANT!!!!! I AM TRYING TO HAVE A GOOD DAY TILL YOU SHOWED UP THANKS FOR RUINING MY DAY!!!!.');
}
if (lc.includes('dumb')) {
    Slack.postMessageToChannel(channelName, 'Your the dumb one now leave me alone dumbo');
    }



        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
