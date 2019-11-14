webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

    default:
      return "interpretive dance";
  }
};

module.exports = {
  conceptToDisplayName: conceptToDisplayName,
  explanationTypeToDisplayType: explanationTypeToDisplayType
};

/***/ })

})
//# sourceMappingURL=index.js.997b95a14b4e5fb3d4e3.hot-update.js.map