var https = require("https");

var requestOptions = {
  host:"sytantris.github.io",
  path: '/http-examples/step4.html'
};

function getHtml(options, callback){

  var bufferData = "" ;

  https.get(options, function(response){

    response.setEncoding('utf8');

    response.on('data', function (data) {
      bufferData += data;
    });

    response.on('end', function(){
      callback(bufferData);
    });
  });
}


function printHtml(data){
  console.log(data);
  console.log('response stream complete')
}



getHtml(requestOptions, printHtml);

