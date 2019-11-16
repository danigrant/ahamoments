webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

var _nodeHtmlParser = __webpack_require__(/*! node-html-parser */ "./node_modules/node-html-parser/dist/index.js");

var conceptToDisplayName = function conceptToDisplayName(concept) {
  // replace - with space
  return concept.replace("-", " ");
}; //audio, photo, video, youtube, tweet, text, link


var explanationTypeToDisplayType = function explanationTypeToDisplayType(explanationType) {
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

var generateFilePathAndName = function generateFilePathAndName(fileType, userID, concept) {
  var randomID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return "/".concat(concept, "/").concat(fileType, "/").concat(userID, "/").concat(randomID);
};

function getTwitterEmbed(_x) {
  return _getTwitterEmbed.apply(this, arguments);
}

function _getTwitterEmbed() {
  _getTwitterEmbed = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(tweetUrl) {
    var twitterUser, twitterStatus, res, text;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            twitterUser = tweetUrl.split('twitter.com/')[1].split('/')[0];
            twitterStatus = tweetUrl.split('status/')[1].split('?')[0];
            _context.next = 4;
            return fetch("https://twitter-get-embed-code-proxy.herokuapp.com/twitter-embed-code?name=kylesamani&status=1148350276983824385");

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.text();

          case 7:
            text = _context.sent;
            console.log();
            return _context.abrupt("return", text);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getTwitterEmbed.apply(this, arguments);
}

module.exports = {
  conceptToDisplayName: conceptToDisplayName,
  explanationTypeToDisplayType: explanationTypeToDisplayType,
  generateFilePathAndName: generateFilePathAndName,
  getTwitterEmbed: getTwitterEmbed
};

/***/ })

})
//# sourceMappingURL=_app.js.269c1890c00ad92761e8.hot-update.js.map