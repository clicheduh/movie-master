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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);






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
      marginLeft: '5px'
    },
    buttonActions: {
      margin: '5px',
      padding: '10px'
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
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, children), onClose ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
              axios__WEBPACK_IMPORTED_MODULE_19___default.a.get('http://www.omdbapi.com/?apikey=50f7c729&t=' + movie.Title + '&plot=full').then(function (res) {
                var output = "\n                <Typography gutterBottom>".concat(res.data.Plot, "</Typography>\n            ");
                document.getElementById('plotModal').innerHTML = output;
              });

            case 1:
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
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
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
      lineNumber: 111,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.cardContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
      lineNumber: 119,
      columnNumber: 21
    }
  }, movie.Title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, "Year Released: ", movie.Year))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    size: "small",
    variant: "outlined",
    color: "primary",
    className: classes.buttonActions,
    onClick: handleClickOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, "Full Plot"), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClose: handleClose,
    "aria-labelledby": "customized-dialog-title",
    open: open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, __jsx(DialogTitle, {
    id: "customized-dialog-title",
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, movie.Title), __jsx(DialogContent, {
    dividers: true,
    id: "plotModal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUNhcmQuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwibWF4V2lkdGgiLCJwYWRkaW5nIiwic3BhY2luZyIsImNhcmRDb250ZW50IiwibWFyZ2luTGVmdCIsImJ1dHRvbkFjdGlvbnMiLCJtYXJnaW4iLCJtb3ZpZUNhcmRJbWFnZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJtb3ZpZVRpdGxlIiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsImNsb3NlQnV0dG9uIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImNvbG9yIiwicGFsZXR0ZSIsImdyZXkiLCJEaWFsb2dUaXRsZSIsIndpdGhTdHlsZXMiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NlcyIsIm9uQ2xvc2UiLCJvdGhlciIsIkRpYWxvZ0NvbnRlbnQiLCJNdWlEaWFsb2dDb250ZW50IiwiTW92aWVDYXJkIiwibW92aWUiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVDbGlja09wZW4iLCJtb3ZpZVBsb3QiLCJoYW5kbGVDbG9zZSIsIm1vdmllSW1nIiwiUG9zdGVyIiwiYXhpb3MiLCJnZXQiLCJUaXRsZSIsInRoZW4iLCJyZXMiLCJvdXRwdXQiLCJkYXRhIiwiUGxvdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJZZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2QkMsUUFBSSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRSxHQURSO0FBRUZD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Q0FBbEI7QUE2R2ViLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM2ZDkzM2E5ZDI3YjEwYzZkZjczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IE11aURpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IE11aURpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgbWF4V2lkdGg6IDM0NSxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpXHJcbiAgICB9LFxyXG4gICAgY2FyZENvbnRlbnQ6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnNXB4J1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbkFjdGlvbnM6IHtcclxuICAgICAgICBtYXJnaW46ICc1cHgnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4J1xyXG4gICAgfSxcclxuICAgIG1vdmllQ2FyZEltYWdlOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICc0MDBweCcsXHJcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXHJcbiAgICB9LFxyXG4gICAgbW92aWVUaXRsZToge1xyXG4gICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcclxuICAgIH0sXHJcbiAgICBjbG9zZUJ1dHRvbjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgIHRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzUwMF1cclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBEaWFsb2dUaXRsZSA9IHdpdGhTdHlsZXMoc3R5bGVzKSgocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzZXMsIG9uQ2xvc2UsIC4uLm90aGVyIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE11aURpYWxvZ1RpdGxlIGRpc2FibGVUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSB7Li4ub3RoZXJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICB7b25DbG9zZSA/IChcclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvTXVpRGlhbG9nVGl0bGU+XHJcbiAgICApO1xyXG59KTtcclxuXHJcbmNvbnN0IERpYWxvZ0NvbnRlbnQgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpXHJcbiAgICB9XHJcbn0pKShNdWlEaWFsb2dDb250ZW50KTtcclxuXHJcbmNvbnN0IE1vdmllQ2FyZCA9IHdpdGhTdHlsZXMoc3R5bGVzKSgocHJvcHMpID0+IHtcclxuICAgIC8vIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7IG1vdmllIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICAgICAgbW92aWVQbG90KCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBtb3ZpZUltZztcclxuICAgIGlmIChtb3ZpZS5Qb3N0ZXIgPT09ICdOL0EnKSB7XHJcbiAgICAgICAgbW92aWVJbWcgPSAnL2ltYWdlcy80MDQtaW1nLnBuZyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1vdmllSW1nID0gbW92aWUuUG9zdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtb3ZpZVBsb3QgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChcclxuICAgICAgICAgICAgICAgICdodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NTBmN2M3MjkmdD0nICtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZpZS5UaXRsZSArXHJcbiAgICAgICAgICAgICAgICAgICAgJyZwbG90PWZ1bGwnXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG91dHB1dCA9IGBcclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbT4ke3Jlcy5kYXRhLlBsb3R9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbG90TW9kYWwnKS5pbm5lckhUTUwgPSBvdXRwdXQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0PVwiMzAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXttb3ZpZUltZ31cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3ZpZUNhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW92aWVUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3ZpZS5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBZZWFyIFJlbGVhc2VkOiB7bW92aWUuWWVhcn1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICB7LyogPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQWN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNsaWNrSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBMZWFybiBNb3JlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkFjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tPcGVufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEZ1bGwgUGxvdFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY3VzdG9taXplZC1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY3VzdG9taXplZC1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3ZpZS5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50IGRpdmlkZXJzIGlkPVwicGxvdE1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTm9iaXMgcXVpYSBhbmltaSBhdHF1ZSBjdWxwYSBzYXBpZW50ZSBlb3MgaWxsb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhZXJhdCByYXRpb25lIHNpbnQgbGFib3JlIG5paGlsLCBkaXN0aW5jdGlvIHZlcm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW0gZWFydW0gcXVhZSBxdWlzIG9wdGlvIGxhYm9yaW9zYW0gdmVyaXRhdGlzIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=