var request = require('request');

var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status message: ', response.statusMessage);
         console.log('content-type ', response.headers['content-type']);

       })
      .pipe(fs.createWriteStream('./future.html'));