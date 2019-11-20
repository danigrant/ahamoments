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

/***/ "./components/AddExplanationCard.js":
/*!******************************************!*\
  !*** ./components/AddExplanationCard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardSection */ "./components/CardSection.js");
/* harmony import */ var _uploadExplanationComponents_UploadImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uploadExplanationComponents/UploadImage */ "./components/uploadExplanationComponents/UploadImage.js");
/* harmony import */ var _uploadExplanationComponents_UploadVideo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uploadExplanationComponents/UploadVideo */ "./components/uploadExplanationComponents/UploadVideo.js");
/* harmony import */ var _uploadExplanationComponents_UploadAudio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uploadExplanationComponents/UploadAudio */ "./components/uploadExplanationComponents/UploadAudio.js");
/* harmony import */ var _uploadExplanationComponents_AddTweet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./uploadExplanationComponents/AddTweet */ "./components/uploadExplanationComponents/AddTweet.js");
/* harmony import */ var _uploadExplanationComponents_AddPodcast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./uploadExplanationComponents/AddPodcast */ "./components/uploadExplanationComponents/AddPodcast.js");
/* harmony import */ var _uploadExplanationComponents_AddLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./uploadExplanationComponents/AddLink */ "./components/uploadExplanationComponents/AddLink.js");
/* harmony import */ var _uploadExplanationComponents_AddYouTube__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./uploadExplanationComponents/AddYouTube */ "./components/uploadExplanationComponents/AddYouTube.js");
/* harmony import */ var _uploadExplanationComponents_WriteText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./uploadExplanationComponents/WriteText */ "./components/uploadExplanationComponents/WriteText.js");
/* harmony import */ var fireworks_lib_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! fireworks/lib/react */ "fireworks/lib/react");
/* harmony import */ var fireworks_lib_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(fireworks_lib_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_utils_firebase__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);


var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/AddExplanationCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;















