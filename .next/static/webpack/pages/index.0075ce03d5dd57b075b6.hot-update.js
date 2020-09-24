webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MovieGallery.js":
/*!************************************!*\
  !*** ./components/MovieGallery.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _components_MovieCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MovieCard */ "./components/MovieCard.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\HP\\Desktop\\movie-master\\components\\MovieGallery.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(3),
      color: theme.palette.text.secondary
    },
    movieCard: {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  };
});

var MovieGallery = function MovieGallery(props) {
  _s();

  var classes = useStyles();
  var movieArray = props.movieArray;
  var i,
      newMovieArray = [];

  if (movieArray.length <= 8) {} else if (movieArray.length > 8) {
    var movieArrayOne = movieArray.slice(0, 8);
    var movieArrayTwo = movieArray.slice(8);
  }

  for (i = 0; i < movieArray.length; i++) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('http://www.omdbapi.com/?apikey=50f7c729&i=' + movieArray[i].imdbID).then(function (res) {
      newMovieArray.push(res.data);
      console.log(newMovieArray);
    });
  }

  var output = movieArray ? movieArray.map(function (movie) {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: true,
      xs: 12,
      sm: 6,
      md: 4,
      key: Math.random(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, __jsx(_components_MovieCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.movieCard,
      movie: movie,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }
    }));
  }) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "No movie available");
  return __jsx("div", {
    className: "root",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, output));
};

