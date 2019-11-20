webpackHotUpdate("static/development/pages/concept/[id].js",{

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
/* harmony import */ var react_dom_confetti__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-dom-confetti */ "./node_modules/react-dom-confetti/lib/confetti.js");
/* harmony import */ var react_dom_confetti__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_dom_confetti__WEBPACK_IMPORTED_MODULE_25__);








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
                this.props.handleGoToNextCard();

              case 3:
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
                this.props.handleGoToNextCard();

              case 3:
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
      var config = {
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
      }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
        href: "/explainer/".concat(this.props.explanation.authorUserID),
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
      }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
        href: "/concept/".concat(this.props.explanation.concept),
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
      }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_23__["conceptToDisplayName"])(this.props.explanation.concept))), " "), "through", __jsx("span", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, " ", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_23__["explanationTypeToDisplayType"])(this.props.explanation.explanation.type)))), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      }, this.props.explanation.explanation.mediaConsumptionGuidance), this.props.explanation.explanation.type == "tweet" && __jsx(_explanationMediaComponents_EmbeddedTweet__WEBPACK_IMPORTED_MODULE_19__["default"], {
        tweet: this.props.explanation.explanation.mediaLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), this.props.explanation.explanation.type == "audio" && __jsx(_explanationMediaComponents_EmbeddedAudio__WEBPACK_IMPORTED_MODULE_17__["default"], {
        audio: this.props.explanation.explanation.mediaLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), this.props.explanation.explanation.type == "link" && __jsx(_explanationMediaComponents_EmbeddedLink__WEBPACK_IMPORTED_MODULE_22__["default"], {
        link: this.props.explanation.explanation.mediaLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), this.props.explanation.explanation.type == "photo" && __jsx(_explanationMediaComponents_EmbeddedPhoto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        photo: this.props.explanation.explanation.mediaLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), this.props.explanation.explanation.type == "podcast" && __jsx(_explanationMediaComponents_EmbeddedPodcast__WEBPACK_IMPORTED_MODULE_21__["default"], {
        podcast: this.props.explanation.explanation.mediaLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), this.props.explanation.explanation.type == "video" && __jsx(_explanationMediaComponents_EmbeddedVideo__WEBPACK_IMPORTED_MODULE_18__["default"], {
        video: this.props.explanation.explanation.mediaLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), this.props.explanation.explanation.type == "youtube" && __jsx(_explanationMediaComponents_EmbeddedYouTube__WEBPACK_IMPORTED_MODULE_20__["default"], {
        youtube: this.props.explanation.explanation.mediaLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      })), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx(_AhaButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        handleAha: this.handleAha,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), __jsx(_DontGetItButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
        handleDontGetIt: this.handleDontGetIt,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), __jsx(_ReactionButtonBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
  }]);

  return ExplanationCard;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ExplanationCard);

/***/ }),

/***/ "./node_modules/dom-confetti/lib/main.js":
/*!***********************************************!*\
  !*** ./node_modules/dom-confetti/lib/main.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confetti = confetti;
var defaultColors = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"];

function createElements(root, elementCount, colors, width, height) {
  return Array.from({ length: elementCount }).map(function (_, index) {
    var element = document.createElement("div");
    var color = colors[index % colors.length];
    element.style["background-color"] = color; // eslint-disable-line space-infix-ops
    element.style.width = width;
    element.style.height = height;
    element.style.position = "absolute";
    element.style.willChange = "transform, opacity";
    element.style.visibility = "hidden";
    root.appendChild(element);
    return element;
  });
}

function randomPhysics(angle, spread, startVelocity, random) {
  var radAngle = angle * (Math.PI / 180);
  var radSpread = spread * (Math.PI / 180);
  return {
    x: 0,
    y: 0,
    wobble: random() * 10,
    wobbleSpeed: 0.1 + random() * 0.1,
    velocity: startVelocity * 0.5 + random() * startVelocity,
    angle2D: -radAngle + (0.5 * radSpread - random() * radSpread),
    angle3D: -(Math.PI / 4) + random() * (Math.PI / 2),
    tiltAngle: random() * Math.PI,
    tiltAngleSpeed: 0.1 + random() * 0.3
  };
}

function updateFetti(fetti, progress, dragFriction, decay) {
  /* eslint-disable no-param-reassign */
  fetti.physics.x += Math.cos(fetti.physics.angle2D) * fetti.physics.velocity;
  fetti.physics.y += Math.sin(fetti.physics.angle2D) * fetti.physics.velocity;
  fetti.physics.z += Math.sin(fetti.physics.angle3D) * fetti.physics.velocity;
  fetti.physics.wobble += fetti.physics.wobbleSpeed;
  // Backward compatibility
  if (decay) {
    fetti.physics.velocity *= decay;
  } else {
    fetti.physics.velocity -= fetti.physics.velocity * dragFriction;
  }
  fetti.physics.y += 3;
  fetti.physics.tiltAngle += fetti.physics.tiltAngleSpeed;

  var _fetti$physics = fetti.physics,
      x = _fetti$physics.x,
      y = _fetti$physics.y,
      tiltAngle = _fetti$physics.tiltAngle,
      wobble = _fetti$physics.wobble;

  var wobbleX = x + 10 * Math.cos(wobble);
  var wobbleY = y + 10 * Math.sin(wobble);
  var transform = "translate3d(" + wobbleX + "px, " + wobbleY + "px, 0) rotate3d(1, 1, 1, " + tiltAngle + "rad)";

  fetti.element.style.visibility = "visible";
  fetti.element.style.transform = transform;
  fetti.element.style.opacity = 1 - progress;

  /* eslint-enable */
}

