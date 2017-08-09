"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "infray",
			"path": "infray/infray.js",
			"file": "infray.js",
			"module": "infray",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/infray.git",
			"test": "infray-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		One-way array difference.
	@end-module-documentation

	@include:
		{
			"arid": "arid",
			"doubt": "doubt",
			"een": "een",
			"raze": "raze",
			"truly": "truly"
		}
	@end-include
*/

const arid = require( "arid" );
const doubt = require( "doubt" );
const een = require( "een" );
const raze = require( "raze" );
const truly = require( "truly" );

const infray = function infray( source, target ){
	/*;
		@meta-configuration:
			{
				"source:required": "[*]",
				"target:required": "[*]"
			}
		@end-meta-configuration
	*/

	if( !doubt( source, AS_ARRAY ) ){
		source = [ source ].map( truly );
	}

	if( !doubt( target, AS_ARRAY ) ){
		target = [ target ].map( truly );
	}

	source = raze( source );

	target = raze( target );

	if( arid( source ) && arid( target ) ){
		return [ ];
	}

	if( arid( source ) ){
		return target;
	}

	if( arid( target ) ){
		return source;
	}

	return source.filter( ( element ) => !een( target, element ) );
};

module.exports = infray;
