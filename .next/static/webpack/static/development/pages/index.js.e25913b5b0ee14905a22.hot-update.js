webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ExplanationCard.js":
/*!***************************************!*\
  !*** ./components/ExplanationCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardSection */ "./components/CardSection.js");
/* harmony import */ var _MultiAvatarUnit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MultiAvatarUnit */ "./components/MultiAvatarUnit.js");
/* harmony import */ var _AhaButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AhaButton */ "./components/AhaButton.js");
/* harmony import */ var _DontGetItButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DontGetItButton */ "./components/DontGetItButton.js");
/* harmony import */ var _ReactionButtonBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ReactionButtonBar */ "./components/ReactionButtonBar.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_utils_utils__WEBPACK_IMPORTED_MODULE_13__);





var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/ExplanationCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;










var ExplanationCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ExplanationCard, _React$Component);

  function ExplanationCard(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExplanationCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ExplanationCard).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ExplanationCard, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "explanation-card-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("img", {
        className: "avatar avatar-sml",
        src: this.props.explanation.authorAvatarUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), __jsx("p", {
        className: "font-color-light-grey inline-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("span", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        href: "/explainer/".concat(this.props.explanation.authorUserID),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, this.props.explanation.authorDisplayName)), " "), "explains", __jsx("span", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        href: "/concept/".concat(this.props.explanation.concept),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_13__["conceptToDisplayName"])(this.props.explanation.concept))), " "), "through", __jsx("span", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, " ", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_13__["explanationTypeToDisplayType"])(this.props.explanation.explanation.type)))), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, this.props.explanation.explanation.introText), this.props.explanation.explanation.type == "tweet" && __jsx(EmbeddedTweet, {
        tweet: this.props.explanation.explanation.mediaLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), this.props.explanation.explanation.type == "audio" && __jsx(EmbeddedAudio, {
        audio: this.props.explanation.explanation.mediaLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), this.props.explanation.explanation.type == "link" && __jsx(EmbeddedLink, {
        link: this.props.explanation.explanation.mediaLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.props.explanation.explanation.mediaLink), this.props.explanation.explanation.mediaConsumptionGuidance && __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, this.props.explanation.explanation.mediaConsumptionGuidance)), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx(_AhaButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), __jsx(_DontGetItButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), __jsx(_ReactionButtonBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }))));
    }
  }]);

  return ExplanationCard;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ExplanationCard);

/***/ })

})
//# sourceMappingURL=index.js.e25913b5b0ee14905a22.hot-update.js.map