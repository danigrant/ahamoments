module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AhaButton.js":
/*!*********************************!*\
  !*** ./components/AhaButton.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/AhaButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AhaButton = props => {
  return __jsx("div", {
    className: "button grow background-green rounded-border font-med font-bold-extra inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, "Aha!");
};

/* harmony default export */ __webpack_exports__["default"] = (AhaButton);

/***/ }),

/***/ "./components/AppContainer.js":
/*!************************************!*\
  !*** ./components/AppContainer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/AppContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AppContainer = props => {
  return __jsx("div", {
    className: "appcontainer-wrapper constrained-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (AppContainer);

/***/ }),

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Card = props => {
  return __jsx("div", {
    className: "card-wrapper light-border drop-shadow rounded-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/CardSection.js":
/*!***********************************!*\
  !*** ./components/CardSection.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/CardSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CardSection = props => {
  return __jsx("div", {
    className: "card-section-wrapper light-border-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (CardSection);

/***/ }),

/***/ "./components/DontGetItButton.js":
/*!***************************************!*\
  !*** ./components/DontGetItButton.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/DontGetItButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const DontGetItButton = props => {
  return __jsx("div", {
    className: "button grow background-blue rounded-border font-med font-bold-extra inline-block margin-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, "Don\u2019t Get It");
};

/* harmony default export */ __webpack_exports__["default"] = (DontGetItButton);

/***/ }),

/***/ "./components/ExplanationCard.js":
/*!***************************************!*\
  !*** ./components/ExplanationCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardSection */ "./components/CardSection.js");
/* harmony import */ var _MultiAvatarUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MultiAvatarUnit */ "./components/MultiAvatarUnit.js");
/* harmony import */ var _AhaButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AhaButton */ "./components/AhaButton.js");
/* harmony import */ var _DontGetItButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DontGetItButton */ "./components/DontGetItButton.js");
/* harmony import */ var _ReactionButtonBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReactionButtonBar */ "./components/ReactionButtonBar.js");
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/ExplanationCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class ExplanationCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "explanation-card-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("img", {
      className: "avatar avatar-sml",
      src: "/images/temp-avatar5.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx("p", {
      className: "font-color-light-grey inline-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("span", {
      className: "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "@iamjohnoliver "), "explains", __jsx("span", {
      className: "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, " Riemann Sums "), "through", __jsx("span", {
      className: "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, " spoken word"))), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Williamsburg pop-up disrupt selvage street art knausgaard. Enamel pin bespoke bicycle rights, craft beer mustache chartreuse cronut cred actually. Jean shorts hexagon art party pop-up four loko scenester, retro four dollar toast meggings gluten-free.")), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(_AhaButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx(_DontGetItButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), __jsx(_ReactionButtonBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "float-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ExplanationCard);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox */ "./components/SearchBox.js");
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "header-wrapper light-border-bottom drop-shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      className: "constrained-width",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("img", {
      className: "logo logo-sml",
      src: "/images/logo.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), __jsx(_SearchBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), __jsx("div", {
      className: "leaderboard-menu-link inline-block font-md",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("p", {
      className: "font-color-light-grey inline-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Leaderboard")), __jsx("div", {
      className: "float-right inline-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("img", {
      className: "avatar avatar-med",
      src: "/images/temp-avatar.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MultiAvatarUnit.js":
/*!***************************************!*\
  !*** ./components/MultiAvatarUnit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/MultiAvatarUnit.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const MultiAvatarUnit = props => {
  return __jsx("div", {
    className: "multi-avatar-unit-wrapper inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("img", {
    className: "avatar avatar-sml",
    src: "/images/temp-avatar2.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }), __jsx("img", {
    className: "avatar avatar-sml",
    src: "/images/temp-avatar3.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }), __jsx("img", {
    className: "avatar avatar-sml",
    src: "/images/temp-avatar4.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("img", {
    className: "avatar avatar-sml",
    src: "/images/temp-avatar5.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MultiAvatarUnit);

/***/ }),

/***/ "./components/ReactionButtonBar.js":
/*!*****************************************!*\
  !*** ./components/ReactionButtonBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/ReactionButtonBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ReactionButtonBar = props => {
  return __jsx("div", {
    className: "reaction-button-bar-wrapper rounded-border inline-block float-right light-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    className: "reaction-button inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("img", {
    className: "avatar-sml-size-no-positioning grow",
    src: "/images/reactions/get-it-cat.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  })), __jsx("div", {
    className: "reaction-button inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("img", {
    className: "avatar-sml-size-no-positioning grow",
    src: "/images/reactions/laughing.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })), __jsx("div", {
    className: "reaction-button inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("img", {
    className: "avatar-sml-size-no-positioning grow",
    src: "/images/reactions/shocked.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ReactionButtonBar);

/***/ }),

/***/ "./components/SearchBox.js":
/*!*********************************!*\
  !*** ./components/SearchBox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/SearchBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class SearchBox extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "searchbox-wrapper light-border rounded-border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("i", {
      className: "material-icons font-color-light-grey",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "search_rounded"), __jsx("input", {
      autocomplete: "off",
      name: "q",
      placeholder: "Find your next aha moment\u2026",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SearchBox);

/***/ }),

/***/ "./pages/concept/[id].js":
/*!*******************************!*\
  !*** ./pages/concept/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Card */ "./components/Card.js");
/* harmony import */ var _components_CardSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CardSection */ "./components/CardSection.js");
/* harmony import */ var _components_ExplanationCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ExplanationCard */ "./components/ExplanationCard.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/pages/concept/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class ConceptPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      router
    } = this.props;
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "concept-title-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("h1", {
      className: "font-lrg font-bold-med inline-block capitalize",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, router.query.id), __jsx("p", {
      className: "font-color-light-grey inline-block margin-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "originally asked by @bofirstdog")), __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(_components_CardSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "columns-parent-div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      className: "column-80-p",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("p", {
      className: "font-color-light-grey",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Add your own explanation and give someone an aha moment.")), __jsx("div", {
      className: "column-20-p",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("div", {
      className: "action-button button background-purple rounded-border font-med font-bold-extra float-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Contribute")))), __jsx(_components_CardSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("h2", {
      className: "font-med",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("span", {
      className: "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "@barackobama "), "explains", __jsx("span", {
      className: "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, " ", router.query.id, " "), "through", __jsx("span", {
      className: "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, " spoken word")), __jsx("div", {
      className: "media-type-selection-section margin-top-sml",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: "action-button button background-dark-grey rounded-border font-med font-bold-med",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Podcast Snippet")))), __jsx("h1", {
      className: "margin-top-lrg font-lrg font-bold-med inline-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "All of the wacky and wonderful ways to explain a ", router.query.id, " "), __jsx("p", {
      className: "font-color-light-grey",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "There are 114 explanations here. Some will work for you, some won\u2019t.  Keep going until you find one that gives you that aha! moment."), __jsx("div", {
      className: "margin-top-sml",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(_components_ExplanationCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), __jsx(_components_ExplanationCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), __jsx(_components_ExplanationCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(ConceptPage));

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/concept/[id].js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danigrant/Projects/ahamoments/pages/concept/[id].js */"./pages/concept/[id].js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map