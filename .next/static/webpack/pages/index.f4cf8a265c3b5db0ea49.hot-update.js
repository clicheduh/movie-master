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
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
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
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  };
});

var MovieGallery = function MovieGallery() {
  _s();

  var classes = useStyles();
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    spacing: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "xs=3")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "xs=3")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "xs=3")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "xs=3")));
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

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Grid/Grid.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grid/Grid.js ***!
  \*********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_requirePropFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/requirePropFactory */ "./node_modules/@material-ui/core/esm/utils/requirePropFactory.js");


// A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/





var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  var styles = {};
  GRID_SIZES.forEach(function (size) {
    var key = "grid-".concat(breakpoint, "-").concat(size);

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
      return;
    } // Keep 7 significant numbers.


    var width = "".concat(Math.round(size / 12 * 10e7) / 10e5, "%"); // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  }); // No need for a media query for the first size.

  if (breakpoint === 'xs') {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function getOffset(val) {
  var div = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var parse = parseFloat(val);
  return "".concat(parse / div).concat(String(val).replace(String(parse), '') || 'px');
}

function generateGutter(theme, breakpoint) {
  var styles = {};
  SPACINGS.forEach(function (spacing) {
    var themeSpacing = theme.spacing(spacing);

    if (themeSpacing === 0) {
      return;
    }

    styles["spacing-".concat(breakpoint, "-").concat(spacing)] = {
      margin: "-".concat(getOffset(themeSpacing, 2)),
      width: "calc(100% + ".concat(getOffset(themeSpacing), ")"),
      '& > $item': {
        padding: getOffset(themeSpacing, 2)
      }
    };
  });
  return styles;
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',


var styles = function styles(theme) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `container={true}`. */
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },

    /* Styles applied to the root element if `item={true}`. */
    item: {
      boxSizing: 'border-box',
      margin: '0' // For instance, it's useful when used with a `figure` element.

    },

    /* Styles applied to the root element if `zeroMinWidth={true}`. */
    zeroMinWidth: {
      minWidth: 0
    },

    /* Styles applied to the root element if `direction="column"`. */
    'direction-xs-column': {
      flexDirection: 'column'
    },

    /* Styles applied to the root element if `direction="column-reverse"`. */
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },

    /* Styles applied to the root element if `direction="row-reverse"`. */
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `wrap="nowrap"`. */
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },

    /* Styles applied to the root element if `wrap="reverse"`. */
    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse'
    },

    /* Styles applied to the root element if `alignItems="center"`. */
    'align-items-xs-center': {
      alignItems: 'center'
    },

    /* Styles applied to the root element if `alignItems="flex-start"`. */
    'align-items-xs-flex-start': {
      alignItems: 'flex-start'
    },

    /* Styles applied to the root element if `alignItems="flex-end"`. */
    'align-items-xs-flex-end': {
      alignItems: 'flex-end'
    },

    /* Styles applied to the root element if `alignItems="baseline"`. */
    'align-items-xs-baseline': {
      alignItems: 'baseline'
    },

    /* Styles applied to the root element if `alignContent="center"`. */
    'align-content-xs-center': {
      alignContent: 'center'
    },

    /* Styles applied to the root element if `alignContent="flex-start"`. */
    'align-content-xs-flex-start': {
      alignContent: 'flex-start'
    },

    /* Styles applied to the root element if `alignContent="flex-end"`. */
    'align-content-xs-flex-end': {
      alignContent: 'flex-end'
    },

    /* Styles applied to the root element if `alignContent="space-between"`. */
    'align-content-xs-space-between': {
      alignContent: 'space-between'
    },

    /* Styles applied to the root element if `alignContent="space-around"`. */
    'align-content-xs-space-around': {
      alignContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="center"`. */
    'justify-xs-center': {
      justifyContent: 'center'
    },

    /* Styles applied to the root element if `justify="flex-end"`. */
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },

    /* Styles applied to the root element if `justify="space-between"`. */
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },

    /* Styles applied to the root element if `justify="space-around"`. */
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="space-evenly"`. */
    'justify-xs-space-evenly': {
      justifyContent: 'space-evenly'
    }
  }, generateGutter(theme, 'xs'), theme.breakpoints.keys.reduce(function (accumulator, key) {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}));
};
var Grid = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Grid(props, ref) {
  var _props$alignContent = props.alignContent,
      alignContent = _props$alignContent === void 0 ? 'stretch' : _props$alignContent,
      _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'stretch' : _props$alignItems,
      classes = props.classes,
      classNameProp = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$container = props.container,
      container = _props$container === void 0 ? false : _props$container,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'row' : _props$direction,
      _props$item = props.item,
      item = _props$item === void 0 ? false : _props$item,
      _props$justify = props.justify,
      justify = _props$justify === void 0 ? 'flex-start' : _props$justify,
      _props$lg = props.lg,
      lg = _props$lg === void 0 ? false : _props$lg,
      _props$md = props.md,
      md = _props$md === void 0 ? false : _props$md,
      _props$sm = props.sm,
      sm = _props$sm === void 0 ? false : _props$sm,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 0 : _props$spacing,
      _props$wrap = props.wrap,
      wrap = _props$wrap === void 0 ? 'wrap' : _props$wrap,
      _props$xl = props.xl,
      xl = _props$xl === void 0 ? false : _props$xl,
      _props$xs = props.xs,
      xs = _props$xs === void 0 ? false : _props$xs,
      _props$zeroMinWidth = props.zeroMinWidth,
      zeroMinWidth = _props$zeroMinWidth === void 0 ? false : _props$zeroMinWidth,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);

  var className = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classNameProp, container && [classes.container, spacing !== 0 && classes["spacing-xs-".concat(String(spacing))]], item && classes.item, zeroMinWidth && classes.zeroMinWidth, direction !== 'row' && classes["direction-xs-".concat(String(direction))], wrap !== 'wrap' && classes["wrap-xs-".concat(String(wrap))], alignItems !== 'stretch' && classes["align-items-xs-".concat(String(alignItems))], alignContent !== 'stretch' && classes["align-content-xs-".concat(String(alignContent))], justify !== 'flex-start' && classes["justify-xs-".concat(String(justify))], xs !== false && classes["grid-xs-".concat(String(xs))], sm !== false && classes["grid-sm-".concat(String(sm))], md !== false && classes["grid-md-".concat(String(md))], lg !== false && classes["grid-lg-".concat(String(lg))], xl !== false && classes["grid-xl-".concat(String(xl))]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: className,
    ref: ref
  }, other));
});
 true ? Grid.propTypes = {
  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  alignContent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around']),

  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),

  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justify: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  sm: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(SPACINGS),

  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  wrap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['nowrap', 'wrap', 'wrap-reverse']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   */
  xl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   */
  xs: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   */
  zeroMinWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
