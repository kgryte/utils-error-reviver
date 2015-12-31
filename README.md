Error Reviver
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Revives a JSON-serialized [error][utils-error-to-json] object.


## Installation

``` bash
$ npm install utils-error-reviver
```


## Usage

``` javascript
var revive = require( 'utils-error-reviver' );
```

#### revive( key, value )

Revives a JSON-serialized [error][utils-error-to-json] object.

``` javascript
var str = '{"type":"TypeError","message":"beep"}';

var err = JSON.parse( str, revive );
// returns <TypeError>
```

For details on the JSON serialization format, see [utils-error-to-json][utils-error-to-json].


## Notes

*	Supported built-in [`error`][js-error] types:
	-	[`Error`][js-error]
	- 	[`URIError`][js-uri-error]
	-	[`ReferenceError`][js-reference-error]
	-	[`SyntaxError`][js-syntax-error]
	-	[`RangeError`][js-range-error]
	-	[`EvalError`][js-eval-error]
	-	[`TypeError`][js-type-error]


## Examples

``` javascript
var toJSON = require( 'utils-error-to-json' );
var revive = require( 'utils-error-reviver' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/utils-error-reviver.svg
[npm-url]: https://npmjs.org/package/utils-error-reviver

[build-image]: http://img.shields.io/travis/kgryte/utils-error-reviver/master.svg
[build-url]: https://travis-ci.org/kgryte/utils-error-reviver

[coverage-image]: https://img.shields.io/codecov/c/github/kgryte/utils-error-reviver/master.svg
[coverage-url]: https://codecov.io/github/kgryte/utils-error-reviver?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/utils-error-reviver.svg
[dependencies-url]: https://david-dm.org/kgryte/utils-error-reviver

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/utils-error-reviver.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/utils-error-reviver

[github-issues-image]: http://img.shields.io/github/issues/kgryte/utils-error-reviver.svg
[github-issues-url]: https://github.com/kgryte/utils-error-reviver/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[utils-error-to-json]: https://github.com/kgryte/utils-error-to-json

[js-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
[js-type-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError
[js-syntax-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError
[js-range-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
[js-reference-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
[js-uri-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError
[js-eval-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError
