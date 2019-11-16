webpackHotUpdate("static/development/pages/concept/[id].js",{

/***/ "./components/uploadExplanationComponents/UploadVideo.js":
/*!***************************************************************!*\
  !*** ./components/uploadExplanationComponents/UploadVideo.js ***!
  \***************************************************************/
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







var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/uploadExplanationComponents/UploadVideo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var UploadVideo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(UploadVideo, _React$Component);

  function UploadVideo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UploadVideo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UploadVideo).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "sendFileChangeToParent", function (e) {
      _this.props.handleFileChange(e);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "sendIntroTextChangeToParent", function (e) {
      _this.props.handleIntroTextChange(e);
    });

    _this.state = {
      fileToUpload: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UploadVideo, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("form", {
        className: "add-explanation-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("h2", {
        className: "font-med font-bold-med",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
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
          lineNumber: 23
        },
        __self: this
      }), __jsx("h2", {
        className: "font-med font-bold-med margin-top-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Upload Your Video"), this.props.mode == "record" && __jsx("p", {
        className: "font-color-light-grey font-med font-bold-med",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Record a video and then upload it here. In your video you can sing a song, do an interpretive dance, tell a joke or just explain it straight, Can\u2019t wait to see what you come up with."), __jsx("input", {
        onChange: this.sendFileChangeToParent,
        className: "margin-top-sml font-med",
        type: "file",
        name: "photo-upload",
        accept: "video/mp4,video/x-m4v,video/*",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })));
    }
  }]);

  return UploadVideo;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UploadVideo); // <form className="add-explanation-form">
//   <h2 className="font-med font-bold-med">Optional Intro Text</h2>
//   <textarea className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="text" placeholder={`Here is a fabulous way to understand ${router.query.id}s...`} rows="5"></textarea>
//   <h2 className="font-med font-bold-med margin-top-sml">Link to YouTube video</h2>
//   <input className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="url" placeholder="https:// ..." />
//   <h2 className="font-med font-bold-med margin-top-sml">What part should someone listen to?</h2>
//   <h2 className="font-color-light-grey font-med font-bold-med">(i.e. start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00)</h2>
//   <input className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="how-to-consume" placeholder="Start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00" />
// </form>

/***/ })

})
//# sourceMappingURL=[id].js.248f31f071526673a4b0.hot-update.js.map