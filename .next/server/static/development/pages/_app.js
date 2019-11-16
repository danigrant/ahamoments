module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_utils_firebase__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "/Users/danigrant/Projects/ahamoments/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




 // this instantiates firebase



class AhaMoments extends next_app__WEBPACK_IMPORTED_MODULE_9___default.a {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loggedInUser: {}
    };
    this.handleUserLoggedIn = this.handleUserLoggedIn.bind(this);
  }

  async componentDidMount() {
    if (this.state.loggedIn) {
      this.setState({
        loggedInUser: await Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_11__["getLoggedInUser"])()
      });
    }

    let thisRef = this;
    _utils_firebase__WEBPACK_IMPORTED_MODULE_11__["firebase"].auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        // update state to add current user
        thisRef.setState({
          tempUser: {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid
          }
        });
        thisRef.handleUserLoggedIn();
      } else {
        // user logged out
        thisRef.setState({
          loggedIn: false,
          loggedInUser: {}
        });
      }
    });
  }

  async handleUserLoggedIn() {
    this.setState({
      loggedIn: true,
      loggedInUser: await Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_11__["getLoggedInUser"])()
    });
    Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_11__["saveUserToDB"])(this.state.tempUser.displayName, this.state.tempUser.email, this.state.tempUser.photoURL, this.state.tempUser.uid);
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Nunito:400,700,800,900&display=swap",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "/css/utils.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "/css/styles.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    })), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({
      loggedIn: this.state.loggedIn,
      loggedInUser: this.state.loggedInUser
    }, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })));
  }

}

AhaMoments.getInitialProps = async appContext => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_9___default.a.getInitialProps(appContext);
  return _objectSpread({}, appProps);
};

/* harmony default export */ __webpack_exports__["default"] = (AhaMoments);

/***/ }),

/***/ "./utils/firebase.js":
/*!***************************!*\
  !*** ./utils/firebase.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var firebase = _interopRequireWildcard(__webpack_require__(/*! firebase */ "firebase"));

__webpack_require__(/*! firebase/storage */ "firebase/storage");

var _utils = __webpack_require__(/*! ./utils */ "./utils/utils.js");

/*
  This file contains firebase config and instantiation
  contains functions that interact with the db

  This file also holds all of the auth functions
  logUserIn
  getLoggedInUser <-- returns false if no user logged in
*/
const firebaseConfig = {
  apiKey: "AIzaSyBmeHPOy2Uvargw51ygM30ye9-lrpWoEOU",
  authDomain: "explain-this.firebaseapp.com",
  databaseURL: "https://explain-this.firebaseio.com",
  projectId: "explain-this",
  storageBucket: "explain-this.appspot.com",
  messagingSenderId: "145315125752",
  appId: "1:145315125752:web:4e7c3fe717a051b0471e0d",
  measurementId: "G-2HP7D44T1F"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const conceptsRef = db.collection('concepts');
const explanationsRef = db.collection('explanations');
const usersRef = db.collection('users');
const increment = firebase.firestore.FieldValue.increment(1);
const decrement = firebase.firestore.FieldValue.increment(-1);
const provider = new firebase.auth.TwitterAuthProvider();
const storage = firebase.app().storage();
const storageRef = firebase.app().storage().ref(); // auth

async function saveUserToDB(displayName, email, photoURL, uid) {
  // first check if this a new user?
  let snapshot = await usersRef.where('email', '==', email).get(); // only add user to db if the user is new

  if (snapshot.empty) {
    let newUser = {
      "avatarUrl": photoURL,
      "displayName": displayName,
      "email": email,
      "userID": uid
    };
    usersRef.add(newUser);
  }
}

async function getLoggedInUser() {
  let user = firebase.auth().currentUser;

  if (!user) {
    // No user is signed in.
    return false;
  }

  return {
    "displayName": "Barack Obama",
    "userID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
    "avatarUrl": "/images/temp-avatar.jpg",
    "ahaMomentCount": 4,
    "explanationCount": 5,
    "reactionsCount": {
      "gotIt": 1,
      "laughing": 2,
      "shocked": 3
    }
  }; // maybe pull some stuff about the user into an obj and return that?
  // user.photoURL, user.displayName
}

async function logUserIn() {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    let token = result.credential.accessToken;
    let secret = result.credential.secret; // The signed-in user info.

    let user = result.user; // can use the getLoggedInUser function to return a good user obj
    // user.photoURL, user.displayName, user.email, user.uid does not return twitter handle

    console.log(user);
    return user;
  }).catch(function (error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message; // The email of the user's account used.

    let email = error.email; // The firebase.auth.AuthCredential type that was used.

    let credential = error.credential;
    console.log(error);
  });
} // various utils
// returns everything plus explanations


