webpackHotUpdate("static/development/pages/concept/[id].js",{

/***/ "./components/AddExplanationCard.js":
/*!******************************************!*\
  !*** ./components/AddExplanationCard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CardSection */ "./components/CardSection.js");
/* harmony import */ var _uploadExplanationComponents_UploadImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./uploadExplanationComponents/UploadImage */ "./components/uploadExplanationComponents/UploadImage.js");
/* harmony import */ var _uploadExplanationComponents_UploadVideo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./uploadExplanationComponents/UploadVideo */ "./components/uploadExplanationComponents/UploadVideo.js");
/* harmony import */ var _uploadExplanationComponents_UploadAudio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./uploadExplanationComponents/UploadAudio */ "./components/uploadExplanationComponents/UploadAudio.js");
/* harmony import */ var _uploadExplanationComponents_AddTweet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./uploadExplanationComponents/AddTweet */ "./components/uploadExplanationComponents/AddTweet.js");
/* harmony import */ var _uploadExplanationComponents_AddPodcast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./uploadExplanationComponents/AddPodcast */ "./components/uploadExplanationComponents/AddPodcast.js");
/* harmony import */ var _uploadExplanationComponents_AddLink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./uploadExplanationComponents/AddLink */ "./components/uploadExplanationComponents/AddLink.js");
/* harmony import */ var _uploadExplanationComponents_AddYouTube__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./uploadExplanationComponents/AddYouTube */ "./components/uploadExplanationComponents/AddYouTube.js");
/* harmony import */ var _uploadExplanationComponents_WriteText__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./uploadExplanationComponents/WriteText */ "./components/uploadExplanationComponents/WriteText.js");
/* harmony import */ var fireworks_lib_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! fireworks/lib/react */ "./node_modules/fireworks/lib/react.js");
/* harmony import */ var fireworks_lib_react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(fireworks_lib_react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_utils_firebase__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_21__);








var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/AddExplanationCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;















var AddExplanationCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AddExplanationCard, _React$Component);

  function AddExplanationCard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddExplanationCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AddExplanationCard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleFileChange", function (e) {
      _this.setState({
        fileToUpload: e.target.files[0]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleIntroTextChange", function (e) {
      _this.setState({
        introText: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleMediaLinkChange", function (e) {
      _this.setState({
        mediaLink: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleMediaGuidanceChange", function (e) {
      _this.setState({
        mediaConsumptionGuidance: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function (e) {
      var router = _this.props.router;
      e.preventDefault();

      if (_this.state.type == "photo" || _this.state.type == "video" || _this.state.type == "audio") {
        Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_20__["saveExplanationWithFileToDB"])(_this.state.introText, _this.state.fileToUpload, _this.state.type, _this.props.loggedInUser.userID, router.query.id);
      } else if (_this.state.type == "text") {
        Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_20__["saveWrittenExplanationToDB"])(_this.state.introText, _this.props.loggedInUser.userID, router.query.id);
      } else if (_this.state.type == "podcast" || _this.state.type == "youtube" || _this.state.type == "tweet" || _this.state.type == "link") {
        Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_20__["saveExternalLinkExplanationToDB"])(_this.state.introText, _this.state.mediaLink, _this.state.mediaConsumptionGuidance, _this.state.type, _this.props.loggedInUser.userID, router.query.id);
      } // reset the ui


      _this.setState({
        showAddExplanationSection: false,
        typeSelected: false,
        activeElement: "none",
        justSubmitted: true
      });

      var thisRef = Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this);

      setTimeout(function () {
        thisRef.setState({
          justSubmitted: false
        });
      }, 1000);
    });

    _this.state = {
      type: false,
      // photo, video, audio, podcast, youtube, tweet, link, text
      fileToUpload: '',
      introText: '',
      mediaLink: '',
      mediaConsumptionGuidance: '',
      showAddExplanationSection: false,
      activeElement: "none",
      // write, podcast, youtube, recordVideo, recordAudio, tweet, uploadVideo, uploadPhoto, draw, link
      justSubmitted: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AddExplanationCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var fxProps = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        colors: ['#e91e63', '#ff9800', '#ff5722']
      };
      var router = this.props.router;
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, this.state.justSubmitted && __jsx(fireworks_lib_react__WEBPACK_IMPORTED_MODULE_19__["Fireworks"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fxProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })), __jsx(_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("div", {
        className: "columns-parent-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("div", {
        className: "column-80-p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("p", {
        className: "font-color-light-grey",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Add your own explanation and give someone an aha moment.")), __jsx("div", {
        className: "column-20-p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
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
          lineNumber: 89
        },
        __self: this
      }, "Contribute"), this.state.showAddExplanationSection && __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            showAddExplanationSection: false,
            typeSelected: false,
            activeElement: "none"
          });
        },
        className: "font-med font-bold-extra float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "close_rounded"))))), this.state.showAddExplanationSection && __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("h2", {
        className: "font-med",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("span", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "@barackobama "), "explains", __jsx("span", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, " ", router.query.id, " "), "through", __jsx("span", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, " spoken word")), __jsx("div", {
        className: "media-type-selection-section margin-top-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            type: "text",
            activeElement: "write"
          });
        },
        className: this.state.activeElement == "write" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Write Something"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            type: "podcast",
            activeElement: "podcast"
          });
        },
        className: this.state.activeElement == "podcast" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Podcast Snippet"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            type: "youtube",
            activeElement: "youtube"
          });
        },
        className: this.state.activeElement == "youtube" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "YouTube Clip"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            type: "video",
            activeElement: "recordVideo"
          });
        },
        className: this.state.activeElement == "recordVideo" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Record Your Own Video"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            type: "audio",
            activeElement: "recordAudio"
          });
        },
        className: this.state.activeElement == "recordAudio" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Record Your Own Audio"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            type: "tweet",
            activeElement: "tweet"
          });
        },
        className: this.state.activeElement == "tweet" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Tweet"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            type: "video",
            activeElement: "uploadVideo"
          });
        },
        className: this.state.activeElement == "uploadVideo" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Upload A Video"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            type: "photo",
            activeElement: "uploadPhoto"
          });
        },
        className: this.state.activeElement == "uploadPhoto" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Upload A Photo"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            type: "photo",
            activeElement: "draw"
          });
        },
        className: this.state.activeElement == "draw" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Draw Something And Upload It"), __jsx("div", {
        onClick: function onClick() {
          _this2.setState({
            type: "link",
            activeElement: "link"
          });
        },
        className: this.state.activeElement == "link" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Link To Something On The Web"))), this.state.showAddExplanationSection && this.state.type && __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, this.state.type == "text" && __jsx(_uploadExplanationComponents_WriteText__WEBPACK_IMPORTED_MODULE_18__["default"], {
        handleTextChange: this.handleIntroTextChange,
        currentConcept: router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), this.state.type == "podcast" && __jsx(_uploadExplanationComponents_AddPodcast__WEBPACK_IMPORTED_MODULE_15__["default"], {
        handleIntroTextChange: this.handleIntroTextChange,
        handleMediaLinkChange: this.handleMediaLinkChange,
        handleMediaGuidanceChange: this.handleMediaGuidanceChange,
        currentConcept: router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), this.state.type == "youtube" && __jsx(_uploadExplanationComponents_AddYouTube__WEBPACK_IMPORTED_MODULE_17__["default"], {
        handleIntroTextChange: this.handleIntroTextChange,
        handleMediaLinkChange: this.handleMediaLinkChange,
        handleMediaGuidanceChange: this.handleMediaGuidanceChange,
        currentConcept: router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), this.state.type == "video" && __jsx(_uploadExplanationComponents_UploadVideo__WEBPACK_IMPORTED_MODULE_12__["default"], {
        mode: this.state.activeElement == "recordVideo" ? "record" : "upload",
        handleIntroTextChange: this.handleIntroTextChange,
        handleFileChange: this.handleFileChange,
        currentConcept: router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), this.state.type == "audio" && __jsx(_uploadExplanationComponents_UploadAudio__WEBPACK_IMPORTED_MODULE_13__["default"], {
        handleIntroTextChange: this.handleIntroTextChange,
        handleFileChange: this.handleFileChange,
        currentConcept: router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), this.state.type == "tweet" && __jsx(_uploadExplanationComponents_AddTweet__WEBPACK_IMPORTED_MODULE_14__["default"], {
        handleIntroTextChange: this.handleIntroTextChange,
        handleMediaLinkChange: this.handleMediaLinkChange,
        currentConcept: router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }), this.state.type == "photo" && __jsx(_uploadExplanationComponents_UploadImage__WEBPACK_IMPORTED_MODULE_11__["default"], {
        mode: this.state.activeElement == "uploadPhoto" ? "upload" : "draw",
        handleIntroTextChange: this.handleIntroTextChange,
        handleFileChange: this.handleFileChange,
        currentConcept: router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), this.state.type == "link" && __jsx(_uploadExplanationComponents_AddLink__WEBPACK_IMPORTED_MODULE_16__["default"], {
        handleIntroTextChange: this.handleIntroTextChange,
        handleMediaLinkChange: this.handleMediaLinkChange,
        currentConcept: router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      })), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx("div", {
        onClick: this.handleSubmit,
        className: "action-button button background-purple rounded-border font-med font-bold-med",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Submit!")))));
    }
  }]);

  return AddExplanationCard;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_21__["withRouter"])(AddExplanationCard)); // <form className="add-explanation-form">
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
//# sourceMappingURL=[id].js.f418eff95fa297ea8945.hot-update.js.map