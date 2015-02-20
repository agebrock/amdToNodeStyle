define('dolor', ['foo', 'exports', 'require', '../bar/baz'], function (foo, exports, require) {

    var baz = require('../bar/baz');

    var ipsum = 'dolor amet';

    exports.doFoo = function(){
        foo.bar( baz.dolor, ipsum );
    };

});

