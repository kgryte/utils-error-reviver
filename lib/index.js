'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' );
var getKeys = require( 'object-keys' );
var ctors = require( './ctors.js' );


// REVIVER //

/**
* FUNCTION: revive( key, value )
*	Revives a JSON-serialized error object.
*
* @param {String} key - key
* @param {*} value - value
* @returns {*|Error|SyntaxError|URIError|EvalError|ReferenceError|RangeError|TypeError} value or error object
*/
function revive( key, value ) {
	/* jshint newcap:false */
	var hasStack;
	var ctor;
	var keys;
	var err;
	var k;
	var i;
	if (
		value &&
		value.type &&
		isString( value.message )
	) {
		ctor = ctors[ value.type ];
		if ( ctor ) {
			err = new ctor( value.message );
			keys = getKeys( value );
			for ( i = 0; i < keys.length; i++ ) {
				k = keys[ i ];
				if (
					k === 'type' ||
					k === 'message' ||
					k === 'name' // read-only for built-ins
				) {
					continue;
				}
				if ( k === 'stack' ) {
					if ( !isString( value[k] ) ) {
						continue;
					}
					hasStack = true;
				}
				err[ k ] = value[ k ];
			}
			if ( !hasStack && isString( err.stack ) ) {
				err.stack = '';
			}
			return err;
		}
	}
	return value;
} // end FUNCTION revive()


// EXPORTS //

module.exports = revive;
