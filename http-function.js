var https = require('https');

module.exports = function getHtml(options, callback){

 var bufferData = "" ;

  https.get(options, function(response){

    response.setEncoding('utf8');

    response.on('data', function(data) {
      bufferData += data;
    });

    response.on('end', function(){
      callback(bufferData);
    });
  });
}
