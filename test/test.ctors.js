'use strict';

// MODULES //

var test = require( 'tape' );
var getKeys = require( 'object-keys' );
var ctors = require( './../lib/ctors.js' );


// TESTS //

test( 'export is a function hash', function test( t ) {
	var keys;
	var i;

	t.ok( typeof ctors === 'object', 'export is an object' );

	keys = getKeys( ctors );
	t.ok( keys.length > 0, 'has keys' );

	for ( i = 0; i < keys.length; i++ ) {
		t.ok( typeof ctors[ keys[i] ] === 'function', keys[i] + ' value is a function' );
	}
	t.end();
});
