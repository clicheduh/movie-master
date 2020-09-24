webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MovieCard.js":
/*!*********************************!*\
  !*** ./components/MovieCard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_20__);






var _this = undefined,
    _jsxFileName = "C:\\Users\\HP\\Desktop\\movie-master\\components\\MovieCard.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
// import { makeStyles } from '@material-ui/core/styles';
















var styles = function styles(theme) {
  return {
    root: {
      maxWidth: 345,
      padding: theme.spacing(2)
    },
    cardContent: {
      marginTop: '10px'
    },
    buttonActions: {
      margin: '5px',
      padding: '8px 20px',
      color: '#fff',
      backgroundColor: '#ee6e73',
      '&:hover': {
        background: '#e83940'
      }
    },
    movieCardImage: {
      width: '100%',
      height: '400px',
      overflow: 'hidden'
    },
    movieTitle: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  };
};

var DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(function (props) {
  var children = props.children,
      classes = props.classes,
      onClose = props.onClose,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(props, ["children", "classes", "onClose"]);

  return __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    disableTypography: true,
    className: classes.root
  }, other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, children), onClose ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  })) : null);
});
var DialogContent = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(function (theme) {
  return {
    root: {
      padding: theme.spacing(2)
    }
  };
})(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_16__["default"]);
var MovieCard = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(_s(function (props) {
  _s();

  // const classes = useStyles();
  var classes = props.classes;
  var movie = props.movie;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleClickOpen = function handleClickOpen() {
    setOpen(true);
    moviePlot();
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var movieImg;

  if (movie.Poster === 'N/A') {
    movieImg = '/images/404-img.png';
  } else {
    movieImg = movie.Poster;
  }

  var moviePlot = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setTimeout(function () {
                var output = "<CircularProgress color=\"secondary\" />";
                document.getElementById('plotModal').innerHTML = output;
              }, 1000);
              setTimeout(function () {
                axios__WEBPACK_IMPORTED_MODULE_20___default.a.get('http://www.omdbapi.com/?apikey=50f7c729&t=' + movie.Title + '&plot=full').then(function (res) {
                  var output = "\n                <Typography gutterBottom className={classes.modalText}>".concat(res.data.Plot, "</Typography>\n            ");
                  document.getElementById('plotModal').innerHTML = output;
                });
              }, 3000);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function moviePlot() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "img",
    "max-height": "300px",
    image: movieImg,
    width: "100%",
    className: classes.movieCardImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.cardContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    className: classes.movieTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, movie.Title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, "Year Released: ", movie.Year))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    size: "small",
    className: classes.buttonActions,
    onClick: handleClickOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, "Full Plot"), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClose: handleClose,
    "aria-labelledby": "customized-dialog-title",
    open: open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 17
    }
  }, __jsx(DialogTitle, {
    id: "customized-dialog-title",
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 21
    }
  }, movie.Title), __jsx(DialogContent, {
    dividers: true,
    id: "plotModal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 21
    }
  }))));
}, "xG1TONbKtDWtdOTrXaTAsNhPg/Q="));
/* harmony default export */ __webpack_exports__["default"] = (MovieCard);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUNhcmQuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwibWF4V2lkdGgiLCJwYWRkaW5nIiwic3BhY2luZyIsImNhcmRDb250ZW50IiwibWFyZ2luVG9wIiwiYnV0dG9uQWN0aW9ucyIsIm1hcmdpbiIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZCIsIm1vdmllQ2FyZEltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsIm1vdmllVGl0bGUiLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwiY2xvc2VCdXR0b24iLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwicGFsZXR0ZSIsImdyZXkiLCJEaWFsb2dUaXRsZSIsIndpdGhTdHlsZXMiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NlcyIsIm9uQ2xvc2UiLCJvdGhlciIsIkRpYWxvZ0NvbnRlbnQiLCJNdWlEaWFsb2dDb250ZW50IiwiTW92aWVDYXJkIiwibW92aWUiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVDbGlja09wZW4iLCJtb3ZpZVBsb3QiLCJoYW5kbGVDbG9zZSIsIm1vdmllSW1nIiwiUG9zdGVyIiwic2V0VGltZW91dCIsIm91dHB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJheGlvcyIsImdldCIsIlRpdGxlIiwidGhlbiIsInJlcyIsImRhdGEiLCJQbG90IiwiWWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0ksTUFBQyxXQUFEO0FBQ0ksTUFBRSxFQUFDLHlCQURQO0FBRUksV0FBTyxFQUFFSSxXQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJS1AsS0FBSyxDQUFDaUIsS0FKWCxDQUxKLEVBV0ksTUFBQyxhQUFEO0FBQWUsWUFBUSxNQUF2QjtBQUF3QixNQUFFLEVBQUMsV0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLENBaEJKLENBM0JKLENBREo7QUFvRUgsQ0EvR2lCLGtDQUFsQjtBQWlIZWxCLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg4NzE2MDQwNDY0YTZkMmFhZmRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IE11aURpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IE11aURpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIG1heFdpZHRoOiAzNDUsXHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKVxyXG4gICAgfSxcclxuICAgIGNhcmRDb250ZW50OiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMTBweCdcclxuICAgIH0sXHJcbiAgICBidXR0b25BY3Rpb25zOiB7XHJcbiAgICAgICAgbWFyZ2luOiAnNXB4JyxcclxuICAgICAgICBwYWRkaW5nOiAnOHB4IDIwcHgnLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlNmU3MycsXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZTgzOTQwJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3ZpZUNhcmRJbWFnZToge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnNDAwcHgnLFxyXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgfSxcclxuICAgIG1vdmllVGl0bGU6IHtcclxuICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXHJcbiAgICB9LFxyXG4gICAgY2xvc2VCdXR0b246IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICByaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MDBdXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgRGlhbG9nVGl0bGUgPSB3aXRoU3R5bGVzKHN0eWxlcykoKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc2VzLCBvbkNsb3NlLCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNdWlEaWFsb2dUaXRsZSBkaXNhYmxlVHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gey4uLm90aGVyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAge29uQ2xvc2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L011aURpYWxvZ1RpdGxlPlxyXG4gICAgKTtcclxufSk7XHJcblxyXG5jb25zdCBEaWFsb2dDb250ZW50ID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKVxyXG4gICAgfVxyXG59KSkoTXVpRGlhbG9nQ29udGVudCk7XHJcblxyXG5jb25zdCBNb3ZpZUNhcmQgPSB3aXRoU3R5bGVzKHN0eWxlcykoKHByb3BzKSA9PiB7XHJcbiAgICAvLyBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgeyBtb3ZpZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgICAgIG1vdmllUGxvdCgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbW92aWVJbWc7XHJcbiAgICBpZiAobW92aWUuUG9zdGVyID09PSAnTi9BJykge1xyXG4gICAgICAgIG1vdmllSW1nID0gJy9pbWFnZXMvNDA0LWltZy5wbmcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtb3ZpZUltZyA9IG1vdmllLlBvc3RlcjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbW92aWVQbG90ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgb3V0cHV0ID0gYDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5gO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxvdE1vZGFsJykuaW5uZXJIVE1MID0gb3V0cHV0O1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAgICAgLmdldChcclxuICAgICAgICAgICAgICAgICAgICAnaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTUwZjdjNzI5JnQ9JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmllLlRpdGxlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyZwbG90PWZ1bGwnXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG91dHB1dCA9IGBcclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWxUZXh0fT4ke3Jlcy5kYXRhLlBsb3R9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxvdE1vZGFsJykuaW5uZXJIVE1MID0gb3V0cHV0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ9XCIzMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e21vdmllSW1nfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllQ2FyZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3ZpZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmllLlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFllYXIgUmVsZWFzZWQ6IHttb3ZpZS5ZZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25BY3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIExlYXJuIE1vcmVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25BY3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBGdWxsIFBsb3RcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImN1c3RvbWl6ZWQtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImN1c3RvbWl6ZWQtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92aWUuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudCBkaXZpZGVycyBpZD1cInBsb3RNb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsaXQuIE5vYmlzIHF1aWEgYW5pbWkgYXRxdWUgY3VscGEgc2FwaWVudGUgZW9zIGlsbG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YWVyYXQgcmF0aW9uZSBzaW50IGxhYm9yZSBuaWhpbCwgZGlzdGluY3RpbyB2ZXJvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFtIGVhcnVtIHF1YWUgcXVpcyBvcHRpbyBsYWJvcmlvc2FtIHZlcml0YXRpcyFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9