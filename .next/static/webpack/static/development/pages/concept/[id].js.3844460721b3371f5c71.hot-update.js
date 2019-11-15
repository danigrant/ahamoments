webpackHotUpdate("static/development/pages/concept/[id].js",{

/***/ "./pages/concept/[id].js":
/*!*******************************!*\
  !*** ./pages/concept/[id].js ***!
  \*******************************/
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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Card */ "./components/Card.js");
/* harmony import */ var _components_CardSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/CardSection */ "./components/CardSection.js");
/* harmony import */ var _components_AddExplanationCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/AddExplanationCard */ "./components/AddExplanationCard.js");
/* harmony import */ var _components_ExplanationCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/ExplanationCard */ "./components/ExplanationCard.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Loading */ "./components/Loading.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_utils_firebase__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);







var _jsxFileName = "/Users/danigrant/Projects/ahamoments/pages/concept/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;











var ConceptPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ConceptPage, _React$Component);

  function ConceptPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ConceptPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ConceptPage).call(this, props));
    _this.state = {
      conceptExplanationsArray: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ConceptPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var router;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                router = this.props.router;
                _context.t0 = this;
                _context.next = 4;
                return Object(_utils_firebase__WEBPACK_IMPORTED_MODULE_15__["getConceptExplanations"])(router.query.id);

              case 4:
                _context.t1 = _context.sent;
                _context.t2 = {
                  conceptExplanationsArray: _context.t1
                };

                _context.t0.setState.call(_context.t0, _context.t2);

              case 7:
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
      var router = this.props.router;
      {
        if (!this.state.conceptExplanationsArray.length) {
          return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_14__["default"], {
            loggedIn: this.props.loggedIn,
            loggedInUser: this.props.loggedInUser,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          });
        } else {
          return __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
            loggedIn: this.props.loggedIn,
            loggedInUser: this.props.loggedInUser,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, __jsx("div", {
            className: "concept-title-bar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }, __jsx("h1", {
            className: "font-lrg font-bold-med inline-block capitalize",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }, router.query.id), __jsx("p", {
            className: "font-color-light-grey inline-block margin-left",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          }, "originally asked by @bofirstdog")), __jsx(_components_AddExplanationCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }), __jsx("h1", {
            className: "margin-top-lrg font-lrg font-bold-med inline-block",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, "All of the wacky and wonderful ways to explain a ", router.query.id, " "), __jsx("p", {
            className: "font-color-light-grey",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }, "There are 114 explanations here. Some will work for you, some won\u2019t.  Keep going until you find one that gives you that aha! moment."), __jsx("div", {
            className: "margin-top-sml",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, this.state.currentProfileUser.explanations.map(function (e) {
            return __jsx(_components_ExplanationCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
              key: e.explanationID,
              explanation: e,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: this
            });
          }), __jsx(_components_ExplanationCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }), __jsx(_components_ExplanationCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }), __jsx(_components_ExplanationCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }))));
        }
      }
    }
  }]);

  return ConceptPage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_16__["withRouter"])(ConceptPage));

/***/ })

})
//# sourceMappingURL=[id].js.3844460721b3371f5c71.hot-update.js.map