async function getUserByID(userID) {
  // first get metadata
  let snapshot = await usersRef.where('userID', '==', userID).get();
  let data = {};
  await snapshot.forEach(doc => {
    let docData = doc.data();
    data = {
      "displayName": docData.displayName,
      "userID": docData.userID,
      "avatarUrl": docData.avatarUrl,
      "ahaMomentCount": docData.ahaMomentCount,
      "explanationCount": docData.explanationCount,
      "reactionsCount": {
        "gotIt": docData.reactionGotItCount,
        "laughing": docData.reactionLaughingCount,
        "shocked": docData.reactionShockedCount
      },
      explanations: []
    };
  }); // then get explanations

  let explanationSnapshot = await explanationsRef.where('authorUserID', '==', userID).get(); //.orderBy('score', 'desc').get()

  await explanationSnapshot.forEach(doc => {
    let explanationDocData = doc.data();
    data.explanations.push({
      "explanationID": doc.id,
      "concept": explanationDocData.concept,
      "authorUserID": explanationDocData.authorUserID,
      "authorAvatarUrl": explanationDocData.authorAvatarUrl,
      "authorDisplayName": explanationDocData.authorDisplayName,
      "explanation": {
        "type": explanationDocData.explanation.type,
        "introText": explanationDocData.explanation.introText,
        "mediaLink": explanationDocData.explanation.mediaLink,
        "mediaConsumptionGuidance": explanationDocData.explanation.mediaConsumptionGuidance
      }
    });
  });
  return data;
}

async function getUserProfileInfoByUserID(userID) {
  let snapshot = await usersRef.where('userID', '==', userID).get();
  let data = {};
  await snapshot.forEach(doc => {
    let docData = doc.data();
    data = {
      "displayName": docData.displayName,
      "userID": docData.userID,
      "avatarUrl": docData.avatarUrl,
      "ahaMomentCount": docData.ahaMomentCount,
      "explanationCount": docData.explanationCount,
      "reactionsCount": {
        "gotIt": docData.reactionGotItCount,
        "laughing": docData.reactionLaughingCount,
        "shocked": docData.reactionShockedCount
      }
    };
  });
  return data;
}

async function getDocIDByUserID(userID) {
  let snapshot = await usersRef.where('userID', '==', userID).get();
  let userDocID = "";
  await snapshot.forEach(doc => {
    userDocID = doc.id;
  });
  return userDocID;
}

async function incrementUserExplanationCount(userID) {
  let docID = await getDocIDByUserID(userID);
  let userRef = usersRef.doc(docID);
  userRef.update({
    explanationCount: increment
  });
}

async function getFileURLFromFirebaseStorage(url) {
  let downloadUrl = await storageRef.child(url).getDownloadURL();
  return downloadUrl;
} // get and return various data


async function saveExplanationToDB(explanationObj) {
  let newExplanation = {
    "concept": explanationObj.concept,
    "authorUserID": explanationObj.authorUserID,
    "authorDisplayName": explanationObj.authorDisplayName,
    "authorAvatarUrl": explanationObj.authorAvatarUrl,
    "datetime": firebase.firestore.Timestamp.now(),
    "explanation": {
      "introText": explanationObj.explanation.introText ? explanationObj.explanation.introText : "",
      "mediaConsumptionGuidance": explanationObj.explanation.mediaConsumptionGuidance ? explanationObj.explanation.mediaConsumptionGuidance : "",
      "mediaLink": explanationObj.explanation.mediaLink ? explanationObj.explanation.mediaLink : "",
      "type": explanationObj.explanation.type
    }
  };
  explanationsRef.add(newExplanation);
  incrementUserExplanationCount(explanationObj.authorUserID);
}

