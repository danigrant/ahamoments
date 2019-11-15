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
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ConceptCardSectionForNewConceptsNeedingLove);

/***/ }),

/***/ "./components/NewConceptsNeedExplanationsCard.js":
/*!*******************************************************!*\
  !*** ./components/NewConceptsNeedExplanationsCard.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardSection */ "./components/CardSection.js");
/* harmony import */ var _MultiAvatarUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MultiAvatarUnit */ "./components/MultiAvatarUnit.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ConceptCardSectionForNewConceptsNeedingLove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConceptCardSectionForNewConceptsNeedingLove */ "./components/ConceptCardSectionForNewConceptsNeedingLove.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_utils__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/danigrant/Projects/ahamoments/components/NewConceptsNeedExplanationsCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var NewConceptsNeedExplanationsCard = function NewConceptsNeedExplanationsCard(props) {
  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("p", {
    className: "font-color-light-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Contribute wacky and wonderful explanations to these ideas.")), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "columns-parent-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "column-70-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/concept/".concat(props.concepts[0].conceptName),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h2", {
    className: "link-no-color-change",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["conceptToDisplayName"])(props.concepts[0].conceptName)))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.concepts[0].numContributors > 0 && __jsx(_MultiAvatarUnit__WEBPACK_IMPORTED_MODULE_3__["default"], {
    avatars: props.concepts[0].contributorAvatars,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), props.concepts[0].numContributors == 0 && __jsx("p", {
    className: "font-color-light-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "no one has contributed an explanation yet"), props.concepts[0].numContributors > 0 && __jsx("p", {
    className: "follows-multi-avatar-unit font-color-light-grey inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, props.concepts[0].numContributors > 4 ? "+ ".concat(props.concepts[0].numContributors, " others have added explanations") : 'have added explanations'))), __jsx("div", {
    className: "column-30-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "action-button button background-purple rounded-border font-med font-bold-extra",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Contribute")))), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "columns-parent-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "column-70-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/concept/integral",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("h2", {
    className: "link-no-color-change",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Integrals"))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_MultiAvatarUnit__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("p", {
    className: "follows-multi-avatar-unit font-color-light-grey inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "+ 3 others have added explanations"))), __jsx("div", {
    className: "column-30-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "action-button float-right button background-purple rounded-border font-med font-bold-extra",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Contribute")))), __jsx(_CardSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "columns-parent-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: "column-70-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("p", {
    className: "font-color-light-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "+ ".concat(props.totalConcepts, " other ideas"))), __jsx("div", {
    className: "column-30-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: "action-button float-right button background-grey light-border rounded-border font-med font-bold-extra",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Expand")))));
};

/* harmony default export */ __webpack_exports__["default"] = (NewConceptsNeedExplanationsCard);

/***/ })

})
//# sourceMappingURL=index.js.bf6976c32dda7ff2365a.hot-update.js.map