class AddExplanationCard extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleFileChange", e => {
      this.setState({
        fileToUpload: e.target.files[0]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleIntroTextChange", e => {
      this.setState({
        introText: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleMediaLinkChange", e => {
      this.setState({
        mediaLink: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleMediaGuidanceChange", e => {
      this.setState({
        mediaConsumptionGuidance: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleSubmit", e => {
      const {
        router
      } = this.props;
      e.preventDefault();

      if (this.state.type == "photo" || this.state.type == "video" || this.state.type == "audio") {
        Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_14__["saveExplanationWithFileToDB"])(this.state.introText, this.state.fileToUpload, this.state.type, this.props.loggedInUser.userID, router.query.id);
      } else if (this.state.type == "text") {
        Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_14__["saveWrittenExplanationToDB"])(this.state.introText, this.props.loggedInUser.userID, router.query.id);
      } else if (this.state.type == "podcast" || this.state.type == "youtube" || this.state.type == "tweet" || this.state.type == "link") {
        Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_14__["saveExternalLinkExplanationToDB"])(this.state.introText, this.state.mediaLink, this.state.mediaConsumptionGuidance, this.state.type, this.props.loggedInUser.userID, router.query.id);
      } // reset the ui


      this.setState({
        showAddExplanationSection: false,
        typeSelected: false,
        activeElement: "none",
        justSubmitted: true
      });
      let thisRef = this;
      setTimeout(function () {
        thisRef.setState({
          justSubmitted: false
        });
      }, 1000);
    });

    this.state = {
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
  }

  render() {
    let fxProps = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      colors: ['#e91e63', '#ff9800', '#ff5722']
    };
    const {
      router
    } = this.props;
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, this.state.justSubmitted && __jsx(fireworks_lib_react__WEBPACK_IMPORTED_MODULE_13__["Fireworks"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fxProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    })), __jsx(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      onClick: () => {
        this.setState({
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
      onClick: () => {
        this.setState({
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
    }, "close_rounded"))))), this.state.showAddExplanationSection && __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      onClick: () => {
        this.setState({
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
      onClick: () => {
        this.setState({
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
      onClick: () => {
        this.setState({
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
      onClick: () => {
        this.setState({
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
      onClick: () => {
        this.setState({
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
      onClick: () => {
        this.setState({
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
      onClick: () => {
        this.setState({
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
      onClick: () => {
        this.setState({
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
      onClick: () => {
        this.setState({
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
      onClick: () => {
        this.setState({
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
    }, __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, this.state.type == "text" && __jsx(_uploadExplanationComponents_WriteText__WEBPACK_IMPORTED_MODULE_12__["default"], {
      handleTextChange: this.handleIntroTextChange,
      currentConcept: router.query.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }), this.state.type == "podcast" && __jsx(_uploadExplanationComponents_AddPodcast__WEBPACK_IMPORTED_MODULE_9__["default"], {
      handleIntroTextChange: this.handleIntroTextChange,
      handleMediaLinkChange: this.handleMediaLinkChange,
      handleMediaGuidanceChange: this.handleMediaGuidanceChange,
      currentConcept: router.query.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }), this.state.type == "youtube" && __jsx(_uploadExplanationComponents_AddYouTube__WEBPACK_IMPORTED_MODULE_11__["default"], {
      handleIntroTextChange: this.handleIntroTextChange,
      handleMediaLinkChange: this.handleMediaLinkChange,
      handleMediaGuidanceChange: this.handleMediaGuidanceChange,
      currentConcept: router.query.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }), this.state.type == "video" && __jsx(_uploadExplanationComponents_UploadVideo__WEBPACK_IMPORTED_MODULE_6__["default"], {
      mode: this.state.activeElement == "recordVideo" ? "record" : "upload",
      handleIntroTextChange: this.handleIntroTextChange,
      handleFileChange: this.handleFileChange,
      currentConcept: router.query.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }), this.state.type == "audio" && __jsx(_uploadExplanationComponents_UploadAudio__WEBPACK_IMPORTED_MODULE_7__["default"], {
      handleIntroTextChange: this.handleIntroTextChange,
      handleFileChange: this.handleFileChange,
      currentConcept: router.query.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }), this.state.type == "tweet" && __jsx(_uploadExplanationComponents_AddTweet__WEBPACK_IMPORTED_MODULE_8__["default"], {
      handleIntroTextChange: this.handleIntroTextChange,
      handleMediaLinkChange: this.handleMediaLinkChange,
      currentConcept: router.query.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }), this.state.type == "photo" && __jsx(_uploadExplanationComponents_UploadImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      mode: this.state.activeElement == "uploadPhoto" ? "upload" : "draw",
      handleIntroTextChange: this.handleIntroTextChange,
      handleFileChange: this.handleFileChange,
      currentConcept: router.query.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }), this.state.type == "link" && __jsx(_uploadExplanationComponents_AddLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
      handleIntroTextChange: this.handleIntroTextChange,
      handleMediaLinkChange: this.handleMediaLinkChange,
      currentConcept: router.query.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    })), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
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

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_15__["withRouter"])(AddExplanationCard)); // <form className="add-explanation-form">
//   <h2 className="font-med font-bold-med">Optional Intro Text</h2>
//   <textarea className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="text" placeholder={`Here is a fabulous way to understand ${router.query.id}s...`} rows="5"></textarea>
//   <h2 className="font-med font-bold-med margin-top-sml">Link to YouTube video</h2>
//   <input className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="url" placeholder="https:// ..." />
//   <h2 className="font-med font-bold-med margin-top-sml">What part should someone listen to?</h2>
//   <h2 className="font-color-light-grey font-med font-bold-med">(i.e. start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00)</h2>
//   <input className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="how-to-consume" placeholder="Start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00" />
// </form>

/***/ }),

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
    onClick: props.handleAha,
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
    onClick: props.handleDontGetIt,
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _explanationMediaComponents_EmbeddedPhoto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./explanationMediaComponents/EmbeddedPhoto */ "./components/explanationMediaComponents/EmbeddedPhoto.js");
/* harmony import */ var _explanationMediaComponents_EmbeddedAudio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./explanationMediaComponents/EmbeddedAudio */ "./components/explanationMediaComponents/EmbeddedAudio.js");
/* harmony import */ var _explanationMediaComponents_EmbeddedVideo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./explanationMediaComponents/EmbeddedVideo */ "./components/explanationMediaComponents/EmbeddedVideo.js");
/* harmony import */ var _explanationMediaComponents_EmbeddedTweet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./explanationMediaComponents/EmbeddedTweet */ "./components/explanationMediaComponents/EmbeddedTweet.js");
/* harmony import */ var _explanationMediaComponents_EmbeddedYouTube__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./explanationMediaComponents/EmbeddedYouTube */ "./components/explanationMediaComponents/EmbeddedYouTube.js");
/* harmony import */ var _explanationMediaComponents_EmbeddedPodcast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./explanationMediaComponents/EmbeddedPodcast */ "./components/explanationMediaComponents/EmbeddedPodcast.js");
/* harmony import */ var _explanationMediaComponents_EmbeddedLink__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./explanationMediaComponents/EmbeddedLink */ "./components/explanationMediaComponents/EmbeddedLink.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_utils_utils__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_utils_firebase__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/ExplanationCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


















class ExplanationCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleAha = this.handleAha.bind(this);
    this.handleDontGetIt = this.handleDontGetIt.bind(this);
    this.handleReactionGotIt = this.handleReactionGotIt.bind(this);
    this.handleReactionLaughing = this.handleReactionLaughing.bind(this);
    this.handleReactionShocked = this.handleReactionShocked.bind(this);
  }

  async handleAha() {
    await Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_16__["addAhaToDB"])(this.props.explanation.explanationID, this.props.loggedInUser.userID, this.props.explanation.authorUserID);
    this.props.handleGoToNextCard();
    setTimeout(function () {
      this.setState({
        confetti: false
      });
    }, 2000);
  }

  async handleDontGetIt() {
    await Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_16__["addDontGetItToDB"])(this.props.explanation.explanationID, this.props.loggedInUser.userID, this.props.explanation.authorUserID);
    this.props.handleGoToNextCard();
  }

  async handleReactionGotIt() {
    await Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_16__["addReactionGotItToDB"])(this.props.explanation.explanationID, this.props.loggedInUser.userID, this.props.explanation.authorUserID);
  }

  async handleReactionLaughing() {
    await Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_16__["addReactionLaughingToDB"])(this.props.explanation.explanationID, this.props.loggedInUser.userID, this.props.explanation.authorUserID);
  }

  async handleReactionShocked() {
    await Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_16__["addReactionShockedToDB"])(this.props.explanation.explanationID, this.props.loggedInUser.userID, this.props.explanation.authorUserID);
  }

  render() {
    let confettiConfig = {
      angle: 90,
      spread: 45,
      startVelocity: 45,
      elementCount: 50,
      dragFriction: 0.1,
      duration: 3000,
      stagger: 0,
      width: "10px",
      height: "10px",
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };
    return __jsx("div", {
      className: "explanation-card-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("img", {
      className: "avatar avatar-sml",
      src: this.props.explanation.authorAvatarUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), __jsx("p", {
      className: "font-color-light-grey inline-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("span", {
      className: "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: `/explainer/${this.props.explanation.authorUserID}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, this.props.explanation.authorDisplayName)), " "), "explains", __jsx("span", {
      className: "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: `/concept/${this.props.explanation.concept}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_15__["conceptToDisplayName"])(this.props.explanation.concept))), " "), "through", __jsx("span", {
      className: "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, " ", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_15__["explanationTypeToDisplayType"])(this.props.explanation.explanation.type)))), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("p", {
      className: "margin-bottom-sml",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, this.props.explanation.explanation.introText), this.props.explanation.explanation.mediaConsumptionGuidance && __jsx("p", {
      className: "margin-bottom-sml",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, this.props.explanation.explanation.mediaConsumptionGuidance), this.props.explanation.explanation.type == "tweet" && __jsx(_explanationMediaComponents_EmbeddedTweet__WEBPACK_IMPORTED_MODULE_11__["default"], {
      tweet: this.props.explanation.explanation.mediaLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }), this.props.explanation.explanation.type == "audio" && __jsx(_explanationMediaComponents_EmbeddedAudio__WEBPACK_IMPORTED_MODULE_9__["default"], {
      audio: this.props.explanation.explanation.mediaLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), this.props.explanation.explanation.type == "link" && __jsx(_explanationMediaComponents_EmbeddedLink__WEBPACK_IMPORTED_MODULE_14__["default"], {
      link: this.props.explanation.explanation.mediaLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), this.props.explanation.explanation.type == "photo" && __jsx(_explanationMediaComponents_EmbeddedPhoto__WEBPACK_IMPORTED_MODULE_8__["default"], {
      photo: this.props.explanation.explanation.mediaLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), this.props.explanation.explanation.type == "podcast" && __jsx(_explanationMediaComponents_EmbeddedPodcast__WEBPACK_IMPORTED_MODULE_13__["default"], {
      podcast: this.props.explanation.explanation.mediaLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }), this.props.explanation.explanation.type == "video" && __jsx(_explanationMediaComponents_EmbeddedVideo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      video: this.props.explanation.explanation.mediaLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), this.props.explanation.explanation.type == "youtube" && __jsx(_explanationMediaComponents_EmbeddedYouTube__WEBPACK_IMPORTED_MODULE_12__["default"], {
      youtube: this.props.explanation.explanation.mediaLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    })), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx(_AhaButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      handleAha: this.handleAha,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }), __jsx(_DontGetItButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      handleDontGetIt: this.handleDontGetIt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }), __jsx(_ReactionButtonBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "float-right",
      handleReactionGotIt: this.handleReactionGotIt,
      handleReactionLaughing: this.handleReactionLaughing,
      handleReactionShocked: this.handleReactionShocked,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
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
/* harmony import */ var _LogInButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LogInButton */ "./components/LogInButton.js");
/* harmony import */ var _LogInModalOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LogInModalOverlay */ "./components/LogInModalOverlay.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_firebase__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "header-wrapper light-border-bottom drop-shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: "constrained-width",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("img", {
      className: "logo logo-sml link-no-color-change",
      src: "/images/logo.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })), __jsx(_SearchBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("div", {
      className: "leaderboard-menu-link inline-block font-md",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/leaderboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("p", {
      className: "font-color-light-grey link-no-color-change inline-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Leaderboard"))), __jsx("div", {
      className: "float-right inline-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, !this.props.loggedIn && __jsx("div", {
      onClick: _utils_firebase__WEBPACK_IMPORTED_MODULE_5__["logUserIn"],
      className: "menu-bar-login-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(_LogInButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), this.props.loggedIn && __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: `/explainer/${this.props.loggedInUser.userID}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("img", {
      className: "avatar avatar-med link-no-color-change",
      src: this.props.loggedInUser.avatarUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header); // {
//   !this.props.loggedIn &&
//   <LogInModalOverlay />
// }
// async handleLogUserIn() {
//   // first await logUserIn
//   // in parent function needs to be an auth changed watcher so we dont have to pass up anything
//   // actually if that is the case then i dont need this function
// }

/***/ }),

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _AppContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppContainer */ "./components/AppContainer.js");
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/Loading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Loading = props => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    loggedIn: props.loggedIn,
    loggedInUser: props.loggedInUser,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx(_AppContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    id: "loading-bar-spinner",
    className: "spinner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "spinner-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/LogInButton.js":
/*!***********************************!*\
  !*** ./components/LogInButton.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/LogInButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const LogInButton = props => {
  return __jsx("div", {
    className: "button grow background-blue rounded-border font-med font-bold-extra",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, "Log In");
};

/* harmony default export */ __webpack_exports__["default"] = (LogInButton);

/***/ }),

/***/ "./components/LogInModal.js":
/*!**********************************!*\
  !*** ./components/LogInModal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardSection */ "./components/CardSection.js");
/* harmony import */ var _LogInWithTwitterButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LogInWithTwitterButton */ "./components/LogInWithTwitterButton.js");
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/LogInModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class LogInModal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "login-modal-wrapper center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("i", {
      className: "material-icons float-right margin-right-sml",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "close_rounded"), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("img", {
      className: "logo-lrg",
      src: "/images/logo.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("h1", {
      className: "font-lrg font-bold-med",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Login to Aha Moments"), __jsx("p", {
      className: "font-color-light-grey margin-bottom-med",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Aha Moments is a place where people create wonderful explanations of complicated things to give others in the world Aha Moments."), __jsx(_LogInWithTwitterButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), __jsx("p", {
      className: "font-tny font-color-lighter-grey margin-top-med",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "We'll never post to any of your accounts without your permission."))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LogInModal);

/***/ }),

/***/ "./components/LogInModalOverlay.js":
/*!*****************************************!*\
  !*** ./components/LogInModalOverlay.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LogInModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogInModal */ "./components/LogInModal.js");
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/LogInModalOverlay.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class LogInModalOverlay extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      className: "login-modal-overlay-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx(_LogInModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LogInModalOverlay);

/***/ }),

/***/ "./components/LogInWithTwitterButton.js":
/*!**********************************************!*\
  !*** ./components/LogInWithTwitterButton.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/LogInWithTwitterButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const LogInWithTwitterButton = props => {
  return __jsx("div", {
    className: "button rounded-border all-caps font-sml font-bold-med twitter-color center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    className: "twitter-logo twitter-color margin-right-tny inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("svg", {
    width: "16",
    height: "13",
    viewBox: "0 0 16 13",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M15.999 1.537a6.57 6.57 0 0 1-1.885.517A3.296 3.296 0 0 0 15.557.238a6.576 6.576 0 0 1-2.084.796A3.282 3.282 0 0 0 7.88 4.027 9.32 9.32 0 0 1 1.112.599 3.28 3.28 0 0 0 2.13 4.98a3.27 3.27 0 0 1-1.487-.41v.042a3.284 3.284 0 0 0 2.633 3.217 3.29 3.29 0 0 1-1.483.056 3.286 3.286 0 0 0 3.067 2.28A6.587 6.587 0 0 1 0 11.523a9.29 9.29 0 0 0 5.032 1.475c6.038 0 9.34-5.001 9.34-9.338 0-.143-.004-.284-.01-.425a6.673 6.673 0 0 0 1.637-1.698H16z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }))), "Login with Twitter");
};

/* harmony default export */ __webpack_exports__["default"] = (LogInWithTwitterButton);

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
    onClick: props.handleReactionGotIt,
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
    onClick: props.handleReactionLaughing,
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
    onClick: props.handleReactionShocked,
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
      className: "rounded-border",
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
      className: "rounded-border",
      autoComplete: "off",
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

/***/ "./components/SwipableCard.js":
/*!************************************!*\
  !*** ./components/SwipableCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ExplanationCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExplanationCard */ "./components/ExplanationCard.js");

var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/SwipableCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class SwipableCard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleGoToNextCard", () => {
      this.props.advanceCard();
    });
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx(_ExplanationCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: this.props.explanationID,
      explanation: this.props.explanation,
      loggedInUser: this.props.loggedInUser,
      handleGoToNextCard: this.handleGoToNextCard,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SwipableCard);

/***/ }),

/***/ "./components/SwipableCardContainer.js":
/*!*********************************************!*\
  !*** ./components/SwipableCardContainer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SwipableCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwipableCard */ "./components/SwipableCard.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardSection */ "./components/CardSection.js");
/* harmony import */ var _ExplanationCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExplanationCard */ "./components/ExplanationCard.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! immutability-helper */ "immutability-helper");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/SwipableCardContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









class SwipableCardContainer extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "advanceCard", () => {
      this.setState({
        displayCardIndex: this.state.displayCardIndex + 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleReplay", () => {
      this.setState({
        displayCardIndex: 0
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleKeyPress", e => {
      // right 39, left 37, up 38, down 40
      if (e.keyCode == 39 || e.keyCode == 38) {
        this.setState({
          displayCardIndex: this.state.displayCardIndex + 1
        });
      } else if (e.keyCode == 37 || e.keyCode == 40) {
        this.setState({
          displayCardIndex: this.state.displayCardIndex - 1
        });
      }
    });

    this.state = {
      explanationCardDeck: this.props.conceptExplanationsArray,
      displayCardIndex: 0
    };
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyPress);
  }

  componentDidUnount() {
    window.removeEventListener("keyup", this.handleKeyPress);
  }

  render() {
    let currentExplanation = this.state.explanationCardDeck[this.state.displayCardIndex];

    if (this.state.displayCardIndex == this.state.explanationCardDeck.length) {
      // no more cards to display
      return __jsx(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("div", {
        onClick: this.handleReplay,
        className: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "replay_rounded"), "Replay")));
    } else {
      return __jsx("div", {
        onKeyDown: this.handleKeyPress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(_SwipableCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: currentExplanation.explanationID,
        explanation: currentExplanation,
        advanceCard: this.advanceCard,
        loggedInUser: this.props.loggedInUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SwipableCardContainer);

/***/ }),

/***/ "./components/explanationMediaComponents/EmbeddedAudio.js":
/*!****************************************************************!*\
  !*** ./components/explanationMediaComponents/EmbeddedAudio.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Loading */ "./components/Loading.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_firebase__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/explanationMediaComponents/EmbeddedAudio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class EmbeddedAudio extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaUrl: false
    };
  }

  async componentDidMount() {
    this.setState({
      mediaUrl: await Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_2__["getFileURLFromFirebaseStorage"])(this.props.audio)
    });
  }

  render() {
    if (!this.state.mediaUrl) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "loading...");
    } else {
      return __jsx("div", {
        className: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("audio", {
        className: "inline-explanation-audio",
        controls: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("source", {
        src: this.state.mediaUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), "Your browser does not support in-browser audio players."));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EmbeddedAudio);

/***/ }),

/***/ "./components/explanationMediaComponents/EmbeddedLink.js":
/*!***************************************************************!*\
  !*** ./components/explanationMediaComponents/EmbeddedLink.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/explanationMediaComponents/EmbeddedLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const EmbeddedLink = props => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("a", {
    className: "word-wrap action-button button background-light-blue rounded-border",
    href: props.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, props.link));
};

/* harmony default export */ __webpack_exports__["default"] = (EmbeddedLink);

/***/ }),