function animate(root, fettis, dragFriction, decay, duration, stagger) {
  var startTime = void 0;

  return new Promise(function (resolve) {
    function update(time) {
      if (!startTime) startTime = time;
      var elapsed = time - startTime;
      var progress = startTime === time ? 0 : (time - startTime) / duration;
      fettis.slice(0, Math.ceil(elapsed / stagger)).forEach(function (fetti) {
        updateFetti(fetti, progress, dragFriction, decay);
      });

      if (time - startTime < duration) {
        requestAnimationFrame(update);
      } else {
        fettis.forEach(function (fetti) {
          if (fetti.element.parentNode === root) {
            return root.removeChild(fetti.element);
          }
        });
        resolve();
      }
    }

    requestAnimationFrame(update);
  });
}

var defaults = {
  angle: 90,
  spread: 45,
  startVelocity: 45,
  elementCount: 50,
  width: "10px",
  height: "10px",
  colors: defaultColors,
  duration: 3000,
  stagger: 0,
  dragFriction: 0.1,
  random: Math.random
};

function backwardPatch(config) {
  if (!config.stagger && config.delay) {
    config.stagger = config.delay;
  }
  return config;
}

function confetti(root) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _Object$assign = Object.assign({}, defaults, backwardPatch(config)),
      elementCount = _Object$assign.elementCount,
      colors = _Object$assign.colors,
      width = _Object$assign.width,
      height = _Object$assign.height,
      angle = _Object$assign.angle,
      spread = _Object$assign.spread,
      startVelocity = _Object$assign.startVelocity,
      decay = _Object$assign.decay,
      dragFriction = _Object$assign.dragFriction,
      duration = _Object$assign.duration,
      stagger = _Object$assign.stagger,
      random = _Object$assign.random;

  var elements = createElements(root, elementCount, colors, width, height);
  var fettis = elements.map(function (element) {
    return {
      element: element,
      physics: randomPhysics(angle, spread, startVelocity, random)
    };
  });

  return animate(root, fettis, dragFriction, decay, duration, stagger);
}

/***/ }),

/***/ "./node_modules/react-dom-confetti/lib/confetti.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-dom-confetti/lib/confetti.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _domConfetti = __webpack_require__(/*! dom-confetti */ "./node_modules/dom-confetti/lib/main.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  position: "relative"
};

var Confetti = function (_Component) {
  _inherits(Confetti, _Component);

  function Confetti(props) {
    _classCallCheck(this, Confetti);

    var _this = _possibleConstructorReturn(this, (Confetti.__proto__ || Object.getPrototypeOf(Confetti)).call(this, props));

    _this.setRef = _this.setRef.bind(_this);
    return _this;
  }

  _createClass(Confetti, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.active && !this.props.active) {
        (0, _domConfetti.confetti)(this.container, nextProps.config);
      }
    }
  }, {
    key: "setRef",
    value: function setRef(ref) {
      this.container = ref;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { className: this.props.className, style: style, ref: this.setRef });
    }
  }]);

  return Confetti;
}(_react.Component);

exports.default = Confetti;

/***/ })

})
//# sourceMappingURL=[id].js.2a100552116d1814cd3a.hot-update.js.map