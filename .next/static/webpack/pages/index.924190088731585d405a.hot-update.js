webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_MovieGallery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/MovieGallery */ "./components/MovieGallery.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);







var _jsxFileName = "C:\\Users\\HP\\Desktop\\movie-master\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













var styles = function styles(theme) {
  return {
    headContainer: {
      margin: '45px auto 10px',
      textAlign: 'center'
    },
    titleField: {
      width: '40%',
      margin: '20px 10px'
    },
    yearField: {
      width: '15%',
      margin: '20px 10px'
    },
    movieContainer: {
      maxWidth: '78%',
      margin: '10px auto 40px'
    },
    btnContainer: {
      textAlign: 'center',
      marginBottom: '20px'
    },
    buttonActions: {
      margin: '5px',
      padding: '8px 20px',
      color: '#fff',
      backgroundColor: '#ee6e73',
      '&:hover': {
        background: '#e83940'
      }
    }
  };
};

var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      movieTitle: '',
      movieYear: '',
      movieArray: []
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (e) {
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value)));

      setTimeout(function () {
        console.log(_this.state);
      }, 500);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onSearch", function () {
      if (_this.state.movieTitle && _this.state.movieYear) {
        axios__WEBPACK_IMPORTED_MODULE_17___default.a.get('http://www.omdbapi.com/?apikey=50f7c729&type=series&s=' + _this.state.movieTitle + '&y=' + _this.state.movieYear).then(function (res) {
          var movieArray = res.data.Search;

          _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
            movieArray: movieArray
          }));
        });
      } else if (_this.state.movieTitle && _this.state.movieYear === '') {
        axios__WEBPACK_IMPORTED_MODULE_17___default.a.get('http://www.omdbapi.com/?apikey=50f7c729&type=series&s=' + _this.state.movieTitle).then(function (res) {
          var movieArray = res.data.Search;

          _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
            movieArray: movieArray
          }));
        });
      } // setTimeout(() => {
      //     this.setState({
      //         movieTitle: '',
      //         movieYear: '',
      //         movieArray: []
      //     });
      // }, 5000);

    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    // setTimeout(() => {
    //     axios
    //         .get(
    //             'http://www.omdbapi.com/?apikey=50f7c729&s=' +
    //                 this.state.movieTitle +
    //                 '&type=series'
    //         )
    //         .then((res) => {
    //             var movieArray = res.data.Search;
    //             this.setState({
    //                 ...this.state,
    //                 movieArray: movieArray
    //             });
    //         });
    // }, 500);
    value: function render() {
      var classes = this.props.classes;
      return __jsx("div", {
        className: "mainDiv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }
      }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }
      }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
        maxWidth: "lg",
        className: classes.headContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h4",
        gutterBottom: true,
        className: classes.mainHeading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }
      }, "Search for any movie"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: "Movie Title",
        name: "movieTitle",
        margin: "normal",
        className: classes.titleField,
        onChange: this.handleChange,
        color: "secondary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }
      }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: "Year",
        name: "movieYear",
        margin: "normal",
        className: classes.yearField,
        onChange: this.handleChange,
        color: "secondary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }
      })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.btnContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "contained",
        color: "secondary",
        className: classes.buttonActions,
        startIcon: __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 36
          }
        }),
        onClick: this.onSearch,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }
      }, "Search Movie")), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.movieContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 17
        }
      }, __jsx(_components_MovieGallery__WEBPACK_IMPORTED_MODULE_16__["default"], {
        movieArray: this.state.movieArray,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 21
        }
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Index.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_9__["withStyles"])(styles)(Index));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJoZWFkQ29udGFpbmVyIiwibWFyZ2luIiwidGV4dEFsaWduIiwidGl0bGVGaWVsZCIsIndpZHRoIiwieWVhckZpZWxkIiwibW92aWVDb250YWluZXIiLCJtYXhXaWR0aCIsImJ0bkNvbnRhaW5lciIsIm1hcmdpbkJvdHRvbSIsImJ1dHRvbkFjdGlvbnMiLCJwYWRkaW5nIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kIiwiSW5kZXgiLCJtb3ZpZVRpdGxlIiwibW92aWVZZWFyIiwibW92aWVBcnJheSIsImUiLCJzZXRTdGF0ZSIsInN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiU2VhcmNoIiwiY2xhc3NlcyIsInByb3BzIiwibWFpbkhlYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJvblNlYXJjaCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZCQyxpQkFBYSxFQUFFO0FBQ1hDLFlBQU0sRUFBRSxnQkFERztBQUVYQyxlQUFTLEVBQUU7QUFGQSxLQURRO0FBS3ZCQyxjQUFVLEVBQUU7QUFDUkMsV0FBSyxFQUFFLEtBREM7QUFFUkgsWUFBTSxFQUFFO0FBRkEsS0FMVztBQVN2QkksYUFBUyxFQUFFO0FBQ1BELFdB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQXRDSixDQURKO0FBNENIOzs7O0VBdEhlcUIsK0M7O0FBeUhwQnhCLEtBQUssQ0FBQ3lCLFNBQU4sR0FBa0I7QUFDZE4sU0FBTyxFQUFFTyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURaLENBQWxCO0FBSWVDLHFJQUFVLENBQUM5QyxNQUFELENBQVYsQ0FBbUJpQixLQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkyNDE5MDA4ODczMTU4NWQ0MDVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBNb3ZpZUdhbGxlcnkgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpZUdhbGxlcnknO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gICAgaGVhZENvbnRhaW5lcjoge1xyXG4gICAgICAgIG1hcmdpbjogJzQ1cHggYXV0byAxMHB4JyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgdGl0bGVGaWVsZDoge1xyXG4gICAgICAgIHdpZHRoOiAnNDAlJyxcclxuICAgICAgICBtYXJnaW46ICcyMHB4IDEwcHgnXHJcbiAgICB9LFxyXG4gICAgeWVhckZpZWxkOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxNSUnLFxyXG4gICAgICAgIG1hcmdpbjogJzIwcHggMTBweCdcclxuICAgIH0sXHJcbiAgICBtb3ZpZUNvbnRhaW5lcjoge1xyXG4gICAgICAgIG1heFdpZHRoOiAnNzglJyxcclxuICAgICAgICBtYXJnaW46ICcxMHB4IGF1dG8gNDBweCdcclxuICAgIH0sXHJcbiAgICBidG5Db250YWluZXI6IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uQWN0aW9uczoge1xyXG4gICAgICAgIG1hcmdpbjogJzVweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzhweCAyMHB4JyxcclxuICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZTZlNzMnLFxyXG4gICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2U4Mzk0MCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgbW92aWVUaXRsZTogJycsXHJcbiAgICAgICAgbW92aWVZZWFyOiAnJyxcclxuICAgICAgICBtb3ZpZUFycmF5OiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1vdmllVGl0bGUgJiYgdGhpcy5zdGF0ZS5tb3ZpZVllYXIpIHtcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAgIC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT01MGY3YzcyOSZ0eXBlPXNlcmllcyZzPScgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1vdmllVGl0bGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJnk9JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubW92aWVZZWFyXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vdmllQXJyYXkgPSByZXMuZGF0YS5TZWFyY2g7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmllQXJyYXk6IG1vdmllQXJyYXlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5tb3ZpZVRpdGxlICYmIHRoaXMuc3RhdGUubW92aWVZZWFyID09PSAnJykge1xyXG4gICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAgICAgLmdldChcclxuICAgICAgICAgICAgICAgICAgICAnaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTUwZjdjNzI5JnR5cGU9c2VyaWVzJnM9JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubW92aWVUaXRsZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtb3ZpZUFycmF5ID0gcmVzLmRhdGEuU2VhcmNoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZpZUFycmF5OiBtb3ZpZUFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgICAgICAgbW92aWVUaXRsZTogJycsXHJcbiAgICAgICAgLy8gICAgICAgICBtb3ZpZVllYXI6ICcnLFxyXG4gICAgICAgIC8vICAgICAgICAgbW92aWVBcnJheTogW11cclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfSwgNTAwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICAgIGF4aW9zXHJcbiAgICAvLyAgICAgICAgIC5nZXQoXHJcbiAgICAvLyAgICAgICAgICAgICAnaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTUwZjdjNzI5JnM9JyArXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb3ZpZVRpdGxlICtcclxuICAgIC8vICAgICAgICAgICAgICAgICAnJnR5cGU9c2VyaWVzJ1xyXG4gICAgLy8gICAgICAgICApXHJcbiAgICAvLyAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHZhciBtb3ZpZUFycmF5ID0gcmVzLmRhdGEuU2VhcmNoO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgIC8vICAgICAgICAgICAgICAgICBtb3ZpZUFycmF5OiBtb3ZpZUFycmF5XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyB9LCA1MDApO1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluRGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluSGVhZGluZ31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaCBmb3IgYW55IG1vdmllXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb3ZpZSBUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb3ZpZVRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlllYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW92aWVZZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnllYXJGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuYnRuQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25BY3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEljb249ezxTZWFyY2hJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoIE1vdmllXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8TW92aWVHYWxsZXJ5IG1vdmllQXJyYXk9e3RoaXMuc3RhdGUubW92aWVBcnJheX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5JbmRleC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShJbmRleCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=