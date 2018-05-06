/**
 * Created by haich on 5/6/2018.
 */

// This file is not transpiled .so must use CommonJS and ES5


// register babel to transpile before test run
require("babel-register")();

//Disable webpack features that Mocha does't understand.

require.extensions['.css'] =  function () {};

