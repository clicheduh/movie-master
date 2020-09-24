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
      marginBottom: '40px'
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
          return movieArray;
        }).then(function (movieArray) {
          if (movieArray) {
            if (movieArray.length <= 8) {
              _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
                movieArray: movieArray
              }));
            } else {
              movieArray.slice(0, 8);

              _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
                movieArray: movieArray
              }));
            }
          } else {
            alert('No series found!');
          }
        })["catch"](function (err) {
          throw err;
        });
      } else if (_this.state.movieTitle && _this.state.movieYear === '') {
        axios__WEBPACK_IMPORTED_MODULE_17___default.a.get('http://www.omdbapi.com/?apikey=50f7c729&type=series&s=' + _this.state.movieTitle).then(function (res) {
          var movieArray = res.data.Search;
          return movieArray;
        }).then(function (movieArray) {
          if (movieArray) {
            if (movieArray.length <= 8) {
              _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
                movieArray: movieArray
              }));
            } else {
              movieArray.slice(0, 8);

              _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
                movieArray: movieArray
              }));
            }
          } else {
            alert('No series found!');
          }
        })["catch"](function (err) {
          throw err;
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return __jsx("div", {
        className: "mainDiv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }
      }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 17
        }
      }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
        maxWidth: "lg",
        className: classes.headContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h4",
        gutterBottom: true,
        className: classes.mainHeading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 21
        }
      }, "Search for any series"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: "Movie Title",
        name: "movieTitle",
        margin: "normal",
        className: classes.titleField,
        onChange: this.handleChange,
        color: "secondary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
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
          lineNumber: 151,
          columnNumber: 21
        }
      })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.btnContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
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
            lineNumber: 165,
            columnNumber: 36
          }
        }),
        onClick: this.onSearch,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }
      }, "Search Series")), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.movieContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 17
        }
      }, __jsx(_components_MovieGallery__WEBPACK_IMPORTED_MODULE_16__["default"], {
        movieArray: this.state.movieArray,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJoZWFkQ29udGFpbmVyIiwibWFyZ2luIiwidGV4dEFsaWduIiwidGl0bGVGaWVsZCIsIndpZHRoIiwieWVhckZpZWxkIiwibW92aWVDb250YWluZXIiLCJtYXhXaWR0aCIsImJ0bkNvbnRhaW5lciIsIm1hcmdpbkJvdHRvbSIsImJ1dHRvbkFjdGlvbnMiLCJwYWRkaW5nIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kIiwiSW5kZXgiLCJtb3ZpZVRpdGxlIiwibW92aWVZZWFyIiwibW92aWVBcnJheSIsImUiLCJzZXRTdGF0ZSIsInN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiU2VhcmNoIiwibGVuZ3RoIiwic2xpY2UiLCJhbGVydCIsImVyciIsImNsYXNzZXMiLCJwcm9wcyIsIm1haW5IZWFkaW5nIiwiaGFuZGxlQ2hhbmdlIiwib25TZWFyY2giLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2QkMsaUJBQWEsRUFBRTtBQUNYQyxZQUFNLEVBQUUsZ0JBREc7QUFFWEMsZUFBUyxFQUFFO0FBRkEsS0FEUTtBQUt2QkMsY0FBVSxFQUFFO0FBQ1JDLFdBQUssRUFBRSxLQURDO0FBRVJILFlBQU0sRUFBRTtBQUZB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RUFBQyxXQUZUO0FBR0ksY0FBTSxFQUFDLFFBSFg7QUFJSSxpQkFBUyxFQUFFSCxPQUFPLENBQUNqQyxTQUp2QjtBQUtJLGdCQUFRLEVBQUUsS0FBS29DLFlBTG5CO0FBTUksYUFBSyxFQUFDLFdBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWhCSixDQUZKLEVBMkJJLE1BQUMsb0VBQUQ7QUFBVyxpQkFBUyxFQUFFSCxPQUFPLENBQUM5QixZQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxpRUFBRDtBQUNJLGVBQU8sRUFBQyxXQURaO0FBRUksYUFBSyxFQUFDLFdBRlY7QUFHSSxpQkFBUyxFQUFFOEIsT0FBTyxDQUFDNUIsYUFIdkI7QUFJSSxpQkFBUyxFQUFFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUpmO0FBS0ksZUFBTyxFQUFFLEtBQUtnQyxRQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLENBM0JKLEVBc0NJLE1BQUMsb0VBQUQ7QUFBVyxpQkFBUyxFQUFFSixPQUFPLENBQUNoQyxjQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxpRUFBRDtBQUFjLGtCQUFVLEVBQUUsS0FBS2UsS0FBTCxDQUFXSCxVQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0F0Q0osQ0FESjtBQTRDSDs7OztFQW5JZXlCLCtDOztBQXNJcEI1QixLQUFLLENBQUM2QixTQUFOLEdBQWtCO0FBQ2ROLFNBQU8sRUFBRU8saURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEWixDQUFsQjtBQUllQyxxSUFBVSxDQUFDbEQsTUFBRCxDQUFWLENBQW1CaUIsS0FBbkIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNDgwMzNjODE4NGQwNjFhN2E2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgTW92aWVHYWxsZXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvTW92aWVHYWxsZXJ5JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICAgIGhlYWRDb250YWluZXI6IHtcclxuICAgICAgICBtYXJnaW46ICc0NXB4IGF1dG8gMTBweCcsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlRmllbGQ6IHtcclxuICAgICAgICB3aWR0aDogJzQwJScsXHJcbiAgICAgICAgbWFyZ2luOiAnMjBweCAxMHB4J1xyXG4gICAgfSxcclxuICAgIHllYXJGaWVsZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTUlJyxcclxuICAgICAgICBtYXJnaW46ICcyMHB4IDEwcHgnXHJcbiAgICB9LFxyXG4gICAgbW92aWVDb250YWluZXI6IHtcclxuICAgICAgICBtYXhXaWR0aDogJzc4JScsXHJcbiAgICAgICAgbWFyZ2luOiAnMTBweCBhdXRvIDQwcHgnXHJcbiAgICB9LFxyXG4gICAgYnRuQ29udGFpbmVyOiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICc0MHB4J1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbkFjdGlvbnM6IHtcclxuICAgICAgICBtYXJnaW46ICc1cHgnLFxyXG4gICAgICAgIHBhZGRpbmc6ICc4cHggMjBweCcsXHJcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWU2ZTczJyxcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNlODM5NDAnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIG1vdmllVGl0bGU6ICcnLFxyXG4gICAgICAgIG1vdmllWWVhcjogJycsXHJcbiAgICAgICAgbW92aWVBcnJheTogW11cclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfTtcclxuXHJcbiAgICBvblNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tb3ZpZVRpdGxlICYmIHRoaXMuc3RhdGUubW92aWVZZWFyKSB7XHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICdodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NTBmN2M3MjkmdHlwZT1zZXJpZXMmcz0nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb3ZpZVRpdGxlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyZ5PScgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1vdmllWWVhclxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtb3ZpZUFycmF5ID0gcmVzLmRhdGEuU2VhcmNoO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3ZpZUFycmF5O1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChtb3ZpZUFycmF5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmllQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmllQXJyYXkubGVuZ3RoIDw9IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92aWVBcnJheTogbW92aWVBcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZpZUFycmF5LnNsaWNlKDAsIDgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZpZUFycmF5OiBtb3ZpZUFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdObyBzZXJpZXMgZm91bmQhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm1vdmllVGl0bGUgJiYgdGhpcy5zdGF0ZS5tb3ZpZVllYXIgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICdodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NTBmN2M3MjkmdHlwZT1zZXJpZXMmcz0nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb3ZpZVRpdGxlXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vdmllQXJyYXkgPSByZXMuZGF0YS5TZWFyY2g7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdmllQXJyYXk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKG1vdmllQXJyYXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW92aWVBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92aWVBcnJheS5sZW5ndGggPD0gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZpZUFycmF5OiBtb3ZpZUFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmllQXJyYXkuc2xpY2UoMCwgOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmllQXJyYXk6IG1vdmllQXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ05vIHNlcmllcyBmb3VuZCEnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluRGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluSGVhZGluZ31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaCBmb3IgYW55IHNlcmllc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTW92aWUgVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW92aWVUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZUZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vdmllWWVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy55ZWFyRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQWN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8U2VhcmNoSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaCBTZXJpZXNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMubW92aWVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3ZpZUdhbGxlcnkgbW92aWVBcnJheT17dGhpcy5zdGF0ZS5tb3ZpZUFycmF5fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkluZGV4LnByb3BUeXBlcyA9IHtcclxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEluZGV4KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==