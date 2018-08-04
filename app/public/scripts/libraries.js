/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

(function webpackMissingModule() { throw new Error("Cannot find module \"./app/scripts/libraries/jQuery.js\""); }());
__webpack_require__(21);
__webpack_require__(22);
module.exports = __webpack_require__(23);


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e.moment = t();
}(undefined, function () {
  "use strict";
  var e, t;function n() {
    return e.apply(null, arguments);
  }function s(e) {
    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
  }function i(e) {
    return null != e && "[object Object]" === Object.prototype.toString.call(e);
  }function r(e) {
    return void 0 === e;
  }function a(e) {
    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
  }function o(e) {
    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
  }function u(e, t) {
    var n,
        s = [];for (n = 0; n < e.length; ++n) {
      s.push(t(e[n], n));
    }return s;
  }function l(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }function d(e, t) {
    for (var n in t) {
      l(t, n) && (e[n] = t[n]);
    }return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e;
  }function h(e, t, n, s) {
    return Ot(e, t, n, s, !0).utc();
  }function c(e) {
    return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), e._pf;
  }function f(e) {
    if (null == e._isValid) {
      var n = c(e),
          s = t.call(n.parsedDateParts, function (e) {
        return null != e;
      }),
          i = !isNaN(e._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && s);if (e._strict && (i = i && 0 === n.charsLeftOver && 0 === n.unusedTokens.length && void 0 === n.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return i;e._isValid = i;
    }return e._isValid;
  }function m(e) {
    var t = h(NaN);return null != e ? d(c(t), e) : c(t).userInvalidated = !0, t;
  }t = Array.prototype.some ? Array.prototype.some : function (e) {
    for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++) {
      if (s in t && e.call(this, t[s], s, t)) return !0;
    }return !1;
  };var _ = n.momentProperties = [];function y(e, t) {
    var n, s, i;if (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), r(t._i) || (e._i = t._i), r(t._f) || (e._f = t._f), r(t._l) || (e._l = t._l), r(t._strict) || (e._strict = t._strict), r(t._tzm) || (e._tzm = t._tzm), r(t._isUTC) || (e._isUTC = t._isUTC), r(t._offset) || (e._offset = t._offset), r(t._pf) || (e._pf = c(t)), r(t._locale) || (e._locale = t._locale), _.length > 0) for (n = 0; n < _.length; n++) {
      r(i = t[s = _[n]]) || (e[s] = i);
    }return e;
  }var g = !1;function p(e) {
    y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === g && (g = !0, n.updateOffset(this), g = !1);
  }function v(e) {
    return e instanceof p || null != e && null != e._isAMomentObject;
  }function w(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }function M(e) {
    var t = +e,
        n = 0;return 0 !== t && isFinite(t) && (n = w(t)), n;
  }function S(e, t, n) {
    var s,
        i = Math.min(e.length, t.length),
        r = Math.abs(e.length - t.length),
        a = 0;for (s = 0; s < i; s++) {
      (n && e[s] !== t[s] || !n && M(e[s]) !== M(t[s])) && a++;
    }return a + r;
  }function D(e) {
    !1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e);
  }function k(e, t) {
    var s = !0;return d(function () {
      if (null != n.deprecationHandler && n.deprecationHandler(null, e), s) {
        for (var i, r = [], a = 0; a < arguments.length; a++) {
          if (i = "", "object" == _typeof(arguments[a])) {
            for (var o in i += "\n[" + a + "] ", arguments[0]) {
              i += o + ": " + arguments[0][o] + ", ";
            }i = i.slice(0, -2);
          } else i = arguments[a];r.push(i);
        }D(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + new Error().stack), s = !1;
      }return t.apply(this, arguments);
    }, t);
  }var Y,
      O = {};function T(e, t) {
    null != n.deprecationHandler && n.deprecationHandler(e, t), O[e] || (D(t), O[e] = !0);
  }function x(e) {
    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
  }function b(e, t) {
    var n,
        s = d({}, e);for (n in t) {
      l(t, n) && (i(e[n]) && i(t[n]) ? (s[n] = {}, d(s[n], e[n]), d(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
    }for (n in e) {
      l(e, n) && !l(t, n) && i(e[n]) && (s[n] = d({}, s[n]));
    }return s;
  }function P(e) {
    null != e && this.set(e);
  }n.suppressDeprecationWarnings = !1, n.deprecationHandler = null, Y = Object.keys ? Object.keys : function (e) {
    var t,
        n = [];for (t in e) {
      l(e, t) && n.push(t);
    }return n;
  };var W = {};function H(e, t) {
    var n = e.toLowerCase();W[n] = W[n + "s"] = W[t] = e;
  }function R(e) {
    return "string" == typeof e ? W[e] || W[e.toLowerCase()] : void 0;
  }function C(e) {
    var t,
        n,
        s = {};for (n in e) {
      l(e, n) && (t = R(n)) && (s[t] = e[n]);
    }return s;
  }var F = {};function L(e, t) {
    F[e] = t;
  }function U(e, t, n) {
    var s = "" + Math.abs(e),
        i = t - s.length;return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s;
  }var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      G = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      V = {},
      E = {};function I(e, t, n, s) {
    var i = s;"string" == typeof s && (i = function i() {
      return this[s]();
    }), e && (E[e] = i), t && (E[t[0]] = function () {
      return U(i.apply(this, arguments), t[1], t[2]);
    }), n && (E[n] = function () {
      return this.localeData().ordinal(i.apply(this, arguments), e);
    });
  }function A(e, t) {
    return e.isValid() ? (t = j(t, e.localeData()), V[t] = V[t] || function (e) {
      var t,
          n,
          s,
          i = e.match(N);for (t = 0, n = i.length; t < n; t++) {
        E[i[t]] ? i[t] = E[i[t]] : i[t] = (s = i[t]).match(/\[[\s\S]/) ? s.replace(/^\[|\]$/g, "") : s.replace(/\\/g, "");
      }return function (t) {
        var s,
            r = "";for (s = 0; s < n; s++) {
          r += x(i[s]) ? i[s].call(t, e) : i[s];
        }return r;
      };
    }(t), V[t](e)) : e.localeData().invalidDate();
  }function j(e, t) {
    var n = 5;function s(e) {
      return t.longDateFormat(e) || e;
    }for (G.lastIndex = 0; n >= 0 && G.test(e);) {
      e = e.replace(G, s), G.lastIndex = 0, n -= 1;
    }return e;
  }var Z = /\d/,
      z = /\d\d/,
      $ = /\d{3}/,
      q = /\d{4}/,
      J = /[+-]?\d{6}/,
      B = /\d\d?/,
      Q = /\d\d\d\d?/,
      X = /\d\d\d\d\d\d?/,
      K = /\d{1,3}/,
      ee = /\d{1,4}/,
      te = /[+-]?\d{1,6}/,
      ne = /\d+/,
      se = /[+-]?\d+/,
      ie = /Z|[+-]\d\d:?\d\d/gi,
      re = /Z|[+-]\d\d(?::?\d\d)?/gi,
      ae = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
      oe = {};function ue(e, t, n) {
    oe[e] = x(t) ? t : function (e, s) {
      return e && n ? n : t;
    };
  }function le(e, t) {
    return l(oe, e) ? oe[e](t._strict, t._locale) : new RegExp(de(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, s, i) {
      return t || n || s || i;
    })));
  }function de(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }var he = {};function ce(e, t) {
    var n,
        s = t;for ("string" == typeof e && (e = [e]), a(t) && (s = function s(e, n) {
      n[t] = M(e);
    }), n = 0; n < e.length; n++) {
      he[e[n]] = s;
    }
  }function fe(e, t) {
    ce(e, function (e, n, s, i) {
      s._w = s._w || {}, t(e, s._w, s, i);
    });
  }var me = 0,
      _e = 1,
      ye = 2,
      ge = 3,
      pe = 4,
      ve = 5,
      we = 6,
      Me = 7,
      Se = 8;function De(e) {
    return ke(e) ? 366 : 365;
  }function ke(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  }I("Y", 0, 0, function () {
    var e = this.year();return e <= 9999 ? "" + e : "+" + e;
  }), I(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  }), I(0, ["YYYY", 4], 0, "year"), I(0, ["YYYYY", 5], 0, "year"), I(0, ["YYYYYY", 6, !0], 0, "year"), H("year", "y"), L("year", 1), ue("Y", se), ue("YY", B, z), ue("YYYY", ee, q), ue("YYYYY", te, J), ue("YYYYYY", te, J), ce(["YYYYY", "YYYYYY"], me), ce("YYYY", function (e, t) {
    t[me] = 2 === e.length ? n.parseTwoDigitYear(e) : M(e);
  }), ce("YY", function (e, t) {
    t[me] = n.parseTwoDigitYear(e);
  }), ce("Y", function (e, t) {
    t[me] = parseInt(e, 10);
  }), n.parseTwoDigitYear = function (e) {
    return M(e) + (M(e) > 68 ? 1900 : 2e3);
  };var Ye,
      Oe = Te("FullYear", !0);function Te(e, t) {
    return function (s) {
      return null != s ? (be(this, e, s), n.updateOffset(this, t), this) : xe(this, e);
    };
  }function xe(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
  }function be(e, t, n) {
    e.isValid() && !isNaN(n) && ("FullYear" === t && ke(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Pe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
  }function Pe(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;var n,
        s = (t % (n = 12) + n) % n;return e += (t - s) / 12, 1 === s ? ke(e) ? 29 : 28 : 31 - s % 7 % 2;
  }Ye = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
    var t;for (t = 0; t < this.length; ++t) {
      if (this[t] === e) return t;
    }return -1;
  }, I("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }), I("MMM", 0, 0, function (e) {
    return this.localeData().monthsShort(this, e);
  }), I("MMMM", 0, 0, function (e) {
    return this.localeData().months(this, e);
  }), H("month", "M"), L("month", 8), ue("M", B), ue("MM", B, z), ue("MMM", function (e, t) {
    return t.monthsShortRegex(e);
  }), ue("MMMM", function (e, t) {
    return t.monthsRegex(e);
  }), ce(["M", "MM"], function (e, t) {
    t[_e] = M(e) - 1;
  }), ce(["MMM", "MMMM"], function (e, t, n, s) {
    var i = n._locale.monthsParse(e, s, n._strict);null != i ? t[_e] = i : c(n).invalidMonth = e;
  });var We = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      He = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");var Re = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Ce(e, t) {
    var n;if (!e.isValid()) return e;if ("string" == typeof t) if (/^\d+$/.test(t)) t = M(t);else if (!a(t = e.localeData().monthsParse(t))) return e;return n = Math.min(e.date(), Pe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
  }function Fe(e) {
    return null != e ? (Ce(this, e), n.updateOffset(this, !0), this) : xe(this, "Month");
  }var Le = ae;var Ue = ae;function Ne() {
    function e(e, t) {
      return t.length - e.length;
    }var t,
        n,
        s = [],
        i = [],
        r = [];for (t = 0; t < 12; t++) {
      n = h([2e3, t]), s.push(this.monthsShort(n, "")), i.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
    }for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) {
      s[t] = de(s[t]), i[t] = de(i[t]);
    }for (t = 0; t < 24; t++) {
      r[t] = de(r[t]);
    }this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
  }function Ge(e) {
    var t = new Date(Date.UTC.apply(null, arguments));return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t;
  }function Ve(e, t, n) {
    var s = 7 + t - n;return -((7 + Ge(e, 0, s).getUTCDay() - t) % 7) + s - 1;
  }function Ee(e, t, n, s, i) {
    var r,
        a,
        o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + Ve(e, s, i);return o <= 0 ? a = De(r = e - 1) + o : o > De(e) ? (r = e + 1, a = o - De(e)) : (r = e, a = o), { year: r, dayOfYear: a };
  }function Ie(e, t, n) {
    var s,
        i,
        r = Ve(e.year(), t, n),
        a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;return a < 1 ? s = a + Ae(i = e.year() - 1, t, n) : a > Ae(e.year(), t, n) ? (s = a - Ae(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = a), { week: s, year: i };
  }function Ae(e, t, n) {
    var s = Ve(e, t, n),
        i = Ve(e + 1, t, n);return (De(e) - s + i) / 7;
  }I("w", ["ww", 2], "wo", "week"), I("W", ["WW", 2], "Wo", "isoWeek"), H("week", "w"), H("isoWeek", "W"), L("week", 5), L("isoWeek", 5), ue("w", B), ue("ww", B, z), ue("W", B), ue("WW", B, z), fe(["w", "ww", "W", "WW"], function (e, t, n, s) {
    t[s.substr(0, 1)] = M(e);
  });I("d", 0, "do", "day"), I("dd", 0, 0, function (e) {
    return this.localeData().weekdaysMin(this, e);
  }), I("ddd", 0, 0, function (e) {
    return this.localeData().weekdaysShort(this, e);
  }), I("dddd", 0, 0, function (e) {
    return this.localeData().weekdays(this, e);
  }), I("e", 0, 0, "weekday"), I("E", 0, 0, "isoWeekday"), H("day", "d"), H("weekday", "e"), H("isoWeekday", "E"), L("day", 11), L("weekday", 11), L("isoWeekday", 11), ue("d", B), ue("e", B), ue("E", B), ue("dd", function (e, t) {
    return t.weekdaysMinRegex(e);
  }), ue("ddd", function (e, t) {
    return t.weekdaysShortRegex(e);
  }), ue("dddd", function (e, t) {
    return t.weekdaysRegex(e);
  }), fe(["dd", "ddd", "dddd"], function (e, t, n, s) {
    var i = n._locale.weekdaysParse(e, s, n._strict);null != i ? t.d = i : c(n).invalidWeekday = e;
  }), fe(["d", "e", "E"], function (e, t, n, s) {
    t[s] = M(e);
  });var je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var Ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var ze = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");var $e = ae;var qe = ae;var Je = ae;function Be() {
    function e(e, t) {
      return t.length - e.length;
    }var t,
        n,
        s,
        i,
        r,
        a = [],
        o = [],
        u = [],
        l = [];for (t = 0; t < 7; t++) {
      n = h([2e3, 1]).day(t), s = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), a.push(s), o.push(i), u.push(r), l.push(s), l.push(i), l.push(r);
    }for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++) {
      o[t] = de(o[t]), u[t] = de(u[t]), l[t] = de(l[t]);
    }this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i");
  }function Qe() {
    return this.hours() % 12 || 12;
  }function Xe(e, t) {
    I(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t);
    });
  }function Ke(e, t) {
    return t._meridiemParse;
  }I("H", ["HH", 2], 0, "hour"), I("h", ["hh", 2], 0, Qe), I("k", ["kk", 2], 0, function () {
    return this.hours() || 24;
  }), I("hmm", 0, 0, function () {
    return "" + Qe.apply(this) + U(this.minutes(), 2);
  }), I("hmmss", 0, 0, function () {
    return "" + Qe.apply(this) + U(this.minutes(), 2) + U(this.seconds(), 2);
  }), I("Hmm", 0, 0, function () {
    return "" + this.hours() + U(this.minutes(), 2);
  }), I("Hmmss", 0, 0, function () {
    return "" + this.hours() + U(this.minutes(), 2) + U(this.seconds(), 2);
  }), Xe("a", !0), Xe("A", !1), H("hour", "h"), L("hour", 13), ue("a", Ke), ue("A", Ke), ue("H", B), ue("h", B), ue("k", B), ue("HH", B, z), ue("hh", B, z), ue("kk", B, z), ue("hmm", Q), ue("hmmss", X), ue("Hmm", Q), ue("Hmmss", X), ce(["H", "HH"], ge), ce(["k", "kk"], function (e, t, n) {
    var s = M(e);t[ge] = 24 === s ? 0 : s;
  }), ce(["a", "A"], function (e, t, n) {
    n._isPm = n._locale.isPM(e), n._meridiem = e;
  }), ce(["h", "hh"], function (e, t, n) {
    t[ge] = M(e), c(n).bigHour = !0;
  }), ce("hmm", function (e, t, n) {
    var s = e.length - 2;t[ge] = M(e.substr(0, s)), t[pe] = M(e.substr(s)), c(n).bigHour = !0;
  }), ce("hmmss", function (e, t, n) {
    var s = e.length - 4,
        i = e.length - 2;t[ge] = M(e.substr(0, s)), t[pe] = M(e.substr(s, 2)), t[ve] = M(e.substr(i)), c(n).bigHour = !0;
  }), ce("Hmm", function (e, t, n) {
    var s = e.length - 2;t[ge] = M(e.substr(0, s)), t[pe] = M(e.substr(s));
  }), ce("Hmmss", function (e, t, n) {
    var s = e.length - 4,
        i = e.length - 2;t[ge] = M(e.substr(0, s)), t[pe] = M(e.substr(s, 2)), t[ve] = M(e.substr(i));
  });var et,
      tt = Te("Hours", !0),
      nt = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: He, monthsShort: Re, week: { dow: 0, doy: 6 }, weekdays: je, weekdaysMin: ze, weekdaysShort: Ze, meridiemParse: /[ap]\.?m?\.?/i },
      st = {},
      it = {};function rt(e) {
    return e ? e.toLowerCase().replace("_", "-") : e;
  }function at(e) {
    var t = null;if (!st[e] && "undefined" != typeof module && module && module.exports) try {
      t = et._abbr, !(function webpackMissingModule() { var e = new Error("Cannot find module \"./locale\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), ot(t);
    } catch (e) {}return st[e];
  }function ot(e, t) {
    var n;return e && ((n = r(t) ? lt(e) : ut(e, t)) ? et = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), et._abbr;
  }function ut(e, t) {
    if (null !== t) {
      var n,
          s = nt;if (t.abbr = e, null != st[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = st[e]._config;else if (null != t.parentLocale) if (null != st[t.parentLocale]) s = st[t.parentLocale]._config;else {
        if (null == (n = at(t.parentLocale))) return it[t.parentLocale] || (it[t.parentLocale] = []), it[t.parentLocale].push({ name: e, config: t }), null;s = n._config;
      }return st[e] = new P(b(s, t)), it[e] && it[e].forEach(function (e) {
        ut(e.name, e.config);
      }), ot(e), st[e];
    }return delete st[e], null;
  }function lt(e) {
    var t;if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return et;if (!s(e)) {
      if (t = at(e)) return t;e = [e];
    }return function (e) {
      for (var t, n, s, i, r = 0; r < e.length;) {
        for (t = (i = rt(e[r]).split("-")).length, n = (n = rt(e[r + 1])) ? n.split("-") : null; t > 0;) {
          if (s = at(i.slice(0, t).join("-"))) return s;if (n && n.length >= t && S(i, n, !0) >= t - 1) break;t--;
        }r++;
      }return et;
    }(e);
  }function dt(e) {
    var t,
        n = e._a;return n && -2 === c(e).overflow && (t = n[_e] < 0 || n[_e] > 11 ? _e : n[ye] < 1 || n[ye] > Pe(n[me], n[_e]) ? ye : n[ge] < 0 || n[ge] > 24 || 24 === n[ge] && (0 !== n[pe] || 0 !== n[ve] || 0 !== n[we]) ? ge : n[pe] < 0 || n[pe] > 59 ? pe : n[ve] < 0 || n[ve] > 59 ? ve : n[we] < 0 || n[we] > 999 ? we : -1, c(e)._overflowDayOfYear && (t < me || t > ye) && (t = ye), c(e)._overflowWeeks && -1 === t && (t = Me), c(e)._overflowWeekday && -1 === t && (t = Se), c(e).overflow = t), e;
  }function ht(e, t, n) {
    return null != e ? e : null != t ? t : n;
  }function ct(e) {
    var t,
        s,
        i,
        r,
        a,
        o = [];if (!e._d) {
      var u, l;for (u = e, l = new Date(n.now()), i = u._useUTC ? [l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()] : [l.getFullYear(), l.getMonth(), l.getDate()], e._w && null == e._a[ye] && null == e._a[_e] && function (e) {
        var t, n, s, i, r, a, o, u;if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, a = 4, n = ht(t.GG, e._a[me], Ie(Tt(), 1, 4).year), s = ht(t.W, 1), ((i = ht(t.E, 1)) < 1 || i > 7) && (u = !0);else {
          r = e._locale._week.dow, a = e._locale._week.doy;var l = Ie(Tt(), r, a);n = ht(t.gg, e._a[me], l.year), s = ht(t.w, l.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (u = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || t.e > 6) && (u = !0)) : i = r;
        }s < 1 || s > Ae(n, r, a) ? c(e)._overflowWeeks = !0 : null != u ? c(e)._overflowWeekday = !0 : (o = Ee(n, s, i, r, a), e._a[me] = o.year, e._dayOfYear = o.dayOfYear);
      }(e), null != e._dayOfYear && (a = ht(e._a[me], i[me]), (e._dayOfYear > De(a) || 0 === e._dayOfYear) && (c(e)._overflowDayOfYear = !0), s = Ge(a, 0, e._dayOfYear), e._a[_e] = s.getUTCMonth(), e._a[ye] = s.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) {
        e._a[t] = o[t] = i[t];
      }for (; t < 7; t++) {
        e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
      }24 === e._a[ge] && 0 === e._a[pe] && 0 === e._a[ve] && 0 === e._a[we] && (e._nextDay = !0, e._a[ge] = 0), e._d = (e._useUTC ? Ge : function (e, t, n, s, i, r, a) {
        var o = new Date(e, t, n, s, i, r, a);return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o;
      }).apply(null, o), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ge] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (c(e).weekdayMismatch = !0);
    }
  }var ft = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      mt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      _t = /Z|[+-]\d\d(?::?\d\d)?/,
      yt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
      gt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
      pt = /^\/?Date\((\-?\d+)/i;function vt(e) {
    var t,
        n,
        s,
        i,
        r,
        a,
        o = e._i,
        u = ft.exec(o) || mt.exec(o);if (u) {
      for (c(e).iso = !0, t = 0, n = yt.length; t < n; t++) {
        if (yt[t][1].exec(u[1])) {
          i = yt[t][0], s = !1 !== yt[t][2];break;
        }
      }if (null == i) return void (e._isValid = !1);if (u[3]) {
        for (t = 0, n = gt.length; t < n; t++) {
          if (gt[t][1].exec(u[3])) {
            r = (u[2] || " ") + gt[t][0];break;
          }
        }if (null == r) return void (e._isValid = !1);
      }if (!s && null != r) return void (e._isValid = !1);if (u[4]) {
        if (!_t.exec(u[4])) return void (e._isValid = !1);a = "Z";
      }e._f = i + (r || "") + (a || ""), kt(e);
    } else e._isValid = !1;
  }var wt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function Mt(e, t, n, s, i, r) {
    var a = [function (e) {
      var t = parseInt(e, 10);{
        if (t <= 49) return 2e3 + t;if (t <= 999) return 1900 + t;
      }return t;
    }(e), Re.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)];return r && a.push(parseInt(r, 10)), a;
  }var St = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };function Dt(e) {
    var t,
        n,
        s,
        i = wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim());if (i) {
      var r = Mt(i[4], i[3], i[2], i[5], i[6], i[7]);if (t = i[1], n = r, s = e, t && Ze.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() && (c(s).weekdayMismatch = !0, s._isValid = !1, 1)) return;e._a = r, e._tzm = function (e, t, n) {
        if (e) return St[e];if (t) return 0;var s = parseInt(n, 10),
            i = s % 100;return (s - i) / 100 * 60 + i;
      }(i[8], i[9], i[10]), e._d = Ge.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), c(e).rfc2822 = !0;
    } else e._isValid = !1;
  }function kt(e) {
    if (e._f !== n.ISO_8601) {
      if (e._f !== n.RFC_2822) {
        e._a = [], c(e).empty = !0;var t,
            s,
            i,
            r,
            a,
            o,
            u,
            d,
            h = "" + e._i,
            f = h.length,
            m = 0;for (i = j(e._f, e._locale).match(N) || [], t = 0; t < i.length; t++) {
          r = i[t], (s = (h.match(le(r, e)) || [])[0]) && ((a = h.substr(0, h.indexOf(s))).length > 0 && c(e).unusedInput.push(a), h = h.slice(h.indexOf(s) + s.length), m += s.length), E[r] ? (s ? c(e).empty = !1 : c(e).unusedTokens.push(r), o = r, d = e, null != (u = s) && l(he, o) && he[o](u, d._a, d, o)) : e._strict && !s && c(e).unusedTokens.push(r);
        }c(e).charsLeftOver = f - m, h.length > 0 && c(e).unusedInput.push(h), e._a[ge] <= 12 && !0 === c(e).bigHour && e._a[ge] > 0 && (c(e).bigHour = void 0), c(e).parsedDateParts = e._a.slice(0), c(e).meridiem = e._meridiem, e._a[ge] = function (e, t, n) {
          var s;if (null == n) return t;return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((s = e.isPM(n)) && t < 12 && (t += 12), s || 12 !== t || (t = 0), t) : t;
        }(e._locale, e._a[ge], e._meridiem), ct(e), dt(e);
      } else Dt(e);
    } else vt(e);
  }function Yt(e) {
    var t,
        l,
        h,
        _,
        g = e._i,
        w = e._f;return e._locale = e._locale || lt(e._l), null === g || void 0 === w && "" === g ? m({ nullInput: !0 }) : ("string" == typeof g && (e._i = g = e._locale.preparse(g)), v(g) ? new p(dt(g)) : (o(g) ? e._d = g : s(w) ? function (e) {
      var t, n, s, i, r;if (0 === e._f.length) return c(e).invalidFormat = !0, void (e._d = new Date(NaN));for (i = 0; i < e._f.length; i++) {
        r = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], kt(t), f(t) && (r += c(t).charsLeftOver, r += 10 * c(t).unusedTokens.length, c(t).score = r, (null == s || r < s) && (s = r, n = t));
      }d(e, n || t);
    }(e) : w ? kt(e) : r(l = (t = e)._i) ? t._d = new Date(n.now()) : o(l) ? t._d = new Date(l.valueOf()) : "string" == typeof l ? (h = t, null === (_ = pt.exec(h._i)) ? (vt(h), !1 === h._isValid && (delete h._isValid, Dt(h), !1 === h._isValid && (delete h._isValid, n.createFromInputFallback(h)))) : h._d = new Date(+_[1])) : s(l) ? (t._a = u(l.slice(0), function (e) {
      return parseInt(e, 10);
    }), ct(t)) : i(l) ? function (e) {
      if (!e._d) {
        var t = C(e._i);e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
          return e && parseInt(e, 10);
        }), ct(e);
      }
    }(t) : a(l) ? t._d = new Date(l) : n.createFromInputFallback(t), f(e) || (e._d = null), e));
  }function Ot(e, t, n, r, a) {
    var o,
        u = {};return !0 !== n && !1 !== n || (r = n, n = void 0), (i(e) && function (e) {
      if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;var t;for (t in e) {
        if (e.hasOwnProperty(t)) return !1;
      }return !0;
    }(e) || s(e) && 0 === e.length) && (e = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = a, u._l = n, u._i = e, u._f = t, u._strict = r, (o = new p(dt(Yt(u))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o;
  }function Tt(e, t, n, s) {
    return Ot(e, t, n, s, !1);
  }n.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }), n.ISO_8601 = function () {}, n.RFC_2822 = function () {};var xt = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var e = Tt.apply(null, arguments);return this.isValid() && e.isValid() ? e < this ? this : e : m();
  }),
      bt = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var e = Tt.apply(null, arguments);return this.isValid() && e.isValid() ? e > this ? this : e : m();
  });function Pt(e, t) {
    var n, i;if (1 === t.length && s(t[0]) && (t = t[0]), !t.length) return Tt();for (n = t[0], i = 1; i < t.length; ++i) {
      t[i].isValid() && !t[i][e](n) || (n = t[i]);
    }return n;
  }var Wt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];function Ht(e) {
    var t = C(e),
        n = t.year || 0,
        s = t.quarter || 0,
        i = t.month || 0,
        r = t.week || 0,
        a = t.day || 0,
        o = t.hour || 0,
        u = t.minute || 0,
        l = t.second || 0,
        d = t.millisecond || 0;this._isValid = function (e) {
      for (var t in e) {
        if (-1 === Ye.call(Wt, t) || null != e[t] && isNaN(e[t])) return !1;
      }for (var n = !1, s = 0; s < Wt.length; ++s) {
        if (e[Wt[s]]) {
          if (n) return !1;parseFloat(e[Wt[s]]) !== M(e[Wt[s]]) && (n = !0);
        }
      }return !0;
    }(t), this._milliseconds = +d + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60, this._days = +a + 7 * r, this._months = +i + 3 * s + 12 * n, this._data = {}, this._locale = lt(), this._bubble();
  }function Rt(e) {
    return e instanceof Ht;
  }function Ct(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
  }function Ft(e, t) {
    I(e, 0, 0, function () {
      var e = this.utcOffset(),
          n = "+";return e < 0 && (e = -e, n = "-"), n + U(~~(e / 60), 2) + t + U(~~e % 60, 2);
    });
  }Ft("Z", ":"), Ft("ZZ", ""), ue("Z", re), ue("ZZ", re), ce(["Z", "ZZ"], function (e, t, n) {
    n._useUTC = !0, n._tzm = Ut(re, e);
  });var Lt = /([\+\-]|\d\d)/gi;function Ut(e, t) {
    var n = (t || "").match(e);if (null === n) return null;var s = ((n[n.length - 1] || []) + "").match(Lt) || ["-", 0, 0],
        i = 60 * s[1] + M(s[2]);return 0 === i ? 0 : "+" === s[0] ? i : -i;
  }function Nt(e, t) {
    var s, i;return t._isUTC ? (s = t.clone(), i = (v(e) || o(e) ? e.valueOf() : Tt(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + i), n.updateOffset(s, !1), s) : Tt(e).local();
  }function Gt(e) {
    return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
  }function Vt() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }n.updateOffset = function () {};var Et = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
      It = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function At(e, t) {
    var n,
        s,
        i,
        r = e,
        o = null;return Rt(e) ? r = { ms: e._milliseconds, d: e._days, M: e._months } : a(e) ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (o = Et.exec(e)) ? (n = "-" === o[1] ? -1 : 1, r = { y: 0, d: M(o[ye]) * n, h: M(o[ge]) * n, m: M(o[pe]) * n, s: M(o[ve]) * n, ms: M(Ct(1e3 * o[we])) * n }) : (o = It.exec(e)) ? (n = "-" === o[1] ? -1 : (o[1], 1), r = { y: jt(o[2], n), M: jt(o[3], n), w: jt(o[4], n), d: jt(o[5], n), h: jt(o[6], n), m: jt(o[7], n), s: jt(o[8], n) }) : null == r ? r = {} : "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && ("from" in r || "to" in r) && (i = function (e, t) {
      var n;if (!e.isValid() || !t.isValid()) return { milliseconds: 0, months: 0 };t = Nt(t, e), e.isBefore(t) ? n = Zt(e, t) : ((n = Zt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);return n;
    }(Tt(r.from), Tt(r.to)), (r = {}).ms = i.milliseconds, r.M = i.months), s = new Ht(r), Rt(e) && l(e, "_locale") && (s._locale = e._locale), s;
  }function jt(e, t) {
    var n = e && parseFloat(e.replace(",", "."));return (isNaN(n) ? 0 : n) * t;
  }function Zt(e, t) {
    var n = { milliseconds: 0, months: 0 };return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
  }function zt(e, t) {
    return function (n, s) {
      var i;return null === s || isNaN(+s) || (T(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = s, s = i), $t(this, At(n = "string" == typeof n ? +n : n, s), e), this;
    };
  }function $t(e, t, s, i) {
    var r = t._milliseconds,
        a = Ct(t._days),
        o = Ct(t._months);e.isValid() && (i = null == i || i, o && Ce(e, xe(e, "Month") + o * s), a && be(e, "Date", xe(e, "Date") + a * s), r && e._d.setTime(e._d.valueOf() + r * s), i && n.updateOffset(e, a || o));
  }At.fn = Ht.prototype, At.invalid = function () {
    return At(NaN);
  };var qt = zt(1, "add"),
      Jt = zt(-1, "subtract");function Bt(e, t) {
    var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
        s = e.clone().add(n, "months");return -(n + (t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(n + 1, "months") - s))) || 0;
  }function Qt(e) {
    var t;return void 0 === e ? this._locale._abbr : (null != (t = lt(e)) && (this._locale = t), this);
  }n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";var Xt = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
    return void 0 === e ? this.localeData() : this.locale(e);
  });function Kt() {
    return this._locale;
  }function en(e, t) {
    I(0, [e, e.length], 0, t);
  }function tn(e, t, n, s, i) {
    var r;return null == e ? Ie(this, s, i).year : (t > (r = Ae(e, s, i)) && (t = r), function (e, t, n, s, i) {
      var r = Ee(e, t, n, s, i),
          a = Ge(r.year, 0, r.dayOfYear);return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
    }.call(this, e, t, n, s, i));
  }I(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }), I(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  }), en("gggg", "weekYear"), en("ggggg", "weekYear"), en("GGGG", "isoWeekYear"), en("GGGGG", "isoWeekYear"), H("weekYear", "gg"), H("isoWeekYear", "GG"), L("weekYear", 1), L("isoWeekYear", 1), ue("G", se), ue("g", se), ue("GG", B, z), ue("gg", B, z), ue("GGGG", ee, q), ue("gggg", ee, q), ue("GGGGG", te, J), ue("ggggg", te, J), fe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) {
    t[s.substr(0, 2)] = M(e);
  }), fe(["gg", "GG"], function (e, t, s, i) {
    t[i] = n.parseTwoDigitYear(e);
  }), I("Q", 0, "Qo", "quarter"), H("quarter", "Q"), L("quarter", 7), ue("Q", Z), ce("Q", function (e, t) {
    t[_e] = 3 * (M(e) - 1);
  }), I("D", ["DD", 2], "Do", "date"), H("date", "D"), L("date", 9), ue("D", B), ue("DD", B, z), ue("Do", function (e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
  }), ce(["D", "DD"], ye), ce("Do", function (e, t) {
    t[ye] = M(e.match(B)[0]);
  });var nn = Te("Date", !0);I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), H("dayOfYear", "DDD"), L("dayOfYear", 4), ue("DDD", K), ue("DDDD", $), ce(["DDD", "DDDD"], function (e, t, n) {
    n._dayOfYear = M(e);
  }), I("m", ["mm", 2], 0, "minute"), H("minute", "m"), L("minute", 14), ue("m", B), ue("mm", B, z), ce(["m", "mm"], pe);var sn = Te("Minutes", !1);I("s", ["ss", 2], 0, "second"), H("second", "s"), L("second", 15), ue("s", B), ue("ss", B, z), ce(["s", "ss"], ve);var rn,
      an = Te("Seconds", !1);for (I("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }), I(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  }), I(0, ["SSS", 3], 0, "millisecond"), I(0, ["SSSS", 4], 0, function () {
    return 10 * this.millisecond();
  }), I(0, ["SSSSS", 5], 0, function () {
    return 100 * this.millisecond();
  }), I(0, ["SSSSSS", 6], 0, function () {
    return 1e3 * this.millisecond();
  }), I(0, ["SSSSSSS", 7], 0, function () {
    return 1e4 * this.millisecond();
  }), I(0, ["SSSSSSSS", 8], 0, function () {
    return 1e5 * this.millisecond();
  }), I(0, ["SSSSSSSSS", 9], 0, function () {
    return 1e6 * this.millisecond();
  }), H("millisecond", "ms"), L("millisecond", 16), ue("S", K, Z), ue("SS", K, z), ue("SSS", K, $), rn = "SSSS"; rn.length <= 9; rn += "S") {
    ue(rn, ne);
  }function on(e, t) {
    t[we] = M(1e3 * ("0." + e));
  }for (rn = "S"; rn.length <= 9; rn += "S") {
    ce(rn, on);
  }var un = Te("Milliseconds", !1);I("z", 0, 0, "zoneAbbr"), I("zz", 0, 0, "zoneName");var ln = p.prototype;function dn(e) {
    return e;
  }ln.add = qt, ln.calendar = function (e, t) {
    var s = e || Tt(),
        i = Nt(s, this).startOf("day"),
        r = n.calendarFormat(this, i) || "sameElse",
        a = t && (x(t[r]) ? t[r].call(this, s) : t[r]);return this.format(a || this.localeData().calendar(r, this, Tt(s)));
  }, ln.clone = function () {
    return new p(this);
  }, ln.diff = function (e, t, n) {
    var s, i, r;if (!this.isValid()) return NaN;if (!(s = Nt(e, this)).isValid()) return NaN;switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = R(t)) {case "year":
        r = Bt(this, s) / 12;break;case "month":
        r = Bt(this, s);break;case "quarter":
        r = Bt(this, s) / 3;break;case "second":
        r = (this - s) / 1e3;break;case "minute":
        r = (this - s) / 6e4;break;case "hour":
        r = (this - s) / 36e5;break;case "day":
        r = (this - s - i) / 864e5;break;case "week":
        r = (this - s - i) / 6048e5;break;default:
        r = this - s;}return n ? r : w(r);
  }, ln.endOf = function (e) {
    return void 0 === (e = R(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"));
  }, ln.format = function (e) {
    e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);var t = A(this, e);return this.localeData().postformat(t);
  }, ln.from = function (e, t) {
    return this.isValid() && (v(e) && e.isValid() || Tt(e).isValid()) ? At({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }, ln.fromNow = function (e) {
    return this.from(Tt(), e);
  }, ln.to = function (e, t) {
    return this.isValid() && (v(e) && e.isValid() || Tt(e).isValid()) ? At({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }, ln.toNow = function (e) {
    return this.to(Tt(), e);
  }, ln.get = function (e) {
    return x(this[e = R(e)]) ? this[e]() : this;
  }, ln.invalidAt = function () {
    return c(this).overflow;
  }, ln.isAfter = function (e, t) {
    var n = v(e) ? e : Tt(e);return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = R(r(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf());
  }, ln.isBefore = function (e, t) {
    var n = v(e) ? e : Tt(e);return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = R(r(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf());
  }, ln.isBetween = function (e, t, n, s) {
    return ("(" === (s = s || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n));
  }, ln.isSame = function (e, t) {
    var n,
        s = v(e) ? e : Tt(e);return !(!this.isValid() || !s.isValid()) && ("millisecond" === (t = R(t || "millisecond")) ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()));
  }, ln.isSameOrAfter = function (e, t) {
    return this.isSame(e, t) || this.isAfter(e, t);
  }, ln.isSameOrBefore = function (e, t) {
    return this.isSame(e, t) || this.isBefore(e, t);
  }, ln.isValid = function () {
    return f(this);
  }, ln.lang = Xt, ln.locale = Qt, ln.localeData = Kt, ln.max = bt, ln.min = xt, ln.parsingFlags = function () {
    return d({}, c(this));
  }, ln.set = function (e, t) {
    if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (var n = function (e) {
      var t = [];for (var n in e) {
        t.push({ unit: n, priority: F[n] });
      }return t.sort(function (e, t) {
        return e.priority - t.priority;
      }), t;
    }(e = C(e)), s = 0; s < n.length; s++) {
      this[n[s].unit](e[n[s].unit]);
    } else if (x(this[e = R(e)])) return this[e](t);return this;
  }, ln.startOf = function (e) {
    switch (e = R(e)) {case "year":
        this.month(0);case "quarter":case "month":
        this.date(1);case "week":case "isoWeek":case "day":case "date":
        this.hours(0);case "hour":
        this.minutes(0);case "minute":
        this.seconds(0);case "second":
        this.milliseconds(0);}return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this;
  }, ln.subtract = Jt, ln.toArray = function () {
    var e = this;return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
  }, ln.toObject = function () {
    var e = this;return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() };
  }, ln.toDate = function () {
    return new Date(this.valueOf());
  }, ln.toISOString = function (e) {
    if (!this.isValid()) return null;var t = !0 !== e,
        n = t ? this.clone().utc() : this;return n.year() < 0 || n.year() > 9999 ? A(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : x(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", A(n, "Z")) : A(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }, ln.inspect = function () {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";var e = "moment",
        t = "";this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");var n = "[" + e + '("]',
        s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        i = t + '[")]';return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i);
  }, ln.toJSON = function () {
    return this.isValid() ? this.toISOString() : null;
  }, ln.toString = function () {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }, ln.unix = function () {
    return Math.floor(this.valueOf() / 1e3);
  }, ln.valueOf = function () {
    return this._d.valueOf() - 6e4 * (this._offset || 0);
  }, ln.creationData = function () {
    return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
  }, ln.year = Oe, ln.isLeapYear = function () {
    return ke(this.year());
  }, ln.weekYear = function (e) {
    return tn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }, ln.isoWeekYear = function (e) {
    return tn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
  }, ln.quarter = ln.quarters = function (e) {
    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
  }, ln.month = Fe, ln.daysInMonth = function () {
    return Pe(this.year(), this.month());
  }, ln.week = ln.weeks = function (e) {
    var t = this.localeData().week(this);return null == e ? t : this.add(7 * (e - t), "d");
  }, ln.isoWeek = ln.isoWeeks = function (e) {
    var t = Ie(this, 1, 4).week;return null == e ? t : this.add(7 * (e - t), "d");
  }, ln.weeksInYear = function () {
    var e = this.localeData()._week;return Ae(this.year(), e.dow, e.doy);
  }, ln.isoWeeksInYear = function () {
    return Ae(this.year(), 1, 4);
  }, ln.date = nn, ln.day = ln.days = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;var t,
        n,
        s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - s, "d")) : s;
  }, ln.weekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;var t = (this.day() + 7 - this.localeData()._week.dow) % 7;return null == e ? t : this.add(e - t, "d");
  }, ln.isoWeekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;if (null != e) {
      var t = (n = e, s = this.localeData(), "string" == typeof n ? s.weekdaysParse(n) % 7 || 7 : isNaN(n) ? null : n);return this.day(this.day() % 7 ? t : t - 7);
    }return this.day() || 7;var n, s;
  }, ln.dayOfYear = function (e) {
    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;return null == e ? t : this.add(e - t, "d");
  }, ln.hour = ln.hours = tt, ln.minute = ln.minutes = sn, ln.second = ln.seconds = an, ln.millisecond = ln.milliseconds = un, ln.utcOffset = function (e, t, s) {
    var i,
        r = this._offset || 0;if (!this.isValid()) return null != e ? this : NaN;if (null != e) {
      if ("string" == typeof e) {
        if (null === (e = Ut(re, e))) return this;
      } else Math.abs(e) < 16 && !s && (e *= 60);return !this._isUTC && t && (i = Gt(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), r !== e && (!t || this._changeInProgress ? $t(this, At(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this;
    }return this._isUTC ? r : Gt(this);
  }, ln.utc = function (e) {
    return this.utcOffset(0, e);
  }, ln.local = function (e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Gt(this), "m")), this;
  }, ln.parseZone = function () {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
      var e = Ut(ie, this._i);null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
    }return this;
  }, ln.hasAlignedHourOffset = function (e) {
    return !!this.isValid() && (e = e ? Tt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
  }, ln.isDST = function () {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }, ln.isLocal = function () {
    return !!this.isValid() && !this._isUTC;
  }, ln.isUtcOffset = function () {
    return !!this.isValid() && this._isUTC;
  }, ln.isUtc = Vt, ln.isUTC = Vt, ln.zoneAbbr = function () {
    return this._isUTC ? "UTC" : "";
  }, ln.zoneName = function () {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }, ln.dates = k("dates accessor is deprecated. Use date instead.", nn), ln.months = k("months accessor is deprecated. Use month instead", Fe), ln.years = k("years accessor is deprecated. Use year instead", Oe), ln.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
  }), ln.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
    if (!r(this._isDSTShifted)) return this._isDSTShifted;var e = {};if (y(e, this), (e = Yt(e))._a) {
      var t = e._isUTC ? h(e._a) : Tt(e._a);this._isDSTShifted = this.isValid() && S(e._a, t.toArray()) > 0;
    } else this._isDSTShifted = !1;return this._isDSTShifted;
  });var hn = P.prototype;function cn(e, t, n, s) {
    var i = lt(),
        r = h().set(s, t);return i[n](r, e);
  }function fn(e, t, n) {
    if (a(e) && (t = e, e = void 0), e = e || "", null != t) return cn(e, t, n, "month");var s,
        i = [];for (s = 0; s < 12; s++) {
      i[s] = cn(e, s, n, "month");
    }return i;
  }function mn(e, t, n, s) {
    "boolean" == typeof e ? (a(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, a(t) && (n = t, t = void 0), t = t || "");var i,
        r = lt(),
        o = e ? r._week.dow : 0;if (null != n) return cn(t, (n + o) % 7, s, "day");var u = [];for (i = 0; i < 7; i++) {
      u[i] = cn(t, (i + o) % 7, s, "day");
    }return u;
  }hn.calendar = function (e, t, n) {
    var s = this._calendar[e] || this._calendar.sameElse;return x(s) ? s.call(t, n) : s;
  }, hn.longDateFormat = function (e) {
    var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
      return e.slice(1);
    }), this._longDateFormat[e]);
  }, hn.invalidDate = function () {
    return this._invalidDate;
  }, hn.ordinal = function (e) {
    return this._ordinal.replace("%d", e);
  }, hn.preparse = dn, hn.postformat = dn, hn.relativeTime = function (e, t, n, s) {
    var i = this._relativeTime[n];return x(i) ? i(e, t, n, s) : i.replace(/%d/i, e);
  }, hn.pastFuture = function (e, t) {
    var n = this._relativeTime[e > 0 ? "future" : "past"];return x(n) ? n(t) : n.replace(/%s/i, t);
  }, hn.set = function (e) {
    var t, n;for (n in e) {
      x(t = e[n]) ? this[n] = t : this["_" + n] = t;
    }this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
  }, hn.months = function (e, t) {
    return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || We).test(t) ? "format" : "standalone"][e.month()] : s(this._months) ? this._months : this._months.standalone;
  }, hn.monthsShort = function (e, t) {
    return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[We.test(t) ? "format" : "standalone"][e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }, hn.monthsParse = function (e, t, n) {
    var s, i, r;if (this._monthsParseExact) return function (e, t, n) {
      var s,
          i,
          r,
          a = e.toLocaleLowerCase();if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) {
        r = h([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
      }return n ? "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null;
    }.call(this, e, t, n);for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
      if (i = h([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;if (!n && this._monthsParse[s].test(e)) return s;
    }
  }, hn.monthsRegex = function (e) {
    return this._monthsParseExact ? (l(this, "_monthsRegex") || Ne.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = Ue), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
  }, hn.monthsShortRegex = function (e) {
    return this._monthsParseExact ? (l(this, "_monthsRegex") || Ne.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = Le), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }, hn.week = function (e) {
    return Ie(e, this._week.dow, this._week.doy).week;
  }, hn.firstDayOfYear = function () {
    return this._week.doy;
  }, hn.firstDayOfWeek = function () {
    return this._week.dow;
  }, hn.weekdays = function (e, t) {
    return e ? s(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : s(this._weekdays) ? this._weekdays : this._weekdays.standalone;
  }, hn.weekdaysMin = function (e) {
    return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
  }, hn.weekdaysShort = function (e) {
    return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
  }, hn.weekdaysParse = function (e, t, n) {
    var s, i, r;if (this._weekdaysParseExact) return function (e, t, n) {
      var s,
          i,
          r,
          a = e.toLocaleLowerCase();if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) {
        r = h([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
      }return n ? "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null;
    }.call(this, e, t, n);for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
      if (i = h([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;if (!n && this._weekdaysParse[s].test(e)) return s;
    }
  }, hn.weekdaysRegex = function (e) {
    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = $e), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }, hn.weekdaysShortRegex = function (e) {
    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }, hn.weekdaysMinRegex = function (e) {
    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Je), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }, hn.isPM = function (e) {
    return "p" === (e + "").toLowerCase().charAt(0);
  }, hn.meridiem = function (e, t, n) {
    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
  }, ot("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(e) {
      var t = e % 10;return e + (1 === M(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
    } }), n.lang = k("moment.lang is deprecated. Use moment.locale instead.", ot), n.langData = k("moment.langData is deprecated. Use moment.localeData instead.", lt);var _n = Math.abs;function yn(e, t, n, s) {
    var i = At(t, n);return e._milliseconds += s * i._milliseconds, e._days += s * i._days, e._months += s * i._months, e._bubble();
  }function gn(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }function pn(e) {
    return 4800 * e / 146097;
  }function vn(e) {
    return 146097 * e / 4800;
  }function wn(e) {
    return function () {
      return this.as(e);
    };
  }var Mn = wn("ms"),
      Sn = wn("s"),
      Dn = wn("m"),
      kn = wn("h"),
      Yn = wn("d"),
      On = wn("w"),
      Tn = wn("M"),
      xn = wn("y");function bn(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN;
    };
  }var Pn = bn("milliseconds"),
      Wn = bn("seconds"),
      Hn = bn("minutes"),
      Rn = bn("hours"),
      Cn = bn("days"),
      Fn = bn("months"),
      Ln = bn("years");var Un = Math.round,
      Nn = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };var Gn = Math.abs;function Vn(e) {
    return (e > 0) - (e < 0) || +e;
  }function En() {
    if (!this.isValid()) return this.localeData().invalidDate();var e,
        t,
        n = Gn(this._milliseconds) / 1e3,
        s = Gn(this._days),
        i = Gn(this._months);t = w((e = w(n / 60)) / 60), n %= 60, e %= 60;var r = w(i / 12),
        a = i %= 12,
        o = s,
        u = t,
        l = e,
        d = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
        h = this.asSeconds();if (!h) return "P0D";var c = h < 0 ? "-" : "",
        f = Vn(this._months) !== Vn(h) ? "-" : "",
        m = Vn(this._days) !== Vn(h) ? "-" : "",
        _ = Vn(this._milliseconds) !== Vn(h) ? "-" : "";return c + "P" + (r ? f + r + "Y" : "") + (a ? f + a + "M" : "") + (o ? m + o + "D" : "") + (u || l || d ? "T" : "") + (u ? _ + u + "H" : "") + (l ? _ + l + "M" : "") + (d ? _ + d + "S" : "");
  }var In = Ht.prototype;return In.isValid = function () {
    return this._isValid;
  }, In.abs = function () {
    var e = this._data;return this._milliseconds = _n(this._milliseconds), this._days = _n(this._days), this._months = _n(this._months), e.milliseconds = _n(e.milliseconds), e.seconds = _n(e.seconds), e.minutes = _n(e.minutes), e.hours = _n(e.hours), e.months = _n(e.months), e.years = _n(e.years), this;
  }, In.add = function (e, t) {
    return yn(this, e, t, 1);
  }, In.subtract = function (e, t) {
    return yn(this, e, t, -1);
  }, In.as = function (e) {
    if (!this.isValid()) return NaN;var t,
        n,
        s = this._milliseconds;if ("month" === (e = R(e)) || "year" === e) return t = this._days + s / 864e5, n = this._months + pn(t), "month" === e ? n : n / 12;switch (t = this._days + Math.round(vn(this._months)), e) {case "week":
        return t / 7 + s / 6048e5;case "day":
        return t + s / 864e5;case "hour":
        return 24 * t + s / 36e5;case "minute":
        return 1440 * t + s / 6e4;case "second":
        return 86400 * t + s / 1e3;case "millisecond":
        return Math.floor(864e5 * t) + s;default:
        throw new Error("Unknown unit " + e);}
  }, In.asMilliseconds = Mn, In.asSeconds = Sn, In.asMinutes = Dn, In.asHours = kn, In.asDays = Yn, In.asWeeks = On, In.asMonths = Tn, In.asYears = xn, In.valueOf = function () {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * M(this._months / 12) : NaN;
  }, In._bubble = function () {
    var e,
        t,
        n,
        s,
        i,
        r = this._milliseconds,
        a = this._days,
        o = this._months,
        u = this._data;return r >= 0 && a >= 0 && o >= 0 || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * gn(vn(o) + a), a = 0, o = 0), u.milliseconds = r % 1e3, e = w(r / 1e3), u.seconds = e % 60, t = w(e / 60), u.minutes = t % 60, n = w(t / 60), u.hours = n % 24, o += i = w(pn(a += w(n / 24))), a -= gn(vn(i)), s = w(o / 12), o %= 12, u.days = a, u.months = o, u.years = s, this;
  }, In.clone = function () {
    return At(this);
  }, In.get = function (e) {
    return e = R(e), this.isValid() ? this[e + "s"]() : NaN;
  }, In.milliseconds = Pn, In.seconds = Wn, In.minutes = Hn, In.hours = Rn, In.days = Cn, In.weeks = function () {
    return w(this.days() / 7);
  }, In.months = Fn, In.years = Ln, In.humanize = function (e) {
    if (!this.isValid()) return this.localeData().invalidDate();var t,
        n,
        s,
        i,
        r,
        a,
        o,
        u,
        l,
        d,
        h,
        c = this.localeData(),
        f = (n = !e, s = c, i = At(t = this).abs(), r = Un(i.as("s")), a = Un(i.as("m")), o = Un(i.as("h")), u = Un(i.as("d")), l = Un(i.as("M")), d = Un(i.as("y")), (h = r <= Nn.ss && ["s", r] || r < Nn.s && ["ss", r] || a <= 1 && ["m"] || a < Nn.m && ["mm", a] || o <= 1 && ["h"] || o < Nn.h && ["hh", o] || u <= 1 && ["d"] || u < Nn.d && ["dd", u] || l <= 1 && ["M"] || l < Nn.M && ["MM", l] || d <= 1 && ["y"] || ["yy", d])[2] = n, h[3] = +t > 0, h[4] = s, function (e, t, n, s, i) {
      return i.relativeTime(t || 1, !!n, e, s);
    }.apply(null, h));return e && (f = c.pastFuture(+this, f)), c.postformat(f);
  }, In.toISOString = En, In.toString = En, In.toJSON = En, In.locale = Qt, In.localeData = Kt, In.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", En), In.lang = Xt, I("X", 0, 0, "unix"), I("x", 0, 0, "valueOf"), ue("x", se), ue("X", /[+-]?\d+(\.\d{1,3})?/), ce("X", function (e, t, n) {
    n._d = new Date(1e3 * parseFloat(e, 10));
  }), ce("x", function (e, t, n) {
    n._d = new Date(M(e));
  }), n.version = "2.21.0", e = Tt, n.fn = ln, n.min = function () {
    return Pt("isBefore", [].slice.call(arguments, 0));
  }, n.max = function () {
    return Pt("isAfter", [].slice.call(arguments, 0));
  }, n.now = function () {
    return Date.now ? Date.now() : +new Date();
  }, n.utc = h, n.unix = function (e) {
    return Tt(1e3 * e);
  }, n.months = function (e, t) {
    return fn(e, t, "months");
  }, n.isDate = o, n.locale = ot, n.invalid = m, n.duration = At, n.isMoment = v, n.weekdays = function (e, t, n) {
    return mn(e, t, n, "weekdays");
  }, n.parseZone = function () {
    return Tt.apply(null, arguments).parseZone();
  }, n.localeData = lt, n.isDuration = Rt, n.monthsShort = function (e, t) {
    return fn(e, t, "monthsShort");
  }, n.weekdaysMin = function (e, t, n) {
    return mn(e, t, n, "weekdaysMin");
  }, n.defineLocale = ut, n.updateLocale = function (e, t) {
    if (null != t) {
      var n,
          s,
          i = nt;null != (s = at(e)) && (i = s._config), (n = new P(t = b(i, t))).parentLocale = st[e], st[e] = n, ot(e);
    } else null != st[e] && (null != st[e].parentLocale ? st[e] = st[e].parentLocale : null != st[e] && delete st[e]);return st[e];
  }, n.locales = function () {
    return Y(st);
  }, n.weekdaysShort = function (e, t, n) {
    return mn(e, t, n, "weekdaysShort");
  }, n.normalizeUnits = R, n.relativeTimeRounding = function (e) {
    return void 0 === e ? Un : "function" == typeof e && (Un = e, !0);
  }, n.relativeTimeThreshold = function (e, t) {
    return void 0 !== Nn[e] && (void 0 === t ? Nn[e] : (Nn[e] = t, "s" === e && (Nn.ss = t - 1), !0));
  }, n.calendarFormat = function (e, t) {
    var n = e.diff(t, "days", !0);return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
  }, n.prototype = ln, n.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "YYYY-[W]WW", MONTH: "YYYY-MM" }, n;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* ----------------------------------------------------------------------------- 

  AnyPicker - Customizable Picker for Mobile OS
  Version 2.0.9
  Copyright (c)2017 Lajpat Shah
  Contributors : https://github.com/nehakadam/AnyPicker/contributors
  Repository : https://github.com/nehakadam/AnyPicker
  Homepage : https://nehakadam.github.io/AnyPicker

 ----------------------------------------------------------------------------- */

!function () {
  "use strict";
  function a(a, b) {
    var c = this;c.elem = a;var d = void 0 !== b.lang || null !== b.lang ? b.lang : $.CalenStyle.defaults.lang,
        e = $.extend(!0, {}, $.AnyPicker.defaults.i18n, $.AnyPicker.i18n[d], b.i18n),
        f = $.extend(!0, {}, $.AnyPicker.defaults);e = { i18n: e }, f.i18n = {}, b.i18n = {}, c.setting = $.extend({}, f, b, e), c.tmp = $.extend({}, $.AnyPicker.tempDefaults), c.tmp.overlayClass = "ap-overlay-" + c.setting.timestamp, c.tmp.overlaySelector = "." + c.tmp.overlayClass, c.tmp.sOrientation = c._getDeviceOrientation(), $.CF.isValid(b.headerTitle) && (c.tmp.headerTitleDefined = !0), $.CF.compareStrings(c.setting.theme, "Android") ? ($.CF.isValid(b.rowHeight) || (c.setting.rowHeight = 50), $.CF.isValid(b.visibleRows) || (c.setting.visibleRows = 3)) : $.CF.compareStrings(c.setting.theme, "iOS") ? ($.CF.isValid(b.rowHeight) || (c.setting.rowHeight = 36), $.CF.isValid(b.visibleRows) || (c.setting.visibleRows = 5), $.CF.isValid(b.viewSections) || ($.CF.compareStrings(c.setting.layout, "fixed") ? c.setting.viewSections = { header: [], contentTop: [], contentBottom: [], footer: ["cancelButton", "headerTitle", "setButton"] } : c.setting.viewSections = { header: ["cancelButton", "headerTitle", "setButton"], contentTop: [], contentBottom: [], footer: [] }), $.AnyPicker.extra.bIsiPad && (c.tmp.bIsiPad = !0), c.tmp.bIsiPad && $.CF.compareStrings(c.setting.layout, "popup") && (c.setting.layout = "popover")) : $.CF.compareStrings(c.setting.theme, "Windows") && (c.setting.layout = "popup", c.setting.visibleRows = 5, c.setting.rowHeight = 100, $.CF.isValid(b.viewSections) || (c.setting.viewSections = { header: ["headerTitle"], contentTop: [], contentBottom: [], footer: ["setButton", "cancelButton"] }), $.CF.isValid(b.setButton) && (c.tmp.bModified.set = !0), $.CF.isValid(b.cancelButton) && (c.tmp.bModified.cancel = !0), $.CF.isValid(b.nowButton) && (c.tmp.bModified.now = !0), $.CF.isValid(b.clearButton) && (c.tmp.bModified.clear = !0)), c.tmp.iExt = Math.floor(c.setting.visibleRows / 2), c.tmp.sDir = c.setting.rtl ? "rtl" : "ltr", $.AnyPicker.extra.dToday = c._getCurrentDate(), null === c.tmp.selectedDate && (c.tmp.selectedDate = $.AnyPicker.extra.dToday), 0 === c.setting.maxYear && (c.setting.maxYear = $.AnyPicker.extra.dToday.getFullYear()), $.CF.isValid(c.setting.components) && 0 === c.tmp.numOfComp && (c.tmp.numOfComp = c.setting.components.length), $.AnyPicker.extra.sStartEv = $.AnyPicker.extra.bHasPointer ? $.AnyPicker.extra.bHasIE10Pointer ? "MSPointerDown" : "pointerdown" : $.AnyPicker.extra.bIsTouchDevice ? "touchstart" : "mousedown touchstart", $.AnyPicker.extra.sMoveEv = $.AnyPicker.extra.bHasPointer ? $.AnyPicker.extra.bHasIE10Pointer ? "MSPointerMove" : "pointermove" : $.AnyPicker.extra.bIsTouchDevice ? "touchmove" : "mousemove touchmove", $.AnyPicker.extra.sEndEv = $.AnyPicker.extra.bHasPointer ? $.AnyPicker.extra.bHasIE10Pointer ? "MSPointerUp" : "pointerup" : $.AnyPicker.extra.bIsTouchDevice ? "touchend" : "mouseup touchend", $.AnyPicker.extra.sLeaveEv = $.AnyPicker.extra.bHasPointer ? $.AnyPicker.extra.bHasIE10Pointer ? "MSPointerLeave" : "pointerleave" : $.AnyPicker.extra.bIsTouchDevice ? null : "mouseleave", $.AnyPicker.extra.sCancelEv = $.AnyPicker.extra.bHasPointer ? $.AnyPicker.extra.bHasIE10Pointer ? "MSPointerCancel" : "pointercancel" : null, $.AnyPicker.extra.sOutEv = $.AnyPicker.extra.bHasPointer ? $.AnyPicker.extra.bHasIE10Pointer ? "MSPointerOut" : "pointerout" : null;
  }$.CF = { setPropertiesStyle: function setPropertiesStyle(a, b) {
      var c = window.getComputedStyle(document.documentElement, "");for (var d in b) {
        if (void 0 !== c[b[d]]) {
          var e = "";return -1 !== b[d].search("Webkit") ? e = "-webkit-" : -1 !== b[d].search("Moz") ? e = "-moz-" : -1 !== b[d].search("O") ? e = "-o-" : -1 !== b[d].search("ms") && (e = "-ms-"), e + a;
        }
      }
    }, testProperties: function testProperties(a, b, c) {
      var d = window.getComputedStyle(document.documentElement, "");for (var e in b) {
        if (void 0 !== d[b[e]]) return c ? b[e] : !0;
      }return c ? "" : !1;
    }, compareDataType: function compareDataType(a, b) {
      return (typeof a === "undefined" ? "undefined" : _typeof(a)) === b.toLocaleLowerCase() ? !0 : !1;
    }, compareStrings: function compareStrings(a, b) {
      return null !== a && void 0 !== a && null !== b && void 0 !== b ? "string" == typeof a && "string" == typeof b && a.toLocaleLowerCase() === b.toLocaleLowerCase() ? !0 : !1 : null === a && null === b || void 0 === a && void 0 === b ? !0 : !1;
    }, isValid: function isValid(a) {
      return void 0 !== a && null !== a && "" !== a ? !0 : !1;
    } }, $.AnyPicker = $.AnyPicker || { name: "AnyPicker", version: "2.0.3", i18n: {}, defaults: { mode: "datetime", parent: "body", layout: "popup", hAlign: "left", vAlign: "bottom", relativeTo: null, inputElement: null, inputChangeEvent: "onSet", lang: "", rtl: !1, animationDuration: 500, setButton: { markup: "<a id='ap-button-set' class='ap-button'>Set</a>", markupContentWindows: "<span class='ap-button-icon ap-icon-set'></span><span class='ap-button-text'>set</span>", type: "Button" }, clearButton: { markup: "<a id='ap-button-clear' class='ap-button'>Clear</a>", markupContentWindows: "<span class='ap-button-icon ap-icon-clear'></span><span class='ap-button-text'>clear</span>", type: "Button" }, nowButton: { markup: "<a id='ap-button-now' class='ap-button'>Now</a>", markupContentWindows: "<span class='ap-button-icon ap-icon-now'></span><span class='ap-button-text'>now</span>", type: "Button" }, cancelButton: { markup: "<a id='ap-button-cancel' class='ap-button'>Cancel</a>", markupContentWindows: "<span class='ap-button-icon ap-icon-cancel'></span><span class='ap-button-text'>cancel</span>", type: "Button" }, headerTitle: { markup: "<span class='ap-header__title'>Select</span>", type: "Text", contentBehaviour: "Static", format: "" }, viewSections: { header: ["headerTitle"], contentTop: [], contentBottom: [], footer: ["cancelButton", "setButton"] }, i18n: { headerTitle: "Select", setButton: "Set", clearButton: "Clear", nowButton: "Now", cancelButton: "Cancel", dateSwitch: "Date", timeSwitch: "Time" }, theme: "Default", onInit: null, onBeforeShowPicker: null, onShowPicker: null, onBeforeHidePicker: null, onHidePicker: null, parseInput: null, formatOutput: null, setOutput: null, onSetOutput: null, buttonClicked: null }, tempDefaults: { sOrientation: "portrait", overlayClass: "", overlaySelector: "", iExt: 2, dir: "ltr", sElemTag: "", oElemValid: { bIsInput: !1, bIsListItem: !1, bIsSelect: !1 }, sInputElemTag: "", oInputElemValid: { bIsInput: !1, bIsListItem: !1, bIsSelect: !1 }, prevActive: null, bFirst: !0, sDateTimeTab: "date", iCompDragStart: 0, headerTitleDefined: !1, bIsiPad: !1, bModified: { set: !1, cancel: !1, clear: !1, now: !1 }, tabKey: !1 }, extra: { sArrModes: ["select", "datetime"], sArrLayout: ["popup", "relative", "fixed", "inline"], sArrHAlign: ["left", "center", "right"], sArrVAlign: ["top", "middle", "bottom"], sArrViewSections: ["header", "contentTop", "contentBottom", "footer"], oArrInputChangeEvent: ["onChange", "onSet"], sArrThemes: ["Default", "iOS", "Android", "Windows"], bIsTouchDevice: "ontouchstart" in document.documentElement, sClickHandler: ("ontouchstart" in document.documentElement, "click"), sClickHandlerButtons: "ontouchstart" in document.documentElement ? "touchstart" : "click", bHasCSS3D: $.CF.testProperties("perspective", ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective", "perspective", "perspectiveProperty"], !1), sCSSTransform: $.CF.testProperties("transform", ["WebkitTransform", "MozTransform", "OTransform", "msTransform", "transform"], !0), sCSSTransformStyle: $.CF.setPropertiesStyle("transform", ["WebkitTransform", "MozTransform", "OTransform", "msTransform", "transform"]), sCSSTransition: $.CF.testProperties("transition", ["WebkitTransition", "MozTransition", "OTransition", "msTransition", "transition"], !0), bHasCSSAnimation: $.CF.testProperties("animation", ["WebkitAnimation", "MozAnimation", "OAnimation", "msAnimation", "animation"], !1), sMouseWheel: "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], bHasIE10Pointer: window.navigator.msPointerEnabled && !window.navigator.pointerEnabled, bHasPointer: window.navigator.pointerEnabled || window.navigator.msPointerEnabled, bIsiPad: null !== navigator.userAgent.match(/iPad/i) } }, function (a) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = a(require("jquery")) : a(jQuery);
  }(function (b) {
    b.fn.AnyPicker = function (c) {
      var d,
          e,
          f = b(this).data(),
          g = Object.keys(f);if (null === c || void 0 === c) {
        if (g.length > 0) {
          for (d in g) {
            if (e = g[d], -1 !== e.search("plugin_AnyPicker_")) return f[e];
          }
        } else console.log("No AnyPicker Object Defined For This Element");
      } else {
        if ("string" != typeof c) return this.each(function () {
          var h = new Date().getTime();if (b.data(this, "plugin_AnyPicker_" + h)) {
            if (g.length > 0) {
              for (d in g) {
                if (e = g[d], -1 !== e.search("plugin_AnyPicker_")) return f[e];
              }
            } else console.log("No AnyPicker Object Defined For This Element");
          } else c.timestamp = h, f = new a(this, c), b.data(this, "plugin_AnyPicker_" + h, f), f.init();
        });if (null !== f || void 0 !== f) if (g.length > 0) {
          if ("destroy" === c) if (g.length > 0) {
            for (d in g) {
              if (e = g[d], -1 !== e.search("plugin_AnyPicker_")) {
                f = f[e], b(window).off("blur." + f.setting.timestamp);var h = b(f.setting.inputElement);b(h).off("focus." + f.setting.timestamp), b(h).off("blur." + f.setting.timestamp), b(".ap-overlay-" + e.replace("plugin_AnyPicker_", "")).remove(), b(this).removeData(e);break;
              }
            }
          } else console.log("No AnyPicker Object Defined For This Element");
        } else console.log("No AnyPicker Object Defined For This Element");
      }
    };
  }), a.prototype = { init: function init() {
      var a = this;if ($.CF.isValid(a.elem) && (a.tmp.sElemTag = $(a.elem).prop("tagName").toLowerCase(), "input" === a.tmp.sElemTag ? a.tmp.oElemValid.bIsInput = !0 : "ul" === a.tmp.sElemTag || "ol" === a.tmp.sElemTag || "dl" === a.tmp.sElemTag ? a.tmp.oElemValid.bIsListItem = !0 : "select" === a.tmp.sElemTag && (a.tmp.oElemValid.bIsSelect = !0)), $.CF.isValid(a.setting.inputElement) ? (a.tmp.sInputElemTag = $(a.setting.inputElement).prop("tagName").toLowerCase(), "input" === a.tmp.sInputElemTag ? a.tmp.oInputElemValid.bIsInput = !0 : "ul" === a.tmp.sInputElemTag || "ol" === a.tmp.sInputElemTag || "dl" === a.tmp.sInputElemTag ? a.tmp.oInputElemValid.bIsListItem = !0 : "select" === a.tmp.sInputElemTag && (a.tmp.oInputElemValid.bIsSelect = !0)) : $.CF.isValid(a.elem) && (a.setting.inputElement = a.elem, a.tmp.sInputElemTag = a.tmp.sElemTag, a.tmp.oInputElemValid = a.tmp.oElemValid), $.CF.compareStrings(a.setting.mode, "select") ? a.__setComponentsOfSelect() : $.CF.compareStrings(a.setting.mode, "datetime") && a.__setComponentsOfDateTimePicker(), "" !== a.tmp.sInputElemTag && !a.tmp.oInputElemValid.bIsListItem && !a.tmp.oInputElemValid.bIsSelect) {
        var b = $(a.setting.inputElement);a.tmp.oInputElemValid.bIsInput ? (b.off("focus." + a.setting.timestamp), b.on("focus." + a.setting.timestamp, { apo: a }, a._inputElementClicked), b.on("blur." + a.setting.timestamp, function (b) {
          $.AnyPicker.tempDefaults.tabKey && a.showOrHidePicker(), a.tmp.prevActive = null;
        }), b.on("keydown." + a.setting.timestamp, function (a) {
          "9" === (a.keyCode ? a.keyCode : a.which) && ($.AnyPicker.tempDefaults.tabKey = !0);
        })) : (b.off("click." + a.setting.timestamp), b.on("click." + a.setting.timestamp, { apo: a }, a._inputElementClicked));
      }$.CF.isValid(a.setting.onInit) && a.setting.onInit.call(a);
    }, _inputElementClicked: function _inputElementClicked(a) {
      a.stopPropagation(), a.preventDefault();var b = a.data.apo;if (document.activeElement !== b.tmp.prevActive || document.activeElement !== b.setting.inputElement) if (b.tmp.prevActive = document.activeElement, "" === b.tmp.sInputElemTag || b.tmp.oInputElemValid.bIsListItem || b.tmp.oInputElemValid.bIsSelect) console.log("No InputElement Specified");else {
        var c,
            d = $(b.setting.inputElement);if (b.tmp.oInputElemValid.bIsInput) c = d.val();else {
          var e = d.attr("data-val");c = $.CF.isValid(e) ? e : d.text();
        }$.AnyPicker.tempDefaults.tabKey ? ($.AnyPicker.tempDefaults.tabKey = !1, setTimeout(function () {
          b.showOrHidePicker(c);
        }, 500)) : b.showOrHidePicker(c);
      }
    }, showOrHidePicker: function showOrHidePicker(a) {
      var b,
          c,
          d,
          e = this,
          f = [],
          g = [];if (void 0 !== a && null !== a) if ($.CF.isValid(e.setting.parseInput)) {
        if ($.CF.compareStrings(e.setting.mode, "datetime")) e.setting.selectedDate = e.setting.parseInput.call(e, a);else if ($.CF.compareStrings(e.setting.mode, "select")) {
          for (f = e.setting.parseInput.call(e, a), b = 0; b < f.length; b++) {
            c = f[b], d = e.__getDataSourceValueFromLabel(c, b, !0), g.push({ component: b, val: d, label: c });
          }e.tmp.selectedValues.values = g;
        }
      } else if ($.CF.compareStrings(e.setting.mode, "datetime")) e.setting.selectedDate = a;else if ($.CF.compareStrings(e.setting.mode, "select")) {
        if ("" !== a) for (f = [], g = [], e.tmp.numOfComp > 1 ? f = a.split(" ") : f.push(a), b = 0; b < f.length; b++) {
          c = f[b], d = e.__getDataSourceValueFromLabel(c, b, !0), g.push({ component: b, val: d, label: c });
        } else for (b = 0; b < e.tmp.numOfComp; b++) {
          var h = e.setting.dataSource[b].data;c = h[0].label, d = h[0].val, g.push({ component: b, val: d, label: c });
        }e.tmp.selectedValues.values = g;
      }$(e.tmp.overlaySelector).length > 0 ? e._hidePicker() : $.CF.isValid(e.setting.onBeforeShowPicker) ? e.setting.onBeforeShowPicker.call(e) && e._showPicker() : e._showPicker();
    }, _showPicker: function _showPicker() {
      var a = this;a.tmp.sOrientation = a._getDeviceOrientation();var b = "",
          c = ($.CF.compareStrings(a.setting.layout, "popup") || $.CF.compareStrings(a.setting.layout, "popover")) && a.setting.viewSections.header.length > 0,
          d = ($.CF.compareStrings(a.setting.layout, "popup") || $.CF.compareStrings(a.setting.layout, "popover")) && a.setting.viewSections.footer.length > 0,
          e = $.CF.compareStrings(a.setting.layout, "fixed") && $.CF.compareStrings(a.setting.vAlign, "bottom") && a.setting.viewSections.footer.length > 0,
          f = $.CF.compareStrings(a.setting.layout, "fixed") && $.CF.compareStrings(a.setting.vAlign, "top") && a.setting.viewSections.footer.length > 0,
          g = $.CF.compareStrings(a.setting.mode, "datetime") && "datetime" === a.tmp.sDateTimeMode,
          h = "ap-layout-" + a.setting.layout,
          i = "ap-theme-" + a.setting.theme.toLowerCase(),
          j = "ap-dir-" + a.tmp.sDir;if ($.CF.compareStrings(a.setting.layout, "popover")) {
        var k = $("body").scrollTop(),
            l = $(window).height(),
            m = k,
            n = k + l,
            o = $.CF.compareStrings(a.setting.rowsNavigation, "scroller") ? 300 : 350,
            p = $(a.setting.inputElement).offset().top - o,
            q = m > p ? !1 : !0,
            r = $(a.setting.inputElement).offset().top + $(a.setting.inputElement).height() + o,
            s = r > n ? !1 : !0;a.tmp.sTooltip = s ? "bottom" : q ? "top" : a.setting.rtl ? "right" : "left";
      }b += "<div class='ap-overlay " + h + " " + a.tmp.overlayClass + " " + i + " " + j + "'>", b += "<div class='ap-bg'>", b += "<div class='ap-cont' dir='" + a.tmp.sDir + "'>", $.CF.isValid(a.tmp.sTooltip) && (b += "<span class='ap-tooltip ap-tooltip-" + a.tmp.sTooltip + "'></span>"), c && (b += "<div class='ap-header'>", g && $.CF.compareStrings(a.setting.theme, "Windows") && (b += "<div class='ap-content-switch'>", a.setting.rtl ? (b += "<span class='ap-content-switch-tab ap-content-switch-time'>" + a.setting.i18n.timeSwitch + "</span>", b += "<span class='ap-content-switch-tab ap-content-switch-date ap-content-switch-selected'>" + a.setting.i18n.dateSwitch + "</span>") : (b += "<span class='ap-content-switch-tab ap-content-switch-date ap-content-switch-selected'>" + a.setting.i18n.dateSwitch + "</span>", b += "<span class='ap-content-switch-tab ap-content-switch-time'>" + a.setting.i18n.timeSwitch + "</span>"), b += "</div>", a.tmp.sDateTimeTab = "time"), b += "</div>"), e && (b += "<div class='ap-footer ap-footer-top'>", $.CF.compareStrings(a.setting.theme, "Default") && (b += "<div class='ap-button-cont'></div>"), b += "</div>"), b += "<div class='ap-content'>", a.setting.viewSections.contentTop.length > 0 && (b += "<div class='ap-content-top'></div>"), g && !$.CF.compareStrings(a.setting.theme, "Windows") && (b += "<div class='ap-content-switch'>", a.setting.rtl ? (b += "<span class='ap-content-switch-tab ap-content-switch-time'>" + a.setting.i18n.timeSwitch + "</span>", b += "<span class='ap-content-switch-tab ap-content-switch-date ap-content-switch-selected'>" + a.setting.i18n.dateSwitch + "</span>") : (b += "<span class='ap-content-switch-tab ap-content-switch-date ap-content-switch-selected'>" + a.setting.i18n.dateSwitch + "</span>", b += "<span class='ap-content-switch-tab ap-content-switch-time'>" + a.setting.i18n.timeSwitch + "</span>"), b += "</div>", a.tmp.sDateTimeTab = "date"), b += "<div class='ap-content-middle'>", b += "<div class='ap-component-section'></div>", b += "</div>", a.setting.viewSections.contentBottom.length > 0 && (b += "<div class='ap-content-bottom'></div>"), b += "</div>", (d || f) && (b += "<div class='ap-footer ap-footer-bottom'>", $.CF.compareStrings(a.setting.theme, "Default") && (b += "<div class='ap-button-cont'></div>"), b += "</div>"), b += "</div>", b += "</div>", b += "</div>", $(a.setting.parent).append(b), "popover" === a.setting.layout && $("body").addClass("noscroll"), $.AnyPicker.extra.bHasCSSAnimation ? ($(a.tmp.overlaySelector).addClass("ap-show"), $(a.tmp.overlaySelector).css({ display: "block" }), $.CF.compareStrings(a.setting.layout, "fixed") && ($.CF.compareStrings(a.setting.vAlign, "top") ? $(a.tmp.overlaySelector).find(".ap-cont").addClass("ap-top-slide-down") : $.CF.compareStrings(a.setting.vAlign, "bottom") && $(a.tmp.overlaySelector).find(".ap-cont").addClass("ap-bottom-slide-up")), setTimeout(function () {
        $(a.tmp.overlaySelector).css({ opacity: 1 }), $(a.tmp.overlaySelector).removeClass("ap-show"), $.CF.compareStrings(a.setting.layout, "fixed") && ($.CF.compareStrings(a.setting.vAlign, "top") ? ($(a.tmp.overlaySelector).find(".ap-cont").removeClass("ap-top-slide-down"), $(a.tmp.overlaySelector + " .ap-cont").css({ top: 0 })) : $.CF.compareStrings(a.setting.vAlign, "bottom") && ($(a.tmp.overlaySelector).find(".ap-cont").removeClass("ap-bottom-slide-up"), $(a.tmp.overlaySelector + " .ap-cont").css({ bottom: 0 })));
      }, a.setting.animationDuration)) : $(a.tmp.overlaySelector).show(0), $.CF.isValid(a.setting.onShowPicker) && a.setting.onShowPicker.call(a), a._adjustPicker(), a._addViewSectionComponents(), a.__initComponents(), a._adjustPicker(), a.tmp.bIsManualDraggingAfterShow = !1, $.CF.compareStrings(a.setting.mode, "datetime") && "datetime" === a.tmp.sDateTimeMode && a._setDateTimeTabs(a.tmp.sDateTimeTab);
    }, _hidePicker: function _hidePicker() {
      var a = this;$(a.tmp.overlaySelector).length > 0 && ($.CF.isValid(a.setting.onBeforeHidePicker) && a.setting.onBeforeHidePicker.call(a), $.AnyPicker.extra.bHasCSSAnimation ? ($(a.tmp.overlaySelector).addClass("ap-hide"), $.CF.compareStrings(a.setting.layout, "fixed") && ($.CF.compareStrings(a.setting.vAlign, "top") ? $(a.tmp.overlaySelector).find(".ap-cont").addClass("ap-top-slide-up") : $.CF.compareStrings(a.setting.vAlign, "bottom") && $(a.tmp.overlaySelector).find(".ap-cont").addClass("ap-bottom-slide-down")), setTimeout(function () {
        $(a.tmp.overlaySelector).remove();
      }, a.setting.animationDuration)) : ($(a.tmp.overlaySelector).hide(0), setTimeout(function () {
        $(a.tmp.overlaySelector).remove();
      }, a.setting.animationDuration)), "popover" === a.setting.layout && $("body").removeClass("noscroll"), a.tmp.prevActive = null, $.CF.isValid(a.setting.onHidePicker) && a.setting.onHidePicker.call(a));
    }, _adjustPicker: function _adjustPicker(a) {
      var b = this;if ($.CF.compareStrings(b.setting.theme, "Windows")) {
        a = $.CF.isValid(a) ? parseInt(a) : b.tmp.numOfComp;var c,
            d = $(window).height(),
            e = $(window).width(),
            f = "portrait" === b._getDeviceOrientation(),
            g = 10;f ? b.setting.visibleRows = 5 : b.setting.visibleRows = 3, b.setting.componentsCoverFullWidth || (f ? (i = Math.floor(e / 3), c = i * a, g = (e - c) / 2) : (i = Math.floor(d / 3), c = i * a, c = d > c ? c : d, g = (e - c) / 2, e = d), $(b.tmp.overlaySelector).find(".ap-content-middle").css({ "padding-left": g, "padding-right": g })), e -= 16;var h = Math.floor(d / b.setting.visibleRows),
            i = Math.floor(e / 3);b.setting.componentsCoverFullWidth ? (h = Math.floor(d / b.setting.visibleRows), b.setting.rowHeight = h) : b.setting.rowHeight = i;var j,
            k,
            l = b.setting.rowHeight * b.setting.visibleRows,
            m = (d - l) / 2;$(b.tmp.overlaySelector).find(".ap-content").css({ top: m }), m += 2, j = $(b.tmp.overlaySelector).find(".ap-header").height() - m, $(b.tmp.overlaySelector).find(".ap-content-top").css({ top: j }), m -= 2, k = $(b.tmp.overlaySelector).find(".ap-footer").height() + m, $(b.tmp.overlaySelector).find(".ap-content-bottom").css({ bottom: k }), b.tmp.iExt = Math.floor(b.setting.visibleRows / 2);
      }var n = $(null === b.setting.relativeTo ? b.setting.inputElement : b.setting.relativeTo),
          o = n.offset().top,
          p = n.offset().left,
          q = n.outerWidth();if ($.CF.compareStrings(b.setting.layout, "popover")) {
        var r,
            s,
            t,
            u = $("body").scrollTop(),
            v = ($(window).outerWidth(), $(window).outerHeight(), u),
            w = $(b.setting.inputElement).offset().top - u,
            x = $(b.setting.inputElement).outerHeight(),
            y = w + x,
            z = $(b.setting.inputElement).offset().left,
            A = $(b.setting.inputElement).outerWidth(),
            B = z + A,
            C = $(b.tmp.overlaySelector).find(".ap-cont").outerWidth(),
            D = $(b.tmp.overlaySelector).find(".ap-cont").outerHeight(),
            E = 10,
            F = 10;"top" === b.tmp.sTooltip ? (r = w - D - E, t = 0 > r ? 5 : r, s = z + 5) : "bottom" === b.tmp.sTooltip ? (r = y + E, s = z + 5, "rtl" === b.tmp.sDir && (s = B - C)) : "left" === b.tmp.sTooltip ? (r = w - (D / 2 - x / 2), r = v > r ? 5 : r, s = z + A + 5) : "right" === b.tmp.sTooltip && (r = w - (D / 2 - x / 2), r = v > r ? 5 : r, s = z - (C + F)), $(b.tmp.overlaySelector).find(".ap-cont").css({ position: "absolute", left: s, top: r });
      } else if ($.CF.compareStrings(b.setting.layout, "inline")) $(b.tmp.overlaySelector).find(".ap-cont").css({ position: "absolute", width: q, left: p, top: o });else if ($.CF.compareStrings(b.setting.layout, "relative")) {
        n = $(null === b.setting.relativeTo ? b.setting.inputElement : b.setting.relativeTo);var G = 0,
            H = $(document).outerWidth(),
            I = $(".ap-cont").outerWidth(),
            J = q;q = J > I ? I : J, o += n.outerHeight(), $.CF.compareStrings(b.setting.hAlign, "center") ? p = J > q ? p + q / 2 : J === q ? p : p - q / 2 : $.CF.compareStrings(b.setting.hAlign, "right") && (p -= q), p = G > p ? G + 5 : p;var K = p + q;K > H && (p > G + 5 ? (p -= K - (H + 5), p = G > p ? G + 5 : p, K = p + q, q = K > H ? H - 10 : q) : q = H - 10), $(b.tmp.overlaySelector).find(".ap-cont").css({ position: "absolute", "min-width": q, left: p, top: o });
      } else $.CF.compareStrings(b.setting.layout, "fixed") && ($.CF.compareStrings(b.setting.vAlign, "top") ? $(b.tmp.overlaySelector + " .ap-cont").css({ top: -1e3 }) : $.CF.compareStrings(b.setting.vAlign, "bottom") && $(b.tmp.overlaySelector + " .ap-cont").css({ bottom: -1e3 }));
    }, _addViewSectionComponents: function _addViewSectionComponents() {
      var a,
          b,
          c = this,
          d = $.CF.compareStrings(c.setting.theme, "Windows");for (a = 0; a < $.AnyPicker.extra.sArrViewSections.length; a++) {
        var e = $.AnyPicker.extra.sArrViewSections[a],
            f = c.setting.viewSections[e];if (f.length > 0) for (b = 0; b < f.length; b++) {
          var g = f[b],
              h = c.setting[g] || null,
              i = $(h.markup);if (d && $.CF.isValid(h.markupContentWindows) && i.html(h.markupContentWindows), void 0 !== h && null !== h && "" !== h) {
            if ($.CF.compareStrings(e, "header")) $(c.tmp.overlaySelector).find(".ap-header").append(i), $.CF.compareStrings(h.type, "Button") && $.CF.compareDataType(h.action, "function") && i.on("click." + c.setting.timestamp, { apo: c }, h.action);else if ($.CF.compareStrings(e, "contentTop")) $(c.tmp.overlaySelector).find(".ap-content-top").append(i), $.CF.compareStrings(h.type, "Button") && $.CF.compareDataType(h.action, "function") && i.on("click." + c.setting.timestamp, { apo: c }, h.action);else if ($.CF.compareStrings(e, "contentBottom")) $(c.tmp.overlaySelector).find(".ap-content-bottom").append(i), $.CF.compareStrings(h.type, "Button") && $.CF.compareDataType(h.action, "function") && i.on("click." + c.setting.timestamp, { apo: c }, h.action);else if ($.CF.compareStrings(e, "footer")) {
              var j = $(c.tmp.overlaySelector).find(".ap-button-cont");j.length > 0 ? j.append(i) : $(c.tmp.overlaySelector).find(".ap-footer").append(i), $.CF.compareStrings(h.type, "Button") && $.CF.compareDataType(h.action, "function") && i.on("click." + c.setting.timestamp, { apo: c }, h.action);
            }$.CF.compareStrings(g, "headerTitle") && $.CF.compareStrings(h.contentBehaviour, "Static") && $(c.tmp.overlaySelector).find(".ap-header__title").text(c.setting.i18n.headerTitle), $.CF.compareStrings(g, "setButton") ? !d || d && c.tmp.bModified.set ? i.text(c.setting.i18n.setButton) : d && !c.tmp.bModified.set && i.find(".ap-button-text").text(c.setting.i18n.setButton) : $.CF.compareStrings(g, "clearButton") ? !d || d && c.tmp.bModified.clear ? i.text(c.setting.i18n.clearButton) : d && !c.tmp.bModified.clear && i.find(".ap-button-text").text(c.setting.i18n.clearButton) : $.CF.compareStrings(g, "nowButton") ? !d || d && c.tmp.bModified.now ? i.text(c.setting.i18n.nowButton) : d && !c.tmp.bModified.now && i.find(".ap-button-text").text(c.setting.i18n.nowButton) : $.CF.compareStrings(g, "cancelButton") && (!d || d && c.tmp.bModified.cancel ? i.text(c.setting.i18n.cancelButton) : d && !c.tmp.bModified.cancel && i.find(".ap-button-text").text(c.setting.i18n.cancelButton)), $.CF.compareStrings(h.type, "Button") && ($.CF.compareDataType(h.action, "function") || ($.CF.compareStrings(g, "setButton") ? i.on("click." + c.setting.timestamp, { apo: c }, c._setButtonAction) : $.CF.compareStrings(g, "clearButton") ? i.on("click." + c.setting.timestamp, { apo: c }, c._clearButtonAction) : $.CF.compareStrings(g, "nowButton") ? i.on("click." + c.setting.timestamp, { apo: c }, c._nowButtonAction) : $.CF.compareStrings(g, "cancelButton") && i.on("click." + c.setting.timestamp, { apo: c }, c._cancelButtonAction)));
          }
        }
      }d && $(".ap-button-icon, .ap-button-text").click(function (a) {
        $(this).closest(".ap-button").trigger("click");
      }), $(c.tmp.overlaySelector).find(".ap-button").on("mousedown touchstart", function (a) {
        $(this).addClass("ap-button-active");
      }).on("mouseup touchend", function (a) {
        $(this).removeClass("ap-button-active");
      }), $(window).on("blur." + c.setting.timestamp, function (a) {
        c.tmp.prevActive = document.activeElement;
      }), $(c.tmp.overlaySelector).off("click." + c.setting.timestamp), setTimeout(function () {
        $(c.tmp.overlaySelector).on("click." + c.setting.timestamp, function (a) {
          var b = Date.now() - c.tmp.iCompDragStart;!c.setting.bIsTouched && b > 1e3 && c._hidePicker();
        });
      }, 300), $(c.tmp.overlaySelector).find(".ap-cont, .ap-cont *").on("click." + c.setting.timestamp, function (a) {
        a.stopPropagation();
      }), $(c.tmp.overlaySelector).find(".ap-content-switch-date").click(function (a) {
        a.stopPropagation(), c._setDateTimeTabs("date");
      }), $(c.tmp.overlaySelector).find(".ap-content-switch-time").click(function (a) {
        a.stopPropagation(), c._setDateTimeTabs("time");
      }), $(window).resize(function () {
        c._adjustOnOrientationChange();
      });
    }, _setDateTimeTabs: function _setDateTimeTabs(a) {
      var b = this,
          c = "date" === a ? "time" : "date";b.tmp.sDateTimeTab = a, $(b.tmp.overlaySelector).find(".ap-content-switch-tab").removeClass("ap-content-switch-selected"), $(b.tmp.overlaySelector).find(".ap-content-switch-" + a).addClass("ap-content-switch-selected");var d = $(b.tmp.overlaySelector).find("[data-type='" + c + "']"),
          e = $(b.tmp.overlaySelector).find("[data-type='" + a + "']");d.css("display", "none"), e.css("display", "table-cell"), $.CF.compareStrings(b.setting.theme, "Windows") && b._adjustPicker(e.length);
    }, _setOutput: function _setOutput() {
      var a = this,
          b = "";if ($.CF.isValid(a.setting.formatOutput)) b = a.setting.formatOutput.call(a, a.tmp.selectedValues, a.tmp.bIsManualDraggingAfterShow);else if ($.CF.compareStrings(a.setting.mode, "select")) for (var c = 0; c < a.tmp.numOfComp; c++) {
        0 !== c && (b += " "), b += a.tmp.selectedValues.values[c].label;
      } else $.CF.compareStrings(a.setting.mode, "datetime") && (b = a.formatOutputDates(a.tmp.selectedValues.date, a.tmp.bIsManualDraggingAfterShow));if (a.tmp.oElemValid.bIsListItem || a.tmp.oElemValid.bIsSelect) {
        var d, e;a.tmp.oElemValid.bIsListItem ? d = "li" : a.tmp.oElemValid.bIsSelect && (d = "option"), $(a.elem).find(d).each(function () {
          e = $(this);var b = e.attr("value") || e.data("value") || e.text();a.tmp.selectedValues.values[0].val === b ? a.tmp.oElemValid.bIsSelect ? e.attr("selected", !0) : a.tmp.oElemValid.bIsListItem && e.attr("data-selected", !0) : a.tmp.oElemValid.bIsSelect ? e.attr("selected", !1) : a.tmp.oElemValid.bIsListItem && e.attr("data-selected", !1);
        });
      }if ($.CF.isValid(a.setting.setOutput)) a.setting.setOutput.call(a, b, a.tmp.selectedValues, a.tmp.bIsManualDraggingAfterShow);else {
        if (null !== a.setting.inputElement) {
          var f = $(a.setting.inputElement);a.tmp.oInputElemValid.bIsInput ? f.val(b) : f.text(b);
        }$.CF.isValid(a.setting.onSetOutput) && a.setting.onSetOutput.call(a, b, a.tmp.selectedValues, a.tmp.bIsManualDraggingAfterShow);
      }
    }, _clearOutput: function _clearOutput() {
      var a = this,
          b = $(a.setting.inputElement);a.tmp.oInputElemValid.bIsInput ? b.val("") : b.text("");
    }, _setButtonAction: function _setButtonAction(a) {
      var b = a.data.apo;b._setOutput(), b.showOrHidePicker(), $.CF.isValid(b.setting.buttonClicked) && b.setting.buttonClicked.call(b, "set");
    }, _clearButtonAction: function _clearButtonAction(a) {
      var b = a.data.apo;if (b.tmp.selectedDate = $.AnyPicker.extra.dToday, "" !== b.tmp.sInputElemTag && !b.tmp.oInputElemValid.bIsListItem && !b.tmp.oInputElemValid.bIsSelect) {
        var c = $(b.setting.inputElement);b.tmp.oInputElemValid.bIsInput ? c.val("") : c.text("");
      }b.showOrHidePicker(), $.CF.isValid(b.setting.buttonClicked) && b.setting.buttonClicked.call(b, "clear");
    }, _nowButtonAction: function _nowButtonAction(a) {
      var b = a.data.apo;$.CF.compareStrings(b.setting.mode, "datetime") && (b.tmp.selectedDate = b._getCurrentDate(), b._setSelectedAndInvalidValuesForRows()), $.CF.isValid(b.setting.buttonClicked) && b.setting.buttonClicked.call(b, "now");
    }, _cancelButtonAction: function _cancelButtonAction(a) {
      var b = a.data.apo;b.showOrHidePicker(), $.CF.isValid(b.setting.buttonClicked) && b.setting.buttonClicked.call(b, "cancel");
    }, _getDeviceOrientation: function _getDeviceOrientation() {
      var a = $(window);return a.width() > a.height() ? "landscape" : "portrait";
    }, _adjustOnOrientationChange: function _adjustOnOrientationChange() {
      var a = this,
          b = a._getDeviceOrientation();b !== a.tmp.sOrientation && ($("body").prepend("<div class='ap-loading'>Loading</div>"), a.tmp.sOrientation = b, a._adjustPicker(), a.reloadAllComponents());
    } }, $.AnyPicker = $.extend(!0, $.AnyPicker, { defaults: { components: null, dataSource: null, showComponentLabel: !1, componentsCoverFullWidth: !1, visibleRows: 3, maxRows: 0, rowHeight: 50, rowsNavigation: "scroller", rowView: null, onChange: null }, tempDefaults: { numOfComp: 0, selectedValues: {}, bIsManualDraggingAfterShow: !0, bIsManualDragging: !1, bIsTouched: !1, iTS: 0, iPos: 0, iPosPrev: 0, iPosStop: 0, iOffset: 0, iOffsetPrev: 0, iVelocity: 0, iAmplitude: 0, oVelocityTicker: null, oScrollTicker: null, iMinTopPos: 0, iMaxTopPos: 0, oScrollingComp: null, iScrollingComp: -1, iTmConst: 100, bEnd: !1 }, extra: { sArrRowsNavigation: ["scroller+buttons", "scroller", "buttons"] } }), a.prototype = $.extend(a.prototype, { __initComponents: function __initComponents() {
      var a = this;a.tmp.bFirst ? a.tmp.bFirst = !1 : $.CF.compareStrings(a.setting.mode, "select") ? a.__setComponentsOfSelect() : $.CF.compareStrings(a.setting.mode, "datetime") && a.__setComponentsOfDateTimePicker();var b = a.tmp.numOfComp || a.setting.components.length;b > 0 && (a.setting.components.length > 0 ? a.reloadAllComponents() : console.log("For apo.setting.mode \n 1. Select - \n Please set apo.setting.components 2. DateTime - \n Please enter a valid outputDateTimeFormat "));
    }, reloadAllComponents: function reloadAllComponents() {
      var a,
          b = this;for ($(b.setting.parent).find(".ap-component-section").html(""), $("body").prepend("<div class='ap-loading'></div>"), a = 0; a < b.tmp.numOfComp; a++) {
        b.reloadComponent(a, !1);
      }b.adjustComponents(), b.setSelectedAndInvalidValuesForRows(!0);
    }, reloadComponent: function reloadComponent(a, b) {
      var c,
          d,
          e = this,
          f = "",
          g = e.setting.dataSource[a].data,
          h = !1,
          i = "ap-component-" + a,
          j = $(e.setting.parent).find("#" + i),
          k = e.setting.components[a],
          l = $.CF.isValid(k.type) ? k.type : k.label,
          m = $.CF.isValid(k.width) ? "width: " + k.width : "",
          n = e.setting.rtl ? $.CF.compareStrings(k.textAlign, "left") ? "right" : $.CF.compareStrings(k.textAlign, "right") ? "left" : "" : k.textAlign,
          o = $.CF.isValid(n) ? "text-align: " + n : "";for (0 === j.length && (f += "<div class='ap-component' id='" + i + "' data-type='" + l + "' " + ("" !== m ? "style='" + m + ";'" : "") + ">"), $.CF.compareStrings(e.setting.theme, "Windows") || e.setting.showComponentLabel && (f += "<div class='ap-component-label' " + ("" !== o ? "style='" + o + ";'" : "") + ">" + k.label + "</div>"), ($.CF.compareStrings(e.setting.rowsNavigation, "scroller+buttons") || $.CF.compareStrings(e.setting.rowsNavigation, "buttons")) && (f += "<div class='ap-component-plus ap-icon-arrow-up-filled' " + ("" !== o ? "style='" + o + ";'" : "") + "></div>"), f += "<div class='ap-component-cont' tabindex='0'>", f += "<div class='ap-component-data' role='listbox' aria-label='" + k.label + "'>", c = 0; c < e.tmp.iExt; c++) {
        f += "<div class='ap-row ap-row-ext'></div>";
      }for (c = 0; c < g.length; c++) {
        h = $.CF.isValid(g[c].selected) ? g[c].selected : !1, d = h ? "ap-row-selected" : "", f += "<div class='ap-row " + d + "' id='ap-row-" + a + "-" + c + "' data-value='" + g[c].val + "' data-label='" + g[c].label + "' role='option' aria-selected='" + h + "' " + ("" !== o ? "style='" + o + ";'" : "") + ">", $.CF.compareStrings(e.setting.theme, "Windows") && (f += "<div class='ap-row-bg'>", $.CF.isValid(e.setting.rowView) || (f += "<div class='ap-row-content'>")), f += $.CF.isValid(e.setting.rowView) ? e.setting.rowView.call(e, a, c, g[c]) : g[c].label, $.CF.compareStrings(e.setting.theme, "Windows") && !$.CF.isValid(e.setting.rowView) && (f += "</div>", f += "<div class='ap-row-label'>", e.setting.showComponentLabel && (f += k.label), f += "</div>"), $.CF.compareStrings(e.setting.theme, "Windows") && (f += "</div>"), f += "</div>";
      }for (c = 0; c < e.tmp.iExt; c++) {
        f += "<div class='ap-row ap-row-ext'></div>";
      }f += "</div>", f += "<div class='ap-component-gradient'></div>", f += "<div class='ap-component-selector' id='ap-component-selector-" + a + "'></div>", f += "</div>", ($.CF.compareStrings(e.setting.rowsNavigation, "scroller+buttons") || $.CF.compareStrings(e.setting.rowsNavigation, "buttons")) && (f += "<div class='ap-component-minus ap-icon-arrow-down-filled' " + ("" !== o ? "style='" + o + ";'" : "") + "></div>"), 0 === j.length && (f += "</div>"), j.length > 0 ? j.html(f) : $(e.setting.parent).find(".ap-component-section").append(f), e._bindEventsToComponent(a), (j.length > 0 || b) && e.adjustComponents(), b && e.setSelectedAndInvalidValuesForRows(!0);
    }, _bindEventsToComponent: function _bindEventsToComponent(a) {
      var b = this,
          c = $("#ap-component-" + a),
          d = c.find(".ap-component-cont"),
          e = { component: a, apo: b };if (($.CF.compareStrings(b.setting.rowsNavigation, "scroller+buttons") || $.CF.compareStrings(b.setting.rowsNavigation, "scroller")) && (d.on($.AnyPicker.extra.sStartEv + "." + b.setting.timestamp, e, b._onStartDrag), d.on($.AnyPicker.extra.sMoveEv + "." + b.setting.timestamp, e, b._onDrag), $.CF.isValid($.AnyPicker.extra.sEndEv) && d.on($.AnyPicker.extra.sEndEv + "." + b.setting.timestamp, e, b._onEndDrag), $.CF.isValid($.AnyPicker.extra.sOutEv) && d.on($.AnyPicker.extra.sOutEv + "." + b.setting.timestamp, e, b._onEndDrag), $.AnyPicker.extra.sMouseWheel.length > 0)) for (var f = 0; f < $.AnyPicker.extra.sMouseWheel.length; f++) {
        d.on($.AnyPicker.extra.sMouseWheel[f] + "." + b.setting.timestamp, e, b._onMouseWheelScroll);
      }($.CF.compareStrings(b.setting.rowsNavigation, "scroller+buttons") || $.CF.compareStrings(b.setting.rowsNavigation, "buttons")) && (c.find(".ap-component-plus").on("click." + b.setting.timestamp, e, b._onClickButtonMinus), c.find(".ap-component-minus").on("click." + b.setting.timestamp, e, b._onClickButtonPlus)), d.on("keydown." + b.setting.timestamp, e, b._onKeyDown), d.on("keyup." + b.setting.timestamp, e, b._onKeyUp);
    }, adjustComponents: function adjustComponents() {
      var a = this,
          b = $(a.tmp.overlaySelector);if (b.find(".ap-component-cont").css({ height: a.setting.rowHeight * a.setting.visibleRows }), b.find(".ap-row, .ap-component-selector").css({ height: a.setting.rowHeight, "line-height": a.setting.rowHeight + "px" }), b.find(".ap-row-bg").css({ height: a.setting.rowHeight - 8 }), !$.CF.compareStrings(a.setting.theme, "Windows")) {
        var c = $(".ap-cont").width(),
            d = $(".ap-cont").height(),
            e = $(window).width(),
            f = $(window).height(),
            g = e,
            h = f,
            i = !1,
            j = !1;if (c > e && (i = !0, g = c + 20), d > f && (j = !0, h = d + 20), (i || j) && (b.css({ position: "absolute", height: h, width: g }), $.CF.compareStrings(a.setting.layout, "fixed") && $(".ap-cont").css({ position: "absolute" })), $.CF.compareStrings(a.setting.layout, "relative")) {
          var k = $(null === a.setting.relativeTo ? a.setting.inputElement : a.setting.relativeTo),
              l = b.find(".ap-cont"),
              m = k.offset().top + l.height();$.CF.compareStrings(a.setting.vAlign, "top") && l.css({ top: m });
        }
      }setTimeout(function () {
        $(".ap-loading").remove();
      }, 0);
    }, _onStartDrag: function _onStartDrag(a) {
      var b = a.data.apo;if (b.tmp.bIsManualDragging || (b.tmp.bIsManualDraggingAfterShow = !0, b.tmp.bIsManualDragging = !0), b.tmp.bIsTouched = !0, b.tmp.bEnd = !1, b.tmp.iPos = b._getTouchPosition(a), b.tmp.bFromTouchStart = !0, b._setScrollingData(a), $.CF.compareStrings(b.setting.theme, "Windows")) {
        var c = $(b.tmp.overlaySelector).find("#ap-component-" + b.tmp.iScrollingComp);b.tmp.bIsManualDragging && ($(b.tmp.overlaySelector).find(".ap-component").removeClass("ap-component-modifying"), c.addClass("ap-component-modifying"));
      }return "mousedown" === a.type && ($(document).on("mousemove." + b.setting.timestamp, a.data, b._onDrag), $(document).on("mouseup." + b.setting.timestamp, a.data, b._onEndDrag)), a.preventDefault(), a.stopPropagation(), !1;
    }, _onDrag: function _onDrag(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = a.data.apo,
          i = Date.now();if (h._clearScrollTicker(), h.tmp.bIsTouched && (!$.AnyPicker.extra.bHasPointer || $.AnyPicker.extra.bHasPointer && (h.tmp.bFromTouchStart || !h.tmp.bFromTouchStart && i - h.tmp.iTS > 1e3)) && (b = h._getTouchPosition(a), i = Date.now(), c = h.tmp.iPos - b, f = c / Math.abs(c), c > 2 || -2 > c)) {
        if ($.CF.compareStrings(h.setting.theme, "Windows")) {
          var j = $(h.tmp.overlaySelector).find("#ap-component-" + h.tmp.iScrollingComp),
              k = j.find(".ap-row");k.attr("aria-selected", "false"), k.removeClass("ap-row-selected");
        }h.tmp.iPosPrev = h.tmp.iPos, h.tmp.iPos = b, d = i - h.tmp.iTS, h.tmp.iTS = i, e = c / d, h.tmp.iTotalDS += c, g = h.tmp.iPrevDSTS - e, $.AnyPicker.extra.bHasPointer ? $.AnyPicker.extra.bIsTouchDevice ? c > 10 || -10 > c ? $.CF.compareStrings(h.setting.theme, "iOS") ? c = 4 * h.setting.visibleRows * e : Math.abs(h.tmp.iTotalDS) > 100 ? c = e > .05 ? $.CF.compareStrings(h.setting.theme, "Windows") ? c * d * 5 : c * d * 2 : 1 === f ? f * h.setting.rowHeight / 2 : f * h.setting.rowHeight / 1.2 : e > .06 && Math.abs(g) > .08 ? c = $.CF.compareStrings(h.setting.theme, "Windows") ? c * d * 5 : c * d * 2 : (c > 50 || -50 > c) && (c = $.CF.compareStrings(h.setting.theme, "Windows") ? c * d * 5 : c * d * 2) : c = Math.abs(e) > .06 && Math.abs(g) > .08 ? $.CF.compareStrings(h.setting.theme, "Windows") ? c * d * 5 : c * d * 2 : 1 === f ? f * h.setting.rowHeight / 2 : f * h.setting.rowHeight / 1.2 : (2 > c && c > -2 && 0 !== c && (c = 5 * f), c = c > 5 || -5 > c ? h.setting.visibleRows / 10 * 320 * e : f * h.setting.rowHeight) : (c > 10 || -10 > c) && (c += 16 * h.setting.visibleRows * e), h.tmp.iPrevDSTS = e, h._scrollToPosition("drag", h.tmp.iOffset + c, !1, "#ap-component-" + h.tmp.iScrollingComp + " .ap-component-data"), h.tmp.bFromTouchStart = !1;
      }return a.preventDefault(), a.stopPropagation(), !1;
    }, _onEndDrag: function _onEndDrag(a) {
      var b = a.data.apo;return b.tmp.bEnd || (b.tmp.bEnd = !0, b.tmp.bIsTouched = !1, b._scrollToPosition("drag", b.tmp.iOffset, !0, "#ap-component-" + b.tmp.iScrollingComp + " .ap-component-data"), "mouseup" === a.type && ($(document).off("mousemove." + b.setting.timestamp, b._onDrag), $(document).off("mouseup." + b.setting.timestamp, b._onEndDrag))), a.preventDefault(), a.stopPropagation(), !1;
    }, _onMouseWheelScroll: function _onMouseWheelScroll(a) {
      var b,
          c = a.data.apo,
          d = a.data;return a = a || window.event, d.component !== c.tmp.iScrollingComp && c._setScrollingData(a), c._clearScrollTicker(), b = a.wheelDelta ? a.wheelDelta / 3 : a.originalEvent.wheelDelta ? a.originalEvent.wheelDelta / 3 : a.detail ? -a.detail / 3 : 0, c._scrollToPosition("mouseWheel", c.tmp.iOffset - b, !0, "#ap-component-" + c.tmp.iScrollingComp + " .ap-component-data"), a.preventDefault(), a.stopPropagation(), !1;
    }, _onClickButtonPlus: function _onClickButtonPlus(a) {
      var b = a.data.apo;a.preventDefault(), a.stopPropagation(), b._setScrollingData(a), b._clearScrollTicker(), b._scrollToPosition("button", b.tmp.iOffset + b.setting.rowHeight, !0, "#ap-component-" + b.tmp.iScrollingComp + " .ap-component-data");
    }, _onClickButtonMinus: function _onClickButtonMinus(a) {
      var b = a.data.apo;a.preventDefault(), a.stopPropagation(), b._setScrollingData(a), b._clearScrollTicker(), b._scrollToPosition("button", b.tmp.iOffset - b.setting.rowHeight, !0, "#ap-component-" + b.tmp.iScrollingComp + " .ap-component-data");
    }, _onKeyDown: function _onKeyDown(a) {
      var b = a.data.apo;a.preventDefault(), a.stopPropagation(), b._setScrollingData(a), b._clearScrollTicker(), 38 === a.keyCode ? b._scrollToPosition("key", b.tmp.iOffset - b.setting.rowHeight, !0, "#ap-component-" + b.tmp.iScrollingComp + " .ap-component-data") : 40 === a.keyCode && b._scrollToPosition("key", b.tmp.iOffset + b.setting.rowHeight, !0, "#ap-component-" + b.tmp.iScrollingComp + " .ap-component-data");
    }, _onKeyUp: function _onKeyUp(a) {
      var b = a.data.apo;a.preventDefault(), a.stopPropagation(), b._unsetScrollingData();
    }, _getTouchPosition: function _getTouchPosition(a) {
      a.data.apo;return a = a.originalEvent || a, a.changedTouches ? a.changedTouches[0].pageY : a.pageY;
    }, _setScrollingData: function _setScrollingData(a) {
      var b = a.data.apo;b.tmp.iScrollingComp = parseInt(a.data.component), b.tmp.oScrollingComp = $("#ap-component-" + a.data.component).find(".ap-component-data"), b.tmp.iMinTopPos = 0, b.tmp.iMaxTopPos = $(b.tmp.oScrollingComp).find(".ap-row").length * b.setting.rowHeight - $(b.tmp.oScrollingComp).parent().innerHeight(), b.tmp.iTS = Date.now(), b.tmp.iCompDragStart = b.tmp.iTS, b.tmp.iOffsetStart = Math.abs($(b.tmp.oScrollingComp).position().top), b.tmp.iOffset = b.tmp.iOffsetStart, b.tmp.iOffsetPrev = b.tmp.iOffsetStart, b.tmp.iTimeout = 0, b.tmp.iDir = 1, b.tmp.iTotalDS = 0, b.tmp.iPrevDSTS = 0, b._clearScrollTicker();
    }, _unsetScrollingData: function _unsetScrollingData() {
      var a = this;a.tmp.bIsTouched = !1, a.tmp.iPos = 0, a.tmp.iTS = 0, a.tmp.iOffset = 0, a.tmp.iTimeout = 0, a.tmp.iMinTopPos = 0, a.tmp.iMaxTopPos = 0, a.tmp.oScrollingComp = null, a.tmp.iScrollingComp = -1, a.tmp.iDir = 0, a._clearScrollTicker(), $(document).off("mousemove." + a.setting.timestamp), $(document).off("mouseup." + a.setting.timestamp), $(document).off("touchend." + a.setting.timestamp);
    }, _getScrollingData: function _getScrollingData() {
      var a = this,
          b = {};return b.iScrollingComp = a.tmp.iScrollingComp, b.oScrollingComp = a.tmp.oScrollingComp, b.iMinTopPos = a.tmp.iMinTopPos, b.iMaxTopPos = a.tmp.iMaxTopPos, b.iTS = a.tmp.iTS, b.iCompDragStart = a.tmp.iCompDragStart, b.iOffsetStart = a.tmp.iOffsetStart, b.iOffset = a.tmp.iOffset, b.iOffsetPrev = a.tmp.iOffsetPrev, b.iTimeout = a.tmp.iTimeout, b.iDir = a.tmp.iDir, b;
    }, _clearScrollTicker: function _clearScrollTicker() {
      var a = this;clearTimeout(a.tmp.oScrollTicker), a.tmp.oScrollTicker = null;
    }, _scrollToPosition: function _scrollToPosition(a, b, c, d) {
      var e = this,
          f = e.tmp.iScrollingComp,
          g = b < e.tmp.iOffset ? 1 : b === e.tmp.iOffset ? e.tmp.iDir : -1,
          h = b % e.setting.rowHeight,
          i = e.setting.rowHeight / 4,
          j = e.tmp.iOffset,
          k = .1;e.tmp.iDir = g, c && (b = 0 !== h ? i > h ? b - h : b + (e.setting.rowHeight - h) : b);var l = e.tmp.iMinTopPos - e.setting.rowHeight,
          m = e.tmp.iMaxTopPos + e.setting.rowHeight;if (e.tmp.iOffset = b > e.tmp.iMaxTopPos ? m : b < e.tmp.iMinTopPos ? l : b, $.AnyPicker.extra.bHasCSS3D) {
        var n = Math.abs(j - e.tmp.iOffset);"drag" === a ? n < 6 * e.setting.rowHeight ? k = n / (10 * e.setting.rowHeight) : (k = n / (10 * e.setting.rowHeight), k = .2 >= k ? .2 : k) : k = .1, e._performTransition(f, d, e.tmp.iOffset, e.tmp.iTimeout / 1e3, e.tmp.iMinTopPos, e.tmp.iMaxTopPos, g, l, m, a, c), e.tmp.iTimeout = e.tmp.iTimeout - (Date.now() - e.tmp.iTS) + 1e3 * k;
      } else e._performTransition(f, d, e.tmp.iOffset, k, e.tmp.iMinTopPos, e.tmp.iMaxTopPos, g, l, m, a, c);
    }, _performTransition: function _performTransition(a, b, c, d, e, f, g, h, i, j, k) {
      var l = this,
          m = $(l.tmp.overlaySelector).find(b).get(0),
          n = l._getOffset(m, !0),
          o = Math.abs(n - c),
          p = o / (10 * l.setting.rowHeight);d = d > p ? p : d, d = .1 > d ? .1 : d, d = $.AnyPicker.extra.bHasPointer && l.tmp.bIsTouched && "auto" === j ? 0 : d, $.AnyPicker.extra.bHasCSS3D ? (m.style[$.AnyPicker.extra.sCSSTransition] = $.AnyPicker.extra.sCSSTransformStyle + " " + d + "s ease-out", m.style[$.AnyPicker.extra.sCSSTransform] = "translate3d(0px, " + -c + "px, 0px)") : $(m).animate({ top: -c }, 100), l.tmp.iOffset = c;var q = l._getScrollingData();l._performTransitionAfter(q, i, h, j, d, k), l._clearScrollTicker();
    }, _performTransitionAfter: function _performTransitionAfter(a, b, c, d, e, f) {
      var g = this;setTimeout(function () {
        !f || "drag" !== d && "mouseWheel" !== d || (g.tmp.oScrollTicker = 1, g._scrollToRow(a.iDir, b, c, a.iMinTopPos, a.iMaxTopPos, d));var h = $(a.oScrollingComp).get(0),
            i = "auto" === d ? a.iOffset : -g._getOffset(h, !1),
            j = i < a.iMinTopPos,
            k = i > a.iMaxTopPos,
            l = Math.abs(i);j ? i = a.iMinTopPos : k && (i = a.iMaxTopPos), j || k ? (e = Math.abs(l - i) / (10 * g.setting.rowHeight), $.AnyPicker.extra.bHasCSS3D ? (h.style[$.AnyPicker.extra.sCSSTransition] = $.AnyPicker.extra.sCSSTransformStyle + " " + e + "s ease-out", h.style[$.AnyPicker.extra.sCSSTransform] = "translate3d(0px, " + -Math.abs(i) + "px, 0px)") : $(h).animate({ top: -Math.abs(i) }, 100), a.iOffset = i, l = i, g._skipDisabledRowAfter(a, l, d, e, f)) : (f || l === a.iMinTopPos || l === a.iMaxTopPos) && g._skipDisabledRow(d, a.iScrollingComp, l, a.iDir);
      }, 1e3 * e);
    }, _skipDisabledRowAfter: function _skipDisabledRowAfter(a, b, c, d, e) {
      var f = this;setTimeout(function () {
        var d = "auto" === c ? b : a.iOffset;(e || d === a.iMinTopPos || d === a.iMaxTopPos) && f._skipDisabledRow(c, a.iScrollingComp, d, a.iDir);
      }, 1e3 * d);
    }, _getOffset: function _getOffset(a, b) {
      var c = $(a).hasClass("ap-component-data") ? $(a).css("transform") : $(a).find(".ap-component-data").css("transform"),
          d = 0;if ($.CF.isValid(c)) if ("none" === c) d = 0;else {
        c = c.replace("matrix(", ""), c = c.replace(")", "");var e = c.split(", ");d = parseInt(e.length > 6 ? e[13] : e[5]);
      }return b ? Math.abs(d) : d;
    }, _scrollToRow: function _scrollToRow(a, b, c, d, e, f) {
      var g,
          h,
          i,
          j = this;if (null !== j.tmp.oScrollTicker) {
        var k = $(j.tmp.oScrollingComp).get(0);h = j._getOffset(k, !1), g = h % j.setting.rowHeight, (0 !== g || 0 === g && (h > d || -e > h)) && (h = Math.abs(h), h = -1 === a ? h + (j.setting.rowHeight - Math.abs(g)) : h + g, h = h > e ? e : d > h ? d : h, i = .4, $.AnyPicker.extra.bHasCSS3D ? (k.style[$.AnyPicker.extra.sCSSTransition] = $.AnyPicker.extra.sCSSTransformStyle + " " + i + "s ease-out", k.style[$.AnyPicker.extra.sCSSTransform] = "translate3d(0px, " + -Math.abs(h) + "px, 0px)") : $(k).animate({ top: -Math.abs(h) }, 100), j.tmp.iOffset = h);
      }
    }, __scrollToSelectedRow: function __scrollToSelectedRow() {
      var a,
          b = this,
          c = 0;for ($.CF.compareStrings(b.setting.mode, "datetime") && b.__setSelectedDateTimeInComponent(), a = 0; a < b.tmp.numOfComp; a++) {
        var d = $(b.tmp.overlaySelector).find("#ap-component-" + a + " .ap-row-selected"),
            e = d.length > 0 ? d[0] : null;if (null !== e) {
          var f = $(e).position().top,
              g = b.tmp.iExt * b.setting.rowHeight;f = 0 === f ? f : f - g, b.callScrollToPosition(a, b, f, c), c += 200;
        }
      }
    }, callScrollToPosition: function callScrollToPosition(a, b, c, d) {
      var e = this,
          f = {};f.data = { component: a, apo: b }, e._setScrollingData(f), e._scrollToPosition("auto", c, !0, "#ap-component-" + a + " .ap-component-data");
    }, setSelectedAndInvalidValuesForRows: function setSelectedAndInvalidValuesForRows(a) {
      var b = this;$.CF.compareStrings(b.setting.mode, "select") ? b.__disableInvalidRowsOfSelect() : $.CF.compareStrings(b.setting.mode, "datetime") && (a && b.__setSelectedDateTimeInComponent(), $(b.tmp.overlaySelector).find(".ap-row").removeClass("ap-row-disabled ap-row-invalid ap-row-hidden"), b.__disableInvalidRowsOfDateTimePicker(), b.__setDaysOfMonthInDatePicker()), a && b.__scrollToSelectedRow();
    }, __changeComponentValue: function __changeComponentValue(a, b) {
      var c,
          d,
          e,
          f = this,
          g = (f.setting.components[a], f.setting.dataSource[a].data);for (c = 0; c < g.length; c++) {
        d = "#ap-row-" + a + "-" + c, e = $(f.tmp.overlaySelector).find(d), g[c].val === b ? (g[c].selected = !0, e.attr("aria-selected", "true"), e.addClass("ap-row-selected")) : (g[c].selected = !1, e.attr("aria-selected", "false"), e.removeClass("ap-row-selected"));
      }
    }, _skipDisabledRow: function _skipDisabledRow(a, b, c, d) {
      var e = this,
          f = "#ap-component-" + b + " .ap-component-data",
          g = $(e.tmp.overlaySelector).find(f).get(0),
          h = Math.floor(c / e.setting.rowHeight),
          i = "#ap-row-" + b + "-",
          j = i + h,
          k = $(g).find(".ap-row").length - 2 * e.tmp.iExt,
          l = $(g).find(j).hasClass("ap-row-disabled"),
          m = -1,
          n = 0,
          o = {},
          p = !1;if ($.CF.isValid(g) && l) {
        1 === d && (m = e._findRows(b, h, k, g, d), -1 === m && (d = -1, n = 1)), -1 === d && (m = e._findRows(b, h, k, g, d), -1 === m && 0 === n && (d = 1, m = e._findRows(b, h, k, g, d)));var q = -1 !== m ? $(g).find(i + m).position().top - e.tmp.iExt * e.setting.rowHeight : -1;-1 !== m && c !== q ? (p = !0, o.data = { component: b, apo: e }, e._setScrollingData(o), e._scrollToPosition("auto", q, !0, f)) : setTimeout(function () {
          e._actionsOnComponentStop(a, b, h, c, d);
        }, 200);
      } else setTimeout(function () {
        e._actionsOnComponentStop(a, b, h, c, d);
      }, 200);
    }, _actionsOnComponentStop: function _actionsOnComponentStop(a, b, c, d, e) {
      var f = this,
          g = !1,
          h = "";if (f.__setAriaSelectedForRowElement(b, d, e), f._getSelectedValueInComponent(null), $.CF.compareStrings(f.setting.inputChangeEvent, "onChange") && f._setOutput(), "DynamicFunction" === f.tmp.sHeaderTitleType) h = f.setting.headerTitle.format.call(f.tmp.selectedValues), $(f.tmp.overlaySelector).find(".ap-header__title").text(h);else if ("DynamicString" === f.tmp.sHeaderTitleType) {
        if ($.CF.compareStrings(f.setting.mode, "select")) for (var i = 0; i < f.tmp.numOfComp; i++) {
          0 !== i && (h += " "), h += f.tmp.selectedValues.values[i].label;
        } else $.CF.compareStrings(f.setting.mode, "datetime") && (h = f.formatOutputDates(f.tmp.selectedValues.date, f.tmp.sArrHeaderTitleFormat));var j = !0;f.tmp.bIsManualDragging || (j = !1), j && $(f.tmp.overlaySelector).find(".ap-header__title").text(h);
      }"auto" !== a && $.CF.isValid(f.setting.onChange) && f.setting.onChange.call(f, b, c, f.tmp.selectedValues, a), g || f.setSelectedAndInvalidValuesForRows(!1);
    }, _findRows: function _findRows(a, b, c, d, e) {
      var f;if (-1 === e) {
        for (f = b + 1; c > f; f++) {
          if (!$(d).find("#ap-row-" + a + "-" + f).hasClass("ap-row-disabled")) return f;
        }
      } else if (1 === e) for (f = b - 1; f > 0; f--) {
        if (!$(d).find("#ap-row-" + a + "-" + f).hasClass("ap-row-disabled")) return f;
      }return -1;
    }, _validateSelectedValues: function _validateSelectedValues() {
      var a = this;if ($.CF.compareStrings(a.setting.mode, "datetime")) {
        var b = a.__getSelectedDate(!1);a.__validateSelectedDate(b, !1);
      }
    }, __setAriaSelectedForRowElement: function __setAriaSelectedForRowElement(a, b, c) {
      var d,
          e = this,
          f = $(e.tmp.overlaySelector).find("#ap-component-" + a);0 === b && (b = e._getOffset(f, !0)), 1 === c ? d = Math.floor(b / e.setting.rowHeight) : -1 === c && (d = Math.ceil(b / e.setting.rowHeight));var g = f.find(".ap-row"),
          h = f.find("#ap-row-" + a + "-" + d);g.attr("aria-selected", "false"), g.removeClass("ap-row-selected"), h.attr("aria-selected", "true"), h.addClass("ap-row-selected");
    }, _getSelectedValueInComponent: function _getSelectedValueInComponent(a) {
      var b,
          c,
          d = this,
          e = [];if (d.tmp.selectedValues = {}, $.CF.isValid(a)) c = $(d.tmp.overlaySelector).find("#ap-component-" + a + " .ap-row-selected"), e.push({ component: a, val: c.data("value"), label: c.data("label") });else for (b = 0; b < d.tmp.numOfComp; b++) {
        c = $(d.tmp.overlaySelector).find("#ap-component-" + b + " .ap-row-selected"), e.push({ component: b, val: c.data("value"), label: c.data("label") });
      }d.tmp.selectedValues.values = e, $.CF.compareStrings(d.setting.mode, "datetime") && (d.tmp.selectedValues.date = d.__getSelectedDate(!1), d.tmp.selectedDate = d.tmp.selectedValues.date);
    }, __getDataSourceValueFromLabel: function __getDataSourceValueFromLabel(a, b, c) {
      var d,
          e,
          f,
          g,
          h = this,
          i = "";if ($.CF.isValid(b)) for (f = h.setting.dataSource[b].data, e = 0; e < f.length; e++) {
        g = f[e], $.CF.compareStrings(g.label, a) ? (i = g.val, c && (g.selected = !0)) : c && (g.selected = !1), h.setting.dataSource[b].data[e] = g;
      } else for (d = 0; d < h.tmp.numOfComp; d++) {
        for (f = h.setting.dataSource[d].data, e = 0; e < f.length; e++) {
          g = f[e], $.CF.compareStrings(g.label, a) ? (c && (g.selected = !0), i = g.val) : c && (g.selected = !1);
        }
      }return i;
    }, __getValuesOfComponent: function __getValuesOfComponent(a, b) {
      var c,
          d = this,
          e = null;if ("component" === a) {
        if (d.setting.components[b].component === b) e = d.setting.components[b];else for (c = 0; c < d.tmp.numOfComp; c++) {
          d.setting.components[c].component === b && (e = d.setting.components[c]);
        }
      } else if ("datasource" === a) if (d.setting.dataSource[b].component === b) e = d.setting.dataSource[b];else for (c = 0; c < d.tmp.numOfComp; c++) {
        d.setting.dataSource[c].component === b && (e = d.setting.dataSource[c]);
      }return e;
    } }), a.prototype = $.extend(a.prototype, { __setComponentsOfSelect: function __setComponentsOfSelect() {
      var a = this;if (null === a.setting.dataSource) if (a.tmp.oElemValid.bIsListItem || a.tmp.oElemValid.bIsSelect) {
        var b, c;a.setting.components = [];var d = {};d.component = 1, d.name = $(a.elem).data("name"), d.label = $(a.elem).data("label"), a.setting.components.push(d);var e = [];a.tmp.oElemValid.bIsListItem ? b = "li" : a.tmp.oElemValid.bIsSelect && (b = "option"), $(a.elem).find(b).each(function () {
          c = $(this);var b = { val: c.attr("value") || c.data("value") || c.text(), label: c.text(), selected: function selected() {
              return c.attr("selected") || void 0 !== c.attr("data-selected") && "true" === c.attr("data-selected") ? !0 : !1;
            }, disabled: function disabled() {
              return c.attr("disabled") || void 0 !== c.data("disabled") && "true" === c.data("disabled") ? !0 : !1;
            } };b.disabled ? b.selected = !1 : b.selected && (a.tmp.selected = { val: b.val, displayVal: b.displayVal }), e.push(b);
        }), a.setting.dataSource = [];var f = {};f.component = 1, f.data = e, a.setting.dataSource.push(f), a.tmp.numOfComp = 1, $.CF.compareStrings(a.setting.headerTitle.contentBehaviour, "Dynamic") && $.CF.isValid(a.setting.headerTitle.format) && ("function" == typeof a.setting.headerTitle.format ? a.tmp.sHeaderTitleType = "DynamicFunction" : "string" == typeof a.setting.headerTitle.format && (a.tmp.sHeaderTitleType = "DynamicString"));
      } else console.log("You will have to specify dataSource either as a JSON object or as <ul>, <ol>, <dl> or <select>");
    }, __disableInvalidRowsOfSelect: function __disableInvalidRowsOfSelect() {
      var a,
          b,
          c = this,
          d = c.setting.dataSource[0].data;for (a = 0; a < d.length; a++) {
        b = $.CF.isValid(d[a].disabled), b && d[a].disabled === !0 && $(c.elem).find("#ap-row-0-" + a).addClass("ap-row-disabled");
      }
    } }), $.AnyPicker = $.extend(!0, $.AnyPicker, { defaults: { selectedDate: null, i18n: { veryShortDays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], fullDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], fullMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], meridiem: { a: ["a", "p"], aa: ["am", "pm"], A: ["A", "P"], AA: ["AM", "PM"] }, componentLabels: { date: "Date", day: "Day", month: "Month", year: "Year", hours: "Hours", minutes: "Minutes", seconds: "Seconds", meridiem: "Meridiem" } }, inputDateTimeFormat: "", dateTimeFormat: "dd-MM-yyyy hh:mm AA", tzOffset: "", maxValue: null, minValue: null, maxYear: 0, disableValues: {}, intervals: { h: 1, m: 1, s: 1 }, roundOff: !0 }, tempDefaults: { oMinMax: {}, oArrPDisable: {}, sDateTimeMode: "", sArrDateTimeFormat: [], sDateTimeRegex: "", diffDateTimeFormats: !1, sArrInputDateTimeFormat: [], sInputDateTimeRegex: "", sHeaderTitleType: "Static", sArrHeaderTitleFormat: [], dPrevDate: null }, extra: { dToday: new Date(), iMS: { m: 6e4, h: 36e5, d: 864e5, w: 6048e5 }, sFormatRegex: /(\[[^\[]*\])|(\\)?(MMMM|MMM|MM?|DDDD|DDD|DD|D|dd?|yyyy|YYYY|yy|YY|y|Y|aa?|AA?|hh?|HH?|mm?|ss?|x|X|zz?|ZZ?|.)/g, en: { veryShortDays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], fullDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], fullMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], meridiem: { a: ["a", "p"], aa: ["am", "pm"], A: ["A", "P"], AA: ["PM", "PM"] } }, sArrDateComponents: ["d", "dd", "DD", "DDD", "DDDD", "M", "MM", "MMM", "MMMM", "y", "yy", "yyyy", "Y", "YY", "YYYY", "h", "hh", "H", "HH", "m", "mm", "s", "ss", "AA", "A", "aa", "a"], sArrDateTimeModes: ["date", "time", "datetime"] } }), a.prototype = $.extend(a.prototype, { _isSupportedFormat: function _isSupportedFormat(a) {
      return -1 !== a.search($.AnyPicker.extra.sFormatRegex, "");
    }, __setComponentsOfDateTimePicker: function __setComponentsOfDateTimePicker() {
      var a,
          b,
          c = this;c.setting.components = [], c.tmp.numOfComp = 0, c.setting.dataSource = [];var d = -1 !== c.setting.dateTimeFormat.search(/D|d|M|y|Y/, ""),
          e = -1 !== c.setting.dateTimeFormat.search(/H|h|m|s|A|a/, "");c.tmp.sDateTimeMode = d && e ? "datetime" : d ? "date" : e ? "time" : "", $.CF.isValid(c.setting.dateTimeFormat) ? $.CF.isValid(c.setting.inputDateTimeFormat) ? c.tmp.diffDateTimeFormats = c.setting.dateTimeFormat !== c.setting.inputDateTimeFormat : (c.setting.inputDateTimeFormat = c.setting.dateTimeFormat, c.tmp.diffDateTimeFormats = !1) : console.log("Invalid DateTimeFormat"), c.tmp.sArrDateTimeFormat = c._setDateTimeFormatComponentsArray(c.setting.dateTimeFormat), c.tmp.diffDateTimeFormats && (c.tmp.sArrInputDateTimeFormat = c._setDateTimeFormatComponentsArray(c.setting.inputDateTimeFormat)), c.tmp.sDateTimeRegex = c._createDateTimeRegex(c.tmp.sArrDateTimeFormat), c.tmp.diffDateTimeFormats && (c.tmp.sInputDateTimeRegex = c._createDateTimeRegex(c.tmp.sArrInputDateTimeFormat)), c.setSelectedDate(c.setting.selectedDate), c.parseDisableValues();var f = c.setting.dateTimeFormat.match(/(MMMM).*(dd|d).*(yyyy|YYYY)/);if (c.tmp.sArrDateTimeFormat.length > 0) for (a = 0; a < c.tmp.sArrDateTimeFormat.length; a++) {
        b = c.tmp.sArrDateTimeFormat[a], -1 !== b.search(/D|d|M|y|Y|H|h|m|s|A|a/, "g") && c._setComponentAndDataSourceForFormat(b, { MMMMddYYYY: f });
      }c.tmp.headerTitleDefined || !$.CF.compareStrings(c.setting.mode, "datetime") || $.CF.compareStrings(c.setting.theme, "iOS") || (c.setting.headerTitle.contentBehaviour = "Dynamic", "datetime" === c.tmp.sDateTimeMode ? c._formatContains(c.tmp.sArrDateTimeFormat, ["d", "M", "y|Y", "h", "m"], "and") && c._formatContains(c.tmp.sArrDateTimeFormat, ["a", "A"], "or") ? c.setting.headerTitle.format = "dd.MM.yyyy, hh:mm " + c._getFormatForComponent("meridiem") : c._formatContains(c.tmp.sArrDateTimeFormat, ["d", "M", "y|Y", "H", "m"], "and") ? c.setting.headerTitle.format = "dd.MM.yyyy, HH:mm" : c.setting.headerTitle.format = c.setting.dateTimeFormat : "date" === c.tmp.sDateTimeMode ? c._formatContains(c.tmp.sArrDateTimeFormat, ["d", "M", "y|Y"], "and") ? c.setting.headerTitle.format = "DDD, MMM dd, yyyy" : c.setting.headerTitle.format = c.setting.dateTimeFormat : "time" === c.tmp.sDateTimeMode && (c._formatContains(c.tmp.sArrDateTimeFormat, ["h", "m"], "and") && c._formatContains(c.tmp.sArrDateTimeFormat, ["a", "A"], "or") ? c.setting.headerTitle.format = "hh:mm " + c._getFormatForComponent("meridiem") : c._formatContains(c.tmp.sArrDateTimeFormat, ["H", "m"], "and") ? c.setting.headerTitle.format = "HH:mm" : c.setting.headerTitle.format = c.setting.dateTimeFormat)), $.CF.compareStrings(c.setting.headerTitle.contentBehaviour, "Dynamic") && $.CF.isValid(c.setting.headerTitle.format) && ("function" == typeof c.setting.headerTitle.format ? c.tmp.sHeaderTitleType = "DynamicFunction" : "string" == typeof c.setting.headerTitle.format && (c.tmp.sHeaderTitleType = "DynamicString", c.tmp.sArrHeaderTitleFormat = c._matchRegex($.AnyPicker.extra.sFormatRegex, c.setting.headerTitle.format)));
    }, setSelectedDate: function setSelectedDate(a) {
      var b = this;if ($.CF.isValid(a)) {
        if ("string" == typeof a ? b.tmp.selectedDate = b._parseInputDateTime(a) : "[object Date]" === Object.prototype.toString.call(a) && (b.setting.selectedDate = b.formatOutputDates(a), b.tmp.selectedDate = new Date(a)), null !== b.setting.inputElement) {
          var c = $(b.setting.inputElement);b.tmp.oInputElemValid.bIsInput ? c.val(b.setting.selectedDate) : c.text(b.setting.selectedDate);
        }
      } else b.tmp.selectedDate = new Date($.AnyPicker.extra.dToday);
    }, setMinimumDate: function setMinimumDate(a) {
      var b = this;b.setting.minValue = a, b.parseDisableValues();
    }, setMaximumDate: function setMaximumDate(a) {
      var b = this;b.setting.maxValue = a, b.parseDisableValues();
    }, _getFormatForComponent: function _getFormatForComponent(a) {
      for (var b = this, c = 0; c < b.tmp.numOfComp; c++) {
        var d = b.setting.components[c];if (d.name === a) return d.format;
      }
    }, _formatContains: function _formatContains(a, b, c) {
      var d,
          e,
          f,
          g = [];for (d = 0; d < b.length; d++) {
        var h = b[d],
            i = !1;for (e = 0; e < a.length; e++) {
          var j = a[e];if ($.CF.isValid(j) && $.CF.isValid(h) && -1 !== j.search(new RegExp(h), "")) {
            i = !0;break;
          }
        }g.push(i);
      }if ("and" === c) {
        for (f = !0, d = 0; d < g.length; d++) {
          if (g[d] !== !0) {
            f = !1;break;
          }
        }
      } else if ("or" === c) for (f = !1, d = 0; d < g.length; d++) {
        if (g[d] === !0) {
          f = !0;break;
        }
      }return f;
    }, _setComponentAndDataSourceForFormat: function _setComponentAndDataSourceForFormat(a, b) {
      var c = this,
          d = {},
          e = {},
          f = c._isSupportedFormat(a);f && ("d" === a || "dd" === a ? (d.name = "date", d.label = c.setting.i18n.componentLabels.date, d.type = "date", $.CF.compareStrings(c.setting.theme, "iOS") && b.MMMMddYYYY && (d.width = "24%", d.textAlign = "right")) : "DD" === a || "DDD" === a || "DDDD" === a ? (d.name = "day", d.label = c.setting.i18n.componentLabels.day, d.type = "date") : "M" === a || "MM" === a || "MMM" === a || "MMMM" === a ? (d.name = "month", d.label = c.setting.i18n.componentLabels.month, d.type = "date", $.CF.compareStrings(c.setting.theme, "iOS") && b.MMMMddYYYY && (d.width = "46%", d.textAlign = "left")) : "y" === a || "Y" === a || "yyyy" === a || "Y" === a || "YYYY" === a ? (d.name = "year", d.label = c.setting.i18n.componentLabels.year, d.type = "date", $.CF.compareStrings(c.setting.theme, "iOS") && b.MMMMddYYYY && (d.width = "30%", d.textAlign = "right")) : "H" === a || "HH" === a || "h" === a || "hh" === a ? (d.name = "hours", d.label = c.setting.i18n.componentLabels.hours, d.type = "time") : "m" === a || "mm" === a ? (d.name = "minutes", d.label = c.setting.i18n.componentLabels.minutes, d.type = "time") : "s" === a || "ss" === a ? (d.name = "seconds", d.label = c.setting.i18n.componentLabels.seconds, d.type = "time") : "aa" === a || "a" === a || "AA" === a || "A" === a ? (d.name = "meridiem", d.label = c.setting.i18n.componentLabels.meridiem, d.type = "time") : console.log("Picker Component for " + a + " can noot be added because the format you specified as  " + a + "  cannot be parsed using this function. If you want to parse it, please add the condition in the _setComponentAndDataSourceForFormat function."), d.format = a, d.component = c.tmp.numOfComp, c.setting.components.push(d), e.component = d.component, e.data = c.__setDataSourceArrayForComponent(d.name, a), c.setting.dataSource.push(e), c.tmp.numOfComp++);
    }, __setDataSourceArrayForComponent: function __setDataSourceArrayForComponent(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j = this,
          k = [],
          l = j.getDateObject(j.tmp.selectedDate),
          m = null,
          n = null;if ($.CF.isValid(j.tmp.oMinMax.min) && (m = j.getDateObject(j.tmp.oMinMax.min)), $.CF.isValid(j.tmp.oMinMax.max) && (n = j.getDateObject(j.tmp.oMinMax.max)), "day" === a) {
        if ("DD" === b) for (d = 0; d < $.AnyPicker.extra.en.veryShortDays.length; d++) {
          k.push({ val: d, label: j.setting.i18n.veryShortDays[d] });
        } else if ("DDD" === b) for (d = 0; d < $.AnyPicker.extra.en.shortDays.length; d++) {
          k.push({ val: d, label: j.setting.i18n.shortDays[d] });
        } else if ("DDDD" === b) for (d = 0; d < $.AnyPicker.extra.en.fullDays.length; d++) {
          k.push({ val: d, label: j.setting.i18n.fullDays[d] });
        }
      } else if ("date" === a) for (e = 31, f = 1, g = e, $.CF.isValid(m) && $.CF.isValid(n) && m.y === n.y && m.M === n.M && (f = m.d, g = n.d), d = f; g >= d; d++) {
        "d" === b ? c = 0 : "dd" === b && (c = 2), k.push({ val: d, label: j.getNumberStringInFormat(d, c, !0) });
      } else if ("month" === a) {
        if (f = 1, g = 12, $.CF.isValid(m) && $.CF.isValid(n) && m.y === n.y && (f = m.M, g = n.M, ("M" === b || "MM" === b) && (f++, g++)), "M" === b || "MM" === b) for ("M" === b ? c = 0 : "MM" === b && (c = 2), d = f; g >= d; d++) {
          k.push({ val: d - 1, label: j.getNumberStringInFormat(d, c, !0) });
        } else if ("MMM" === b) for (d = f; g >= d; d++) {
          k.push({ val: d - 1, label: j.setting.i18n.shortMonths[d - 1] });
        } else if ("MMMM" === b) for (d = f; g >= d; d++) {
          k.push({ val: d - 1, label: j.setting.i18n.fullMonths[d - 1] });
        }
      } else if ("year" === a) for (h = 0 === j.setting.maxRows ? 50 : j.setting.maxRows, i = Math.floor(h / 2), f = $.CF.isValid(m) ? m.y : h % 2 === 0 ? l.y - i - 1 : l.y - i, g = $.CF.isValid(n) ? n.y : l.y + i, d = f; g >= d; d++) {
        k.push({ val: d, label: j.getNumberStringInFormat(d, 0, !0) });
      } else if ("hours" === a) {
        var o = [],
            p = 0;if (!j.setting.roundOff) for (p = l.H; p - j.setting.intervals.h >= 0;) {
          p -= j.setting.intervals.h;
        }for ("h" === b || "hh" === b ? (o = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], p %= 12, p = 0 === p ? 12 : p, f = o.indexOf(p), g = 11) : ("H" === b || "HH" === b) && (f = p, g = 23), "h" === b || "H" === b ? c = 0 : ("hh" === b || "HH" === b) && (c = 2), d = f; g >= d; d += j.setting.intervals.h) {
          "h" === b || "hh" === b ? k.push({ val: o[d], label: j.getNumberStringInFormat(o[d], c, !0) }) : ("H" === b || "HH" === b) && k.push({ val: d, label: j.getNumberStringInFormat(d, c, !0) });
        }
      } else if ("minutes" === a) {
        var q = 0;if (!j.setting.roundOff) for (q = l.m; q - j.setting.intervals.m >= 0;) {
          q -= j.setting.intervals.m;
        }for ("m" === b ? c = 0 : "mm" === b && (c = 2), d = q; 60 > d; d += j.setting.intervals.m) {
          k.push({ val: d, label: j.getNumberStringInFormat(d, c, !0) });
        }
      } else if ("seconds" === a) {
        var r = 0;if (!j.setting.roundOff) for (r = l.s; r - j.setting.intervals.s >= 0;) {
          r -= j.setting.intervals.s;
        }for ("s" === b ? c = 0 : "ss" === b && (c = 2), d = r; 60 > d; d += j.setting.intervals.s) {
          k.push({ val: d, label: j.getNumberStringInFormat(d, c, !0) });
        }
      } else if ("meridiem" === a) for (d = 0; 2 > d; d++) {
        k.push({ val: d, label: j.setting.i18n.meridiem[b][d] });
      }return k;
    }, _setDateTimeFormatComponentsArray: function _setDateTimeFormatComponentsArray(a) {
      var b,
          c = this,
          d = c._matchRegex($.AnyPicker.extra.sFormatRegex, a),
          e = "",
          f = [];for (b = 0; b < d.length; b++) {
        var g = d[b];g.match(/[a-zA-Z0-9]/) ? ("" !== e && (f.push(e), e = ""), f.push(g)) : e += g;
      }return "" !== e && (f.push(e), e = ""), f;
    }, _createDateTimeRegex: function _createDateTimeRegex(a) {
      var b,
          c,
          d,
          e = this,
          f = "",
          g = "(\\[[^\\[]*\\])|(\\\\)?",
          h = "|.";for (f += g, b = 0; b < a.length; b++) {
        c = a[b], f = e._getRegexComponentForFormat(f, c);
      }return f += h, d = new RegExp(f, "g");
    }, _getRegexComponentForFormat: function _getRegexComponentForFormat(a, b) {
      var c = this;return "d" === b || "dd" === b ? a += "(\\d{1,2})" : "DD" === b ? (a += "(", a += c.setting.i18n.veryShortDays.join("|"), a += ")") : "DDD" === b ? (a += "(", a += c.setting.i18n.shortDays.join("|"), a += ")") : "DDDD" === b ? (a += "(", a += c.setting.i18n.fullDays.join("|"), a += ")") : "M" === b || "MM" === b ? a += "(\\d{1,2})" : "MMM" === b ? (a += "(", a += c.setting.i18n.shortMonths.join("|"), a += ")") : "MMMM" === b ? (a += "(", a += c.setting.i18n.fullMonths.join("|"), a += ")") : $.CF.compareStrings(b, "y") || $.CF.compareStrings(b, "yyyy") ? a += "(\\d{1,4})" : $.CF.compareStrings(b, "yy") ? a += "(\\d{2})" : $.CF.compareStrings(b, "h") || $.CF.compareStrings(b, "hh") ? a += "(\\d{1,2})" : "m" === b || "mm" === b ? a += "(\\d{1,2})" : "s" === b || "ss" === b ? a += "(\\d{1,2})" : "a" === b || "aa" === b || "A" === b || "AA" === b ? (a += "(", "a" === b ? a += c.setting.i18n.meridiem.a.join("|") : "aa" === b ? a += c.setting.i18n.meridiem.aa.join("|") : "A" === b ? a += c.setting.i18n.meridiem.A.join("|") : "AA" === b && (a += c.setting.i18n.meridiem.AA.join("|")), a += ")") : a += "/" === b || "-" === b || "." === b || " " === b || ":" === b || "," === b ? "(/|-|.| |:|,)" : "(" + b + ")", a;
    }, _matchRegex: function _matchRegex(a, b) {
      for (var c = [], d = []; null !== (d = a.exec(b));) {
        for (var e = 3; e < d.length; e++) {
          c.push(d[e]);
        }d.index === a.lastIndex && a.lastIndex++;
      }return c;
    }, _parseInputDateTime: function _parseInputDateTime(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = this,
          i = null,
          j = {};if ("string" == typeof a) {
        for (g = h.tmp.diffDateTimeFormats ? h.tmp.sArrInputDateTimeFormat : h.tmp.sArrDateTimeFormat, f = h.tmp.diffDateTimeFormats ? h.tmp.sInputDateTimeRegex : h.tmp.sDateTimeRegex, e = h._matchRegex(f, a), b = 0; b < g.length; b++) {
          c = g[b], d = e[b], -1 !== c.search(/D|d|M|y|Y|H|h|m|s|A|a/, "") && (j = h._setInputDateTimeValue(c, d, j));
        }$.CF.isValid(j.h) && (($.CF.compareStrings(j.me, "AM") || $.CF.compareStrings(j.sm, "A")) && 12 === j.h ? j.H = 0 : ($.CF.compareStrings(j.me, "PM") || $.CF.compareStrings(j.sm, "P")) && j.h < 12 ? j.H = j.h + 12 : j.H = j.h), i = h.setDateInFormat({ iDate: j }, "");
      } else "[object Date]" === Object.prototype.toString.call(a) && (i = new Date(a));return i;
    }, _setInputDateTimeValue: function _setInputDateTimeValue(a, b, c) {
      var d = this;if (d._isSupportedFormat(a)) if ("d" === a || "dd" === a) c.d = parseInt(b);else if ("M" === a || "MM" === a) c.M = parseInt(b) - 1;else if ("MMM" === a) c.M = d.setting.i18n.shortMonths.indexOf(b);else if ("MMMM" === a) c.M = d.setting.i18n.fullMonths.indexOf(b);else if ($.CF.compareStrings(a, "yy")) {
        c.y = parseInt(b);var e = d.setting.maxYear / 100,
            f = d.setting.maxYear % 100;c.y > f ? c.y = 100 * (e - 1) + c.y : c.y = 100 * e + c.y;
      } else $.CF.compareStrings(a, "y") || $.CF.compareStrings(a, "yyyy") ? c.y = parseInt(b) : "H" === a || "HH" === a ? c.H = parseInt(b) : "h" === a || "hh" === a ? c.h = parseInt(b) : "m" === a || "mm" === a ? c.m = parseInt(b) : "s" === a || "ss" === a ? c.s = parseInt(b) : "a" === a || "A" === a ? $.CF.isValid(b) && (-1 !== b.search(/A/gi, "") ? c.me = "A" : -1 !== b.search(/P/gi, "") && (c.me = "P")) : ("aa" === a || "AA" === a) && $.CF.isValid(b) && (-1 !== b.search(/AM/gi, "") ? c.me = "AM" : -1 !== b.search(/PM/gi, "") && (c.me = "PM"));return c;
    }, formatOutputDates: function formatOutputDates(a, b) {
      var c,
          d,
          e,
          f,
          g = this,
          h = "";for (e = $.CF.isValid(b) ? "string" == typeof b ? g._setDateTimeFormatComponentsArray(b) : "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) ? b : g.tmp.diffDateTimeFormats ? g.tmp.sArrInputDateTimeFormat : g.tmp.sArrDateTimeFormat : g.tmp.diffDateTimeFormats ? g.tmp.sArrInputDateTimeFormat : g.tmp.sArrDateTimeFormat, f = g.getDateObject(a), d = 0; d < e.length; d++) {
        if (c = e[d], "dd" === c) h += g.getNumberStringInFormat(f.d, 2, !0);else if ("d" === c) h += g.getNumberStringInFormat(f.d, 0, !0);else if ("DDDD" === c) h += g.setting.i18n.fullDays[f.D];else if ("DDD" === c) h += g.setting.i18n.shortDays[f.D];else if ("DD" === c) h += g.setting.i18n.veryShortDays[f.D];else if ("MMMM" === c) h += g.setting.i18n.fullMonths[f.M];else if ("MMM" === c) h += g.setting.i18n.shortMonths[f.M];else if ("MM" === c) h += g.getNumberStringInFormat(f.M + 1, 2, !0);else if ("M" === c) h += g.getNumberStringInFormat(f.M + 1, 0, !0);else if ($.CF.compareStrings(c, "yyyy")) h += g.getNumberStringInFormat(f.y, 4, !0);else if ($.CF.compareStrings(c, "yy")) {
          var i = Math.floor(f.y / 10) % 10 * 10 + f.y % 10;h += g.getNumberStringInFormat(i, 2, !0);
        } else h += $.CF.compareStrings(c, "y") ? g.getNumberStringInFormat(f.y, 4, !0) : "hh" === c ? g.getNumberStringInFormat(f.h, 2, !0) : "h" === c ? g.getNumberStringInFormat(f.h, 0, !0) : "HH" === c ? g.getNumberStringInFormat(f.H, 2, !0) : "H" === c ? g.getNumberStringInFormat(f.H, 0, !0) : "mm" === c ? g.getNumberStringInFormat(f.m, 2, !0) : "m" === c ? g.getNumberStringInFormat(f.m, 0, !0) : "ss" === c ? g.getNumberStringInFormat(f.s, 2, !0) : "s" === c ? g.getNumberStringInFormat(f.s, 0, !0) : "aa" === c ? f.me : "a" === c ? f.sm : "AA" === c ? f.me.toUpperCase() : "A" === c ? f.sm.toUpperCase() : c;
      }return h;
    }, parseDisableValues: function parseDisableValues() {
      var a = this;a.tmp.oMinMax = { min: null, max: null }, a.tmp.oArrPDisable = { day: [], date: [], time: [], datetime: [] };var b, c, d;if ($.CF.isValid(a.setting.minValue)) {
        var e = a._parseInputDateTime(a.setting.minValue);$.CF.isValid(e) && (a.tmp.oMinMax.min = e);
      }if ($.CF.isValid(a.setting.maxValue)) {
        var f = a._parseInputDateTime(a.setting.maxValue);$.CF.isValid(f) && (a.tmp.oMinMax.max = f);
      }var g = !1;if ($.CF.isValid(a.tmp.oMinMax.min) && $.CF.isValid(a.tmp.oMinMax.max) ? ("date" === a.tmp.sDateTimeMode ? a.compareDates(a.tmp.selectedDate, a.tmp.oMinMax.min) >= 1 && a.compareDates(a.tmp.selectedDate, a.tmp.oMinMax.max) <= -1 || (g = !0) : "time" === a.tmp.sDateTimeMode ? a.compareTimes(a.tmp.selectedDate, a.tmp.oMinMax.min) >= 1 && a.compareTimes(a.tmp.selectedDate, a.tmp.oMinMax.max) <= -1 || (g = !0) : "datetime" === a.tmp.sDateTimeMode && (a.compareDateTimes(a.tmp.selectedDate, a.tmp.oMinMax.min) >= 1 && a.compareDateTimes(a.tmp.selectedDate, a.tmp.oMinMax.max) <= -1 || (g = !0)), g && (a.setting.selectedDate = new Date(a.tmp.oMinMax.min), a.tmp.selectedDate = new Date(a.tmp.oMinMax.min))) : $.CF.isValid(a.tmp.oMinMax.min) ? ("date" === a.tmp.sDateTimeMode ? a.compareDates(a.tmp.selectedDate, a.tmp.oMinMax.min) < -1 && (g = !0) : "time" === a.tmp.sDateTimeMode ? a.compareTimes(a.tmp.selectedDate, a.tmp.oMinMax.min) < -1 && (g = !0) : "datetime" === a.tmp.sDateTimeMode && a.compareDateTimes(a.tmp.selectedDate, a.tmp.oMinMax.min) < -1 && (g = !0), g && (a.setting.selectedDate = new Date(a.tmp.oMinMax.min), a.tmp.selectedDate = new Date(a.tmp.oMinMax.min))) : $.CF.isValid(a.tmp.oMinMax.max) && ("date" === a.tmp.sDateTimeMode ? a.compareDates(a.tmp.selectedDate, a.tmp.oMinMax.max) > 1 && (g = !0) : "time" === a.tmp.sDateTimeMode ? a.compareTimes(a.tmp.selectedDate, a.tmp.oMinMax.max) > 1 && (g = !0) : "datetime" === a.tmp.sDateTimeMode && a.compareDateTimes(a.tmp.selectedDate, a.tmp.oMinMax.max) > 1 && (g = !0), g && (a.setting.selectedDate = new Date(a.tmp.oMinMax.max), a.tmp.selectedDate = new Date(a.tmp.oMinMax.max))), "date" === a.tmp.sDateTimeMode ? a.tmp.oArrPDisable.date.push(a.tmp.oMinMax) : "time" === a.tmp.sDateTimeMode ? a.tmp.oArrPDisable.time.push({ day: [], val: [a.tmp.oMinMax] }) : "datetime" === a.tmp.sDateTimeMode && a.tmp.oArrPDisable.datetime.push(a.tmp.oMinMax), $.CF.isValid(a.setting.disableValues)) {
        if ($.CF.isValid(a.setting.disableValues.day) && a.setting.disableValues.day.length > 0) for (b = 0; b < a.setting.disableValues.day.length; b++) {
          a.setting.disableValues.day[b] >= 0 && a.setting.disableValues.day[b] <= 6 && a.tmp.oArrPDisable.day.push(a.setting.disableValues.day[b]);
        }if ($.CF.isValid(a.setting.disableValues.date) && a.setting.disableValues.date.length > 0) for (b = 0; b < a.setting.disableValues.date.length; b++) {
          var h = a.setting.disableValues.date[b],
              i = null;if ($.CF.isValid(h.val)) {
            var j = a._parseInputDateTime(h.val);$.CF.isValid(j) && (null === i && (i = {}), i.val = j);
          }if ($.CF.isValid(h.start)) {
            var k = a._parseInputDateTime(h.start);$.CF.isValid(k) && (null === i && (i = {}), i.start = k);
          }if ($.CF.isValid(h.end)) {
            var l = a._parseInputDateTime(h.end);$.CF.isValid(l) && (null === i && (i = {}), i.end = l);
          }$.CF.isValid(i) && a.tmp.oArrPDisable.date.push(i);
        }if ($.CF.isValid(a.setting.disableValues.time) && a.setting.disableValues.time.length > 0) for (c = 0; c < a.setting.disableValues.time.length; c++) {
          var m = a.setting.disableValues.time[c],
              n = $.CF.isValid(m.day) && m.day.length > 0,
              o = $.CF.isValid(m.val) && m.val.length > 0;if (o) {
            var p = [];for (d = 0; d < m.val.length; d++) {
              var q = m.val[d],
                  r = null;if ($.CF.isValid(q.val)) {
                var s = a._parseInputDateTime(q.val);$.CF.isValid(s) && (null === r && (r = {}), r.val = q);
              }if ($.CF.isValid(q.start)) {
                var t = a._parseInputDateTime(q.start);$.CF.isValid(t) && (null === r && (r = {}), r.start = t);
              }if ($.CF.isValid(q.end)) {
                var u = a._parseInputDateTime(q.end);$.CF.isValid(u) && (null === r && (r = {}), r.end = u);
              }$.CF.isValid(r) && p.push(r);
            }p.length > 0 && a.tmp.oArrPDisable.time.push({ day: n ? m.day : [], val: p });
          }
        }if ($.CF.isValid(a.setting.disableValues.datetime) && a.setting.disableValues.datetime.length > 0) for (c = 0; c < a.setting.disableValues.datetime.length; c++) {
          var v = a.setting.disableValues.datetime[c],
              w = null;if ($.CF.isValid(v.val)) {
            var x = a._parseInputDateTime(v.val);$.CF.isValid(x) && (null === w && (w = {}), w.val = x);
          }if ($.CF.isValid(v.start)) {
            var y = a._parseInputDateTime(v.start);$.CF.isValid(y) && (null === w && (w = {}), w.start = y);
          }if ($.CF.isValid(v.end)) {
            var z = a._parseInputDateTime(v.end);$.CF.isValid(z) && (null === w && (w = {}), w.end = z);
          }$.CF.isValid(w) && a.tmp.oArrPDisable.datetime.push(w);
        }
      } else console.log("Invalid value for AnyPicker plugin option disableValues");
    }, __setSelectedDateTimeInComponent: function __setSelectedDateTimeInComponent() {
      var a,
          b,
          c = this,
          d = "",
          e = c.getDateObject(c.tmp.selectedDate);for (a = 0; a < c.tmp.numOfComp; a++) {
        b = c.setting.components[a], "date" === b.name ? d = e.d : "day" === b.name ? d = e.D : "month" === b.name ? d = e.M : "year" === b.name ? d = e.y : "hours" === b.name ? "h" === b.format || "hh" === b.format ? d = e.h : ("H" === b.format || "HH" === b.format) && (d = e.H) : "minutes" === b.name ? d = e.m : "seconds" === b.name ? d = e.s : "meridiem" === b.name && ("a" === e.sm ? d = 0 : "p" === e.sm && (d = 1)), c.__changeComponentValue(a, d);
      }
    }, __disableInvalidRowsOfDateTimePicker: function __disableInvalidRowsOfDateTimePicker() {
      var a,
          b,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j = this;if (1 === j.tmp.numOfComp) {
        if (f = j.setting.components[0], g = f.name, h = f.format, i = j.setting.dataSource[0].data, "day" === g) for (a = 0; a < i.length; a++) {
          for (b = 0; b < j.tmp.oArrPDisable.day.length; b++) {
            j.tmp.oArrPDisable.day[b] === i[b].val && $(j.elem).find("#ap-row-0-" + a).addClass("ap-row-disabled ap-row-invalid");
          }
        }
      } else for (e = j.__getSelectedDate(!0)[1], a = 0; a < j.setting.dataSource.length; a++) {
        var k = j.setting.dataSource[a];for (b = 0; b < k.data.length; b++) {
          var l = { d: 1, M: 0, y: 0, H: 0, h: 0, m: 0, s: 0, sm: 0 };for (c = 0; c < j.tmp.numOfComp; c++) {
            c === a ? (d = k.data[b].val, f = j.setting.components[c], g = f.name, h = f.format) : (d = e[c], f = j.setting.components[c], g = f.name, h = f.format), "date" === g ? l.d = parseInt(d) : "month" === g ? l.M = parseInt(d) : "year" === g ? l.y = parseInt(d) : "hours" === g ? "h" === h || "hh" === h ? (l.h = parseInt(d), l.H = -1) : ("H" === h || "HH" === h) && (l.H = parseInt(d)) : "minutes" === g ? l.m = parseInt(d) : "seconds" === g ? l.s = parseInt(d) : "meridiem" === g && (l.sm = parseInt(d));
          }-1 === l.H && (l.H = 1 === l.sm ? 12 === l.h ? 12 : l.h + 12 : 12 === l.h ? 0 : l.h);var m = j.setDateInFormat({ iDate: l }, ""),
              n = j.__validateSelectedDate(m, !0, !1);n || $("#ap-component-" + a).find("#ap-row-" + a + "-" + b).addClass("ap-row-disabled ap-row-invalid");
        }
      }
    }, __getSelectedDate: function __getSelectedDate(a) {
      var b,
          c,
          d,
          e,
          f,
          g = this,
          h = g.getDateObject(g.tmp.selectedDate),
          i = {},
          j = 0,
          k = [];for (b = 0; b < g.tmp.numOfComp; b++) {
        c = g.setting.components[b], d = $(g.tmp.overlaySelector).find("#ap-component-" + b + " .ap-row-selected"), e = d.length > 0 ? d[0] : null, f = parseInt($(e).data("value")), k.push(f), "date" === c.name ? h.d = isNaN(f) ? h.d : f : "day" === c.name ? h.D = isNaN(f) ? h.D : f : "month" === c.name ? h.M = isNaN(f) ? h.M : f : "year" === c.name ? h.y = isNaN(f) ? h.y : f : "hours" === c.name ? "h" === c.format || "hh" === c.format ? (h.h = isNaN(f) ? h.h : f, h.H = -1) : h.H = isNaN(f) ? h.H : f : "minutes" === c.name ? h.m = isNaN(f) ? h.m : f : "seconds" === c.name ? h.s = isNaN(f) ? h.s : f : "meridiem" === c.name && (j = isNaN(f) ? "a" === h.sm ? 0 : 1 : f);
      }-1 === h.H && (h.H = 1 === j ? 12 === h.h ? 12 : h.h + 12 : 12 === h.h ? 0 : h.h);var l = g._getNumberOfDaysOfMonth(h.M, h.y);return h.d > l && (h.d = l), i = g.setDateInFormat({ iDate: h }, ""), a ? [i, k] : i;
    }, __validateSelectedDate: function __validateSelectedDate(a, b, c) {
      var d = this,
          e = d.getDateObject(a);if ($.CF.isValid(d.tmp.oArrPDisable)) {
        var f,
            g,
            h,
            i,
            j,
            k,
            l,
            m = "datetime" === d.tmp.sDateTimeMode || "date" === d.tmp.sDateTimeMode,
            n = "datetime" === d.tmp.sDateTimeMode || "time" === d.tmp.sDateTimeMode,
            o = !1,
            p = !0;if (!o && m && d.tmp.oArrPDisable.day.length > 0) for (f = 0; f < d.tmp.oArrPDisable.day.length; f++) {
          if (d.tmp.oArrPDisable.day[f] === e.D) {
            0 === d.compareDates(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(c, a, "day"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
          }
        }if (!o && m && d.tmp.oArrPDisable.date.length > 0) for (f = 0; f < d.tmp.oArrPDisable.date.length; f++) {
          if (k = d.tmp.oArrPDisable.date[f], $.CF.isValid(k.val)) {
            if (0 === d.compareDates(a, k.val)) {
              0 === d.compareDates(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(c, a, "date"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
            }
          } else if ($.CF.isValid(k.start) && $.CF.isValid(k.end)) {
            if (d.compareDates(a, k.start) >= 0 && d.compareDates(a, k.end) <= 0) {
              0 === d.compareDates(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(c, k.start, "date"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
            }
          } else if ($.CF.isValid(k.start)) {
            if (d.compareDates(a, k.start) >= 0) {
              0 === d.compareDates(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(!0, k.start, "date"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
            }
          } else if ($.CF.isValid(k.end)) {
            if (d.compareDates(a, k.end) <= 0) {
              0 === d.compareDates(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(!1, k.end, "date"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
            }
          } else if ($.CF.isValid(k.min) && $.CF.isValid(k.max)) {
            if (h = d.compareDates(a, k.min) < 0, i = d.compareDates(a, k.max) > 0, j = h ? !0 : i ? !1 : !0, h || i) {
              0 === d.compareDates(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(j, k.min, "date"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
            }
          } else if ($.CF.isValid(k.min)) {
            if (d.compareDates(a, k.min) < 0) {
              0 === d.compareDates(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(!1, k.min, "date"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
            }
          } else if ($.CF.isValid(k.max) && d.compareDates(a, k.max) > 0) {
            0 === d.compareDates(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(!0, k.max, "date"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
          }
        }if (!o && n && d.tmp.oArrPDisable.time.length > 0) for (f = 0; f < d.tmp.oArrPDisable.time.length; f++) {
          var q = d.tmp.oArrPDisable.time[f],
              r = !1;if ($.CF.isValid(q.day) && q.day.length > 0) for (g = 0; g < q.day.length && !(r = q.day[g] === e.D); g++) {} else r = !0;if (r) for (g = 0; g < q.val.length; g++) {
            if (l = q.val[g], $.CF.isValid(l.val)) {
              if (0 === d.compareTimes(a, l.val)) {
                0 === d.compareTimes(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(c, a, "time"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
              }
            } else if ($.CF.isValid(l.start) && $.CF.isValid(l.end)) {
              if (d.compareTimes(a, l.start) >= 0 && d.compareTimes(a, l.end) <= 0) {
                0 === d.compareTimes(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(c, l.start, "time"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
              }
            } else if ($.CF.isValid(l.start)) {
              if (d.compareTimes(a, l.start) >= 0) {
                0 === d.compareTimes(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(!0, l.start, "time"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
              }
            } else if ($.CF.isValid(l.end)) {
              if (d.compareTimes(a, l.end) <= 0) {
                0 === d.compareTimes(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(!1, l.end, "time"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
              }
            } else if ($.CF.isValid(l.min) && $.CF.isValid(l.max)) {
              if (h = d.compareTimes(a, l.min) < 0, i = d.compareTimes(a, l.max) > 0, j = h ? !0 : i ? !1 : !0, h || i) {
                0 === d.compareTimes(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(j, l.min, "time"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
              }
            } else if ($.CF.isValid(l.min)) {
              if (d.compareTimes(a, l.min) < 0) {
                0 === d.compareTimes(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(!1, l.min, "time"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
              }
            } else if ($.CF.isValid(l.max) && d.compareTimes(a, l.max) > 0) {
              0 === d.compareTimes(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(!0, l.max, "time"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
            }
          }
        }if (!o && n && d.tmp.oArrPDisable.datetime.length > 0) for (f = 0; f < d.tmp.oArrPDisable.datetime.length; f++) {
          if (k = d.tmp.oArrPDisable.datetime[f], $.CF.isValid(k.val)) {
            if (0 === d.compareDateTimes(a, k.val)) {
              0 === d.compareDateTimes(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(c, a, "datetime"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
            }
          } else if ($.CF.isValid(k.start) && $.CF.isValid(k.end)) {
            if (d.compareDateTimes(a, k.start) >= 0 && d.compareDateTimes(a, k.end) <= 0) {
              0 === d.compareDateTimes(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(c, k.start, "datetime"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
            }
          } else if ($.CF.isValid(k.start)) {
            if (d.compareDateTimes(a, k.start) >= 0) {
              0 === d.compareDateTimes(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(!0, k.start, "datetime"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
            }
          } else if ($.CF.isValid(k.end)) {
            if (d.compareDateTimes(a, k.end) <= 0) {
              0 === d.compareDateTimes(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(!1, k.end, "datetime"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
            }
          } else if ($.CF.isValid(k.min) && $.CF.isValid(k.max)) {
            if (h = d.compareDateTimes(a, k.min) < 0, i = d.compareDateTimes(a, k.max) > 0, j = h ? !0 : i ? !1 : !0, h || i) {
              0 === d.compareDateTimes(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(j, k.min, "datetime"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
            }
          } else if ($.CF.isValid(k.min)) {
            if (d.compareDateTimes(a, k.min) < 0) {
              0 === d.compareDateTimes(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(!1, k.min, "datetime"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
            }
          } else if ($.CF.isValid(k.max) && d.compareDateTimes(a, k.max) > 0) {
            0 === d.compareDateTimes(a, d.tmp.selectedDate) ? (o = !0, a = d._findValidSelectedDate(!0, k.max, "datetime"), d.tmp.selectedDate = new Date(a), d.__scrollToSelectedRow()) : b ? p = !1 : d.__scrollToSelectedRow();break;
          }
        }if (b) return p;
      } else if (b) return !0;
    }, _findValidSelectedDate: function _findValidSelectedDate(a, b, c) {
      var d = this;if ("day" === c || "date" === c) {
        $.CF.isValid(d.setting.minValue) && d.compareDates(d.setting.minValue, b) >= 0 && (b = new Date(d.setting.minValue), a = !1), $.CF.isValid(d.setting.maxValue) && d.compareDates(d.setting.maxValue, b) <= 0 && (b = new Date(d.setting.maxValue), a = !0);do {
          if (b = new Date(a ? b.getTime() - $.AnyPicker.extra.iMS.d : b.getTime() + $.AnyPicker.extra.iMS.d), d.__validateSelectedDate(b, !0, !1) && (!$.CF.isValid(d.setting.minValue) || $.CF.isValid(d.setting.minValue) && d.compareDates(d.setting.minValue, b) <= 0) && (!$.CF.isValid(d.setting.maxValue) || $.CF.isValid(d.setting.maxValue) && d.compareDates(d.setting.maxValue, b) >= 0)) return b;
        } while ((!$.CF.isValid(d.setting.minValue) || $.CF.isValid(d.setting.minValue) && d.compareDates(d.setting.minValue, b) <= 0) && (!$.CF.isValid(d.setting.maxValue) || $.CF.isValid(d.setting.maxValue) && d.compareDates(d.setting.maxValue, b) >= 0));
      } else if ("time" === c) {
        $.CF.isValid(d.setting.minValue) && d.compareTimes(d.setting.minValue, b) >= 0 && (b = new Date(d.setting.minValue), a = !1), $.CF.isValid(d.setting.maxValue) && d.compareTimes(d.setting.maxValue, b) <= 0 && (b = new Date(d.setting.maxValue), a = !0);do {
          if (b = new Date(a ? b.getTime() - $.AnyPicker.extra.iMS.m * d.setting.intervals.m : b.getTime() + $.AnyPicker.extra.iMS.m * d.setting.intervals.m), d.__validateSelectedDate(b, !0, !1) && (!$.CF.isValid(d.setting.minValue) || $.CF.isValid(d.setting.minValue) && d.compareTimes(d.setting.minValue, b) <= 0) && (!$.CF.isValid(d.setting.maxValue) || $.CF.isValid(d.setting.maxValue) && d.compareTimes(d.setting.maxValue, b) >= 0)) return b;
        } while ((!$.CF.isValid(d.setting.minValue) || $.CF.isValid(d.setting.minValue) && d.compareTimes(d.setting.minValue, b) <= 0) && (!$.CF.isValid(d.setting.maxValue) || $.CF.isValid(d.setting.maxValue) && d.compareTimes(d.setting.maxValue, b) >= 0));
      } else if ("datetime" === c) {
        $.CF.isValid(d.setting.minValue) && d.compareDateTimes(d.setting.minValue, b) >= 0 && (b = new Date(d.setting.minValue), a = !1), $.CF.isValid(d.setting.maxValue) && d.compareDateTimes(d.setting.maxValue, b) <= 0 && (b = new Date(d.setting.maxValue), a = !0);do {
          if (b = new Date(a ? b.getTime() - $.AnyPicker.extra.iMS.m * d.setting.intervals.m : b.getTime() + $.AnyPicker.extra.iMS.m * d.setting.intervals.m), d.__validateSelectedDate(b, !0, !1) && (!$.CF.isValid(d.setting.minValue) || $.CF.isValid(d.setting.minValue) && d.compareDateTimes(d.setting.minValue, b) <= 0) && (!$.CF.isValid(d.setting.maxValue) || $.CF.isValid(d.setting.maxValue) && d.compareDateTimes(d.setting.maxValue, b) >= 0)) return b;
        } while ((!$.CF.isValid(d.setting.minValue) || $.CF.isValid(d.setting.minValue) && d.compareDateTimes(d.setting.minValue, b) <= 0) && (!$.CF.isValid(d.setting.maxValue) || $.CF.isValid(d.setting.maxValue) && d.compareDateTimes(d.setting.maxValue, b) >= 0));
      }return $.CF.isValid(d.setting.minValue) ? d.setting.minValue : void 0;
    }, __setDaysOfMonthInDatePicker: function __setDaysOfMonthInDatePicker() {
      var a,
          b,
          c = this,
          d = null,
          e = null;for (a = 0; a < c.tmp.numOfComp; a++) {
        b = c.setting.components[a], "date" === b.name && (d = b.component, e = b.format);
      }if (null !== d) {
        var f = c.getDateObject(c.tmp.selectedDate),
            g = c._getNumberOfDaysOfMonth(f.M, f.y),
            h = !1;for (a = g + 1; 31 >= a; a++) {
          var i = $("#ap-component-" + d).find("#ap-row-" + d + "-" + (a - 1));i.addClass("ap-row-disabled ap-row-hidden"), h || (h = "true" === i.attr("aria-selected") ? !0 : !1);
        }if (h) {
          var j = new Date(f.y, f.M, g, f.H, f.m, f.s, f.ms);c.__validateSelectedDate(j, !1, !0), c.__scrollToSelectedRow();
        }
      }
    }, setDateInFormat: function setDateInFormat(a, b) {
      var c = this;void 0 === a.date && void 0 === a.iDate && (a.date = c._getCurrentDate()), void 0 === a.iDate ? a.iDate = { d: a.date.getDate(), M: a.date.getMonth(), y: a.date.getFullYear(), H: a.date.getHours(), m: a.date.getMinutes(), s: a.date.getSeconds(), ms: a.date.getMilliseconds() } : a.iDate = { d: void 0 !== a.iDate.d ? a.iDate.d : 1, M: void 0 !== a.iDate.M ? a.iDate.M : $.AnyPicker.extra.dToday.getMonth(), y: void 0 !== a.iDate.y ? a.iDate.y : $.AnyPicker.extra.dToday.getFullYear(), H: void 0 !== a.iDate.H ? a.iDate.H : 0, m: void 0 !== a.iDate.m ? a.iDate.m : 0, s: void 0 !== a.iDate.s ? a.iDate.s : 0, ms: void 0 !== a.iDate.ms ? a.iDate.ms : 0 };var d;return $.CF.isValid(b) ? "START" === b ? d = new Date(a.iDate.y, a.iDate.M, a.iDate.d, 0, 0, 0, 0) : "END" === b && (d = new Date(a.iDate.y, a.iDate.M, a.iDate.d, 23, 59, 59, 999)) : d = new Date(a.iDate.y, a.iDate.M, a.iDate.d, a.iDate.H, a.iDate.m, a.iDate.s, a.iDate.ms), d;
    }, _getCurrentDate: function _getCurrentDate() {
      var a = this,
          b = a.getDateByAddingOutputTZOffset(a.convertToUTC(new Date()), a.setting.tzOffset);return b;
    }, convertToUTC: function convertToUTC(a, b) {
      var c = this;return new Date(a.getTime() - (void 0 === b || "" === b || null === b ? -(a.getTimezoneOffset() * $.AnyPicker.extra.iMS.m) : c._getTZOffsetInMS(b)));
    }, _getTZOffsetInMS: function _getTZOffsetInMS(a) {
      var b = this,
          c = 0;if (void 0 === a || "" === a || null === a) c = -($.AnyPicker.extra.dToday.getTimezoneOffset() * $.AnyPicker.extra.iMS.m);else {
        var d = b._matchRegex(/^([+|-]{1})([0-1]{0,1}[0-9]{1}):([0-6]{0,1}[0-9]{1})$/, a);c = parseInt(d[2]) * $.AnyPicker.extra.iMS.h + parseInt(d[3]) * $.AnyPicker.extra.iMS.m, c = "+" === d[1] ? c : -c;
      }return c;
    }, getDateByAddingOutputTZOffset: function getDateByAddingOutputTZOffset(a, b) {
      var c = this;return new Date(a.getTime() + c._getTZOffsetInMS(b));
    }, normalizeDateTimeWithOffset: function normalizeDateTimeWithOffset(a, b, c) {
      var d = this;return d.getDateByAddingOutputTZOffset(d.convertToUTC(a, b), c);
    }, _getNumberOfDaysOfMonth: function _getNumberOfDaysOfMonth(a, b) {
      var c = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          d = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];return b % 4 === 0 ? d[a] : c[a];
    }, _normalizeDateTime: function _normalizeDateTime(a, b, c) {
      var d,
          e = this,
          f = { d: a.getDate(), M: a.getMonth(), y: a.getFullYear(), H: a.getHours(), m: a.getMinutes(), s: a.getSeconds() };switch (c) {case "s":
          "START" === b ? d = new Date(f.y, f.M, f.d, f.H, f.m, 0, 0) : "END" === b && (d = new Date(f.y, f.M, f.d, f.H, f.m, 59, 999));break;case "m":
          "START" === b ? d = new Date(f.y, f.M, f.d, f.H, 0, 0, 0) : "END" === b && (d = new Date(f.y, f.M, f.d, f.H, 59, 59, 999));break;case "h":case "T":
          "START" === b ? d = new Date(f.y, f.M, f.d, 0, 0, 0, 0) : "END" === b && (d = new Date(f.y, f.M, f.d, 23, 59, 59, 999));break;case "d":case "dE":
          "START" === b ? d = new Date(f.y, f.M, 1, 0, 0, 0, 0) : "END" === b && (d = new Date(f.y, f.M, e._getNumberOfDaysOfMonth(f.M, f.y), 0, 0, 0, 0));break;case "M":case "ME":case "y":case "yE":
          "START" === b ? d = new Date(f.y, 0, 1, 0, 0, 0, 0) : "END" === b && (d = new Date(f.y, 11, e._getNumberOfDaysOfMonth(11, f.y), 0, 0, 0, 0));}return ("dE" === c || "ME" === c || "yE" === c) && (d = e._normalizeDateTime(d, "END", "T")), d;
    }, _getDifference: function _getDifference(a, b, c) {
      var d,
          e = b.getTime() - c.getTime();return "ms" === a ? d = e : "s" === a ? d = e / $.AnyPicker.extra.iMS.s : "m" === a ? d = e / $.AnyPicker.extra.iMS.m : "h" === a ? d = e / $.AnyPicker.extra.iMS.h : "d" === a ? d = e / $.AnyPicker.extra.iMS.d : "M" === a ? d = e / $.AnyPicker.extra.iMS.m : "y" === a && (d = e / $.AnyPicker.extra.iMS.y), d;
    }, compareDates: function compareDates(a, b) {
      var c = this;a = c._normalizeDateTime(a, "START", "T"), b = c._normalizeDateTime(b, "START", "T");var d = c._getDifference("d", a, b);return 0 === d ? d : d / Math.abs(d);
    }, compareDateTimes: function compareDateTimes(a, b) {
      var c = this,
          d = c._getDifference("m", a, b);return 0 === d ? d : d / Math.abs(d);
    }, compareTimes: function compareTimes(a, b) {
      var c = this,
          d = new Date($.AnyPicker.extra.dToday),
          e = new Date($.AnyPicker.extra.dToday);return d.setHours(a.getHours()), d.setMinutes(a.getMinutes()), d.setSeconds(a.getSeconds()), e.setHours(b.getHours()), e.setMinutes(b.getMinutes()), e.setSeconds(b.getSeconds()), c.compareDateTimes(d, e);
    }, getNumberStringInFormat: function getNumberStringInFormat(a, b, c) {
      var d,
          e = this,
          f = "",
          g = a.toString(),
          h = g.length;if (0 !== b) for (d = 0; b - h > d; d++) {
        f += c ? e.setting.i18n.numbers[0] : "0";
      }if (c) for (d = 0; h > d; d++) {
        f += e.setting.i18n.numbers[parseInt(g.charAt(d))];
      } else f += g;return f;
    }, getDateObject: function getDateObject(a) {
      var b = { D: a.getDay(), d: a.getDate(), M: a.getMonth(), y: a.getFullYear(), H: a.getHours(), m: a.getMinutes(), s: a.getSeconds(), ms: a.getMilliseconds() };return b.h = b.H > 12 ? b.H - 12 : 0 === b.H ? 12 : b.H, b.me = b.H < 12 ? "am" : "pm", b.sm = b.H < 12 ? "a" : "p", b;
    } });
}();

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * FullCalendar v3.9.0
 * Docs & License: https://fullcalendar.io/
 * (c) 2018 Adam Shaw
 */
!function (t, e) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = e(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"moment\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())), __webpack_require__(0)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"moment\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.FullCalendar = e(require("moment"), require("jquery")) : t.FullCalendar = e(t.moment, t.jQuery);
}("undefined" != typeof self ? self : undefined, function (t, e) {
  return function (t) {
    function e(i) {
      if (n[i]) return n[i].exports;var r = n[i] = { i: i, l: !1, exports: {} };return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
    }var n = {};return e.m = t, e.c = n, e.d = function (t, n, i) {
      e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: i });
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return e.d(n, "a", n), n;
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "", e(e.s = 236);
  }([function (e, n) {
    e.exports = t;
  },, function (t, e) {
    var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        e.hasOwnProperty(n) && (t[n] = e[n]);
      }
    };e.__extends = function (t, e) {
      function i() {
        this.constructor = t;
      }n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
    };
  }, function (t, n) {
    t.exports = e;
  }, function (t, e, n) {
    function i(t, e) {
      e.left && t.css({ "border-left-width": 1, "margin-left": e.left - 1 }), e.right && t.css({ "border-right-width": 1, "margin-right": e.right - 1 });
    }function r(t) {
      t.css({ "margin-left": "", "margin-right": "", "border-left-width": "", "border-right-width": "" });
    }function o() {
      ht("body").addClass("fc-not-allowed");
    }function s() {
      ht("body").removeClass("fc-not-allowed");
    }function a(t, e, n) {
      var i = Math.floor(e / t.length),
          r = Math.floor(e - i * (t.length - 1)),
          o = [],
          s = [],
          a = [],
          u = 0;l(t), t.each(function (e, n) {
        var l = e === t.length - 1 ? r : i,
            d = ht(n).outerHeight(!0);d < l ? (o.push(n), s.push(d), a.push(ht(n).height())) : u += d;
      }), n && (e -= u, i = Math.floor(e / o.length), r = Math.floor(e - i * (o.length - 1))), ht(o).each(function (t, e) {
        var n = t === o.length - 1 ? r : i,
            l = s[t],
            u = a[t],
            d = n - (l - u);l < n && ht(e).height(d);
      });
    }function l(t) {
      t.height("");
    }function u(t) {
      var e = 0;return t.find("> *").each(function (t, n) {
        var i = ht(n).outerWidth();i > e && (e = i);
      }), e++, t.width(e), e;
    }function d(t, e) {
      var n,
          i = t.add(e);return i.css({ position: "relative", left: -1 }), n = t.outerHeight() - e.outerHeight(), i.css({ position: "", left: "" }), n;
    }function c(t) {
      var e = t.css("position"),
          n = t.parents().filter(function () {
        var t = ht(this);return (/(auto|scroll)/.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
        );
      }).eq(0);return "fixed" !== e && n.length ? n : ht(t[0].ownerDocument || document);
    }function p(t, e) {
      var n = t.offset(),
          i = n.left - (e ? e.left : 0),
          r = n.top - (e ? e.top : 0);return { left: i, right: i + t.outerWidth(), top: r, bottom: r + t.outerHeight() };
    }function h(t, e) {
      var n = t.offset(),
          i = g(t),
          r = n.left + b(t, "border-left-width") + i.left - (e ? e.left : 0),
          o = n.top + b(t, "border-top-width") + i.top - (e ? e.top : 0);return { left: r, right: r + t[0].clientWidth, top: o, bottom: o + t[0].clientHeight };
    }function f(t, e) {
      var n = t.offset(),
          i = n.left + b(t, "border-left-width") + b(t, "padding-left") - (e ? e.left : 0),
          r = n.top + b(t, "border-top-width") + b(t, "padding-top") - (e ? e.top : 0);return { left: i, right: i + t.width(), top: r, bottom: r + t.height() };
    }function g(t) {
      var e,
          n = t[0].offsetWidth - t[0].clientWidth,
          i = t[0].offsetHeight - t[0].clientHeight;return n = v(n), i = v(i), e = { left: 0, right: 0, top: 0, bottom: i }, y() && "rtl" === t.css("direction") ? e.left = n : e.right = n, e;
    }function v(t) {
      return t = Math.max(0, t), t = Math.round(t);
    }function y() {
      return null === ft && (ft = m()), ft;
    }function m() {
      var t = ht("<div><div/></div>").css({ position: "absolute", top: -1e3, left: 0, border: 0, padding: 0, overflow: "scroll", direction: "rtl" }).appendTo("body"),
          e = t.children(),
          n = e.offset().left > t.offset().left;return t.remove(), n;
    }function b(t, e) {
      return parseFloat(t.css(e)) || 0;
    }function w(t) {
      return 1 === t.which && !t.ctrlKey;
    }function D(t) {
      var e = t.originalEvent.touches;return e && e.length ? e[0].pageX : t.pageX;
    }function E(t) {
      var e = t.originalEvent.touches;return e && e.length ? e[0].pageY : t.pageY;
    }function S(t) {
      return (/^touch/.test(t.type)
      );
    }function C(t) {
      t.addClass("fc-unselectable").on("selectstart", T);
    }function R(t) {
      t.removeClass("fc-unselectable").off("selectstart", T);
    }function T(t) {
      t.preventDefault();
    }function M(t, e) {
      var n = { left: Math.max(t.left, e.left), right: Math.min(t.right, e.right), top: Math.max(t.top, e.top), bottom: Math.min(t.bottom, e.bottom) };return n.left < n.right && n.top < n.bottom && n;
    }function I(t, e) {
      return { left: Math.min(Math.max(t.left, e.left), e.right), top: Math.min(Math.max(t.top, e.top), e.bottom) };
    }function H(t) {
      return { left: (t.left + t.right) / 2, top: (t.top + t.bottom) / 2 };
    }function P(t, e) {
      return { left: t.left - e.left, top: t.top - e.top };
    }function _(t) {
      var e,
          n,
          i = [],
          r = [];for ("string" == typeof t ? r = t.split(/\s*,\s*/) : "function" == typeof t ? r = [t] : ht.isArray(t) && (r = t), e = 0; e < r.length; e++) {
        n = r[e], "string" == typeof n ? i.push("-" === n.charAt(0) ? { field: n.substring(1), order: -1 } : { field: n, order: 1 }) : "function" == typeof n && i.push({ func: n });
      }return i;
    }function x(t, e, n, i, r) {
      var o, s;for (o = 0; o < n.length; o++) {
        if (s = O(t, e, n[o], i, r)) return s;
      }return 0;
    }function O(t, e, n, i, r) {
      if (n.func) return n.func(t, e);var o = t[n.field],
          s = e[n.field];return null == o && i && (o = i[n.field]), null == s && r && (s = r[n.field]), F(o, s) * (n.order || 1);
    }function F(t, e) {
      return t || e ? null == e ? -1 : null == t ? 1 : "string" === ht.type(t) || "string" === ht.type(e) ? String(t).localeCompare(String(e)) : t - e : 0;
    }function z(t, e) {
      return pt.duration({ days: t.clone().stripTime().diff(e.clone().stripTime(), "days"), ms: t.time() - e.time() });
    }function B(t, e) {
      return pt.duration({ days: t.clone().stripTime().diff(e.clone().stripTime(), "days") });
    }function A(t, e, n) {
      return pt.duration(Math.round(t.diff(e, n, !0)), n);
    }function k(t, n) {
      var i, r, o;for (i = 0; i < e.unitsDesc.length && (r = e.unitsDesc[i], !((o = V(r, t, n)) >= 1 && ut(o))); i++) {}return r;
    }function L(t, e) {
      var n = k(t);return "week" === n && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.days && (n = "day"), n;
    }function V(t, e, n) {
      return null != n ? n.diff(e, t, !0) : pt.isDuration(e) ? e.as(t) : e.end.diff(e.start, t, !0);
    }function G(t, e, n) {
      var i;return U(n) ? (e - t) / n : (i = n.asMonths(), Math.abs(i) >= 1 && ut(i) ? e.diff(t, "months", !0) / i : e.diff(t, "days", !0) / n.asDays());
    }function N(t, e) {
      var n, i;return U(t) || U(e) ? t / e : (n = t.asMonths(), i = e.asMonths(), Math.abs(n) >= 1 && ut(n) && Math.abs(i) >= 1 && ut(i) ? n / i : t.asDays() / e.asDays());
    }function j(t, e) {
      var n;return U(t) ? pt.duration(t * e) : (n = t.asMonths(), Math.abs(n) >= 1 && ut(n) ? pt.duration({ months: n * e }) : pt.duration({ days: t.asDays() * e }));
    }function U(t) {
      return Boolean(t.hours() || t.minutes() || t.seconds() || t.milliseconds());
    }function W(t) {
      return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date;
    }function q(t) {
      return "string" == typeof t && /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(t);
    }function Y() {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e] = arguments[e];
      }var n = window.console;if (n && n.log) return n.log.apply(n, t);
    }function Z() {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e] = arguments[e];
      }var n = window.console;return n && n.warn ? n.warn.apply(n, t) : Y.apply(null, t);
    }function Q(t, e) {
      var n,
          i,
          r,
          o,
          s,
          a,
          l = {};if (e) for (n = 0; n < e.length; n++) {
        for (i = e[n], r = [], o = t.length - 1; o >= 0; o--) {
          if ("object" == _typeof(s = t[o][i])) r.unshift(s);else if (void 0 !== s) {
            l[i] = s;break;
          }
        }r.length && (l[i] = Q(r));
      }for (n = t.length - 1; n >= 0; n--) {
        a = t[n];for (i in a) {
          i in l || (l[i] = a[i]);
        }
      }return l;
    }function X(t, e) {
      for (var n in t) {
        $(t, n) && (e[n] = t[n]);
      }
    }function $(t, e) {
      return gt.call(t, e);
    }function K(t, e, n) {
      if (ht.isFunction(t) && (t = [t]), t) {
        var i = void 0,
            r = void 0;for (i = 0; i < t.length; i++) {
          r = t[i].apply(e, n) || r;
        }return r;
      }
    }function J(t, e) {
      for (var n = 0, i = 0; i < t.length;) {
        e(t[i]) ? (t.splice(i, 1), n++) : i++;
      }return n;
    }function tt(t, e) {
      for (var n = 0, i = 0; i < t.length;) {
        t[i] === e ? (t.splice(i, 1), n++) : i++;
      }return n;
    }function et(t, e) {
      var n,
          i = t.length;if (null == i || i !== e.length) return !1;for (n = 0; n < i; n++) {
        if (t[n] !== e[n]) return !1;
      }return !0;
    }function nt() {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e] = arguments[e];
      }for (var n = 0; n < t.length; n++) {
        if (void 0 !== t[n]) return t[n];
      }
    }function it(t) {
      return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />");
    }function rt(t) {
      return t.replace(/&.*?;/g, "");
    }function ot(t) {
      var e = [];return ht.each(t, function (t, n) {
        null != n && e.push(t + ":" + n);
      }), e.join(";");
    }function st(t) {
      var e = [];return ht.each(t, function (t, n) {
        null != n && e.push(t + '="' + it(n) + '"');
      }), e.join(" ");
    }function at(t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    }function lt(t, e) {
      return t - e;
    }function ut(t) {
      return t % 1 == 0;
    }function dt(t, e) {
      var n = t[e];return function () {
        return n.apply(t, arguments);
      };
    }function ct(t, e, n) {
      void 0 === n && (n = !1);var i,
          r,
          o,
          s,
          a,
          l = function l() {
        var u = +new Date() - s;u < e ? i = setTimeout(l, e - u) : (i = null, n || (a = t.apply(o, r), o = r = null));
      };return function () {
        o = this, r = arguments, s = +new Date();var u = n && !i;return i || (i = setTimeout(l, e)), u && (a = t.apply(o, r), o = r = null), a;
      };
    }Object.defineProperty(e, "__esModule", { value: !0 });var pt = n(0),
        ht = n(3);e.compensateScroll = i, e.uncompensateScroll = r, e.disableCursor = o, e.enableCursor = s, e.distributeHeight = a, e.undistributeHeight = l, e.matchCellWidths = u, e.subtractInnerElHeight = d, e.getScrollParent = c, e.getOuterRect = p, e.getClientRect = h, e.getContentRect = f, e.getScrollbarWidths = g;var ft = null;e.isPrimaryMouseButton = w, e.getEvX = D, e.getEvY = E, e.getEvIsTouch = S, e.preventSelection = C, e.allowSelection = R, e.preventDefault = T, e.intersectRects = M, e.constrainPoint = I, e.getRectCenter = H, e.diffPoints = P, e.parseFieldSpecs = _, e.compareByFieldSpecs = x, e.compareByFieldSpec = O, e.flexibleCompare = F, e.dayIDs = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], e.unitsDesc = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"], e.diffDayTime = z, e.diffDay = B, e.diffByUnit = A, e.computeGreatestUnit = k, e.computeDurationGreatestUnit = L, e.divideRangeByDuration = G, e.divideDurationByDuration = N, e.multiplyDuration = j, e.durationHasTime = U, e.isNativeDate = W, e.isTimeString = q, e.log = Y, e.warn = Z;var gt = {}.hasOwnProperty;e.mergeProps = Q, e.copyOwnProps = X, e.hasOwnProp = $, e.applyAll = K, e.removeMatching = J, e.removeExact = tt, e.isArraysEqual = et, e.firstDefined = nt, e.htmlEscape = it, e.stripHtmlEntities = rt, e.cssToStr = ot, e.attrsToStr = st, e.capitaliseFirstLetter = at, e.compareNumbers = lt, e.isInt = ut, e.proxy = dt, e.debounce = ct;
  }, function (t, e, n) {
    function i(t, e) {
      return t.startMs - e.startMs;
    }Object.defineProperty(e, "__esModule", { value: !0 });var r = n(0),
        o = n(10),
        s = function () {
      function t(t, e) {
        this.isStart = !0, this.isEnd = !0, r.isMoment(t) && (t = t.clone().stripZone()), r.isMoment(e) && (e = e.clone().stripZone()), t && (this.startMs = t.valueOf()), e && (this.endMs = e.valueOf());
      }return t.invertRanges = function (e, n) {
        var r,
            o,
            s = [],
            a = n.startMs;for (e.sort(i), r = 0; r < e.length; r++) {
          o = e[r], o.startMs > a && s.push(new t(a, o.startMs)), o.endMs > a && (a = o.endMs);
        }return a < n.endMs && s.push(new t(a, n.endMs)), s;
      }, t.prototype.intersect = function (e) {
        var n = this.startMs,
            i = this.endMs,
            r = null;return null != e.startMs && (n = null == n ? e.startMs : Math.max(n, e.startMs)), null != e.endMs && (i = null == i ? e.endMs : Math.min(i, e.endMs)), (null == n || null == i || n < i) && (r = new t(n, i), r.isStart = this.isStart && n === this.startMs, r.isEnd = this.isEnd && i === this.endMs), r;
      }, t.prototype.intersectsWith = function (t) {
        return (null == this.endMs || null == t.startMs || this.endMs > t.startMs) && (null == this.startMs || null == t.endMs || this.startMs < t.endMs);
      }, t.prototype.containsRange = function (t) {
        return (null == this.startMs || null != t.startMs && t.startMs >= this.startMs) && (null == this.endMs || null != t.endMs && t.endMs <= this.endMs);
      }, t.prototype.containsDate = function (t) {
        var e = t.valueOf();return (null == this.startMs || e >= this.startMs) && (null == this.endMs || e < this.endMs);
      }, t.prototype.constrainDate = function (t) {
        var e = t.valueOf();return null != this.startMs && e < this.startMs && (e = this.startMs), null != this.endMs && e >= this.endMs && (e = this.endMs - 1), e;
      }, t.prototype.equals = function (t) {
        return this.startMs === t.startMs && this.endMs === t.endMs;
      }, t.prototype.clone = function () {
        var e = new t(this.startMs, this.endMs);return e.isStart = this.isStart, e.isEnd = this.isEnd, e;
      }, t.prototype.getStart = function () {
        return null != this.startMs ? o.default.utc(this.startMs).stripZone() : null;
      }, t.prototype.getEnd = function () {
        return null != this.endMs ? o.default.utc(this.endMs).stripZone() : null;
      }, t.prototype.as = function (t) {
        return r.utc(this.endMs).diff(r.utc(this.startMs), t, !0);
      }, t;
    }();e.default = s;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(208),
        s = n(33),
        a = n(49),
        l = function (t) {
      function e(n) {
        var i = t.call(this) || this;return i.calendar = n, i.className = [], i.uid = String(e.uuid++), i;
      }return i.__extends(e, t), e.parse = function (t, e) {
        var n = new this(e);return !("object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) || !n.applyProps(t)) && n;
      }, e.normalizeId = function (t) {
        return t ? String(t) : null;
      }, e.prototype.fetch = function (t, e, n) {}, e.prototype.removeEventDefsById = function (t) {}, e.prototype.removeAllEventDefs = function () {}, e.prototype.getPrimitive = function (t) {}, e.prototype.parseEventDefs = function (t) {
        var e,
            n,
            i = [];for (e = 0; e < t.length; e++) {
          (n = this.parseEventDef(t[e])) && i.push(n);
        }return i;
      }, e.prototype.parseEventDef = function (t) {
        var e = this.calendar.opt("eventDataTransform"),
            n = this.eventDataTransform;return e && (t = e(t, this.calendar)), n && (t = n(t, this.calendar)), a.default.parse(t, this);
      }, e.prototype.applyManualStandardProps = function (t) {
        return null != t.id && (this.id = e.normalizeId(t.id)), r.isArray(t.className) ? this.className = t.className : "string" == typeof t.className && (this.className = t.className.split(/\s+/)), !0;
      }, e.uuid = 0, e.defineStandardProps = o.default.defineStandardProps, e.copyVerbatimStandardProps = o.default.copyVerbatimStandardProps, e;
    }(s.default);e.default = l, o.default.mixInto(l), l.defineStandardProps({ id: !1, className: !1, color: !0, backgroundColor: !0, borderColor: !0, textColor: !0, editable: !0, startEditable: !0, durationEditable: !0, rendering: !0, overlap: !0, constraint: !0, allDayDefault: !0, eventDataTransform: !0 });
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(14),
        s = 0,
        a = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.prototype.listenTo = function (t, e, n) {
        if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (var i in e) {
          e.hasOwnProperty(i) && this.listenTo(t, i, e[i]);
        } else "string" == typeof e && t.on(e + "." + this.getListenerNamespace(), r.proxy(n, this));
      }, e.prototype.stopListeningTo = function (t, e) {
        t.off((e || "") + "." + this.getListenerNamespace());
      }, e.prototype.getListenerNamespace = function () {
        return null == this.listenerId && (this.listenerId = s++), "_listener" + this.listenerId;
      }, e;
    }(o.default);e.default = a;
  },,, function (t, e, n) {
    function i(t, e) {
      return c.format.call(t, e);
    }function r(t, e, n) {
      void 0 === e && (e = !1), void 0 === n && (n = !1);var i,
          r,
          d,
          c,
          p = t[0],
          h = 1 === t.length && "string" == typeof p;return o.isMoment(p) || a.isNativeDate(p) || void 0 === p ? c = o.apply(null, t) : (i = !1, r = !1, h ? l.test(p) ? (p += "-01", t = [p], i = !0, r = !0) : (d = u.exec(p)) && (i = !d[5], r = !0) : s.isArray(p) && (r = !0), c = e || i ? o.utc.apply(o, t) : o.apply(null, t), i ? (c._ambigTime = !0, c._ambigZone = !0) : n && (r ? c._ambigZone = !0 : h && c.utcOffset(p))), c._fullCalendar = !0, c;
    }Object.defineProperty(e, "__esModule", { value: !0 });var o = n(0),
        s = n(3),
        a = n(4),
        l = /^\s*\d{4}-\d\d$/,
        u = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,
        d = o.fn;e.newMomentProto = d;var c = s.extend({}, d);e.oldMomentProto = c;var p = o.momentProperties;p.push("_fullCalendar"), p.push("_ambigTime"), p.push("_ambigZone"), e.oldMomentFormat = i;var h = function h() {
      return r(arguments);
    };e.default = h, h.utc = function () {
      var t = r(arguments, !0);return t.hasTime() && t.utc(), t;
    }, h.parseZone = function () {
      return r(arguments, !0, !0);
    }, d.week = d.weeks = function (t) {
      var e = this._locale._fullCalendar_weekCalc;return null == t && "function" == typeof e ? e(this) : "ISO" === e ? c.isoWeek.apply(this, arguments) : c.week.apply(this, arguments);
    }, d.time = function (t) {
      if (!this._fullCalendar) return c.time.apply(this, arguments);if (null == t) return o.duration({ hours: this.hours(), minutes: this.minutes(), seconds: this.seconds(), milliseconds: this.milliseconds() });this._ambigTime = !1, o.isDuration(t) || o.isMoment(t) || (t = o.duration(t));var e = 0;return o.isDuration(t) && (e = 24 * Math.floor(t.asDays())), this.hours(e + t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds());
    }, d.stripTime = function () {
      return this._ambigTime || (this.utc(!0), this.set({ hours: 0, minutes: 0, seconds: 0, ms: 0 }), this._ambigTime = !0, this._ambigZone = !0), this;
    }, d.hasTime = function () {
      return !this._ambigTime;
    }, d.stripZone = function () {
      var t;return this._ambigZone || (t = this._ambigTime, this.utc(!0), this._ambigTime = t || !1, this._ambigZone = !0), this;
    }, d.hasZone = function () {
      return !this._ambigZone;
    }, d.local = function (t) {
      return c.local.call(this, this._ambigZone || t), this._ambigTime = !1, this._ambigZone = !1, this;
    }, d.utc = function (t) {
      return c.utc.call(this, t), this._ambigTime = !1, this._ambigZone = !1, this;
    }, d.utcOffset = function (t) {
      return null != t && (this._ambigTime = !1, this._ambigZone = !1), c.utcOffset.apply(this, arguments);
    };
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(14),
        s = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.prototype.on = function (t, e) {
        return r(this).on(t, this._prepareIntercept(e)), this;
      }, e.prototype.one = function (t, e) {
        return r(this).one(t, this._prepareIntercept(e)), this;
      }, e.prototype._prepareIntercept = function (t) {
        var e = function e(_e, n) {
          return t.apply(n.context || this, n.args || []);
        };return t.guid || (t.guid = r.guid++), e.guid = t.guid, e;
      }, e.prototype.off = function (t, e) {
        return r(this).off(t, e), this;
      }, e.prototype.trigger = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }return r(this).triggerHandler(t, { args: e }), this;
      }, e.prototype.triggerWith = function (t, e, n) {
        return r(this).triggerHandler(t, { context: e, args: n }), this;
      }, e.prototype.hasHandlers = function (t) {
        var e = r._data(this, "events");return e && e[t] && e[t].length > 0;
      }, e;
    }(o.default);e.default = s;
  }, function (t, e) {
    Object.defineProperty(e, "__esModule", { value: !0 });var n = function () {
      function t(t, e) {
        this.isAllDay = !1, this.unzonedRange = t, this.isAllDay = e;
      }return t.prototype.toLegacy = function (t) {
        return { start: t.msToMoment(this.unzonedRange.startMs, this.isAllDay), end: t.msToMoment(this.unzonedRange.endMs, this.isAllDay) };
      }, t;
    }();e.default = n;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(34),
        o = n(209),
        s = n(17),
        a = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.prototype.buildInstances = function () {
        return [this.buildInstance()];
      }, e.prototype.buildInstance = function () {
        return new o.default(this, this.dateProfile);
      }, e.prototype.isAllDay = function () {
        return this.dateProfile.isAllDay();
      }, e.prototype.clone = function () {
        var e = t.prototype.clone.call(this);return e.dateProfile = this.dateProfile, e;
      }, e.prototype.rezone = function () {
        var t = this.source.calendar,
            e = this.dateProfile;this.dateProfile = new s.default(t.moment(e.start), e.end ? t.moment(e.end) : null, t);
      }, e.prototype.applyManualStandardProps = function (e) {
        var n = t.prototype.applyManualStandardProps.call(this, e),
            i = s.default.parse(e, this.source);return !!i && (this.dateProfile = i, null != e.date && (this.miscProps.date = e.date), n);
      }, e;
    }(r.default);e.default = a, a.defineStandardProps({ start: !1, date: !1, end: !1, allDay: !1 });
  }, function (t, e) {
    Object.defineProperty(e, "__esModule", { value: !0 });var n = function () {
      function t() {}return t.mixInto = function (t) {
        var e = this;Object.getOwnPropertyNames(this.prototype).forEach(function (n) {
          t.prototype[n] || (t.prototype[n] = e.prototype[n]);
        });
      }, t.mixOver = function (t) {
        var e = this;Object.getOwnPropertyNames(this.prototype).forEach(function (n) {
          t.prototype[n] = e.prototype[n];
        });
      }, t;
    }();e.default = n;
  }, function (t, e) {
    Object.defineProperty(e, "__esModule", { value: !0 });var n = function () {
      function t(t) {
        this.view = t._getView(), this.component = t;
      }return t.prototype.opt = function (t) {
        return this.view.opt(t);
      }, t.prototype.end = function () {}, t;
    }();e.default = n;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.version = "3.9.0", e.internalApiVersion = 12;var i = n(4);e.applyAll = i.applyAll, e.debounce = i.debounce, e.isInt = i.isInt, e.htmlEscape = i.htmlEscape, e.cssToStr = i.cssToStr, e.proxy = i.proxy, e.capitaliseFirstLetter = i.capitaliseFirstLetter, e.getOuterRect = i.getOuterRect, e.getClientRect = i.getClientRect, e.getContentRect = i.getContentRect, e.getScrollbarWidths = i.getScrollbarWidths, e.preventDefault = i.preventDefault, e.parseFieldSpecs = i.parseFieldSpecs, e.compareByFieldSpecs = i.compareByFieldSpecs, e.compareByFieldSpec = i.compareByFieldSpec, e.flexibleCompare = i.flexibleCompare, e.computeGreatestUnit = i.computeGreatestUnit, e.divideRangeByDuration = i.divideRangeByDuration, e.divideDurationByDuration = i.divideDurationByDuration, e.multiplyDuration = i.multiplyDuration, e.durationHasTime = i.durationHasTime, e.log = i.log, e.warn = i.warn, e.removeExact = i.removeExact, e.intersectRects = i.intersectRects;var r = n(47);e.formatDate = r.formatDate, e.formatRange = r.formatRange, e.queryMostGranularFormatUnit = r.queryMostGranularFormatUnit;var o = n(31);e.datepickerLocale = o.datepickerLocale, e.locale = o.locale;var s = n(10);e.moment = s.default;var a = n(11);e.EmitterMixin = a.default;var l = n(7);e.ListenerMixin = l.default;var u = n(48);e.Model = u.default;var d = n(207);e.Constraints = d.default;var c = n(5);e.UnzonedRange = c.default;var p = n(12);e.ComponentFootprint = p.default;var h = n(212);e.BusinessHourGenerator = h.default;var f = n(34);e.EventDef = f.default;var g = n(37);e.EventDefMutation = g.default;var v = n(38);e.EventSourceParser = v.default;var y = n(6);e.EventSource = y.default;var m = n(51);e.defineThemeSystem = m.defineThemeSystem;var b = n(18);e.EventInstanceGroup = b.default;var w = n(52);e.ArrayEventSource = w.default;var D = n(215);e.FuncEventSource = D.default;var E = n(216);e.JsonFeedEventSource = E.default;var S = n(36);e.EventFootprint = S.default;var C = n(33);e.Class = C.default;var R = n(14);e.Mixin = R.default;var T = n(53);e.CoordCache = T.default;var M = n(54);e.DragListener = M.default;var I = n(20);e.Promise = I.default;var H = n(217);e.TaskQueue = H.default;var P = n(218);e.RenderQueue = P.default;var _ = n(39);e.Scroller = _.default;var x = n(19);e.Theme = x.default;var O = n(219);e.DateComponent = O.default;var F = n(40);e.InteractiveDateComponent = F.default;var z = n(220);e.Calendar = z.default;var B = n(41);e.View = B.default;var A = n(22);e.defineView = A.defineView, e.getViewConfig = A.getViewConfig;var k = n(55);e.DayTableMixin = k.default;var L = n(56);e.BusinessHourRenderer = L.default;var V = n(42);e.EventRenderer = V.default;var G = n(57);e.FillRenderer = G.default;var N = n(58);e.HelperRenderer = N.default;var j = n(222);e.ExternalDropping = j.default;var U = n(223);e.EventResizing = U.default;var W = n(59);e.EventPointing = W.default;var q = n(224);e.EventDragging = q.default;var Y = n(225);e.DateSelecting = Y.default;var Z = n(60);e.StandardInteractionsMixin = Z.default;var Q = n(226);e.AgendaView = Q.default;var X = n(227);e.TimeGrid = X.default;var $ = n(61);e.DayGrid = $.default;var K = n(62);e.BasicView = K.default;var J = n(229);e.MonthView = J.default;var tt = n(230);e.ListView = tt.default;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(5),
        r = function () {
      function t(t, e, n) {
        this.start = t, this.end = e || null, this.unzonedRange = this.buildUnzonedRange(n);
      }return t.parse = function (e, n) {
        var i = e.start || e.date,
            r = e.end;if (!i) return !1;var o = n.calendar,
            s = o.moment(i),
            a = r ? o.moment(r) : null,
            l = e.allDay,
            u = o.opt("forceEventDuration");return !!s.isValid() && (!a || a.isValid() && a.isAfter(s) || (a = null), null == l && null == (l = n.allDayDefault) && (l = o.opt("allDayDefault")), !0 === l ? (s.stripTime(), a && a.stripTime()) : !1 === l && (s.hasTime() || s.time(0), a && !a.hasTime() && a.time(0)), !a && u && (a = o.getDefaultEventEnd(!s.hasTime(), s)), new t(s, a, o));
      }, t.isStandardProp = function (t) {
        return "start" === t || "date" === t || "end" === t || "allDay" === t;
      }, t.prototype.isAllDay = function () {
        return !(this.start.hasTime() || this.end && this.end.hasTime());
      }, t.prototype.buildUnzonedRange = function (t) {
        var e = this.start.clone().stripZone().valueOf(),
            n = this.getEnd(t).stripZone().valueOf();return new i.default(e, n);
      }, t.prototype.getEnd = function (t) {
        return this.end ? this.end.clone() : t.getDefaultEventEnd(this.isAllDay(), this.start);
      }, t;
    }();e.default = r;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(5),
        r = n(35),
        o = n(211),
        s = function () {
      function t(t) {
        this.eventInstances = t || [];
      }return t.prototype.getAllEventRanges = function (t) {
        return t ? this.sliceNormalRenderRanges(t) : this.eventInstances.map(r.eventInstanceToEventRange);
      }, t.prototype.sliceRenderRanges = function (t) {
        return this.isInverse() ? this.sliceInverseRenderRanges(t) : this.sliceNormalRenderRanges(t);
      }, t.prototype.sliceNormalRenderRanges = function (t) {
        var e,
            n,
            i,
            r = this.eventInstances,
            s = [];for (e = 0; e < r.length; e++) {
          n = r[e], (i = n.dateProfile.unzonedRange.intersect(t)) && s.push(new o.default(i, n.def, n));
        }return s;
      }, t.prototype.sliceInverseRenderRanges = function (t) {
        var e = this.eventInstances.map(r.eventInstanceToUnzonedRange),
            n = this.getEventDef();return e = i.default.invertRanges(e, t), e.map(function (t) {
          return new o.default(t, n);
        });
      }, t.prototype.isInverse = function () {
        return this.getEventDef().hasInverseRendering();
      }, t.prototype.getEventDef = function () {
        return this.explicitEventDef || this.eventInstances[0].def;
      }, t;
    }();e.default = s;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(3),
        r = function () {
      function t(t) {
        this.optionsManager = t, this.processIconOverride();
      }return t.prototype.processIconOverride = function () {
        this.iconOverrideOption && this.setIconOverride(this.optionsManager.get(this.iconOverrideOption));
      }, t.prototype.setIconOverride = function (t) {
        var e, n;if (i.isPlainObject(t)) {
          e = i.extend({}, this.iconClasses);for (n in t) {
            e[n] = this.applyIconOverridePrefix(t[n]);
          }this.iconClasses = e;
        } else !1 === t && (this.iconClasses = {});
      }, t.prototype.applyIconOverridePrefix = function (t) {
        var e = this.iconOverridePrefix;return e && 0 !== t.indexOf(e) && (t = e + t), t;
      }, t.prototype.getClass = function (t) {
        return this.classes[t] || "";
      }, t.prototype.getIconClass = function (t) {
        var e = this.iconClasses[t];return e ? this.baseIconClass + " " + e : "";
      }, t.prototype.getCustomButtonIconClass = function (t) {
        var e;return this.iconOverrideCustomButtonOption && (e = t[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(e) : "";
      }, t;
    }();e.default = r, r.prototype.classes = {}, r.prototype.iconClasses = {}, r.prototype.baseIconClass = "", r.prototype.iconOverridePrefix = "";
  }, function (t, e, n) {
    function i(t, e) {
      t.then = function (n) {
        return "function" == typeof n ? s.resolve(n(e)) : t;
      };
    }function r(t) {
      t.then = function (e, n) {
        return "function" == typeof n && n(), t;
      };
    }Object.defineProperty(e, "__esModule", { value: !0 });var o = n(3),
        s = { construct: function construct(t) {
        var e = o.Deferred(),
            n = e.promise();return "function" == typeof t && t(function (t) {
          e.resolve(t), i(n, t);
        }, function () {
          e.reject(), r(n);
        }), n;
      }, resolve: function resolve(t) {
        var e = o.Deferred().resolve(t),
            n = e.promise();return i(n, t), n;
      }, reject: function reject() {
        var t = o.Deferred().reject(),
            e = t.promise();return r(e), e;
      } };e.default = s;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(3),
        r = n(16),
        o = n(11),
        s = n(7);r.touchMouseIgnoreWait = 500;var a = null,
        l = 0,
        u = function () {
      function t() {
        this.isTouching = !1, this.mouseIgnoreDepth = 0;
      }return t.get = function () {
        return a || (a = new t(), a.bind()), a;
      }, t.needed = function () {
        t.get(), l++;
      }, t.unneeded = function () {
        --l || (a.unbind(), a = null);
      }, t.prototype.bind = function () {
        var t = this;this.listenTo(i(document), { touchstart: this.handleTouchStart, touchcancel: this.handleTouchCancel, touchend: this.handleTouchEnd, mousedown: this.handleMouseDown, mousemove: this.handleMouseMove, mouseup: this.handleMouseUp, click: this.handleClick, selectstart: this.handleSelectStart, contextmenu: this.handleContextMenu }), window.addEventListener("touchmove", this.handleTouchMoveProxy = function (e) {
          t.handleTouchMove(i.Event(e));
        }, { passive: !1 }), window.addEventListener("scroll", this.handleScrollProxy = function (e) {
          t.handleScroll(i.Event(e));
        }, !0);
      }, t.prototype.unbind = function () {
        this.stopListeningTo(i(document)), window.removeEventListener("touchmove", this.handleTouchMoveProxy), window.removeEventListener("scroll", this.handleScrollProxy, !0);
      }, t.prototype.handleTouchStart = function (t) {
        this.stopTouch(t, !0), this.isTouching = !0, this.trigger("touchstart", t);
      }, t.prototype.handleTouchMove = function (t) {
        this.isTouching && this.trigger("touchmove", t);
      }, t.prototype.handleTouchCancel = function (t) {
        this.isTouching && (this.trigger("touchcancel", t), this.stopTouch(t));
      }, t.prototype.handleTouchEnd = function (t) {
        this.stopTouch(t);
      }, t.prototype.handleMouseDown = function (t) {
        this.shouldIgnoreMouse() || this.trigger("mousedown", t);
      }, t.prototype.handleMouseMove = function (t) {
        this.shouldIgnoreMouse() || this.trigger("mousemove", t);
      }, t.prototype.handleMouseUp = function (t) {
        this.shouldIgnoreMouse() || this.trigger("mouseup", t);
      }, t.prototype.handleClick = function (t) {
        this.shouldIgnoreMouse() || this.trigger("click", t);
      }, t.prototype.handleSelectStart = function (t) {
        this.trigger("selectstart", t);
      }, t.prototype.handleContextMenu = function (t) {
        this.trigger("contextmenu", t);
      }, t.prototype.handleScroll = function (t) {
        this.trigger("scroll", t);
      }, t.prototype.stopTouch = function (t, e) {
        void 0 === e && (e = !1), this.isTouching && (this.isTouching = !1, this.trigger("touchend", t), e || this.startTouchMouseIgnore());
      }, t.prototype.startTouchMouseIgnore = function () {
        var t = this,
            e = r.touchMouseIgnoreWait;e && (this.mouseIgnoreDepth++, setTimeout(function () {
          t.mouseIgnoreDepth--;
        }, e));
      }, t.prototype.shouldIgnoreMouse = function () {
        return this.isTouching || Boolean(this.mouseIgnoreDepth);
      }, t;
    }();e.default = u, s.default.mixInto(u), o.default.mixInto(u);
  }, function (t, e, n) {
    function i(t, n) {
      e.viewHash[t] = n;
    }function r(t) {
      return e.viewHash[t];
    }Object.defineProperty(e, "__esModule", { value: !0 });var o = n(16);e.viewHash = {}, o.views = e.viewHash, e.defineView = i, e.getViewConfig = r;
  }, function (t, e, n) {
    function i(t, e) {
      return !t && !e || !(!t || !e) && t.component === e.component && r(t, e) && r(e, t);
    }function r(t, e) {
      for (var n in t) {
        if (!/^(component|left|right|top|bottom)$/.test(n) && t[n] !== e[n]) return !1;
      }return !0;
    }Object.defineProperty(e, "__esModule", { value: !0 });var o = n(2),
        s = n(4),
        a = n(54),
        l = function (t) {
      function e(e, n) {
        var i = t.call(this, n) || this;return i.component = e, i;
      }return o.__extends(e, t), e.prototype.handleInteractionStart = function (e) {
        var n,
            i,
            r,
            o = this.subjectEl;this.component.hitsNeeded(), this.computeScrollBounds(), e ? (i = { left: s.getEvX(e), top: s.getEvY(e) }, r = i, o && (n = s.getOuterRect(o), r = s.constrainPoint(r, n)), this.origHit = this.queryHit(r.left, r.top), o && this.options.subjectCenter && (this.origHit && (n = s.intersectRects(this.origHit, n) || n), r = s.getRectCenter(n)), this.coordAdjust = s.diffPoints(r, i)) : (this.origHit = null, this.coordAdjust = null), t.prototype.handleInteractionStart.call(this, e);
      }, e.prototype.handleDragStart = function (e) {
        var n;t.prototype.handleDragStart.call(this, e), (n = this.queryHit(s.getEvX(e), s.getEvY(e))) && this.handleHitOver(n);
      }, e.prototype.handleDrag = function (e, n, r) {
        var o;t.prototype.handleDrag.call(this, e, n, r), o = this.queryHit(s.getEvX(r), s.getEvY(r)), i(o, this.hit) || (this.hit && this.handleHitOut(), o && this.handleHitOver(o));
      }, e.prototype.handleDragEnd = function (e) {
        this.handleHitDone(), t.prototype.handleDragEnd.call(this, e);
      }, e.prototype.handleHitOver = function (t) {
        var e = i(t, this.origHit);this.hit = t, this.trigger("hitOver", this.hit, e, this.origHit);
      }, e.prototype.handleHitOut = function () {
        this.hit && (this.trigger("hitOut", this.hit), this.handleHitDone(), this.hit = null);
      }, e.prototype.handleHitDone = function () {
        this.hit && this.trigger("hitDone", this.hit);
      }, e.prototype.handleInteractionEnd = function (e, n) {
        t.prototype.handleInteractionEnd.call(this, e, n), this.origHit = null, this.hit = null, this.component.hitsNotNeeded();
      }, e.prototype.handleScrollEnd = function () {
        t.prototype.handleScrollEnd.call(this), this.isDragging && (this.component.releaseHits(), this.component.prepareHits());
      }, e.prototype.queryHit = function (t, e) {
        return this.coordAdjust && (t += this.coordAdjust.left, e += this.coordAdjust.top), this.component.queryHit(t, e);
      }, e;
    }(a.default);e.default = l;
  },,,,,,,, function (t, e, n) {
    function i(t) {
      a.each(f, function (e, n) {
        null == t[e] && (t[e] = n(t));
      });
    }function r(t, n, i) {
      var r = e.localeOptionHash[t] || (e.localeOptionHash[t] = {});r.isRTL = i.isRTL, r.weekNumberTitle = i.weekHeader, a.each(p, function (t, e) {
        r[t] = e(i);
      });var o = a.datepicker;o && (o.regional[n] = o.regional[t] = i, o.regional.en = o.regional[""], o.setDefaults(i));
    }function o(t, n) {
      var i, r;i = e.localeOptionHash[t] || (e.localeOptionHash[t] = {}), n && (i = e.localeOptionHash[t] = d.mergeOptions([i, n])), r = s(t), a.each(h, function (t, e) {
        null == i[t] && (i[t] = e(r, i));
      }), d.globalDefaults.locale = t;
    }function s(t) {
      return l.localeData(t) || l.localeData("en");
    }Object.defineProperty(e, "__esModule", { value: !0 });var a = n(3),
        l = n(0),
        u = n(16),
        d = n(32),
        c = n(4);e.localeOptionHash = {}, u.locales = e.localeOptionHash;var p = { buttonText: function buttonText(t) {
        return { prev: c.stripHtmlEntities(t.prevText), next: c.stripHtmlEntities(t.nextText), today: c.stripHtmlEntities(t.currentText) };
      }, monthYearFormat: function monthYearFormat(t) {
        return t.showMonthAfterYear ? "YYYY[" + t.yearSuffix + "] MMMM" : "MMMM YYYY[" + t.yearSuffix + "]";
      } },
        h = { dayOfMonthFormat: function dayOfMonthFormat(t, e) {
        var n = t.longDateFormat("l");return n = n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), e.isRTL ? n += " ddd" : n = "ddd " + n, n;
      },
      mediumTimeFormat: function mediumTimeFormat(t) {
        return t.longDateFormat("LT").replace(/\s*a$/i, "a");
      }, smallTimeFormat: function smallTimeFormat(t) {
        return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a");
      }, extraSmallTimeFormat: function extraSmallTimeFormat(t) {
        return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t");
      }, hourFormat: function hourFormat(t) {
        return t.longDateFormat("LT").replace(":mm", "").replace(/(\Wmm)$/, "").replace(/\s*a$/i, "a");
      }, noMeridiemTimeFormat: function noMeridiemTimeFormat(t) {
        return t.longDateFormat("LT").replace(/\s*a$/i, "");
      } },
        f = { smallDayDateFormat: function smallDayDateFormat(t) {
        return t.isRTL ? "D dd" : "dd D";
      }, weekFormat: function weekFormat(t) {
        return t.isRTL ? "w[ " + t.weekNumberTitle + "]" : "[" + t.weekNumberTitle + " ]w";
      }, smallWeekFormat: function smallWeekFormat(t) {
        return t.isRTL ? "w[" + t.weekNumberTitle + "]" : "[" + t.weekNumberTitle + "]w";
      } };e.populateInstanceComputableOptions = i, e.datepickerLocale = r, e.locale = o, e.getMomentLocaleData = s, o("en", d.englishDefaults);
  }, function (t, e, n) {
    function i(t) {
      return r.mergeProps(t, o);
    }Object.defineProperty(e, "__esModule", { value: !0 });var r = n(4);e.globalDefaults = { titleRangeSeparator: " – ", monthYearFormat: "MMMM YYYY", defaultTimedEventDuration: "02:00:00", defaultAllDayEventDuration: { days: 1 }, forceEventDuration: !1, nextDayThreshold: "09:00:00", columnHeader: !0, defaultView: "month", aspectRatio: 1.35, header: { left: "title", center: "", right: "today prev,next" }, weekends: !0, weekNumbers: !1, weekNumberTitle: "W", weekNumberCalculation: "local", scrollTime: "06:00:00", minTime: "00:00:00", maxTime: "24:00:00", showNonCurrentDates: !0, lazyFetching: !0, startParam: "start", endParam: "end", timezoneParam: "timezone", timezone: !1, locale: null, isRTL: !1, buttonText: { prev: "prev", next: "next", prevYear: "prev year", nextYear: "next year", year: "year", today: "today", month: "month", week: "week", day: "day" }, allDayText: "all-day", agendaEventMinHeight: 0, theme: !1, dragOpacity: .75, dragRevertDuration: 500, dragScroll: !0, unselectAuto: !0, dropAccept: "*", eventOrder: "title", eventLimit: !1, eventLimitText: "more", eventLimitClick: "popover", dayPopoverFormat: "LL", handleWindowResize: !0, windowResizeDelay: 100, longPressDelay: 1e3 }, e.englishDefaults = { dayPopoverFormat: "dddd, MMMM D" }, e.rtlDefaults = { header: { left: "next,prev today", center: "", right: "title" }, buttonIcons: { prev: "right-single-arrow", next: "left-single-arrow", prevYear: "right-double-arrow", nextYear: "left-double-arrow" }, themeButtonIcons: { prev: "circle-triangle-e", next: "circle-triangle-w", nextYear: "seek-prev", prevYear: "seek-next" } };var o = ["header", "footer", "buttonText", "buttonIcons", "themeButtonIcons"];e.mergeOptions = i;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(4),
        o = function () {
      function t() {}return t.extend = function (t) {
        var e = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this;
          }return i.__extends(e, t), e;
        }(this);return r.copyOwnProps(t, e.prototype), e;
      }, t.mixin = function (t) {
        r.copyOwnProps(t, this.prototype);
      }, t;
    }();e.default = o;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(3),
        r = n(208),
        o = function () {
      function t(t) {
        this.source = t, this.className = [], this.miscProps = {};
      }return t.parse = function (t, e) {
        var n = new this(e);return !!n.applyProps(t) && n;
      }, t.normalizeId = function (t) {
        return String(t);
      }, t.generateId = function () {
        return "_fc" + t.uuid++;
      }, t.prototype.clone = function () {
        var e = new this.constructor(this.source);return e.id = this.id, e.rawId = this.rawId, e.uid = this.uid, t.copyVerbatimStandardProps(this, e), e.className = this.className.slice(), e.miscProps = i.extend({}, this.miscProps), e;
      }, t.prototype.hasInverseRendering = function () {
        return "inverse-background" === this.getRendering();
      }, t.prototype.hasBgRendering = function () {
        var t = this.getRendering();return "inverse-background" === t || "background" === t;
      }, t.prototype.getRendering = function () {
        return null != this.rendering ? this.rendering : this.source.rendering;
      }, t.prototype.getConstraint = function () {
        return null != this.constraint ? this.constraint : null != this.source.constraint ? this.source.constraint : this.source.calendar.opt("eventConstraint");
      }, t.prototype.getOverlap = function () {
        return null != this.overlap ? this.overlap : null != this.source.overlap ? this.source.overlap : this.source.calendar.opt("eventOverlap");
      }, t.prototype.isStartExplicitlyEditable = function () {
        return null != this.startEditable ? this.startEditable : this.source.startEditable;
      }, t.prototype.isDurationExplicitlyEditable = function () {
        return null != this.durationEditable ? this.durationEditable : this.source.durationEditable;
      }, t.prototype.isExplicitlyEditable = function () {
        return null != this.editable ? this.editable : this.source.editable;
      }, t.prototype.toLegacy = function () {
        var e = i.extend({}, this.miscProps);return e._id = this.uid, e.source = this.source, e.className = this.className.slice(), e.allDay = this.isAllDay(), null != this.rawId && (e.id = this.rawId), t.copyVerbatimStandardProps(this, e), e;
      }, t.prototype.applyManualStandardProps = function (e) {
        return null != e.id ? this.id = t.normalizeId(this.rawId = e.id) : this.id = t.generateId(), null != e._id ? this.uid = String(e._id) : this.uid = t.generateId(), i.isArray(e.className) && (this.className = e.className), "string" == typeof e.className && (this.className = e.className.split(/\s+/)), !0;
      }, t.prototype.applyMiscProps = function (t) {
        i.extend(this.miscProps, t);
      }, t.uuid = 0, t.defineStandardProps = r.default.defineStandardProps, t.copyVerbatimStandardProps = r.default.copyVerbatimStandardProps, t;
    }();e.default = o, r.default.mixInto(o), o.defineStandardProps({ _id: !1, id: !1, className: !1, source: !1, title: !0, url: !0, rendering: !0, constraint: !0, overlap: !0, editable: !0, startEditable: !0, durationEditable: !0, color: !0, backgroundColor: !0, borderColor: !0, textColor: !0 });
  }, function (t, e, n) {
    function i(t, e) {
      var n,
          i = [];for (n = 0; n < t.length; n++) {
        i.push.apply(i, t[n].buildInstances(e));
      }return i;
    }function r(t) {
      return new l.default(t.dateProfile.unzonedRange, t.def, t);
    }function o(t) {
      return new u.default(new d.default(t.unzonedRange, t.eventDef.isAllDay()), t.eventDef, t.eventInstance);
    }function s(t) {
      return t.dateProfile.unzonedRange;
    }function a(t) {
      return t.componentFootprint;
    }Object.defineProperty(e, "__esModule", { value: !0 });var l = n(211),
        u = n(36),
        d = n(12);e.eventDefsToEventInstances = i, e.eventInstanceToEventRange = r, e.eventRangeToEventFootprint = o, e.eventInstanceToUnzonedRange = s, e.eventFootprintToComponentFootprint = a;
  }, function (t, e) {
    Object.defineProperty(e, "__esModule", { value: !0 });var n = function () {
      function t(t, e, n) {
        this.componentFootprint = t, this.eventDef = e, n && (this.eventInstance = n);
      }return t.prototype.getEventLegacy = function () {
        return (this.eventInstance || this.eventDef).toLegacy();
      }, t;
    }();e.default = n;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(4),
        r = n(17),
        o = n(34),
        s = n(50),
        a = n(13),
        l = function () {
      function t() {}return t.createFromRawProps = function (e, n, a) {
        var l,
            u,
            d,
            c,
            p = e.def,
            h = {},
            f = {},
            g = {},
            v = {},
            y = null,
            m = null;for (l in n) {
          r.default.isStandardProp(l) ? h[l] = n[l] : p.isStandardProp(l) ? f[l] = n[l] : p.miscProps[l] !== n[l] && (g[l] = n[l]);
        }return u = r.default.parse(h, p.source), u && (d = s.default.createFromDiff(e.dateProfile, u, a)), f.id !== p.id && (y = f.id), i.isArraysEqual(f.className, p.className) || (m = f.className), o.default.copyVerbatimStandardProps(f, v), c = new t(), c.eventDefId = y, c.className = m, c.verbatimStandardProps = v, c.miscProps = g, d && (c.dateMutation = d), c;
      }, t.prototype.mutateSingle = function (t) {
        var e;return this.dateMutation && (e = t.dateProfile, t.dateProfile = this.dateMutation.buildNewDateProfile(e, t.source.calendar)), null != this.eventDefId && (t.id = o.default.normalizeId(t.rawId = this.eventDefId)), this.className && (t.className = this.className), this.verbatimStandardProps && a.default.copyVerbatimStandardProps(this.verbatimStandardProps, t), this.miscProps && t.applyMiscProps(this.miscProps), e ? function () {
          t.dateProfile = e;
        } : function () {};
      }, t.prototype.setDateMutation = function (t) {
        t && !t.isEmpty() ? this.dateMutation = t : this.dateMutation = null;
      }, t.prototype.isEmpty = function () {
        return !this.dateMutation;
      }, t;
    }();e.default = l;
  }, function (t, e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = { sourceClasses: [], registerClass: function registerClass(t) {
        this.sourceClasses.unshift(t);
      }, parse: function parse(t, e) {
        var n,
            i,
            r = this.sourceClasses;for (n = 0; n < r.length; n++) {
          if (i = r[n].parse(t, e)) return i;
        }
      } };
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(4),
        s = n(33),
        a = function (t) {
      function e(e) {
        var n = t.call(this) || this;return e = e || {}, n.overflowX = e.overflowX || e.overflow || "auto", n.overflowY = e.overflowY || e.overflow || "auto", n;
      }return i.__extends(e, t), e.prototype.render = function () {
        this.el = this.renderEl(), this.applyOverflow();
      }, e.prototype.renderEl = function () {
        return this.scrollEl = r('<div class="fc-scroller"></div>');
      }, e.prototype.clear = function () {
        this.setHeight("auto"), this.applyOverflow();
      }, e.prototype.destroy = function () {
        this.el.remove();
      }, e.prototype.applyOverflow = function () {
        this.scrollEl.css({ "overflow-x": this.overflowX, "overflow-y": this.overflowY });
      }, e.prototype.lockOverflow = function (t) {
        var e = this.overflowX,
            n = this.overflowY;t = t || this.getScrollbarWidths(), "auto" === e && (e = t.top || t.bottom || this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth ? "scroll" : "hidden"), "auto" === n && (n = t.left || t.right || this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight ? "scroll" : "hidden"), this.scrollEl.css({ "overflow-x": e, "overflow-y": n });
      }, e.prototype.setHeight = function (t) {
        this.scrollEl.height(t);
      }, e.prototype.getScrollTop = function () {
        return this.scrollEl.scrollTop();
      }, e.prototype.setScrollTop = function (t) {
        this.scrollEl.scrollTop(t);
      }, e.prototype.getClientWidth = function () {
        return this.scrollEl[0].clientWidth;
      }, e.prototype.getClientHeight = function () {
        return this.scrollEl[0].clientHeight;
      }, e.prototype.getScrollbarWidths = function () {
        return o.getScrollbarWidths(this.scrollEl);
      }, e;
    }(s.default);e.default = a;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(4),
        s = n(219),
        a = n(21),
        l = function (t) {
      function e(e, n) {
        var i = t.call(this, e, n) || this;return i.segSelector = ".fc-event-container > *", i.dateSelectingClass && (i.dateClicking = new i.dateClickingClass(i)), i.dateSelectingClass && (i.dateSelecting = new i.dateSelectingClass(i)), i.eventPointingClass && (i.eventPointing = new i.eventPointingClass(i)), i.eventDraggingClass && i.eventPointing && (i.eventDragging = new i.eventDraggingClass(i, i.eventPointing)), i.eventResizingClass && i.eventPointing && (i.eventResizing = new i.eventResizingClass(i, i.eventPointing)), i.externalDroppingClass && (i.externalDropping = new i.externalDroppingClass(i)), i;
      }return i.__extends(e, t), e.prototype.setElement = function (e) {
        t.prototype.setElement.call(this, e), this.dateClicking && this.dateClicking.bindToEl(e), this.dateSelecting && this.dateSelecting.bindToEl(e), this.bindAllSegHandlersToEl(e);
      }, e.prototype.removeElement = function () {
        this.endInteractions(), t.prototype.removeElement.call(this);
      }, e.prototype.executeEventUnrender = function () {
        this.endInteractions(), t.prototype.executeEventUnrender.call(this);
      }, e.prototype.bindGlobalHandlers = function () {
        t.prototype.bindGlobalHandlers.call(this), this.externalDropping && this.externalDropping.bindToDocument();
      }, e.prototype.unbindGlobalHandlers = function () {
        t.prototype.unbindGlobalHandlers.call(this), this.externalDropping && this.externalDropping.unbindFromDocument();
      }, e.prototype.bindDateHandlerToEl = function (t, e, n) {
        var i = this;this.el.on(e, function (t) {
          if (!r(t.target).is(i.segSelector + ":not(.fc-helper)," + i.segSelector + ":not(.fc-helper) *,.fc-more,a[data-goto]")) return n.call(i, t);
        });
      }, e.prototype.bindAllSegHandlersToEl = function (t) {
        [this.eventPointing, this.eventDragging, this.eventResizing].forEach(function (e) {
          e && e.bindToEl(t);
        });
      }, e.prototype.bindSegHandlerToEl = function (t, e, n) {
        var i = this;t.on(e, this.segSelector, function (t) {
          var e = r(t.currentTarget);if (!e.is(".fc-helper")) {
            var o = e.data("fc-seg");if (o && !i.shouldIgnoreEventPointing()) return n.call(i, o, t);
          }
        });
      }, e.prototype.shouldIgnoreMouse = function () {
        return a.default.get().shouldIgnoreMouse();
      }, e.prototype.shouldIgnoreTouch = function () {
        var t = this._getView();return t.isSelected || t.selectedEvent;
      }, e.prototype.shouldIgnoreEventPointing = function () {
        return this.eventDragging && this.eventDragging.isDragging || this.eventResizing && this.eventResizing.isResizing;
      }, e.prototype.canStartSelection = function (t, e) {
        return o.getEvIsTouch(e) && !this.canStartResize(t, e) && (this.isEventDefDraggable(t.footprint.eventDef) || this.isEventDefResizable(t.footprint.eventDef));
      }, e.prototype.canStartDrag = function (t, e) {
        return !this.canStartResize(t, e) && this.isEventDefDraggable(t.footprint.eventDef);
      }, e.prototype.canStartResize = function (t, e) {
        var n = this._getView(),
            i = t.footprint.eventDef;return (!o.getEvIsTouch(e) || n.isEventDefSelected(i)) && this.isEventDefResizable(i) && r(e.target).is(".fc-resizer");
      }, e.prototype.endInteractions = function () {
        [this.dateClicking, this.dateSelecting, this.eventPointing, this.eventDragging, this.eventResizing].forEach(function (t) {
          t && t.end();
        });
      }, e.prototype.isEventDefDraggable = function (t) {
        return this.isEventDefStartEditable(t);
      }, e.prototype.isEventDefStartEditable = function (t) {
        var e = t.isStartExplicitlyEditable();return null == e && null == (e = this.opt("eventStartEditable")) && (e = this.isEventDefGenerallyEditable(t)), e;
      }, e.prototype.isEventDefGenerallyEditable = function (t) {
        var e = t.isExplicitlyEditable();return null == e && (e = this.opt("editable")), e;
      }, e.prototype.isEventDefResizableFromStart = function (t) {
        return this.opt("eventResizableFromStart") && this.isEventDefResizable(t);
      }, e.prototype.isEventDefResizableFromEnd = function (t) {
        return this.isEventDefResizable(t);
      }, e.prototype.isEventDefResizable = function (t) {
        var e = t.isDurationExplicitlyEditable();return null == e && null == (e = this.opt("eventDurationEditable")) && (e = this.isEventDefGenerallyEditable(t)), e;
      }, e.prototype.diffDates = function (t, e) {
        return this.largeUnit ? o.diffByUnit(t, e, this.largeUnit) : o.diffDayTime(t, e);
      }, e.prototype.isEventInstanceGroupAllowed = function (t) {
        var e,
            n = this._getView(),
            i = this.dateProfile,
            r = this.eventRangesToEventFootprints(t.getAllEventRanges());for (e = 0; e < r.length; e++) {
          if (!i.validUnzonedRange.containsRange(r[e].componentFootprint.unzonedRange)) return !1;
        }return n.calendar.constraints.isEventInstanceGroupAllowed(t);
      }, e.prototype.isExternalInstanceGroupAllowed = function (t) {
        var e,
            n = this._getView(),
            i = this.dateProfile,
            r = this.eventRangesToEventFootprints(t.getAllEventRanges());for (e = 0; e < r.length; e++) {
          if (!i.validUnzonedRange.containsRange(r[e].componentFootprint.unzonedRange)) return !1;
        }for (e = 0; e < r.length; e++) {
          if (!n.calendar.constraints.isSelectionFootprintAllowed(r[e].componentFootprint)) return !1;
        }return !0;
      }, e;
    }(s.default);e.default = l;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(0),
        s = n(4),
        a = n(218),
        l = n(221),
        u = n(40),
        d = n(21),
        c = n(5),
        p = function (t) {
      function e(e, n) {
        var i = t.call(this, null, n.options) || this;return i.batchRenderDepth = 0, i.isSelected = !1, i.calendar = e, i.viewSpec = n, i.type = n.type, i.name = i.type, i.initRenderQueue(), i.initHiddenDays(), i.dateProfileGenerator = new i.dateProfileGeneratorClass(i), i.bindBaseRenderHandlers(), i.eventOrderSpecs = s.parseFieldSpecs(i.opt("eventOrder")), i.initialize && i.initialize(), i;
      }return i.__extends(e, t), e.prototype._getView = function () {
        return this;
      }, e.prototype.opt = function (t) {
        return this.options[t];
      }, e.prototype.initRenderQueue = function () {
        this.renderQueue = new a.default({ event: this.opt("eventRenderWait") }), this.renderQueue.on("start", this.onRenderQueueStart.bind(this)), this.renderQueue.on("stop", this.onRenderQueueStop.bind(this)), this.on("before:change", this.startBatchRender), this.on("change", this.stopBatchRender);
      }, e.prototype.onRenderQueueStart = function () {
        this.calendar.freezeContentHeight(), this.addScroll(this.queryScroll());
      }, e.prototype.onRenderQueueStop = function () {
        this.calendar.updateViewSize() && this.popScroll(), this.calendar.thawContentHeight();
      }, e.prototype.startBatchRender = function () {
        this.batchRenderDepth++ || this.renderQueue.pause();
      }, e.prototype.stopBatchRender = function () {
        --this.batchRenderDepth || this.renderQueue.resume();
      }, e.prototype.requestRender = function (t, e, n) {
        this.renderQueue.queue(t, e, n);
      }, e.prototype.whenSizeUpdated = function (t) {
        this.renderQueue.isRunning ? this.renderQueue.one("stop", t.bind(this)) : t.call(this);
      }, e.prototype.computeTitle = function (t) {
        var e;return e = /^(year|month)$/.test(t.currentRangeUnit) ? t.currentUnzonedRange : t.activeUnzonedRange, this.formatRange({ start: this.calendar.msToMoment(e.startMs, t.isRangeAllDay), end: this.calendar.msToMoment(e.endMs, t.isRangeAllDay) }, t.isRangeAllDay, this.opt("titleFormat") || this.computeTitleFormat(t), this.opt("titleRangeSeparator"));
      }, e.prototype.computeTitleFormat = function (t) {
        var e = t.currentRangeUnit;return "year" === e ? "YYYY" : "month" === e ? this.opt("monthYearFormat") : t.currentUnzonedRange.as("days") > 1 ? "ll" : "LL";
      }, e.prototype.setDate = function (t) {
        var e = this.get("dateProfile"),
            n = this.dateProfileGenerator.build(t, void 0, !0);e && e.activeUnzonedRange.equals(n.activeUnzonedRange) || this.set("dateProfile", n);
      }, e.prototype.unsetDate = function () {
        this.unset("dateProfile");
      }, e.prototype.fetchInitialEvents = function (t) {
        var e = this.calendar,
            n = t.isRangeAllDay && !this.usesMinMaxTime;return e.requestEvents(e.msToMoment(t.activeUnzonedRange.startMs, n), e.msToMoment(t.activeUnzonedRange.endMs, n));
      }, e.prototype.bindEventChanges = function () {
        this.listenTo(this.calendar, "eventsReset", this.resetEvents);
      }, e.prototype.unbindEventChanges = function () {
        this.stopListeningTo(this.calendar, "eventsReset");
      }, e.prototype.setEvents = function (t) {
        this.set("currentEvents", t), this.set("hasEvents", !0);
      }, e.prototype.unsetEvents = function () {
        this.unset("currentEvents"), this.unset("hasEvents");
      }, e.prototype.resetEvents = function (t) {
        this.startBatchRender(), this.unsetEvents(), this.setEvents(t), this.stopBatchRender();
      }, e.prototype.requestDateRender = function (t) {
        var e = this;this.requestRender(function () {
          e.executeDateRender(t);
        }, "date", "init");
      }, e.prototype.requestDateUnrender = function () {
        var t = this;this.requestRender(function () {
          t.executeDateUnrender();
        }, "date", "destroy");
      }, e.prototype.executeDateRender = function (e) {
        t.prototype.executeDateRender.call(this, e), this.render && this.render(), this.trigger("datesRendered"), this.addScroll({ isDateInit: !0 }), this.startNowIndicator();
      }, e.prototype.executeDateUnrender = function () {
        this.unselect(), this.stopNowIndicator(), this.trigger("before:datesUnrendered"), this.destroy && this.destroy(), t.prototype.executeDateUnrender.call(this);
      }, e.prototype.bindBaseRenderHandlers = function () {
        var t = this;this.on("datesRendered", function () {
          t.whenSizeUpdated(t.triggerViewRender);
        }), this.on("before:datesUnrendered", function () {
          t.triggerViewDestroy();
        });
      }, e.prototype.triggerViewRender = function () {
        this.publiclyTrigger("viewRender", { context: this, args: [this, this.el] });
      }, e.prototype.triggerViewDestroy = function () {
        this.publiclyTrigger("viewDestroy", { context: this, args: [this, this.el] });
      }, e.prototype.requestEventsRender = function (t) {
        var e = this;this.requestRender(function () {
          e.executeEventRender(t), e.whenSizeUpdated(e.triggerAfterEventsRendered);
        }, "event", "init");
      }, e.prototype.requestEventsUnrender = function () {
        var t = this;this.requestRender(function () {
          t.triggerBeforeEventsDestroyed(), t.executeEventUnrender();
        }, "event", "destroy");
      }, e.prototype.requestBusinessHoursRender = function (t) {
        var e = this;this.requestRender(function () {
          e.renderBusinessHours(t);
        }, "businessHours", "init");
      }, e.prototype.requestBusinessHoursUnrender = function () {
        var t = this;this.requestRender(function () {
          t.unrenderBusinessHours();
        }, "businessHours", "destroy");
      }, e.prototype.bindGlobalHandlers = function () {
        t.prototype.bindGlobalHandlers.call(this), this.listenTo(d.default.get(), { touchstart: this.processUnselect, mousedown: this.handleDocumentMousedown });
      }, e.prototype.unbindGlobalHandlers = function () {
        t.prototype.unbindGlobalHandlers.call(this), this.stopListeningTo(d.default.get());
      }, e.prototype.startNowIndicator = function () {
        var t,
            e,
            n,
            i = this;this.opt("nowIndicator") && (t = this.getNowIndicatorUnit()) && (e = s.proxy(this, "updateNowIndicator"), this.initialNowDate = this.calendar.getNow(), this.initialNowQueriedMs = new Date().valueOf(), n = this.initialNowDate.clone().startOf(t).add(1, t).valueOf() - this.initialNowDate.valueOf(), this.nowIndicatorTimeoutID = setTimeout(function () {
          i.nowIndicatorTimeoutID = null, e(), n = +o.duration(1, t), n = Math.max(100, n), i.nowIndicatorIntervalID = setInterval(e, n);
        }, n));
      }, e.prototype.updateNowIndicator = function () {
        this.isDatesRendered && this.initialNowDate && (this.unrenderNowIndicator(), this.renderNowIndicator(this.initialNowDate.clone().add(new Date().valueOf() - this.initialNowQueriedMs)), this.isNowIndicatorRendered = !0);
      }, e.prototype.stopNowIndicator = function () {
        this.isNowIndicatorRendered && (this.nowIndicatorTimeoutID && (clearTimeout(this.nowIndicatorTimeoutID), this.nowIndicatorTimeoutID = null), this.nowIndicatorIntervalID && (clearInterval(this.nowIndicatorIntervalID), this.nowIndicatorIntervalID = null), this.unrenderNowIndicator(), this.isNowIndicatorRendered = !1);
      }, e.prototype.updateSize = function (e, n, i) {
        this.setHeight ? this.setHeight(e, n) : t.prototype.updateSize.call(this, e, n, i), this.updateNowIndicator();
      }, e.prototype.addScroll = function (t) {
        var e = this.queuedScroll || (this.queuedScroll = {});r.extend(e, t);
      }, e.prototype.popScroll = function () {
        this.applyQueuedScroll(), this.queuedScroll = null;
      }, e.prototype.applyQueuedScroll = function () {
        this.queuedScroll && this.applyScroll(this.queuedScroll);
      }, e.prototype.queryScroll = function () {
        var t = {};return this.isDatesRendered && r.extend(t, this.queryDateScroll()), t;
      }, e.prototype.applyScroll = function (t) {
        t.isDateInit && this.isDatesRendered && r.extend(t, this.computeInitialDateScroll()), this.isDatesRendered && this.applyDateScroll(t);
      }, e.prototype.computeInitialDateScroll = function () {
        return {};
      }, e.prototype.queryDateScroll = function () {
        return {};
      }, e.prototype.applyDateScroll = function (t) {}, e.prototype.reportEventDrop = function (t, e, n, i) {
        var r = this.calendar.eventManager,
            s = r.mutateEventsWithId(t.def.id, e),
            a = e.dateMutation;a && (t.dateProfile = a.buildNewDateProfile(t.dateProfile, this.calendar)), this.triggerEventDrop(t, a && a.dateDelta || o.duration(), s, n, i);
      }, e.prototype.triggerEventDrop = function (t, e, n, i, r) {
        this.publiclyTrigger("eventDrop", { context: i[0], args: [t.toLegacy(), e, n, r, {}, this] });
      }, e.prototype.reportExternalDrop = function (t, e, n, i, r, o) {
        e && this.calendar.eventManager.addEventDef(t, n), this.triggerExternalDrop(t, e, i, r, o);
      }, e.prototype.triggerExternalDrop = function (t, e, n, i, r) {
        this.publiclyTrigger("drop", { context: n[0], args: [t.dateProfile.start.clone(), i, r, this] }), e && this.publiclyTrigger("eventReceive", { context: this, args: [t.buildInstance().toLegacy(), this] });
      }, e.prototype.reportEventResize = function (t, e, n, i) {
        var r = this.calendar.eventManager,
            o = r.mutateEventsWithId(t.def.id, e);t.dateProfile = e.dateMutation.buildNewDateProfile(t.dateProfile, this.calendar), this.triggerEventResize(t, e.dateMutation.endDelta, o, n, i);
      }, e.prototype.triggerEventResize = function (t, e, n, i, r) {
        this.publiclyTrigger("eventResize", { context: i[0], args: [t.toLegacy(), e, n, r, {}, this] });
      }, e.prototype.select = function (t, e) {
        this.unselect(e), this.renderSelectionFootprint(t), this.reportSelection(t, e);
      }, e.prototype.renderSelectionFootprint = function (e) {
        this.renderSelection ? this.renderSelection(e.toLegacy(this.calendar)) : t.prototype.renderSelectionFootprint.call(this, e);
      }, e.prototype.reportSelection = function (t, e) {
        this.isSelected = !0, this.triggerSelect(t, e);
      }, e.prototype.triggerSelect = function (t, e) {
        var n = this.calendar.footprintToDateProfile(t);this.publiclyTrigger("select", { context: this, args: [n.start, n.end, e, this] });
      }, e.prototype.unselect = function (t) {
        this.isSelected && (this.isSelected = !1, this.destroySelection && this.destroySelection(), this.unrenderSelection(), this.publiclyTrigger("unselect", { context: this, args: [t, this] }));
      }, e.prototype.selectEventInstance = function (t) {
        this.selectedEventInstance && this.selectedEventInstance === t || (this.unselectEventInstance(), this.getEventSegs().forEach(function (e) {
          e.footprint.eventInstance === t && e.el && e.el.addClass("fc-selected");
        }), this.selectedEventInstance = t);
      }, e.prototype.unselectEventInstance = function () {
        this.selectedEventInstance && (this.getEventSegs().forEach(function (t) {
          t.el && t.el.removeClass("fc-selected");
        }), this.selectedEventInstance = null);
      }, e.prototype.isEventDefSelected = function (t) {
        return this.selectedEventInstance && this.selectedEventInstance.def.id === t.id;
      }, e.prototype.handleDocumentMousedown = function (t) {
        s.isPrimaryMouseButton(t) && this.processUnselect(t);
      }, e.prototype.processUnselect = function (t) {
        this.processRangeUnselect(t), this.processEventUnselect(t);
      }, e.prototype.processRangeUnselect = function (t) {
        var e;this.isSelected && this.opt("unselectAuto") && ((e = this.opt("unselectCancel")) && r(t.target).closest(e).length || this.unselect(t));
      }, e.prototype.processEventUnselect = function (t) {
        this.selectedEventInstance && (r(t.target).closest(".fc-selected").length || this.unselectEventInstance());
      }, e.prototype.triggerBaseRendered = function () {
        this.publiclyTrigger("viewRender", { context: this, args: [this, this.el] });
      }, e.prototype.triggerBaseUnrendered = function () {
        this.publiclyTrigger("viewDestroy", { context: this, args: [this, this.el] });
      }, e.prototype.triggerDayClick = function (t, e, n) {
        var i = this.calendar.footprintToDateProfile(t);this.publiclyTrigger("dayClick", { context: e, args: [i.start, n, this] });
      }, e.prototype.isDateInOtherMonth = function (t, e) {
        return !1;
      }, e.prototype.getUnzonedRangeOption = function (t) {
        var e = this.opt(t);if ("function" == typeof e && (e = e.apply(null, Array.prototype.slice.call(arguments, 1))), e) return this.calendar.parseUnzonedRange(e);
      }, e.prototype.initHiddenDays = function () {
        var t,
            e = this.opt("hiddenDays") || [],
            n = [],
            i = 0;for (!1 === this.opt("weekends") && e.push(0, 6), t = 0; t < 7; t++) {
          (n[t] = -1 !== r.inArray(t, e)) || i++;
        }if (!i) throw new Error("invalid hiddenDays");this.isHiddenDayHash = n;
      }, e.prototype.trimHiddenDays = function (t) {
        var e = t.getStart(),
            n = t.getEnd();return e && (e = this.skipHiddenDays(e)), n && (n = this.skipHiddenDays(n, -1, !0)), null === e || null === n || e < n ? new c.default(e, n) : null;
      }, e.prototype.isHiddenDay = function (t) {
        return o.isMoment(t) && (t = t.day()), this.isHiddenDayHash[t];
      }, e.prototype.skipHiddenDays = function (t, e, n) {
        void 0 === e && (e = 1), void 0 === n && (n = !1);for (var i = t.clone(); this.isHiddenDayHash[(i.day() + (n ? e : 0) + 7) % 7];) {
          i.add(e, "days");
        }return i;
      }, e;
    }(u.default);e.default = p, p.prototype.usesMinMaxTime = !1, p.prototype.dateProfileGeneratorClass = l.default, p.watch("displayingDates", ["isInDom", "dateProfile"], function (t) {
      this.requestDateRender(t.dateProfile);
    }, function () {
      this.requestDateUnrender();
    }), p.watch("displayingBusinessHours", ["displayingDates", "businessHourGenerator"], function (t) {
      this.requestBusinessHoursRender(t.businessHourGenerator);
    }, function () {
      this.requestBusinessHoursUnrender();
    }), p.watch("initialEvents", ["dateProfile"], function (t) {
      return this.fetchInitialEvents(t.dateProfile);
    }), p.watch("bindingEvents", ["initialEvents"], function (t) {
      this.setEvents(t.initialEvents), this.bindEventChanges();
    }, function () {
      this.unbindEventChanges(), this.unsetEvents();
    }), p.watch("displayingEvents", ["displayingDates", "hasEvents"], function () {
      this.requestEventsRender(this.get("currentEvents"));
    }, function () {
      this.requestEventsUnrender();
    }), p.watch("title", ["dateProfile"], function (t) {
      return this.title = this.computeTitle(t.dateProfile);
    }), p.watch("legacyDateProps", ["dateProfile"], function (t) {
      var e = this.calendar,
          n = t.dateProfile;this.start = e.msToMoment(n.activeUnzonedRange.startMs, n.isRangeAllDay), this.end = e.msToMoment(n.activeUnzonedRange.endMs, n.isRangeAllDay), this.intervalStart = e.msToMoment(n.currentUnzonedRange.startMs, n.isRangeAllDay), this.intervalEnd = e.msToMoment(n.currentUnzonedRange.endMs, n.isRangeAllDay);
    });
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(3),
        r = n(4),
        o = function () {
      function t(t, e) {
        this.view = t._getView(), this.component = t, this.fillRenderer = e;
      }return t.prototype.opt = function (t) {
        return this.view.opt(t);
      }, t.prototype.rangeUpdated = function () {
        var t, e;this.eventTimeFormat = this.opt("eventTimeFormat") || this.opt("timeFormat") || this.computeEventTimeFormat(), t = this.opt("displayEventTime"), null == t && (t = this.computeDisplayEventTime()), e = this.opt("displayEventEnd"), null == e && (e = this.computeDisplayEventEnd()), this.displayEventTime = t, this.displayEventEnd = e;
      }, t.prototype.render = function (t) {
        var e,
            n,
            i,
            r = this.component._getDateProfile(),
            o = [],
            s = [];for (e in t) {
          n = t[e], i = n.sliceRenderRanges(r.activeUnzonedRange), n.getEventDef().hasBgRendering() ? o.push.apply(o, i) : s.push.apply(s, i);
        }this.renderBgRanges(o), this.renderFgRanges(s);
      }, t.prototype.unrender = function () {
        this.unrenderBgRanges(), this.unrenderFgRanges();
      }, t.prototype.renderFgRanges = function (t) {
        var e = this.component.eventRangesToEventFootprints(t),
            n = this.component.eventFootprintsToSegs(e);n = this.renderFgSegEls(n), !1 !== this.renderFgSegs(n) && (this.fgSegs = n);
      }, t.prototype.unrenderFgRanges = function () {
        this.unrenderFgSegs(this.fgSegs || []), this.fgSegs = null;
      }, t.prototype.renderBgRanges = function (t) {
        var e = this.component.eventRangesToEventFootprints(t),
            n = this.component.eventFootprintsToSegs(e);!1 !== this.renderBgSegs(n) && (this.bgSegs = n);
      }, t.prototype.unrenderBgRanges = function () {
        this.unrenderBgSegs(), this.bgSegs = null;
      }, t.prototype.getSegs = function () {
        return (this.bgSegs || []).concat(this.fgSegs || []);
      }, t.prototype.renderFgSegs = function (t) {
        return !1;
      }, t.prototype.unrenderFgSegs = function (t) {}, t.prototype.renderBgSegs = function (t) {
        var e = this;if (!this.fillRenderer) return !1;this.fillRenderer.renderSegs("bgEvent", t, { getClasses: function getClasses(t) {
            return e.getBgClasses(t.footprint.eventDef);
          }, getCss: function getCss(t) {
            return { "background-color": e.getBgColor(t.footprint.eventDef) };
          }, filterEl: function filterEl(t, n) {
            return e.filterEventRenderEl(t.footprint, n);
          } });
      }, t.prototype.unrenderBgSegs = function () {
        this.fillRenderer && this.fillRenderer.unrender("bgEvent");
      }, t.prototype.renderFgSegEls = function (t, e) {
        var n = this;void 0 === e && (e = !1);var r,
            o = this.view.hasPublicHandlers("eventRender"),
            s = "",
            a = [];if (t.length) {
          for (r = 0; r < t.length; r++) {
            this.beforeFgSegHtml(t[r]), s += this.fgSegHtml(t[r], e);
          }i(s).each(function (e, r) {
            var s = t[e],
                l = i(r);o && (l = n.filterEventRenderEl(s.footprint, l)), l && (l.data("fc-seg", s), s.el = l, a.push(s));
          });
        }return a;
      }, t.prototype.beforeFgSegHtml = function (t) {}, t.prototype.fgSegHtml = function (t, e) {}, t.prototype.getSegClasses = function (t, e, n) {
        var i = ["fc-event", t.isStart ? "fc-start" : "fc-not-start", t.isEnd ? "fc-end" : "fc-not-end"].concat(this.getClasses(t.footprint.eventDef));return e && i.push("fc-draggable"), n && i.push("fc-resizable"), this.view.isEventDefSelected(t.footprint.eventDef) && i.push("fc-selected"), i;
      }, t.prototype.filterEventRenderEl = function (t, e) {
        var n = t.getEventLegacy(),
            r = this.view.publiclyTrigger("eventRender", { context: n, args: [n, e, this.view] });return !1 === r ? e = null : r && !0 !== r && (e = i(r)), e;
      }, t.prototype.getTimeText = function (t, e, n) {
        return this._getTimeText(t.eventInstance.dateProfile.start, t.eventInstance.dateProfile.end, t.componentFootprint.isAllDay, e, n);
      }, t.prototype._getTimeText = function (t, e, n, i, r) {
        return null == i && (i = this.eventTimeFormat), null == r && (r = this.displayEventEnd), this.displayEventTime && !n ? r && e ? this.view.formatRange({ start: t, end: e }, !1, i) : t.format(i) : "";
      }, t.prototype.computeEventTimeFormat = function () {
        return this.opt("smallTimeFormat");
      }, t.prototype.computeDisplayEventTime = function () {
        return !0;
      }, t.prototype.computeDisplayEventEnd = function () {
        return !0;
      }, t.prototype.getBgClasses = function (t) {
        var e = this.getClasses(t);return e.push("fc-bgevent"), e;
      }, t.prototype.getClasses = function (t) {
        var e,
            n = this.getStylingObjs(t),
            i = [];for (e = 0; e < n.length; e++) {
          i.push.apply(i, n[e].eventClassName || n[e].className || []);
        }return i;
      }, t.prototype.getSkinCss = function (t) {
        return { "background-color": this.getBgColor(t), "border-color": this.getBorderColor(t), color: this.getTextColor(t) };
      }, t.prototype.getBgColor = function (t) {
        var e,
            n,
            i = this.getStylingObjs(t);for (e = 0; e < i.length && !n; e++) {
          n = i[e].eventBackgroundColor || i[e].eventColor || i[e].backgroundColor || i[e].color;
        }return n || (n = this.opt("eventBackgroundColor") || this.opt("eventColor")), n;
      }, t.prototype.getBorderColor = function (t) {
        var e,
            n,
            i = this.getStylingObjs(t);for (e = 0; e < i.length && !n; e++) {
          n = i[e].eventBorderColor || i[e].eventColor || i[e].borderColor || i[e].color;
        }return n || (n = this.opt("eventBorderColor") || this.opt("eventColor")), n;
      }, t.prototype.getTextColor = function (t) {
        var e,
            n,
            i = this.getStylingObjs(t);for (e = 0; e < i.length && !n; e++) {
          n = i[e].eventTextColor || i[e].textColor;
        }return n || (n = this.opt("eventTextColor")), n;
      }, t.prototype.getStylingObjs = function (t) {
        var e = this.getFallbackStylingObjs(t);return e.unshift(t), e;
      }, t.prototype.getFallbackStylingObjs = function (t) {
        return [t.source];
      }, t.prototype.sortEventSegs = function (t) {
        t.sort(r.proxy(this, "compareEventSegs"));
      }, t.prototype.compareEventSegs = function (t, e) {
        var n = t.footprint,
            i = e.footprint,
            o = n.componentFootprint,
            s = i.componentFootprint,
            a = o.unzonedRange,
            l = s.unzonedRange;return a.startMs - l.startMs || l.endMs - l.startMs - (a.endMs - a.startMs) || s.isAllDay - o.isAllDay || r.compareByFieldSpecs(n.eventDef, i.eventDef, this.view.eventOrderSpecs, n.eventDef.miscProps, i.eventDef.miscProps);
      }, t;
    }();e.default = o;
  },,,,, function (t, e, n) {
    function i(t) {
      return "en" !== t.locale() ? t.clone().locale("en") : t;
    }function r(t, e) {
      return h(a(e).fakeFormatString, t);
    }function o(t, e, n, i, r) {
      var o;return t = y.default.parseZone(t), e = y.default.parseZone(e), o = t.localeData(), n = o.longDateFormat(n) || n, s(a(n), t, e, i || " - ", r);
    }function s(t, e, n, i, r) {
      var o,
          s,
          a,
          l = t.sameUnits,
          u = e.clone().stripZone(),
          d = n.clone().stripZone(),
          c = f(t.fakeFormatString, e),
          p = f(t.fakeFormatString, n),
          h = "",
          v = "",
          y = "",
          m = "",
          b = "";for (o = 0; o < l.length && (!l[o] || u.isSame(d, l[o])); o++) {
        h += c[o];
      }for (s = l.length - 1; s > o && (!l[s] || u.isSame(d, l[s])) && (s - 1 !== o || "." !== c[s]); s--) {
        v = c[s] + v;
      }for (a = o; a <= s; a++) {
        y += c[a], m += p[a];
      }return (y || m) && (b = r ? m + i + y : y + i + m), g(h + b + v);
    }function a(t) {
      return C[t] || (C[t] = l(t));
    }function l(t) {
      var e = u(t);return { fakeFormatString: c(e), sameUnits: p(e) };
    }function u(t) {
      for (var e, n = [], i = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g; e = i.exec(t);) {
        e[1] ? n.push.apply(n, d(e[1])) : e[2] ? n.push({ maybe: u(e[2]) }) : e[3] ? n.push({ token: e[3] }) : e[5] && n.push.apply(n, d(e[5]));
      }return n;
    }function d(t) {
      return ". " === t ? [".", " "] : [t];
    }function c(t) {
      var e,
          n,
          i = [];for (e = 0; e < t.length; e++) {
        n = t[e], "string" == typeof n ? i.push("[" + n + "]") : n.token ? n.token in E ? i.push(b + "[" + n.token + "]") : i.push(n.token) : n.maybe && i.push(w + c(n.maybe) + w);
      }return i.join(m);
    }function p(t) {
      var e,
          n,
          i,
          r = [];for (e = 0; e < t.length; e++) {
        n = t[e], n.token ? (i = S[n.token.charAt(0)], r.push(i ? i.unit : "second")) : n.maybe ? r.push.apply(r, p(n.maybe)) : r.push(null);
      }return r;
    }function h(t, e) {
      return g(f(t, e).join(""));
    }function f(t, e) {
      var n,
          i,
          r = [],
          o = y.oldMomentFormat(e, t),
          s = o.split(m);for (n = 0; n < s.length; n++) {
        i = s[n], i.charAt(0) === b ? r.push(E[i.substring(1)](e)) : r.push(i);
      }return r;
    }function g(t) {
      return t.replace(D, function (t, e) {
        return e.match(/[1-9]/) ? e : "";
      });
    }function v(t) {
      var e,
          n,
          i,
          r,
          o = u(t);for (e = 0; e < o.length; e++) {
        n = o[e], n.token && (i = S[n.token.charAt(0)]) && (!r || i.value > r.value) && (r = i);
      }return r ? r.unit : null;
    }Object.defineProperty(e, "__esModule", { value: !0 });var y = n(10);y.newMomentProto.format = function () {
      return this._fullCalendar && arguments[0] ? r(this, arguments[0]) : this._ambigTime ? y.oldMomentFormat(i(this), "YYYY-MM-DD") : this._ambigZone ? y.oldMomentFormat(i(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? y.oldMomentFormat(i(this)) : y.oldMomentProto.format.apply(this, arguments);
    }, y.newMomentProto.toISOString = function () {
      return this._ambigTime ? y.oldMomentFormat(i(this), "YYYY-MM-DD") : this._ambigZone ? y.oldMomentFormat(i(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? y.oldMomentProto.toISOString.apply(i(this), arguments) : y.oldMomentProto.toISOString.apply(this, arguments);
    };var m = "\v",
        b = "",
        w = "",
        D = new RegExp(w + "([^" + w + "]*)" + w, "g"),
        E = { t: function t(_t) {
        return y.oldMomentFormat(_t, "a").charAt(0);
      }, T: function T(t) {
        return y.oldMomentFormat(t, "A").charAt(0);
      } },
        S = { Y: { value: 1, unit: "year" }, M: { value: 2, unit: "month" }, W: { value: 3, unit: "week" }, w: { value: 3, unit: "week" }, D: { value: 4, unit: "day" }, d: { value: 4, unit: "day" } };e.formatDate = r, e.formatRange = o;var C = {};e.queryMostGranularFormatUnit = v;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(33),
        o = n(11),
        s = n(7),
        a = function (t) {
      function e() {
        var e = t.call(this) || this;return e._watchers = {}, e._props = {}, e.applyGlobalWatchers(), e.constructed(), e;
      }return i.__extends(e, t), e.watch = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }this.prototype.hasOwnProperty("_globalWatchArgs") || (this.prototype._globalWatchArgs = Object.create(this.prototype._globalWatchArgs)), this.prototype._globalWatchArgs[t] = e;
      }, e.prototype.constructed = function () {}, e.prototype.applyGlobalWatchers = function () {
        var t,
            e = this._globalWatchArgs;for (t in e) {
          this.watch.apply(this, [t].concat(e[t]));
        }
      }, e.prototype.has = function (t) {
        return t in this._props;
      }, e.prototype.get = function (t) {
        return void 0 === t ? this._props : this._props[t];
      }, e.prototype.set = function (t, e) {
        var n;"string" == typeof t ? (n = {}, n[t] = void 0 === e ? null : e) : n = t, this.setProps(n);
      }, e.prototype.reset = function (t) {
        var e,
            n = this._props,
            i = {};for (e in n) {
          i[e] = void 0;
        }for (e in t) {
          i[e] = t[e];
        }this.setProps(i);
      }, e.prototype.unset = function (t) {
        var e,
            n,
            i = {};for (e = "string" == typeof t ? [t] : t, n = 0; n < e.length; n++) {
          i[e[n]] = void 0;
        }this.setProps(i);
      }, e.prototype.setProps = function (t) {
        var e,
            n,
            i = {},
            r = 0;for (e in t) {
          "object" != _typeof(n = t[e]) && n === this._props[e] || (i[e] = n, r++);
        }if (r) {
          this.trigger("before:batchChange", i);for (e in i) {
            n = i[e], this.trigger("before:change", e, n), this.trigger("before:change:" + e, n);
          }for (e in i) {
            n = i[e], void 0 === n ? delete this._props[e] : this._props[e] = n, this.trigger("change:" + e, n), this.trigger("change", e, n);
          }this.trigger("batchChange", i);
        }
      }, e.prototype.watch = function (t, e, n, i) {
        var r = this;this.unwatch(t), this._watchers[t] = this._watchDeps(e, function (e) {
          var i = n.call(r, e);i && i.then ? (r.unset(t), i.then(function (e) {
            r.set(t, e);
          })) : r.set(t, i);
        }, function (e) {
          r.unset(t), i && i.call(r, e);
        });
      }, e.prototype.unwatch = function (t) {
        var e = this._watchers[t];e && (delete this._watchers[t], e.teardown());
      }, e.prototype._watchDeps = function (t, e, n) {
        var i = this,
            r = 0,
            o = t.length,
            s = 0,
            a = {},
            l = [],
            u = !1,
            d = function d(t, e, i) {
          1 === ++r && s === o && (u = !0, n(a), u = !1);
        },
            c = function c(t, n, i) {
          void 0 === n ? (i || void 0 === a[t] || s--, delete a[t]) : (i || void 0 !== a[t] || s++, a[t] = n), --r || s === o && (u || e(a));
        },
            p = function p(t, e) {
          i.on(t, e), l.push([t, e]);
        };return t.forEach(function (t) {
          var e = !1;"?" === t.charAt(0) && (t = t.substring(1), e = !0), p("before:change:" + t, function (t) {
            d();
          }), p("change:" + t, function (n) {
            c(t, n, e);
          });
        }), t.forEach(function (t) {
          var e = !1;"?" === t.charAt(0) && (t = t.substring(1), e = !0), i.has(t) ? (a[t] = i.get(t), s++) : e && s++;
        }), s === o && e(a), { teardown: function teardown() {
            for (var t = 0; t < l.length; t++) {
              i.off(l[t][0], l[t][1]);
            }l = null, s === o && n();
          }, flash: function flash() {
            s === o && (n(), e(a));
          } };
      }, e.prototype.flash = function (t) {
        var e = this._watchers[t];e && e.flash();
      }, e;
    }(r.default);e.default = a, a.prototype._globalWatchArgs = {}, o.default.mixInto(a), s.default.mixInto(a);
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(0),
        r = n(4),
        o = n(13),
        s = n(210);e.default = { parse: function parse(t, e) {
        return r.isTimeString(t.start) || i.isDuration(t.start) || r.isTimeString(t.end) || i.isDuration(t.end) ? s.default.parse(t, e) : o.default.parse(t, e);
      } };
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(4),
        r = n(17),
        o = function () {
      function t() {
        this.clearEnd = !1, this.forceTimed = !1, this.forceAllDay = !1;
      }return t.createFromDiff = function (e, n, r) {
        function o(t, e) {
          return r ? i.diffByUnit(t, e, r) : n.isAllDay() ? i.diffDay(t, e) : i.diffDayTime(t, e);
        }var s,
            a,
            l,
            u,
            d = e.end && !n.end,
            c = e.isAllDay() && !n.isAllDay(),
            p = !e.isAllDay() && n.isAllDay();return s = o(n.start, e.start), n.end && (a = o(n.unzonedRange.getEnd(), e.unzonedRange.getEnd()), l = a.subtract(s)), u = new t(), u.clearEnd = d, u.forceTimed = c, u.forceAllDay = p, u.setDateDelta(s), u.setEndDelta(l), u;
      }, t.prototype.buildNewDateProfile = function (t, e) {
        var n = t.start.clone(),
            i = null,
            o = !1;return t.end && !this.clearEnd ? i = t.end.clone() : this.endDelta && !i && (i = e.getDefaultEventEnd(t.isAllDay(), n)), this.forceTimed ? (o = !0, n.hasTime() || n.time(0), i && !i.hasTime() && i.time(0)) : this.forceAllDay && (n.hasTime() && n.stripTime(), i && i.hasTime() && i.stripTime()), this.dateDelta && (o = !0, n.add(this.dateDelta), i && i.add(this.dateDelta)), this.endDelta && (o = !0, i.add(this.endDelta)), this.startDelta && (o = !0, n.add(this.startDelta)), o && (n = e.applyTimezone(n), i && (i = e.applyTimezone(i))), !i && e.opt("forceEventDuration") && (i = e.getDefaultEventEnd(t.isAllDay(), n)), new r.default(n, i, e);
      }, t.prototype.setDateDelta = function (t) {
        t && t.valueOf() ? this.dateDelta = t : this.dateDelta = null;
      }, t.prototype.setStartDelta = function (t) {
        t && t.valueOf() ? this.startDelta = t : this.startDelta = null;
      }, t.prototype.setEndDelta = function (t) {
        t && t.valueOf() ? this.endDelta = t : this.endDelta = null;
      }, t.prototype.isEmpty = function () {
        return !(this.clearEnd || this.forceTimed || this.forceAllDay || this.dateDelta || this.startDelta || this.endDelta);
      }, t;
    }();e.default = o;
  }, function (t, e, n) {
    function i(t, e) {
      a[t] = e;
    }function r(t) {
      return t ? !0 === t ? s.default : a[t] : o.default;
    }Object.defineProperty(e, "__esModule", { value: !0 });var o = n(213),
        s = n(214),
        a = {};e.defineThemeSystem = i, e.getThemeSystemClass = r;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(4),
        s = n(20),
        a = n(6),
        l = n(13),
        u = function (t) {
      function e(e) {
        var n = t.call(this, e) || this;return n.eventDefs = [], n;
      }return i.__extends(e, t), e.parse = function (t, e) {
        var n;return r.isArray(t.events) ? n = t : r.isArray(t) && (n = { events: t }), !!n && a.default.parse.call(this, n, e);
      }, e.prototype.setRawEventDefs = function (t) {
        this.rawEventDefs = t, this.eventDefs = this.parseEventDefs(t);
      }, e.prototype.fetch = function (t, e, n) {
        var i,
            r = this.eventDefs;if (null != this.currentTimezone && this.currentTimezone !== n) for (i = 0; i < r.length; i++) {
          r[i] instanceof l.default && r[i].rezone();
        }return this.currentTimezone = n, s.default.resolve(r);
      }, e.prototype.addEventDef = function (t) {
        this.eventDefs.push(t);
      }, e.prototype.removeEventDefsById = function (t) {
        return o.removeMatching(this.eventDefs, function (e) {
          return e.id === t;
        });
      }, e.prototype.removeAllEventDefs = function () {
        this.eventDefs = [];
      }, e.prototype.getPrimitive = function () {
        return this.rawEventDefs;
      }, e.prototype.applyManualStandardProps = function (e) {
        var n = t.prototype.applyManualStandardProps.call(this, e);return this.setRawEventDefs(e.events), n;
      }, e;
    }(a.default);e.default = u, u.defineStandardProps({ events: !1 });
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(3),
        r = n(4),
        o = function () {
      function t(t) {
        this.isHorizontal = !1, this.isVertical = !1, this.els = i(t.els), this.isHorizontal = t.isHorizontal, this.isVertical = t.isVertical, this.forcedOffsetParentEl = t.offsetParent ? i(t.offsetParent) : null;
      }return t.prototype.build = function () {
        var t = this.forcedOffsetParentEl;!t && this.els.length > 0 && (t = this.els.eq(0).offsetParent()), this.origin = t ? t.offset() : null, this.boundingRect = this.queryBoundingRect(), this.isHorizontal && this.buildElHorizontals(), this.isVertical && this.buildElVerticals();
      }, t.prototype.clear = function () {
        this.origin = null, this.boundingRect = null, this.lefts = null, this.rights = null, this.tops = null, this.bottoms = null;
      }, t.prototype.ensureBuilt = function () {
        this.origin || this.build();
      }, t.prototype.buildElHorizontals = function () {
        var t = [],
            e = [];this.els.each(function (n, r) {
          var o = i(r),
              s = o.offset().left,
              a = o.outerWidth();t.push(s), e.push(s + a);
        }), this.lefts = t, this.rights = e;
      }, t.prototype.buildElVerticals = function () {
        var t = [],
            e = [];this.els.each(function (n, r) {
          var o = i(r),
              s = o.offset().top,
              a = o.outerHeight();t.push(s), e.push(s + a);
        }), this.tops = t, this.bottoms = e;
      }, t.prototype.getHorizontalIndex = function (t) {
        this.ensureBuilt();var e,
            n = this.lefts,
            i = this.rights,
            r = n.length;for (e = 0; e < r; e++) {
          if (t >= n[e] && t < i[e]) return e;
        }
      }, t.prototype.getVerticalIndex = function (t) {
        this.ensureBuilt();var e,
            n = this.tops,
            i = this.bottoms,
            r = n.length;for (e = 0; e < r; e++) {
          if (t >= n[e] && t < i[e]) return e;
        }
      }, t.prototype.getLeftOffset = function (t) {
        return this.ensureBuilt(), this.lefts[t];
      }, t.prototype.getLeftPosition = function (t) {
        return this.ensureBuilt(), this.lefts[t] - this.origin.left;
      }, t.prototype.getRightOffset = function (t) {
        return this.ensureBuilt(), this.rights[t];
      }, t.prototype.getRightPosition = function (t) {
        return this.ensureBuilt(), this.rights[t] - this.origin.left;
      }, t.prototype.getWidth = function (t) {
        return this.ensureBuilt(), this.rights[t] - this.lefts[t];
      }, t.prototype.getTopOffset = function (t) {
        return this.ensureBuilt(), this.tops[t];
      }, t.prototype.getTopPosition = function (t) {
        return this.ensureBuilt(), this.tops[t] - this.origin.top;
      }, t.prototype.getBottomOffset = function (t) {
        return this.ensureBuilt(), this.bottoms[t];
      }, t.prototype.getBottomPosition = function (t) {
        return this.ensureBuilt(), this.bottoms[t] - this.origin.top;
      }, t.prototype.getHeight = function (t) {
        return this.ensureBuilt(), this.bottoms[t] - this.tops[t];
      }, t.prototype.queryBoundingRect = function () {
        var t;return this.els.length > 0 && (t = r.getScrollParent(this.els.eq(0)), !t.is(document)) ? r.getClientRect(t) : null;
      }, t.prototype.isPointInBounds = function (t, e) {
        return this.isLeftInBounds(t) && this.isTopInBounds(e);
      }, t.prototype.isLeftInBounds = function (t) {
        return !this.boundingRect || t >= this.boundingRect.left && t < this.boundingRect.right;
      }, t.prototype.isTopInBounds = function (t) {
        return !this.boundingRect || t >= this.boundingRect.top && t < this.boundingRect.bottom;
      }, t;
    }();e.default = o;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(3),
        r = n(4),
        o = n(7),
        s = n(21),
        a = function () {
      function t(t) {
        this.isInteracting = !1, this.isDistanceSurpassed = !1, this.isDelayEnded = !1, this.isDragging = !1, this.isTouch = !1, this.isGeneric = !1, this.shouldCancelTouchScroll = !0, this.scrollAlwaysKills = !1, this.isAutoScroll = !1, this.scrollSensitivity = 30, this.scrollSpeed = 200, this.scrollIntervalMs = 50, this.options = t || {};
      }return t.prototype.startInteraction = function (t, e) {
        if (void 0 === e && (e = {}), "mousedown" === t.type) {
          if (s.default.get().shouldIgnoreMouse()) return;if (!r.isPrimaryMouseButton(t)) return;t.preventDefault();
        }this.isInteracting || (this.delay = r.firstDefined(e.delay, this.options.delay, 0), this.minDistance = r.firstDefined(e.distance, this.options.distance, 0), this.subjectEl = this.options.subjectEl, r.preventSelection(i("body")), this.isInteracting = !0, this.isTouch = r.getEvIsTouch(t), this.isGeneric = "dragstart" === t.type, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.originX = r.getEvX(t), this.originY = r.getEvY(t), this.scrollEl = r.getScrollParent(i(t.target)), this.bindHandlers(), this.initAutoScroll(), this.handleInteractionStart(t), this.startDelay(t), this.minDistance || this.handleDistanceSurpassed(t));
      }, t.prototype.handleInteractionStart = function (t) {
        this.trigger("interactionStart", t);
      }, t.prototype.endInteraction = function (t, e) {
        this.isInteracting && (this.endDrag(t), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null), this.destroyAutoScroll(), this.unbindHandlers(), this.isInteracting = !1, this.handleInteractionEnd(t, e), r.allowSelection(i("body")));
      }, t.prototype.handleInteractionEnd = function (t, e) {
        this.trigger("interactionEnd", t, e || !1);
      }, t.prototype.bindHandlers = function () {
        var t = s.default.get();this.isGeneric ? this.listenTo(i(document), { drag: this.handleMove, dragstop: this.endInteraction }) : this.isTouch ? this.listenTo(t, { touchmove: this.handleTouchMove, touchend: this.endInteraction, scroll: this.handleTouchScroll }) : this.listenTo(t, { mousemove: this.handleMouseMove, mouseup: this.endInteraction }), this.listenTo(t, { selectstart: r.preventDefault, contextmenu: r.preventDefault });
      }, t.prototype.unbindHandlers = function () {
        this.stopListeningTo(s.default.get()), this.stopListeningTo(i(document));
      }, t.prototype.startDrag = function (t, e) {
        this.startInteraction(t, e), this.isDragging || (this.isDragging = !0, this.handleDragStart(t));
      }, t.prototype.handleDragStart = function (t) {
        this.trigger("dragStart", t);
      }, t.prototype.handleMove = function (t) {
        var e = r.getEvX(t) - this.originX,
            n = r.getEvY(t) - this.originY,
            i = this.minDistance;this.isDistanceSurpassed || e * e + n * n >= i * i && this.handleDistanceSurpassed(t), this.isDragging && this.handleDrag(e, n, t);
      }, t.prototype.handleDrag = function (t, e, n) {
        this.trigger("drag", t, e, n), this.updateAutoScroll(n);
      }, t.prototype.endDrag = function (t) {
        this.isDragging && (this.isDragging = !1, this.handleDragEnd(t));
      }, t.prototype.handleDragEnd = function (t) {
        this.trigger("dragEnd", t);
      }, t.prototype.startDelay = function (t) {
        var e = this;this.delay ? this.delayTimeoutId = setTimeout(function () {
          e.handleDelayEnd(t);
        }, this.delay) : this.handleDelayEnd(t);
      }, t.prototype.handleDelayEnd = function (t) {
        this.isDelayEnded = !0, this.isDistanceSurpassed && this.startDrag(t);
      }, t.prototype.handleDistanceSurpassed = function (t) {
        this.isDistanceSurpassed = !0, this.isDelayEnded && this.startDrag(t);
      }, t.prototype.handleTouchMove = function (t) {
        this.isDragging && this.shouldCancelTouchScroll && t.preventDefault(), this.handleMove(t);
      }, t.prototype.handleMouseMove = function (t) {
        this.handleMove(t);
      }, t.prototype.handleTouchScroll = function (t) {
        this.isDragging && !this.scrollAlwaysKills || this.endInteraction(t, !0);
      }, t.prototype.trigger = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }this.options[t] && this.options[t].apply(this, e), this["_" + t] && this["_" + t].apply(this, e);
      }, t.prototype.initAutoScroll = function () {
        var t = this.scrollEl;this.isAutoScroll = this.options.scroll && t && !t.is(window) && !t.is(document), this.isAutoScroll && this.listenTo(t, "scroll", r.debounce(this.handleDebouncedScroll, 100));
      }, t.prototype.destroyAutoScroll = function () {
        this.endAutoScroll(), this.isAutoScroll && this.stopListeningTo(this.scrollEl, "scroll");
      }, t.prototype.computeScrollBounds = function () {
        this.isAutoScroll && (this.scrollBounds = r.getOuterRect(this.scrollEl));
      }, t.prototype.updateAutoScroll = function (t) {
        var e,
            n,
            i,
            o,
            s = this.scrollSensitivity,
            a = this.scrollBounds,
            l = 0,
            u = 0;a && (e = (s - (r.getEvY(t) - a.top)) / s, n = (s - (a.bottom - r.getEvY(t))) / s, i = (s - (r.getEvX(t) - a.left)) / s, o = (s - (a.right - r.getEvX(t))) / s, e >= 0 && e <= 1 ? l = e * this.scrollSpeed * -1 : n >= 0 && n <= 1 && (l = n * this.scrollSpeed), i >= 0 && i <= 1 ? u = i * this.scrollSpeed * -1 : o >= 0 && o <= 1 && (u = o * this.scrollSpeed)), this.setScrollVel(l, u);
      }, t.prototype.setScrollVel = function (t, e) {
        this.scrollTopVel = t, this.scrollLeftVel = e, this.constrainScrollVel(), !this.scrollTopVel && !this.scrollLeftVel || this.scrollIntervalId || (this.scrollIntervalId = setInterval(r.proxy(this, "scrollIntervalFunc"), this.scrollIntervalMs));
      }, t.prototype.constrainScrollVel = function () {
        var t = this.scrollEl;this.scrollTopVel < 0 ? t.scrollTop() <= 0 && (this.scrollTopVel = 0) : this.scrollTopVel > 0 && t.scrollTop() + t[0].clientHeight >= t[0].scrollHeight && (this.scrollTopVel = 0), this.scrollLeftVel < 0 ? t.scrollLeft() <= 0 && (this.scrollLeftVel = 0) : this.scrollLeftVel > 0 && t.scrollLeft() + t[0].clientWidth >= t[0].scrollWidth && (this.scrollLeftVel = 0);
      }, t.prototype.scrollIntervalFunc = function () {
        var t = this.scrollEl,
            e = this.scrollIntervalMs / 1e3;this.scrollTopVel && t.scrollTop(t.scrollTop() + this.scrollTopVel * e), this.scrollLeftVel && t.scrollLeft(t.scrollLeft() + this.scrollLeftVel * e), this.constrainScrollVel(), this.scrollTopVel || this.scrollLeftVel || this.endAutoScroll();
      }, t.prototype.endAutoScroll = function () {
        this.scrollIntervalId && (clearInterval(this.scrollIntervalId), this.scrollIntervalId = null, this.handleScrollEnd());
      }, t.prototype.handleDebouncedScroll = function () {
        this.scrollIntervalId || this.handleScrollEnd();
      }, t.prototype.handleScrollEnd = function () {}, t;
    }();e.default = a, o.default.mixInto(a);
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(4),
        o = n(14),
        s = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.prototype.updateDayTable = function () {
        for (var t, e, n, i = this, r = i.view, o = r.calendar, s = o.msToUtcMoment(i.dateProfile.renderUnzonedRange.startMs, !0), a = o.msToUtcMoment(i.dateProfile.renderUnzonedRange.endMs, !0), l = -1, u = [], d = []; s.isBefore(a);) {
          r.isHiddenDay(s) ? u.push(l + .5) : (l++, u.push(l), d.push(s.clone())), s.add(1, "days");
        }if (this.breakOnWeeks) {
          for (e = d[0].day(), t = 1; t < d.length && d[t].day() !== e; t++) {}n = Math.ceil(d.length / t);
        } else n = 1, t = d.length;this.dayDates = d, this.dayIndices = u, this.daysPerRow = t, this.rowCnt = n, this.updateDayTableCols();
      }, e.prototype.updateDayTableCols = function () {
        this.colCnt = this.computeColCnt(), this.colHeadFormat = this.opt("columnHeaderFormat") || this.opt("columnFormat") || this.computeColHeadFormat();
      }, e.prototype.computeColCnt = function () {
        return this.daysPerRow;
      }, e.prototype.getCellDate = function (t, e) {
        return this.dayDates[this.getCellDayIndex(t, e)].clone();
      }, e.prototype.getCellRange = function (t, e) {
        var n = this.getCellDate(t, e);return { start: n, end: n.clone().add(1, "days") };
      }, e.prototype.getCellDayIndex = function (t, e) {
        return t * this.daysPerRow + this.getColDayIndex(e);
      }, e.prototype.getColDayIndex = function (t) {
        return this.isRTL ? this.colCnt - 1 - t : t;
      }, e.prototype.getDateDayIndex = function (t) {
        var e = this.dayIndices,
            n = t.diff(this.dayDates[0], "days");return n < 0 ? e[0] - 1 : n >= e.length ? e[e.length - 1] + 1 : e[n];
      }, e.prototype.computeColHeadFormat = function () {
        return this.rowCnt > 1 || this.colCnt > 10 ? "ddd" : this.colCnt > 1 ? this.opt("dayOfMonthFormat") : "dddd";
      }, e.prototype.sliceRangeByRow = function (t) {
        var e,
            n,
            i,
            r,
            o,
            s = this.daysPerRow,
            a = this.view.computeDayRange(t),
            l = this.getDateDayIndex(a.start),
            u = this.getDateDayIndex(a.end.clone().subtract(1, "days")),
            d = [];for (e = 0; e < this.rowCnt; e++) {
          n = e * s, i = n + s - 1, r = Math.max(l, n), o = Math.min(u, i), r = Math.ceil(r), o = Math.floor(o), r <= o && d.push({ row: e, firstRowDayIndex: r - n, lastRowDayIndex: o - n, isStart: r === l, isEnd: o === u });
        }return d;
      }, e.prototype.sliceRangeByDay = function (t) {
        var e,
            n,
            i,
            r,
            o,
            s,
            a = this.daysPerRow,
            l = this.view.computeDayRange(t),
            u = this.getDateDayIndex(l.start),
            d = this.getDateDayIndex(l.end.clone().subtract(1, "days")),
            c = [];for (e = 0; e < this.rowCnt; e++) {
          for (n = e * a, i = n + a - 1, r = n; r <= i; r++) {
            o = Math.max(u, r), s = Math.min(d, r), o = Math.ceil(o), s = Math.floor(s), o <= s && c.push({ row: e, firstRowDayIndex: o - n, lastRowDayIndex: s - n, isStart: o === u, isEnd: s === d });
          }
        }return c;
      }, e.prototype.renderHeadHtml = function () {
        var t = this.view.calendar.theme;return '<div class="fc-row ' + t.getClass("headerRow") + '"><table class="' + t.getClass("tableGrid") + '"><thead>' + this.renderHeadTrHtml() + "</thead></table></div>";
      }, e.prototype.renderHeadIntroHtml = function () {
        return this.renderIntroHtml();
      }, e.prototype.renderHeadTrHtml = function () {
        return "<tr>" + (this.isRTL ? "" : this.renderHeadIntroHtml()) + this.renderHeadDateCellsHtml() + (this.isRTL ? this.renderHeadIntroHtml() : "") + "</tr>";
      }, e.prototype.renderHeadDateCellsHtml = function () {
        var t,
            e,
            n = [];for (t = 0; t < this.colCnt; t++) {
          e = this.getCellDate(0, t), n.push(this.renderHeadDateCellHtml(e));
        }return n.join("");
      }, e.prototype.renderHeadDateCellHtml = function (t, e, n) {
        var i,
            o = this,
            s = o.view,
            a = o.dateProfile.activeUnzonedRange.containsDate(t),
            l = ["fc-day-header", s.calendar.theme.getClass("widgetHeader")];return i = "function" == typeof o.opt("columnHeaderHtml") ? o.opt("columnHeaderHtml")(t) : "function" == typeof o.opt("columnHeaderText") ? r.htmlEscape(o.opt("columnHeaderText")(t)) : r.htmlEscape(t.format(o.colHeadFormat)), 1 === o.rowCnt ? l = l.concat(o.getDayClasses(t, !0)) : l.push("fc-" + r.dayIDs[t.day()]), '<th class="' + l.join(" ") + '"' + (1 === (a && o.rowCnt) ? ' data-date="' + t.format("YYYY-MM-DD") + '"' : "") + (e > 1 ? ' colspan="' + e + '"' : "") + (n ? " " + n : "") + ">" + (a ? s.buildGotoAnchorHtml({ date: t, forceOff: o.rowCnt > 1 || 1 === o.colCnt }, i) : i) + "</th>";
      }, e.prototype.renderBgTrHtml = function (t) {
        return "<tr>" + (this.isRTL ? "" : this.renderBgIntroHtml(t)) + this.renderBgCellsHtml(t) + (this.isRTL ? this.renderBgIntroHtml(t) : "") + "</tr>";
      }, e.prototype.renderBgIntroHtml = function (t) {
        return this.renderIntroHtml();
      }, e.prototype.renderBgCellsHtml = function (t) {
        var e,
            n,
            i = [];for (e = 0; e < this.colCnt; e++) {
          n = this.getCellDate(t, e), i.push(this.renderBgCellHtml(n));
        }return i.join("");
      }, e.prototype.renderBgCellHtml = function (t, e) {
        var n = this,
            i = n.view,
            r = n.dateProfile.activeUnzonedRange.containsDate(t),
            o = n.getDayClasses(t);return o.unshift("fc-day", i.calendar.theme.getClass("widgetContent")), '<td class="' + o.join(" ") + '"' + (r ? ' data-date="' + t.format("YYYY-MM-DD") + '"' : "") + (e ? " " + e : "") + "></td>";
      }, e.prototype.renderIntroHtml = function () {}, e.prototype.bookendCells = function (t) {
        var e = this.renderIntroHtml();e && (this.isRTL ? t.append(e) : t.prepend(e));
      }, e;
    }(o.default);e.default = s;
  }, function (t, e) {
    Object.defineProperty(e, "__esModule", { value: !0 });var n = function () {
      function t(t, e) {
        this.component = t, this.fillRenderer = e;
      }return t.prototype.render = function (t) {
        var e = this.component,
            n = e._getDateProfile().activeUnzonedRange,
            i = t.buildEventInstanceGroup(e.hasAllDayBusinessHours, n),
            r = i ? e.eventRangesToEventFootprints(i.sliceRenderRanges(n)) : [];this.renderEventFootprints(r);
      }, t.prototype.renderEventFootprints = function (t) {
        var e = this.component.eventFootprintsToSegs(t);this.renderSegs(e), this.segs = e;
      }, t.prototype.renderSegs = function (t) {
        this.fillRenderer && this.fillRenderer.renderSegs("businessHours", t, { getClasses: function getClasses(t) {
            return ["fc-nonbusiness", "fc-bgevent"];
          } });
      }, t.prototype.unrender = function () {
        this.fillRenderer && this.fillRenderer.unrender("businessHours"), this.segs = null;
      }, t.prototype.getSegs = function () {
        return this.segs || [];
      }, t;
    }();e.default = n;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(3),
        r = n(4),
        o = function () {
      function t(t) {
        this.fillSegTag = "div", this.component = t, this.elsByFill = {};
      }return t.prototype.renderFootprint = function (t, e, n) {
        this.renderSegs(t, this.component.componentFootprintToSegs(e), n);
      }, t.prototype.renderSegs = function (t, e, n) {
        var i;return e = this.buildSegEls(t, e, n), i = this.attachSegEls(t, e), i && this.reportEls(t, i), e;
      }, t.prototype.unrender = function (t) {
        var e = this.elsByFill[t];e && (e.remove(), delete this.elsByFill[t]);
      }, t.prototype.buildSegEls = function (t, e, n) {
        var r,
            o = this,
            s = "",
            a = [];if (e.length) {
          for (r = 0; r < e.length; r++) {
            s += this.buildSegHtml(t, e[r], n);
          }i(s).each(function (t, r) {
            var s = e[t],
                l = i(r);n.filterEl && (l = n.filterEl(s, l)), l && (l = i(l), l.is(o.fillSegTag) && (s.el = l, a.push(s)));
          });
        }return a;
      }, t.prototype.buildSegHtml = function (t, e, n) {
        var i = n.getClasses ? n.getClasses(e) : [],
            o = r.cssToStr(n.getCss ? n.getCss(e) : {});return "<" + this.fillSegTag + (i.length ? ' class="' + i.join(" ") + '"' : "") + (o ? ' style="' + o + '"' : "") + " />";
      }, t.prototype.attachSegEls = function (t, e) {}, t.prototype.reportEls = function (t, e) {
        this.elsByFill[t] ? this.elsByFill[t] = this.elsByFill[t].add(e) : this.elsByFill[t] = i(e);
      }, t;
    }();e.default = o;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(13),
        r = n(36),
        o = n(6),
        s = function () {
      function t(t, e) {
        this.view = t._getView(), this.component = t, this.eventRenderer = e;
      }return t.prototype.renderComponentFootprint = function (t) {
        this.renderEventFootprints([this.fabricateEventFootprint(t)]);
      }, t.prototype.renderEventDraggingFootprints = function (t, e, n) {
        this.renderEventFootprints(t, e, "fc-dragging", n ? null : this.view.opt("dragOpacity"));
      }, t.prototype.renderEventResizingFootprints = function (t, e, n) {
        this.renderEventFootprints(t, e, "fc-resizing");
      }, t.prototype.renderEventFootprints = function (t, e, n, i) {
        var r,
            o = this.component.eventFootprintsToSegs(t),
            s = "fc-helper " + (n || "");for (o = this.eventRenderer.renderFgSegEls(o), r = 0; r < o.length; r++) {
          o[r].el.addClass(s);
        }if (null != i) for (r = 0; r < o.length; r++) {
          o[r].el.css("opacity", i);
        }this.helperEls = this.renderSegs(o, e);
      }, t.prototype.renderSegs = function (t, e) {}, t.prototype.unrender = function () {
        this.helperEls && (this.helperEls.remove(), this.helperEls = null);
      }, t.prototype.fabricateEventFootprint = function (t) {
        var e,
            n = this.view.calendar,
            s = n.footprintToDateProfile(t),
            a = new i.default(new o.default(n));return a.dateProfile = s, e = a.buildInstance(), new r.default(t, a, e);
      }, t;
    }();e.default = s;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(21),
        o = n(15),
        s = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.prototype.bindToEl = function (t) {
        var e = this.component;e.bindSegHandlerToEl(t, "click", this.handleClick.bind(this)), e.bindSegHandlerToEl(t, "mouseenter", this.handleMouseover.bind(this)), e.bindSegHandlerToEl(t, "mouseleave", this.handleMouseout.bind(this));
      }, e.prototype.handleClick = function (t, e) {
        !1 === this.component.publiclyTrigger("eventClick", { context: t.el[0], args: [t.footprint.getEventLegacy(), e, this.view] }) && e.preventDefault();
      }, e.prototype.handleMouseover = function (t, e) {
        r.default.get().shouldIgnoreMouse() || this.mousedOverSeg || (this.mousedOverSeg = t, this.view.isEventDefResizable(t.footprint.eventDef) && t.el.addClass("fc-allow-mouse-resize"), this.component.publiclyTrigger("eventMouseover", { context: t.el[0], args: [t.footprint.getEventLegacy(), e, this.view] }));
      }, e.prototype.handleMouseout = function (t, e) {
        this.mousedOverSeg && (this.mousedOverSeg = null, this.view.isEventDefResizable(t.footprint.eventDef) && t.el.removeClass("fc-allow-mouse-resize"), this.component.publiclyTrigger("eventMouseout", { context: t.el[0], args: [t.footprint.getEventLegacy(), e || {}, this.view] }));
      }, e.prototype.end = function () {
        this.mousedOverSeg && this.handleMouseout(this.mousedOverSeg);
      }, e;
    }(o.default);e.default = s;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(14),
        o = n(245),
        s = n(225),
        a = n(59),
        l = n(224),
        u = n(223),
        d = n(222),
        c = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e;
    }(r.default);e.default = c, c.prototype.dateClickingClass = o.default, c.prototype.dateSelectingClass = s.default, c.prototype.eventPointingClass = a.default, c.prototype.eventDraggingClass = l.default, c.prototype.eventResizingClass = u.default, c.prototype.externalDroppingClass = d.default;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(4),
        s = n(53),
        a = n(249),
        l = n(5),
        u = n(12),
        d = n(36),
        c = n(56),
        p = n(60),
        h = n(40),
        f = n(55),
        g = n(250),
        v = n(251),
        y = n(252),
        m = function (t) {
      function e(e) {
        var n = t.call(this, e) || this;return n.cellWeekNumbersVisible = !1, n.bottomCoordPadding = 0, n.isRigid = !1, n.hasAllDayBusinessHours = !0, n;
      }return i.__extends(e, t), e.prototype.componentFootprintToSegs = function (t) {
        var e,
            n,
            i = this.sliceRangeByRow(t.unzonedRange);for (e = 0; e < i.length; e++) {
          n = i[e], this.isRTL ? (n.leftCol = this.daysPerRow - 1 - n.lastRowDayIndex, n.rightCol = this.daysPerRow - 1 - n.firstRowDayIndex) : (n.leftCol = n.firstRowDayIndex, n.rightCol = n.lastRowDayIndex);
        }return i;
      }, e.prototype.renderDates = function (t) {
        this.dateProfile = t, this.updateDayTable(), this.renderGrid();
      }, e.prototype.unrenderDates = function () {
        this.removeSegPopover();
      }, e.prototype.renderGrid = function () {
        var t,
            e,
            n = this.view,
            i = this.rowCnt,
            r = this.colCnt,
            o = "";for (this.headContainerEl && this.headContainerEl.html(this.renderHeadHtml()), t = 0; t < i; t++) {
          o += this.renderDayRowHtml(t, this.isRigid);
        }for (this.el.html(o), this.rowEls = this.el.find(".fc-row"), this.cellEls = this.el.find(".fc-day, .fc-disabled-day"), this.rowCoordCache = new s.default({ els: this.rowEls, isVertical: !0 }), this.colCoordCache = new s.default({ els: this.cellEls.slice(0, this.colCnt), isHorizontal: !0 }), t = 0; t < i; t++) {
          for (e = 0; e < r; e++) {
            this.publiclyTrigger("dayRender", { context: n, args: [this.getCellDate(t, e), this.getCellEl(t, e), n] });
          }
        }
      }, e.prototype.renderDayRowHtml = function (t, e) {
        var n = this.view.calendar.theme,
            i = ["fc-row", "fc-week", n.getClass("dayRow")];return e && i.push("fc-rigid"), '<div class="' + i.join(" ") + '"><div class="fc-bg"><table class="' + n.getClass("tableGrid") + '">' + this.renderBgTrHtml(t) + '</table></div><div class="fc-content-skeleton"><table>' + (this.getIsNumbersVisible() ? "<thead>" + this.renderNumberTrHtml(t) + "</thead>" : "") + "</table></div></div>";
      }, e.prototype.getIsNumbersVisible = function () {
        return this.getIsDayNumbersVisible() || this.cellWeekNumbersVisible;
      }, e.prototype.getIsDayNumbersVisible = function () {
        return this.rowCnt > 1;
      }, e.prototype.renderNumberTrHtml = function (t) {
        return "<tr>" + (this.isRTL ? "" : this.renderNumberIntroHtml(t)) + this.renderNumberCellsHtml(t) + (this.isRTL ? this.renderNumberIntroHtml(t) : "") + "</tr>";
      }, e.prototype.renderNumberIntroHtml = function (t) {
        return this.renderIntroHtml();
      }, e.prototype.renderNumberCellsHtml = function (t) {
        var e,
            n,
            i = [];for (e = 0; e < this.colCnt; e++) {
          n = this.getCellDate(t, e), i.push(this.renderNumberCellHtml(n));
        }return i.join("");
      }, e.prototype.renderNumberCellHtml = function (t) {
        var e,
            n,
            i = this.view,
            r = "",
            o = this.dateProfile.activeUnzonedRange.containsDate(t),
            s = this.getIsDayNumbersVisible() && o;return s || this.cellWeekNumbersVisible ? (e = this.getDayClasses(t), e.unshift("fc-day-top"), this.cellWeekNumbersVisible && (n = "ISO" === t._locale._fullCalendar_weekCalc ? 1 : t._locale.firstDayOfWeek()), r += '<td class="' + e.join(" ") + '"' + (o ? ' data-date="' + t.format() + '"' : "") + ">", this.cellWeekNumbersVisible && t.day() === n && (r += i.buildGotoAnchorHtml({ date: t, type: "week" }, { class: "fc-week-number" }, t.format("w"))), s && (r += i.buildGotoAnchorHtml(t, { class: "fc-day-number" }, t.format("D"))), r += "</td>") : "<td/>";
      }, e.prototype.prepareHits = function () {
        this.colCoordCache.build(), this.rowCoordCache.build(), this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding;
      }, e.prototype.releaseHits = function () {
        this.colCoordCache.clear(), this.rowCoordCache.clear();
      }, e.prototype.queryHit = function (t, e) {
        if (this.colCoordCache.isLeftInBounds(t) && this.rowCoordCache.isTopInBounds(e)) {
          var n = this.colCoordCache.getHorizontalIndex(t),
              i = this.rowCoordCache.getVerticalIndex(e);if (null != i && null != n) return this.getCellHit(i, n);
        }
      }, e.prototype.getHitFootprint = function (t) {
        var e = this.getCellRange(t.row, t.col);return new u.default(new l.default(e.start, e.end), !0);
      }, e.prototype.getHitEl = function (t) {
        return this.getCellEl(t.row, t.col);
      }, e.prototype.getCellHit = function (t, e) {
        return { row: t, col: e, component: this, left: this.colCoordCache.getLeftOffset(e), right: this.colCoordCache.getRightOffset(e), top: this.rowCoordCache.getTopOffset(t), bottom: this.rowCoordCache.getBottomOffset(t) };
      }, e.prototype.getCellEl = function (t, e) {
        return this.cellEls.eq(t * this.colCnt + e);
      }, e.prototype.executeEventUnrender = function () {
        this.removeSegPopover(), t.prototype.executeEventUnrender.call(this);
      }, e.prototype.getOwnEventSegs = function () {
        return t.prototype.getOwnEventSegs.call(this).concat(this.popoverSegs || []);
      }, e.prototype.renderDrag = function (t, e, n) {
        var i;for (i = 0; i < t.length; i++) {
          this.renderHighlight(t[i].componentFootprint);
        }if (t.length && e && e.component !== this) return this.helperRenderer.renderEventDraggingFootprints(t, e, n), !0;
      }, e.prototype.unrenderDrag = function () {
        this.unrenderHighlight(), this.helperRenderer.unrender();
      }, e.prototype.renderEventResize = function (t, e, n) {
        var i;for (i = 0; i < t.length; i++) {
          this.renderHighlight(t[i].componentFootprint);
        }this.helperRenderer.renderEventResizingFootprints(t, e, n);
      }, e.prototype.unrenderEventResize = function () {
        this.unrenderHighlight(), this.helperRenderer.unrender();
      }, e.prototype.removeSegPopover = function () {
        this.segPopover && this.segPopover.hide();
      }, e.prototype.limitRows = function (t) {
        var e,
            n,
            i = this.eventRenderer.rowStructs || [];for (e = 0; e < i.length; e++) {
          this.unlimitRow(e), !1 !== (n = !!t && ("number" == typeof t ? t : this.computeRowLevelLimit(e))) && this.limitRow(e, n);
        }
      }, e.prototype.computeRowLevelLimit = function (t) {
        function e(t, e) {
          o = Math.max(o, r(e).outerHeight());
        }var n,
            i,
            o,
            s = this.rowEls.eq(t),
            a = s.height(),
            l = this.eventRenderer.rowStructs[t].tbodyEl.children();for (n = 0; n < l.length; n++) {
          if (i = l.eq(n).removeClass("fc-limited"), o = 0, i.find("> td > :first-child").each(e), i.position().top + o > a) return n;
        }return !1;
      }, e.prototype.limitRow = function (t, e) {
        var n,
            i,
            o,
            s,
            a,
            l,
            u,
            d,
            c,
            p,
            h,
            f,
            g,
            v,
            y,
            m = this,
            b = this.eventRenderer.rowStructs[t],
            w = [],
            D = 0,
            E = function E(n) {
          for (; D < n;) {
            l = m.getCellSegs(t, D, e), l.length && (c = i[e - 1][D], y = m.renderMoreLink(t, D, l), v = r("<div/>").append(y), c.append(v), w.push(v[0])), D++;
          }
        };if (e && e < b.segLevels.length) {
          for (n = b.segLevels[e - 1], i = b.cellMatrix, o = b.tbodyEl.children().slice(e).addClass("fc-limited").get(), s = 0; s < n.length; s++) {
            for (a = n[s], E(a.leftCol), d = [], u = 0; D <= a.rightCol;) {
              l = this.getCellSegs(t, D, e), d.push(l), u += l.length, D++;
            }if (u) {
              for (c = i[e - 1][a.leftCol], p = c.attr("rowspan") || 1, h = [], f = 0; f < d.length; f++) {
                g = r('<td class="fc-more-cell"/>').attr("rowspan", p), l = d[f], y = this.renderMoreLink(t, a.leftCol + f, [a].concat(l)), v = r("<div/>").append(y), g.append(v), h.push(g[0]), w.push(g[0]);
              }c.addClass("fc-limited").after(r(h)), o.push(c[0]);
            }
          }E(this.colCnt), b.moreEls = r(w), b.limitedEls = r(o);
        }
      }, e.prototype.unlimitRow = function (t) {
        var e = this.eventRenderer.rowStructs[t];e.moreEls && (e.moreEls.remove(), e.moreEls = null), e.limitedEls && (e.limitedEls.removeClass("fc-limited"), e.limitedEls = null);
      }, e.prototype.renderMoreLink = function (t, e, n) {
        var i = this,
            o = this.view;return r('<a class="fc-more"/>').text(this.getMoreLinkText(n.length)).on("click", function (s) {
          var a = i.opt("eventLimitClick"),
              l = i.getCellDate(t, e),
              u = r(s.currentTarget),
              d = i.getCellEl(t, e),
              c = i.getCellSegs(t, e),
              p = i.resliceDaySegs(c, l),
              h = i.resliceDaySegs(n, l);"function" == typeof a && (a = i.publiclyTrigger("eventLimitClick", { context: o, args: [{ date: l.clone(), dayEl: d, moreEl: u, segs: p, hiddenSegs: h }, s, o] })), "popover" === a ? i.showSegPopover(t, e, u, p) : "string" == typeof a && o.calendar.zoomTo(l, a);
        });
      }, e.prototype.showSegPopover = function (t, e, n, i) {
        var r,
            o,
            s = this,
            l = this.view,
            u = n.parent();r = 1 === this.rowCnt ? l.el : this.rowEls.eq(t), o = { className: "fc-more-popover " + l.calendar.theme.getClass("popover"), content: this.renderSegPopoverContent(t, e, i), parentEl: l.el, top: r.offset().top, autoHide: !0, viewportConstrain: this.opt("popoverViewportConstrain"), hide: function hide() {
            s.popoverSegs && s.triggerBeforeEventSegsDestroyed(s.popoverSegs), s.segPopover.removeElement(), s.segPopover = null, s.popoverSegs = null;
          } }, this.isRTL ? o.right = u.offset().left + u.outerWidth() + 1 : o.left = u.offset().left - 1, this.segPopover = new a.default(o), this.segPopover.show(), this.bindAllSegHandlersToEl(this.segPopover.el), this.triggerAfterEventSegsRendered(i);
      }, e.prototype.renderSegPopoverContent = function (t, e, n) {
        var i,
            s = this.view,
            a = s.calendar.theme,
            l = this.getCellDate(t, e).format(this.opt("dayPopoverFormat")),
            u = r('<div class="fc-header ' + a.getClass("popoverHeader") + '"><span class="fc-close ' + a.getIconClass("close") + '"></span><span class="fc-title">' + o.htmlEscape(l) + '</span><div class="fc-clear"/></div><div class="fc-body ' + a.getClass("popoverContent") + '"><div class="fc-event-container"></div></div>'),
            d = u.find(".fc-event-container");for (n = this.eventRenderer.renderFgSegEls(n, !0), this.popoverSegs = n, i = 0; i < n.length; i++) {
          this.hitsNeeded(), n[i].hit = this.getCellHit(t, e), this.hitsNotNeeded(), d.append(n[i].el);
        }return u;
      }, e.prototype.resliceDaySegs = function (t, e) {
        var n,
            i,
            o,
            s = e.clone(),
            a = s.clone().add(1, "days"),
            c = new l.default(s, a),
            p = [];for (n = 0; n < t.length; n++) {
          i = t[n], (o = i.footprint.componentFootprint.unzonedRange.intersect(c)) && p.push(r.extend({}, i, { footprint: new d.default(new u.default(o, i.footprint.componentFootprint.isAllDay), i.footprint.eventDef, i.footprint.eventInstance), isStart: i.isStart && o.isStart, isEnd: i.isEnd && o.isEnd }));
        }return this.eventRenderer.sortEventSegs(p), p;
      }, e.prototype.getMoreLinkText = function (t) {
        var e = this.opt("eventLimitText");return "function" == typeof e ? e(t) : "+" + t + " " + e;
      }, e.prototype.getCellSegs = function (t, e, n) {
        for (var i, r = this.eventRenderer.rowStructs[t].segMatrix, o = n || 0, s = []; o < r.length;) {
          i = r[o][e], i && s.push(i), o++;
        }return s;
      }, e;
    }(h.default);e.default = m, m.prototype.eventRendererClass = g.default, m.prototype.businessHourRendererClass = c.default, m.prototype.helperRendererClass = v.default, m.prototype.fillRendererClass = y.default, p.default.mixInto(m), f.default.mixInto(m);
  }, function (t, e, n) {
    function i(t) {
      return function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;return e.colWeekNumbersVisible = !1, e;
        }return r.__extends(e, t), e.prototype.renderHeadIntroHtml = function () {
          var t = this.view;return this.colWeekNumbersVisible ? '<th class="fc-week-number ' + t.calendar.theme.getClass("widgetHeader") + '" ' + t.weekNumberStyleAttr() + "><span>" + s.htmlEscape(this.opt("weekNumberTitle")) + "</span></th>" : "";
        }, e.prototype.renderNumberIntroHtml = function (t) {
          var e = this.view,
              n = this.getCellDate(t, 0);return this.colWeekNumbersVisible ? '<td class="fc-week-number" ' + e.weekNumberStyleAttr() + ">" + e.buildGotoAnchorHtml({ date: n, type: "week", forceOff: 1 === this.colCnt }, n.format("w")) + "</td>" : "";
        }, e.prototype.renderBgIntroHtml = function () {
          var t = this.view;return this.colWeekNumbersVisible ? '<td class="fc-week-number ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.weekNumberStyleAttr() + "></td>" : "";
        }, e.prototype.renderIntroHtml = function () {
          var t = this.view;return this.colWeekNumbersVisible ? '<td class="fc-week-number" ' + t.weekNumberStyleAttr() + "></td>" : "";
        }, e.prototype.getIsNumbersVisible = function () {
          return d.default.prototype.getIsNumbersVisible.apply(this, arguments) || this.colWeekNumbersVisible;
        }, e;
      }(t);
    }Object.defineProperty(e, "__esModule", { value: !0 });var r = n(2),
        o = n(3),
        s = n(4),
        a = n(39),
        l = n(41),
        u = n(228),
        d = n(61),
        c = function (t) {
      function e(e, n) {
        var i = t.call(this, e, n) || this;return i.dayGrid = i.instantiateDayGrid(), i.dayGrid.isRigid = i.hasRigidRows(), i.opt("weekNumbers") && (i.opt("weekNumbersWithinDays") ? (i.dayGrid.cellWeekNumbersVisible = !0, i.dayGrid.colWeekNumbersVisible = !1) : (i.dayGrid.cellWeekNumbersVisible = !1, i.dayGrid.colWeekNumbersVisible = !0)), i.addChild(i.dayGrid), i.scroller = new a.default({ overflowX: "hidden", overflowY: "auto" }), i;
      }return r.__extends(e, t), e.prototype.instantiateDayGrid = function () {
        return new (i(this.dayGridClass))(this);
      }, e.prototype.executeDateRender = function (e) {
        this.dayGrid.breakOnWeeks = /year|month|week/.test(e.currentRangeUnit), t.prototype.executeDateRender.call(this, e);
      }, e.prototype.renderSkeleton = function () {
        var t, e;this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml()), this.scroller.render(), t = this.scroller.el.addClass("fc-day-grid-container"), e = o('<div class="fc-day-grid" />').appendTo(t), this.el.find(".fc-body > tr > td").append(t), this.dayGrid.headContainerEl = this.el.find(".fc-head-container"), this.dayGrid.setElement(e);
      }, e.prototype.unrenderSkeleton = function () {
        this.dayGrid.removeElement(), this.scroller.destroy();
      }, e.prototype.renderSkeletonHtml = function () {
        var t = this.calendar.theme;return '<table class="' + t.getClass("tableGrid") + '">' + (this.opt("columnHeader") ? '<thead class="fc-head"><tr><td class="fc-head-container ' + t.getClass("widgetHeader") + '">&nbsp;</td></tr></thead>' : "") + '<tbody class="fc-body"><tr><td class="' + t.getClass("widgetContent") + '"></td></tr></tbody></table>';
      }, e.prototype.weekNumberStyleAttr = function () {
        return null != this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : "";
      }, e.prototype.hasRigidRows = function () {
        var t = this.opt("eventLimit");return t && "number" != typeof t;
      }, e.prototype.updateSize = function (e, n, i) {
        var r,
            o,
            a = this.opt("eventLimit"),
            l = this.dayGrid.headContainerEl.find(".fc-row");if (!this.dayGrid.rowEls) return void (n || (r = this.computeScrollerHeight(e), this.scroller.setHeight(r)));t.prototype.updateSize.call(this, e, n, i), this.dayGrid.colWeekNumbersVisible && (this.weekNumberWidth = s.matchCellWidths(this.el.find(".fc-week-number"))), this.scroller.clear(), s.uncompensateScroll(l), this.dayGrid.removeSegPopover(), a && "number" == typeof a && this.dayGrid.limitRows(a), r = this.computeScrollerHeight(e), this.setGridHeight(r, n), a && "number" != typeof a && this.dayGrid.limitRows(a), n || (this.scroller.setHeight(r), o = this.scroller.getScrollbarWidths(), (o.left || o.right) && (s.compensateScroll(l, o), r = this.computeScrollerHeight(e), this.scroller.setHeight(r)), this.scroller.lockOverflow(o));
      }, e.prototype.computeScrollerHeight = function (t) {
        return t - s.subtractInnerElHeight(this.el, this.scroller.el);
      }, e.prototype.setGridHeight = function (t, e) {
        e ? s.undistributeHeight(this.dayGrid.rowEls) : s.distributeHeight(this.dayGrid.rowEls, t, !0);
      }, e.prototype.computeInitialDateScroll = function () {
        return { top: 0 };
      }, e.prototype.queryDateScroll = function () {
        return { top: this.scroller.getScrollTop() };
      }, e.prototype.applyDateScroll = function (t) {
        void 0 !== t.top && this.scroller.setScrollTop(t.top);
      }, e;
    }(l.default);e.default = c, c.prototype.dateProfileGeneratorClass = u.default, c.prototype.dayGridClass = d.default;
  },,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, n) {
    function i(t, e, n) {
      var i;for (i = 0; i < t.length; i++) {
        if (!e(t[i].eventInstance.toLegacy(), n ? n.toLegacy() : null)) return !1;
      }return !0;
    }function r(t, e) {
      var n,
          i,
          r,
          o,
          s = e.toLegacy();for (n = 0; n < t.length; n++) {
        if (i = t[n].eventInstance, r = i.def, !1 === (o = r.getOverlap())) return !1;if ("function" == typeof o && !o(i.toLegacy(), s)) return !1;
      }return !0;
    }Object.defineProperty(e, "__esModule", { value: !0 });var o = n(5),
        s = n(12),
        a = n(49),
        l = n(6),
        u = n(35),
        d = function () {
      function t(t, e) {
        this.eventManager = t, this._calendar = e;
      }return t.prototype.opt = function (t) {
        return this._calendar.opt(t);
      }, t.prototype.isEventInstanceGroupAllowed = function (t) {
        var e,
            n = t.getEventDef(),
            i = this.eventRangesToEventFootprints(t.getAllEventRanges()),
            r = this.getPeerEventInstances(n),
            o = r.map(u.eventInstanceToEventRange),
            s = this.eventRangesToEventFootprints(o),
            a = n.getConstraint(),
            l = n.getOverlap(),
            d = this.opt("eventAllow");for (e = 0; e < i.length; e++) {
          if (!this.isFootprintAllowed(i[e].componentFootprint, s, a, l, i[e].eventInstance)) return !1;
        }if (d) for (e = 0; e < i.length; e++) {
          if (!1 === d(i[e].componentFootprint.toLegacy(this._calendar), i[e].getEventLegacy())) return !1;
        }return !0;
      }, t.prototype.getPeerEventInstances = function (t) {
        return this.eventManager.getEventInstancesWithoutId(t.id);
      }, t.prototype.isSelectionFootprintAllowed = function (t) {
        var e,
            n = this.eventManager.getEventInstances(),
            i = n.map(u.eventInstanceToEventRange),
            r = this.eventRangesToEventFootprints(i);return !!this.isFootprintAllowed(t, r, this.opt("selectConstraint"), this.opt("selectOverlap")) && (!(e = this.opt("selectAllow")) || !1 !== e(t.toLegacy(this._calendar)));
      }, t.prototype.isFootprintAllowed = function (t, e, n, o, s) {
        var a, l;if (null != n && (a = this.constraintValToFootprints(n, t.isAllDay), !this.isFootprintWithinConstraints(t, a))) return !1;if (l = this.collectOverlapEventFootprints(e, t), !1 === o) {
          if (l.length) return !1;
        } else if ("function" == typeof o && !i(l, o, s)) return !1;return !(s && !r(l, s));
      }, t.prototype.isFootprintWithinConstraints = function (t, e) {
        var n;for (n = 0; n < e.length; n++) {
          if (this.footprintContainsFootprint(e[n], t)) return !0;
        }return !1;
      }, t.prototype.constraintValToFootprints = function (t, e) {
        var n;return "businessHours" === t ? this.buildCurrentBusinessFootprints(e) : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? (n = this.parseEventDefToInstances(t), n ? this.eventInstancesToFootprints(n) : this.parseFootprints(t)) : null != t ? (n = this.eventManager.getEventInstancesWithId(t), this.eventInstancesToFootprints(n)) : void 0;
      }, t.prototype.buildCurrentBusinessFootprints = function (t) {
        var e = this._calendar.view,
            n = e.get("businessHourGenerator"),
            i = e.dateProfile.activeUnzonedRange,
            r = n.buildEventInstanceGroup(t, i);return r ? this.eventInstancesToFootprints(r.eventInstances) : [];
      }, t.prototype.eventInstancesToFootprints = function (t) {
        var e = t.map(u.eventInstanceToEventRange);return this.eventRangesToEventFootprints(e).map(u.eventFootprintToComponentFootprint);
      }, t.prototype.collectOverlapEventFootprints = function (t, e) {
        var n,
            i = [];for (n = 0; n < t.length; n++) {
          this.footprintsIntersect(e, t[n].componentFootprint) && i.push(t[n]);
        }return i;
      }, t.prototype.parseEventDefToInstances = function (t) {
        var e = this.eventManager,
            n = a.default.parse(t, new l.default(this._calendar));return !!n && n.buildInstances(e.currentPeriod.unzonedRange);
      }, t.prototype.eventRangesToEventFootprints = function (t) {
        var e,
            n = [];for (e = 0; e < t.length; e++) {
          n.push.apply(n, this.eventRangeToEventFootprints(t[e]));
        }return n;
      }, t.prototype.eventRangeToEventFootprints = function (t) {
        return [u.eventRangeToEventFootprint(t)];
      }, t.prototype.parseFootprints = function (t) {
        var e, n;return t.start && (e = this._calendar.moment(t.start), e.isValid() || (e = null)), t.end && (n = this._calendar.moment(t.end), n.isValid() || (n = null)), [new s.default(new o.default(e, n), e && !e.hasTime() || n && !n.hasTime())];
      }, t.prototype.footprintContainsFootprint = function (t, e) {
        return t.unzonedRange.containsRange(e.unzonedRange);
      }, t.prototype.footprintsIntersect = function (t, e) {
        return t.unzonedRange.intersectsWith(e.unzonedRange);
      }, t;
    }();e.default = d;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(4),
        o = n(14),
        s = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.defineStandardProps = function (t) {
        var e = this.prototype;e.hasOwnProperty("standardPropMap") || (e.standardPropMap = Object.create(e.standardPropMap)), r.copyOwnProps(t, e.standardPropMap);
      }, e.copyVerbatimStandardProps = function (t, e) {
        var n,
            i = this.prototype.standardPropMap;for (n in i) {
          null != t[n] && !0 === i[n] && (e[n] = t[n]);
        }
      }, e.prototype.applyProps = function (t) {
        var e,
            n = this.standardPropMap,
            i = {},
            r = {};for (e in t) {
          !0 === n[e] ? this[e] = t[e] : !1 === n[e] ? i[e] = t[e] : r[e] = t[e];
        }return this.applyMiscProps(r), this.applyManualStandardProps(i);
      }, e.prototype.applyManualStandardProps = function (t) {
        return !0;
      }, e.prototype.applyMiscProps = function (t) {}, e.prototype.isStandardProp = function (t) {
        return t in this.standardPropMap;
      }, e;
    }(o.default);e.default = s, s.prototype.standardPropMap = {};
  }, function (t, e) {
    Object.defineProperty(e, "__esModule", { value: !0 });var n = function () {
      function t(t, e) {
        this.def = t, this.dateProfile = e;
      }return t.prototype.toLegacy = function () {
        var t = this.dateProfile,
            e = this.def.toLegacy();return e.start = t.start.clone(), e.end = t.end ? t.end.clone() : null, e;
      }, t;
    }();e.default = n;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(0),
        s = n(34),
        a = n(209),
        l = n(17),
        u = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.prototype.isAllDay = function () {
        return !this.startTime && !this.endTime;
      }, e.prototype.buildInstances = function (t) {
        for (var e, n, i, r = this.source.calendar, o = t.getStart(), s = t.getEnd(), u = []; o.isBefore(s);) {
          this.dowHash && !this.dowHash[o.day()] || (e = r.applyTimezone(o), n = e.clone(), i = null, this.startTime ? n.time(this.startTime) : n.stripTime(), this.endTime && (i = e.clone().time(this.endTime)), u.push(new a.default(this, new l.default(n, i, r)))), o.add(1, "days");
        }return u;
      }, e.prototype.setDow = function (t) {
        this.dowHash || (this.dowHash = {});for (var e = 0; e < t.length; e++) {
          this.dowHash[t[e]] = !0;
        }
      }, e.prototype.clone = function () {
        var e = t.prototype.clone.call(this);return e.startTime && (e.startTime = o.duration(this.startTime)), e.endTime && (e.endTime = o.duration(this.endTime)), this.dowHash && (e.dowHash = r.extend({}, this.dowHash)), e;
      }, e;
    }(s.default);e.default = u, u.prototype.applyProps = function (t) {
      var e = s.default.prototype.applyProps.call(this, t);return t.start && (this.startTime = o.duration(t.start)), t.end && (this.endTime = o.duration(t.end)), t.dow && this.setDow(t.dow), e;
    }, u.defineStandardProps({ start: !1, end: !1, dow: !1 });
  }, function (t, e) {
    Object.defineProperty(e, "__esModule", { value: !0 });var n = function () {
      function t(t, e, n) {
        this.unzonedRange = t, this.eventDef = e, n && (this.eventInstance = n);
      }return t;
    }();e.default = n;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(3),
        r = n(35),
        o = n(18),
        s = n(210),
        a = n(6),
        l = { start: "09:00", end: "17:00", dow: [1, 2, 3, 4, 5], rendering: "inverse-background" },
        u = function () {
      function t(t, e) {
        this.rawComplexDef = t, this.calendar = e;
      }return t.prototype.buildEventInstanceGroup = function (t, e) {
        var n,
            i = this.buildEventDefs(t);if (i.length) return n = new o.default(r.eventDefsToEventInstances(i, e)), n.explicitEventDef = i[0], n;
      }, t.prototype.buildEventDefs = function (t) {
        var e,
            n = this.rawComplexDef,
            r = [],
            o = !1,
            s = [];for (!0 === n ? r = [{}] : i.isPlainObject(n) ? r = [n] : i.isArray(n) && (r = n, o = !0), e = 0; e < r.length; e++) {
          o && !r[e].dow || s.push(this.buildEventDef(t, r[e]));
        }return s;
      }, t.prototype.buildEventDef = function (t, e) {
        var n = i.extend({}, l, e);return t && (n.start = null, n.end = null), s.default.parse(n, new a.default(this.calendar));
      }, t;
    }();e.default = u;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(19),
        o = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e;
    }(r.default);e.default = o, o.prototype.classes = { widget: "fc-unthemed", widgetHeader: "fc-widget-header", widgetContent: "fc-widget-content", buttonGroup: "fc-button-group", button: "fc-button", cornerLeft: "fc-corner-left", cornerRight: "fc-corner-right", stateDefault: "fc-state-default", stateActive: "fc-state-active", stateDisabled: "fc-state-disabled", stateHover: "fc-state-hover", stateDown: "fc-state-down", popoverHeader: "fc-widget-header", popoverContent: "fc-widget-content", headerRow: "fc-widget-header", dayRow: "fc-widget-content", listView: "fc-widget-content" }, o.prototype.baseIconClass = "fc-icon", o.prototype.iconClasses = { close: "fc-icon-x", prev: "fc-icon-left-single-arrow", next: "fc-icon-right-single-arrow", prevYear: "fc-icon-left-double-arrow", nextYear: "fc-icon-right-double-arrow" }, o.prototype.iconOverrideOption = "buttonIcons", o.prototype.iconOverrideCustomButtonOption = "icon", o.prototype.iconOverridePrefix = "fc-icon-";
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(19),
        o = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e;
    }(r.default);e.default = o, o.prototype.classes = { widget: "ui-widget", widgetHeader: "ui-widget-header", widgetContent: "ui-widget-content", buttonGroup: "fc-button-group", button: "ui-button", cornerLeft: "ui-corner-left", cornerRight: "ui-corner-right", stateDefault: "ui-state-default", stateActive: "ui-state-active", stateDisabled: "ui-state-disabled", stateHover: "ui-state-hover", stateDown: "ui-state-down", today: "ui-state-highlight", popoverHeader: "ui-widget-header", popoverContent: "ui-widget-content", headerRow: "ui-widget-header", dayRow: "ui-widget-content", listView: "ui-widget-content" }, o.prototype.baseIconClass = "ui-icon", o.prototype.iconClasses = { close: "ui-icon-closethick", prev: "ui-icon-circle-triangle-w", next: "ui-icon-circle-triangle-e", prevYear: "ui-icon-seek-prev", nextYear: "ui-icon-seek-next" }, o.prototype.iconOverrideOption = "themeButtonIcons", o.prototype.iconOverrideCustomButtonOption = "themeIcon", o.prototype.iconOverridePrefix = "ui-icon-";
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(20),
        s = n(6),
        a = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.parse = function (t, e) {
        var n;return r.isFunction(t.events) ? n = t : r.isFunction(t) && (n = { events: t }), !!n && s.default.parse.call(this, n, e);
      }, e.prototype.fetch = function (t, e, n) {
        var i = this;return this.calendar.pushLoading(), o.default.construct(function (r) {
          i.func.call(i.calendar, t.clone(), e.clone(), n, function (t) {
            i.calendar.popLoading(), r(i.parseEventDefs(t));
          });
        });
      }, e.prototype.getPrimitive = function () {
        return this.func;
      }, e.prototype.applyManualStandardProps = function (e) {
        var n = t.prototype.applyManualStandardProps.call(this, e);return this.func = e.events, n;
      }, e;
    }(s.default);e.default = a, a.defineStandardProps({ events: !1 });
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(4),
        s = n(20),
        a = n(6),
        l = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.parse = function (t, e) {
        var n;return "string" == typeof t.url ? n = t : "string" == typeof t && (n = { url: t }), !!n && a.default.parse.call(this, n, e);
      }, e.prototype.fetch = function (t, n, i) {
        var a = this,
            l = this.ajaxSettings,
            u = l.success,
            d = l.error,
            c = this.buildRequestParams(t, n, i);return this.calendar.pushLoading(), s.default.construct(function (t, n) {
          r.ajax(r.extend({}, e.AJAX_DEFAULTS, l, { url: a.url, data: c, success: function success(e, i, s) {
              var l;a.calendar.popLoading(), e ? (l = o.applyAll(u, a, [e, i, s]), r.isArray(l) && (e = l), t(a.parseEventDefs(e))) : n();
            }, error: function error(t, e, i) {
              a.calendar.popLoading(), o.applyAll(d, a, [t, e, i]), n();
            } }));
        });
      }, e.prototype.buildRequestParams = function (t, e, n) {
        var i,
            o,
            s,
            a,
            l = this.calendar,
            u = this.ajaxSettings,
            d = {};return i = this.startParam, null == i && (i = l.opt("startParam")), o = this.endParam, null == o && (o = l.opt("endParam")), s = this.timezoneParam, null == s && (s = l.opt("timezoneParam")), a = r.isFunction(u.data) ? u.data() : u.data || {}, r.extend(d, a), d[i] = t.format(), d[o] = e.format(), n && "local" !== n && (d[s] = n), d;
      }, e.prototype.getPrimitive = function () {
        return this.url;
      }, e.prototype.applyMiscProps = function (t) {
        this.ajaxSettings = t;
      }, e.AJAX_DEFAULTS = { dataType: "json", cache: !1 }, e;
    }(a.default);e.default = l, l.defineStandardProps({ url: !0, startParam: !0, endParam: !0, timezoneParam: !0 });
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(11),
        r = function () {
      function t() {
        this.q = [], this.isPaused = !1, this.isRunning = !1;
      }return t.prototype.queue = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }this.q.push.apply(this.q, t), this.tryStart();
      }, t.prototype.pause = function () {
        this.isPaused = !0;
      }, t.prototype.resume = function () {
        this.isPaused = !1, this.tryStart();
      }, t.prototype.getIsIdle = function () {
        return !this.isRunning && !this.isPaused;
      }, t.prototype.tryStart = function () {
        !this.isRunning && this.canRunNext() && (this.isRunning = !0, this.trigger("start"), this.runRemaining());
      }, t.prototype.canRunNext = function () {
        return !this.isPaused && this.q.length;
      }, t.prototype.runRemaining = function () {
        var t,
            e,
            n = this;do {
          if (t = this.q.shift(), (e = this.runTask(t)) && e.then) return void e.then(function () {
            n.canRunNext() && n.runRemaining();
          });
        } while (this.canRunNext());this.trigger("stop"), this.isRunning = !1, this.tryStart();
      }, t.prototype.runTask = function (t) {
        return t();
      }, t;
    }();e.default = r, i.default.mixInto(r);
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(217),
        o = function (t) {
      function e(e) {
        var n = t.call(this) || this;return n.waitsByNamespace = e || {}, n;
      }return i.__extends(e, t), e.prototype.queue = function (t, e, n) {
        var i,
            r = { func: t, namespace: e, type: n };e && (i = this.waitsByNamespace[e]), this.waitNamespace && (e === this.waitNamespace && null != i ? this.delayWait(i) : (this.clearWait(), this.tryStart())), this.compoundTask(r) && (this.waitNamespace || null == i ? this.tryStart() : this.startWait(e, i));
      }, e.prototype.startWait = function (t, e) {
        this.waitNamespace = t, this.spawnWait(e);
      }, e.prototype.delayWait = function (t) {
        clearTimeout(this.waitId), this.spawnWait(t);
      }, e.prototype.spawnWait = function (t) {
        var e = this;this.waitId = setTimeout(function () {
          e.waitNamespace = null, e.tryStart();
        }, t);
      }, e.prototype.clearWait = function () {
        this.waitNamespace && (clearTimeout(this.waitId), this.waitId = null, this.waitNamespace = null);
      }, e.prototype.canRunNext = function () {
        if (!t.prototype.canRunNext.call(this)) return !1;if (this.waitNamespace) {
          for (var e = this.q, n = 0; n < e.length; n++) {
            if (e[n].namespace !== this.waitNamespace) return !0;
          }return !1;
        }return !0;
      }, e.prototype.runTask = function (t) {
        t.func();
      }, e.prototype.compoundTask = function (t) {
        var e,
            n,
            i = this.q,
            r = !0;if (t.namespace && "destroy" === t.type) for (e = i.length - 1; e >= 0; e--) {
          switch (n = i[e], n.type) {case "init":
              r = !1;case "add":case "remove":
              i.splice(e, 1);}
        }return r && i.push(t), r;
      }, e;
    }(r.default);e.default = o;
  }, function (t, e, n) {
    function i(t) {
      var e,
          n,
          i,
          r = [];for (e in t) {
        for (n = t[e].eventInstances, i = 0; i < n.length; i++) {
          r.push(n[i].toLegacy());
        }
      }return r;
    }Object.defineProperty(e, "__esModule", { value: !0 });var r = n(2),
        o = n(3),
        s = n(0),
        a = n(4),
        l = n(10),
        u = n(47),
        d = n(237),
        c = n(35),
        p = function (t) {
      function e(n, i) {
        var r = t.call(this) || this;return r.isRTL = !1, r.hitsNeededDepth = 0, r.hasAllDayBusinessHours = !1, r.isDatesRendered = !1, n && (r.view = n), i && (r.options = i), r.uid = String(e.guid++), r.childrenByUid = {}, r.nextDayThreshold = s.duration(r.opt("nextDayThreshold")), r.isRTL = r.opt("isRTL"), r.fillRendererClass && (r.fillRenderer = new r.fillRendererClass(r)), r.eventRendererClass && (r.eventRenderer = new r.eventRendererClass(r, r.fillRenderer)), r.helperRendererClass && r.eventRenderer && (r.helperRenderer = new r.helperRendererClass(r, r.eventRenderer)), r.businessHourRendererClass && r.fillRenderer && (r.businessHourRenderer = new r.businessHourRendererClass(r, r.fillRenderer)), r;
      }return r.__extends(e, t), e.prototype.addChild = function (t) {
        return !this.childrenByUid[t.uid] && (this.childrenByUid[t.uid] = t, !0);
      }, e.prototype.removeChild = function (t) {
        return !!this.childrenByUid[t.uid] && (delete this.childrenByUid[t.uid], !0);
      }, e.prototype.updateSize = function (t, e, n) {
        this.callChildren("updateSize", arguments);
      }, e.prototype.opt = function (t) {
        return this._getView().opt(t);
      }, e.prototype.publiclyTrigger = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }var n = this._getCalendar();return n.publiclyTrigger.apply(n, t);
      }, e.prototype.hasPublicHandlers = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }var n = this._getCalendar();return n.hasPublicHandlers.apply(n, t);
      }, e.prototype.executeDateRender = function (t) {
        this.dateProfile = t, this.renderDates(t), this.isDatesRendered = !0, this.callChildren("executeDateRender", arguments);
      }, e.prototype.executeDateUnrender = function () {
        this.callChildren("executeDateUnrender", arguments), this.dateProfile = null, this.unrenderDates(), this.isDatesRendered = !1;
      }, e.prototype.renderDates = function (t) {}, e.prototype.unrenderDates = function () {}, e.prototype.getNowIndicatorUnit = function () {}, e.prototype.renderNowIndicator = function (t) {
        this.callChildren("renderNowIndicator", arguments);
      }, e.prototype.unrenderNowIndicator = function () {
        this.callChildren("unrenderNowIndicator", arguments);
      }, e.prototype.renderBusinessHours = function (t) {
        this.businessHourRenderer && this.businessHourRenderer.render(t), this.callChildren("renderBusinessHours", arguments);
      }, e.prototype.unrenderBusinessHours = function () {
        this.callChildren("unrenderBusinessHours", arguments), this.businessHourRenderer && this.businessHourRenderer.unrender();
      }, e.prototype.executeEventRender = function (t) {
        this.eventRenderer ? (this.eventRenderer.rangeUpdated(), this.eventRenderer.render(t)) : this.renderEvents && this.renderEvents(i(t)), this.callChildren("executeEventRender", arguments);
      }, e.prototype.executeEventUnrender = function () {
        this.callChildren("executeEventUnrender", arguments), this.eventRenderer ? this.eventRenderer.unrender() : this.destroyEvents && this.destroyEvents();
      }, e.prototype.getBusinessHourSegs = function () {
        var t = this.getOwnBusinessHourSegs();return this.iterChildren(function (e) {
          t.push.apply(t, e.getBusinessHourSegs());
        }), t;
      }, e.prototype.getOwnBusinessHourSegs = function () {
        return this.businessHourRenderer ? this.businessHourRenderer.getSegs() : [];
      }, e.prototype.getEventSegs = function () {
        var t = this.getOwnEventSegs();return this.iterChildren(function (e) {
          t.push.apply(t, e.getEventSegs());
        }), t;
      }, e.prototype.getOwnEventSegs = function () {
        return this.eventRenderer ? this.eventRenderer.getSegs() : [];
      }, e.prototype.triggerAfterEventsRendered = function () {
        this.triggerAfterEventSegsRendered(this.getEventSegs()), this.publiclyTrigger("eventAfterAllRender", { context: this, args: [this] });
      }, e.prototype.triggerAfterEventSegsRendered = function (t) {
        var e = this;this.hasPublicHandlers("eventAfterRender") && t.forEach(function (t) {
          var n;t.el && (n = t.footprint.getEventLegacy(), e.publiclyTrigger("eventAfterRender", { context: n, args: [n, t.el, e] }));
        });
      }, e.prototype.triggerBeforeEventsDestroyed = function () {
        this.triggerBeforeEventSegsDestroyed(this.getEventSegs());
      }, e.prototype.triggerBeforeEventSegsDestroyed = function (t) {
        var e = this;this.hasPublicHandlers("eventDestroy") && t.forEach(function (t) {
          var n;t.el && (n = t.footprint.getEventLegacy(), e.publiclyTrigger("eventDestroy", { context: n, args: [n, t.el, e] }));
        });
      }, e.prototype.showEventsWithId = function (t) {
        this.getEventSegs().forEach(function (e) {
          e.footprint.eventDef.id === t && e.el && e.el.css("visibility", "");
        }), this.callChildren("showEventsWithId", arguments);
      }, e.prototype.hideEventsWithId = function (t) {
        this.getEventSegs().forEach(function (e) {
          e.footprint.eventDef.id === t && e.el && e.el.css("visibility", "hidden");
        }), this.callChildren("hideEventsWithId", arguments);
      }, e.prototype.renderDrag = function (t, e, n) {
        var i = !1;return this.iterChildren(function (r) {
          r.renderDrag(t, e, n) && (i = !0);
        }), i;
      }, e.prototype.unrenderDrag = function () {
        this.callChildren("unrenderDrag", arguments);
      }, e.prototype.renderEventResize = function (t, e, n) {
        this.callChildren("renderEventResize", arguments);
      }, e.prototype.unrenderEventResize = function () {
        this.callChildren("unrenderEventResize", arguments);
      }, e.prototype.renderSelectionFootprint = function (t) {
        this.renderHighlight(t), this.callChildren("renderSelectionFootprint", arguments);
      }, e.prototype.unrenderSelection = function () {
        this.unrenderHighlight(), this.callChildren("unrenderSelection", arguments);
      }, e.prototype.renderHighlight = function (t) {
        this.fillRenderer && this.fillRenderer.renderFootprint("highlight", t, { getClasses: function getClasses() {
            return ["fc-highlight"];
          } }), this.callChildren("renderHighlight", arguments);
      }, e.prototype.unrenderHighlight = function () {
        this.fillRenderer && this.fillRenderer.unrender("highlight"), this.callChildren("unrenderHighlight", arguments);
      }, e.prototype.hitsNeeded = function () {
        this.hitsNeededDepth++ || this.prepareHits(), this.callChildren("hitsNeeded", arguments);
      }, e.prototype.hitsNotNeeded = function () {
        this.hitsNeededDepth && ! --this.hitsNeededDepth && this.releaseHits(), this.callChildren("hitsNotNeeded", arguments);
      }, e.prototype.prepareHits = function () {}, e.prototype.releaseHits = function () {}, e.prototype.queryHit = function (t, e) {
        var n,
            i,
            r = this.childrenByUid;for (n in r) {
          if (i = r[n].queryHit(t, e)) break;
        }return i;
      }, e.prototype.getSafeHitFootprint = function (t) {
        var e = this.getHitFootprint(t);return this.dateProfile.activeUnzonedRange.containsRange(e.unzonedRange) ? e : null;
      }, e.prototype.getHitFootprint = function (t) {}, e.prototype.getHitEl = function (t) {}, e.prototype.eventRangesToEventFootprints = function (t) {
        var e,
            n = [];for (e = 0; e < t.length; e++) {
          n.push.apply(n, this.eventRangeToEventFootprints(t[e]));
        }return n;
      }, e.prototype.eventRangeToEventFootprints = function (t) {
        return [c.eventRangeToEventFootprint(t)];
      }, e.prototype.eventFootprintsToSegs = function (t) {
        var e,
            n = [];for (e = 0; e < t.length; e++) {
          n.push.apply(n, this.eventFootprintToSegs(t[e]));
        }return n;
      }, e.prototype.eventFootprintToSegs = function (t) {
        var e,
            n,
            i,
            r = t.componentFootprint.unzonedRange;for (e = this.componentFootprintToSegs(t.componentFootprint), n = 0; n < e.length; n++) {
          i = e[n], r.isStart || (i.isStart = !1), r.isEnd || (i.isEnd = !1), i.footprint = t;
        }return e;
      }, e.prototype.componentFootprintToSegs = function (t) {
        return [];
      }, e.prototype.callChildren = function (t, e) {
        this.iterChildren(function (n) {
          n[t].apply(n, e);
        });
      }, e.prototype.iterChildren = function (t) {
        var e,
            n = this.childrenByUid;for (e in n) {
          t(n[e]);
        }
      }, e.prototype._getCalendar = function () {
        var t = this;return t.calendar || t.view.calendar;
      }, e.prototype._getView = function () {
        return this.view;
      }, e.prototype._getDateProfile = function () {
        return this._getView().get("dateProfile");
      }, e.prototype.buildGotoAnchorHtml = function (t, e, n) {
        var i, r, s, u;return o.isPlainObject(t) ? (i = t.date, r = t.type, s = t.forceOff) : i = t, i = l.default(i), u = { date: i.format("YYYY-MM-DD"), type: r || "day" }, "string" == typeof e && (n = e, e = null), e = e ? " " + a.attrsToStr(e) : "", n = n || "", !s && this.opt("navLinks") ? "<a" + e + ' data-goto="' + a.htmlEscape(JSON.stringify(u)) + '">' + n + "</a>" : "<span" + e + ">" + n + "</span>";
      }, e.prototype.getAllDayHtml = function () {
        return this.opt("allDayHtml") || a.htmlEscape(this.opt("allDayText"));
      }, e.prototype.getDayClasses = function (t, e) {
        var n,
            i = this._getView(),
            r = [];return this.dateProfile.activeUnzonedRange.containsDate(t) ? (r.push("fc-" + a.dayIDs[t.day()]), i.isDateInOtherMonth(t, this.dateProfile) && r.push("fc-other-month"), n = i.calendar.getNow(), t.isSame(n, "day") ? (r.push("fc-today"), !0 !== e && r.push(i.calendar.theme.getClass("today"))) : t < n ? r.push("fc-past") : r.push("fc-future")) : r.push("fc-disabled-day"), r;
      }, e.prototype.formatRange = function (t, e, n, i) {
        var r = t.end;return e && (r = r.clone().subtract(1)), u.formatRange(t.start, r, n, i, this.isRTL);
      }, e.prototype.currentRangeAs = function (t) {
        return this._getDateProfile().currentUnzonedRange.as(t);
      }, e.prototype.computeDayRange = function (t) {
        var e = this._getCalendar(),
            n = e.msToUtcMoment(t.startMs, !0),
            i = e.msToUtcMoment(t.endMs),
            r = +i.time(),
            o = i.clone().stripTime();return r && r >= this.nextDayThreshold && o.add(1, "days"), o <= n && (o = n.clone().add(1, "days")), { start: n, end: o };
      }, e.prototype.isMultiDayRange = function (t) {
        var e = this.computeDayRange(t);return e.end.diff(e.start, "days") > 1;
      }, e.guid = 0, e;
    }(d.default);e.default = p;
  }, function (t, e, n) {
    function i(t, e) {
      return null == e ? t : r.isFunction(e) ? t.filter(e) : (e += "", t.filter(function (t) {
        return t.id == e || t._id === e;
      }));
    }Object.defineProperty(e, "__esModule", { value: !0 });var r = n(3),
        o = n(0),
        s = n(4),
        a = n(32),
        l = n(238),
        u = n(21),
        d = n(11),
        c = n(7),
        p = n(239),
        h = n(240),
        f = n(241),
        g = n(207),
        v = n(31),
        y = n(10),
        m = n(5),
        b = n(12),
        w = n(17),
        D = n(242),
        E = n(212),
        S = n(38),
        C = n(49),
        R = n(13),
        T = n(37),
        M = n(6),
        I = n(51),
        H = function () {
      function t(t, e) {
        this.loadingLevel = 0, this.ignoreUpdateViewSize = 0, this.freezeContentHeightDepth = 0, u.default.needed(), this.el = t, this.viewsByType = {}, this.optionsManager = new h.default(this, e), this.viewSpecManager = new f.default(this.optionsManager, this), this.initMomentInternals(), this.initCurrentDate(), this.initEventManager(), this.constraints = new g.default(this.eventManager, this), this.constructed();
      }return t.prototype.constructed = function () {}, t.prototype.getView = function () {
        return this.view;
      }, t.prototype.publiclyTrigger = function (t, e) {
        var n,
            i,
            o = this.opt(t);if (r.isPlainObject(e) ? (n = e.context, i = e.args) : r.isArray(e) && (i = e), null == n && (n = this.el[0]), i || (i = []), this.triggerWith(t, n, i), o) return o.apply(n, i);
      }, t.prototype.hasPublicHandlers = function (t) {
        return this.hasHandlers(t) || this.opt(t);
      }, t.prototype.option = function (t, e) {
        var n;if ("string" == typeof t) {
          if (void 0 === e) return this.optionsManager.get(t);n = {}, n[t] = e, this.optionsManager.add(n);
        } else "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && this.optionsManager.add(t);
      }, t.prototype.opt = function (t) {
        return this.optionsManager.get(t);
      }, t.prototype.instantiateView = function (t) {
        var e = this.viewSpecManager.getViewSpec(t);if (!e) throw new Error('View type "' + t + '" is not valid');return new e.class(this, e);
      }, t.prototype.isValidViewType = function (t) {
        return Boolean(this.viewSpecManager.getViewSpec(t));
      }, t.prototype.changeView = function (t, e) {
        e && (e.start && e.end ? this.optionsManager.recordOverrides({ visibleRange: e }) : this.currentDate = this.moment(e).stripZone()), this.renderView(t);
      }, t.prototype.zoomTo = function (t, e) {
        var n;e = e || "day", n = this.viewSpecManager.getViewSpec(e) || this.viewSpecManager.getUnitViewSpec(e), this.currentDate = t.clone(), this.renderView(n ? n.type : null);
      }, t.prototype.initCurrentDate = function () {
        var t = this.opt("defaultDate");this.currentDate = null != t ? this.moment(t).stripZone() : this.getNow();
      }, t.prototype.prev = function () {
        var t = this.view,
            e = t.dateProfileGenerator.buildPrev(t.get("dateProfile"));e.isValid && (this.currentDate = e.date, this.renderView());
      }, t.prototype.next = function () {
        var t = this.view,
            e = t.dateProfileGenerator.buildNext(t.get("dateProfile"));e.isValid && (this.currentDate = e.date, this.renderView());
      }, t.prototype.prevYear = function () {
        this.currentDate.add(-1, "years"), this.renderView();
      }, t.prototype.nextYear = function () {
        this.currentDate.add(1, "years"), this.renderView();
      }, t.prototype.today = function () {
        this.currentDate = this.getNow(), this.renderView();
      }, t.prototype.gotoDate = function (t) {
        this.currentDate = this.moment(t).stripZone(), this.renderView();
      }, t.prototype.incrementDate = function (t) {
        this.currentDate.add(o.duration(t)), this.renderView();
      }, t.prototype.getDate = function () {
        return this.applyTimezone(this.currentDate);
      }, t.prototype.pushLoading = function () {
        this.loadingLevel++ || this.publiclyTrigger("loading", [!0, this.view]);
      }, t.prototype.popLoading = function () {
        --this.loadingLevel || this.publiclyTrigger("loading", [!1, this.view]);
      }, t.prototype.render = function () {
        this.contentEl ? this.elementVisible() && (this.calcSize(), this.updateViewSize()) : this.initialRender();
      }, t.prototype.initialRender = function () {
        var t = this,
            e = this.el;e.addClass("fc"), e.on("click.fc", "a[data-goto]", function (e) {
          var n = r(e.currentTarget),
              i = n.data("goto"),
              o = t.moment(i.date),
              a = i.type,
              l = t.view.opt("navLink" + s.capitaliseFirstLetter(a) + "Click");"function" == typeof l ? l(o, e) : ("string" == typeof l && (a = l), t.zoomTo(o, a));
        }), this.optionsManager.watch("settingTheme", ["?theme", "?themeSystem"], function (n) {
          var i = I.getThemeSystemClass(n.themeSystem || n.theme),
              r = new i(t.optionsManager),
              o = r.getClass("widget");t.theme = r, o && e.addClass(o);
        }, function () {
          var n = t.theme.getClass("widget");t.theme = null, n && e.removeClass(n);
        }), this.optionsManager.watch("settingBusinessHourGenerator", ["?businessHours"], function (e) {
          t.businessHourGenerator = new E.default(e.businessHours, t), t.view && t.view.set("businessHourGenerator", t.businessHourGenerator);
        }, function () {
          t.businessHourGenerator = null;
        }), this.optionsManager.watch("applyingDirClasses", ["?isRTL", "?locale"], function (t) {
          e.toggleClass("fc-ltr", !t.isRTL), e.toggleClass("fc-rtl", t.isRTL);
        }), this.contentEl = r("<div class='fc-view-container'/>").prependTo(e), this.initToolbars(), this.renderHeader(), this.renderFooter(), this.renderView(this.opt("defaultView")), this.opt("handleWindowResize") && r(window).resize(this.windowResizeProxy = s.debounce(this.windowResize.bind(this), this.opt("windowResizeDelay")));
      }, t.prototype.destroy = function () {
        this.view && this.clearView(), this.toolbarsManager.proxyCall("removeElement"), this.contentEl.remove(), this.el.removeClass("fc fc-ltr fc-rtl"), this.optionsManager.unwatch("settingTheme"), this.optionsManager.unwatch("settingBusinessHourGenerator"), this.el.off(".fc"), this.windowResizeProxy && (r(window).unbind("resize", this.windowResizeProxy), this.windowResizeProxy = null), u.default.unneeded();
      }, t.prototype.elementVisible = function () {
        return this.el.is(":visible");
      }, t.prototype.bindViewHandlers = function (t) {
        var e = this;t.watch("titleForCalendar", ["title"], function (n) {
          t === e.view && e.setToolbarsTitle(n.title);
        }), t.watch("dateProfileForCalendar", ["dateProfile"], function (n) {
          t === e.view && (e.currentDate = n.dateProfile.date, e.updateToolbarButtons(n.dateProfile));
        });
      }, t.prototype.unbindViewHandlers = function (t) {
        t.unwatch("titleForCalendar"), t.unwatch("dateProfileForCalendar");
      }, t.prototype.renderView = function (t) {
        var e,
            n = this.view;this.freezeContentHeight(), n && t && n.type !== t && this.clearView(), !this.view && t && (e = this.view = this.viewsByType[t] || (this.viewsByType[t] = this.instantiateView(t)), this.bindViewHandlers(e), e.startBatchRender(), e.setElement(r("<div class='fc-view fc-" + t + "-view' />").appendTo(this.contentEl)), this.toolbarsManager.proxyCall("activateButton", t)), this.view && (this.view.get("businessHourGenerator") !== this.businessHourGenerator && this.view.set("businessHourGenerator", this.businessHourGenerator), this.view.setDate(this.currentDate), e && e.stopBatchRender()), this.thawContentHeight();
      }, t.prototype.clearView = function () {
        var t = this.view;this.toolbarsManager.proxyCall("deactivateButton", t.type), this.unbindViewHandlers(t), t.removeElement(), t.unsetDate(), this.view = null;
      }, t.prototype.reinitView = function () {
        var t = this.view,
            e = t.queryScroll();this.freezeContentHeight(), this.clearView(), this.calcSize(), this.renderView(t.type), this.view.applyScroll(e), this.thawContentHeight();
      }, t.prototype.getSuggestedViewHeight = function () {
        return null == this.suggestedViewHeight && this.calcSize(), this.suggestedViewHeight;
      }, t.prototype.isHeightAuto = function () {
        return "auto" === this.opt("contentHeight") || "auto" === this.opt("height");
      }, t.prototype.updateViewSize = function (t) {
        void 0 === t && (t = !1);var e,
            n = this.view;if (!this.ignoreUpdateViewSize && n) return t && (this.calcSize(), e = n.queryScroll()), this.ignoreUpdateViewSize++, n.updateSize(this.getSuggestedViewHeight(), this.isHeightAuto(), t), this.ignoreUpdateViewSize--, t && n.applyScroll(e), !0;
      }, t.prototype.calcSize = function () {
        this.elementVisible() && this._calcSize();
      }, t.prototype._calcSize = function () {
        var t = this.opt("contentHeight"),
            e = this.opt("height");this.suggestedViewHeight = "number" == typeof t ? t : "function" == typeof t ? t() : "number" == typeof e ? e - this.queryToolbarsHeight() : "function" == typeof e ? e() - this.queryToolbarsHeight() : "parent" === e ? this.el.parent().height() - this.queryToolbarsHeight() : Math.round(this.contentEl.width() / Math.max(this.opt("aspectRatio"), .5));
      }, t.prototype.windowResize = function (t) {
        t.target === window && this.view && this.view.isDatesRendered && this.updateViewSize(!0) && this.publiclyTrigger("windowResize", [this.view]);
      }, t.prototype.freezeContentHeight = function () {
        this.freezeContentHeightDepth++ || this.forceFreezeContentHeight();
      }, t.prototype.forceFreezeContentHeight = function () {
        this.contentEl.css({ width: "100%", height: this.contentEl.height(), overflow: "hidden" });
      }, t.prototype.thawContentHeight = function () {
        this.freezeContentHeightDepth--, this.contentEl.css({ width: "", height: "", overflow: "" }), this.freezeContentHeightDepth && this.forceFreezeContentHeight();
      }, t.prototype.initToolbars = function () {
        this.header = new p.default(this, this.computeHeaderOptions()), this.footer = new p.default(this, this.computeFooterOptions()), this.toolbarsManager = new l.default([this.header, this.footer]);
      }, t.prototype.computeHeaderOptions = function () {
        return { extraClasses: "fc-header-toolbar", layout: this.opt("header") };
      }, t.prototype.computeFooterOptions = function () {
        return { extraClasses: "fc-footer-toolbar", layout: this.opt("footer") };
      }, t.prototype.renderHeader = function () {
        var t = this.header;t.setToolbarOptions(this.computeHeaderOptions()), t.render(), t.el && this.el.prepend(t.el);
      }, t.prototype.renderFooter = function () {
        var t = this.footer;t.setToolbarOptions(this.computeFooterOptions()), t.render(), t.el && this.el.append(t.el);
      }, t.prototype.setToolbarsTitle = function (t) {
        this.toolbarsManager.proxyCall("updateTitle", t);
      }, t.prototype.updateToolbarButtons = function (t) {
        var e = this.getNow(),
            n = this.view,
            i = n.dateProfileGenerator.build(e),
            r = n.dateProfileGenerator.buildPrev(n.get("dateProfile")),
            o = n.dateProfileGenerator.buildNext(n.get("dateProfile"));this.toolbarsManager.proxyCall(i.isValid && !t.currentUnzonedRange.containsDate(e) ? "enableButton" : "disableButton", "today"), this.toolbarsManager.proxyCall(r.isValid ? "enableButton" : "disableButton", "prev"), this.toolbarsManager.proxyCall(o.isValid ? "enableButton" : "disableButton", "next");
      }, t.prototype.queryToolbarsHeight = function () {
        return this.toolbarsManager.items.reduce(function (t, e) {
          return t + (e.el ? e.el.outerHeight(!0) : 0);
        }, 0);
      }, t.prototype.select = function (t, e) {
        this.view.select(this.buildSelectFootprint.apply(this, arguments));
      }, t.prototype.unselect = function () {
        this.view && this.view.unselect();
      }, t.prototype.buildSelectFootprint = function (t, e) {
        var n,
            i = this.moment(t).stripZone();return n = e ? this.moment(e).stripZone() : i.hasTime() ? i.clone().add(this.defaultTimedEventDuration) : i.clone().add(this.defaultAllDayEventDuration), new b.default(new m.default(i, n), !i.hasTime());
      }, t.prototype.initMomentInternals = function () {
        var t = this;this.defaultAllDayEventDuration = o.duration(this.opt("defaultAllDayEventDuration")), this.defaultTimedEventDuration = o.duration(this.opt("defaultTimedEventDuration")), this.optionsManager.watch("buildingMomentLocale", ["?locale", "?monthNames", "?monthNamesShort", "?dayNames", "?dayNamesShort", "?firstDay", "?weekNumberCalculation"], function (e) {
          var n,
              i = e.weekNumberCalculation,
              r = e.firstDay;"iso" === i && (i = "ISO");var o = Object.create(v.getMomentLocaleData(e.locale));e.monthNames && (o._months = e.monthNames), e.monthNamesShort && (o._monthsShort = e.monthNamesShort), e.dayNames && (o._weekdays = e.dayNames), e.dayNamesShort && (o._weekdaysShort = e.dayNamesShort), null == r && "ISO" === i && (r = 1), null != r && (n = Object.create(o._week), n.dow = r, o._week = n), "ISO" !== i && "local" !== i && "function" != typeof i || (o._fullCalendar_weekCalc = i), t.localeData = o, t.currentDate && t.localizeMoment(t.currentDate);
        });
      }, t.prototype.moment = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }var n;return "local" === this.opt("timezone") ? (n = y.default.apply(null, t), n.hasTime() && n.local()) : n = "UTC" === this.opt("timezone") ? y.default.utc.apply(null, t) : y.default.parseZone.apply(null, t), this.localizeMoment(n), n;
      }, t.prototype.msToMoment = function (t, e) {
        var n = y.default.utc(t);return e ? n.stripTime() : n = this.applyTimezone(n), this.localizeMoment(n), n;
      }, t.prototype.msToUtcMoment = function (t, e) {
        var n = y.default.utc(t);return e && n.stripTime(), this.localizeMoment(n), n;
      }, t.prototype.localizeMoment = function (t) {
        t._locale = this.localeData;
      }, t.prototype.getIsAmbigTimezone = function () {
        return "local" !== this.opt("timezone") && "UTC" !== this.opt("timezone");
      }, t.prototype.applyTimezone = function (t) {
        if (!t.hasTime()) return t.clone();var e,
            n = this.moment(t.toArray()),
            i = t.time().asMilliseconds() - n.time().asMilliseconds();return i && (e = n.clone().add(i), t.time().asMilliseconds() - e.time().asMilliseconds() == 0 && (n = e)), n;
      }, t.prototype.footprintToDateProfile = function (t, e) {
        void 0 === e && (e = !1);var n,
            i = y.default.utc(t.unzonedRange.startMs);return e || (n = y.default.utc(t.unzonedRange.endMs)), t.isAllDay ? (i.stripTime(), n && n.stripTime()) : (i = this.applyTimezone(i), n && (n = this.applyTimezone(n))), new w.default(i, n, this);
      }, t.prototype.getNow = function () {
        var t = this.opt("now");return "function" == typeof t && (t = t()), this.moment(t).stripZone();
      }, t.prototype.humanizeDuration = function (t) {
        return t.locale(this.opt("locale")).humanize();
      }, t.prototype.parseUnzonedRange = function (t) {
        var e = null,
            n = null;return t.start && (e = this.moment(t.start).stripZone()), t.end && (n = this.moment(t.end).stripZone()), e || n ? e && n && n.isBefore(e) ? null : new m.default(e, n) : null;
      }, t.prototype.initEventManager = function () {
        var t = this,
            e = new D.default(this),
            n = this.opt("eventSources") || [],
            i = this.opt("events");this.eventManager = e, i && n.unshift(i), e.on("release", function (e) {
          t.trigger("eventsReset", e);
        }), e.freeze(), n.forEach(function (n) {
          var i = S.default.parse(n, t);i && e.addSource(i);
        }), e.thaw();
      }, t.prototype.requestEvents = function (t, e) {
        return this.eventManager.requestEvents(t, e, this.opt("timezone"), !this.opt("lazyFetching"));
      }, t.prototype.getEventEnd = function (t) {
        return t.end ? t.end.clone() : this.getDefaultEventEnd(t.allDay, t.start);
      }, t.prototype.getDefaultEventEnd = function (t, e) {
        var n = e.clone();return t ? n.stripTime().add(this.defaultAllDayEventDuration) : n.add(this.defaultTimedEventDuration), this.getIsAmbigTimezone() && n.stripZone(), n;
      }, t.prototype.rerenderEvents = function () {
        this.view.flash("displayingEvents");
      }, t.prototype.refetchEvents = function () {
        this.eventManager.refetchAllSources();
      }, t.prototype.renderEvents = function (t, e) {
        this.eventManager.freeze();for (var n = 0; n < t.length; n++) {
          this.renderEvent(t[n], e);
        }this.eventManager.thaw();
      }, t.prototype.renderEvent = function (t, e) {
        void 0 === e && (e = !1);var n = this.eventManager,
            i = C.default.parse(t, t.source || n.stickySource);i && n.addEventDef(i, e);
      }, t.prototype.removeEvents = function (t) {
        var e,
            n,
            r = this.eventManager,
            o = [],
            s = {};if (null == t) r.removeAllEventDefs();else {
          for (r.getEventInstances().forEach(function (t) {
            o.push(t.toLegacy());
          }), o = i(o, t), n = 0; n < o.length; n++) {
            e = this.eventManager.getEventDefByUid(o[n]._id), s[e.id] = !0;
          }r.freeze();for (n in s) {
            r.removeEventDefsById(n);
          }r.thaw();
        }
      }, t.prototype.clientEvents = function (t) {
        var e = [];return this.eventManager.getEventInstances().forEach(function (t) {
          e.push(t.toLegacy());
        }), i(e, t);
      }, t.prototype.updateEvents = function (t) {
        this.eventManager.freeze();for (var e = 0; e < t.length; e++) {
          this.updateEvent(t[e]);
        }this.eventManager.thaw();
      }, t.prototype.updateEvent = function (t) {
        var e,
            n,
            i = this.eventManager.getEventDefByUid(t._id);i instanceof R.default && (e = i.buildInstance(), n = T.default.createFromRawProps(e, t, null), this.eventManager.mutateEventsWithId(i.id, n));
      }, t.prototype.getEventSources = function () {
        return this.eventManager.otherSources.slice();
      }, t.prototype.getEventSourceById = function (t) {
        return this.eventManager.getSourceById(M.default.normalizeId(t));
      }, t.prototype.addEventSource = function (t) {
        var e = S.default.parse(t, this);e && this.eventManager.addSource(e);
      }, t.prototype.removeEventSources = function (t) {
        var e,
            n,
            i = this.eventManager;if (null == t) this.eventManager.removeAllSources();else {
          for (e = i.multiQuerySources(t), i.freeze(), n = 0; n < e.length; n++) {
            i.removeSource(e[n]);
          }i.thaw();
        }
      }, t.prototype.removeEventSource = function (t) {
        var e,
            n = this.eventManager,
            i = n.querySources(t);for (n.freeze(), e = 0; e < i.length; e++) {
          n.removeSource(i[e]);
        }n.thaw();
      }, t.prototype.refetchEventSources = function (t) {
        var e,
            n = this.eventManager,
            i = n.multiQuerySources(t);for (n.freeze(), e = 0; e < i.length; e++) {
          n.refetchSource(i[e]);
        }n.thaw();
      }, t.defaults = a.globalDefaults, t.englishDefaults = a.englishDefaults, t.rtlDefaults = a.rtlDefaults, t;
    }();e.default = H, d.default.mixInto(H), c.default.mixInto(H);
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(0),
        r = n(4),
        o = n(5),
        s = function () {
      function t(t) {
        this._view = t;
      }return t.prototype.opt = function (t) {
        return this._view.opt(t);
      }, t.prototype.trimHiddenDays = function (t) {
        return this._view.trimHiddenDays(t);
      }, t.prototype.msToUtcMoment = function (t, e) {
        return this._view.calendar.msToUtcMoment(t, e);
      }, t.prototype.buildPrev = function (t) {
        var e = t.date.clone().startOf(t.currentRangeUnit).subtract(t.dateIncrement);return this.build(e, -1);
      }, t.prototype.buildNext = function (t) {
        var e = t.date.clone().startOf(t.currentRangeUnit).add(t.dateIncrement);return this.build(e, 1);
      }, t.prototype.build = function (t, e, n) {
        void 0 === n && (n = !1);var r,
            o,
            s,
            a,
            l,
            u,
            d = !t.hasTime(),
            c = null,
            p = null;return r = this.buildValidRange(), r = this.trimHiddenDays(r), n && (t = this.msToUtcMoment(r.constrainDate(t), d)), o = this.buildCurrentRangeInfo(t, e), s = /^(year|month|week|day)$/.test(o.unit), a = this.buildRenderRange(this.trimHiddenDays(o.unzonedRange), o.unit, s), a = this.trimHiddenDays(a), l = a.clone(), this.opt("showNonCurrentDates") || (l = l.intersect(o.unzonedRange)), c = i.duration(this.opt("minTime")), p = i.duration(this.opt("maxTime")), l = this.adjustActiveRange(l, c, p), l = l.intersect(r), l && (t = this.msToUtcMoment(l.constrainDate(t), d)), u = o.unzonedRange.intersectsWith(r), { validUnzonedRange: r, currentUnzonedRange: o.unzonedRange, currentRangeUnit: o.unit, isRangeAllDay: s, activeUnzonedRange: l, renderUnzonedRange: a, minTime: c, maxTime: p, isValid: u, date: t, dateIncrement: this.buildDateIncrement(o.duration) };
      }, t.prototype.buildValidRange = function () {
        return this._view.getUnzonedRangeOption("validRange", this._view.calendar.getNow()) || new o.default();
      }, t.prototype.buildCurrentRangeInfo = function (t, e) {
        var n,
            i = this._view.viewSpec,
            o = null,
            s = null,
            a = null;return i.duration ? (o = i.duration, s = i.durationUnit, a = this.buildRangeFromDuration(t, e, o, s)) : (n = this.opt("dayCount")) ? (s = "day", a = this.buildRangeFromDayCount(t, e, n)) : (a = this.buildCustomVisibleRange(t)) ? s = r.computeGreatestUnit(a.getStart(), a.getEnd()) : (o = this.getFallbackDuration(), s = r.computeGreatestUnit(o), a = this.buildRangeFromDuration(t, e, o, s)), { duration: o, unit: s, unzonedRange: a };
      }, t.prototype.getFallbackDuration = function () {
        return i.duration({ days: 1 });
      }, t.prototype.adjustActiveRange = function (t, e, n) {
        var i = t.getStart(),
            r = t.getEnd();return this._view.usesMinMaxTime && (e < 0 && i.time(0).add(e), n > 864e5 && r.time(n - 864e5)), new o.default(i, r);
      }, t.prototype.buildRangeFromDuration = function (t, e, n, s) {
        function a() {
          d = t.clone().startOf(h), c = d.clone().add(n), p = new o.default(d, c);
        }var l,
            u,
            d,
            c,
            p,
            h = this.opt("dateAlignment");return h || (l = this.opt("dateIncrement"), l ? (u = i.duration(l), h = u < n ? r.computeDurationGreatestUnit(u, l) : s) : h = s), n.as("days") <= 1 && this._view.isHiddenDay(d) && (d = this._view.skipHiddenDays(d, e), d.startOf("day")), a(), this.trimHiddenDays(p) || (t = this._view.skipHiddenDays(t, e), a()), p;
      }, t.prototype.buildRangeFromDayCount = function (t, e, n) {
        var i,
            r = this.opt("dateAlignment"),
            s = 0,
            a = t.clone();r && a.startOf(r), a.startOf("day"), a = this._view.skipHiddenDays(a, e), i = a.clone();do {
          i.add(1, "day"), this._view.isHiddenDay(i) || s++;
        } while (s < n);return new o.default(a, i);
      }, t.prototype.buildCustomVisibleRange = function (t) {
        var e = this._view.getUnzonedRangeOption("visibleRange", this._view.calendar.applyTimezone(t));return !e || null != e.startMs && null != e.endMs ? e : null;
      }, t.prototype.buildRenderRange = function (t, e, n) {
        return t.clone();
      }, t.prototype.buildDateIncrement = function (t) {
        var e,
            n = this.opt("dateIncrement");return n ? i.duration(n) : (e = this.opt("dateAlignment")) ? i.duration(1, e) : t || i.duration({ days: 1 });
      }, t;
    }();e.default = s;
  }, function (t, e, n) {
    function i(t) {
      var e,
          n,
          i,
          r,
          l = a.dataAttrPrefix;return l && (l += "-"), e = t.data(l + "event") || null, e && (e = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? o.extend({}, e) : {}, n = e.start, null == n && (n = e.time), i = e.duration, r = e.stick, delete e.start, delete e.time, delete e.duration, delete e.stick), null == n && (n = t.data(l + "start")), null == n && (n = t.data(l + "time")), null == i && (i = t.data(l + "duration")), null == r && (r = t.data(l + "stick")), n = null != n ? s.duration(n) : null, i = null != i ? s.duration(i) : null, r = Boolean(r), { eventProps: e, startTime: n, duration: i, stick: r };
    }Object.defineProperty(e, "__esModule", { value: !0 });var r = n(2),
        o = n(3),
        s = n(0),
        a = n(16),
        l = n(4),
        u = n(10),
        d = n(7),
        c = n(23),
        p = n(13),
        h = n(18),
        f = n(6),
        g = n(15),
        v = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;return e.isDragging = !1, e;
      }return r.__extends(e, t), e.prototype.end = function () {
        this.dragListener && this.dragListener.endInteraction();
      }, e.prototype.bindToDocument = function () {
        this.listenTo(o(document), { dragstart: this.handleDragStart, sortstart: this.handleDragStart });
      }, e.prototype.unbindFromDocument = function () {
        this.stopListeningTo(o(document));
      }, e.prototype.handleDragStart = function (t, e) {
        var n, i;this.opt("droppable") && (n = o((e ? e.item : null) || t.target), i = this.opt("dropAccept"), (o.isFunction(i) ? i.call(n[0], n) : n.is(i)) && (this.isDragging || this.listenToExternalDrag(n, t, e)));
      }, e.prototype.listenToExternalDrag = function (t, e, n) {
        var r,
            o = this,
            s = this.component,
            a = this.view,
            u = i(t);(this.dragListener = new c.default(s, { interactionStart: function interactionStart() {
            o.isDragging = !0;
          }, hitOver: function hitOver(t) {
            var e,
                n = !0,
                i = t.component.getSafeHitFootprint(t);i ? (r = o.computeExternalDrop(i, u), r ? (e = new h.default(r.buildInstances()), n = u.eventProps ? s.isEventInstanceGroupAllowed(e) : s.isExternalInstanceGroupAllowed(e)) : n = !1) : n = !1, n || (r = null, l.disableCursor()), r && s.renderDrag(s.eventRangesToEventFootprints(e.sliceRenderRanges(s.dateProfile.renderUnzonedRange, a.calendar)));
          }, hitOut: function hitOut() {
            r = null;
          }, hitDone: function hitDone() {
            l.enableCursor(), s.unrenderDrag();
          }, interactionEnd: function interactionEnd(e) {
            r && a.reportExternalDrop(r, Boolean(u.eventProps), Boolean(u.stick), t, e, n), o.isDragging = !1, o.dragListener = null;
          } })).startDrag(e);
      }, e.prototype.computeExternalDrop = function (t, e) {
        var n,
            i = this.view.calendar,
            r = u.default.utc(t.unzonedRange.startMs).stripZone();return t.isAllDay && (e.startTime ? r.time(e.startTime) : r.stripTime()), e.duration && (n = r.clone().add(e.duration)), r = i.applyTimezone(r), n && (n = i.applyTimezone(n)), p.default.parse(o.extend({}, e.eventProps, { start: r, end: n }), new f.default(i));
      }, e;
    }(g.default);e.default = v, d.default.mixInto(v), a.dataAttrPrefix = "";
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(4),
        s = n(37),
        a = n(50),
        l = n(23),
        u = n(15),
        d = function (t) {
      function e(e, n) {
        var i = t.call(this, e) || this;return i.isResizing = !1, i.eventPointing = n, i;
      }return i.__extends(e, t), e.prototype.end = function () {
        this.dragListener && this.dragListener.endInteraction();
      }, e.prototype.bindToEl = function (t) {
        var e = this.component;e.bindSegHandlerToEl(t, "mousedown", this.handleMouseDown.bind(this)), e.bindSegHandlerToEl(t, "touchstart", this.handleTouchStart.bind(this));
      }, e.prototype.handleMouseDown = function (t, e) {
        this.component.canStartResize(t, e) && this.buildDragListener(t, r(e.target).is(".fc-start-resizer")).startInteraction(e, { distance: 5 });
      }, e.prototype.handleTouchStart = function (t, e) {
        this.component.canStartResize(t, e) && this.buildDragListener(t, r(e.target).is(".fc-start-resizer")).startInteraction(e);
      }, e.prototype.buildDragListener = function (t, e) {
        var n,
            i,
            r = this,
            s = this.component,
            a = this.view,
            u = a.calendar,
            d = u.eventManager,
            c = t.el,
            p = t.footprint.eventDef,
            h = t.footprint.eventInstance;return this.dragListener = new l.default(s, { scroll: this.opt("dragScroll"), subjectEl: c, interactionStart: function interactionStart() {
            n = !1;
          }, dragStart: function dragStart(e) {
            n = !0, r.eventPointing.handleMouseout(t, e), r.segResizeStart(t, e);
          }, hitOver: function hitOver(n, l, c) {
            var h,
                f = !0,
                g = s.getSafeHitFootprint(c),
                v = s.getSafeHitFootprint(n);g && v ? (i = e ? r.computeEventStartResizeMutation(g, v, t.footprint) : r.computeEventEndResizeMutation(g, v, t.footprint), i ? (h = d.buildMutatedEventInstanceGroup(p.id, i), f = s.isEventInstanceGroupAllowed(h)) : f = !1) : f = !1, f ? i.isEmpty() && (i = null) : (i = null, o.disableCursor()), i && (a.hideEventsWithId(t.footprint.eventDef.id), a.renderEventResize(s.eventRangesToEventFootprints(h.sliceRenderRanges(s.dateProfile.renderUnzonedRange, u)), t));
          }, hitOut: function hitOut() {
            i = null;
          }, hitDone: function hitDone() {
            a.unrenderEventResize(t), a.showEventsWithId(t.footprint.eventDef.id), o.enableCursor();
          }, interactionEnd: function interactionEnd(e) {
            n && r.segResizeStop(t, e), i && a.reportEventResize(h, i, c, e), r.dragListener = null;
          } });
      }, e.prototype.segResizeStart = function (t, e) {
        this.isResizing = !0, this.component.publiclyTrigger("eventResizeStart", { context: t.el[0], args: [t.footprint.getEventLegacy(), e, {}, this.view] });
      }, e.prototype.segResizeStop = function (t, e) {
        this.isResizing = !1, this.component.publiclyTrigger("eventResizeStop", { context: t.el[0], args: [t.footprint.getEventLegacy(), e, {}, this.view] });
      }, e.prototype.computeEventStartResizeMutation = function (t, e, n) {
        var i,
            r,
            o = n.componentFootprint.unzonedRange,
            l = this.component.diffDates(e.unzonedRange.getStart(), t.unzonedRange.getStart());return o.getStart().add(l) < o.getEnd() && (i = new a.default(), i.setStartDelta(l), r = new s.default(), r.setDateMutation(i), r);
      }, e.prototype.computeEventEndResizeMutation = function (t, e, n) {
        var i,
            r,
            o = n.componentFootprint.unzonedRange,
            l = this.component.diffDates(e.unzonedRange.getEnd(), t.unzonedRange.getEnd());return o.getEnd().add(l) > o.getStart() && (i = new a.default(), i.setEndDelta(l), r = new s.default(), r.setDateMutation(i), r);
      }, e;
    }(u.default);e.default = d;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(4),
        o = n(37),
        s = n(50),
        a = n(54),
        l = n(23),
        u = n(244),
        d = n(15),
        c = function (t) {
      function e(e, n) {
        var i = t.call(this, e) || this;return i.isDragging = !1, i.eventPointing = n, i;
      }return i.__extends(e, t), e.prototype.end = function () {
        this.dragListener && this.dragListener.endInteraction();
      }, e.prototype.getSelectionDelay = function () {
        var t = this.opt("eventLongPressDelay");return null == t && (t = this.opt("longPressDelay")), t;
      }, e.prototype.bindToEl = function (t) {
        var e = this.component;e.bindSegHandlerToEl(t, "mousedown", this.handleMousedown.bind(this)), e.bindSegHandlerToEl(t, "touchstart", this.handleTouchStart.bind(this));
      }, e.prototype.handleMousedown = function (t, e) {
        !this.component.shouldIgnoreMouse() && this.component.canStartDrag(t, e) && this.buildDragListener(t).startInteraction(e, { distance: 5 });
      }, e.prototype.handleTouchStart = function (t, e) {
        var n = this.component,
            i = { delay: this.view.isEventDefSelected(t.footprint.eventDef) ? 0 : this.getSelectionDelay() };n.canStartDrag(t, e) ? this.buildDragListener(t).startInteraction(e, i) : n.canStartSelection(t, e) && this.buildSelectListener(t).startInteraction(e, i);
      }, e.prototype.buildSelectListener = function (t) {
        var e = this,
            n = this.view,
            i = t.footprint.eventDef,
            r = t.footprint.eventInstance;if (this.dragListener) return this.dragListener;var o = this.dragListener = new a.default({ dragStart: function dragStart(t) {
            o.isTouch && !n.isEventDefSelected(i) && r && n.selectEventInstance(r);
          }, interactionEnd: function interactionEnd(t) {
            e.dragListener = null;
          } });return o;
      }, e.prototype.buildDragListener = function (t) {
        var e,
            n,
            i,
            o = this,
            s = this.component,
            a = this.view,
            d = a.calendar,
            c = d.eventManager,
            p = t.el,
            h = t.footprint.eventDef,
            f = t.footprint.eventInstance;if (this.dragListener) return this.dragListener;var g = this.dragListener = new l.default(a, { scroll: this.opt("dragScroll"), subjectEl: p, subjectCenter: !0, interactionStart: function interactionStart(i) {
            t.component = s, e = !1, n = new u.default(t.el, { additionalClass: "fc-dragging", parentEl: a.el, opacity: g.isTouch ? null : o.opt("dragOpacity"), revertDuration: o.opt("dragRevertDuration"), zIndex: 2 }), n.hide(), n.start(i);
          }, dragStart: function dragStart(n) {
            g.isTouch && !a.isEventDefSelected(h) && f && a.selectEventInstance(f), e = !0, o.eventPointing.handleMouseout(t, n), o.segDragStart(t, n), a.hideEventsWithId(t.footprint.eventDef.id);
          }, hitOver: function hitOver(e, l, u) {
            var p,
                f,
                v,
                y = !0;t.hit && (u = t.hit), p = u.component.getSafeHitFootprint(u), f = e.component.getSafeHitFootprint(e), p && f ? (i = o.computeEventDropMutation(p, f, h), i ? (v = c.buildMutatedEventInstanceGroup(h.id, i), y = s.isEventInstanceGroupAllowed(v)) : y = !1) : y = !1, y || (i = null, r.disableCursor()), i && a.renderDrag(s.eventRangesToEventFootprints(v.sliceRenderRanges(s.dateProfile.renderUnzonedRange, d)), t, g.isTouch) ? n.hide() : n.show(), l && (i = null);
          }, hitOut: function hitOut() {
            a.unrenderDrag(t), n.show(), i = null;
          }, hitDone: function hitDone() {
            r.enableCursor();
          }, interactionEnd: function interactionEnd(r) {
            delete t.component, n.stop(!i, function () {
              e && (a.unrenderDrag(t), o.segDragStop(t, r)), a.showEventsWithId(t.footprint.eventDef.id), i && a.reportEventDrop(f, i, p, r);
            }), o.dragListener = null;
          } });return g;
      }, e.prototype.segDragStart = function (t, e) {
        this.isDragging = !0, this.component.publiclyTrigger("eventDragStart", { context: t.el[0], args: [t.footprint.getEventLegacy(), e, {}, this.view] });
      }, e.prototype.segDragStop = function (t, e) {
        this.isDragging = !1, this.component.publiclyTrigger("eventDragStop", { context: t.el[0], args: [t.footprint.getEventLegacy(), e, {}, this.view] });
      }, e.prototype.computeEventDropMutation = function (t, e, n) {
        var i = new o.default();return i.setDateMutation(this.computeEventDateMutation(t, e)), i;
      }, e.prototype.computeEventDateMutation = function (t, e) {
        var n,
            i,
            r = t.unzonedRange.getStart(),
            o = e.unzonedRange.getStart(),
            a = !1,
            l = !1,
            u = !1;return t.isAllDay !== e.isAllDay && (a = !0, e.isAllDay ? (u = !0, r.stripTime()) : l = !0), n = this.component.diffDates(o, r), i = new s.default(), i.clearEnd = a, i.forceTimed = l, i.forceAllDay = u, i.setDateDelta(n), i;
      }, e;
    }(d.default);e.default = c;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(4),
        o = n(23),
        s = n(12),
        a = n(5),
        l = n(15),
        u = function (t) {
      function e(e) {
        var n = t.call(this, e) || this;return n.dragListener = n.buildDragListener(), n;
      }return i.__extends(e, t), e.prototype.end = function () {
        this.dragListener.endInteraction();
      }, e.prototype.getDelay = function () {
        var t = this.opt("selectLongPressDelay");return null == t && (t = this.opt("longPressDelay")), t;
      }, e.prototype.bindToEl = function (t) {
        var e = this,
            n = this.component,
            i = this.dragListener;n.bindDateHandlerToEl(t, "mousedown", function (t) {
          e.opt("selectable") && !n.shouldIgnoreMouse() && i.startInteraction(t, { distance: e.opt("selectMinDistance") });
        }), n.bindDateHandlerToEl(t, "touchstart", function (t) {
          e.opt("selectable") && !n.shouldIgnoreTouch() && i.startInteraction(t, { delay: e.getDelay() });
        }), r.preventSelection(t);
      }, e.prototype.buildDragListener = function () {
        var t,
            e = this,
            n = this.component;return new o.default(n, { scroll: this.opt("dragScroll"), interactionStart: function interactionStart() {
            t = null;
          }, dragStart: function dragStart(t) {
            e.view.unselect(t);
          }, hitOver: function hitOver(i, o, s) {
            var a, l;s && (a = n.getSafeHitFootprint(s), l = n.getSafeHitFootprint(i), t = a && l ? e.computeSelection(a, l) : null, t ? n.renderSelectionFootprint(t) : !1 === t && r.disableCursor());
          }, hitOut: function hitOut() {
            t = null, n.unrenderSelection();
          }, hitDone: function hitDone() {
            r.enableCursor();
          }, interactionEnd: function interactionEnd(n, i) {
            !i && t && e.view.reportSelection(t, n);
          } });
      }, e.prototype.computeSelection = function (t, e) {
        var n = this.computeSelectionFootprint(t, e);return !(n && !this.isSelectionFootprintAllowed(n)) && n;
      }, e.prototype.computeSelectionFootprint = function (t, e) {
        var n = [t.unzonedRange.startMs, t.unzonedRange.endMs, e.unzonedRange.startMs, e.unzonedRange.endMs];return n.sort(r.compareNumbers), new s.default(new a.default(n[0], n[3]), t.isAllDay);
      }, e.prototype.isSelectionFootprintAllowed = function (t) {
        return this.component.dateProfile.validUnzonedRange.containsRange(t.unzonedRange) && this.view.calendar.constraints.isSelectionFootprintAllowed(t);
      }, e;
    }(l.default);e.default = u;
  }, function (t, e, n) {
    function i(t) {
      var e,
          n = [],
          i = [];for (e = 0; e < t.length; e++) {
        t[e].componentFootprint.isAllDay ? n.push(t[e]) : i.push(t[e]);
      }return { allDay: n, timed: i };
    }Object.defineProperty(e, "__esModule", { value: !0 });var r,
        o,
        s = n(2),
        a = n(0),
        l = n(3),
        u = n(4),
        d = n(39),
        c = n(41),
        p = n(227),
        h = n(61),
        f = function (t) {
      function e(e, n) {
        var i = t.call(this, e, n) || this;return i.usesMinMaxTime = !0, i.timeGrid = i.instantiateTimeGrid(), i.addChild(i.timeGrid), i.opt("allDaySlot") && (i.dayGrid = i.instantiateDayGrid(), i.addChild(i.dayGrid)), i.scroller = new d.default({ overflowX: "hidden", overflowY: "auto" }), i;
      }
      return s.__extends(e, t), e.prototype.instantiateTimeGrid = function () {
        var t = new this.timeGridClass(this);return u.copyOwnProps(r, t), t;
      }, e.prototype.instantiateDayGrid = function () {
        var t = new this.dayGridClass(this);return u.copyOwnProps(o, t), t;
      }, e.prototype.renderSkeleton = function () {
        var t, e;this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml()), this.scroller.render(), t = this.scroller.el.addClass("fc-time-grid-container"), e = l('<div class="fc-time-grid" />').appendTo(t), this.el.find(".fc-body > tr > td").append(t), this.timeGrid.headContainerEl = this.el.find(".fc-head-container"), this.timeGrid.setElement(e), this.dayGrid && (this.dayGrid.setElement(this.el.find(".fc-day-grid")), this.dayGrid.bottomCoordPadding = this.dayGrid.el.next("hr").outerHeight());
      }, e.prototype.unrenderSkeleton = function () {
        this.timeGrid.removeElement(), this.dayGrid && this.dayGrid.removeElement(), this.scroller.destroy();
      }, e.prototype.renderSkeletonHtml = function () {
        var t = this.calendar.theme;return '<table class="' + t.getClass("tableGrid") + '">' + (this.opt("columnHeader") ? '<thead class="fc-head"><tr><td class="fc-head-container ' + t.getClass("widgetHeader") + '">&nbsp;</td></tr></thead>' : "") + '<tbody class="fc-body"><tr><td class="' + t.getClass("widgetContent") + '">' + (this.dayGrid ? '<div class="fc-day-grid"/><hr class="fc-divider ' + t.getClass("widgetHeader") + '"/>' : "") + "</td></tr></tbody></table>";
      }, e.prototype.axisStyleAttr = function () {
        return null != this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : "";
      }, e.prototype.getNowIndicatorUnit = function () {
        return this.timeGrid.getNowIndicatorUnit();
      }, e.prototype.updateSize = function (e, n, i) {
        var r, o, s;if (t.prototype.updateSize.call(this, e, n, i), this.axisWidth = u.matchCellWidths(this.el.find(".fc-axis")), !this.timeGrid.colEls) return void (n || (o = this.computeScrollerHeight(e), this.scroller.setHeight(o)));var a = this.el.find(".fc-row:not(.fc-scroller *)");this.timeGrid.bottomRuleEl.hide(), this.scroller.clear(), u.uncompensateScroll(a), this.dayGrid && (this.dayGrid.removeSegPopover(), r = this.opt("eventLimit"), r && "number" != typeof r && (r = 5), r && this.dayGrid.limitRows(r)), n || (o = this.computeScrollerHeight(e), this.scroller.setHeight(o), s = this.scroller.getScrollbarWidths(), (s.left || s.right) && (u.compensateScroll(a, s), o = this.computeScrollerHeight(e), this.scroller.setHeight(o)), this.scroller.lockOverflow(s), this.timeGrid.getTotalSlatHeight() < o && this.timeGrid.bottomRuleEl.show());
      }, e.prototype.computeScrollerHeight = function (t) {
        return t - u.subtractInnerElHeight(this.el, this.scroller.el);
      }, e.prototype.computeInitialDateScroll = function () {
        var t = a.duration(this.opt("scrollTime")),
            e = this.timeGrid.computeTimeTop(t);return e = Math.ceil(e), e && e++, { top: e };
      }, e.prototype.queryDateScroll = function () {
        return { top: this.scroller.getScrollTop() };
      }, e.prototype.applyDateScroll = function (t) {
        void 0 !== t.top && this.scroller.setScrollTop(t.top);
      }, e.prototype.getHitFootprint = function (t) {
        return t.component.getHitFootprint(t);
      }, e.prototype.getHitEl = function (t) {
        return t.component.getHitEl(t);
      }, e.prototype.executeEventRender = function (t) {
        var e,
            n,
            i = {},
            r = {};for (e in t) {
          n = t[e], n.getEventDef().isAllDay() ? i[e] = n : r[e] = n;
        }this.timeGrid.executeEventRender(r), this.dayGrid && this.dayGrid.executeEventRender(i);
      }, e.prototype.renderDrag = function (t, e, n) {
        var r = i(t),
            o = !1;return o = this.timeGrid.renderDrag(r.timed, e, n), this.dayGrid && (o = this.dayGrid.renderDrag(r.allDay, e, n) || o), o;
      }, e.prototype.renderEventResize = function (t, e, n) {
        var r = i(t);this.timeGrid.renderEventResize(r.timed, e, n), this.dayGrid && this.dayGrid.renderEventResize(r.allDay, e, n);
      }, e.prototype.renderSelectionFootprint = function (t) {
        t.isAllDay ? this.dayGrid && this.dayGrid.renderSelectionFootprint(t) : this.timeGrid.renderSelectionFootprint(t);
      }, e;
    }(c.default);e.default = f, f.prototype.timeGridClass = p.default, f.prototype.dayGridClass = h.default, r = { renderHeadIntroHtml: function renderHeadIntroHtml() {
        var t,
            e = this.view,
            n = e.calendar,
            i = n.msToUtcMoment(this.dateProfile.renderUnzonedRange.startMs, !0);return this.opt("weekNumbers") ? (t = i.format(this.opt("smallWeekFormat")), '<th class="fc-axis fc-week-number ' + n.theme.getClass("widgetHeader") + '" ' + e.axisStyleAttr() + ">" + e.buildGotoAnchorHtml({ date: i, type: "week", forceOff: this.colCnt > 1 }, u.htmlEscape(t)) + "</th>") : '<th class="fc-axis ' + n.theme.getClass("widgetHeader") + '" ' + e.axisStyleAttr() + "></th>";
      }, renderBgIntroHtml: function renderBgIntroHtml() {
        var t = this.view;return '<td class="fc-axis ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.axisStyleAttr() + "></td>";
      }, renderIntroHtml: function renderIntroHtml() {
        return '<td class="fc-axis" ' + this.view.axisStyleAttr() + "></td>";
      } }, o = { renderBgIntroHtml: function renderBgIntroHtml() {
        var t = this.view;return '<td class="fc-axis ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.axisStyleAttr() + "><span>" + t.getAllDayHtml() + "</span></td>";
      }, renderIntroHtml: function renderIntroHtml() {
        return '<td class="fc-axis" ' + this.view.axisStyleAttr() + "></td>";
      } };
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(0),
        s = n(4),
        a = n(40),
        l = n(56),
        u = n(60),
        d = n(55),
        c = n(53),
        p = n(5),
        h = n(12),
        f = n(246),
        g = n(247),
        v = n(248),
        y = [{ hours: 1 }, { minutes: 30 }, { minutes: 15 }, { seconds: 30 }, { seconds: 15 }],
        m = function (t) {
      function e(e) {
        var n = t.call(this, e) || this;return n.processOptions(), n;
      }return i.__extends(e, t), e.prototype.componentFootprintToSegs = function (t) {
        var e,
            n = this.sliceRangeByTimes(t.unzonedRange);for (e = 0; e < n.length; e++) {
          this.isRTL ? n[e].col = this.daysPerRow - 1 - n[e].dayIndex : n[e].col = n[e].dayIndex;
        }return n;
      }, e.prototype.sliceRangeByTimes = function (t) {
        var e,
            n,
            i = [];for (n = 0; n < this.daysPerRow; n++) {
          (e = t.intersect(this.dayRanges[n])) && i.push({ startMs: e.startMs, endMs: e.endMs, isStart: e.isStart, isEnd: e.isEnd, dayIndex: n });
        }return i;
      }, e.prototype.processOptions = function () {
        var t,
            e = this.opt("slotDuration"),
            n = this.opt("snapDuration");e = o.duration(e), n = n ? o.duration(n) : e, this.slotDuration = e, this.snapDuration = n, this.snapsPerSlot = e / n, t = this.opt("slotLabelFormat"), r.isArray(t) && (t = t[t.length - 1]), this.labelFormat = t || this.opt("smallTimeFormat"), t = this.opt("slotLabelInterval"), this.labelInterval = t ? o.duration(t) : this.computeLabelInterval(e);
      }, e.prototype.computeLabelInterval = function (t) {
        var e, n, i;for (e = y.length - 1; e >= 0; e--) {
          if (n = o.duration(y[e]), i = s.divideDurationByDuration(n, t), s.isInt(i) && i > 1) return n;
        }return o.duration(t);
      }, e.prototype.renderDates = function (t) {
        this.dateProfile = t, this.updateDayTable(), this.renderSlats(), this.renderColumns();
      }, e.prototype.unrenderDates = function () {
        this.unrenderColumns();
      }, e.prototype.renderSkeleton = function () {
        var t = this.view.calendar.theme;this.el.html('<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider ' + t.getClass("widgetHeader") + '" style="display:none" />'), this.bottomRuleEl = this.el.find("hr");
      }, e.prototype.renderSlats = function () {
        var t = this.view.calendar.theme;this.slatContainerEl = this.el.find("> .fc-slats").html('<table class="' + t.getClass("tableGrid") + '">' + this.renderSlatRowHtml() + "</table>"), this.slatEls = this.slatContainerEl.find("tr"), this.slatCoordCache = new c.default({ els: this.slatEls, isVertical: !0 });
      }, e.prototype.renderSlatRowHtml = function () {
        for (var t, e, n, i = this.view, r = i.calendar, a = r.theme, l = this.isRTL, u = this.dateProfile, d = "", c = o.duration(+u.minTime), p = o.duration(0); c < u.maxTime;) {
          t = r.msToUtcMoment(u.renderUnzonedRange.startMs).time(c), e = s.isInt(s.divideDurationByDuration(p, this.labelInterval)), n = '<td class="fc-axis fc-time ' + a.getClass("widgetContent") + '" ' + i.axisStyleAttr() + ">" + (e ? "<span>" + s.htmlEscape(t.format(this.labelFormat)) + "</span>" : "") + "</td>", d += '<tr data-time="' + t.format("HH:mm:ss") + '"' + (e ? "" : ' class="fc-minor"') + ">" + (l ? "" : n) + '<td class="' + a.getClass("widgetContent") + '"/>' + (l ? n : "") + "</tr>", c.add(this.slotDuration), p.add(this.slotDuration);
        }return d;
      }, e.prototype.renderColumns = function () {
        var t = this.dateProfile,
            e = this.view.calendar.theme;this.dayRanges = this.dayDates.map(function (e) {
          return new p.default(e.clone().add(t.minTime), e.clone().add(t.maxTime));
        }), this.headContainerEl && this.headContainerEl.html(this.renderHeadHtml()), this.el.find("> .fc-bg").html('<table class="' + e.getClass("tableGrid") + '">' + this.renderBgTrHtml(0) + "</table>"), this.colEls = this.el.find(".fc-day, .fc-disabled-day"), this.colCoordCache = new c.default({ els: this.colEls, isHorizontal: !0 }), this.renderContentSkeleton();
      }, e.prototype.unrenderColumns = function () {
        this.unrenderContentSkeleton();
      }, e.prototype.renderContentSkeleton = function () {
        var t,
            e,
            n = "";for (t = 0; t < this.colCnt; t++) {
          n += '<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';
        }e = this.contentSkeletonEl = r('<div class="fc-content-skeleton"><table><tr>' + n + "</tr></table></div>"), this.colContainerEls = e.find(".fc-content-col"), this.helperContainerEls = e.find(".fc-helper-container"), this.fgContainerEls = e.find(".fc-event-container:not(.fc-helper-container)"), this.bgContainerEls = e.find(".fc-bgevent-container"), this.highlightContainerEls = e.find(".fc-highlight-container"), this.businessContainerEls = e.find(".fc-business-container"), this.bookendCells(e.find("tr")), this.el.append(e);
      }, e.prototype.unrenderContentSkeleton = function () {
        this.contentSkeletonEl && (this.contentSkeletonEl.remove(), this.contentSkeletonEl = null, this.colContainerEls = null, this.helperContainerEls = null, this.fgContainerEls = null, this.bgContainerEls = null, this.highlightContainerEls = null, this.businessContainerEls = null);
      }, e.prototype.groupSegsByCol = function (t) {
        var e,
            n = [];for (e = 0; e < this.colCnt; e++) {
          n.push([]);
        }for (e = 0; e < t.length; e++) {
          n[t[e].col].push(t[e]);
        }return n;
      }, e.prototype.attachSegsByCol = function (t, e) {
        var n, i, r;for (n = 0; n < this.colCnt; n++) {
          for (i = t[n], r = 0; r < i.length; r++) {
            e.eq(n).append(i[r].el);
          }
        }
      }, e.prototype.getNowIndicatorUnit = function () {
        return "minute";
      }, e.prototype.renderNowIndicator = function (t) {
        if (this.colContainerEls) {
          var e,
              n = this.componentFootprintToSegs(new h.default(new p.default(t, t.valueOf() + 1), !1)),
              i = this.computeDateTop(t, t),
              o = [];for (e = 0; e < n.length; e++) {
            o.push(r('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top", i).appendTo(this.colContainerEls.eq(n[e].col))[0]);
          }n.length > 0 && o.push(r('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top", i).appendTo(this.el.find(".fc-content-skeleton"))[0]), this.nowIndicatorEls = r(o);
        }
      }, e.prototype.unrenderNowIndicator = function () {
        this.nowIndicatorEls && (this.nowIndicatorEls.remove(), this.nowIndicatorEls = null);
      }, e.prototype.updateSize = function (e, n, i) {
        t.prototype.updateSize.call(this, e, n, i), this.slatCoordCache.build(), i && this.updateSegVerticals([].concat(this.eventRenderer.getSegs(), this.businessSegs || []));
      }, e.prototype.getTotalSlatHeight = function () {
        return this.slatContainerEl.outerHeight();
      }, e.prototype.computeDateTop = function (t, e) {
        return this.computeTimeTop(o.duration(t - e.clone().stripTime()));
      }, e.prototype.computeTimeTop = function (t) {
        var e,
            n,
            i = this.slatEls.length,
            r = this.dateProfile,
            o = (t - r.minTime) / this.slotDuration;return o = Math.max(0, o), o = Math.min(i, o), e = Math.floor(o), e = Math.min(e, i - 1), n = o - e, this.slatCoordCache.getTopPosition(e) + this.slatCoordCache.getHeight(e) * n;
      }, e.prototype.updateSegVerticals = function (t) {
        this.computeSegVerticals(t), this.assignSegVerticals(t);
      }, e.prototype.computeSegVerticals = function (t) {
        var e,
            n,
            i,
            r = this.opt("agendaEventMinHeight");for (e = 0; e < t.length; e++) {
          n = t[e], i = this.dayDates[n.dayIndex], n.top = this.computeDateTop(n.startMs, i), n.bottom = Math.max(n.top + r, this.computeDateTop(n.endMs, i));
        }
      }, e.prototype.assignSegVerticals = function (t) {
        var e, n;for (e = 0; e < t.length; e++) {
          n = t[e], n.el.css(this.generateSegVerticalCss(n));
        }
      }, e.prototype.generateSegVerticalCss = function (t) {
        return { top: t.top, bottom: -t.bottom };
      }, e.prototype.prepareHits = function () {
        this.colCoordCache.build(), this.slatCoordCache.build();
      }, e.prototype.releaseHits = function () {
        this.colCoordCache.clear();
      }, e.prototype.queryHit = function (t, e) {
        var n = this.snapsPerSlot,
            i = this.colCoordCache,
            r = this.slatCoordCache;if (i.isLeftInBounds(t) && r.isTopInBounds(e)) {
          var o = i.getHorizontalIndex(t),
              s = r.getVerticalIndex(e);if (null != o && null != s) {
            var a = r.getTopOffset(s),
                l = r.getHeight(s),
                u = (e - a) / l,
                d = Math.floor(u * n),
                c = s * n + d,
                p = a + d / n * l,
                h = a + (d + 1) / n * l;return { col: o, snap: c, component: this, left: i.getLeftOffset(o), right: i.getRightOffset(o), top: p, bottom: h };
          }
        }
      }, e.prototype.getHitFootprint = function (t) {
        var e,
            n = this.getCellDate(0, t.col),
            i = this.computeSnapTime(t.snap);return n.time(i), e = n.clone().add(this.snapDuration), new h.default(new p.default(n, e), !1);
      }, e.prototype.computeSnapTime = function (t) {
        return o.duration(this.dateProfile.minTime + this.snapDuration * t);
      }, e.prototype.getHitEl = function (t) {
        return this.colEls.eq(t.col);
      }, e.prototype.renderDrag = function (t, e, n) {
        var i;if (e) {
          if (t.length) return this.helperRenderer.renderEventDraggingFootprints(t, e, n), !0;
        } else for (i = 0; i < t.length; i++) {
          this.renderHighlight(t[i].componentFootprint);
        }
      }, e.prototype.unrenderDrag = function () {
        this.unrenderHighlight(), this.helperRenderer.unrender();
      }, e.prototype.renderEventResize = function (t, e, n) {
        this.helperRenderer.renderEventResizingFootprints(t, e, n);
      }, e.prototype.unrenderEventResize = function () {
        this.helperRenderer.unrender();
      }, e.prototype.renderSelectionFootprint = function (t) {
        this.opt("selectHelper") ? this.helperRenderer.renderComponentFootprint(t) : this.renderHighlight(t);
      }, e.prototype.unrenderSelection = function () {
        this.helperRenderer.unrender(), this.unrenderHighlight();
      }, e;
    }(a.default);e.default = m, m.prototype.eventRendererClass = f.default, m.prototype.businessHourRendererClass = l.default, m.prototype.helperRendererClass = g.default, m.prototype.fillRendererClass = v.default, u.default.mixInto(m), d.default.mixInto(m);
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(5),
        o = n(221),
        s = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.prototype.buildRenderRange = function (e, n, i) {
        var o = t.prototype.buildRenderRange.call(this, e, n, i),
            s = this.msToUtcMoment(o.startMs, i),
            a = this.msToUtcMoment(o.endMs, i);return (/^(year|month)$/.test(n) && (s.startOf("week"), a.weekday() && a.add(1, "week").startOf("week")), new r.default(s, a)
        );
      }, e;
    }(o.default);e.default = s;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(0),
        o = n(4),
        s = n(62),
        a = n(253),
        l = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.prototype.setGridHeight = function (t, e) {
        e && (t *= this.dayGrid.rowCnt / 6), o.distributeHeight(this.dayGrid.rowEls, t, !e);
      }, e.prototype.isDateInOtherMonth = function (t, e) {
        return t.month() !== r.utc(e.currentUnzonedRange.startMs).month();
      }, e;
    }(s.default);e.default = l, l.prototype.dateProfileGeneratorClass = a.default;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(4),
        s = n(5),
        a = n(41),
        l = n(39),
        u = n(254),
        d = n(255),
        c = function (t) {
      function e(e, n) {
        var i = t.call(this, e, n) || this;return i.segSelector = ".fc-list-item", i.scroller = new l.default({ overflowX: "hidden", overflowY: "auto" }), i;
      }return i.__extends(e, t), e.prototype.renderSkeleton = function () {
        this.el.addClass("fc-list-view " + this.calendar.theme.getClass("listView")), this.scroller.render(), this.scroller.el.appendTo(this.el), this.contentEl = this.scroller.scrollEl;
      }, e.prototype.unrenderSkeleton = function () {
        this.scroller.destroy();
      }, e.prototype.updateSize = function (e, n, i) {
        t.prototype.updateSize.call(this, e, n, i), this.scroller.clear(), n || this.scroller.setHeight(this.computeScrollerHeight(e));
      }, e.prototype.computeScrollerHeight = function (t) {
        return t - o.subtractInnerElHeight(this.el, this.scroller.el);
      }, e.prototype.renderDates = function (t) {
        for (var e = this.calendar, n = e.msToUtcMoment(t.renderUnzonedRange.startMs, !0), i = e.msToUtcMoment(t.renderUnzonedRange.endMs, !0), r = [], o = []; n < i;) {
          r.push(n.clone()), o.push(new s.default(n, n.clone().add(1, "day"))), n.add(1, "day");
        }this.dayDates = r, this.dayRanges = o;
      }, e.prototype.componentFootprintToSegs = function (t) {
        var e,
            n,
            i,
            r = this.dayRanges,
            o = [];for (e = 0; e < r.length; e++) {
          if ((n = t.unzonedRange.intersect(r[e])) && (i = { startMs: n.startMs, endMs: n.endMs, isStart: n.isStart, isEnd: n.isEnd, dayIndex: e }, o.push(i), !i.isEnd && !t.isAllDay && e + 1 < r.length && t.unzonedRange.endMs < r[e + 1].startMs + this.nextDayThreshold)) {
            i.endMs = t.unzonedRange.endMs, i.isEnd = !0;break;
          }
        }return o;
      }, e.prototype.renderEmptyMessage = function () {
        this.contentEl.html('<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">' + o.htmlEscape(this.opt("noEventsMessage")) + "</div></div></div>");
      }, e.prototype.renderSegList = function (t) {
        var e,
            n,
            i,
            o = this.groupSegsByDay(t),
            s = r('<table class="fc-list-table ' + this.calendar.theme.getClass("tableList") + '"><tbody/></table>'),
            a = s.find("tbody");for (e = 0; e < o.length; e++) {
          if (n = o[e]) for (a.append(this.dayHeaderHtml(this.dayDates[e])), this.eventRenderer.sortEventSegs(n), i = 0; i < n.length; i++) {
            a.append(n[i].el);
          }
        }this.contentEl.empty().append(s);
      }, e.prototype.groupSegsByDay = function (t) {
        var e,
            n,
            i = [];for (e = 0; e < t.length; e++) {
          n = t[e], (i[n.dayIndex] || (i[n.dayIndex] = [])).push(n);
        }return i;
      }, e.prototype.dayHeaderHtml = function (t) {
        var e = this.opt("listDayFormat"),
            n = this.opt("listDayAltFormat");return '<tr class="fc-list-heading" data-date="' + t.format("YYYY-MM-DD") + '"><td class="' + (this.calendar.theme.getClass("tableListHeading") || this.calendar.theme.getClass("widgetHeader")) + '" colspan="3">' + (e ? this.buildGotoAnchorHtml(t, { class: "fc-list-heading-main" }, o.htmlEscape(t.format(e))) : "") + (n ? this.buildGotoAnchorHtml(t, { class: "fc-list-heading-alt" }, o.htmlEscape(t.format(n))) : "") + "</td></tr>";
      }, e;
    }(a.default);e.default = c, c.prototype.eventRendererClass = u.default, c.prototype.eventPointingClass = d.default;
  },,,,,, function (t, e, n) {
    var i = n(3),
        r = n(16),
        o = n(4),
        s = n(220);n(10), n(47), n(256), n(257), n(260), n(261), n(262), n(263), i.fullCalendar = r, i.fn.fullCalendar = function (t) {
      var e = Array.prototype.slice.call(arguments, 1),
          n = this;return this.each(function (r, a) {
        var l,
            u = i(a),
            d = u.data("fullCalendar");"string" == typeof t ? "getCalendar" === t ? r || (n = d) : "destroy" === t ? d && (d.destroy(), u.removeData("fullCalendar")) : d ? i.isFunction(d[t]) ? (l = d[t].apply(d, e), r || (n = l), "destroy" === t && u.removeData("fullCalendar")) : o.warn("'" + t + "' is an unknown FullCalendar method.") : o.warn("Attempting to call a FullCalendar method on an element with no calendar.") : d || (d = new s.default(u, t), u.data("fullCalendar", d), d.render());
      }), n;
    }, t.exports = r;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(48),
        o = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.prototype.setElement = function (t) {
        this.el = t, this.bindGlobalHandlers(), this.renderSkeleton(), this.set("isInDom", !0);
      }, e.prototype.removeElement = function () {
        this.unset("isInDom"), this.unrenderSkeleton(), this.unbindGlobalHandlers(), this.el.remove();
      }, e.prototype.bindGlobalHandlers = function () {}, e.prototype.unbindGlobalHandlers = function () {}, e.prototype.renderSkeleton = function () {}, e.prototype.unrenderSkeleton = function () {}, e;
    }(r.default);e.default = o;
  }, function (t, e) {
    Object.defineProperty(e, "__esModule", { value: !0 });var n = function () {
      function t(t) {
        this.items = t || [];
      }return t.prototype.proxyCall = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }var i = [];return this.items.forEach(function (n) {
          i.push(n[t].apply(n, e));
        }), i;
      }, t;
    }();e.default = n;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(3),
        r = n(4),
        o = function () {
      function t(t, e) {
        this.el = null, this.viewsWithButtons = [], this.calendar = t, this.toolbarOptions = e;
      }return t.prototype.setToolbarOptions = function (t) {
        this.toolbarOptions = t;
      }, t.prototype.render = function () {
        var t = this.toolbarOptions.layout,
            e = this.el;t ? (e ? e.empty() : e = this.el = i("<div class='fc-toolbar " + this.toolbarOptions.extraClasses + "'/>"), e.append(this.renderSection("left")).append(this.renderSection("right")).append(this.renderSection("center")).append('<div class="fc-clear"/>')) : this.removeElement();
      }, t.prototype.removeElement = function () {
        this.el && (this.el.remove(), this.el = null);
      }, t.prototype.renderSection = function (t) {
        var e = this,
            n = this.calendar,
            o = n.theme,
            s = n.optionsManager,
            a = n.viewSpecManager,
            l = i('<div class="fc-' + t + '"/>'),
            u = this.toolbarOptions.layout[t],
            d = s.get("customButtons") || {},
            c = s.overrides.buttonText || {},
            p = s.get("buttonText") || {};return u && i.each(u.split(" "), function (t, s) {
          var u,
              h = i(),
              f = !0;i.each(s.split(","), function (t, s) {
            var l, u, g, v, y, m, b, w, D;"title" === s ? (h = h.add(i("<h2>&nbsp;</h2>")), f = !1) : ((l = d[s]) ? (g = function g(t) {
              l.click && l.click.call(w[0], t);
            }, (v = o.getCustomButtonIconClass(l)) || (v = o.getIconClass(s)) || (y = l.text)) : (u = a.getViewSpec(s)) ? (e.viewsWithButtons.push(s), g = function g() {
              n.changeView(s);
            }, (y = u.buttonTextOverride) || (v = o.getIconClass(s)) || (y = u.buttonTextDefault)) : n[s] && (g = function g() {
              n[s]();
            }, (y = c[s]) || (v = o.getIconClass(s)) || (y = p[s])), g && (b = ["fc-" + s + "-button", o.getClass("button"), o.getClass("stateDefault")], y ? (m = r.htmlEscape(y), D = "") : v && (m = "<span class='" + v + "'></span>", D = ' aria-label="' + s + '"'), w = i('<button type="button" class="' + b.join(" ") + '"' + D + ">" + m + "</button>").click(function (t) {
              w.hasClass(o.getClass("stateDisabled")) || (g(t), (w.hasClass(o.getClass("stateActive")) || w.hasClass(o.getClass("stateDisabled"))) && w.removeClass(o.getClass("stateHover")));
            }).mousedown(function () {
              w.not("." + o.getClass("stateActive")).not("." + o.getClass("stateDisabled")).addClass(o.getClass("stateDown"));
            }).mouseup(function () {
              w.removeClass(o.getClass("stateDown"));
            }).hover(function () {
              w.not("." + o.getClass("stateActive")).not("." + o.getClass("stateDisabled")).addClass(o.getClass("stateHover"));
            }, function () {
              w.removeClass(o.getClass("stateHover")).removeClass(o.getClass("stateDown"));
            }), h = h.add(w)));
          }), f && h.first().addClass(o.getClass("cornerLeft")).end().last().addClass(o.getClass("cornerRight")).end(), h.length > 1 ? (u = i("<div/>"), f && u.addClass(o.getClass("buttonGroup")), u.append(h), l.append(u)) : l.append(h);
        }), l;
      }, t.prototype.updateTitle = function (t) {
        this.el && this.el.find("h2").text(t);
      }, t.prototype.activateButton = function (t) {
        this.el && this.el.find(".fc-" + t + "-button").addClass(this.calendar.theme.getClass("stateActive"));
      }, t.prototype.deactivateButton = function (t) {
        this.el && this.el.find(".fc-" + t + "-button").removeClass(this.calendar.theme.getClass("stateActive"));
      }, t.prototype.disableButton = function (t) {
        this.el && this.el.find(".fc-" + t + "-button").prop("disabled", !0).addClass(this.calendar.theme.getClass("stateDisabled"));
      }, t.prototype.enableButton = function (t) {
        this.el && this.el.find(".fc-" + t + "-button").prop("disabled", !1).removeClass(this.calendar.theme.getClass("stateDisabled"));
      }, t.prototype.getViewsWithButtons = function () {
        return this.viewsWithButtons;
      }, t;
    }();e.default = o;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(4),
        s = n(32),
        a = n(31),
        l = n(48),
        u = function (t) {
      function e(e, n) {
        var i = t.call(this) || this;return i._calendar = e, i.overrides = r.extend({}, n), i.dynamicOverrides = {}, i.compute(), i;
      }return i.__extends(e, t), e.prototype.add = function (t) {
        var e,
            n = 0;this.recordOverrides(t);for (e in t) {
          n++;
        }if (1 === n) {
          if ("height" === e || "contentHeight" === e || "aspectRatio" === e) return void this._calendar.updateViewSize(!0);if ("defaultDate" === e) return;if ("businessHours" === e) return;if (/^(event|select)(Overlap|Constraint|Allow)$/.test(e)) return;if ("timezone" === e) return void this._calendar.view.flash("initialEvents");
        }this._calendar.renderHeader(), this._calendar.renderFooter(), this._calendar.viewsByType = {}, this._calendar.reinitView();
      }, e.prototype.compute = function () {
        var t, e, n, i, r;t = o.firstDefined(this.dynamicOverrides.locale, this.overrides.locale), e = a.localeOptionHash[t], e || (t = s.globalDefaults.locale, e = a.localeOptionHash[t] || {}), n = o.firstDefined(this.dynamicOverrides.isRTL, this.overrides.isRTL, e.isRTL, s.globalDefaults.isRTL), i = n ? s.rtlDefaults : {}, this.dirDefaults = i, this.localeDefaults = e, r = s.mergeOptions([s.globalDefaults, i, e, this.overrides, this.dynamicOverrides]), a.populateInstanceComputableOptions(r), this.reset(r);
      }, e.prototype.recordOverrides = function (t) {
        var e;for (e in t) {
          this.dynamicOverrides[e] = t[e];
        }this._calendar.viewSpecManager.clearCache(), this.compute();
      }, e;
    }(l.default);e.default = u;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(0),
        r = n(3),
        o = n(22),
        s = n(4),
        a = n(32),
        l = n(31),
        u = function () {
      function t(t, e) {
        this.optionsManager = t, this._calendar = e, this.clearCache();
      }return t.prototype.clearCache = function () {
        this.viewSpecCache = {};
      }, t.prototype.getViewSpec = function (t) {
        var e = this.viewSpecCache;return e[t] || (e[t] = this.buildViewSpec(t));
      }, t.prototype.getUnitViewSpec = function (t) {
        var e, n, i;if (-1 !== r.inArray(t, s.unitsDesc)) for (e = this._calendar.header.getViewsWithButtons(), r.each(o.viewHash, function (t) {
          e.push(t);
        }), n = 0; n < e.length; n++) {
          if ((i = this.getViewSpec(e[n])) && i.singleUnit === t) return i;
        }
      }, t.prototype.buildViewSpec = function (t) {
        for (var e, n, r, l, u, d = this.optionsManager.overrides.views || {}, c = [], p = [], h = [], f = t; f;) {
          e = o.viewHash[f], n = d[f], f = null, "function" == typeof e && (e = { class: e }), e && (c.unshift(e), p.unshift(e.defaults || {}), r = r || e.duration, f = f || e.type), n && (h.unshift(n), r = r || n.duration, f = f || n.type);
        }return e = s.mergeProps(c), e.type = t, !!e.class && (r = r || this.optionsManager.dynamicOverrides.duration || this.optionsManager.overrides.duration, r && (l = i.duration(r), l.valueOf() && (u = s.computeDurationGreatestUnit(l, r), e.duration = l, e.durationUnit = u, 1 === l.as(u) && (e.singleUnit = u, h.unshift(d[u] || {})))), e.defaults = a.mergeOptions(p), e.overrides = a.mergeOptions(h), this.buildViewSpecOptions(e), this.buildViewSpecButtonText(e, t), e);
      }, t.prototype.buildViewSpecOptions = function (t) {
        var e = this.optionsManager;t.options = a.mergeOptions([a.globalDefaults, t.defaults, e.dirDefaults, e.localeDefaults, e.overrides, t.overrides, e.dynamicOverrides]), l.populateInstanceComputableOptions(t.options);
      }, t.prototype.buildViewSpecButtonText = function (t, e) {
        function n(n) {
          var i = n.buttonText || {};return i[e] || (t.buttonTextKey ? i[t.buttonTextKey] : null) || (t.singleUnit ? i[t.singleUnit] : null);
        }var i = this.optionsManager;t.buttonTextOverride = n(i.dynamicOverrides) || n(i.overrides) || t.overrides.buttonText, t.buttonTextDefault = n(i.localeDefaults) || n(i.dirDefaults) || t.defaults.buttonText || n(a.globalDefaults) || (t.duration ? this._calendar.humanizeDuration(t.duration) : null) || e;
      }, t;
    }();e.default = u;
  }, function (t, e, n) {
    function i(t, e) {
      return t.getPrimitive() === e.getPrimitive();
    }Object.defineProperty(e, "__esModule", { value: !0 });var r = n(3),
        o = n(4),
        s = n(243),
        a = n(52),
        l = n(6),
        u = n(38),
        d = n(13),
        c = n(18),
        p = n(11),
        h = n(7),
        f = function () {
      function t(t) {
        this.calendar = t, this.stickySource = new a.default(t), this.otherSources = [];
      }return t.prototype.requestEvents = function (t, e, n, i) {
        return !i && this.currentPeriod && this.currentPeriod.isWithinRange(t, e) && n === this.currentPeriod.timezone || this.setPeriod(new s.default(t, e, n)), this.currentPeriod.whenReleased();
      }, t.prototype.addSource = function (t) {
        this.otherSources.push(t), this.currentPeriod && this.currentPeriod.requestSource(t);
      }, t.prototype.removeSource = function (t) {
        o.removeExact(this.otherSources, t), this.currentPeriod && this.currentPeriod.purgeSource(t);
      }, t.prototype.removeAllSources = function () {
        this.otherSources = [], this.currentPeriod && this.currentPeriod.purgeAllSources();
      }, t.prototype.refetchSource = function (t) {
        var e = this.currentPeriod;e && (e.freeze(), e.purgeSource(t), e.requestSource(t), e.thaw());
      }, t.prototype.refetchAllSources = function () {
        var t = this.currentPeriod;t && (t.freeze(), t.purgeAllSources(), t.requestSources(this.getSources()), t.thaw());
      }, t.prototype.getSources = function () {
        return [this.stickySource].concat(this.otherSources);
      }, t.prototype.multiQuerySources = function (t) {
        t ? r.isArray(t) || (t = [t]) : t = [];var e,
            n = [];for (e = 0; e < t.length; e++) {
          n.push.apply(n, this.querySources(t[e]));
        }return n;
      }, t.prototype.querySources = function (t) {
        var e,
            n,
            o = this.otherSources;for (e = 0; e < o.length; e++) {
          if ((n = o[e]) === t) return [n];
        }return (n = this.getSourceById(l.default.normalizeId(t))) ? [n] : (t = u.default.parse(t, this.calendar), t ? r.grep(o, function (e) {
          return i(t, e);
        }) : void 0);
      }, t.prototype.getSourceById = function (t) {
        return r.grep(this.otherSources, function (e) {
          return e.id && e.id === t;
        })[0];
      }, t.prototype.setPeriod = function (t) {
        this.currentPeriod && (this.unbindPeriod(this.currentPeriod), this.currentPeriod = null), this.currentPeriod = t, this.bindPeriod(t), t.requestSources(this.getSources());
      }, t.prototype.bindPeriod = function (t) {
        this.listenTo(t, "release", function (t) {
          this.trigger("release", t);
        });
      }, t.prototype.unbindPeriod = function (t) {
        this.stopListeningTo(t);
      }, t.prototype.getEventDefByUid = function (t) {
        if (this.currentPeriod) return this.currentPeriod.getEventDefByUid(t);
      }, t.prototype.addEventDef = function (t, e) {
        e && this.stickySource.addEventDef(t), this.currentPeriod && this.currentPeriod.addEventDef(t);
      }, t.prototype.removeEventDefsById = function (t) {
        this.getSources().forEach(function (e) {
          e.removeEventDefsById(t);
        }), this.currentPeriod && this.currentPeriod.removeEventDefsById(t);
      }, t.prototype.removeAllEventDefs = function () {
        this.getSources().forEach(function (t) {
          t.removeAllEventDefs();
        }), this.currentPeriod && this.currentPeriod.removeAllEventDefs();
      }, t.prototype.mutateEventsWithId = function (t, e) {
        var n,
            i = this.currentPeriod,
            r = [];return i ? (i.freeze(), n = i.getEventDefsById(t), n.forEach(function (t) {
          i.removeEventDef(t), r.push(e.mutateSingle(t)), i.addEventDef(t);
        }), i.thaw(), function () {
          i.freeze();for (var t = 0; t < n.length; t++) {
            i.removeEventDef(n[t]), r[t](), i.addEventDef(n[t]);
          }i.thaw();
        }) : function () {};
      }, t.prototype.buildMutatedEventInstanceGroup = function (t, e) {
        var n,
            i,
            r = this.getEventDefsById(t),
            o = [];for (n = 0; n < r.length; n++) {
          (i = r[n].clone()) instanceof d.default && (e.mutateSingle(i), o.push.apply(o, i.buildInstances()));
        }return new c.default(o);
      }, t.prototype.freeze = function () {
        this.currentPeriod && this.currentPeriod.freeze();
      }, t.prototype.thaw = function () {
        this.currentPeriod && this.currentPeriod.thaw();
      }, t.prototype.getEventDefsById = function (t) {
        return this.currentPeriod.getEventDefsById(t);
      }, t.prototype.getEventInstances = function () {
        return this.currentPeriod.getEventInstances();
      }, t.prototype.getEventInstancesWithId = function (t) {
        return this.currentPeriod.getEventInstancesWithId(t);
      }, t.prototype.getEventInstancesWithoutId = function (t) {
        return this.currentPeriod.getEventInstancesWithoutId(t);
      }, t;
    }();e.default = f, p.default.mixInto(f), h.default.mixInto(f);
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(3),
        r = n(4),
        o = n(20),
        s = n(11),
        a = n(5),
        l = n(18),
        u = function () {
      function t(t, e, n) {
        this.pendingCnt = 0, this.freezeDepth = 0, this.stuntedReleaseCnt = 0, this.releaseCnt = 0, this.start = t, this.end = e, this.timezone = n, this.unzonedRange = new a.default(t.clone().stripZone(), e.clone().stripZone()), this.requestsByUid = {}, this.eventDefsByUid = {}, this.eventDefsById = {}, this.eventInstanceGroupsById = {};
      }return t.prototype.isWithinRange = function (t, e) {
        return !t.isBefore(this.start) && !e.isAfter(this.end);
      }, t.prototype.requestSources = function (t) {
        this.freeze();for (var e = 0; e < t.length; e++) {
          this.requestSource(t[e]);
        }this.thaw();
      }, t.prototype.requestSource = function (t) {
        var e = this,
            n = { source: t, status: "pending", eventDefs: null };this.requestsByUid[t.uid] = n, this.pendingCnt += 1, t.fetch(this.start, this.end, this.timezone).then(function (t) {
          "cancelled" !== n.status && (n.status = "completed", n.eventDefs = t, e.addEventDefs(t), e.pendingCnt--, e.tryRelease());
        }, function () {
          "cancelled" !== n.status && (n.status = "failed", e.pendingCnt--, e.tryRelease());
        });
      }, t.prototype.purgeSource = function (t) {
        var e = this.requestsByUid[t.uid];e && (delete this.requestsByUid[t.uid], "pending" === e.status ? (e.status = "cancelled", this.pendingCnt--, this.tryRelease()) : "completed" === e.status && e.eventDefs.forEach(this.removeEventDef.bind(this)));
      }, t.prototype.purgeAllSources = function () {
        var t,
            e,
            n = this.requestsByUid,
            i = 0;for (t in n) {
          e = n[t], "pending" === e.status ? e.status = "cancelled" : "completed" === e.status && i++;
        }this.requestsByUid = {}, this.pendingCnt = 0, i && this.removeAllEventDefs();
      }, t.prototype.getEventDefByUid = function (t) {
        return this.eventDefsByUid[t];
      }, t.prototype.getEventDefsById = function (t) {
        var e = this.eventDefsById[t];return e ? e.slice() : [];
      }, t.prototype.addEventDefs = function (t) {
        for (var e = 0; e < t.length; e++) {
          this.addEventDef(t[e]);
        }
      }, t.prototype.addEventDef = function (t) {
        var e,
            n = this.eventDefsById,
            i = t.id,
            r = n[i] || (n[i] = []),
            o = t.buildInstances(this.unzonedRange);for (r.push(t), this.eventDefsByUid[t.uid] = t, e = 0; e < o.length; e++) {
          this.addEventInstance(o[e], i);
        }
      }, t.prototype.removeEventDefsById = function (t) {
        var e = this;this.getEventDefsById(t).forEach(function (t) {
          e.removeEventDef(t);
        });
      }, t.prototype.removeAllEventDefs = function () {
        var t = i.isEmptyObject(this.eventDefsByUid);this.eventDefsByUid = {}, this.eventDefsById = {}, this.eventInstanceGroupsById = {}, t || this.tryRelease();
      }, t.prototype.removeEventDef = function (t) {
        var e = this.eventDefsById,
            n = e[t.id];delete this.eventDefsByUid[t.uid], n && (r.removeExact(n, t), n.length || delete e[t.id], this.removeEventInstancesForDef(t));
      }, t.prototype.getEventInstances = function () {
        var t,
            e = this.eventInstanceGroupsById,
            n = [];for (t in e) {
          n.push.apply(n, e[t].eventInstances);
        }return n;
      }, t.prototype.getEventInstancesWithId = function (t) {
        var e = this.eventInstanceGroupsById[t];return e ? e.eventInstances.slice() : [];
      }, t.prototype.getEventInstancesWithoutId = function (t) {
        var e,
            n = this.eventInstanceGroupsById,
            i = [];for (e in n) {
          e !== t && i.push.apply(i, n[e].eventInstances);
        }return i;
      }, t.prototype.addEventInstance = function (t, e) {
        var n = this.eventInstanceGroupsById;(n[e] || (n[e] = new l.default())).eventInstances.push(t), this.tryRelease();
      }, t.prototype.removeEventInstancesForDef = function (t) {
        var e,
            n = this.eventInstanceGroupsById,
            i = n[t.id];i && (e = r.removeMatching(i.eventInstances, function (e) {
          return e.def === t;
        }), i.eventInstances.length || delete n[t.id], e && this.tryRelease());
      }, t.prototype.tryRelease = function () {
        this.pendingCnt || (this.freezeDepth ? this.stuntedReleaseCnt++ : this.release());
      }, t.prototype.release = function () {
        this.releaseCnt++, this.trigger("release", this.eventInstanceGroupsById);
      }, t.prototype.whenReleased = function () {
        var t = this;return this.releaseCnt ? o.default.resolve(this.eventInstanceGroupsById) : o.default.construct(function (e) {
          t.one("release", e);
        });
      }, t.prototype.freeze = function () {
        this.freezeDepth++ || (this.stuntedReleaseCnt = 0);
      }, t.prototype.thaw = function () {
        --this.freezeDepth || !this.stuntedReleaseCnt || this.pendingCnt || this.release();
      }, t;
    }();e.default = u, s.default.mixInto(u);
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(3),
        r = n(4),
        o = n(7),
        s = function () {
      function t(t, e) {
        this.isFollowing = !1, this.isHidden = !1, this.isAnimating = !1, this.options = e = e || {}, this.sourceEl = t, this.parentEl = e.parentEl ? i(e.parentEl) : t.parent();
      }return t.prototype.start = function (t) {
        this.isFollowing || (this.isFollowing = !0, this.y0 = r.getEvY(t), this.x0 = r.getEvX(t), this.topDelta = 0, this.leftDelta = 0, this.isHidden || this.updatePosition(), r.getEvIsTouch(t) ? this.listenTo(i(document), "touchmove", this.handleMove) : this.listenTo(i(document), "mousemove", this.handleMove));
      }, t.prototype.stop = function (t, e) {
        var n = this,
            r = this.options.revertDuration,
            o = function o() {
          n.isAnimating = !1, n.removeElement(), n.top0 = n.left0 = null, e && e();
        };this.isFollowing && !this.isAnimating && (this.isFollowing = !1, this.stopListeningTo(i(document)), t && r && !this.isHidden ? (this.isAnimating = !0, this.el.animate({ top: this.top0, left: this.left0 }, { duration: r, complete: o })) : o());
      }, t.prototype.getEl = function () {
        var t = this.el;return t || (t = this.el = this.sourceEl.clone().addClass(this.options.additionalClass || "").css({ position: "absolute", visibility: "", display: this.isHidden ? "none" : "", margin: 0, right: "auto", bottom: "auto", width: this.sourceEl.width(), height: this.sourceEl.height(), opacity: this.options.opacity || "", zIndex: this.options.zIndex }), t.addClass("fc-unselectable"), t.appendTo(this.parentEl)), t;
      }, t.prototype.removeElement = function () {
        this.el && (this.el.remove(), this.el = null);
      }, t.prototype.updatePosition = function () {
        var t, e;this.getEl(), null == this.top0 && (t = this.sourceEl.offset(), e = this.el.offsetParent().offset(), this.top0 = t.top - e.top, this.left0 = t.left - e.left), this.el.css({ top: this.top0 + this.topDelta, left: this.left0 + this.leftDelta });
      }, t.prototype.handleMove = function (t) {
        this.topDelta = r.getEvY(t) - this.y0, this.leftDelta = r.getEvX(t) - this.x0, this.isHidden || this.updatePosition();
      }, t.prototype.hide = function () {
        this.isHidden || (this.isHidden = !0, this.el && this.el.hide());
      }, t.prototype.show = function () {
        this.isHidden && (this.isHidden = !1, this.updatePosition(), this.getEl().show());
      }, t;
    }();e.default = s, o.default.mixInto(s);
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(23),
        o = n(15),
        s = function (t) {
      function e(e) {
        var n = t.call(this, e) || this;return n.dragListener = n.buildDragListener(), n;
      }return i.__extends(e, t), e.prototype.end = function () {
        this.dragListener.endInteraction();
      }, e.prototype.bindToEl = function (t) {
        var e = this.component,
            n = this.dragListener;e.bindDateHandlerToEl(t, "mousedown", function (t) {
          e.shouldIgnoreMouse() || n.startInteraction(t);
        }), e.bindDateHandlerToEl(t, "touchstart", function (t) {
          e.shouldIgnoreTouch() || n.startInteraction(t);
        });
      }, e.prototype.buildDragListener = function () {
        var t,
            e = this,
            n = this.component,
            i = new r.default(n, { scroll: this.opt("dragScroll"), interactionStart: function interactionStart() {
            t = i.origHit;
          }, hitOver: function hitOver(e, n, i) {
            n || (t = null);
          }, hitOut: function hitOut() {
            t = null;
          }, interactionEnd: function interactionEnd(i, r) {
            var o;!r && t && (o = n.getSafeHitFootprint(t)) && e.view.triggerDayClick(o, n.getHitEl(t), i);
          } });return i.shouldCancelTouchScroll = !1, i.scrollAlwaysKills = !0, i;
      }, e;
    }(o.default);e.default = s;
  }, function (t, e, n) {
    function i(t) {
      var e,
          n,
          i,
          r = [];for (e = 0; e < t.length; e++) {
        for (n = t[e], i = 0; i < r.length && s(n, r[i]).length; i++) {}n.level = i, (r[i] || (r[i] = [])).push(n);
      }return r;
    }function r(t) {
      var e, n, i, r, o;for (e = 0; e < t.length; e++) {
        for (n = t[e], i = 0; i < n.length; i++) {
          for (r = n[i], r.forwardSegs = [], o = e + 1; o < t.length; o++) {
            s(r, t[o], r.forwardSegs);
          }
        }
      }
    }function o(t) {
      var e,
          n,
          i = t.forwardSegs,
          r = 0;if (void 0 === t.forwardPressure) {
        for (e = 0; e < i.length; e++) {
          n = i[e], o(n), r = Math.max(r, 1 + n.forwardPressure);
        }t.forwardPressure = r;
      }
    }function s(t, e, n) {
      void 0 === n && (n = []);for (var i = 0; i < e.length; i++) {
        a(t, e[i]) && n.push(e[i]);
      }return n;
    }function a(t, e) {
      return t.bottom > e.top && t.top < e.bottom;
    }Object.defineProperty(e, "__esModule", { value: !0 });var l = n(2),
        u = n(4),
        d = n(42),
        c = function (t) {
      function e(e, n) {
        var i = t.call(this, e, n) || this;return i.timeGrid = e, i;
      }return l.__extends(e, t), e.prototype.renderFgSegs = function (t) {
        this.renderFgSegsIntoContainers(t, this.timeGrid.fgContainerEls);
      }, e.prototype.renderFgSegsIntoContainers = function (t, e) {
        var n, i;for (n = this.timeGrid.groupSegsByCol(t), i = 0; i < this.timeGrid.colCnt; i++) {
          this.updateFgSegCoords(n[i]);
        }this.timeGrid.attachSegsByCol(n, e);
      }, e.prototype.unrenderFgSegs = function () {
        this.fgSegs && this.fgSegs.forEach(function (t) {
          t.el.remove();
        });
      }, e.prototype.computeEventTimeFormat = function () {
        return this.opt("noMeridiemTimeFormat");
      }, e.prototype.computeDisplayEventEnd = function () {
        return !0;
      }, e.prototype.fgSegHtml = function (t, e) {
        var n,
            i,
            r,
            o = this.view,
            s = o.calendar,
            a = t.footprint.componentFootprint,
            l = a.isAllDay,
            d = t.footprint.eventDef,
            c = o.isEventDefDraggable(d),
            p = !e && t.isStart && o.isEventDefResizableFromStart(d),
            h = !e && t.isEnd && o.isEventDefResizableFromEnd(d),
            f = this.getSegClasses(t, c, p || h),
            g = u.cssToStr(this.getSkinCss(d));if (f.unshift("fc-time-grid-event", "fc-v-event"), o.isMultiDayRange(a.unzonedRange)) {
          if (t.isStart || t.isEnd) {
            var v = s.msToMoment(t.startMs),
                y = s.msToMoment(t.endMs);n = this._getTimeText(v, y, l), i = this._getTimeText(v, y, l, "LT"), r = this._getTimeText(v, y, l, null, !1);
          }
        } else n = this.getTimeText(t.footprint), i = this.getTimeText(t.footprint, "LT"), r = this.getTimeText(t.footprint, null, !1);return '<a class="' + f.join(" ") + '"' + (d.url ? ' href="' + u.htmlEscape(d.url) + '"' : "") + (g ? ' style="' + g + '"' : "") + '><div class="fc-content">' + (n ? '<div class="fc-time" data-start="' + u.htmlEscape(r) + '" data-full="' + u.htmlEscape(i) + '"><span>' + u.htmlEscape(n) + "</span></div>" : "") + (d.title ? '<div class="fc-title">' + u.htmlEscape(d.title) + "</div>" : "") + '</div><div class="fc-bg"/>' + (h ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>";
      }, e.prototype.updateFgSegCoords = function (t) {
        this.timeGrid.computeSegVerticals(t), this.computeFgSegHorizontals(t), this.timeGrid.assignSegVerticals(t), this.assignFgSegHorizontals(t);
      }, e.prototype.computeFgSegHorizontals = function (t) {
        var e, n, s;if (this.sortEventSegs(t), e = i(t), r(e), n = e[0]) {
          for (s = 0; s < n.length; s++) {
            o(n[s]);
          }for (s = 0; s < n.length; s++) {
            this.computeFgSegForwardBack(n[s], 0, 0);
          }
        }
      }, e.prototype.computeFgSegForwardBack = function (t, e, n) {
        var i,
            r = t.forwardSegs;if (void 0 === t.forwardCoord) for (r.length ? (this.sortForwardSegs(r), this.computeFgSegForwardBack(r[0], e + 1, n), t.forwardCoord = r[0].backwardCoord) : t.forwardCoord = 1, t.backwardCoord = t.forwardCoord - (t.forwardCoord - n) / (e + 1), i = 0; i < r.length; i++) {
          this.computeFgSegForwardBack(r[i], 0, t.forwardCoord);
        }
      }, e.prototype.sortForwardSegs = function (t) {
        t.sort(u.proxy(this, "compareForwardSegs"));
      }, e.prototype.compareForwardSegs = function (t, e) {
        return e.forwardPressure - t.forwardPressure || (t.backwardCoord || 0) - (e.backwardCoord || 0) || this.compareEventSegs(t, e);
      }, e.prototype.assignFgSegHorizontals = function (t) {
        var e, n;for (e = 0; e < t.length; e++) {
          n = t[e], n.el.css(this.generateFgSegHorizontalCss(n)), n.bottom - n.top < 30 && n.el.addClass("fc-short");
        }
      }, e.prototype.generateFgSegHorizontalCss = function (t) {
        var e,
            n,
            i = this.opt("slotEventOverlap"),
            r = t.backwardCoord,
            o = t.forwardCoord,
            s = this.timeGrid.generateSegVerticalCss(t),
            a = this.timeGrid.isRTL;return i && (o = Math.min(1, r + 2 * (o - r))), a ? (e = 1 - o, n = r) : (e = r, n = 1 - o), s.zIndex = t.level + 1, s.left = 100 * e + "%", s.right = 100 * n + "%", i && t.forwardPressure && (s[a ? "marginLeft" : "marginRight"] = 20), s;
      }, e;
    }(d.default);e.default = c;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(58),
        s = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.prototype.renderSegs = function (t, e) {
        var n,
            i,
            o,
            s = [];for (this.eventRenderer.renderFgSegsIntoContainers(t, this.component.helperContainerEls), n = 0; n < t.length; n++) {
          i = t[n], e && e.col === i.col && (o = e.el, i.el.css({ left: o.css("left"), right: o.css("right"), "margin-left": o.css("margin-left"), "margin-right": o.css("margin-right") })), s.push(i.el[0]);
        }return r(s);
      }, e;
    }(o.default);e.default = s;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(57),
        o = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.prototype.attachSegEls = function (t, e) {
        var n,
            i = this.component;return "bgEvent" === t ? n = i.bgContainerEls : "businessHours" === t ? n = i.businessContainerEls : "highlight" === t && (n = i.highlightContainerEls), i.updateSegVerticals(e), i.attachSegsByCol(i.groupSegsByCol(e), n), e.map(function (t) {
          return t.el[0];
        });
      }, e;
    }(r.default);e.default = o;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(3),
        r = n(4),
        o = n(7),
        s = function () {
      function t(t) {
        this.isHidden = !0, this.margin = 10, this.options = t || {};
      }return t.prototype.show = function () {
        this.isHidden && (this.el || this.render(), this.el.show(), this.position(), this.isHidden = !1, this.trigger("show"));
      }, t.prototype.hide = function () {
        this.isHidden || (this.el.hide(), this.isHidden = !0, this.trigger("hide"));
      }, t.prototype.render = function () {
        var t = this,
            e = this.options;this.el = i('<div class="fc-popover"/>').addClass(e.className || "").css({ top: 0, left: 0 }).append(e.content).appendTo(e.parentEl), this.el.on("click", ".fc-close", function () {
          t.hide();
        }), e.autoHide && this.listenTo(i(document), "mousedown", this.documentMousedown);
      }, t.prototype.documentMousedown = function (t) {
        this.el && !i(t.target).closest(this.el).length && this.hide();
      }, t.prototype.removeElement = function () {
        this.hide(), this.el && (this.el.remove(), this.el = null), this.stopListeningTo(i(document), "mousedown");
      }, t.prototype.position = function () {
        var t,
            e,
            n,
            o,
            s,
            a = this.options,
            l = this.el.offsetParent().offset(),
            u = this.el.outerWidth(),
            d = this.el.outerHeight(),
            c = i(window),
            p = r.getScrollParent(this.el);o = a.top || 0, s = void 0 !== a.left ? a.left : void 0 !== a.right ? a.right - u : 0, p.is(window) || p.is(document) ? (p = c, t = 0, e = 0) : (n = p.offset(), t = n.top, e = n.left), t += c.scrollTop(), e += c.scrollLeft(), !1 !== a.viewportConstrain && (o = Math.min(o, t + p.outerHeight() - d - this.margin), o = Math.max(o, t + this.margin), s = Math.min(s, e + p.outerWidth() - u - this.margin), s = Math.max(s, e + this.margin)), this.el.css({ top: o - l.top, left: s - l.left });
      }, t.prototype.trigger = function (t) {
        this.options[t] && this.options[t].apply(this, Array.prototype.slice.call(arguments, 1));
      }, t;
    }();e.default = s, o.default.mixInto(s);
  }, function (t, e, n) {
    function i(t, e) {
      var n, i;for (n = 0; n < e.length; n++) {
        if (i = e[n], i.leftCol <= t.rightCol && i.rightCol >= t.leftCol) return !0;
      }return !1;
    }function r(t, e) {
      return t.leftCol - e.leftCol;
    }Object.defineProperty(e, "__esModule", { value: !0 });var o = n(2),
        s = n(3),
        a = n(4),
        l = n(42),
        u = function (t) {
      function e(e, n) {
        var i = t.call(this, e, n) || this;return i.dayGrid = e, i;
      }return o.__extends(e, t), e.prototype.renderBgRanges = function (e) {
        e = s.grep(e, function (t) {
          return t.eventDef.isAllDay();
        }), t.prototype.renderBgRanges.call(this, e);
      }, e.prototype.renderFgSegs = function (t) {
        var e = this.rowStructs = this.renderSegRows(t);this.dayGrid.rowEls.each(function (t, n) {
          s(n).find(".fc-content-skeleton > table").append(e[t].tbodyEl);
        });
      }, e.prototype.unrenderFgSegs = function () {
        for (var t, e = this.rowStructs || []; t = e.pop();) {
          t.tbodyEl.remove();
        }this.rowStructs = null;
      }, e.prototype.renderSegRows = function (t) {
        var e,
            n,
            i = [];for (e = this.groupSegRows(t), n = 0; n < e.length; n++) {
          i.push(this.renderSegRow(n, e[n]));
        }return i;
      }, e.prototype.renderSegRow = function (t, e) {
        function n(t) {
          for (; o < t;) {
            d = (y[i - 1] || [])[o], d ? d.attr("rowspan", parseInt(d.attr("rowspan") || 1, 10) + 1) : (d = s("<td/>"), a.append(d)), v[i][o] = d, y[i][o] = d, o++;
          }
        }var i,
            r,
            o,
            a,
            l,
            u,
            d,
            c = this.dayGrid.colCnt,
            p = this.buildSegLevels(e),
            h = Math.max(1, p.length),
            f = s("<tbody/>"),
            g = [],
            v = [],
            y = [];for (i = 0; i < h; i++) {
          if (r = p[i], o = 0, a = s("<tr/>"), g.push([]), v.push([]), y.push([]), r) for (l = 0; l < r.length; l++) {
            for (u = r[l], n(u.leftCol), d = s('<td class="fc-event-container"/>').append(u.el), u.leftCol !== u.rightCol ? d.attr("colspan", u.rightCol - u.leftCol + 1) : y[i][o] = d; o <= u.rightCol;) {
              v[i][o] = d, g[i][o] = u, o++;
            }a.append(d);
          }n(c), this.dayGrid.bookendCells(a), f.append(a);
        }return { row: t, tbodyEl: f, cellMatrix: v, segMatrix: g, segLevels: p, segs: e };
      }, e.prototype.buildSegLevels = function (t) {
        var e,
            n,
            o,
            s = [];for (this.sortEventSegs(t), e = 0; e < t.length; e++) {
          for (n = t[e], o = 0; o < s.length && i(n, s[o]); o++) {}n.level = o, (s[o] || (s[o] = [])).push(n);
        }for (o = 0; o < s.length; o++) {
          s[o].sort(r);
        }return s;
      }, e.prototype.groupSegRows = function (t) {
        var e,
            n = [];for (e = 0; e < this.dayGrid.rowCnt; e++) {
          n.push([]);
        }for (e = 0; e < t.length; e++) {
          n[t[e].row].push(t[e]);
        }return n;
      }, e.prototype.computeEventTimeFormat = function () {
        return this.opt("extraSmallTimeFormat");
      }, e.prototype.computeDisplayEventEnd = function () {
        return 1 === this.dayGrid.colCnt;
      }, e.prototype.fgSegHtml = function (t, e) {
        var n,
            i,
            r = this.view,
            o = t.footprint.eventDef,
            s = t.footprint.componentFootprint.isAllDay,
            l = r.isEventDefDraggable(o),
            u = !e && s && t.isStart && r.isEventDefResizableFromStart(o),
            d = !e && s && t.isEnd && r.isEventDefResizableFromEnd(o),
            c = this.getSegClasses(t, l, u || d),
            p = a.cssToStr(this.getSkinCss(o)),
            h = "";return c.unshift("fc-day-grid-event", "fc-h-event"), t.isStart && (n = this.getTimeText(t.footprint)) && (h = '<span class="fc-time">' + a.htmlEscape(n) + "</span>"), i = '<span class="fc-title">' + (a.htmlEscape(o.title || "") || "&nbsp;") + "</span>", '<a class="' + c.join(" ") + '"' + (o.url ? ' href="' + a.htmlEscape(o.url) + '"' : "") + (p ? ' style="' + p + '"' : "") + '><div class="fc-content">' + (this.dayGrid.isRTL ? i + " " + h : h + " " + i) + "</div>" + (u ? '<div class="fc-resizer fc-start-resizer" />' : "") + (d ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>";
      }, e;
    }(l.default);e.default = u;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(58),
        s = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.prototype.renderSegs = function (t, e) {
        var n,
            i = [];return n = this.eventRenderer.renderSegRows(t), this.component.rowEls.each(function (t, o) {
          var s,
              a,
              l = r(o),
              u = r('<div class="fc-helper-skeleton"><table/></div>');e && e.row === t ? a = e.el.position().top : (s = l.find(".fc-content-skeleton tbody"), s.length || (s = l.find(".fc-content-skeleton table")), a = s.position().top), u.css("top", a).find("table").append(n[t].tbodyEl), l.append(u), i.push(u[0]);
        }), r(i);
      }, e;
    }(o.default);e.default = s;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(57),
        s = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;return e.fillSegTag = "td", e;
      }return i.__extends(e, t), e.prototype.attachSegEls = function (t, e) {
        var n,
            i,
            r,
            o = [];for (n = 0; n < e.length; n++) {
          i = e[n], r = this.renderFillRow(t, i), this.component.rowEls.eq(i.row).append(r), o.push(r[0]);
        }return o;
      }, e.prototype.renderFillRow = function (t, e) {
        var n,
            i,
            o,
            s = this.component.colCnt,
            a = e.leftCol,
            l = e.rightCol + 1;return n = "businessHours" === t ? "bgevent" : t.toLowerCase(), i = r('<div class="fc-' + n + '-skeleton"><table><tr/></table></div>'), o = i.find("tr"), a > 0 && o.append('<td colspan="' + a + '"/>'), o.append(e.el.attr("colspan", l - a)), l < s && o.append('<td colspan="' + (s - l) + '"/>'), this.component.bookendCells(o), i;
      }, e;
    }(o.default);e.default = s;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(228),
        o = n(5),
        s = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.prototype.buildRenderRange = function (e, n, i) {
        var r,
            s = t.prototype.buildRenderRange.call(this, e, n, i),
            a = this.msToUtcMoment(s.startMs, i),
            l = this.msToUtcMoment(s.endMs, i);return this.opt("fixedWeekCount") && (r = Math.ceil(l.diff(a, "weeks", !0)), l.add(6 - r, "weeks")), new o.default(a, l);
      }, e;
    }(r.default);e.default = s;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(4),
        o = n(42),
        s = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.prototype.renderFgSegs = function (t) {
        t.length ? this.component.renderSegList(t) : this.component.renderEmptyMessage();
      }, e.prototype.fgSegHtml = function (t) {
        var e,
            n = this.view,
            i = n.calendar,
            o = i.theme,
            s = t.footprint,
            a = s.eventDef,
            l = s.componentFootprint,
            u = a.url,
            d = ["fc-list-item"].concat(this.getClasses(a)),
            c = this.getBgColor(a);return e = l.isAllDay ? n.getAllDayHtml() : n.isMultiDayRange(l.unzonedRange) ? t.isStart || t.isEnd ? r.htmlEscape(this._getTimeText(i.msToMoment(t.startMs), i.msToMoment(t.endMs), l.isAllDay)) : n.getAllDayHtml() : r.htmlEscape(this.getTimeText(s)), u && d.push("fc-has-url"), '<tr class="' + d.join(" ") + '">' + (this.displayEventTime ? '<td class="fc-list-item-time ' + o.getClass("widgetContent") + '">' + (e || "") + "</td>" : "") + '<td class="fc-list-item-marker ' + o.getClass("widgetContent") + '"><span class="fc-event-dot"' + (c ? ' style="background-color:' + c + '"' : "") + '></span></td><td class="fc-list-item-title ' + o.getClass("widgetContent") + '"><a' + (u ? ' href="' + r.htmlEscape(u) + '"' : "") + ">" + r.htmlEscape(a.title || "") + "</a></td></tr>";
      }, e.prototype.computeEventTimeFormat = function () {
        return this.opt("mediumTimeFormat");
      }, e;
    }(o.default);e.default = s;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(3),
        o = n(59),
        s = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e.prototype.handleClick = function (e, n) {
        var i;t.prototype.handleClick.call(this, e, n), r(n.target).closest("a[href]").length || (i = e.footprint.eventDef.url) && !n.isDefaultPrevented() && (window.location.href = i);
      }, e;
    }(o.default);e.default = s;
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(38),
        r = n(52),
        o = n(215),
        s = n(216);i.default.registerClass(r.default), i.default.registerClass(o.default), i.default.registerClass(s.default);
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(51),
        r = n(213),
        o = n(214),
        s = n(258),
        a = n(259);i.defineThemeSystem("standard", r.default), i.defineThemeSystem("jquery-ui", o.default), i.defineThemeSystem("bootstrap3", s.default), i.defineThemeSystem("bootstrap4", a.default);
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(19),
        o = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e;
    }(r.default);e.default = o, o.prototype.classes = { widget: "fc-bootstrap3", tableGrid: "table-bordered", tableList: "table", tableListHeading: "active", buttonGroup: "btn-group", button: "btn btn-default", stateActive: "active", stateDisabled: "disabled", today: "alert alert-info", popover: "panel panel-default", popoverHeader: "panel-heading", popoverContent: "panel-body", headerRow: "panel-default", dayRow: "panel-default", listView: "panel panel-default" }, o.prototype.baseIconClass = "glyphicon", o.prototype.iconClasses = { close: "glyphicon-remove", prev: "glyphicon-chevron-left", next: "glyphicon-chevron-right", prevYear: "glyphicon-backward", nextYear: "glyphicon-forward" }, o.prototype.iconOverrideOption = "bootstrapGlyphicons", o.prototype.iconOverrideCustomButtonOption = "bootstrapGlyphicon", o.prototype.iconOverridePrefix = "glyphicon-";
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
        r = n(19),
        o = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }return i.__extends(e, t), e;
    }(r.default);e.default = o, o.prototype.classes = { widget: "fc-bootstrap4", tableGrid: "table-bordered", tableList: "table", tableListHeading: "table-active", buttonGroup: "btn-group", button: "btn btn-primary", stateActive: "active", stateDisabled: "disabled", today: "alert alert-info", popover: "card card-primary", popoverHeader: "card-header", popoverContent: "card-body", headerRow: "table-bordered", dayRow: "table-bordered", listView: "card card-primary" }, o.prototype.baseIconClass = "fa", o.prototype.iconClasses = { close: "fa-times", prev: "fa-chevron-left", next: "fa-chevron-right", prevYear: "fa-angle-double-left", nextYear: "fa-angle-double-right" }, o.prototype.iconOverrideOption = "bootstrapFontAwesome", o.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome", o.prototype.iconOverridePrefix = "fa-";
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(22),
        r = n(62),
        o = n(229);i.defineView("basic", { class: r.default }), i.defineView("basicDay", { type: "basic", duration: { days: 1 } }), i.defineView("basicWeek", { type: "basic", duration: { weeks: 1 } }), i.defineView("month", { class: o.default, duration: { months: 1 }, defaults: { fixedWeekCount: !0 } });
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(22),
        r = n(226);i.defineView("agenda", { class: r.default, defaults: { allDaySlot: !0, slotDuration: "00:30:00", slotEventOverlap: !0 } }), i.defineView("agendaDay", { type: "agenda", duration: { days: 1 } }), i.defineView("agendaWeek", { type: "agenda", duration: { weeks: 1 } });
  }, function (t, e, n) {
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n(22),
        r = n(230);i.defineView("list", { class: r.default, buttonTextKey: "list", defaults: { buttonText: "list", listDayFormat: "LL", noEventsMessage: "No events to display" } }), i.defineView("listDay", { type: "list", duration: { days: 1 }, defaults: { listDayFormat: "dddd" } }), i.defineView("listWeek", { type: "list", duration: { weeks: 1 }, defaults: { listDayFormat: "dddd", listDayAltFormat: "LL" } }), i.defineView("listMonth", { type: "list", duration: { month: 1 }, defaults: { listDayAltFormat: "dddd" } }), i.defineView("listYear", { type: "list", duration: { year: 1 }, defaults: { listDayAltFormat: "dddd" } });
  }, function (t, e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ })

/******/ });