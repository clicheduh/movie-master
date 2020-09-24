webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_MovieGallery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/MovieGallery */ "./components/MovieGallery.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);








var _jsxFileName = "C:\\Users\\HP\\Desktop\\movie-master\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var styles = function styles(theme) {
  return {
    headContainer: {
      margin: '45px auto',
      textAlign: 'center'
    },
    textField: {
      width: '70%',
      margin: '20px auto'
    },
    movieContainer: {
      maxWidth: '78%',
      margin: '10px auto 40px'
    }
  };
};

var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      movieInput: '',
      movieArray: ''
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleChange", function (e) {
      console.log(e.target.value);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "keyPress", function (e, state) {
      if (e.keyCode == 13) {
        _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
          movieInput: e.target.value
        }));

        setTimeout(function () {
          axios__WEBPACK_IMPORTED_MODULE_17___default.a.get('http://www.omdbapi.com/?apikey=50f7c729&s=' + _this.state.movieInput + '&type=series').then(function (res) {
            var movieArray = res.data.Search;

            _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
              movieArray: movieArray
            }));
          });
        }, 500);
      }
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;

      var _useState = useState(new Date()),
          _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
          selectedDate = _useState2[0],
          handleDateChange = _useState2[1];

      return __jsx("div", {
        className: "mainDiv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }
      }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }
      }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
        maxWidth: "lg",
        className: classes.headContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "h4",
        gutterBottom: true,
        className: classes.mainHeading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }
      }, "Search for any movie"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Search movies",
        margin: "normal",
        variant: "outlined",
        className: classes.textField,
        onChange: this.handleChange,
        onKeyDown: this.keyPress,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }
      }), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_16__["DatePicker"], {
        views: ['year'],
        label: "Year only",
        value: selectedDate,
        onChange: handleDateChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }
      })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.movieContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }
      }, __jsx(_components_MovieGallery__WEBPACK_IMPORTED_MODULE_15__["default"], {
        movieArray: this.state.movieArray,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Index.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])(styles)(Index));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJoZWFkQ29udGFpbmVyIiwibWFyZ2luIiwidGV4dEFsaWduIiwidGV4dEZpZWxkIiwid2lkdGgiLCJtb3ZpZUNvbnRhaW5lciIsIm1heFdpZHRoIiwiSW5kZXgiLCJtb3ZpZUlucHV0IiwibW92aWVBcnJheSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJzdGF0ZSIsImtleUNvZGUiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiU2VhcmNoIiwiY2xhc3NlcyIsInByb3BzIiwidXNlU3RhdGUiLCJEYXRlIiwic2VsZWN0ZWREYXRlIiwiaGFuZGxlRGF0ZUNoYW5nZSIsIm1haW5IZWFkaW5nIiwiaGFuZGxlQ2hhbmdlIiwia2V5UHJlc3MiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkJDLGlCQUFhLEVBQUU7QUFDWEMsWUFBTSxFQUFFLFdBREc7QUFFWEMsZUFBUyxFQUFFO0FBRkEsS0FEUTtBQUt2QkMsYUFBUyxFQUFFO0FBQ1BDLFdBQUssRUFBRSxLQURBO0FBRVBILFlBQU0sRUFBRTtBQUZELEtBTFk7QUFTdkJJLGtCQUFjLEVBQUU7QUFDWkMsY0FBUSxFQUFFLEtBREU7QUFFWkwsWUFBTSxFQUFFO0FBRkk7QUFUTyxHQUFaO0FBQUEsQ0FBZjs7SUFlTU0sSzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDTTtBQUNKQyxnQkFBVSxFQUFFLEVBRFI7QUFFSkMsZ0JBQVUsRUFBRTtBQUZSLEs7O3VOQUtPLFVBQUNDLENBQUQsRUFBTztBQUNsQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFyQjtBQUNILEs7O21OQUVVLFVBQUNKLENBQUQsRUFBSUssS0FBSixFQUFjO0FBQ3JCLFVBQUlMLENBQUMsQ0FBQ00sT0FBRixJQUFhLEVBQWpCLEVBQXFCO0FBQ2pCLGNBQUtDLFFBQUwsaUNBQ08sTUFBS0YsS0FEWjtBQUVJUCxvQkFBVSxFQUFFRSxDQUFDLENBQUNHLE1BQUYsQ0FBU0M7QUFGekI7O0FBSUFJLGtCQUFVLENBQUMsWUFBTTtBQUNiQyx1REFBSyxDQUNBQyxHQURMLENBRVEsK0NBQ0ksTUFBS0wsS0FBTCxDQUFXUCxVQURmLEdBRUksY0FKWixFQU1LYSxJQU5MLENBTVUsVUFBQ0MsR0FBRCxFQUFTO0FBQ1gsZ0JBQUliLFVBQVUsR0FBR2EsR0FBRyxDQUFDQyxJQUFKLENBQVNDLE1BQTFCOztBQUNBLGtCQUFLUCxRQUFMLGlDQUNPLE1BQUtGLEtBRFo7QUFFSU4sd0JBQVUsRUFBRUE7QUFGaEI7QUFJSCxXQVpMO0FBYUgsU0FkUyxFQWNQLEdBZE8sQ0FBVjtBQWVIO0FBQ0osSzs7Ozs7Ozs2QkFFUTtBQUFBLFVBQ0dnQixPQURILEdBQ2UsS0FBS0MsS0FEcEIsQ0FDR0QsT0FESDs7QUFBQSxzQkFFb0NFLFFBQVEsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FGNUM7QUFBQTtBQUFBLFVBRUVDLFlBRkY7QUFBQSxVQUVnQkMsZ0JBRmhCOztBQUdMLGFBQ0k7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUksTUFBQyxvRUFBRDtBQUFXLGdCQUFRLEVBQUMsSUFBcEI7QUFBeUIsaUJBQVMsRUFBRUwsT0FBTyxDQUFDekIsYUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMscUVBQUQ7QUFDSSxlQUFPLEVBQUMsSUFEWjtBQUVJLG9CQUFZLE1BRmhCO0FBR0ksaUJBQVMsRUFBRXlCLE9BQU8sQ0FBQ00sV0FIdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FESixFQVFJLE1BQUMsb0VBQUQ7QUFDSSxhQUFLLEVBQUMsZUFEVjtBQUVJLGNBQU0sRUFBQyxRQUZYO0FBR0ksZUFBTyxFQUFDLFVBSFo7QUFJSSxpQkFBUyxFQUFFTixPQUFPLENBQUN0QixTQUp2QjtBQUtJLGdCQUFRLEVBQUUsS0FBSzZCLFlBTG5CO0FBTUksaUJBQVMsRUFBRSxLQUFLQyxRQU5wQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUkosRUFnQkksTUFBQyxnRUFBRDtBQUNJLGFBQUssRUFBRSxDQUFDLE1BQUQsQ0FEWDtBQUVJLGFBQUssRUFBQyxXQUZWO0FBR0ksYUFBSyxFQUFFSixZQUhYO0FBSUksZ0JBQVEsRUFBRUMsZ0JBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWhCSixDQUZKLEVBeUJJLE1BQUMsb0VBQUQ7QUFBVyxpQkFBUyxFQUFFTCxPQUFPLENBQUNwQixjQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxpRUFBRDtBQUFjLGtCQUFVLEVBQUUsS0FBS1UsS0FBTCxDQUFXTixVQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0F6QkosQ0FESjtBQStCSDs7OztFQXBFZXlCLCtDOztBQXVFcEIzQixLQUFLLENBQUM0QixTQUFOLEdBQWtCO0FBQ2RWLFNBQU8sRUFBRVcsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEWixDQUFsQjtBQUllQyxzSUFBVSxDQUFDekMsTUFBRCxDQUFWLENBQW1CUyxLQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg0NzI0YTk5MTkyMTcyMWY4ZTc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBNb3ZpZUdhbGxlcnkgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpZUdhbGxlcnknO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3BpY2tlcnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gICAgaGVhZENvbnRhaW5lcjoge1xyXG4gICAgICAgIG1hcmdpbjogJzQ1cHggYXV0bycsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIHRleHRGaWVsZDoge1xyXG4gICAgICAgIHdpZHRoOiAnNzAlJyxcclxuICAgICAgICBtYXJnaW46ICcyMHB4IGF1dG8nXHJcbiAgICB9LFxyXG4gICAgbW92aWVDb250YWluZXI6IHtcclxuICAgICAgICBtYXhXaWR0aDogJzc4JScsXHJcbiAgICAgICAgbWFyZ2luOiAnMTBweCBhdXRvIDQwcHgnXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgbW92aWVJbnB1dDogJycsXHJcbiAgICAgICAgbW92aWVBcnJheTogJydcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGtleVByZXNzID0gKGUsIHN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAxMykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtb3ZpZUlucHV0OiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAgICAgICAgIC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NTBmN2M3Mjkmcz0nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubW92aWVJbnB1dCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJnR5cGU9c2VyaWVzJ1xyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb3ZpZUFycmF5ID0gcmVzLmRhdGEuU2VhcmNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZpZUFycmF5OiBtb3ZpZUFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBbc2VsZWN0ZWREYXRlLCBoYW5kbGVEYXRlQ2hhbmdlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkRpdlwiPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2ggZm9yIGFueSBtb3ZpZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VhcmNoIG1vdmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmtleVByZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld3M9e1sneWVhciddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlllYXIgb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8TW92aWVHYWxsZXJ5IG1vdmllQXJyYXk9e3RoaXMuc3RhdGUubW92aWVBcnJheX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5JbmRleC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShJbmRleCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=