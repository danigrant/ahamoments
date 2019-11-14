webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* harmony import */ var _components_CardSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CardSection */ "./components/CardSection.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_MultiAvatarUnit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/MultiAvatarUnit */ "./components/MultiAvatarUnit.js");
/* harmony import */ var _components_NewConceptsNeedExplanationsCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/NewConceptsNeedExplanationsCard */ "./components/NewConceptsNeedExplanationsCard.js");
/* harmony import */ var _components_ExplanationCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ExplanationCard */ "./components/ExplanationCard.js");
/* harmony import */ var _components_TopCreatorsOfWeekSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/TopCreatorsOfWeekSection */ "./components/TopCreatorsOfWeekSection.js");
/* harmony import */ var _components_TopConceptsOfWeekSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/TopConceptsOfWeekSection */ "./components/TopConceptsOfWeekSection.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_utils_firebase__WEBPACK_IMPORTED_MODULE_18__);







var _jsxFileName = "/Users/danigrant/Projects/ahamoments/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;













var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));
    _this.state = {
      topExplanationsArray: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = this;
                _context.next = 3;
                return Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_18__["getTopExplanationsAllTime"])();

              case 3:
                _context.t1 = _context.sent;
                _context.t2 = {
                  topExplanationsArray: _context.t1
                };

                _context.t0.setState.call(_context.t0, _context.t2);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      {
        if (!this.state.topExplanationsArray.length) {
          return __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }, "Loading...");
        } else {
          return __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
            loggedIn: this.props.loggedIn,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, __jsx("div", {
            className: "columns-parent-div",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }, __jsx("div", {
            className: "column-70-p",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }, __jsx("div", {
            className: "column-section",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          }, __jsx("h1", {
            className: "font-lrg font-bold-med",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, "Ideas looking for Aha Moments"), __jsx(_components_NewConceptsNeedExplanationsCard__WEBPACK_IMPORTED_MODULE_14__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          })), __jsx("div", {
            className: "column-section",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }, __jsx("h1", {
            className: "font-lrg font-bold-med",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, "The most \uD83D\uDD25 Aha Moment creations right now"), this.state.topExplanationsArray.map(function (e) {
            return __jsx(_components_ExplanationCard__WEBPACK_IMPORTED_MODULE_15__["default"], {
              key: e.explanationID,
              explanation: e,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: this
            });
          }))), __jsx("div", {
            className: "column-30-p",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }, __jsx("div", {
            className: "column-section",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, __jsx("h1", {
            className: "font-lrg font-bold-med",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, "Top Creators This Week"), __jsx(_components_TopCreatorsOfWeekSection__WEBPACK_IMPORTED_MODULE_16__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          })), __jsx("div", {
            className: "column-section",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, __jsx("h1", {
            className: "font-lrg font-bold-med",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, "Top Concepts This Week"), __jsx(_components_TopConceptsOfWeekSection__WEBPACK_IMPORTED_MODULE_17__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }))))));
        }
      }
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/firebase.js":
/*!***************************!*\
  !*** ./utils/firebase.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

var firebase = _interopRequireWildcard(__webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js"));

/*
  This file contains firebase config and instantiation
  contains functions that interact with the db

  This file also holds all of the auth functions
  logUserIn
  getLoggedInUser <-- returns false if no user logged in
*/
// initialize
var firebaseConfig = {
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

var db = firebase.firestore();
var conceptsRef = db.collection('concepts');
var explanationsRef = db.collection('explanations');
var usersRef = db.collection('users');
var increment = firebase.firestore.FieldValue.increment(1);
var decrement = firebase.firestore.FieldValue.increment(-1);
var provider = new firebase.auth.TwitterAuthProvider(); // auth

function getLoggedInUser() {
  return _getLoggedInUser.apply(this, arguments);
}

function _getLoggedInUser() {
  _getLoggedInUser = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user = firebase.auth().currentUser;

            if (user) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", false);

          case 3:
            return _context.abrupt("return", user);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getLoggedInUser.apply(this, arguments);
}

function logUserIn() {
  return _logUserIn.apply(this, arguments);
}

function _logUserIn() {
  _logUserIn = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            firebase.auth().signInWithPopup(provider).then(function (result) {
              // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
              // You can use these server side with your app's credentials to access the Twitter API.
              var token = result.credential.accessToken;
              var secret = result.credential.secret; // The signed-in user info.

              var user = result.user; // can use the getLoggedInUser function to return a good user obj
              // user.photoURL, user.displayName, user.email, user.uid does not return twitter handle

              console.log(user);
              return user;
            })["catch"](function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message; // The email of the user's account used.

              var email = error.email; // The firebase.auth.AuthCredential type that was used.

              var credential = error.credential;
              console.log(error);
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _logUserIn.apply(this, arguments);
}

function pollForAuthChanges() {
  return _pollForAuthChanges.apply(this, arguments);
} // various utils


function _pollForAuthChanges() {
  _pollForAuthChanges = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            firebase.auth().onAuthStateChanged(function (user) {
              if (user) {
                // User is signed in.
                console.log({
                  displayName: user.displayName,
                  email: user.email,
                  emailVerified: user.emailVerified,
                  photoURL: user.photoURL,
                  isAnonymous: user.isAnonymous,
                  uid: user.uid,
                  providerData: user.providerData
                }); // ...
              } else {
                // User is signed out.
                // ...
                console.log('user just signed out');
              }
            });

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _pollForAuthChanges.apply(this, arguments);
}

function getUserNameByID(_x) {
  return _getUserNameByID.apply(this, arguments);
} // get and return various data
// returns 2 concepts for the front page that need love as an obj


function _getUserNameByID() {
  _getUserNameByID = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(userID) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", "Barack Obama");

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getUserNameByID.apply(this, arguments);
}

function getConceptsThatNeedLove() {
  return _getConceptsThatNeedLove.apply(this, arguments);
} // returns top 5 creators in an array


function _getConceptsThatNeedLove() {
  _getConceptsThatNeedLove = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5() {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", {
              "totalAmountOfConceptsNeedingLove": 43,
              "conceptsNeedingLoveToDisplay": [{
                "concept": "Integrals",
                "numContributors": 11,
                "threeContributorAvatars": ["/images/temp-avatar.jpg", "/images/temp-avatar2.jpg", "/images/temp-avatar3.jpg", "/images/temp-avatar4.jpg"]
              }, {
                "concept": "Limits",
                "numContributors": 4,
                "threeContributorAvatars": ["/images/temp-avatar.jpg", "/images/temp-avatar2.jpg", "/images/temp-avatar3.jpg", "/images/temp-avatar4.jpg"]
              }]
            });

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getConceptsThatNeedLove.apply(this, arguments);
}

function getTopCreatorsAllTime() {
  return _getTopCreatorsAllTime.apply(this, arguments);
} // returns array of top 5 explanations


function _getTopCreatorsAllTime() {
  _getTopCreatorsAllTime = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6() {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", [{
              "displayName": "Barack Obama",
              "userID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "avatarUrl": "",
              "ahaMomentCount": 4,
              "explanationCount": 5,
              "reactionsCount": {
                "gotIt": 1,
                "laughing": 2,
                "shocked": 3
              }
            }, {
              "displayName": "",
              "userID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "avatarUrl": "",
              "ahaMomentCount": 4,
              "explanationCount": 5,
              "reactionsCount": {
                "gotIt": 1,
                "laughing": 2,
                "shocked": 3
              }
            }, {
              "displayName": "",
              "userID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "avatarUrl": "",
              "ahaMomentCount": 4,
              "explanationCount": 5,
              "reactionsCount": {
                "gotIt": 1,
                "laughing": 2,
                "shocked": 3
              }
            }, {
              "displayName": "",
              "userID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "avatarUrl": "",
              "ahaMomentCount": 4,
              "explanationCount": 5,
              "reactionsCount": {
                "gotIt": 1,
                "laughing": 2,
                "shocked": 3
              }
            }, {
              "displayName": "",
              "userID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "avatarUrl": "",
              "ahaMomentCount": 4,
              "explanationCount": 5,
              "reactionsCount": {
                "gotIt": 1,
                "laughing": 2,
                "shocked": 3
              }
            }, {
              "displayName": "",
              "userID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "avatarUrl": "",
              "ahaMomentCount": 4,
              "explanationCount": 5,
              "reactionsCount": {
                "gotIt": 1,
                "laughing": 2,
                "shocked": 3
              }
            }]);

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getTopCreatorsAllTime.apply(this, arguments);
}

