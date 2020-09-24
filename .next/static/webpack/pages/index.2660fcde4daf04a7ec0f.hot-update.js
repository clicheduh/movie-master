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
      minHeight: '100%'
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
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, children), onClose ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
      lineNumber: 110,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.cardContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 118,
      columnNumber: 21
    }
  }, movie.Title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, "Year Released: ", movie.Year))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
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
      lineNumber: 144,
      columnNumber: 17
    }
  }, "Know more"), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClose: handleClose,
    "aria-labelledby": "customized-dialog-title",
    open: open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, __jsx(DialogTitle, {
    id: "customized-dialog-title",
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, movie.Title), __jsx(DialogContent, {
    dividers: true,
    id: "plotModal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUNhcmQuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb290IiwibWF4V2lkdGgiLCJwYWRkaW5nIiwic3BhY2luZyIsImNhcmRDb250ZW50IiwibWFyZ2luTGVmdCIsImJ1dHRvbkFjdGlvbnMiLCJtYXJnaW4iLCJtb3ZpZUNhcmRJbWFnZSIsIndpZHRoIiwibWluSGVpZ2h0IiwibW92aWVUaXRsZSIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJvdmVyZmxvdyIsImNsb3NlQnV0dG9uIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImNvbG9yIiwicGFsZXR0ZSIsImdyZXkiLCJEaWFsb2dUaXRsZSIsIndpdGhTdHlsZXMiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NlcyIsIm9uQ2xvc2UiLCJvdGhlciIsIkRpYWxvZ0NvbnRlbnQiLCJNdWlEaWFsb2dDb250ZW50IiwiTW92aWVDYXJkIiwibW92aWUiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVDbGlja09wZW4iLCJtb3ZpZVBsb3QiLCJoYW5kbGVDbG9zZSIsIm1vdmllSW1nIiwiUG9zdGVyIiwiYXhpb3MiLCJnZXQiLCJUaXRsZSIsInRoZW4iLCJyZXMiLCJvdXRwdXQiLCJkYXRhIiwiUGxvdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJZZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2QkMsUUFBSSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRSxHQURSO0FB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IiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI2NjBmY2RlNGRhZjA0YTdlYzBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IE11aURpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IE11aURpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgbWF4V2lkdGg6IDM0NSxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpXHJcbiAgICB9LFxyXG4gICAgY2FyZENvbnRlbnQ6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnNXB4J1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbkFjdGlvbnM6IHtcclxuICAgICAgICBtYXJnaW46ICc1cHgnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4J1xyXG4gICAgfSxcclxuICAgIG1vdmllQ2FyZEltYWdlOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIG1vdmllVGl0bGU6IHtcclxuICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXHJcbiAgICB9LFxyXG4gICAgY2xvc2VCdXR0b246IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICByaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MDBdXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgRGlhbG9nVGl0bGUgPSB3aXRoU3R5bGVzKHN0eWxlcykoKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc2VzLCBvbkNsb3NlLCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNdWlEaWFsb2dUaXRsZSBkaXNhYmxlVHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gey4uLm90aGVyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAge29uQ2xvc2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L011aURpYWxvZ1RpdGxlPlxyXG4gICAgKTtcclxufSk7XHJcblxyXG5jb25zdCBEaWFsb2dDb250ZW50ID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKVxyXG4gICAgfVxyXG59KSkoTXVpRGlhbG9nQ29udGVudCk7XHJcblxyXG5jb25zdCBNb3ZpZUNhcmQgPSB3aXRoU3R5bGVzKHN0eWxlcykoKHByb3BzKSA9PiB7XHJcbiAgICAvLyBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgeyBtb3ZpZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgICAgIG1vdmllUGxvdCgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbW92aWVJbWc7XHJcbiAgICBpZiAobW92aWUuUG9zdGVyID09PSAnTi9BJykge1xyXG4gICAgICAgIG1vdmllSW1nID0gJy9pbWFnZXMvNDA0LWltZy5wbmcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtb3ZpZUltZyA9IG1vdmllLlBvc3RlcjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbW92aWVQbG90ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoXHJcbiAgICAgICAgICAgICAgICAnaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTUwZjdjNzI5JnQ9JyArXHJcbiAgICAgICAgICAgICAgICAgICAgbW92aWUuVGl0bGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICcmcGxvdD1mdWxsJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBvdXRwdXQgPSBgXHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20+JHtyZXMuZGF0YS5QbG90fTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxvdE1vZGFsJykuaW5uZXJIVE1MID0gb3V0cHV0O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodD1cIjMwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17bW92aWVJbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW92aWVDYXJkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92aWUuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWWVhciBSZWxlYXNlZDoge21vdmllLlllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgey8qIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkFjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTGVhcm4gTW9yZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25BY3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBLbm93IG1vcmVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImN1c3RvbWl6ZWQtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImN1c3RvbWl6ZWQtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92aWUuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudCBkaXZpZGVycyBpZD1cInBsb3RNb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsaXQuIE5vYmlzIHF1aWEgYW5pbWkgYXRxdWUgY3VscGEgc2FwaWVudGUgZW9zIGlsbG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YWVyYXQgcmF0aW9uZSBzaW50IGxhYm9yZSBuaWhpbCwgZGlzdGluY3RpbyB2ZXJvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFtIGVhcnVtIHF1YWUgcXVpcyBvcHRpbyBsYWJvcmlvc2FtIHZlcml0YXRpcyFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9