_s(MovieGallery, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = MovieGallery;
/* harmony default export */ __webpack_exports__["default"] = (MovieGallery);

var _c;

$RefreshReg$(_c, "MovieGallery");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUdhbGxlcnkuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJtb3ZpZUNhcmQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJNb3ZpZUdhbGxlcnkiLCJwcm9wcyIsImNsYXNzZXMiLCJtb3ZpZUFycmF5IiwiaSIsIm5ld01vdmllQXJyYXkiLCJsZW5ndGgiLCJtb3ZpZUFycmF5T25lIiwic2xpY2UiLCJtb3ZpZUFycmF5VHdvIiwiYXhpb3MiLCJnZXQiLCJpbWRiSUQiLCJ0aGVuIiwicmVzIiwicHVzaCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib3V0cHV0IiwibWFwIiwibW92aWUiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRTtBQURSLEtBRCtCO0FBSXJDQyxTQUFLLEVBQUU7QUFDSEMsYUFBTyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkLENBRE47QUFFSEMsV0FBSyxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkM7QUFGdkIsS0FKOEI7QUFRckNDLGFBQVMsRUFBRTtBQUNQQyxnQkFBVSxFQUFFLE1BREw7QUFFUEMsaUJBQVcsRUFBRTtBQUZOO0FBUjBCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQWNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM1QixNQUFNQyxPQUFPLEdBQUdqQixTQUFTLEVBQXpCO0FBRDRCLE1BRXBCa0IsVUFGb0IsR0FFTEYsS0FGSyxDQUVwQkUsVUFGb0I7QUFHNUIsTUFBSUMsQ0FBSjtBQUFBLE1BQ0lDLGFBQWEsR0FBRyxFQURwQjs7QUFHQSxNQUFJRixVQUFVLENBQUNHLE1BQVgsSUFBcUIsQ0FBekIsRUFBNEIsQ0FDM0IsQ0FERCxNQUNPLElBQUlILFVBQVUsQ0FBQ0csTUFBWCxHQUFvQixDQUF4QixFQUEyQjtBQUM5QixRQUFNQyxhQUFhLEdBQUdKLFVBQVUsQ0FBQ0ssS0FBWCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUF0QjtBQUNBLFFBQU1DLGFBQWEsR0FBR04sVUFBVSxDQUFDSyxLQUFYLENBQWlCLENBQWpCLENBQXRCO0FBQ0g7O0FBRUQsT0FBS0osQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHRCxVQUFVLENBQUNHLE1BQTNCLEVBQW1DRixDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDTSxnREFBSyxDQUNBQyxHQURMLENBRVEsK0NBQ0lSLFVBQVUsQ0FBQ0MsQ0FBRCxDQUFWLENBQWNRLE1BSDFCLEVBS0tDLElBTEwsQ0FLVSxVQUFDQyxHQUFELEVBQVM7QUFDWFQsbUJBQWEsQ0FBQ1UsSUFBZCxDQUFtQkQsR0FBRyxDQUFDRSxJQUF2QjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWWIsYUFBWjtBQUNILEtBUkw7QUFTSDs7QUFDRCxNQUFNYyxNQUFNLEdBQUdoQixVQUFVLEdBQ3JCQSxVQUFVLENBQUNpQixHQUFYLENBQWUsVUFBQ0MsS0FBRCxFQUFXO0FBQ3RCLFdBQ0ksTUFBQyw4REFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxFQUFmO0FBQW1CLFFBQUUsRUFBRSxDQUF2QjtBQUEwQixRQUFFLEVBQUUsQ0FBOUI7QUFBaUMsU0FBRyxFQUFFQyxJQUFJLENBQUNDLE1BQUwsRUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsNkRBQUQ7QUFBVyxlQUFTLEVBQUVyQixPQUFPLENBQUNMLFNBQTlCO0FBQXlDLFdBQUssRUFBRXdCLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKO0FBS0gsR0FORCxDQURxQixHQVNyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVRKO0FBV0EsU0FDSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRSxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tGLE1BREwsQ0FESixDQURKO0FBT0gsQ0F6Q0Q7O0dBQU1uQixZO1VBQ2NmLFM7OztLQURkZSxZO0FBMkNTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMDc1Y2UwM2Q1ZGQ1N2IwNzViNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgTW92aWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTW92aWVDYXJkJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxXHJcbiAgICB9LFxyXG4gICAgcGFwZXI6IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XHJcbiAgICB9LFxyXG4gICAgbW92aWVDYXJkOiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bydcclxuICAgIH1cclxufSkpO1xyXG5cclxuY29uc3QgTW92aWVHYWxsZXJ5ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7IG1vdmllQXJyYXkgfSA9IHByb3BzO1xyXG4gICAgdmFyIGksXHJcbiAgICAgICAgbmV3TW92aWVBcnJheSA9IFtdO1xyXG5cclxuICAgIGlmIChtb3ZpZUFycmF5Lmxlbmd0aCA8PSA4KSB7XHJcbiAgICB9IGVsc2UgaWYgKG1vdmllQXJyYXkubGVuZ3RoID4gOCkge1xyXG4gICAgICAgIGNvbnN0IG1vdmllQXJyYXlPbmUgPSBtb3ZpZUFycmF5LnNsaWNlKDAsIDgpO1xyXG4gICAgICAgIGNvbnN0IG1vdmllQXJyYXlUd28gPSBtb3ZpZUFycmF5LnNsaWNlKDgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBtb3ZpZUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChcclxuICAgICAgICAgICAgICAgICdodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NTBmN2M3MjkmaT0nICtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZpZUFycmF5W2ldLmltZGJJRFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIG5ld01vdmllQXJyYXkucHVzaChyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdNb3ZpZUFycmF5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvdXRwdXQgPSBtb3ZpZUFycmF5ID8gKFxyXG4gICAgICAgIG1vdmllQXJyYXkubWFwKChtb3ZpZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17NH0ga2V5PXtNYXRoLnJhbmRvbSgpfT5cclxuICAgICAgICAgICAgICAgICAgICA8TW92aWVDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3ZpZUNhcmR9IG1vdmllPXttb3ZpZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgKSA6IChcclxuICAgICAgICA8ZGl2Pk5vIG1vdmllIGF2YWlsYWJsZTwvZGl2PlxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cclxuICAgICAgICAgICAgICAgIHtvdXRwdXR9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUdhbGxlcnk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=