/***/ "./components/explanationMediaComponents/EmbeddedPhoto.js":
/*!****************************************************************!*\
  !*** ./components/explanationMediaComponents/EmbeddedPhoto.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Loading */ "./components/Loading.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_firebase__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/explanationMediaComponents/EmbeddedPhoto.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class EmbeddedPhoto extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaUrl: false
    };
  }

  async componentDidMount() {
    this.setState({
      mediaUrl: await Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_2__["getFileURLFromFirebaseStorage"])(this.props.photo)
    });
  }

  render() {
    if (!this.state.mediaUrl) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "loading...");
    } else {
      return __jsx("div", {
        className: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("img", {
        className: "inline-explanation-image",
        src: this.state.mediaUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EmbeddedPhoto);

/***/ }),

/***/ "./components/explanationMediaComponents/EmbeddedPodcast.js":
/*!******************************************************************!*\
  !*** ./components/explanationMediaComponents/EmbeddedPodcast.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Loading */ "./components/Loading.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/explanationMediaComponents/EmbeddedPodcast.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class EmbeddedPodcast extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {}

  render() {
    return __jsx("div", {
      className: "soundcloud-widget-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx(react_player__WEBPACK_IMPORTED_MODULE_2___default.a, {
      url: this.props.podcast,
      playing: false,
      controls: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EmbeddedPodcast);
/*

https://radiopublic.com/ThisAmerLife:dHJlbmRpbmctaW4tc2VhcmNo/s1!e4eae
https://embed.radiopublic.com/e?if=ThisAmerLife:dHJlbmRpbmctaW4tc2VhcmNo&ge=s1!e4eae7b857c0e17d9476e56dd2b156cadb393386


<iframe sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups" scrolling=no width="100%" height="185" frameborder="0" src="https://embed.radiopublic.com/e?if=ThisAmerLife:dHJlbmRpbmctaW4tc2VhcmNo&ge=s1!e4eae7b857c0e17d9476e56dd2b156cadb393386"></iframe>


*/

/***/ }),

/***/ "./components/explanationMediaComponents/EmbeddedTweet.js":
/*!****************************************************************!*\
  !*** ./components/explanationMediaComponents/EmbeddedTweet.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Loading */ "./components/Loading.js");
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-twitter-embed */ "react-twitter-embed");
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_twitter_embed__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/explanationMediaComponents/EmbeddedTweet.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class EmbeddedTweet extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetID: false
    };
  }

  async componentDidMount() {
    this.setState({
      tweetID: this.props.tweet.split('status/')[1].split('?')[0]
    });
  }

  render() {
    if (!this.state.tweetID) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "loading...");
    } else {
      return __jsx("div", {
        className: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_2__["TwitterTweetEmbed"], {
        tweetId: this.state.tweetID,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EmbeddedTweet);

/***/ }),

/***/ "./components/explanationMediaComponents/EmbeddedVideo.js":
/*!****************************************************************!*\
  !*** ./components/explanationMediaComponents/EmbeddedVideo.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Loading */ "./components/Loading.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_firebase__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/explanationMediaComponents/EmbeddedVideo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class EmbeddedVideo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaUrl: false
    };
  }

  async componentDidMount() {
    this.setState({
      mediaUrl: await Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_2__["getFileURLFromFirebaseStorage"])(this.props.video)
    });
  }

  render() {
    if (!this.state.mediaUrl) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "loading...");
    } else {
      return __jsx("div", {
        className: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("video", {
        className: "inline-explanation-video",
        controls: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("source", {
        src: this.state.mediaUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), "Sorry, your browser doesn't support embedded videos."));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EmbeddedVideo);

/***/ }),

/***/ "./components/explanationMediaComponents/EmbeddedYouTube.js":
/*!******************************************************************!*\
  !*** ./components/explanationMediaComponents/EmbeddedYouTube.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Loading */ "./components/Loading.js");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ "react-youtube");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/explanationMediaComponents/EmbeddedYouTube.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class EmbeddedYouTube extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeVideoID: false
    };
  }

  async componentDidMount() {
    this.setState({
      youtubeVideoID: this.props.youtube.split('v=')[1].split('&')[0]
    });
  }

  render() {
    if (!this.state.youtubeVideoID) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "loading...");
    } else {
      return __jsx("div", {
        className: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_2___default.a, {
        videoId: this.state.youtubeVideoID,
        width: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EmbeddedYouTube);

/***/ }),

/***/ "./components/uploadExplanationComponents/AddLink.js":
/*!***********************************************************!*\
  !*** ./components/uploadExplanationComponents/AddLink.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardSection */ "./components/CardSection.js");

