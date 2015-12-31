'use strict';

var toJSON = require( 'utils-error-to-json' );
var revive = require( './../lib' );

var err1 = new SyntaxError( 'bad syntax' );
// returns <SyntaxError>

var json = toJSON( err1 );
/*
  {
    "type": "SyntaxError",
    "name": "SyntaxError",
    "message": "bad syntax",
    "stack": "<stack>"
  }
*/

var str = JSON.stringify( json );
// returns '{"type":"SyntaxError","name":"SyntaxError","message":"bad syntax","stack":"<stack>"}'

var err2 = JSON.parse( str, revive );
// returns <SyntaxError>

console.log( err1.message === err2.message );
// returns true

console.log( err1.stack === err2.stack );
// returns true
