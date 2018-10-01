var https = require("https");

 var requestOptions = {
     host:"sytantris.github.io",
     path: '/http-examples/step3.html'

   };

 function getAndPrintHtml2(host, path){


    };

    var bufferData = "" ;

   https.get(requestOptions, function(response){

    response.setEncoding('utf8');

    response.on('data', function (data) {
        bufferData += data;

  });


  response.on('end', function(){
    console.log('response stream comnplete')
      console.log(bufferData);

  });

});


getAndPrintHtml2(requestOptions.host, requestOptions.path);

