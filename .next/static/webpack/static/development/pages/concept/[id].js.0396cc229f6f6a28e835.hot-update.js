webpackHotUpdate("static/development/pages/concept/[id].js",{

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");

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

function getTwitterEmbed() {
  return _getTwitterEmbed.apply(this, arguments);
}

function _getTwitterEmbed() {
  _getTwitterEmbed = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
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
//# sourceMappingURL=[id].js.0396cc229f6f6a28e835.hot-update.js.map