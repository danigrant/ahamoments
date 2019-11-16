webpackHotUpdate("static/development/pages/_app.js",{

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

__webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");

var _utils = __webpack_require__(/*! ./utils */ "./utils/utils.js");

/*
  This file contains firebase config and instantiation
  contains functions that interact with the db

  This file also holds all of the auth functions
  logUserIn
  getLoggedInUser <-- returns false if no user logged in
*/
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
var provider = new firebase.auth.TwitterAuthProvider();
var storage = firebase.app().storage();
var storageRef = firebase.app().storage().ref(); // auth

function saveUserToDB(_x, _x2, _x3, _x4) {
  return _saveUserToDB.apply(this, arguments);
}

function _saveUserToDB() {
  _saveUserToDB = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(displayName, email, photoURL, uid) {
    var snapshot, newUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return usersRef.where('email', '==', email).get();

          case 2:
            snapshot = _context.sent;

            // only add user to db if the user is new
            if (snapshot.empty) {
              newUser = {
                "avatarUrl": photoURL,
                "displayName": displayName,
                "email": email,
                "userID": uid
              };
              usersRef.add(newUser);
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _saveUserToDB.apply(this, arguments);
}

function getLoggedInUser() {
  return _getLoggedInUser.apply(this, arguments);
}

function _getLoggedInUser() {
  _getLoggedInUser = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            user = firebase.auth().currentUser;

            if (user) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", false);

          case 3:
            return _context2.abrupt("return", {
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
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getLoggedInUser.apply(this, arguments);
}

function logUserIn() {
  return _logUserIn.apply(this, arguments);
} // various utils
// returns everything plus explanations


function _logUserIn() {
  _logUserIn = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
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
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _logUserIn.apply(this, arguments);
}

function getUserByID(_x5) {
  return _getUserByID.apply(this, arguments);
}

function _getUserByID() {
  _getUserByID = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(userID) {
    var snapshot, data, explanationSnapshot;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return usersRef.where('userID', '==', userID).get();

          case 2:
            snapshot = _context4.sent;
            data = {};
            _context4.next = 6;
            return snapshot.forEach(function (doc) {
              var docData = doc.data();
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
            });

          case 6:
            _context4.next = 8;
            return explanationsRef.where('authorUserID', '==', userID).get();

          case 8:
            explanationSnapshot = _context4.sent;
            _context4.next = 11;
            return explanationSnapshot.forEach(function (doc) {
              var explanationDocData = doc.data();
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

          case 11:
            return _context4.abrupt("return", data);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getUserByID.apply(this, arguments);
}

function getUserProfileInfoByUserID(_x6) {
  return _getUserProfileInfoByUserID.apply(this, arguments);
}

function _getUserProfileInfoByUserID() {
  _getUserProfileInfoByUserID = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(userID) {
    var snapshot, data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return usersRef.where('userID', '==', userID).get();

          case 2:
            snapshot = _context5.sent;
            data = {};
            _context5.next = 6;
            return snapshot.forEach(function (doc) {
              var docData = doc.data();
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

          case 6:
            return _context5.abrupt("return", data);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getUserProfileInfoByUserID.apply(this, arguments);
}

function getDocIDByUserID(_x7) {
  return _getDocIDByUserID.apply(this, arguments);
}

function _getDocIDByUserID() {
  _getDocIDByUserID = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(userID) {
    var snapshot, userDocID;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return usersRef.where('userID', '==', userID).get();

          case 2:
            snapshot = _context6.sent;
            userDocID = "";
            _context6.next = 6;
            return snapshot.forEach(function (doc) {
              userDocID = doc.id;
            });

          case 6:
            return _context6.abrupt("return", userDocID);

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getDocIDByUserID.apply(this, arguments);
}

function incrementUserExplanationCount(_x8) {
  return _incrementUserExplanationCount.apply(this, arguments);
}

function _incrementUserExplanationCount() {
  _incrementUserExplanationCount = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(userID) {
    var docID, userRef;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return getDocIDByUserID(userID);

          case 2:
            docID = _context7.sent;
            userRef = usersRef.doc(docID);
            userRef.update({
              explanationCount: increment
            });

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _incrementUserExplanationCount.apply(this, arguments);
}

function getFileURLFromFirebaseStorage() {
  return _getFileURLFromFirebaseStorage.apply(this, arguments);
} // get and return various data


function _getFileURLFromFirebaseStorage() {
  _getFileURLFromFirebaseStorage = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8() {
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _getFileURLFromFirebaseStorage.apply(this, arguments);
}

function saveExplanationToDB(_x9) {
  return _saveExplanationToDB.apply(this, arguments);
}

function _saveExplanationToDB() {
  _saveExplanationToDB = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee9(explanationObj) {
    var newExplanation;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            newExplanation = {
              "concept": explanationObj.concept,
              "authorUserID": explanationObj.authorUserID,
              "authorDisplayName": explanationObj.authorDisplayName,
              "authorAvatarUrl": explanationObj.authorAvatarUrl,
              "datetime": firebase.firestore.Timestamp.now(),
              "explanation": {
                "introText": explanationObj.explanation.introText ? explanationObj.explanation.introText : "",
                "mediaConsumptionGuidance": explanationObj.explanation.mediaConsumptionGuidance ? explanationObj.explanation.mediaConsumptionGuidance : "",
                "mediaLink": explanationObj.explanation.mediaLink ? explanationObj.explanation.mediaLink : "",
                "type": explanationObj.explanation.type
              }
            };
            explanationsRef.add(newExplanation);
            incrementUserExplanationCount(explanationObj.authorUserID);

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _saveExplanationToDB.apply(this, arguments);
}

function saveExplanationWithFileToDB(_x10, _x11, _x12, _x13, _x14) {
  return _saveExplanationWithFileToDB.apply(this, arguments);
}

function _saveExplanationWithFileToDB() {
  _saveExplanationWithFileToDB = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee10(introText, fileToUpload, fileType, userID, concept) {
    var fileName, snapshot, userObj;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            // will also want the user here
            // first upload file to db
            fileName = (0, _utils.generateFilePathAndName)(fileType, userID, concept);
            _context10.next = 3;
            return storageRef.child(fileName).put(fileToUpload);

          case 3:
            snapshot = _context10.sent;

            if (!snapshot.state == "success") {
              console.log("error");
            } // then need to save explanation to firestore
            // first to do that, need some user profile data


            _context10.next = 7;
            return getUserProfileInfoByUserID(userID);

          case 7:
            userObj = _context10.sent;
            _context10.next = 10;
            return saveExplanationToDB({
              "concept": concept,
              "authorUserID": userID,
              "authorDisplayName": userObj.displayName,
              "authorAvatarUrl": userObj.avatarUrl,
              "datetime": firebase.firestore.Timestamp.now(),
              "explanation": {
                "introText": introText,
                "mediaLink": snapshot.metadata.fullPath,
                "type": fileType
              }
            });

          case 10:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _saveExplanationWithFileToDB.apply(this, arguments);
}

function saveWrittenExplanationToDB(_x15, _x16, _x17) {
  return _saveWrittenExplanationToDB.apply(this, arguments);
}

function _saveWrittenExplanationToDB() {
  _saveWrittenExplanationToDB = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee11(text, userID, concept) {
    var cleanText, userObj;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            // first remove any html or scripts because xss
            cleanText = text.replace('<script>', '').replace('onclick', '').replace('onerror').replace('onResize', '').replace('onPropertyChange', '').replace('onMouseEnter', '').replace('onFocus', ''); // https://gist.github.com/JohannesHoppe/5612274
            // then save explanation to firestore
            // first to do that, need some user profile data

            _context11.next = 3;
            return getUserProfileInfoByUserID(userID);

          case 3:
            userObj = _context11.sent;
            _context11.next = 6;
            return saveExplanationToDB({
              "concept": concept,
              "authorUserID": userID,
              "authorDisplayName": userObj.displayName,
              "authorAvatarUrl": userObj.avatarUrl,
              "datetime": firebase.firestore.Timestamp.now(),
              "explanation": {
                "introText": text,
                "type": "text"
              }
            });

          case 6:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _saveWrittenExplanationToDB.apply(this, arguments);
}

function saveExternalLinkExplanationToDB(_x18, _x19, _x20, _x21, _x22, _x23) {
  return _saveExternalLinkExplanationToDB.apply(this, arguments);
} // returns 2 concepts for the front page that need love as an obj


function _saveExternalLinkExplanationToDB() {
  _saveExternalLinkExplanationToDB = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee12(introText, mediaLink, mediaConsumptionGuidance, fileType, userID, concept) {
    var userObj;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return getUserProfileInfoByUserID(userID);

          case 2:
            userObj = _context12.sent;
            _context12.next = 5;
            return saveExplanationToDB({
              "concept": concept,
              "authorUserID": userID,
              "authorDisplayName": userObj.displayName,
              "authorAvatarUrl": userObj.avatarUrl,
              "datetime": firebase.firestore.Timestamp.now(),
              "explanation": {
                "introText": introText,
                "mediaLink": mediaLink,
                "mediaConsumptionGuidance": mediaConsumptionGuidance,
                "type": fileType
              }
            });

          case 5:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _saveExternalLinkExplanationToDB.apply(this, arguments);
}

function getConceptsThatNeedLove() {
  return _getConceptsThatNeedLove.apply(this, arguments);
} // returns top 5 creators in an array


function _getConceptsThatNeedLove() {
  _getConceptsThatNeedLove = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee13() {
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            return _context13.abrupt("return", {
              "totalAmountOfConceptsNeedingLove": 43,
              "conceptsNeedingLoveToDisplay": [{
                "conceptName": "Derivative",
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
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _getConceptsThatNeedLove.apply(this, arguments);
}

function getTopCreatorsAllTime() {
  return _getTopCreatorsAllTime.apply(this, arguments);
} // returns array of top 5 explanations


function _getTopCreatorsAllTime() {
  _getTopCreatorsAllTime = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee14() {
    var snapshot, data;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return usersRef.get();

          case 2:
            snapshot = _context14.sent;
            //.orderBy('score', 'desc').get() <-- need to do this when i have more than one concept to order by
            data = [];
            _context14.next = 6;
            return snapshot.forEach(function (doc) {
              var docData = doc.data();
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

          case 6:
            return _context14.abrupt("return", data);

          case 7:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _getTopCreatorsAllTime.apply(this, arguments);
}

function getTopExplanationsAllTime() {
  return _getTopExplanationsAllTime.apply(this, arguments);
}

function _getTopExplanationsAllTime() {
  _getTopExplanationsAllTime = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee15() {
    var snapshot, data;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return explanationsRef.get();

          case 2:
            snapshot = _context15.sent;
            //.orderBy('score', 'desc').get() <-- need to do this when i have more than one concept to order by
            data = [];
            _context15.next = 6;
            return snapshot.forEach(function (doc) {
              var docData = doc.data();
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

          case 6:
            return _context15.abrupt("return", data);

          case 7:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));
  return _getTopExplanationsAllTime.apply(this, arguments);
}

function getTopConceptsAllTime() {
  return _getTopConceptsAllTime.apply(this, arguments);
} // returns array of explanations for a concept sorted in rank order


function _getTopConceptsAllTime() {
  _getTopConceptsAllTime = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee16() {
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            return _context16.abrupt("return", [{
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
            return _context16.stop();
        }
      }
    }, _callee16);
  }));
  return _getTopConceptsAllTime.apply(this, arguments);
}

function getConceptExplanations(_x24) {
  return _getConceptExplanations.apply(this, arguments);
}

function _getConceptExplanations() {
  _getConceptExplanations = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee17(concept) {
    var formattedConcept, snapshot, data;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            formattedConcept = concept.toLowerCase();
            _context17.next = 3;
            return explanationsRef.where('concept', '==', formattedConcept).get();

          case 3:
            snapshot = _context17.sent;
            //.orderBy('score', 'desc').get()
            data = [];
            _context17.next = 7;
            return snapshot.forEach(function (doc) {
              var docData = doc.data();
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

          case 7:
            return _context17.abrupt("return", data);

          case 8:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));
  return _getConceptExplanations.apply(this, arguments);
}

module.exports = {
  firebase: firebase,
  logUserIn: logUserIn,
  saveUserToDB: saveUserToDB,
  getLoggedInUser: getLoggedInUser,
  getUserByID: getUserByID,
  saveExplanationWithFileToDB: saveExplanationWithFileToDB,
  saveWrittenExplanationToDB: saveWrittenExplanationToDB,
  saveExternalLinkExplanationToDB: saveExternalLinkExplanationToDB,
  getFileURLFromFirebaseStorage: getFileURLFromFirebaseStorage,
  getTopConceptsAllTime: getTopConceptsAllTime,
  getTopCreatorsAllTime: getTopCreatorsAllTime,
  getTopExplanationsAllTime: getTopExplanationsAllTime,
  getConceptsThatNeedLove: getConceptsThatNeedLove,
  getConceptExplanations: getConceptExplanations
};

/***/ })

})
//# sourceMappingURL=_app.js.85f46bc5a2d918c3087f.hot-update.js.map