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
      lineNumber: 55,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, children), onClose ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
      lineNumber: 114,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
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
      lineNumber: 116,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.cardContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
      lineNumber: 124,
      columnNumber: 21
    }
  }, movie.Title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, "Year Released: ", movie.Year))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    size: "small",
    className: classes.buttonActions,
    onClick: handleClickOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, "Full Plot"), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClose: handleClose,
    "aria-labelledby": "customized-dialog-title",
    open: open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx(DialogTitle, {
    id: "customized-dialog-title",
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }, movie.Title), __jsx(DialogContent, {
    dividers: true,
    className: classes.fullPlot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUNhcmQuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwibWF4V2lkdGgiLCJwYWRkaW5nIiwic3BhY2luZyIsImNhcmRDb250ZW50IiwibWFyZ2luVG9wIiwiYnV0dG9uQWN0aW9ucyIsIm1hcmdpbiIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZCIsIm1vdmllQ2FyZEltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsIm1vdmllVGl0bGUiLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwiY2xvc2VCdXR0b24iLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwicGFsZXR0ZSIsImdyZXkiLCJEaWFsb2dUaXRsZSIsIndpdGhTdHlsZXMiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NlcyIsIm9uQ2xvc2UiLCJvdGhlciIsIkRpYWxvZ0NvbnRlbnQiLCJNdWlEaWFsb2dDb250ZW50IiwiTW92aWVDYXJkIiwibW92aWUiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVDbGlja09wZW4iLCJtb3ZpZVBsb3QiLCJoYW5kbGVDbG9zZSIsIm1vdmllSW1nIiwiUG9zdGVyIiwiYXhpb3MiLCJnZXQiLCJUaXRsZSIsInRoZW4iLCJyZXMiLCJvdXRwdXQiLCJkYXRhIiwiUGxvdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJZZWFyIiwiZnVsbFBsb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FB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RUFBRWxCLE9BQU8sQ0FBQzRCLFFBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYSixDQWhCSixDQTNCSixDQURKO0FBb0VILENBekdpQixrQ0FBbEI7QUEyR2V2Qix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YjI2NzI5MmJhZjZmYTdmYTljMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJztcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCBNdWlEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBNdWlEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIG1heFdpZHRoOiAzNDUsXHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKVxyXG4gICAgfSxcclxuICAgIGNhcmRDb250ZW50OiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMTBweCdcclxuICAgIH0sXHJcbiAgICBidXR0b25BY3Rpb25zOiB7XHJcbiAgICAgICAgbWFyZ2luOiAnNXB4JyxcclxuICAgICAgICBwYWRkaW5nOiAnOHB4IDIwcHgnLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlNmU3MycsXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZTgzOTQwJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3ZpZUNhcmRJbWFnZToge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnNDAwcHgnLFxyXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgfSxcclxuICAgIG1vdmllVGl0bGU6IHtcclxuICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXHJcbiAgICB9LFxyXG4gICAgY2xvc2VCdXR0b246IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICByaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MDBdXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgRGlhbG9nVGl0bGUgPSB3aXRoU3R5bGVzKHN0eWxlcykoKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc2VzLCBvbkNsb3NlLCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNdWlEaWFsb2dUaXRsZSBkaXNhYmxlVHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gey4uLm90aGVyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAge29uQ2xvc2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L011aURpYWxvZ1RpdGxlPlxyXG4gICAgKTtcclxufSk7XHJcblxyXG5jb25zdCBEaWFsb2dDb250ZW50ID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKVxyXG4gICAgfVxyXG59KSkoTXVpRGlhbG9nQ29udGVudCk7XHJcblxyXG5jb25zdCBNb3ZpZUNhcmQgPSB3aXRoU3R5bGVzKHN0eWxlcykoKHByb3BzKSA9PiB7XHJcbiAgICAvLyBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgeyBtb3ZpZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgICAgIG1vdmllUGxvdCgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbW92aWVJbWc7XHJcbiAgICBpZiAobW92aWUuUG9zdGVyID09PSAnTi9BJykge1xyXG4gICAgICAgIG1vdmllSW1nID0gJy9pbWFnZXMvNDA0LWltZy5wbmcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtb3ZpZUltZyA9IG1vdmllLlBvc3RlcjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbW92aWVQbG90ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoXHJcbiAgICAgICAgICAgICAgICAnaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTUwZjdjNzI5JnQ9JyArXHJcbiAgICAgICAgICAgICAgICAgICAgbW92aWUuVGl0bGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICcmcGxvdD1mdWxsJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBvdXRwdXQgPSBgXHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20+JHtyZXMuZGF0YS5QbG90fTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxvdE1vZGFsJykuaW5uZXJIVE1MID0gb3V0cHV0O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodD1cIjMwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17bW92aWVJbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW92aWVDYXJkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92aWUuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWWVhciBSZWxlYXNlZDoge21vdmllLlllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgey8qIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkFjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTGVhcm4gTW9yZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkFjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tPcGVufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEZ1bGwgUGxvdFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY3VzdG9taXplZC1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY3VzdG9taXplZC1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3ZpZS5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50IGRpdmlkZXJzIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsUGxvdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTm9iaXMgcXVpYSBhbmltaSBhdHF1ZSBjdWxwYSBzYXBpZW50ZSBlb3MgaWxsb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhZXJhdCByYXRpb25lIHNpbnQgbGFib3JlIG5paGlsLCBkaXN0aW5jdGlvIHZlcm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW0gZWFydW0gcXVhZSBxdWlzIG9wdGlvIGxhYm9yaW9zYW0gdmVyaXRhdGlzIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=