var fs = require('fs');

var data = '';

var readStream = fs.createReadStream('smptxt.txt', 'utf8');

readStream.on('data', function(chunk) {
    data += chunk;
}).on('end', function() {
    console.log(data);
});