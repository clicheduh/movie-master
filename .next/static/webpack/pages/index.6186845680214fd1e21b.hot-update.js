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
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowBackIos */ "./node_modules/@material-ui/icons/ArrowBackIos.js");
/* harmony import */ var _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ArrowForwardIos */ "./node_modules/@material-ui/icons/ArrowForwardIos.js");
/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
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

  movieArray.slice(0, 8);

  for (i = 0; i < movieArray.length; i++) {
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('http://www.omdbapi.com/?apikey=50f7c729&i=' + movieArray[i].imdbID).then(function (res) {
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
        lineNumber: 52,
        columnNumber: 17
      }
    }, __jsx(_components_MovieCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.movieCard,
      movie: movie,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }
    }));
  }) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "No movie available");
  return __jsx("div", {
    className: "root",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUdhbGxlcnkuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJtb3ZpZUNhcmQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJNb3ZpZUdhbGxlcnkiLCJwcm9wcyIsImNsYXNzZXMiLCJtb3ZpZUFycmF5IiwiaSIsIm5ld01vdmllQXJyYXkiLCJzbGljZSIsImxlbmd0aCIsImF4aW9zIiwiZ2V0IiwiaW1kYklEIiwidGhlbiIsInJlcyIsInB1c2giLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm91dHB1dCIsIm1hcCIsIm1vdmllIiwiTWF0aCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRTtBQURSLEtBRCtCO0FBSXJDQyxTQUFLLEVBQUU7QUFDSEMsYUFBTyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkLENBRE47QUFFSEMsV0FBSyxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkM7QUFGdkIsS0FKOEI7QUFRckNDLGFBQVMsRUFBRTtBQUNQQyxnQkFBVSxFQUFFLE1BREw7QUFFUEMsaUJBQVcsRUFBRTtBQUZOO0FBUjBCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQWNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM1QixNQUFNQyxPQUFPLEdBQUdqQixTQUFTLEVBQXpCO0FBRDRCLE1BRXBCa0IsVUFGb0IsR0FFTEYsS0FGSyxDQUVwQkUsVUFGb0I7QUFHNUIsTUFBSUMsQ0FBSjtBQUFBLE1BQ0lDLGFBQWEsR0FBRyxFQURwQixDQUg0QixDQU01QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBRixZQUFVLENBQUNHLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7O0FBRUEsT0FBS0YsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHRCxVQUFVLENBQUNJLE1BQTNCLEVBQW1DSCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDSSxnREFBSyxDQUNBQyxHQURMLENBRVEsK0NBQ0lOLFVBQVUsQ0FBQ0MsQ0FBRCxDQUFWLENBQWNNLE1BSDFCLEVBS0tDLElBTEwsQ0FLVSxVQUFDQyxHQUFELEVBQVM7QUFDWFAsbUJBQWEsQ0FBQ1EsSUFBZCxDQUFtQkQsR0FBRyxDQUFDRSxJQUF2QjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWVgsYUFBWjtBQUNILEtBUkw7QUFTSDs7QUFDRCxNQUFNWSxNQUFNLEdBQUdkLFVBQVUsR0FDckJBLFVBQVUsQ0FBQ2UsR0FBWCxDQUFlLFVBQUNDLEtBQUQsRUFBVztBQUN0QixXQUNJLE1BQUMsOERBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFtQixRQUFFLEVBQUUsQ0FBdkI7QUFBMEIsUUFBRSxFQUFFLENBQTlCO0FBQWlDLFNBQUcsRUFBRUMsSUFBSSxDQUFDQyxNQUFMLEVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDZEQUFEO0FBQVcsZUFBUyxFQUFFbkIsT0FBTyxDQUFDTCxTQUE5QjtBQUF5QyxXQUFLLEVBQUVzQixLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESjtBQUtILEdBTkQsQ0FEcUIsR0FTckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFUSjtBQVdBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRixNQURMLENBREosQ0FESjtBQU9ILENBM0NEOztHQUFNakIsWTtVQUNjZixTOzs7S0FEZGUsWTtBQTZDU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjE4Njg0NTY4MDIxNGZkMWUyMWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL01vdmllQ2FyZCc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQXJyb3dCYWNrSW9zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrSW9zJztcclxuaW1wb3J0IEFycm93Rm9yd2FyZElvc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZElvcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBmbGV4R3JvdzogMVxyXG4gICAgfSxcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxyXG4gICAgfSxcclxuICAgIG1vdmllQ2FyZDoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nXHJcbiAgICB9XHJcbn0pKTtcclxuXHJcbmNvbnN0IE1vdmllR2FsbGVyeSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgeyBtb3ZpZUFycmF5IH0gPSBwcm9wcztcclxuICAgIHZhciBpLFxyXG4gICAgICAgIG5ld01vdmllQXJyYXkgPSBbXTtcclxuXHJcbiAgICAvLyBpZiAobW92aWVBcnJheS5sZW5ndGggPD0gOCkge1xyXG4gICAgLy8gfSBlbHNlIGlmIChtb3ZpZUFycmF5Lmxlbmd0aCA+IDgpIHtcclxuICAgIC8vICAgICBjb25zdCBtb3ZpZUFycmF5T25lID0gbW92aWVBcnJheS5zbGljZSgwLCA4KTtcclxuICAgIC8vICAgICBjb25zdCBtb3ZpZUFycmF5VHdvID0gbW92aWVBcnJheS5zbGljZSg4KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBtb3ZpZUFycmF5LnNsaWNlKDAsIDgpO1xyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBtb3ZpZUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChcclxuICAgICAgICAgICAgICAgICdodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NTBmN2M3MjkmaT0nICtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZpZUFycmF5W2ldLmltZGJJRFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIG5ld01vdmllQXJyYXkucHVzaChyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdNb3ZpZUFycmF5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvdXRwdXQgPSBtb3ZpZUFycmF5ID8gKFxyXG4gICAgICAgIG1vdmllQXJyYXkubWFwKChtb3ZpZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17NH0ga2V5PXtNYXRoLnJhbmRvbSgpfT5cclxuICAgICAgICAgICAgICAgICAgICA8TW92aWVDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3ZpZUNhcmR9IG1vdmllPXttb3ZpZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgKSA6IChcclxuICAgICAgICA8ZGl2Pk5vIG1vdmllIGF2YWlsYWJsZTwvZGl2PlxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cclxuICAgICAgICAgICAgICAgIHtvdXRwdXR9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUdhbGxlcnk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=