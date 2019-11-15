webpackHotUpdate("static/development/pages/explainer/[id].js",{

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
            return _context.abrupt("return", {
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
            });

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
} // various utils


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

function getUserByID(_x) {
  return _getUserByID.apply(this, arguments);
} // get and return various data
// returns 2 concepts for the front page that need love as an obj


function _getUserByID() {
  _getUserByID = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(userID) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", {
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
            });

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getUserByID.apply(this, arguments);
}

function getConceptsThatNeedLove() {
  return _getConceptsThatNeedLove.apply(this, arguments);
} // returns top 5 creators in an array


function _getConceptsThatNeedLove() {
  _getConceptsThatNeedLove = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4() {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", {
              "totalAmountOfConceptsNeedingLove": 43,
              "conceptsNeedingLoveToDisplay": [{
                "conceptName": "Integrals",
                "numContributors": 11,
                "contributorAvatars": ["/images/temp-avatar.jpg", "/images/temp-avatar2.jpg", "/images/temp-avatar3.jpg", "/images/temp-avatar4.jpg"]
              }, {
                "conceptName": "Limits",
                "numContributors": 4,
                "contributorAvatars": ["/images/temp-avatar.jpg", "/images/temp-avatar2.jpg", "/images/temp-avatar3.jpg", "/images/temp-avatar4.jpg"]
              }]
            });

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getConceptsThatNeedLove.apply(this, arguments);
}

function getTopCreatorsAllTime() {
  return _getTopCreatorsAllTime.apply(this, arguments);
} // returns array of top 5 explanations


function _getTopCreatorsAllTime() {
  _getTopCreatorsAllTime = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5() {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", [{
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
            }, {
              "displayName": "Hasan Minhaj",
              "userID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "avatarUrl": "/images/temp-avatar2.jpg",
              "ahaMomentCount": 4,
              "explanationCount": 5,
              "reactionsCount": {
                "gotIt": 1,
                "laughing": 2,
                "shocked": 3
              }
            }, {
              "displayName": "Stephen Colbert",
              "userID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "avatarUrl": "/images/temp-avatar3.jpg",
              "ahaMomentCount": 4,
              "explanationCount": 5,
              "reactionsCount": {
                "gotIt": 1,
                "laughing": 2,
                "shocked": 3
              }
            }, {
              "displayName": "John Oliver",
              "userID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "avatarUrl": "/images/temp-avatar4.jpg",
              "ahaMomentCount": 4,
              "explanationCount": 5,
              "reactionsCount": {
                "gotIt": 1,
                "laughing": 2,
                "shocked": 3
              }
            }, {
              "displayName": "Trevor Noah",
              "userID": "MGIVZ1AERHSlK3eojuKUkaverHw1",
              "avatarUrl": "/images/temp-avatar5.jpg",
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
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getTopCreatorsAllTime.apply(this, arguments);
}

function getTopExplanationsAllTime() {
  return _getTopExplanationsAllTime.apply(this, arguments);
}

function _getTopExplanationsAllTime() {
  _getTopExplanationsAllTime = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6() {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", [{
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
              "explanationID": "eK2dxVLq5je8dfLWJjZL",
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
              "explanationID": "g1oC8rsxdEdjEce34Ick",
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
              "explanationID": "h81W5hM76wl8PhdMe0oX",
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
              "explanationID": "h9U3t1rg4gUj3amJ9IUW",
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
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getTopExplanationsAllTime.apply(this, arguments);
}

function getTopConceptsAllTime() {
  return _getTopConceptsAllTime.apply(this, arguments);
} // returns array of explanations for a concept sorted in rank order


function _getTopConceptsAllTime() {
  _getTopConceptsAllTime = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7() {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", [{
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
            }]);

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getTopConceptsAllTime.apply(this, arguments);
}

function getConceptExplanations() {
  return _getConceptExplanations.apply(this, arguments);
}

function _getConceptExplanations() {
  _getConceptExplanations = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8() {
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", [{
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
              "explanationID": "eK2dxVLq5je8dfLWJjZL",
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
              "explanationID": "g1oC8rsxdEdjEce34Ick",
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
              "explanationID": "h81W5hM76wl8PhdMe0oX",
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
              "explanationID": "h9U3t1rg4gUj3amJ9IUW",
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
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _getConceptExplanations.apply(this, arguments);
}

module.exports = {
  firebase: firebase,
  logUserIn: logUserIn,
  getLoggedInUser: getLoggedInUser,
  getUserNameByID: getUserNameByID,
  getTopConceptsAllTime: getTopConceptsAllTime,
  getTopCreatorsAllTime: getTopCreatorsAllTime,
  getTopExplanationsAllTime: getTopExplanationsAllTime,
  getConceptsThatNeedLove: getConceptsThatNeedLove,
  getConceptExplanations: getConceptExplanations,
  getUserExplanations: getUserExplanations
};

/***/ })

})
//# sourceMappingURL=[id].js.269de1a2e900221104cd.hot-update.js.map