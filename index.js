var alexa = require('alexa-app');
var app = new alexa.app();
var Request = require('request');
/**
 * LaunchRequest.
 */
app.launch(function (request, response) {
    response.say('Omnius is Online');
    response.shouldEndSession(false);
});


app.intent('endIntent',
    function (request, response) {
        response.say('stopping, by your command');
        response.shouldEndSession(true);
        response.send();
        return false;
    });

/**
 * IntentRequest.
 */
app.intent('directionIntent',
    {
        'slots': {'dir': 'LIST_OF_DIRECTIONS'},
        'utterances': ['go {dir}']
    },
    function (request, response) {
        var direction = request.slot('dir');
        switch (direction) {
            case 'forward':
                Request("https://7bce550f.ngrok.io/api/robots/omnius/commands/forward", function (error, Response, body) {
                    if (!error && Response.statusCode == 200) {
                        console.log(body);
                        response.say('going forward, by your command'); //
                        response.shouldEndSession(false);
                        response.reprompt('Please tell me where to go');
                        response.send();
                    } else {
                        response.say('what?').reprompt('where do you want me to go?');
                        response.shouldEndSession(false);
                        response.send();
                    }
                });
                break;
            case 'backward':
                Request("https://7bce550f.ngrok.io/api/robots/omnius/commands/backward", function (error, Response, body) {
                    if (!error && Response.statusCode == 200) {
                        console.log(body);
                        response.say('going backward, by your command'); //
                        response.shouldEndSession(false);
                        response.reprompt('Please tell me where to go');
                        response.send();
                    } else {
                        response.say('what?').reprompt('where do you want me to go?');
                        response.shouldEndSession(false);
                        response.send();
                    }
                });
                break;
            case 'left':
                Request("https://7bce550f.ngrok.io/api/robots/omnius/commands/left", function (error, Response, body) {
                    if (!error && Response.statusCode == 200) {
                        console.log(body);
                        response.say('turning left, by your command'); //
                        response.shouldEndSession(false);
                        response.reprompt('Please tell me where to go');
                        response.send();
                    } else {
                        response.say('what?').reprompt('where do you want me to go?');
                        response.shouldEndSession(false);
                        response.send();
                    }
                });
                break;
            case 'right':
                Request("https://7bce550f.ngrok.io/api/robots/omnius/commands/right", function (error, Response, body) {
                    if (!error && Response.statusCode == 200) {
                        console.log(body);
                        response.say('turning right, by your command'); //
                        response.shouldEndSession(false);
                        response.reprompt('Please tell me where to go');
                        response.send();
                    } else {
                        response.say('what?').reprompt('where do you want me to go?');
                        response.shouldEndSession(false);
                        response.send();
                    }
                });
                break;
            default:
                response.say('what?').reprompt('where do you want me to go?');
                response.shouldEndSession(false);
                response.send();
                break;
        }
        // Return false immediately so alexa-app doesn't send the response
        return false;
    }
);
/**
 * Error handler for any thrown errors.
 */
app.error = function (exception, request, response) {
    response.say('Sorry, something bad happened');
};
// Connect to lambda
exports.handler = app.lambda();