function getTopExplanationsAllTime() {
  return _getTopExplanationsAllTime.apply(this, arguments);
}

function _getTopExplanationsAllTime() {
  _getTopExplanationsAllTime = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7() {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", [{
              "explanationID": "6CpE8XLCBYuMVAFr3wKE",
              "concept": "integrals",
              "authorUserID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "authorAvatarUrl": "/images/temp-avatar.jpg",
              "authorDisplayName": "Barack Obama",
              "explanation": {
                "type": "text",
                //audio, photo, video, youtube, tweet, text, link
                "introText": "Here is my explanation. Williamsburg pop-up disrupt selvage street art knausgaard. Enamel pin bespoke bicycle rights, craft beer mustache chartreuse cronut cred actually. Jean shorts hexagon art party pop-up four loko scenester, retro four dollar toast meggings gluten-free.",
                "mediaLink": "",
                "mediaConsumptionGuidance": ""
              }
            }, {
              "explanationID": "6CpE8XLCBYuMVAFr3wKE",
              "concept": "derivatives",
              "authorUserID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "authorAvatarUrl": "/images/temp-avatar.jpg",
              "authorDisplayName": "Barack Obama",
              "explanation": {
                "type": "tweet",
                //audio, photo, video, youtube, tweet, text
                "introText": "This explains this well",
                "mediaLink": "https://twitter.com/fredwilson/status/1148358347428642817",
                "mediaConsumptionGuidance": ""
              }
            }, {
              "explanationID": "6CpE8XLCBYuMVAFr3wKE",
              "concept": "limits",
              "authorUserID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "authorAvatarUrl": "/images/temp-avatar.jpg",
              "authorDisplayName": "Barack Obama",
              "explanation": {
                "type": "youtube",
                //audio, photo, video, youtube, tweet, text
                "introText": "This is a good video",
                "mediaLink": "https://www.youtube.com/watch?v=Q-K3O9styao",
                "mediaConsumptionGuidance": "Watch from minute 1:30 to 4:40"
              }
            }, {
              "explanationID": "6CpE8XLCBYuMVAFr3wKE",
              "concept": "logarithm",
              "authorUserID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "authorAvatarUrl": "/images/temp-avatar.jpg",
              "authorDisplayName": "Barack Obama",
              "explanation": {
                "type": "link",
                //audio, photo, video, youtube, tweet, text, link
                "introText": "This is a good blog post",
                "mediaLink": "https://waitbutwhy.com/2016/03/my-ted-talk.html",
                "mediaConsumptionGuidance": ""
              }
            }, {
              "explanationID": "6CpE8XLCBYuMVAFr3wKE",
              "concept": "differential-equation",
              "authorUserID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "authorAvatarUrl": "/images/temp-avatar.jpg",
              "authorDisplayName": "Barack Obama",
              "explanation": {
                "type": "video",
                //audio, photo, video, youtube, tweet, text
                "introText": "This is a good video",
                "mediaLink": "http://movietrailers.apple.com/movies/wb/the-lego-ninjago-movie/the-lego-ninjago-movie-trailer-2_h720p.mov",
                "mediaConsumptionGuidance": "watch the whole thing, why not."
              }
            }]);

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getTopExplanationsAllTime.apply(this, arguments);
}

