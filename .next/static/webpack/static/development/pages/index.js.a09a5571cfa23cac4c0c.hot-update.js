webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ExplanationCard.js":
/*!***************************************!*\
  !*** ./components/ExplanationCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CardSection */ "./components/CardSection.js");
/* harmony import */ var _MultiAvatarUnit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MultiAvatarUnit */ "./components/MultiAvatarUnit.js");
/* harmony import */ var _AhaButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AhaButton */ "./components/AhaButton.js");
/* harmony import */ var _DontGetItButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DontGetItButton */ "./components/DontGetItButton.js");
/* harmony import */ var _ReactionButtonBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ReactionButtonBar */ "./components/ReactionButtonBar.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _explanationMediaComponents_EmbeddedPhoto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./explanationMediaComponents/EmbeddedPhoto */ "./components/explanationMediaComponents/EmbeddedPhoto.js");
/* harmony import */ var _explanationMediaComponents_EmbeddedAudio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./explanationMediaComponents/EmbeddedAudio */ "./components/explanationMediaComponents/EmbeddedAudio.js");
/* harmony import */ var _explanationMediaComponents_EmbeddedVideo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./explanationMediaComponents/EmbeddedVideo */ "./components/explanationMediaComponents/EmbeddedVideo.js");
/* harmony import */ var _explanationMediaComponents_EmbeddedTweet__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./explanationMediaComponents/EmbeddedTweet */ "./components/explanationMediaComponents/EmbeddedTweet.js");
/* harmony import */ var _explanationMediaComponents_EmbeddedYouTube__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./explanationMediaComponents/EmbeddedYouTube */ "./components/explanationMediaComponents/EmbeddedYouTube.js");
/* harmony import */ var _explanationMediaComponents_EmbeddedPodcast__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./explanationMediaComponents/EmbeddedPodcast */ "./components/explanationMediaComponents/EmbeddedPodcast.js");
/* harmony import */ var _explanationMediaComponents_EmbeddedLink__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./explanationMediaComponents/EmbeddedLink */ "./components/explanationMediaComponents/EmbeddedLink.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_utils_utils__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_utils_firebase__WEBPACK_IMPORTED_MODULE_24__);








var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/ExplanationCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;


















var ExplanationCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ExplanationCard, _React$Component);

  function ExplanationCard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ExplanationCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ExplanationCard).call(this, props));
    _this.handleAha = _this.handleAha.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleDontGetIt = _this.handleDontGetIt.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleReactionGotIt = _this.handleReactionGotIt.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleReactionLaughing = _this.handleReactionLaughing.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleReactionShocked = _this.handleReactionShocked.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ExplanationCard, [{
    key: "handleAha",
    value: function () {
      var _handleAha = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_24__["addAhaToDB"])(this.props.explanation.explanationID, this.props.loggedInUser.userID, this.props.explanation.authorUserID);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleAha() {
        return _handleAha.apply(this, arguments);
      }

      return handleAha;
    }()
  }, {
    key: "handleDontGetIt",
    value: function () {
      var _handleDontGetIt = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_24__["addDontGetItToDB"])(this.props.explanation.explanationID, this.props.loggedInUser.userID, this.props.explanation.authorUserID);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleDontGetIt() {
        return _handleDontGetIt.apply(this, arguments);
      }

      return handleDontGetIt;
    }()
  }, {
    key: "handleReactionGotIt",
    value: function () {
      var _handleReactionGotIt = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_24__["addReactionGotItToDB"])(this.props.explanation.explanationID, this.props.loggedInUser.userID, this.props.explanation.authorUserID);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleReactionGotIt() {
        return _handleReactionGotIt.apply(this, arguments);
      }

      return handleReactionGotIt;
    }()
  }, {
    key: "handleReactionLaughing",
    value: function () {
      var _handleReactionLaughing = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_24__["addReactionLaughingToDB"])(this.props.explanation.explanationID, this.props.loggedInUser.userID, this.props.explanation.authorUserID);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function handleReactionLaughing() {
        return _handleReactionLaughing.apply(this, arguments);
      }

      return handleReactionLaughing;
    }()
  }, {
    key: "handleReactionShocked",
    value: function () {
      var _handleReactionShocked = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_24__["addReactionShockedToDB"])(this.props.explanation.explanationID, this.props.loggedInUser.userID, this.props.explanation.authorUserID);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function handleReactionShocked() {
        return _handleReactionShocked.apply(this, arguments);
      }

      return handleReactionShocked;
    }()
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "explanation-card-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("img", {
        className: "avatar avatar-sml",
        src: this.props.explanation.authorAvatarUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx("p", {
        className: "font-color-light-grey inline-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("span", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
        href: "/explainer/".concat(this.props.explanation.authorUserID),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, this.props.explanation.authorDisplayName)), " "), "explains", __jsx("span", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
        href: "/concept/".concat(this.props.explanation.concept),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_23__["conceptToDisplayName"])(this.props.explanation.concept))), " "), "through", __jsx("span", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, " ", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_23__["explanationTypeToDisplayType"])(this.props.explanation.explanation.type)))), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("p", {
        className: "margin-top-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, this.props.explanation.explanation.introText), this.props.explanation.explanation.type == "tweet" && __jsx(_explanationMediaComponents_EmbeddedTweet__WEBPACK_IMPORTED_MODULE_19__["default"], {
        tweet: this.props.explanation.explanation.mediaLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), this.props.explanation.explanation.type == "audio" && __jsx(_explanationMediaComponents_EmbeddedAudio__WEBPACK_IMPORTED_MODULE_17__["default"], {
        audio: this.props.explanation.explanation.mediaLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), this.props.explanation.explanation.type == "link" && __jsx(_explanationMediaComponents_EmbeddedLink__WEBPACK_IMPORTED_MODULE_22__["default"], {
        link: this.props.explanation.explanation.mediaLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), this.props.explanation.explanation.type == "photo" && __jsx(_explanationMediaComponents_EmbeddedPhoto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        photo: this.props.explanation.explanation.mediaLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), this.props.explanation.explanation.type == "podcast" && __jsx(_explanationMediaComponents_EmbeddedPodcast__WEBPACK_IMPORTED_MODULE_21__["default"], {
        podcast: this.props.explanation.explanation.mediaLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), this.props.explanation.explanation.type == "video" && __jsx(_explanationMediaComponents_EmbeddedVideo__WEBPACK_IMPORTED_MODULE_18__["default"], {
        video: this.props.explanation.explanation.mediaLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), this.props.explanation.explanation.type == "youtube" && __jsx(_explanationMediaComponents_EmbeddedYouTube__WEBPACK_IMPORTED_MODULE_20__["default"], {
        youtube: this.props.explanation.explanation.mediaLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), this.props.explanation.explanation.mediaConsumptionGuidance && __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, this.props.explanation.explanation.mediaConsumptionGuidance)), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx(_AhaButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        handleAha: this.handleAha,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), __jsx(_DontGetItButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
        handleDontGetIt: this.handleDontGetIt,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), __jsx(_ReactionButtonBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: "float-right",
        handleReactionGotIt: this.handleReactionGotIt,
        handleReactionLaughing: this.handleReactionLaughing,
        handleReactionShocked: this.handleReactionShocked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }))));
    }
  }]);

  return ExplanationCard;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ExplanationCard);

/***/ })

})
//# sourceMappingURL=index.js.a09a5571cfa23cac4c0c.hot-update.js.map