var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/uploadExplanationComponents/AddLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class AddLink extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendIntroTextChangeToParent", e => {
      this.props.handleIntroTextChange(e);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendMediaLinkChangeToParent", e => {
      this.props.handleMediaLinkChange(e);
    });

    this.state = {
      fileToUpload: ''
    };
  }

  render() {
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
      placeholder: `Here is a fabulous way to understand ${this.props.currentConcept}s...`,
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
    }, "Link"), __jsx("input", {
      onChange: this.sendMediaLinkChangeToParent,
      className: "margin-top-sml font-med background-grey rounded-border light-border",
      type: "text",
      placeholder: "https:// ...",
      name: "link-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AddLink);

/***/ }),

/***/ "./components/uploadExplanationComponents/AddPodcast.js":
/*!**************************************************************!*\
  !*** ./components/uploadExplanationComponents/AddPodcast.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardSection */ "./components/CardSection.js");

var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/uploadExplanationComponents/AddPodcast.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class AddPodcast extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendIntroTextChangeToParent", e => {
      this.props.handleIntroTextChange(e);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendMediaLinkChangeToParent", e => {
      this.props.handleMediaLinkChange(e);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendMediaGuidanceChangeToParent", e => {
      this.props.handleMediaGuidanceChange(e);
    });

    this.state = {
      fileToUpload: ''
    };
  }

  render() {
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
      placeholder: `Here is a fabulous way to understand ${this.props.currentConcept}s...`,
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
      href: "https://soundcloud.com/search",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "SoundCloud"), " link to podcast"), __jsx("p", {
      className: "font-color-light-grey font-med font-bold-med",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Head over to ", __jsx("a", {
      className: "link",
      href: "https://soundcloud.com/search",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "SoundCloud"), " and find the link to the podcast episode you're thinking of."), __jsx("input", {
      onChange: this.sendMediaLinkChangeToParent,
      className: "margin-top-sml font-med background-grey rounded-border light-border",
      type: "text",
      placeholder: "https://soundcloud.com/ ...",
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

}

/* harmony default export */ __webpack_exports__["default"] = (AddPodcast);

/***/ }),

