webpackHotUpdate("static/development/pages/swippableconcept/[id].js",{

/***/ "./components/SwipableCardContainer.js":
/*!*********************************************!*\
  !*** ./components/SwipableCardContainer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SwipableCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SwipableCard */ "./components/SwipableCard.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _ExplanationCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ExplanationCard */ "./components/ExplanationCard.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_utils_firebase__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-reveal/Zoom */ "./node_modules/react-reveal/Zoom.js");
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/SwipableCardContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;









var SwipableCardContainer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SwipableCardContainer, _React$Component);

  function SwipableCardContainer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SwipableCardContainer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SwipableCardContainer).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSwipe", function () {
      _this.setState({
        displayCardIndex: _this.state.displayCardIndex + 1,
        showExplanationToggle: immutability_helper__WEBPACK_IMPORTED_MODULE_14___default()(_this.state.showExplanationToggle, {
          displayCardIndex: !_this.state.showExplanationToggle[displayCardIndex]
        })
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleReplay", function () {
      _this.setState({
        displayCardIndex: 0
      });
    });

    _this.state = {
      explanationCardDeck: _this.props.conceptExplanationsArray,
      displayCardIndex: 0,
      showExplanationToggle: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SwipableCardContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.conceptExplanationsArray.map(function (e, index) {
        _this2.setState({
          showExplanationToggle: _this2.state.showExplanationToggle.push(false)
        });
      });
      console.log(this.state.showExplanationToggle);
    }
  }, {
    key: "render",
    value: function render() {
      var currentExplanation = this.state.explanationCardDeck[this.state.displayCardIndex];

      if (this.state.displayCardIndex == this.state.explanationCardDeck.length) {
        // no more cards to display
        return __jsx(_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "No more cards to display."), __jsx("div", {
          onClick: this.handleReplay,
          className: "button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, "Replay"));
      } else {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, __jsx(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_13___default.a, {
          left: true,
          opposite: true,
          when: this.state.showExplanationToggle[this.state.displayCardIndex],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, __jsx(_ExplanationCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: currentExplanation.explanationID,
          explanation: currentExplanation,
          loggedInUser: this.props.loggedInUser,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        })), __jsx("div", {
          onClick: this.handleSwipe,
          className: "button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "Next Card"));
      }
    }
  }]);

  return SwipableCardContainer;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SwipableCardContainer);

/***/ }),

/***/ "./node_modules/immutability-helper/index.js":
/*!***************************************************!*\
  !*** ./node_modules/immutability-helper/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;
var toString = Object.prototype.toString;
function type(obj) {
    return toString.call(obj).slice(8, -1);
}
var assign = Object.assign || /* istanbul ignore next */ (function (target, source) {
    getAllKeys(source).forEach(function (key) {
        if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    });
    return target;
});
var getAllKeys = typeof Object.getOwnPropertySymbols === 'function'
    ? function (obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)); }
    /* istanbul ignore next */
    : function (obj) { return Object.keys(obj); };
