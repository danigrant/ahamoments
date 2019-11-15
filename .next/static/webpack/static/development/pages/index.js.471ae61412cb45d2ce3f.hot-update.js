webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ConceptCardSectionForNewConceptsNeedingLove.js":
/*!*******************************************************************!*\
  !*** ./components/ConceptCardSectionForNewConceptsNeedingLove.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardSection */ "./components/CardSection.js");
/* harmony import */ var _MultiAvatarUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiAvatarUnit */ "./components/MultiAvatarUnit.js");
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/ConceptCardSectionForNewConceptsNeedingLove.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ConceptCardSectionForNewConceptsNeedingLove = function ConceptCardSectionForNewConceptsNeedingLove(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "columns-parent-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "column-70-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(Link, {
    href: "/concept/".concat(props.concepts[0].conceptName),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h2", {
    className: "link-no-color-change",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, conceptToDisplayName(props.concepts[0].conceptName)))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.concepts[0].numContributors > 0 && __jsx(_MultiAvatarUnit__WEBPACK_IMPORTED_MODULE_2__["default"], {
    avatars: props.concepts[0].contributorAvatars,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), props.concepts[0].numContributors == 0 && __jsx("p", {
    className: "font-color-light-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "no one has contributed an explanation yet"), props.concepts[0].numContributors > 0 && __jsx("p", {
    className: "follows-multi-avatar-unit font-color-light-grey inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, props.concepts[0].numContributors > 4 ? "+ ".concat(props.concepts[0].numContributors, " others have added explanations") : 'have added explanations'))), __jsx("div", {
    className: "column-30-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "action-button button background-purple rounded-border font-med font-bold-extra",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Contribute")))));
};

/* harmony default export */ __webpack_exports__["default"] = (ConceptCardSectionForNewConceptsNeedingLove);

/***/ })

})
//# sourceMappingURL=index.js.471ae61412cb45d2ce3f.hot-update.js.map