/***/ "./components/uploadExplanationComponents/AddTweet.js":
/*!************************************************************!*\
  !*** ./components/uploadExplanationComponents/AddTweet.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardSection */ "./components/CardSection.js");

var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/uploadExplanationComponents/AddTweet.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class AddTweet extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendIntroTextChangeToParent", e => {
      this.props.handleIntroTextChange(e);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendMediaLinkChangeToParent", e => {
      this.props.handleMediaLinkChange(e);
    });

    this.state = {
      fileToUpload: ''
    };
  }

  render() {
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
      placeholder: `Here is a fabulous way to understand ${this.props.currentConcept}s...`,
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
    }, "Link to Tweet"), __jsx("input", {
      onChange: this.sendMediaLinkChangeToParent,
      className: "margin-top-sml font-med background-grey rounded-border light-border",
      type: "text",
      placeholder: "https://twitter.com/ ...",
      name: "tweet-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AddTweet);

/***/ }),

/***/ "./components/uploadExplanationComponents/AddYouTube.js":
/*!**************************************************************!*\
  !*** ./components/uploadExplanationComponents/AddYouTube.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardSection */ "./components/CardSection.js");

var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/uploadExplanationComponents/AddYouTube.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class AddYouTube extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendIntroTextChangeToParent", e => {
      this.props.handleIntroTextChange(e);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendMediaLinkChangeToParent", e => {
      this.props.handleMediaLinkChange(e);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendMediaGuidanceChangeToParent", e => {
      this.props.handleMediaGuidanceChange(e);
    });

    this.state = {
      fileToUpload: ''
    };
  }

  render() {
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
      placeholder: `Here is a fabulous way to understand ${this.props.currentConcept}s...`,
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
    }, "Link to YouTube video"), __jsx("input", {
      onChange: this.sendMediaLinkChangeToParent,
      className: "margin-top-sml font-med background-grey rounded-border light-border",
      type: "text",
      placeholder: "https://youtube.com/watch ...",
      name: "video-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), __jsx("h2", {
      className: "font-med font-bold-med margin-top-sml",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "What part should someone listen to?"), __jsx("p", {
      className: "font-color-light-grey font-med font-bold-med",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
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
        lineNumber: 31
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AddYouTube);

/***/ }),

