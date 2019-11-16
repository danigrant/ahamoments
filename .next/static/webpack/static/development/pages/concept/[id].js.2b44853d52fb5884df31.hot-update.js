webpackHotUpdate("static/development/pages/concept/[id].js",{

/***/ "./components/AddExplanationCard.js":
/*!******************************************!*\
  !*** ./components/AddExplanationCard.js ***!
  \******************************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CardSection */ "./components/CardSection.js");
/* harmony import */ var _uploadExplanationComponents_UploadImage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./uploadExplanationComponents/UploadImage */ "./components/uploadExplanationComponents/UploadImage.js");
/* harmony import */ var _uploadExplanationComponents_UploadVideo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./uploadExplanationComponents/UploadVideo */ "./components/uploadExplanationComponents/UploadVideo.js");
/* harmony import */ var _uploadExplanationComponents_UploadAudio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./uploadExplanationComponents/UploadAudio */ "./components/uploadExplanationComponents/UploadAudio.js");
/* harmony import */ var _uploadExplanationComponents_AddTweet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./uploadExplanationComponents/AddTweet */ "./components/uploadExplanationComponents/AddTweet.js");
/* harmony import */ var _uploadExplanationComponents_AddPodcast__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./uploadExplanationComponents/AddPodcast */ "./components/uploadExplanationComponents/AddPodcast.js");
/* harmony import */ var _uploadExplanationComponents_AddLink__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./uploadExplanationComponents/AddLink */ "./components/uploadExplanationComponents/AddLink.js");
/* harmony import */ var _uploadExplanationComponents_AddYouTube__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./uploadExplanationComponents/AddYouTube */ "./components/uploadExplanationComponents/AddYouTube.js");
/* harmony import */ var _uploadExplanationComponents_WriteText__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./uploadExplanationComponents/WriteText */ "./components/uploadExplanationComponents/WriteText.js");
/* harmony import */ var fireworks_lib_react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! fireworks/lib/react */ "./node_modules/fireworks/lib/react.js");
/* harmony import */ var fireworks_lib_react__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(fireworks_lib_react__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_utils_firebase__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_27__);














var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/AddExplanationCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }
















var AddExplanationCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__["default"])(AddExplanationCard, _React$Component);

  function AddExplanationCard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, AddExplanationCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(AddExplanationCard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "handleFileChange", function (e) {
      _this.setState({
        fileToUpload: e.target.files[0]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "handleIntroTextChange", function (e) {
      _this.setState({
        introText: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "handleMediaLinkChange", function (e) {
      _this.setState({
        mediaLink: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "handleMediaGuidanceChange", function (e) {
      _this.setState({
        mediaConsumptionGuidance: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__["default"])(_this), "handleSubmit", function (e) {
      var router = _this.props.router;
      e.preventDefault();

      if (_this.state.type == "photo" || _this.state.type == "video" || _this.state.type == "audio") {
        Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_26__["saveExplanationWithFileToDB"])(_this.state.introText, _this.state.fileToUpload, _this.state.activeElement, _this.props.loggedInUser.userID, router.query.id);
      } else if (_this.state.type == "text") {
        Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_26__["saveWrittenExplanationToDB"])(_this.state.introText, _this.props.loggedInUser.userID, router.query.id);
      } else if (_this.state.type == "podcast" || _this.state.type == "youtube" || _this.state.type == "tweet" || _this.state.type == "link") {
        Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_26__["saveExternalLinkExplanationToDB"])(_this.state.introText, _this.state.mediaLink, _this.state.mediaConsumptionGuidance, _this.state.activeElement, _this.props.loggedInUser.userID, router.query.id);
      } // reset the ui


      _this.setState({
        showAddExplanationSection: false,
        typeSelected: false,
        activeElement: "none",
        justSubmitted: true
      });
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(AddExplanationCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var fxProps = {
        count: 3,
        interval: 180000000000,
        colors: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#ff5722', '#ffc107', '#ffeb3b'],
        calc: function calc(props, i) {
          return _objectSpread({}, props, {
            x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
            y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
          });
        }
      };
      var router = this.props.router;
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, this.state.justSubmitted && __jsx(fireworks_lib_react__WEBPACK_IMPORTED_MODULE_25__["Fireworks"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, fxProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), __jsx(_Card__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("div", {
        className: "columns-parent-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("div", {
        className: "column-80-p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("p", {
        className: "font-color-light-grey",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Add your own explanation and give someone an aha moment.")), __jsx("div", {
        className: "column-20-p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
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
          lineNumber: 88
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
          lineNumber: 92
        },
        __self: this
      }, __jsx("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "close_rounded"))))), this.state.showAddExplanationSection && __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("h2", {
        className: "font-med",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("span", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "@barackobama "), "explains", __jsx("span", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, " ", router.query.id, " "), "through", __jsx("span", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, " spoken word")), __jsx("div", {
        className: "media-type-selection-section margin-top-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
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
          lineNumber: 108
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
          lineNumber: 109
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
          lineNumber: 110
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
          lineNumber: 111
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
          lineNumber: 112
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
          lineNumber: 113
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
          lineNumber: 114
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
          lineNumber: 115
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
          lineNumber: 116
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
          lineNumber: 117
        },
        __self: this
      }, "Link To Something On The Web"))), this.state.showAddExplanationSection && this.state.type && __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, this.state.type == "text" && __jsx(_uploadExplanationComponents_WriteText__WEBPACK_IMPORTED_MODULE_24__["default"], {
        handleTextChange: this.handleIntroTextChange,
        currentConcept: router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), this.state.type == "podcast" && __jsx(_uploadExplanationComponents_AddPodcast__WEBPACK_IMPORTED_MODULE_21__["default"], {
        handleIntroTextChange: this.handleIntroTextChange,
        handleMediaLinkChange: this.handleMediaLinkChange,
        handleMediaGuidanceChange: this.handleMediaGuidanceChange,
        currentConcept: router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), this.state.type == "youtube" && __jsx(_uploadExplanationComponents_AddYouTube__WEBPACK_IMPORTED_MODULE_23__["default"], {
        handleIntroTextChange: this.handleIntroTextChange,
        handleMediaLinkChange: this.handleMediaLinkChange,
        handleMediaGuidanceChange: this.handleMediaGuidanceChange,
        currentConcept: router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), this.state.type == "video" && __jsx(_uploadExplanationComponents_UploadVideo__WEBPACK_IMPORTED_MODULE_18__["default"], {
        mode: this.state.activeElement == "recordVideo" ? "record" : "upload",
        handleIntroTextChange: this.handleIntroTextChange,
        handleFileChange: this.handleFileChange,
        currentConcept: router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), this.state.type == "audio" && __jsx(_uploadExplanationComponents_UploadAudio__WEBPACK_IMPORTED_MODULE_19__["default"], {
        handleIntroTextChange: this.handleIntroTextChange,
        handleFileChange: this.handleFileChange,
        currentConcept: router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), this.state.type == "tweet" && __jsx(_uploadExplanationComponents_AddTweet__WEBPACK_IMPORTED_MODULE_20__["default"], {
        handleIntroTextChange: this.handleIntroTextChange,
        handleMediaLinkChange: this.handleMediaLinkChange,
        currentConcept: router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), this.state.type == "photo" && __jsx(_uploadExplanationComponents_UploadImage__WEBPACK_IMPORTED_MODULE_17__["default"], {
        mode: this.state.activeElement == "uploadPhoto" ? "upload" : "draw",
        handleIntroTextChange: this.handleIntroTextChange,
        handleFileChange: this.handleFileChange,
        currentConcept: router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), this.state.type == "link" && __jsx(_uploadExplanationComponents_AddLink__WEBPACK_IMPORTED_MODULE_22__["default"], {
        handleIntroTextChange: this.handleIntroTextChange,
        handleMediaLinkChange: this.handleMediaLinkChange,
        currentConcept: router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      })), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, __jsx("div", {
        onClick: this.handleSubmit,
        className: "action-button button background-purple rounded-border font-med font-bold-med",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Submit!")))));
    }
  }]);

  return AddExplanationCard;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_27__["withRouter"])(AddExplanationCard)); // <form className="add-explanation-form">
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
//# sourceMappingURL=[id].js.2b44853d52fb5884df31.hot-update.js.map