async function saveExplanationWithFileToDB(introText, fileToUpload, fileType, userID, concept) {
  // will also want the user here
  // first upload file to db
  let fileName = (0, _utils.generateFilePathAndName)(fileType, userID, concept);
  let snapshot = await storageRef.child(fileName).put(fileToUpload);

  if (!snapshot.state == "success") {
    console.log("error");
  } // then need to save explanation to firestore
  // first to do that, need some user profile data


  let userObj = await getUserProfileInfoByUserID(userID); // then save to firebase

  await saveExplanationToDB({
    "concept": concept,
    "authorUserID": userID,
    "authorDisplayName": userObj.displayName,
    "authorAvatarUrl": userObj.avatarUrl,
    "datetime": firebase.firestore.Timestamp.now(),
    "explanation": {
      "introText": introText,
      "mediaLink": snapshot.metadata.fullPath,
      "type": fileType
    }
  });
}

async function saveWrittenExplanationToDB(text, userID, concept) {
  // first remove any html or scripts because xss
  let cleanText = text.replace('<script>', '').replace('onclick', '').replace('onerror').replace('onResize', '').replace('onPropertyChange', '').replace('onMouseEnter', '').replace('onFocus', ''); // https://gist.github.com/JohannesHoppe/5612274
  // then save explanation to firestore
  // first to do that, need some user profile data

  let userObj = await getUserProfileInfoByUserID(userID); // then save to firebase

  await saveExplanationToDB({
    "concept": concept,
    "authorUserID": userID,
    "authorDisplayName": userObj.displayName,
    "authorAvatarUrl": userObj.avatarUrl,
    "datetime": firebase.firestore.Timestamp.now(),
    "explanation": {
      "introText": text,
      "type": "text"
    }
  });
}

async function saveExternalLinkExplanationToDB(introText, mediaLink, mediaConsumptionGuidance, fileType, userID, concept) {
  // first need some user profile data
  let userObj = await getUserProfileInfoByUserID(userID); // then save to firebase

  await saveExplanationToDB({
    "concept": concept,
    "authorUserID": userID,
    "authorDisplayName": userObj.displayName,
    "authorAvatarUrl": userObj.avatarUrl,
    "datetime": firebase.firestore.Timestamp.now(),
    "explanation": {
      "introText": introText,
      "mediaLink": mediaLink,
      "mediaConsumptionGuidance": mediaConsumptionGuidance,
      "type": fileType
    }
  });
} // returns 2 concepts for the front page that need love as an obj


async function getConceptsThatNeedLove() {
  return {
    "totalAmountOfConceptsNeedingLove": 43,
    "conceptsNeedingLoveToDisplay": [{
      "conceptName": "Derivative",
      "numContributors": 11,
      "contributorAvatars": ["/images/temp-avatar.jpg", "/images/temp-avatar2.jpg", "/images/temp-avatar3.jpg", "/images/temp-avatar4.jpg"]
    }, {
      "conceptName": "Limits",
      "numContributors": 4,
      "contributorAvatars": ["/images/temp-avatar.jpg", "/images/temp-avatar2.jpg", "/images/temp-avatar3.jpg", "/images/temp-avatar4.jpg"]
    }]
  };
} // returns top 5 creators in an array


async function getTopCreatorsAllTime() {
  let snapshot = await usersRef.get(); //.orderBy('score', 'desc').get() <-- need to do this when i have more than one concept to order by

  let data = [];
  await snapshot.forEach(doc => {
    let docData = doc.data();
    data.push({
      "displayName": docData.displayName,
      "userID": docData.userID,
      "avatarUrl": docData.avatarUrl,
      "ahaMomentCount": docData.ahaMomentCount,
      "explanationCount": docData.explanationCount,
      "reactions": {
        "gotItCount": docData.reactionGotItCount,
        "laughingCount": docData.reactionLaughingCount,
        "shockedCount": docData.reactionShockedCount
      }
    });
  });
  return data;
} // returns array of top 5 explanations


async function getTopExplanationsAllTime() {
  let snapshot = await explanationsRef.get(); //.orderBy('score', 'desc').get() <-- need to do this when i have more than one concept to order by

  let data = [];
  await snapshot.forEach(doc => {
    let docData = doc.data();
    data.push({
      "explanationID": doc.id,
      "concept": docData.concept,
      "authorUserID": docData.authorUserID,
      "authorAvatarUrl": docData.authorAvatarUrl,
      "authorDisplayName": docData.authorDisplayName,
      "explanation": {
        "type": docData.explanation.type,
        "introText": docData.explanation.introText,
        "mediaLink": docData.explanation.mediaLink,
        "mediaConsumptionGuidance": docData.explanation.mediaConsumptionGuidance
      },
      "ahaMomentCount": docData.ahaMomentCount,
      "totalScore": docData.totalScore,
      "reactions": {
        "gotItCount": docData.reactionGotItCount,
        "laughingCount": docData.reactionLaughingCount,
        "shockedCount": docData.reactionShockedCount
      }
    });
  });
  return data;
}

