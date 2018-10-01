var https = require("https");

// var requestOptions = {
//     host: "syntaris.github.io",
//     path: '/http-examples/ste1.html
// };


 function getAndPrintHtml2(){

    var requestOptions = {
     host:"sytantris.github.io",
     path: '/http-examples/step2.html'
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

}

getAndPrintHtml2();

