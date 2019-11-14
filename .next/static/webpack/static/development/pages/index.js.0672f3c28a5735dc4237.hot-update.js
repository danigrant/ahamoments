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
      return "interpretive dance";
      break;

    default: // code block

  }
};

module.exports = {
  conceptToDisplayName: conceptToDisplayName,
  explanationTypeToDisplayType: explanationTypeToDisplayType
};

/***/ })

})
//# sourceMappingURL=index.js.0672f3c28a5735dc4237.hot-update.js.map