/***/ "./components/uploadExplanationComponents/UploadAudio.js":
/*!***************************************************************!*\
  !*** ./components/uploadExplanationComponents/UploadAudio.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardSection */ "./components/CardSection.js");

var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/uploadExplanationComponents/UploadAudio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class UploadAudio extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendFileChangeToParent", e => {
      this.props.handleFileChange(e);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendIntroTextChangeToParent", e => {
      this.props.handleIntroTextChange(e);
    });

    this.state = {
      fileToUpload: ''
    };
  }

  render() {
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
      placeholder: `Here is a fabulous way to understand ${this.props.currentConcept}s...`,
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
    }, "Upload Your Audio"), __jsx("p", {
      className: "font-color-light-grey font-med font-bold-med",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Record a voice memo and then upload it here. You can sing a song, do some freestyle rap, speak some poetry, tell a joke or just explain it straight, Can\u2019t wait to see what you come up with."), __jsx("input", {
      onChange: this.sendFileChangeToParent,
      className: "margin-top-sml font-med",
      type: "file",
      name: "photo-upload",
      accept: "audio/*",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UploadAudio); // <form className="add-explanation-form">
//   <h2 className="font-med font-bold-med">Optional Intro Text</h2>
//   <textarea className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="text" placeholder={`Here is a fabulous way to understand ${router.query.id}s...`} rows="5"></textarea>
//   <h2 className="font-med font-bold-med margin-top-sml">Link to YouTube video</h2>
//   <input className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="url" placeholder="https:// ..." />
//   <h2 className="font-med font-bold-med margin-top-sml">What part should someone listen to?</h2>
//   <h2 className="font-color-light-grey font-med font-bold-med">(i.e. start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00)</h2>
//   <input className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="how-to-consume" placeholder="Start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00" />
// </form>

/***/ }),

/***/ "./components/uploadExplanationComponents/UploadImage.js":
/*!***************************************************************!*\
  !*** ./components/uploadExplanationComponents/UploadImage.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardSection */ "./components/CardSection.js");

var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/uploadExplanationComponents/UploadImage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class UploadImage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendFileChangeToParent", e => {
      this.props.handleFileChange(e);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendIntroTextChangeToParent", e => {
      this.props.handleIntroTextChange(e);
    });

    this.state = {
      fileToUpload: ''
    };
  }

  render() {
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
      placeholder: `Here is a fabulous way to understand ${this.props.currentConcept}s...`,
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
    }, "Upload Your Photo"), this.props.mode == "draw" && __jsx("p", {
      className: "font-color-light-grey font-med font-bold-med",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Draw a picture and then upload it here. Your drawing can be a comic, a diagram, a chart, an illustration, anything you can do in pictionary you can do here. Can\u2019t wait to see what you come up with."), __jsx("input", {
      onChange: this.sendFileChangeToParent,
      className: "margin-top-sml font-med",
      type: "file",
      name: "photo-upload",
      accept: "image/*",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UploadImage); // <form className="add-explanation-form">
//   <h2 className="font-med font-bold-med">Optional Intro Text</h2>
//   <textarea className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="text" placeholder={`Here is a fabulous way to understand ${router.query.id}s...`} rows="5"></textarea>
//   <h2 className="font-med font-bold-med margin-top-sml">Link to YouTube video</h2>
//   <input className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="url" placeholder="https:// ..." />
//   <h2 className="font-med font-bold-med margin-top-sml">What part should someone listen to?</h2>
//   <h2 className="font-color-light-grey font-med font-bold-med">(i.e. start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00)</h2>
//   <input className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="how-to-consume" placeholder="Start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00" />
// </form>

/***/ }),

/***/ "./components/uploadExplanationComponents/UploadVideo.js":
/*!***************************************************************!*\
  !*** ./components/uploadExplanationComponents/UploadVideo.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardSection */ "./components/CardSection.js");

var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/uploadExplanationComponents/UploadVideo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class UploadVideo extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendFileChangeToParent", e => {
      this.props.handleFileChange(e);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendIntroTextChangeToParent", e => {
      this.props.handleIntroTextChange(e);
    });

    this.state = {
      fileToUpload: ''
    };
  }

  render() {
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
      placeholder: `Here is a fabulous way to understand ${this.props.currentConcept}s...`,
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

}

/* harmony default export */ __webpack_exports__["default"] = (UploadVideo); // <form className="add-explanation-form">
//   <h2 className="font-med font-bold-med">Optional Intro Text</h2>
//   <textarea className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="text" placeholder={`Here is a fabulous way to understand ${router.query.id}s...`} rows="5"></textarea>
//   <h2 className="font-med font-bold-med margin-top-sml">Link to YouTube video</h2>
//   <input className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="url" placeholder="https:// ..." />
//   <h2 className="font-med font-bold-med margin-top-sml">What part should someone listen to?</h2>
//   <h2 className="font-color-light-grey font-med font-bold-med">(i.e. start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00)</h2>
//   <input className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="how-to-consume" placeholder="Start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00" />
// </form>

/***/ }),

/***/ "./components/uploadExplanationComponents/WriteText.js":
/*!*************************************************************!*\
  !*** ./components/uploadExplanationComponents/WriteText.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardSection */ "./components/CardSection.js");

