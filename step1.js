var https = require("https");

// var requestOptions = {
//     host: "syntaris.github.io",
//     path: '/http-examples/ste1.html
// };

function getAndPrintHtmlChunks(){
    var requestOptions = {
     host:"sytantris.github.io",
     path: '/http-examples/step1.html'
    };

   https.get(requestOptions, function(response){

    response.setEncoding('utf8');

    response.on('data', function(data) {
    console.log(data)

  });

  response.on('end', function(){
    console.log('response stream complete')

  });

});

}




getAndPrintHtmlChunks();

