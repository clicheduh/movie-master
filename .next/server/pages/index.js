module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MovieCard.js":
/*!*********************************!*\
  !*** ./components/MovieCard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "C:\\Users\\HP\\Desktop\\movie-master\\components\\MovieCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















const styles = theme => ({
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
  },
  progress: {
    marginLeft: '10px',
    marginTop: '10px'
  },
  dialogTitle: {
    marginRight: '50px',
    marginLeft: '0px'
  },
  dialogContent: {
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingBottom: '25px',
    lineHeight: '1.75'
  }
});

const DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(props => {
  const {
    children,
    classes,
    onClose
  } = props,
        other = _objectWithoutProperties(props, ["children", "classes", "onClose"]);

  return __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default.a, _extends({
    disableTypography: true,
    className: classes.root
  }, other, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "h6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, children), onClose ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  })) : null);
});
const DialogContent = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11___default.a);
const MovieCard = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(props => {
  const {
    classes
  } = props;
  const {
    movie
  } = props;
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    moviePlot();
  };

  const handleClose = () => {
    setOpen(false);
  };

  var movieImg;

  if (movie.Poster === 'N/A') {
    movieImg = '/images/404-img.png';
  } else {
    movieImg = movie.Poster;
  }

  var moviePlot = async function () {
    setTimeout(() => {
      axios__WEBPACK_IMPORTED_MODULE_15___default.a.get('http://www.omdbapi.com/?apikey=50f7c729&t=' + movie.Title + '&plot=full').then(res => {
        let output = `
                <Typography gutterBottom className={classes.modalText}>${res.data.Plot}</Typography>
            `;
        document.getElementById('plotModal').innerHTML = output;
      });
    }, 1000);
  };

  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default.a, {
    component: "img",
    "max-height": "300px",
    image: movieImg,
    width: "100%",
    className: classes.movieCardImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.cardContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    className: classes.movieTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, movie.Title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }
  }, "Year Released: ", movie.Year))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    size: "small",
    className: classes.buttonActions,
    onClick: handleClickOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, "Full Plot"), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9___default.a, {
    onClose: handleClose,
    "aria-labelledby": "customized-dialog-title",
    open: open,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 17
    }
  }, __jsx(DialogTitle, {
    id: "customized-dialog-title",
    onClose: handleClose,
    className: classes.dialogTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 21
    }
  }, movie.Title), __jsx(DialogContent, {
    dividers: true,
    id: "plotModal",
    className: classes.dialogContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14___default.a, {
    color: "secondary",
    margin: "10px auto",
    className: classes.progress,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 25
    }
  })))));
});
/* harmony default export */ __webpack_exports__["default"] = (MovieCard);

/***/ }),

/***/ "./components/MovieGallery.js":
/*!************************************!*\
  !*** ./components/MovieGallery.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MovieCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MovieCard */ "./components/MovieCard.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\HP\\Desktop\\movie-master\\components\\MovieGallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
}));

const MovieGallery = props => {
  const classes = useStyles();
  const {
    movieArray
  } = props;
  var i,
      newMovieArray = [];
  movieArray.slice(0, 8);

  for (i = 0; i < movieArray.length; i++) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('http://www.omdbapi.com/?apikey=50f7c729&i=' + movieArray[i].imdbID).then(res => {
      newMovieArray.push(res.data);
    });
  }

  const output = movieArray ? movieArray.map(movie => {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 12,
      sm: 6,
      md: 4,
      key: Math.random(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, __jsx(_components_MovieCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.movieCard,
      movie: movie,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }));
  }) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "No movie available");
  return __jsx("div", {
    className: "root",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, output));
};