async function getTopConceptsAllTime() {
  return [{
    "conceptName": "Integrals",
    // these need to be transformed into - instead of space
    "explanationCount": 10,
    "ahaMomentCount": 20
  }, {
    "conceptName": "Derivatives",
    // these need to be transformed into - instead of space
    "explanationCount": 10,
    "ahaMomentCount": 20
  }, {
    "conceptName": "Limits",
    // these need to be transformed into - instead of space
    "explanationCount": 10,
    "ahaMomentCount": 20
  }, {
    "conceptName": "Infinity",
    // these need to be transformed into - instead of space
    "explanationCount": 10,
    "ahaMomentCount": 20
  }, {
    "conceptName": "Logarithm",
    // these need to be transformed into - instead of space
    "explanationCount": 10,
    "ahaMomentCount": 20
  }];
} // returns array of explanations for a concept sorted in rank order


async function getConceptExplanations(concept) {
  let formattedConcept = concept.toLowerCase();
  let snapshot = await explanationsRef.where('concept', '==', formattedConcept).get(); //.orderBy('score', 'desc').get()

  let data = [];
  await snapshot.forEach(doc => {
    let docData = doc.data();
    data.push({
      "explanationID": doc.id,
      "concept": docData.concept,
      "authorUserID": docData.authorUserID,
      "authorAvatarUrl": docData.authorAvatarUrl,
      "authorDisplayName": docData.authorDisplayName,
      "explanation": {
        "type": docData.explanation.type,
        "introText": docData.explanation.introText,
        "mediaLink": docData.explanation.mediaLink,
        "mediaConsumptionGuidance": docData.explanation.mediaConsumptionGuidance
      },
      "ahaMomentCount": docData.ahaMomentCount,
      "totalScore": docData.totalScore,
      "reactions": {
        "gotItCount": docData.reactionGotItCount,
        "laughingCount": docData.reactionLaughingCount,
        "shockedCount": docData.reactionShockedCount
      }
    });
  });
  return data;
}

module.exports = {
  firebase,
  logUserIn,
  saveUserToDB,
  getLoggedInUser,
  getUserByID,
  saveExplanationWithFileToDB,
  saveWrittenExplanationToDB,
  saveExternalLinkExplanationToDB,
  getFileURLFromFirebaseStorage,
  getTopConceptsAllTime,
  getTopCreatorsAllTime,
  getTopExplanationsAllTime,
  getConceptsThatNeedLove,
  getConceptExplanations
};

/***/ }),

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

const conceptToDisplayName = concept => {
  // replace - with space
  return concept.replace("-", " ");
}; //audio, photo, video, youtube, tweet, text, link


const explanationTypeToDisplayType = explanationType => {
  switch (explanationType) {
    case "audio":
      return "spoken word";
      break;

    case "photo":
      return "illustration";
      break;

    case "video":
      return "monologue";
      break;

    case "youtube":
      return "poetry";
      break;

    case "tweet":
      return "280 characters";
      break;

    case "text":
      return "biography";
      break;

    default:
      return "interpretive dance";
  }
};

const generateFilePathAndName = (fileType, userID, concept) => {
  let randomID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return `/${concept}/${fileType}/${userID}/${randomID}`;
};

async function getTwitterEmbed(tweetUrl) {
  let twitterUser = tweetUrl.split('twitter.com/')[1].split('/')[0];
  let twitterStatus = tweetUrl.split('status/')[1].split('?')[0];
  let res = await fetch(`https://twitter-get-embed-code-proxy.herokuapp.com/twitter-embed-code?name=kylesamani&status=1148350276983824385`); // let res = await fetch(`https://twitter-get-embed-code-proxy.herokuapp.com/twitter-embed-code?name=${twitterUser}&status=${twitterStatus}`)

  let text = await res.text();
  console.log();
  return text;
}

module.exports = {
  conceptToDisplayName,
  explanationTypeToDisplayType,
  generateFilePathAndName,
  getTwitterEmbed
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map