var Request = require('request');

// quest('https://7bce550f.ngrok.io/api/robots/omnius/commands/forward', function () {
//     if (this.statusCode == 200) {
//         console.log(this);
//     }else{
//         console.log('failed');
//     }
// });
// var request = require('request');
Request('https://7bce550f.ngrok.io/api/robots/omnius/commands/forward', function (error, Response, body) {
    if (!error && Response.statusCode == 200) {
        console.log(Response.statusCode);
        console.log(body); // Show the HTML for the Google homepage.
    }
});