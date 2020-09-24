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
      newMovieArray = []; // if (movieArray.length <= 8) {
  // } else if (movieArray.length > 8) {
  //     const movieArrayOne = movieArray.slice(0, 8);
  //     const movieArrayTwo = movieArray.slice(8);
  // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUdhbGxlcnkuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJtb3ZpZUNhcmQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJNb3ZpZUdhbGxlcnkiLCJwcm9wcyIsImNsYXNzZXMiLCJtb3ZpZUFycmF5IiwiaSIsIm5ld01vdmllQXJyYXkiLCJsZW5ndGgiLCJheGlvcyIsImdldCIsImltZGJJRCIsInRoZW4iLCJyZXMiLCJwdXNoIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvdXRwdXQiLCJtYXAiLCJtb3ZpZSIsIk1hdGgiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxRQUFJLEVBQUU7QUFDRkMsY0FBUSxFQUFFO0FBRFIsS0FEK0I7QUFJckNDLFNBQUssRUFBRTtBQUNIQyxhQUFPLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQsQ0FETjtBQUVIQyxXQUFLLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjQyxJQUFkLENBQW1CQztBQUZ2QixLQUo4QjtBQVFyQ0MsYUFBUyxFQUFFO0FBQ1BDLGdCQUFVLEVBQUUsTUFETDtBQUVQQyxpQkFBVyxFQUFFO0FBRk47QUFSMEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBY0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzVCLE1BQU1DLE9BQU8sR0FBR2pCLFNBQVMsRUFBekI7QUFENEIsTUFFcEJrQixVQUZvQixHQUVMRixLQUZLLENBRXBCRSxVQUZvQjtBQUc1QixNQUFJQyxDQUFKO0FBQUEsTUFDSUMsYUFBYSxHQUFHLEVBRHBCLENBSDRCLENBTTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBS0QsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHRCxVQUFVLENBQUNHLE1BQTNCLEVBQW1DRixDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDRyxnREFBSyxDQUNBQyxHQURMLENBRVEsK0NBQ0lMLFVBQVUsQ0FBQ0MsQ0FBRCxDQUFWLENBQWNLLE1BSDFCLEVBS0tDLElBTEwsQ0FLVSxVQUFDQyxHQUFELEVBQVM7QUFDWE4sbUJBQWEsQ0FBQ08sSUFBZCxDQUFtQkQsR0FBRyxDQUFDRSxJQUF2QjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWVYsYUFBWjtBQUNILEtBUkw7QUFTSDs7QUFDRCxNQUFNVyxNQUFNLEdBQUdiLFVBQVUsR0FDckJBLFVBQVUsQ0FBQ2MsR0FBWCxDQUFlLFVBQUNDLEtBQUQsRUFBVztBQUN0QixXQUNJLE1BQUMsOERBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFtQixRQUFFLEVBQUUsQ0FBdkI7QUFBMEIsUUFBRSxFQUFFLENBQTlCO0FBQWlDLFNBQUcsRUFBRUMsSUFBSSxDQUFDQyxNQUFMLEVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDZEQUFEO0FBQVcsZUFBUyxFQUFFbEIsT0FBTyxDQUFDTCxTQUE5QjtBQUF5QyxXQUFLLEVBQUVxQixLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESjtBQUtILEdBTkQsQ0FEcUIsR0FTckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFUSjtBQVdBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRixNQURMLENBREosQ0FESjtBQU9ILENBekNEOztHQUFNaEIsWTtVQUNjZixTOzs7S0FEZGUsWTtBQTJDU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDZhOTY5MDYzNDNhMTc0OWMyZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL01vdmllQ2FyZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBmbGV4R3JvdzogMVxyXG4gICAgfSxcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxyXG4gICAgfSxcclxuICAgIG1vdmllQ2FyZDoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nXHJcbiAgICB9XHJcbn0pKTtcclxuXHJcbmNvbnN0IE1vdmllR2FsbGVyeSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgeyBtb3ZpZUFycmF5IH0gPSBwcm9wcztcclxuICAgIHZhciBpLFxyXG4gICAgICAgIG5ld01vdmllQXJyYXkgPSBbXTtcclxuXHJcbiAgICAvLyBpZiAobW92aWVBcnJheS5sZW5ndGggPD0gOCkge1xyXG4gICAgLy8gfSBlbHNlIGlmIChtb3ZpZUFycmF5Lmxlbmd0aCA+IDgpIHtcclxuICAgIC8vICAgICBjb25zdCBtb3ZpZUFycmF5T25lID0gbW92aWVBcnJheS5zbGljZSgwLCA4KTtcclxuICAgIC8vICAgICBjb25zdCBtb3ZpZUFycmF5VHdvID0gbW92aWVBcnJheS5zbGljZSg4KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgbW92aWVBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoXHJcbiAgICAgICAgICAgICAgICAnaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTUwZjdjNzI5Jmk9JyArXHJcbiAgICAgICAgICAgICAgICAgICAgbW92aWVBcnJheVtpXS5pbWRiSURcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXdNb3ZpZUFycmF5LnB1c2gocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3TW92aWVBcnJheSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3V0cHV0ID0gbW92aWVBcnJheSA/IChcclxuICAgICAgICBtb3ZpZUFycmF5Lm1hcCgobW92aWUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezR9IGtleT17TWF0aC5yYW5kb20oKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vdmllQ2FyZCBjbGFzc05hbWU9e2NsYXNzZXMubW92aWVDYXJkfSBtb3ZpZT17bW92aWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj5ObyBtb3ZpZSBhdmFpbGFibGU8L2Rpdj5cclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XHJcbiAgICAgICAgICAgICAgICB7b3V0cHV0fVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVHYWxsZXJ5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9