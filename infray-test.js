
const assert = require( "assert" );
const infray = require( "./infray.js" );

assert.deepEqual( infray( [ 1, 2, 3, 4 ], [ 3, 4, 5, 6 ] ), [ 1, 2 ], "should be equal to [ 1, 2 ]" );

console.log( "ok" );
