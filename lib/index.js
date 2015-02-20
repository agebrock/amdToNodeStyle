var parse = require('./parser').parse;
var through = require('through2');



var gulpPlugin = function () {
    return through.obj(function (file, enc, done) {
        var input, output;
        if (file.contents) {
        	input = file.contents.toString();
        	parsedResult = parse(input);
        	if(input === output){
        		console.log('INFO: no change in file: %s', file.path);
        	}else{
            	file.contents = new Buffer(parsedResult);
        	}
        }
        done(null, file)
    });
};

gulpPlugin.parse = parse;
module.exports = gulpPlugin;