var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/uploadExplanationComponents/WriteText.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class WriteText extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sendTextChangeToParent", e => {
      console.log(this.props);
      this.props.handleTextChange(e);
    });

    this.state = {
      fileToUpload: ''
    };
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("form", {
      className: "add-explanation-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("h2", {
      className: "font-med font-bold-med",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Go for it! Teach us."), __jsx("textarea", {
      onChange: this.sendTextChangeToParent,
      className: "margin-top-sml font-med background-grey rounded-border light-border",
      type: "text",
      name: "text",
      placeholder: `Here is a fabulous way to understand ${this.props.currentConcept}s...`,
      rows: "5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WriteText); // <form className="add-explanation-form">
//   <h2 className="font-med font-bold-med">Optional Intro Text</h2>
//   <textarea className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="text" placeholder={`Here is a fabulous way to understand ${router.query.id}s...`} rows="5"></textarea>
//   <h2 className="font-med font-bold-med margin-top-sml">Link to YouTube video</h2>
//   <input className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="url" placeholder="https:// ..." />
//   <h2 className="font-med font-bold-med margin-top-sml">What part should someone listen to?</h2>
//   <h2 className="font-color-light-grey font-med font-bold-med">(i.e. start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00)</h2>
//   <input className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="how-to-consume" placeholder="Start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00" />
// </form>

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

exports.RouterContext = _routerContext.RouterContext;

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextType = _router.RouterContext;
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.historyId !== this.historyId) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // we use a historyId to enable ignoring invalid popstates

    this.historyId = Math.random();

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options: _Object$assign({}, options, {
          historyId: this.historyId
        })
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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
/* harmony import */ var _components_AddExplanationCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AddExplanationCard */ "./components/AddExplanationCard.js");
/* harmony import */ var _components_ExplanationCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ExplanationCard */ "./components/ExplanationCard.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Loading */ "./components/Loading.js");
/* harmony import */ var _components_SwipableCardContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/SwipableCardContainer */ "./components/SwipableCardContainer.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/pages/concept/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












class ConceptPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      conceptExplanationsArray: []
    };
  }

  async componentDidMount() {
    const {
      router
    } = this.props;
    this.setState({
      conceptExplanationsArray: await Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_9__["getConceptExplanations"])(router.query.id)
    });
  }

  render() {
    const {
      router
    } = this.props;
    {
      if (!this.state.conceptExplanationsArray.length) {
        return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {
          loggedIn: this.props.loggedIn,
          loggedInUser: this.props.loggedInUser,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        });
      } else {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
          loggedIn: this.props.loggedIn,
          loggedInUser: this.props.loggedInUser,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, __jsx("div", {
          className: "concept-title-bar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, __jsx("h1", {
          className: "font-lrg font-bold-med inline-block capitalize",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, router.query.id), __jsx("p", {
          className: "font-color-light-grey inline-block margin-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, "originally asked by @bofirstdog")), __jsx(_components_AddExplanationCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
          loggedInUser: this.props.loggedInUser,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }), __jsx("h1", {
          className: "margin-top-lrg font-lrg font-bold-med inline-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "All of the wacky and wonderful ways to explain a ", router.query.id, " "), __jsx("p", {
          className: "font-color-light-grey",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "There are 114 explanations here. Some will work for you, some won\u2019t.  Keep going until you find one that gives you that aha! moment."), __jsx("div", {
          className: "margin-top-sml",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, __jsx(_components_SwipableCardContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
          conceptExplanationsArray: this.state.conceptExplanationsArray,
          loggedInUser: this.props.loggedInUser,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }))));
      }
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(ConceptPage));

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

  let explanationSnapshot = await explanationsRef.where('authorUserID', '==', userID).orderBy('ahaMomentCount', 'desc').get();
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
    "concept": explanationObj.concept.toLowerCase(),
    "authorUserID": explanationObj.authorUserID,
    "authorDisplayName": explanationObj.authorDisplayName,
    "authorAvatarUrl": explanationObj.authorAvatarUrl,
    "datetime": firebase.firestore.Timestamp.now(),
    "explanation": {
      "introText": explanationObj.explanation.introText ? explanationObj.explanation.introText : "",
      "mediaConsumptionGuidance": explanationObj.explanation.mediaConsumptionGuidance ? explanationObj.explanation.mediaConsumptionGuidance : "",
      "mediaLink": explanationObj.explanation.mediaLink ? explanationObj.explanation.mediaLink : "",
      "type": explanationObj.explanation.type
    },
    "ahaMomentCount": 1,
    "explanationCount": 0,
    "reactionGotItCount": 0,
    "reactionLaughingCount": 0,
    "reactionShockedCount": 0
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
    "concept": concept.toLowerCase(),
    "authorUserID": userID,
    "authorDisplayName": userObj.displayName,
    "authorAvatarUrl": userObj.avatarUrl,
    "datetime": firebase.firestore.Timestamp.now(),
    "explanation": {
      "introText": introText,
      "mediaLink": snapshot.metadata.fullPath,
      "type": fileType
    },
    "ahaMomentCount": 1,
    "explanationCount": 0,
    "reactionGotItCount": 0,
    "reactionLaughingCount": 0,
    "reactionShockedCount": 0
  });
}

async function saveWrittenExplanationToDB(text, userID, concept) {
  // first remove any html or scripts because xss
  let cleanText = text.replace('<script>', '').replace('onclick', '').replace('onerror').replace('onResize', '').replace('onPropertyChange', '').replace('onMouseEnter', '').replace('onFocus', ''); // https://gist.github.com/JohannesHoppe/5612274
  // then save explanation to firestore
  // first to do that, need some user profile data

  let userObj = await getUserProfileInfoByUserID(userID); // then save to firebase

  await saveExplanationToDB({
    "concept": concept.toLowerCase(),
    "authorUserID": userID,
    "authorDisplayName": userObj.displayName,
    "authorAvatarUrl": userObj.avatarUrl,
    "datetime": firebase.firestore.Timestamp.now(),
    "explanation": {
      "introText": text,
      "type": "text"
    },
    "ahaMomentCount": 1,
    "explanationCount": 0,
    "reactionGotItCount": 0,
    "reactionLaughingCount": 0,
    "reactionShockedCount": 0
  });
}

