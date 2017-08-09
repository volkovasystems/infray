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

var arid = require("arid");
var doubt = require("doubt");
var een = require("een");
var raze = require("raze");
var truly = require("truly");

var infray = function infray(source, target) {
	/*;
                                              	@meta-configuration:
                                              		{
                                              			"source:required": "[*]",
                                              			"target:required": "[*]"
                                              		}
                                              	@end-meta-configuration
                                              */

	if (!doubt(source, AS_ARRAY)) {
		source = [source].map(truly);
	}

	if (!doubt(target, AS_ARRAY)) {
		target = [target].map(truly);
	}

	source = raze(source);

	target = raze(target);

	if (arid(source) && arid(target)) {
		return [];
	}

	if (arid(source)) {
		return target;
	}

	if (arid(target)) {
		return source;
	}

	return source.filter(function (element) {return !een(target, element);});
};

module.exports = infray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZnJheS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiZG91YnQiLCJlZW4iLCJyYXplIiwidHJ1bHkiLCJpbmZyYXkiLCJzb3VyY2UiLCJ0YXJnZXQiLCJBU19BUlJBWSIsIm1hcCIsImZpbHRlciIsImVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxNQUFNRixRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1HLE9BQU9ILFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUksUUFBUUosUUFBUyxPQUFULENBQWQ7O0FBRUEsSUFBTUssU0FBUyxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDL0M7Ozs7Ozs7OztBQVNBLEtBQUksQ0FBQ04sTUFBT0ssTUFBUCxFQUFlRSxRQUFmLENBQUwsRUFBZ0M7QUFDL0JGLFdBQVMsQ0FBRUEsTUFBRixFQUFXRyxHQUFYLENBQWdCTCxLQUFoQixDQUFUO0FBQ0E7O0FBRUQsS0FBSSxDQUFDSCxNQUFPTSxNQUFQLEVBQWVDLFFBQWYsQ0FBTCxFQUFnQztBQUMvQkQsV0FBUyxDQUFFQSxNQUFGLEVBQVdFLEdBQVgsQ0FBZ0JMLEtBQWhCLENBQVQ7QUFDQTs7QUFFREUsVUFBU0gsS0FBTUcsTUFBTixDQUFUOztBQUVBQyxVQUFTSixLQUFNSSxNQUFOLENBQVQ7O0FBRUEsS0FBSVIsS0FBTU8sTUFBTixLQUFrQlAsS0FBTVEsTUFBTixDQUF0QixFQUFzQztBQUNyQyxTQUFPLEVBQVA7QUFDQTs7QUFFRCxLQUFJUixLQUFNTyxNQUFOLENBQUosRUFBb0I7QUFDbkIsU0FBT0MsTUFBUDtBQUNBOztBQUVELEtBQUlSLEtBQU1RLE1BQU4sQ0FBSixFQUFvQjtBQUNuQixTQUFPRCxNQUFQO0FBQ0E7O0FBRUQsUUFBT0EsT0FBT0ksTUFBUCxDQUFlLFVBQUVDLE9BQUYsVUFBZSxDQUFDVCxJQUFLSyxNQUFMLEVBQWFJLE9BQWIsQ0FBaEIsRUFBZixDQUFQO0FBQ0EsQ0FuQ0Q7O0FBcUNBQyxPQUFPQyxPQUFQLEdBQWlCUixNQUFqQiIsImZpbGUiOiJpbmZyYXkuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJpbmZyYXlcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiaW5mcmF5L2luZnJheS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJpbmZyYXkuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJpbmZyYXlcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvaW5mcmF5LmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJpbmZyYXktdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRPbmUtd2F5IGFycmF5IGRpZmZlcmVuY2UuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxyXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcclxuXHRcdFx0XCJlZW5cIjogXCJlZW5cIixcclxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxyXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XHJcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XHJcbmNvbnN0IGVlbiA9IHJlcXVpcmUoIFwiZWVuXCIgKTtcclxuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XHJcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XHJcblxyXG5jb25zdCBpbmZyYXkgPSBmdW5jdGlvbiBpbmZyYXkoIHNvdXJjZSwgdGFyZ2V0ICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJzb3VyY2U6cmVxdWlyZWRcIjogXCJbKl1cIixcclxuXHRcdFx0XHRcInRhcmdldDpyZXF1aXJlZFwiOiBcIlsqXVwiXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoICFkb3VidCggc291cmNlLCBBU19BUlJBWSApICl7XHJcblx0XHRzb3VyY2UgPSBbIHNvdXJjZSBdLm1hcCggdHJ1bHkgKTtcclxuXHR9XHJcblxyXG5cdGlmKCAhZG91YnQoIHRhcmdldCwgQVNfQVJSQVkgKSApe1xyXG5cdFx0dGFyZ2V0ID0gWyB0YXJnZXQgXS5tYXAoIHRydWx5ICk7XHJcblx0fVxyXG5cclxuXHRzb3VyY2UgPSByYXplKCBzb3VyY2UgKTtcclxuXHJcblx0dGFyZ2V0ID0gcmF6ZSggdGFyZ2V0ICk7XHJcblxyXG5cdGlmKCBhcmlkKCBzb3VyY2UgKSAmJiBhcmlkKCB0YXJnZXQgKSApe1xyXG5cdFx0cmV0dXJuIFsgXTtcclxuXHR9XHJcblxyXG5cdGlmKCBhcmlkKCBzb3VyY2UgKSApe1xyXG5cdFx0cmV0dXJuIHRhcmdldDtcclxuXHR9XHJcblxyXG5cdGlmKCBhcmlkKCB0YXJnZXQgKSApe1xyXG5cdFx0cmV0dXJuIHNvdXJjZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBzb3VyY2UuZmlsdGVyKCAoIGVsZW1lbnQgKSA9PiAhZWVuKCB0YXJnZXQsIGVsZW1lbnQgKSApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbmZyYXk7XHJcbiJdfQ==
//# sourceMappingURL=infray.support.js.map
