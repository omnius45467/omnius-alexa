var curl = require('curlrequest');
curl.request({ url: 'https://aa723752.ngrok.io/api/robots/omnius/commands/forward', pretend: false }, function (err) {
    if(err){
        console.log(err);
    }
});