function getTopConceptsAllTime() {
  return _getTopConceptsAllTime.apply(this, arguments);
} // returns array of explanations for a concept sorted in rank order


function _getTopConceptsAllTime() {
  _getTopConceptsAllTime = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8() {
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", [{
              "conceptName": "Integrals",
              // these need to be transformed into - instead of space
              "explanationCount": 10
            }, {
              "conceptName": "Derivatives",
              // these need to be transformed into - instead of space
              "explanationCount": 10
            }, {
              "conceptName": "Limits",
              // these need to be transformed into - instead of space
              "explanationCount": 10
            }, {
              "conceptName": "Infinity",
              // these need to be transformed into - instead of space
              "explanationCount": 10
            }, {
              "conceptName": "Logarithm",
              // these need to be transformed into - instead of space
              "explanationCount": 10
            }]);

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _getTopConceptsAllTime.apply(this, arguments);
}

function getConceptExplanations() {
  return _getConceptExplanations.apply(this, arguments);
}

function _getConceptExplanations() {
  _getConceptExplanations = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee9() {
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", [{
              "explanationID": "6CpE8XLCBYuMVAFr3wKE",
              "concept": "integrals",
              "authorUserID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "authorAvatarUrl": "/images/temp-avatar.jpg",
              "authorDisplayName": "Barack Obama",
              "explanation": {
                "type": "text",
                //audio, photo, video, youtube, tweet, text
                "introText": "Here is my explanation. Williamsburg pop-up disrupt selvage street art knausgaard. Enamel pin bespoke bicycle rights, craft beer mustache chartreuse cronut cred actually. Jean shorts hexagon art party pop-up four loko scenester, retro four dollar toast meggings gluten-free.",
                "mediaLink": "",
                "mediaConsumptionGuidance": ""
              }
            }, {
              "explanationID": "6CpE8XLCBYuMVAFr3wKE",
              "concept": "integrals",
              "authorUserID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "authorAvatarUrl": "/images/temp-avatar.jpg",
              "authorDisplayName": "Barack Obama",
              "explanation": {
                "type": "tweet",
                //audio, photo, video, youtube, tweet, text
                "introText": "This explains this well",
                "mediaLink": "https://twitter.com/fredwilson/status/1148358347428642817",
                "mediaConsumptionGuidance": ""
              }
            }, {
              "explanationID": "6CpE8XLCBYuMVAFr3wKE",
              "concept": "integrals",
              "authorUserID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "authorAvatarUrl": "/images/temp-avatar.jpg",
              "authorDisplayName": "Barack Obama",
              "explanation": {
                "type": "youtube",
                //audio, photo, video, youtube, tweet, text
                "introText": "This is a good video",
                "mediaLink": "https://www.youtube.com/watch?v=Q-K3O9styao",
                "mediaConsumptionGuidance": "Watch from minute 1:30 to 4:40"
              }
            }, {
              "explanationID": "6CpE8XLCBYuMVAFr3wKE",
              "concept": "integrals",
              "authorUserID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "authorAvatarUrl": "/images/temp-avatar.jpg",
              "authorDisplayName": "Barack Obama",
              "explanation": {
                "type": "link",
                //audio, photo, video, youtube, tweet, text, link
                "introText": "This is a good blog post",
                "mediaLink": "https://waitbutwhy.com/2016/03/my-ted-talk.html",
                "mediaConsumptionGuidance": ""
              }
            }, {
              "explanationID": "6CpE8XLCBYuMVAFr3wKE",
              "concept": "integrals",
              "authorUserID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "authorAvatarUrl": "/images/temp-avatar.jpg",
              "authorDisplayName": "Barack Obama",
              "explanation": {
                "type": "video",
                //audio, photo, video, youtube, tweet, text
                "introText": "This is a good video",
                "mediaLink": "http://movietrailers.apple.com/movies/wb/the-lego-ninjago-movie/the-lego-ninjago-movie-trailer-2_h720p.mov",
                "mediaConsumptionGuidance": "watch the whole thing, why not."
              }
            }]);

          case 1:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _getConceptExplanations.apply(this, arguments);
}

module.exports = {
  firebase: firebase,
  logUserIn: logUserIn,
  getLoggedInUser: getLoggedInUser,
  getTopConceptsAllTime: getTopConceptsAllTime,
  getTopCreatorsAllTime: getTopCreatorsAllTime,
  getTopExplanationsAllTime: getTopExplanationsAllTime,
  getConceptsThatNeedLove: getConceptsThatNeedLove,
  getConceptExplanations: getConceptExplanations
};

/***/ })

})
//# sourceMappingURL=index.js.8cced6ed2293c91d33e1.hot-update.js.map