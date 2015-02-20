var amdToNodeStyle = require('../');

var nodeStyleSource = amdToNodeStyle.parse(require('fs').readFileSync('./src/someAmdFile.js', 'utf8'));
console.log(nodeStyleSource);

//results
/**
 var foo = require('foo');
 var baz = require('../bar/baz');

 // another comment
 var ipsum = 'dolor amet';

 exports.doFoo = function(){
    foo.bar( baz.dolor, ipsum );
 };
**/
