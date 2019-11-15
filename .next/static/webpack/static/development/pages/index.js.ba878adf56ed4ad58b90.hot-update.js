webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* harmony import */ var _components_CardSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CardSection */ "./components/CardSection.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_MultiAvatarUnit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/MultiAvatarUnit */ "./components/MultiAvatarUnit.js");
/* harmony import */ var _components_NewConceptsNeedExplanationsCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/NewConceptsNeedExplanationsCard */ "./components/NewConceptsNeedExplanationsCard.js");
/* harmony import */ var _components_ExplanationCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ExplanationCard */ "./components/ExplanationCard.js");
/* harmony import */ var _components_TopCreatorsOfWeekSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/TopCreatorsOfWeekSection */ "./components/TopCreatorsOfWeekSection.js");
/* harmony import */ var _components_TopConceptsOfWeekSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/TopConceptsOfWeekSection */ "./components/TopConceptsOfWeekSection.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_utils_firebase__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");







var _jsxFileName = "/Users/danigrant/Projects/ahamoments/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;














var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));
    _this.state = {
      topExplanationsArray: [],
      conceptsNeedingLoveArray: [],
      topCreatorsArray: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var tempConceptsNeedingLove;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_18__["getConceptsThatNeedLove"])();

              case 2:
                tempConceptsNeedingLove = _context.sent;
                _context.t0 = this;
                _context.next = 6;
                return Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_18__["getTopExplanationsAllTime"])();

              case 6:
                _context.t1 = _context.sent;
                _context.t2 = tempConceptsNeedingLove.conceptsNeedingLoveToDisplay;
                _context.t3 = tempConceptsNeedingLove.totalAmountOfConceptsNeedingLove;
                _context.next = 11;
                return Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_18__["getTopCreatorsAllTime"])();

              case 11:
                _context.t4 = _context.sent;
                _context.t5 = {
                  topExplanationsArray: _context.t1,
                  conceptsNeedingLoveArray: _context.t2,
                  totalConceptsNeedingLove: _context.t3,
                  topCreatorsArray: _context.t4
                };

                _context.t0.setState.call(_context.t0, _context.t5);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      {
        if (!this.state.topExplanationsArray.length || !this.state.conceptsNeedingLoveArray.length || !this.state.topCreatorsArray.length) {
          return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_19__["default"], {
            loggedIn: this.props.loggedIn,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          });
        } else {
          return __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
            loggedIn: this.props.loggedIn,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }, __jsx("div", {
            className: "columns-parent-div",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, __jsx("div", {
            className: "column-70-p",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, __jsx("div", {
            className: "column-section",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, __jsx("h1", {
            className: "font-lrg font-bold-med",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, "Ideas looking for Aha Moments"), __jsx(_components_NewConceptsNeedExplanationsCard__WEBPACK_IMPORTED_MODULE_14__["default"], {
            concepts: this.state.conceptsNeedingLoveArray,
            totalConcepts: this.state.totalConceptsNeedingLove,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          })), __jsx("div", {
            className: "column-section",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, __jsx("h1", {
            className: "font-lrg font-bold-med",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, "The most \uD83D\uDD25 Aha Moment creations right now"), this.state.topExplanationsArray.map(function (e) {
            return __jsx(_components_ExplanationCard__WEBPACK_IMPORTED_MODULE_15__["default"], {
              key: e.explanationID,
              explanation: e,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              },
              __self: this
            });
          }))), __jsx("div", {
            className: "column-30-p",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, __jsx("div", {
            className: "column-section",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, __jsx("h1", {
            className: "font-lrg font-bold-med",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          }, "Top Creators This Week"), __jsx(_components_TopCreatorsOfWeekSection__WEBPACK_IMPORTED_MODULE_16__["default"], {
            creators: this.state.topCreatorsArray,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          })), __jsx("div", {
            className: "column-section",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }, __jsx("h1", {
            className: "font-lrg font-bold-med",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }, "Top Concepts This Week"), __jsx(_components_TopConceptsOfWeekSection__WEBPACK_IMPORTED_MODULE_17__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }))))));
        }
      }
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.ba878adf56ed4ad58b90.hot-update.js.map