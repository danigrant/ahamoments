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
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/ConceptCardSectionForNewConceptsNeedingLove.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var ConceptCardSectionForNewConceptsNeedingLove = function ConceptCardSectionForNewConceptsNeedingLove(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx(CardSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "columns-parent-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "column-70-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(Link, {
    href: "/concept/".concat(props.concepts[0].conceptName),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h2", {
    className: "link-no-color-change",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, conceptToDisplayName(props.concepts[0].conceptName)))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.concepts[0].numContributors > 0 && __jsx(MultiAvatarUnit, {
    avatars: props.concepts[0].contributorAvatars,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), props.concepts[0].numContributors == 0 && __jsx("p", {
    className: "font-color-light-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "no one has contributed an explanation yet"), props.concepts[0].numContributors > 0 && __jsx("p", {
    className: "follows-multi-avatar-unit font-color-light-grey inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, props.concepts[0].numContributors > 4 ? "+ ".concat(props.concepts[0].numContributors, " others have added explanations") : 'have added explanations'))), __jsx("div", {
    className: "column-30-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "action-button button background-purple rounded-border font-med font-bold-extra",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Contribute")))));
};

/* harmony default export */ __webpack_exports__["default"] = (ConceptCardSectionForNewConceptsNeedingLove);

/***/ })

})
//# sourceMappingURL=index.js.e17e8229b6ff8cb3938c.hot-update.js.map