async function saveExternalLinkExplanationToDB(introText, mediaLink, mediaConsumptionGuidance, fileType, userID, concept) {
  // first need some user profile data
  let userObj = await getUserProfileInfoByUserID(userID); // then save to firebase

  await saveExplanationToDB({
    "concept": concept.toLowerCase(),
    "authorUserID": userID,
    "authorDisplayName": userObj.displayName,
    "authorAvatarUrl": userObj.avatarUrl,
    "datetime": firebase.firestore.Timestamp.now(),
    "explanation": {
      "introText": introText,
      "mediaLink": mediaLink,
      "mediaConsumptionGuidance": mediaConsumptionGuidance,
      "type": fileType
    },
    "ahaMomentCount": 0,
    "explanationCount": 0,
    "reactionGotItCount": 0,
    "reactionLaughingCount": 0,
    "reactionShockedCount": 0
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
      "conceptName": "Infinity",
      "numContributors": 4,
      "contributorAvatars": ["/images/temp-avatar.jpg", "/images/temp-avatar2.jpg", "/images/temp-avatar3.jpg", "/images/temp-avatar4.jpg"]
    }]
  };
} // returns top 5 creators in an array


async function getTopCreatorsAllTime() {
  let snapshot = await usersRef.orderBy('ahaMomentCount', 'desc').get();
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
  let snapshot = await explanationsRef.orderBy('ahaMomentCount', 'desc').get();
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
  let snapshot = await explanationsRef.where('concept', '==', formattedConcept).orderBy('ahaMomentCount', 'desc').get();
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
} // voting utils


async function addAhaToDB(explanationID, loggedInUserID, authorUserID) {
  let explanationRef = explanationsRef.doc(explanationID); // increment aha count for explanation

  explanationRef.update({
    ahaMomentCount: increment
  }); // increment aha count for author of explanation

  let docID = await getDocIDByUserID(loggedInUserID);
  let userRef = usersRef.doc(docID);
  userRef.update({
    ahaMomentCount: increment
  }); // add vote to explanation vote log

  let newVote = {
    "datetime": firebase.firestore.Timestamp.now(),
    "userID": loggedInUserID,
    "type": "ahaMoment"
  };
  explanationRef.update({
    voteLog: firebase.firestore.FieldValue.arrayUnion(newVote)
  });
}

async function addDontGetItToDB(explanationID, loggedInUserID, authorUserID) {
  let explanationRef = explanationsRef.doc(explanationID); // increment aha count for explanation

  explanationRef.update({
    dontGetItCount: increment
  }); // increment aha count for author of explanation

  let docID = await getDocIDByUserID(loggedInUserID);
  let userRef = usersRef.doc(docID);
  userRef.update({
    dontGetItCount: increment
  }); // add vote to explanation vote log

  let newVote = {
    "datetime": firebase.firestore.Timestamp.now(),
    "userID": loggedInUserID,
    "type": "dontGetIt"
  };
  explanationRef.update({
    voteLog: firebase.firestore.FieldValue.arrayUnion(newVote)
  });
}

async function addReactionGotItToDB(explanationID, loggedInUserID, authorUserID) {
  let explanationRef = explanationsRef.doc(explanationID); // increment aha count for explanation

  explanationRef.update({
    reactionGotItCount: increment
  }); // increment aha count for author of explanation

  let docID = await getDocIDByUserID(loggedInUserID);
  let userRef = usersRef.doc(docID);
  userRef.update({
    reactionGotItCount: increment
  }); // add vote to explanation vote log

  let newVote = {
    "datetime": firebase.firestore.Timestamp.now(),
    "userID": loggedInUserID,
    "type": "reactionGotIt"
  };
  explanationRef.update({
    voteLog: firebase.firestore.FieldValue.arrayUnion(newVote)
  });
}

async function addReactionLaughingToDB(explanationID, loggedInUserID, authorUserID) {
  let explanationRef = explanationsRef.doc(explanationID); // increment aha count for explanation

  explanationRef.update({
    reactionLaughingCount: increment
  }); // increment aha count for author of explanation

  let docID = await getDocIDByUserID(loggedInUserID);
  let userRef = usersRef.doc(docID);
  userRef.update({
    reactionLaughingCount: increment
  }); // add vote to explanation vote log

  let newVote = {
    "datetime": firebase.firestore.Timestamp.now(),
    "userID": loggedInUserID,
    "type": "reactionLaughing"
  };
  explanationRef.update({
    voteLog: firebase.firestore.FieldValue.arrayUnion(newVote)
  });
}

async function addReactionShockedToDB(explanationID, loggedInUserID, authorUserID) {
  let explanationRef = explanationsRef.doc(explanationID); // increment aha count for explanation

  explanationRef.update({
    reactionShockedCount: increment
  }); // increment aha count for author of explanation

  let docID = await getDocIDByUserID(loggedInUserID);
  let userRef = usersRef.doc(docID);
  userRef.update({
    reactionShockedCount: increment
  }); // add vote to explanation vote log

  let newVote = {
    "datetime": firebase.firestore.Timestamp.now(),
    "userID": loggedInUserID,
    "type": "reactionShocked"
  };
  explanationRef.update({
    voteLog: firebase.firestore.FieldValue.arrayUnion(newVote)
  });
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
  getConceptExplanations,
  addAhaToDB,
  addDontGetItToDB,
  addReactionGotItToDB,
  addReactionLaughingToDB,
  addReactionShockedToDB
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

module.exports = {
  conceptToDisplayName,
  explanationTypeToDisplayType,
  generateFilePathAndName
};

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/concept/[id].js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danigrant/Projects/ahamoments/pages/concept/[id].js */"./pages/concept/[id].js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

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

/***/ "fireworks/lib/react":
/*!**************************************!*\
  !*** external "fireworks/lib/react" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fireworks/lib/react");

/***/ }),

/***/ "immutability-helper":
/*!**************************************!*\
  !*** external "immutability-helper" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutability-helper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),

/***/ "react-twitter-embed":
/*!**************************************!*\
  !*** external "react-twitter-embed" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-twitter-embed");

/***/ }),

/***/ "react-youtube":
/*!********************************!*\
  !*** external "react-youtube" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-youtube");

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
//# sourceMappingURL=[id].js.map