/* harmony default export */ __webpack_exports__["default"] = (MovieGallery);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Movie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Movie */ "@material-ui/icons/Movie");
/* harmony import */ var _material_ui_icons_Movie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Movie__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\HP\\Desktop\\movie-master\\components\\Navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    textTransform: 'uppercase'
  },
  myStyle: {
    backgroundColor: '#ee6e73'
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    position: "static",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.myStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    edge: "start",
    color: "inherit",
    "aria-label": "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_Movie__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "h6",
    className: classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "Movie-Master")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2085888330",
    __self: undefined
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSFBcXERlc2t0b3BcXG1vdmllLW1hc3RlclxcY29tcG9uZW50c1xcTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDNEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxIUFxcRGVza3RvcFxcbW92aWUtbWFzdGVyXFxjb21wb25lbnRzXFxOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTW92aWVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3ZpZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBmbGV4R3JvdzogMVxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcclxuICAgIH0sXHJcbiAgICBteVN0eWxlOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlNmU3MydcclxuICAgIH1cclxufSkpO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLm15U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZpZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTW92aWUtTWFzdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\HP\\\\Desktop\\\\movie-master\\\\components\\\\Navbar.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_MovieGallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MovieGallery */ "./components/MovieGallery.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\HP\\Desktop\\movie-master\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const styles = theme => ({
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
});

class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      movieTitle: '',
      movieYear: '',
      movieArray: []
    });

    _defineProperty(this, "handleChange", e => {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        [e.target.name]: e.target.value
      }));
    });

    _defineProperty(this, "onSearch", () => {
      if (this.state.movieTitle && this.state.movieYear) {
        axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('http://www.omdbapi.com/?apikey=50f7c729&type=series&s=' + this.state.movieTitle + '&y=' + this.state.movieYear).then(res => {
          var movieArray = res.data.Search;
          return movieArray;
        }).then(movieArray => {
          if (movieArray) {
            if (movieArray.length <= 8) {
              this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
                movieArray: movieArray
              }));
            } else {
              movieArray.slice(0, 8);
              this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
                movieArray: movieArray
              }));
            }
          } else {
            alert('No series found!');
          }
        }).catch(err => {
          throw err;
        });
      } else if (this.state.movieTitle && this.state.movieYear === '') {
        axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('http://www.omdbapi.com/?apikey=50f7c729&type=series&s=' + this.state.movieTitle).then(res => {
          var movieArray = res.data.Search;
          return movieArray;
        }).then(movieArray => {
          if (movieArray) {
            if (movieArray.length <= 8) {
              this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
                movieArray: movieArray
              }));
            } else {
              movieArray.slice(0, 8);
              this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
                movieArray: movieArray
              }));
            }
          } else {
            alert('No series found!');
          }
        }).catch(err => {
          throw err;
        });
      }
    });
  }

  render() {
    const {
      classes
    } = this.props;
    return __jsx("div", {
      className: "mainDiv",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {
      maxWidth: "lg",
      className: classes.headContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
      variant: "h4",
      gutterBottom: true,
      className: classes.mainHeading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 21
      }
    }, "Search for any series"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
      label: "Movie Title",
      name: "movieTitle",
      margin: "normal",
      className: classes.titleField,
      onChange: this.handleChange,
      color: "secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
      label: "Year",
      name: "movieYear",
      margin: "normal",
      className: classes.yearField,
      onChange: this.handleChange,
      color: "secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 21
      }
    })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.btnContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      variant: "contained",
      color: "secondary",
      className: classes.buttonActions,
      startIcon: __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 36
        }
      }),
      onClick: this.onSearch,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 21
      }
    }, "Search Series")), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.movieContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }
    }, __jsx(_components_MovieGallery__WEBPACK_IMPORTED_MODULE_9__["default"], {
      movieArray: this.state.movieArray,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 21
      }
    })));
  }

}