var StyledGrid = Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiGrid'
})(Grid);

if (true) {
  var requireProp = Object(_utils_requirePropFactory__WEBPACK_IMPORTED_MODULE_6__["default"])('Grid');
  StyledGrid.propTypes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, StyledGrid.propTypes, {
    alignContent: requireProp('container'),
    alignItems: requireProp('container'),
    direction: requireProp('container'),
    justify: requireProp('container'),
    lg: requireProp('item'),
    md: requireProp('item'),
    sm: requireProp('item'),
    spacing: requireProp('container'),
    wrap: requireProp('container'),
    xs: requireProp('item'),
    zeroMinWidth: requireProp('item')
  });
}

/* harmony default export */ __webpack_exports__["default"] = (StyledGrid);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Grid/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grid/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Grid__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/requirePropFactory.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/requirePropFactory.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return requirePropFactory; });
function requirePropFactory(componentNameInError) {
  if (false) {}

  var requireProp = function requireProp(requiredProp) {
    return function (props, propName, componentName, location, propFullName) {
      var propFullNameSafe = propFullName || propName;

      if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
        return new Error("The prop `".concat(propFullNameSafe, "` of ") + "`".concat(componentNameInError, "` must be used on `").concat(requiredProp, "`."));
      }

      return null;
    };
  };

  return requireProp;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_MovieGallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MovieGallery */ "./components/MovieGallery.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\HP\\Desktop\\movie-master\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import Fetch from 'isomorphic-unfetch';






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    container: {
      textAlign: 'center',
      margin: '40px auto'
    },
    textField: {
      width: '600px',
      margin: '20px auto'
    }
  };
});

var Index = function Index() {
  _s();

  var classes = useStyles();
  return __jsx("div", {
    className: "mainDiv",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    maxWidth: "lg",
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h4",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "Search for any movie"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Search movies",
    margin: "normal",
    variant: "outlined",
    className: classes.textField,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx(_components_MovieGallery__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })));
};

