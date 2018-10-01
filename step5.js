var getHtml = require('./http-function');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
};

function printHtml(data2){
  console.log(data2);
  console.log('response stream complete')
}

getHtml(requestOptions, printHtml);