function copy(object) {
    return Array.isArray(object)
        ? assign(object.constructor(object.length), object)
        : (type(object) === 'Map')
            ? new Map(object)
            : (type(object) === 'Set')
                ? new Set(object)
                : (object && typeof object === 'object')
                    ? assign(Object.create(Object.getPrototypeOf(object)), object)
                    /* istanbul ignore next */
                    : object;
}
var Context = /** @class */ (function () {
    function Context() {
        this.commands = assign({}, defaultCommands);
        this.update = this.update.bind(this);
        // Deprecated: update.extend, update.isEquals and update.newContext
        this.update.extend = this.extend = this.extend.bind(this);
        this.update.isEquals = function (x, y) { return x === y; };
        this.update.newContext = function () { return new Context().update; };
    }
    Object.defineProperty(Context.prototype, "isEquals", {
        get: function () {
            return this.update.isEquals;
        },
        set: function (value) {
            this.update.isEquals = value;
        },
        enumerable: true,
        configurable: true
    });
    Context.prototype.extend = function (directive, fn) {
        this.commands[directive] = fn;
    };
    Context.prototype.update = function (object, $spec) {
        var _this = this;
        var spec = (typeof $spec === 'function') ? { $apply: $spec } : $spec;
        if (!(Array.isArray(object) && Array.isArray(spec))) {
            invariant(!Array.isArray(spec), 'update(): You provided an invalid spec to update(). The spec may ' +
                'not contain an array except as the value of $set, $push, $unshift, ' +
                '$splice or any custom command allowing an array value.');
        }
        invariant(typeof spec === 'object' && spec !== null, 'update(): You provided an invalid spec to update(). The spec and ' +
            'every included key path must be plain objects containing one of the ' +
            'following commands: %s.', Object.keys(this.commands).join(', '));
        var nextObject = object;
        getAllKeys(spec).forEach(function (key) {
            if (hasOwnProperty.call(_this.commands, key)) {
                var objectWasNextObject = object === nextObject;
                nextObject = _this.commands[key](spec[key], nextObject, spec, object);
                if (objectWasNextObject && _this.isEquals(nextObject, object)) {
                    nextObject = object;
                }
            }
            else {
                var nextValueForKey = type(object) === 'Map'
                    ? _this.update(object.get(key), spec[key])
                    : _this.update(object[key], spec[key]);
                var nextObjectValue = type(nextObject) === 'Map'
                    ? nextObject.get(key)
                    : nextObject[key];
                if (!_this.isEquals(nextValueForKey, nextObjectValue)
                    || typeof nextValueForKey === 'undefined'
                        && !hasOwnProperty.call(object, key)) {
                    if (nextObject === object) {
                        nextObject = copy(object);
                    }
                    if (type(nextObject) === 'Map') {
                        nextObject.set(key, nextValueForKey);
                    }
                    else {
                        nextObject[key] = nextValueForKey;
                    }
                }
            }
        });
        return nextObject;
    };
    return Context;
}());
exports.Context = Context;
var defaultCommands = {
    $push: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$push');
        return value.length ? nextObject.concat(value) : nextObject;
    },
    $unshift: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$unshift');
        return value.length ? value.concat(nextObject) : nextObject;
    },
    $splice: function (value, nextObject, spec, originalObject) {
        invariantSplices(nextObject, spec);
        value.forEach(function (args) {
            invariantSplice(args);
            if (nextObject === originalObject && args.length) {
                nextObject = copy(originalObject);
            }
            splice.apply(nextObject, args);
        });
        return nextObject;
    },
    $set: function (value, _nextObject, spec) {
        invariantSet(spec);
        return value;
    },
    $toggle: function (targets, nextObject) {
        invariantSpecArray(targets, '$toggle');
        var nextObjectCopy = targets.length ? copy(nextObject) : nextObject;
        targets.forEach(function (target) {
            nextObjectCopy[target] = !nextObject[target];
        });
        return nextObjectCopy;
    },
    $unset: function (value, nextObject, _spec, originalObject) {
        invariantSpecArray(value, '$unset');
        value.forEach(function (key) {
            if (Object.hasOwnProperty.call(nextObject, key)) {
                if (nextObject === originalObject) {
                    nextObject = copy(originalObject);
                }
                delete nextObject[key];
            }
        });
        return nextObject;
    },
    $add: function (values, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$add');
        invariantSpecArray(values, '$add');
        if (type(nextObject) === 'Map') {
            values.forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (nextObject === originalObject && nextObject.get(key) !== value) {
                    nextObject = copy(originalObject);
                }
                nextObject.set(key, value);
            });
        }
        else {
            values.forEach(function (value) {
                if (nextObject === originalObject && !nextObject.has(value)) {
                    nextObject = copy(originalObject);
                }
                nextObject.add(value);
            });
        }
        return nextObject;
    },
    $remove: function (value, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$remove');
        invariantSpecArray(value, '$remove');
        value.forEach(function (key) {
            if (nextObject === originalObject && nextObject.has(key)) {
                nextObject = copy(originalObject);
            }
            nextObject.delete(key);
        });
        return nextObject;
    },
    $merge: function (value, nextObject, _spec, originalObject) {
        invariantMerge(nextObject, value);
        getAllKeys(value).forEach(function (key) {
            if (value[key] !== nextObject[key]) {
                if (nextObject === originalObject) {
                    nextObject = copy(originalObject);
                }
                nextObject[key] = value[key];
            }
        });
        return nextObject;
    },
    $apply: function (value, original) {
        invariantApply(value);
        return value(original);
    },
};
var defaultContext = new Context();
exports.isEquals = defaultContext.update.isEquals;
exports.extend = defaultContext.extend;
exports.default = defaultContext.update;
// @ts-ignore
exports.default.default = module.exports = assign(exports.default, exports);
// invariants
function invariantPushAndUnshift(value, spec, command) {
    invariant(Array.isArray(value), 'update(): expected target of %s to be an array; got %s.', command, value);
    invariantSpecArray(spec[command], command);
}
function invariantSpecArray(spec, command) {
    invariant(Array.isArray(spec), 'update(): expected spec of %s to be an array; got %s. ' +
        'Did you forget to wrap your parameter in an array?', command, spec);
}
function invariantSplices(value, spec) {
    invariant(Array.isArray(value), 'Expected $splice target to be an array; got %s', value);
    invariantSplice(spec.$splice);
}
function invariantSplice(value) {
    invariant(Array.isArray(value), 'update(): expected spec of $splice to be an array of arrays; got %s. ' +
        'Did you forget to wrap your parameters in an array?', value);
}
function invariantApply(fn) {
    invariant(typeof fn === 'function', 'update(): expected spec of $apply to be a function; got %s.', fn);
}
function invariantSet(spec) {
    invariant(Object.keys(spec).length === 1, 'Cannot have more than one key in an object with $set');
}
function invariantMerge(target, specValue) {
    invariant(specValue && typeof specValue === 'object', 'update(): $merge expects a spec of type \'object\'; got %s', specValue);
    invariant(target && typeof target === 'object', 'update(): $merge expects a target of type \'object\'; got %s', target);
}
function invariantMapOrSet(target, command) {
    var typeOfTarget = type(target);
    invariant(typeOfTarget === 'Map' || typeOfTarget === 'Set', 'update(): %s expects a target of type Set or Map; got %s', command, typeOfTarget);
}


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ })

})
//# sourceMappingURL=[id].js.8287fb528512f024d8da.hot-update.js.map