_s(Index, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUdhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vR3JpZC9HcmlkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0dyaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvcmVxdWlyZVByb3BGYWN0b3J5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsIk1vdmllR2FsbGVyeSIsImNsYXNzZXMiLCJjb250YWluZXIiLCJtYXJnaW4iLCJ0ZXh0RmllbGQiLCJ3aWR0aCIsIkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxRQUFJLEVBQUU7QUFDRkMsY0FBUSxFQUFFO0FBRFIsS0FEK0I7QUFJckNDLFNBQUssRUFBRTtBQUNIQyxhQUFPLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQsQ0FETjtBQUVIQyxlQUFTLEVBQUUsUUFGUjtBQUdIQyxXQUFLLEVBQUVQLEtBQUssQ0FBQ1EsT0FBTixDQUFjQyxJQUFkLENBQW1CQztBQUh2QjtBQUo4QixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFXQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3ZC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ZXguZjRjZjhhMjY1YzNiNWRiMGVhNDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxXHJcbiAgICB9LFxyXG4gICAgcGFwZXI6IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnlcclxuICAgIH1cclxufSkpO1xyXG5cclxuY29uc3QgTW92aWVHYWxsZXJ5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+eHM9MzwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT54cz0zPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PnhzPTM8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+eHM9MzwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVHYWxsZXJ5O1xyXG4iLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG4vLyBBIGdyaWQgY29tcG9uZW50IHVzaW5nIHRoZSBmb2xsb3dpbmcgbGlicyBhcyBpbnNwaXJhdGlvbi5cbi8vXG4vLyBGb3IgdGhlIGltcGxlbWVudGF0aW9uOlxuLy8gLSBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy80LjMvbGF5b3V0L2dyaWQvXG4vLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlzdG9mZXJqb3NlcGgvZmxleGJveGdyaWQvYmxvYi9tYXN0ZXIvc3JjL2Nzcy9mbGV4Ym94Z3JpZC5jc3Ncbi8vIC0gaHR0cHM6Ly9naXRodWIuY29tL3JveWxlZTA3MDQvcmVhY3QtZmxleGJveC1ncmlkXG4vLyAtIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhcmpzLm9yZy9sYXRlc3QvbGF5b3V0L2ludHJvZHVjdGlvblxuLy9cbi8vIEZvbGxvdyB0aGlzIGZsZXhib3ggR3VpZGUgdG8gYmV0dGVyIHVuZGVyc3RhbmQgdGhlIHVuZGVybHlpbmcgbW9kZWw6XG4vLyAtIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc25pcHBldHMvY3NzL2EtZ3VpZGUtdG8tZmxleGJveC9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCByZXF1aXJlUHJvcEZhY3RvcnkgZnJvbSAnLi4vdXRpbHMvcmVxdWlyZVByb3BGYWN0b3J5JztcbnZhciBTUEFDSU5HUyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF07XG52YXIgR1JJRF9TSVpFUyA9IFsnYXV0bycsIHRydWUsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTJdO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUdyaWQoZ2xvYmFsU3R5bGVzLCB0aGVtZSwgYnJlYWtwb2ludCkge1xuICB2YXIgc3R5bGVzID0ge307XG4gIEdSSURfU0laRVMuZm9yRWFjaChmdW5jdGlvbiAoc2l6ZSkge1xuICAgIHZhciBrZXkgPSBcImdyaWQtXCIuY29uY2F0KGJyZWFrcG9pbnQsIFwiLVwiKS5jb25jYXQoc2l6ZSk7XG5cbiAgICBpZiAoc2l6ZSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gRm9yIHRoZSBhdXRvIGxheW91dGluZ1xuICAgICAgc3R5bGVzW2tleV0gPSB7XG4gICAgICAgIGZsZXhCYXNpczogMCxcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgIH07XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNpemUgPT09ICdhdXRvJykge1xuICAgICAgc3R5bGVzW2tleV0gPSB7XG4gICAgICAgIGZsZXhCYXNpczogJ2F1dG8nLFxuICAgICAgICBmbGV4R3JvdzogMCxcbiAgICAgICAgbWF4V2lkdGg6ICdub25lJ1xuICAgICAgfTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEtlZXAgNyBzaWduaWZpY2FudCBudW1iZXJzLlxuXG5cbiAgICB2YXIgd2lkdGggPSBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKHNpemUgLyAxMiAqIDEwZTcpIC8gMTBlNSwgXCIlXCIpOyAvLyBDbG9zZSB0byB0aGUgYm9vdHN0cmFwIGltcGxlbWVudGF0aW9uOlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iLzhmY2NhYTI0MzllOTdlYzcyYTRiN2RjNDJjY2MxZjY0OTc5MGFkYjAvc2Nzcy9taXhpbnMvX2dyaWQuc2NzcyNMNDFcblxuICAgIHN0eWxlc1trZXldID0ge1xuICAgICAgZmxleEJhc2lzOiB3aWR0aCxcbiAgICAgIGZsZXhHcm93OiAwLFxuICAgICAgbWF4V2lkdGg6IHdpZHRoXG4gICAgfTtcbiAgfSk7IC8vIE5vIG5lZWQgZm9yIGEgbWVkaWEgcXVlcnkgZm9yIHRoZSBmaXJzdCBzaXplLlxuXG4gIGlmIChicmVha3BvaW50ID09PSAneHMnKSB7XG4gICAgX2V4dGVuZHMoZ2xvYmFsU3R5bGVzLCBzdHlsZXMpO1xuICB9IGVsc2Uge1xuICAgIGdsb2JhbFN0eWxlc1t0aGVtZS5icmVha3BvaW50cy51cChicmVha3BvaW50KV0gPSBzdHlsZXM7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0KHZhbCkge1xuICB2YXIgZGl2ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuICB2YXIgcGFyc2UgPSBwYXJzZUZsb2F0KHZhbCk7XG4gIHJldHVybiBcIlwiLmNvbmNhdChwYXJzZSAvIGRpdikuY29uY2F0KFN0cmluZyh2YWwpLnJlcGxhY2UoU3RyaW5nKHBhcnNlKSwgJycpIHx8ICdweCcpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUd1dHRlcih0aGVtZSwgYnJlYWtwb2ludCkge1xuICB2YXIgc3R5bGVzID0ge307XG4gIFNQQUNJTkdTLmZvckVhY2goZnVuY3Rpb24gKHNwYWNpbmcpIHtcbiAgICB2YXIgdGhlbWVTcGFjaW5nID0gdGhlbWUuc3BhY2luZyhzcGFjaW5nKTtcblxuICAgIGlmICh0aGVtZVNwYWNpbmcgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdHlsZXNbXCJzcGFjaW5nLVwiLmNvbmNhdChicmVha3BvaW50LCBcIi1cIikuY29uY2F0KHNwYWNpbmcpXSA9IHtcbiAgICAgIG1hcmdpbjogXCItXCIuY29uY2F0KGdldE9mZnNldCh0aGVtZVNwYWNpbmcsIDIpKSxcbiAgICAgIHdpZHRoOiBcImNhbGMoMTAwJSArIFwiLmNvbmNhdChnZXRPZmZzZXQodGhlbWVTcGFjaW5nKSwgXCIpXCIpLFxuICAgICAgJyYgPiAkaXRlbSc6IHtcbiAgICAgICAgcGFkZGluZzogZ2V0T2Zmc2V0KHRoZW1lU3BhY2luZywgMilcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHN0eWxlcztcbn0gLy8gRGVmYXVsdCBDU1MgdmFsdWVzXG4vLyBmbGV4OiAnMCAxIGF1dG8nLFxuLy8gZmxleERpcmVjdGlvbjogJ3JvdycsXG4vLyBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4vLyBmbGV4V3JhcDogJ25vd3JhcCcsXG4vLyBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuXG5cbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbnRhaW5lcj17dHJ1ZX1gLiAqL1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBpdGVtPXt0cnVlfWAuICovXG4gICAgaXRlbToge1xuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46ICcwJyAvLyBGb3IgaW5zdGFuY2UsIGl0J3MgdXNlZnVsIHdoZW4gdXNlZCB3aXRoIGEgYGZpZ3VyZWAgZWxlbWVudC5cblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB6ZXJvTWluV2lkdGg9e3RydWV9YC4gKi9cbiAgICB6ZXJvTWluV2lkdGg6IHtcbiAgICAgIG1pbldpZHRoOiAwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpcmVjdGlvbj1cImNvbHVtblwiYC4gKi9cbiAgICAnZGlyZWN0aW9uLXhzLWNvbHVtbic6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpcmVjdGlvbj1cImNvbHVtbi1yZXZlcnNlXCJgLiAqL1xuICAgICdkaXJlY3Rpb24teHMtY29sdW1uLXJldmVyc2UnOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uLXJldmVyc2UnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpcmVjdGlvbj1cInJvdy1yZXZlcnNlXCJgLiAqL1xuICAgICdkaXJlY3Rpb24teHMtcm93LXJldmVyc2UnOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93LXJldmVyc2UnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHdyYXA9XCJub3dyYXBcImAuICovXG4gICAgJ3dyYXAteHMtbm93cmFwJzoge1xuICAgICAgZmxleFdyYXA6ICdub3dyYXAnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHdyYXA9XCJyZXZlcnNlXCJgLiAqL1xuICAgICd3cmFwLXhzLXdyYXAtcmV2ZXJzZSc6IHtcbiAgICAgIGZsZXhXcmFwOiAnd3JhcC1yZXZlcnNlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbkl0ZW1zPVwiY2VudGVyXCJgLiAqL1xuICAgICdhbGlnbi1pdGVtcy14cy1jZW50ZXInOiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiYC4gKi9cbiAgICAnYWxpZ24taXRlbXMteHMtZmxleC1zdGFydCc6IHtcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcImAuICovXG4gICAgJ2FsaWduLWl0ZW1zLXhzLWZsZXgtZW5kJzoge1xuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbkl0ZW1zPVwiYmFzZWxpbmVcImAuICovXG4gICAgJ2FsaWduLWl0ZW1zLXhzLWJhc2VsaW5lJzoge1xuICAgICAgYWxpZ25JdGVtczogJ2Jhc2VsaW5lJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcImAuICovXG4gICAgJ2FsaWduLWNvbnRlbnQteHMtY2VudGVyJzoge1xuICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbkNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJgLiAqL1xuICAgICdhbGlnbi1jb250ZW50LXhzLWZsZXgtc3RhcnQnOiB7XG4gICAgICBhbGlnbkNvbnRlbnQ6ICdmbGV4LXN0YXJ0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbkNvbnRlbnQ9XCJmbGV4LWVuZFwiYC4gKi9cbiAgICAnYWxpZ24tY29udGVudC14cy1mbGV4LWVuZCc6IHtcbiAgICAgIGFsaWduQ29udGVudDogJ2ZsZXgtZW5kJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbkNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJgLiAqL1xuICAgICdhbGlnbi1jb250ZW50LXhzLXNwYWNlLWJldHdlZW4nOiB7XG4gICAgICBhbGlnbkNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbkNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcImAuICovXG4gICAgJ2FsaWduLWNvbnRlbnQteHMtc3BhY2UtYXJvdW5kJzoge1xuICAgICAgYWxpZ25Db250ZW50OiAnc3BhY2UtYXJvdW5kJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBqdXN0aWZ5PVwiY2VudGVyXCJgLiAqL1xuICAgICdqdXN0aWZ5LXhzLWNlbnRlcic6IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBqdXN0aWZ5PVwiZmxleC1lbmRcImAuICovXG4gICAgJ2p1c3RpZnkteHMtZmxleC1lbmQnOiB7XG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiYC4gKi9cbiAgICAnanVzdGlmeS14cy1zcGFjZS1iZXR3ZWVuJzoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCJgLiAqL1xuICAgICdqdXN0aWZ5LXhzLXNwYWNlLWFyb3VuZCc6IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBqdXN0aWZ5PVwic3BhY2UtZXZlbmx5XCJgLiAqL1xuICAgICdqdXN0aWZ5LXhzLXNwYWNlLWV2ZW5seSc6IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5J1xuICAgIH1cbiAgfSwgZ2VuZXJhdGVHdXR0ZXIodGhlbWUsICd4cycpLCB0aGVtZS5icmVha3BvaW50cy5rZXlzLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGtleSkge1xuICAgIC8vIFVzZSBzaWRlIGVmZmVjdCBvdmVyIGltbXV0YWJpbGl0eSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlLlxuICAgIGdlbmVyYXRlR3JpZChhY2N1bXVsYXRvciwgdGhlbWUsIGtleSk7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9LCB7fSkpO1xufTtcbnZhciBHcmlkID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gR3JpZChwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkYWxpZ25Db250ZW50ID0gcHJvcHMuYWxpZ25Db250ZW50LFxuICAgICAgYWxpZ25Db250ZW50ID0gX3Byb3BzJGFsaWduQ29udGVudCA9PT0gdm9pZCAwID8gJ3N0cmV0Y2gnIDogX3Byb3BzJGFsaWduQ29udGVudCxcbiAgICAgIF9wcm9wcyRhbGlnbkl0ZW1zID0gcHJvcHMuYWxpZ25JdGVtcyxcbiAgICAgIGFsaWduSXRlbXMgPSBfcHJvcHMkYWxpZ25JdGVtcyA9PT0gdm9pZCAwID8gJ3N0cmV0Y2gnIDogX3Byb3BzJGFsaWduSXRlbXMsXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZVByb3AgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJGNvbnRhaW5lciA9IHByb3BzLmNvbnRhaW5lcixcbiAgICAgIGNvbnRhaW5lciA9IF9wcm9wcyRjb250YWluZXIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGNvbnRhaW5lcixcbiAgICAgIF9wcm9wcyRkaXJlY3Rpb24gPSBwcm9wcy5kaXJlY3Rpb24sXG4gICAgICBkaXJlY3Rpb24gPSBfcHJvcHMkZGlyZWN0aW9uID09PSB2b2lkIDAgPyAncm93JyA6IF9wcm9wcyRkaXJlY3Rpb24sXG4gICAgICBfcHJvcHMkaXRlbSA9IHByb3BzLml0ZW0sXG4gICAgICBpdGVtID0gX3Byb3BzJGl0ZW0gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGl0ZW0sXG4gICAgICBfcHJvcHMkanVzdGlmeSA9IHByb3BzLmp1c3RpZnksXG4gICAgICBqdXN0aWZ5ID0gX3Byb3BzJGp1c3RpZnkgPT09IHZvaWQgMCA/ICdmbGV4LXN0YXJ0JyA6IF9wcm9wcyRqdXN0aWZ5LFxuICAgICAgX3Byb3BzJGxnID0gcHJvcHMubGcsXG4gICAgICBsZyA9IF9wcm9wcyRsZyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbGcsXG4gICAgICBfcHJvcHMkbWQgPSBwcm9wcy5tZCxcbiAgICAgIG1kID0gX3Byb3BzJG1kID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRtZCxcbiAgICAgIF9wcm9wcyRzbSA9IHByb3BzLnNtLFxuICAgICAgc20gPSBfcHJvcHMkc20gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHNtLFxuICAgICAgX3Byb3BzJHNwYWNpbmcgPSBwcm9wcy5zcGFjaW5nLFxuICAgICAgc3BhY2luZyA9IF9wcm9wcyRzcGFjaW5nID09PSB2b2lkIDAgPyAwIDogX3Byb3BzJHNwYWNpbmcsXG4gICAgICBfcHJvcHMkd3JhcCA9IHByb3BzLndyYXAsXG4gICAgICB3cmFwID0gX3Byb3BzJHdyYXAgPT09IHZvaWQgMCA/ICd3cmFwJyA6IF9wcm9wcyR3cmFwLFxuICAgICAgX3Byb3BzJHhsID0gcHJvcHMueGwsXG4gICAgICB4bCA9IF9wcm9wcyR4bCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkeGwsXG4gICAgICBfcHJvcHMkeHMgPSBwcm9wcy54cyxcbiAgICAgIHhzID0gX3Byb3BzJHhzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyR4cyxcbiAgICAgIF9wcm9wcyR6ZXJvTWluV2lkdGggPSBwcm9wcy56ZXJvTWluV2lkdGgsXG4gICAgICB6ZXJvTWluV2lkdGggPSBfcHJvcHMkemVyb01pbldpZHRoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyR6ZXJvTWluV2lkdGgsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYWxpZ25Db250ZW50XCIsIFwiYWxpZ25JdGVtc1wiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb21wb25lbnRcIiwgXCJjb250YWluZXJcIiwgXCJkaXJlY3Rpb25cIiwgXCJpdGVtXCIsIFwianVzdGlmeVwiLCBcImxnXCIsIFwibWRcIiwgXCJzbVwiLCBcInNwYWNpbmdcIiwgXCJ3cmFwXCIsIFwieGxcIiwgXCJ4c1wiLCBcInplcm9NaW5XaWR0aFwiXSk7XG5cbiAgdmFyIGNsYXNzTmFtZSA9IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWVQcm9wLCBjb250YWluZXIgJiYgW2NsYXNzZXMuY29udGFpbmVyLCBzcGFjaW5nICE9PSAwICYmIGNsYXNzZXNbXCJzcGFjaW5nLXhzLVwiLmNvbmNhdChTdHJpbmcoc3BhY2luZykpXV0sIGl0ZW0gJiYgY2xhc3Nlcy5pdGVtLCB6ZXJvTWluV2lkdGggJiYgY2xhc3Nlcy56ZXJvTWluV2lkdGgsIGRpcmVjdGlvbiAhPT0gJ3JvdycgJiYgY2xhc3Nlc1tcImRpcmVjdGlvbi14cy1cIi5jb25jYXQoU3RyaW5nKGRpcmVjdGlvbikpXSwgd3JhcCAhPT0gJ3dyYXAnICYmIGNsYXNzZXNbXCJ3cmFwLXhzLVwiLmNvbmNhdChTdHJpbmcod3JhcCkpXSwgYWxpZ25JdGVtcyAhPT0gJ3N0cmV0Y2gnICYmIGNsYXNzZXNbXCJhbGlnbi1pdGVtcy14cy1cIi5jb25jYXQoU3RyaW5nKGFsaWduSXRlbXMpKV0sIGFsaWduQ29udGVudCAhPT0gJ3N0cmV0Y2gnICYmIGNsYXNzZXNbXCJhbGlnbi1jb250ZW50LXhzLVwiLmNvbmNhdChTdHJpbmcoYWxpZ25Db250ZW50KSldLCBqdXN0aWZ5ICE9PSAnZmxleC1zdGFydCcgJiYgY2xhc3Nlc1tcImp1c3RpZnkteHMtXCIuY29uY2F0KFN0cmluZyhqdXN0aWZ5KSldLCB4cyAhPT0gZmFsc2UgJiYgY2xhc3Nlc1tcImdyaWQteHMtXCIuY29uY2F0KFN0cmluZyh4cykpXSwgc20gIT09IGZhbHNlICYmIGNsYXNzZXNbXCJncmlkLXNtLVwiLmNvbmNhdChTdHJpbmcoc20pKV0sIG1kICE9PSBmYWxzZSAmJiBjbGFzc2VzW1wiZ3JpZC1tZC1cIi5jb25jYXQoU3RyaW5nKG1kKSldLCBsZyAhPT0gZmFsc2UgJiYgY2xhc3Nlc1tcImdyaWQtbGctXCIuY29uY2F0KFN0cmluZyhsZykpXSwgeGwgIT09IGZhbHNlICYmIGNsYXNzZXNbXCJncmlkLXhsLVwiLmNvbmNhdChTdHJpbmcoeGwpKV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gR3JpZC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBgYWxpZ24tY29udGVudGAgc3R5bGUgcHJvcGVydHkuXG4gICAqIEl0J3MgYXBwbGllZCBmb3IgYWxsIHNjcmVlbiBzaXplcy5cbiAgICovXG4gIGFsaWduQ29udGVudDogUHJvcFR5cGVzLm9uZU9mKFsnc3RyZXRjaCcsICdjZW50ZXInLCAnZmxleC1zdGFydCcsICdmbGV4LWVuZCcsICdzcGFjZS1iZXR3ZWVuJywgJ3NwYWNlLWFyb3VuZCddKSxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgYGFsaWduLWl0ZW1zYCBzdHlsZSBwcm9wZXJ0eS5cbiAgICogSXQncyBhcHBsaWVkIGZvciBhbGwgc2NyZWVuIHNpemVzLlxuICAgKi9cbiAgYWxpZ25JdGVtczogUHJvcFR5cGVzLm9uZU9mKFsnZmxleC1zdGFydCcsICdjZW50ZXInLCAnZmxleC1lbmQnLCAnc3RyZXRjaCcsICdiYXNlbGluZSddKSxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCB3aWxsIGhhdmUgdGhlIGZsZXggKmNvbnRhaW5lciogYmVoYXZpb3IuXG4gICAqIFlvdSBzaG91bGQgYmUgd3JhcHBpbmcgKml0ZW1zKiB3aXRoIGEgKmNvbnRhaW5lciouXG4gICAqL1xuICBjb250YWluZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBgZmxleC1kaXJlY3Rpb25gIHN0eWxlIHByb3BlcnR5LlxuICAgKiBJdCBpcyBhcHBsaWVkIGZvciBhbGwgc2NyZWVuIHNpemVzLlxuICAgKi9cbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydyb3cnLCAncm93LXJldmVyc2UnLCAnY29sdW1uJywgJ2NvbHVtbi1yZXZlcnNlJ10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgd2lsbCBoYXZlIHRoZSBmbGV4ICppdGVtKiBiZWhhdmlvci5cbiAgICogWW91IHNob3VsZCBiZSB3cmFwcGluZyAqaXRlbXMqIHdpdGggYSAqY29udGFpbmVyKi5cbiAgICovXG4gIGl0ZW06IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBganVzdGlmeS1jb250ZW50YCBzdHlsZSBwcm9wZXJ0eS5cbiAgICogSXQgaXMgYXBwbGllZCBmb3IgYWxsIHNjcmVlbiBzaXplcy5cbiAgICovXG4gIGp1c3RpZnk6IFByb3BUeXBlcy5vbmVPZihbJ2ZsZXgtc3RhcnQnLCAnY2VudGVyJywgJ2ZsZXgtZW5kJywgJ3NwYWNlLWJldHdlZW4nLCAnc3BhY2UtYXJvdW5kJywgJ3NwYWNlLWV2ZW5seSddKSxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzIHRoZSBjb21wb25lbnQgaXMgZ29pbmcgdG8gdXNlLlxuICAgKiBJdCdzIGFwcGxpZWQgZm9yIHRoZSBgbGdgIGJyZWFrcG9pbnQgYW5kIHdpZGVyIHNjcmVlbnMgaWYgbm90IG92ZXJyaWRkZW4uXG4gICAqL1xuICBsZzogUHJvcFR5cGVzLm9uZU9mKFtmYWxzZSwgJ2F1dG8nLCB0cnVlLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXSksXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG51bWJlciBvZiBncmlkcyB0aGUgY29tcG9uZW50IGlzIGdvaW5nIHRvIHVzZS5cbiAgICogSXQncyBhcHBsaWVkIGZvciB0aGUgYG1kYCBicmVha3BvaW50IGFuZCB3aWRlciBzY3JlZW5zIGlmIG5vdCBvdmVycmlkZGVuLlxuICAgKi9cbiAgbWQ6IFByb3BUeXBlcy5vbmVPZihbZmFsc2UsICdhdXRvJywgdHJ1ZSwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl0pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgZ3JpZHMgdGhlIGNvbXBvbmVudCBpcyBnb2luZyB0byB1c2UuXG4gICAqIEl0J3MgYXBwbGllZCBmb3IgdGhlIGBzbWAgYnJlYWtwb2ludCBhbmQgd2lkZXIgc2NyZWVucyBpZiBub3Qgb3ZlcnJpZGRlbi5cbiAgICovXG4gIHNtOiBQcm9wVHlwZXMub25lT2YoW2ZhbHNlLCAnYXV0bycsIHRydWUsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTJdKSxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgdHlwZSBgaXRlbWAgY29tcG9uZW50LlxuICAgKiBJdCBjYW4gb25seSBiZSB1c2VkIG9uIGEgdHlwZSBgY29udGFpbmVyYCBjb21wb25lbnQuXG4gICAqL1xuICBzcGFjaW5nOiBQcm9wVHlwZXMub25lT2YoU1BBQ0lOR1MpLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBgZmxleC13cmFwYCBzdHlsZSBwcm9wZXJ0eS5cbiAgICogSXQncyBhcHBsaWVkIGZvciBhbGwgc2NyZWVuIHNpemVzLlxuICAgKi9cbiAgd3JhcDogUHJvcFR5cGVzLm9uZU9mKFsnbm93cmFwJywgJ3dyYXAnLCAnd3JhcC1yZXZlcnNlJ10pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgZ3JpZHMgdGhlIGNvbXBvbmVudCBpcyBnb2luZyB0byB1c2UuXG4gICAqIEl0J3MgYXBwbGllZCBmb3IgdGhlIGB4bGAgYnJlYWtwb2ludCBhbmQgd2lkZXIgc2NyZWVucy5cbiAgICovXG4gIHhsOiBQcm9wVHlwZXMub25lT2YoW2ZhbHNlLCAnYXV0bycsIHRydWUsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTJdKSxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzIHRoZSBjb21wb25lbnQgaXMgZ29pbmcgdG8gdXNlLlxuICAgKiBJdCdzIGFwcGxpZWQgZm9yIGFsbCB0aGUgc2NyZWVuIHNpemVzIHdpdGggdGhlIGxvd2VzdCBwcmlvcml0eS5cbiAgICovXG4gIHhzOiBQcm9wVHlwZXMub25lT2YoW2ZhbHNlLCAnYXV0bycsIHRydWUsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTJdKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBpdCBzZXRzIGBtaW4td2lkdGg6IDBgIG9uIHRoZSBpdGVtLlxuICAgKiBSZWZlciB0byB0aGUgbGltaXRhdGlvbnMgc2VjdGlvbiBvZiB0aGUgZG9jdW1lbnRhdGlvbiB0byBiZXR0ZXIgdW5kZXJzdGFuZCB0aGUgdXNlIGNhc2UuXG4gICAqL1xuICB6ZXJvTWluV2lkdGg6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xudmFyIFN0eWxlZEdyaWQgPSB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpR3JpZCdcbn0pKEdyaWQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcmVxdWlyZVByb3AgPSByZXF1aXJlUHJvcEZhY3RvcnkoJ0dyaWQnKTtcbiAgU3R5bGVkR3JpZC5wcm9wVHlwZXMgPSBfZXh0ZW5kcyh7fSwgU3R5bGVkR3JpZC5wcm9wVHlwZXMsIHtcbiAgICBhbGlnbkNvbnRlbnQ6IHJlcXVpcmVQcm9wKCdjb250YWluZXInKSxcbiAgICBhbGlnbkl0ZW1zOiByZXF1aXJlUHJvcCgnY29udGFpbmVyJyksXG4gICAgZGlyZWN0aW9uOiByZXF1aXJlUHJvcCgnY29udGFpbmVyJyksXG4gICAganVzdGlmeTogcmVxdWlyZVByb3AoJ2NvbnRhaW5lcicpLFxuICAgIGxnOiByZXF1aXJlUHJvcCgnaXRlbScpLFxuICAgIG1kOiByZXF1aXJlUHJvcCgnaXRlbScpLFxuICAgIHNtOiByZXF1aXJlUHJvcCgnaXRlbScpLFxuICAgIHNwYWNpbmc6IHJlcXVpcmVQcm9wKCdjb250YWluZXInKSxcbiAgICB3cmFwOiByZXF1aXJlUHJvcCgnY29udGFpbmVyJyksXG4gICAgeHM6IHJlcXVpcmVQcm9wKCdpdGVtJyksXG4gICAgemVyb01pbldpZHRoOiByZXF1aXJlUHJvcCgnaXRlbScpXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRHcmlkOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0dyaWQnOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVQcm9wRmFjdG9yeShjb21wb25lbnROYW1lSW5FcnJvcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgdmFyIHJlcXVpcmVQcm9wID0gZnVuY3Rpb24gcmVxdWlyZVByb3AocmVxdWlyZWRQcm9wKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wRnVsbE5hbWVTYWZlID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAodHlwZW9mIHByb3BzW3Byb3BOYW1lXSAhPT0gJ3VuZGVmaW5lZCcgJiYgIXByb3BzW3JlcXVpcmVkUHJvcF0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIlRoZSBwcm9wIGBcIi5jb25jYXQocHJvcEZ1bGxOYW1lU2FmZSwgXCJgIG9mIFwiKSArIFwiYFwiLmNvbmNhdChjb21wb25lbnROYW1lSW5FcnJvciwgXCJgIG11c3QgYmUgdXNlZCBvbiBgXCIpLmNvbmNhdChyZXF1aXJlZFByb3AsIFwiYC5cIikpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiByZXF1aXJlUHJvcDtcbn0iLCIvLyBpbXBvcnQgRmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBNb3ZpZUdhbGxlcnkgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpZUdhbGxlcnknO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIG1hcmdpbjogJzQwcHggYXV0bydcclxuICAgIH0sXHJcbiAgICB0ZXh0RmllbGQ6IHtcclxuICAgICAgICB3aWR0aDogJzYwMHB4JyxcclxuICAgICAgICBtYXJnaW46ICcyMHB4IGF1dG8nXHJcbiAgICB9XHJcbn0pKTtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5EaXZcIj5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICBTZWFyY2ggZm9yIGFueSBtb3ZpZVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VhcmNoIG1vdmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE1vdmllR2FsbGVyeSAvPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==