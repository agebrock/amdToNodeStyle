# amdToNodeStyle

Esprima parser, to convert AMD modules into a node.js compatible format.

This module comes in two flavors.

* gulp 
* standalone parser

##Usage
The gulp way
```js
    gulp.src('/your/amd/files/**/*.js')
    .pipe(amdToNodeStyle())
    .pipe(gulp.dest('./out'));
```
Handmade
```js
    var nodeStyleSource = amdToNodeStyle.parse(require('fs').readFileSync('./src/someAmdFile.js', 'utf8'));
    console.log(nodeStyleSource);
```

### Input

```js
    define('dolor', ['foo', 'exports', 'require', '../bar/baz'], function (foo, exports, require) {
        var baz = require('../bar/baz');
        var ipsum = 'dolor amet';
        exports.doFoo = function(){
            foo.bar( baz.dolor, ipsum );
        };
    });

```

### Output

```js
     var foo = require('foo');
     var baz = require('../bar/baz');
    
     // another comment
     var ipsum = 'dolor amet';
    
     exports.doFoo = function(){
        foo.bar( baz.dolor, ipsum );
     };
```


## Credits
Hard work done by the nodeify project.


## License

Released under the MIT license

