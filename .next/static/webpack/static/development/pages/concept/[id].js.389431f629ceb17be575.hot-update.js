webpackHotUpdate("static/development/pages/concept/[id].js",{

/***/ "./components/AddExplanationCard.js":
/*!******************************************!*\
  !*** ./components/AddExplanationCard.js ***!
  \******************************************/
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
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CardSection */ "./components/CardSection.js");
/* harmony import */ var _uploadExplanationComponents_UploadImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./uploadExplanationComponents/UploadImage */ "./components/uploadExplanationComponents/UploadImage.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_utils_firebase__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/AddExplanationCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var AddExplanationCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddExplanationCard, _React$Component);

  function AddExplanationCard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddExplanationCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AddExplanationCard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFileChange", function (e) {
      _this.setState({
        fileToUpload: e.target.files[0]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleIntroTextChange", function (e) {
      _this.setState({
        introText: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function (e) {
      var router = _this.props.router;
      e.preventDefault();
      Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_11__["saveExplanationWithFileToDB"])(_this.state.introText, _this.state.fileToUpload, _this.state.type, _this.props.loggedInUser.userID, router.query.id);
    });

    _this.state = {
      type: '',
      // photo, video, audio, podcast, youtube, tweet, link, text
      fileToUpload: '',
      introText: '',
      mediaLink: '',
      mediaConsumptionGuidance: '',
      showAddExplanationSection: false,
      typeSelected: false,
      activeElement: "none" // write, podcast, youtube, recordVideo, recordAudio, tweet, uploadVideo, uploadPhoto, draw, link

    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AddExplanationCard, [{
    key: "render",
    value: function render() {
      var _this2 = this,
          _jsx;

      console.log(this.state.activeElement);
      var router = this.props.router;
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("div", {
        className: "columns-parent-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("div", {
        className: "column-80-p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("p", {
        className: "font-color-light-grey",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Add your own explanation and give someone an aha moment.")), __jsx("div", {
        className: "column-20-p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, !this.state.showAddExplanationSection && __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            showAddExplanationSection: true
          });
        },
        className: "action-button button background-purple rounded-border font-med font-bold-extra float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Contribute"), this.state.showAddExplanationSection && __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            showAddExplanationSection: false,
            typeSelected: false
          });
        },
        className: "font-med font-bold-extra float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "close_rounded"))))), this.state.showAddExplanationSection && __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("h2", {
        className: "font-med",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("span", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "@barackobama "), "explains", __jsx("span", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, " ", router.query.id, " "), "through", __jsx("span", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, " spoken word")), __jsx("div", {
        className: "media-type-selection-section margin-top-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("div", (_jsx = {
        onClick: function onClick() {
          _this2.setState({
            typeSelected: "text",
            activeElement: "write"
          });
        },
        className: "action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml"
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "className", this.state.activeElement == "write" ? "background-dark-grey" : "background-purple"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 67
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "__self", this), _jsx), "Write Something"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            typeSelected: "podcast",
            activeElement: "podcast"
          });
        },
        className: "action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Podcast Snippet"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            typeSelected: "youtube",
            activeElement: "youtube"
          });
        },
        className: "action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "YouTube Clip"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            typeSelected: "video",
            activeElement: "recordVideo"
          });
        },
        className: "action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Record Your Own Video"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            typeSelected: "audio",
            activeElement: "recordAudio"
          });
        },
        className: "action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Record Your Own Audio"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            typeSelected: "tweet",
            activeElement: "tweet"
          });
        },
        className: "action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Tweet"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            typeSelected: "video",
            activeElement: "uploadVideo"
          });
        },
        className: "action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Upload A Video"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            typeSelected: "photo",
            activeElement: "uploadPhoto"
          });
        },
        className: "action-button button background-purple rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Upload A Photo"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            typeSelected: "photo",
            activeElement: "draw"
          });
        },
        className: "action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Draw Something And Upload It"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            typeSelected: "link",
            activeElement: "link"
          });
        },
        className: "action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Link To Something On The Web"))), this.state.showAddExplanationSection && this.state.typeSelected && __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx(_uploadExplanationComponents_UploadImage__WEBPACK_IMPORTED_MODULE_10__["default"], {
        handleIntroTextChange: this.handleIntroTextChange,
        handleFileChange: this.handleFileChange,
        currentConcept: router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("div", {
        onClick: this.handleSubmit,
        className: "action-button button background-purple rounded-border font-med font-bold-med",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Submit!")))));
    }
  }]);

  return AddExplanationCard;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(AddExplanationCard)); // <form className="add-explanation-form">
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
//# sourceMappingURL=[id].js.389431f629ceb17be575.hot-update.js.map