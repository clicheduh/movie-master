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

  if (movieArray.length <= 8) {
    for (i = 0; i < movieArray.length; i++) {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('http://www.omdbapi.com/?apikey=50f7c729&i=' + movieArray[i].imdbID).then(function (res) {
        newMovieArray.push(res.data);
        console.log(newMovieArray);
      });
    }

    var _output = movieArray ? movieArray.map(function (movie) {
      return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
        item: true,
        xs: 12,
        sm: 6,
        md: 4,
        key: Math.random(),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }
      }, __jsx(_components_MovieCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classes.movieCard,
        movie: movie,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 25
        }
      }));
    }) : __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, "No movie available");
  } else if (movieArray.length > 8) {
    var movieArrayOne = movieArray.slice(0, 8);
    var movieArrayTwo = movieArray.slice(8);
  }

  return __jsx("div", {
    className: "root",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUdhbGxlcnkuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJtb3ZpZUNhcmQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJNb3ZpZUdhbGxlcnkiLCJwcm9wcyIsImNsYXNzZXMiLCJtb3ZpZUFycmF5IiwiaSIsIm5ld01vdmllQXJyYXkiLCJsZW5ndGgiLCJheGlvcyIsImdldCIsImltZGJJRCIsInRoZW4iLCJyZXMiLCJwdXNoIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvdXRwdXQiLCJtYXAiLCJtb3ZpZSIsIk1hdGgiLCJyYW5kb20iLCJtb3ZpZUFycmF5T25lIiwic2xpY2UiLCJtb3ZpZUFycmF5VHdvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRTtBQURSLEtBRCtCO0FBSXJDQyxTQUFLLEVBQUU7QUFDSEMsYUFBTyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkLENBRE47QUFFSEMsV0FBSyxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkM7QUFGdkIsS0FKOEI7QUFRckNDLGFBQVMsRUFBRTtBQUNQQyxnQkFBVSxFQUFFLE1BREw7QUFFUEMsaUJBQVcsRUFBRTtBQUZOO0FBUjBCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQWNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM1QixNQUFNQyxPQUFPLEdBQUdqQixTQUFTLEVBQXpCO0FBRDRCLE1BRXBCa0IsVUFGb0IsR0FFTEYsS0FGSyxDQUVwQkUsVUFGb0I7QUFHNUIsTUFBSUMsQ0FBSjtBQUFBLE1BQ0lDLGFBQWEsR0FBRyxFQURwQjs7QUFHQSxNQUFJRixVQUFVLENBQUNHLE1BQVgsSUFBcUIsQ0FBekIsRUFBNEI7QUFDeEIsU0FBS0YsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHRCxVQUFVLENBQUNHLE1BQTNCLEVBQW1DRixDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDRyxrREFBSyxDQUNBQyxHQURMLENBRVEsK0NBQ0lMLFVBQVUsQ0FBQ0MsQ0FBRCxDQUFWLENBQWNLLE1BSDFCLEVBS0tDLElBTEwsQ0FLVSxVQUFDQyxHQUFELEVBQVM7QUFDWE4scUJBQWEsQ0FBQ08sSUFBZCxDQUFtQkQsR0FBRyxDQUFDRSxJQUF2QjtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWVYsYUFBWjtBQUNILE9BUkw7QUFTSDs7QUFDRCxRQUFNVyxPQUFNLEdBQUdiLFVBQVUsR0FDckJBLFVBQVUsQ0FBQ2MsR0FBWCxDQUFlLFVBQUNDLEtBQUQsRUFBVztBQUN0QixhQUNJLE1BQUMsOERBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixVQUFFLEVBQUUsQ0FBdkI7QUFBMEIsVUFBRSxFQUFFLENBQTlCO0FBQWlDLFdBQUcsRUFBRUMsSUFBSSxDQUFDQyxNQUFMLEVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLDZEQUFEO0FBQ0ksaUJBQVMsRUFBRWxCLE9BQU8sQ0FBQ0wsU0FEdkI7QUFFSSxhQUFLLEVBQUVxQixLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURKO0FBUUgsS0FURCxDQURxQixHQVlyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQVpKO0FBY0gsR0ExQkQsTUEwQk8sSUFBSWYsVUFBVSxDQUFDRyxNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQzlCLFFBQU1lLGFBQWEsR0FBR2xCLFVBQVUsQ0FBQ21CLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBdEI7QUFDQSxRQUFNQyxhQUFhLEdBQUdwQixVQUFVLENBQUNtQixLQUFYLENBQWlCLENBQWpCLENBQXRCO0FBQ0g7O0FBRUQsU0FDSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRSxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tOLE1BREwsQ0FESixDQURKO0FBT0gsQ0E1Q0Q7O0dBQU1oQixZO1VBQ2NmLFM7OztLQURkZSxZO0FBOENTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MTM0ZmJiMmZlNDBmYzY0OTM2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgTW92aWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTW92aWVDYXJkJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxXHJcbiAgICB9LFxyXG4gICAgcGFwZXI6IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XHJcbiAgICB9LFxyXG4gICAgbW92aWVDYXJkOiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bydcclxuICAgIH1cclxufSkpO1xyXG5cclxuY29uc3QgTW92aWVHYWxsZXJ5ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7IG1vdmllQXJyYXkgfSA9IHByb3BzO1xyXG4gICAgdmFyIGksXHJcbiAgICAgICAgbmV3TW92aWVBcnJheSA9IFtdO1xyXG5cclxuICAgIGlmIChtb3ZpZUFycmF5Lmxlbmd0aCA8PSA4KSB7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG1vdmllQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAgIC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT01MGY3YzcyOSZpPScgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZpZUFycmF5W2ldLmltZGJJRFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld01vdmllQXJyYXkucHVzaChyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3TW92aWVBcnJheSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gbW92aWVBcnJheSA/IChcclxuICAgICAgICAgICAgbW92aWVBcnJheS5tYXAoKG1vdmllKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezR9IGtleT17TWF0aC5yYW5kb20oKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZpZUNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3ZpZUNhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZpZT17bW92aWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2Pk5vIG1vdmllIGF2YWlsYWJsZTwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKG1vdmllQXJyYXkubGVuZ3RoID4gOCkge1xyXG4gICAgICAgIGNvbnN0IG1vdmllQXJyYXlPbmUgPSBtb3ZpZUFycmF5LnNsaWNlKDAsIDgpO1xyXG4gICAgICAgIGNvbnN0IG1vdmllQXJyYXlUd28gPSBtb3ZpZUFycmF5LnNsaWNlKDgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cclxuICAgICAgICAgICAgICAgIHtvdXRwdXR9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUdhbGxlcnk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=