Index.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Index));

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/Movie":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Movie" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Movie");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb3ZpZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb3ZpZUdhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vdmllXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXhXaWR0aCIsInBhZGRpbmciLCJzcGFjaW5nIiwiY2FyZENvbnRlbnQiLCJtYXJnaW5Ub3AiLCJidXR0b25BY3Rpb25zIiwibWFyZ2luIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kIiwibW92aWVDYXJkSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93IiwibW92aWVUaXRsZSIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJjbG9zZUJ1dHRvbiIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJwYWxldHRlIiwiZ3JleSIsInByb2dyZXNzIiwibWFyZ2luTGVmdCIsImRpYWxvZ1RpdGxlIiwibWFyZ2luUmlnaHQiLCJkaWFsb2dDb250ZW50IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwibGluZUhlaWdodCIsIkRpYWxvZ1RpdGxlIiwid2l0aFN0eWxlcyIsInByb3BzIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwib25DbG9zZSIsIm90aGVyIiwiRGlhbG9nQ29udGVudCIsIk11aURpYWxvZ0NvbnRlbnQiLCJNb3ZpZUNhcmQiLCJtb3ZpZSIsIm9wZW4iLCJzZXRPcGVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhhbmRsZUNsaWNrT3BlbiIsIm1vdmllUGxvdCIsImhhbmRsZUNsb3NlIiwibW92aWVJbWciLCJQb3N0ZXIiLCJzZXRUaW1lb3V0IiwiYXhpb3MiLCJnZXQiLCJUaXRsZSIsInRoZW4iLCJyZXMiLCJvdXRwdXQiLCJkYXRhIiwiUGxvdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJZZWFyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImZsZXhHcm93IiwicGFwZXIiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwibW92aWVDYXJkIiwiTW92aWVHYWxsZXJ5IiwibW92aWVBcnJheSIsImkiLCJuZXdNb3ZpZUFycmF5Iiwic2xpY2UiLCJsZW5ndGgiLCJpbWRiSUQiLCJwdXNoIiwibWFwIiwiTWF0aCIsInJhbmRvbSIsInRpdGxlIiwidGV4dFRyYW5zZm9ybSIsIm15U3R5bGUiLCJOYXZiYXIiLCJoZWFkQ29udGFpbmVyIiwidGV4dEFsaWduIiwidGl0bGVGaWVsZCIsInllYXJGaWVsZCIsIm1vdmllQ29udGFpbmVyIiwiYnRuQ29udGFpbmVyIiwibWFyZ2luQm90dG9tIiwiSW5kZXgiLCJDb21wb25lbnQiLCJtb3ZpZVllYXIiLCJlIiwic2V0U3RhdGUiLCJzdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIlNlYXJjaCIsImFsZXJ0IiwiY2F0Y2giLCJlcnIiLCJyZW5kZXIiLCJtYWluSGVhZGluZyIsImhhbmRsZUNoYW5nZSIsIm9uU2VhcmNoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxLQUFZO0FBQ3ZCQyxNQUFJLEVBQUU7QUFDRkMsWUFBUSxFQUFFLEdBRFI7QUFFRkMsV0FBTyxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkO0FBRlAsR0FEaUI7QUFL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QWlCQztBQURaLENBQWxCO0FBSWVqRixxSUFBVSxDQUFDcEMsTUFBRCxDQUFWLENBQW1CaUcsS0FBbkIsQ0FBZixFOzs7Ozs7Ozs7OztBQ25MQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xyXG5pbXBvcnQgTXVpRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5pbXBvcnQgTXVpRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgbWF4V2lkdGg6IDM0NSxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpXHJcbiAgICB9LFxyXG4gICAgY2FyZENvbnRlbnQ6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICcxMHB4J1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbkFjdGlvbnM6IHtcclxuICAgICAgICBtYXJnaW46ICc1cHgnLFxyXG4gICAgICAgIHBhZGRpbmc6ICc4cHggMjBweCcsXHJcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWU2ZTczJyxcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNlODM5NDAnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdmllQ2FyZEltYWdlOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICc0MDBweCcsXHJcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXHJcbiAgICB9LFxyXG4gICAgbW92aWVUaXRsZToge1xyXG4gICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcclxuICAgIH0sXHJcbiAgICBjbG9zZUJ1dHRvbjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgIHRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzUwMF1cclxuICAgIH0sXHJcbiAgICBwcm9ncmVzczoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcclxuICAgICAgICBtYXJnaW5Ub3A6ICcxMHB4J1xyXG4gICAgfSxcclxuICAgIGRpYWxvZ1RpdGxlOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICc1MHB4JyxcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnMHB4J1xyXG4gICAgfSxcclxuICAgIGRpYWxvZ0NvbnRlbnQ6IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDogJzI1cHgnLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzI1cHgnLFxyXG4gICAgICAgIHBhZGRpbmdCb3R0b206ICcyNXB4JyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnMS43NSdcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBEaWFsb2dUaXRsZSA9IHdpdGhTdHlsZXMoc3R5bGVzKSgocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzZXMsIG9uQ2xvc2UsIC4uLm90aGVyIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE11aURpYWxvZ1RpdGxlIGRpc2FibGVUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSB7Li4ub3RoZXJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICB7b25DbG9zZSA/IChcclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvTXVpRGlhbG9nVGl0bGU+XHJcbiAgICApO1xyXG59KTtcclxuXHJcbmNvbnN0IERpYWxvZ0NvbnRlbnQgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpXHJcbiAgICB9XHJcbn0pKShNdWlEaWFsb2dDb250ZW50KTtcclxuXHJcbmNvbnN0IE1vdmllQ2FyZCA9IHdpdGhTdHlsZXMoc3R5bGVzKSgocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7IG1vdmllIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICAgICAgbW92aWVQbG90KCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBtb3ZpZUltZztcclxuICAgIGlmIChtb3ZpZS5Qb3N0ZXIgPT09ICdOL0EnKSB7XHJcbiAgICAgICAgbW92aWVJbWcgPSAnL2ltYWdlcy80MDQtaW1nLnBuZyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1vdmllSW1nID0gbW92aWUuUG9zdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtb3ZpZVBsb3QgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICdodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NTBmN2M3MjkmdD0nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92aWUuVGl0bGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJnBsb3Q9ZnVsbCdcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb3V0cHV0ID0gYFxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbFRleHR9PiR7cmVzLmRhdGEuUGxvdH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbG90TW9kYWwnKS5pbm5lckhUTUwgPSBvdXRwdXQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodD1cIjMwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17bW92aWVJbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW92aWVDYXJkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW92aWUuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWWVhciBSZWxlYXNlZDoge21vdmllLlllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkFjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tPcGVufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEZ1bGwgUGxvdFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY3VzdG9taXplZC1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY3VzdG9taXplZC1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRpYWxvZ1RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmllLlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2aWRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwbG90TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZGlhbG9nQ29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCIxMHB4IGF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVDYXJkO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBNb3ZpZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpZUNhcmQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDFcclxuICAgIH0sXHJcbiAgICBwYXBlcjoge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnlcclxuICAgIH0sXHJcbiAgICBtb3ZpZUNhcmQ6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJ1xyXG4gICAgfVxyXG59KSk7XHJcblxyXG5jb25zdCBNb3ZpZUdhbGxlcnkgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHsgbW92aWVBcnJheSB9ID0gcHJvcHM7XHJcbiAgICB2YXIgaSxcclxuICAgICAgICBuZXdNb3ZpZUFycmF5ID0gW107XHJcblxyXG4gICAgbW92aWVBcnJheS5zbGljZSgwLCA4KTtcclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgbW92aWVBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoXHJcbiAgICAgICAgICAgICAgICAnaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTUwZjdjNzI5Jmk9JyArXHJcbiAgICAgICAgICAgICAgICAgICAgbW92aWVBcnJheVtpXS5pbWRiSURcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXdNb3ZpZUFycmF5LnB1c2gocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IG91dHB1dCA9IG1vdmllQXJyYXkgPyAoXHJcbiAgICAgICAgbW92aWVBcnJheS5tYXAoKG1vdmllKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs0fSBrZXk9e01hdGgucmFuZG9tKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3ZpZUNhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllQ2FyZH0gbW92aWU9e21vdmllfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICApIDogKFxyXG4gICAgICAgIDxkaXY+Tm8gbW92aWUgYXZhaWxhYmxlPC9kaXY+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgICAgICAgICAge291dHB1dH1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllR2FsbGVyeTtcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IE1vdmllSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW92aWUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDFcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXHJcbiAgICB9LFxyXG4gICAgbXlTdHlsZToge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZTZlNzMnXHJcbiAgICB9XHJcbn0pKTtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5teVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW92aWVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1vdmllLU1hc3RlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IE1vdmllR2FsbGVyeSBmcm9tICcuLi9jb21wb25lbnRzL01vdmllR2FsbGVyeSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgICBoZWFkQ29udGFpbmVyOiB7XHJcbiAgICAgICAgbWFyZ2luOiAnNDVweCBhdXRvIDEwcHgnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICB0aXRsZUZpZWxkOiB7XHJcbiAgICAgICAgd2lkdGg6ICc0MCUnLFxyXG4gICAgICAgIG1hcmdpbjogJzIwcHggMTBweCdcclxuICAgIH0sXHJcbiAgICB5ZWFyRmllbGQ6IHtcclxuICAgICAgICB3aWR0aDogJzE1JScsXHJcbiAgICAgICAgbWFyZ2luOiAnMjBweCAxMHB4J1xyXG4gICAgfSxcclxuICAgIG1vdmllQ29udGFpbmVyOiB7XHJcbiAgICAgICAgbWF4V2lkdGg6ICc3OCUnLFxyXG4gICAgICAgIG1hcmdpbjogJzEwcHggYXV0byA0MHB4J1xyXG4gICAgfSxcclxuICAgIGJ0bkNvbnRhaW5lcjoge1xyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnNDBweCdcclxuICAgIH0sXHJcbiAgICBidXR0b25BY3Rpb25zOiB7XHJcbiAgICAgICAgbWFyZ2luOiAnNXB4JyxcclxuICAgICAgICBwYWRkaW5nOiAnOHB4IDIwcHgnLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlNmU3MycsXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZTgzOTQwJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBtb3ZpZVRpdGxlOiAnJyxcclxuICAgICAgICBtb3ZpZVllYXI6ICcnLFxyXG4gICAgICAgIG1vdmllQXJyYXk6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgb25TZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubW92aWVUaXRsZSAmJiB0aGlzLnN0YXRlLm1vdmllWWVhcikge1xyXG4gICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAgICAgLmdldChcclxuICAgICAgICAgICAgICAgICAgICAnaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTUwZjdjNzI5JnR5cGU9c2VyaWVzJnM9JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubW92aWVUaXRsZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcmeT0nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb3ZpZVllYXJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbW92aWVBcnJheSA9IHJlcy5kYXRhLlNlYXJjaDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW92aWVBcnJheTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigobW92aWVBcnJheSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3ZpZUFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3ZpZUFycmF5Lmxlbmd0aCA8PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmllQXJyYXk6IG1vdmllQXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92aWVBcnJheS5zbGljZSgwLCA4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92aWVBcnJheTogbW92aWVBcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnTm8gc2VyaWVzIGZvdW5kIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5tb3ZpZVRpdGxlICYmIHRoaXMuc3RhdGUubW92aWVZZWFyID09PSAnJykge1xyXG4gICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAgICAgLmdldChcclxuICAgICAgICAgICAgICAgICAgICAnaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTUwZjdjNzI5JnR5cGU9c2VyaWVzJnM9JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubW92aWVUaXRsZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtb3ZpZUFycmF5ID0gcmVzLmRhdGEuU2VhcmNoO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3ZpZUFycmF5O1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChtb3ZpZUFycmF5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmllQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmllQXJyYXkubGVuZ3RoIDw9IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92aWVBcnJheTogbW92aWVBcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZpZUFycmF5LnNsaWNlKDAsIDgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZpZUFycmF5OiBtb3ZpZUFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdObyBzZXJpZXMgZm91bmQhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkRpdlwiPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2ggZm9yIGFueSBzZXJpZXNcclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1vdmllIFRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vdmllVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWWVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb3ZpZVllYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMueWVhckZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkFjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNlYXJjaEljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2ggU2VyaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8TW92aWVHYWxsZXJ5IG1vdmllQXJyYXk9e3RoaXMuc3RhdGUubW92aWVBcnJheX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5JbmRleC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShJbmRleCk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92aWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9