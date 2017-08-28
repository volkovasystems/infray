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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZnJheS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiZG91YnQiLCJlZW4iLCJyYXplIiwidHJ1bHkiLCJpbmZyYXkiLCJzb3VyY2UiLCJ0YXJnZXQiLCJBU19BUlJBWSIsIm1hcCIsImZpbHRlciIsImVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxNQUFNRixRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1HLE9BQU9ILFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUksUUFBUUosUUFBUyxPQUFULENBQWQ7O0FBRUEsSUFBTUssU0FBUyxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDL0M7Ozs7Ozs7OztBQVNBLEtBQUksQ0FBQ04sTUFBT0ssTUFBUCxFQUFlRSxRQUFmLENBQUwsRUFBZ0M7QUFDL0JGLFdBQVMsQ0FBRUEsTUFBRixFQUFXRyxHQUFYLENBQWdCTCxLQUFoQixDQUFUO0FBQ0E7O0FBRUQsS0FBSSxDQUFDSCxNQUFPTSxNQUFQLEVBQWVDLFFBQWYsQ0FBTCxFQUFnQztBQUMvQkQsV0FBUyxDQUFFQSxNQUFGLEVBQVdFLEdBQVgsQ0FBZ0JMLEtBQWhCLENBQVQ7QUFDQTs7QUFFREUsVUFBU0gsS0FBTUcsTUFBTixDQUFUOztBQUVBQyxVQUFTSixLQUFNSSxNQUFOLENBQVQ7O0FBRUEsS0FBSVIsS0FBTU8sTUFBTixLQUFrQlAsS0FBTVEsTUFBTixDQUF0QixFQUFzQztBQUNyQyxTQUFPLEVBQVA7QUFDQTs7QUFFRCxLQUFJUixLQUFNTyxNQUFOLENBQUosRUFBb0I7QUFDbkIsU0FBT0MsTUFBUDtBQUNBOztBQUVELEtBQUlSLEtBQU1RLE1BQU4sQ0FBSixFQUFvQjtBQUNuQixTQUFPRCxNQUFQO0FBQ0E7O0FBRUQsUUFBT0EsT0FBT0ksTUFBUCxDQUFlLFVBQUVDLE9BQUYsVUFBZSxDQUFDVCxJQUFLSyxNQUFMLEVBQWFJLE9BQWIsQ0FBaEIsRUFBZixDQUFQO0FBQ0EsQ0FuQ0Q7O0FBcUNBQyxPQUFPQyxPQUFQLEdBQWlCUixNQUFqQiIsImZpbGUiOiJpbmZyYXkuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiaW5mcmF5XCIsXG5cdFx0XHRcInBhdGhcIjogXCJpbmZyYXkvaW5mcmF5LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJpbmZyYXkuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiaW5mcmF5XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9pbmZyYXkuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJpbmZyYXktdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRPbmUtd2F5IGFycmF5IGRpZmZlcmVuY2UuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcblx0XHRcdFwiZWVuXCI6IFwiZWVuXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCBlZW4gPSByZXF1aXJlKCBcImVlblwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5cbmNvbnN0IGluZnJheSA9IGZ1bmN0aW9uIGluZnJheSggc291cmNlLCB0YXJnZXQgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJzb3VyY2U6cmVxdWlyZWRcIjogXCJbKl1cIixcblx0XHRcdFx0XCJ0YXJnZXQ6cmVxdWlyZWRcIjogXCJbKl1cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoICFkb3VidCggc291cmNlLCBBU19BUlJBWSApICl7XG5cdFx0c291cmNlID0gWyBzb3VyY2UgXS5tYXAoIHRydWx5ICk7XG5cdH1cblxuXHRpZiggIWRvdWJ0KCB0YXJnZXQsIEFTX0FSUkFZICkgKXtcblx0XHR0YXJnZXQgPSBbIHRhcmdldCBdLm1hcCggdHJ1bHkgKTtcblx0fVxuXG5cdHNvdXJjZSA9IHJhemUoIHNvdXJjZSApO1xuXG5cdHRhcmdldCA9IHJhemUoIHRhcmdldCApO1xuXG5cdGlmKCBhcmlkKCBzb3VyY2UgKSAmJiBhcmlkKCB0YXJnZXQgKSApe1xuXHRcdHJldHVybiBbIF07XG5cdH1cblxuXHRpZiggYXJpZCggc291cmNlICkgKXtcblx0XHRyZXR1cm4gdGFyZ2V0O1xuXHR9XG5cblx0aWYoIGFyaWQoIHRhcmdldCApICl7XG5cdFx0cmV0dXJuIHNvdXJjZTtcblx0fVxuXG5cdHJldHVybiBzb3VyY2UuZmlsdGVyKCAoIGVsZW1lbnQgKSA9PiAhZWVuKCB0YXJnZXQsIGVsZW1lbnQgKSApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbmZyYXk7XG4iXX0=
//# sourceMappingURL=infray.support.js.map
