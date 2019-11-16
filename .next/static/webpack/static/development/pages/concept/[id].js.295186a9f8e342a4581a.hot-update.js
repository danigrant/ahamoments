webpackHotUpdate("static/development/pages/concept/[id].js",{

/***/ "./components/uploadExplanationComponents/AddYouTube.js":
/*!**************************************************************!*\
  !*** ./components/uploadExplanationComponents/AddYouTube.js ***!
  \**************************************************************/
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
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../CardSection */ "./components/CardSection.js");







var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/uploadExplanationComponents/AddYouTube.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var AddYouTube =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddYouTube, _React$Component);

  function AddYouTube(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddYouTube);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AddYouTube).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "sendIntroTextChangeToParent", function (e) {
      _this.props.handleIntroTextChange(e);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "sendMediaLinkChangeToParent", function (e) {
      _this.props.handleMediaLinkChange(e);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "sendMediaGuidanceChangeToParent", function (e) {
      _this.props.handleMediaGuidanceChange(e);
    });

    _this.state = {
      fileToUpload: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AddYouTube, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("form", {
        className: "add-explanation-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("h2", {
        className: "font-med font-bold-med",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Optional Intro Text"), __jsx("textarea", {
        onChange: this.sendIntroTextChangeToParent,
        className: "margin-top-sml font-med background-grey rounded-border light-border",
        type: "text",
        name: "text",
        placeholder: "Here is a fabulous way to understand ".concat(this.props.currentConcept, "s..."),
        rows: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), __jsx("h2", {
        className: "font-med font-bold-med margin-top-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("a", {
        className: "link",
        href: "https://radiopublic.com/explore?search=1",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "RadioPublic"), " link to podcast"), __jsx("p", {
        className: "font-color-light-grey font-med font-bold-med",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Head over to ", __jsx("a", {
        className: "link",
        href: "https://radiopublic.com/explore?search=1",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "RadioPublic"), " and find the link to the podcast episode you're thinking of."), __jsx("input", {
        onChange: this.sendMediaLinkChangeToParent,
        className: "margin-top-sml font-med background-grey rounded-border light-border",
        type: "text",
        placeholder: "https://radiopublic.com/ ...",
        name: "podcast-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), __jsx("h2", {
        className: "font-med font-bold-med margin-top-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "What part should someone listen to?"), __jsx("p", {
        className: "font-color-light-grey font-med font-bold-med",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "(i.e. start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00)"), __jsx("textarea", {
        onChange: this.sendMediaGuidanceChangeToParent,
        className: "margin-top-sml font-med background-grey rounded-border light-border",
        type: "text",
        name: "text",
        placeholder: "start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00",
        rows: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })));
    }
  }]);

  return AddYouTube;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AddYouTube);

/***/ })

})
//# sourceMappingURL=[id].js.295186a9f8e342a4581a.hot-update.js.map