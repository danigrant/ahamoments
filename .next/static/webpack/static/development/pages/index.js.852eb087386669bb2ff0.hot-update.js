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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_utils__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/ConceptCardSectionForNewConceptsNeedingLove.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ConceptCardSectionForNewConceptsNeedingLove = function ConceptCardSectionForNewConceptsNeedingLove(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "columns-parent-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "column-70-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/concept/".concat(props.concept.conceptName),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h2", {
    className: "link-no-color-change",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["conceptToDisplayName"])(props.concept.conceptName)))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.concept.numContributors > 0 && __jsx(_MultiAvatarUnit__WEBPACK_IMPORTED_MODULE_2__["default"], {
    avatars: props.concept.contributorAvatars,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), props.concept.numContributors == 0 && __jsx("p", {
    className: "font-color-light-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "no one has contributed an explanation yet"), props.concept.numContributors > 0 && __jsx("p", {
    className: "follows-multi-avatar-unit font-color-light-grey inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.concept.numContributors > 4 ? "+ ".concat(props.concept.numContributors, " others have added explanations") : 'have added explanations'))), __jsx("div", {
    className: "column-30-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "action-button button background-purple rounded-border font-med font-bold-extra",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Contribute")))));
};

/* harmony default export */ __webpack_exports__["default"] = (ConceptCardSectionForNewConceptsNeedingLove);

/***/ })

})
//# sourceMappingURL=index.js.852eb087386669bb2ff0.hot-update.js.map