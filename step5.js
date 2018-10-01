var getHtml = require('./http-function');

var requestOptions = {
    host: 'syntantris.github.io',
    path: '/http-examples/step5.html'
};

function printHtml(data){
  console.log(data);
  console.log('response stream complete')
}

getHtml(requestOptions, printHtml);
