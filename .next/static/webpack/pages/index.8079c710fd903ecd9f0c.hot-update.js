webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js ***!
  \*********************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");








var SIZE = 44;

function getRelativeValue(value, min, max) {
  return (Math.min(Math.max(min, value), max) - min) / (max - min);
}

function easeOut(t) {
  t = getRelativeValue(t, 0, 1); // https://gist.github.com/gre/1650294

  t = (t -= 1) * t * t + 1;
  return t;
}

function easeIn(t) {
  return t * t;
}

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-block'
    },

    /* Styles applied to the root element if `variant="static"`. */
    static: {
      transition: theme.transitions.create('transform')
    },

    /* Styles applied to the root element if `variant="indeterminate"`. */
    indeterminate: {
      animation: '$circular-rotate 1.4s linear infinite'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the `svg` element. */
    svg: {
      display: 'block' // Keeps the progress centered

    },

    /* Styles applied to the `circle` svg path. */
    circle: {
      stroke: 'currentColor' // Use butt to follow the specification, by chance, it's already the default CSS value.
      // strokeLinecap: 'butt',

    },

    /* Styles applied to the `circle` svg path if `variant="static"`. */
    circleStatic: {
      transition: theme.transitions.create('stroke-dashoffset')
    },

    /* Styles applied to the `circle` svg path if `variant="indeterminate"`. */
    circleIndeterminate: {
      animation: '$circular-dash 1.4s ease-in-out infinite',
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: '80px, 200px',
      strokeDashoffset: '0px' // Add the unit to fix a Edge 16 and below bug.

    },
    '@keyframes circular-rotate': {
      '0%': {
        // Fix IE 11 wobbly
        transformOrigin: '50% 50%'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    },
    '@keyframes circular-dash': {
      '0%': {
        strokeDasharray: '1px, 200px',
        strokeDashoffset: '0px'
      },
      '50%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-15px'
      },
      '100%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-125px'
      }
    },

    /* Styles applied to the `circle` svg path if `disableShrink={true}`. */
    circleDisableShrink: {
      animation: 'none'
    }
  };
};
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */

var CircularProgress = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function CircularProgress(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$disableShrink = props.disableShrink,
      disableShrink = _props$disableShrink === void 0 ? false : _props$disableShrink,
      _props$size = props.size,
      size = _props$size === void 0 ? 40 : _props$size,
      style = props.style,
      _props$thickness = props.thickness,
      thickness = _props$thickness === void 0 ? 3.6 : _props$thickness,
      _props$value = props.value,
      value = _props$value === void 0 ? 0 : _props$value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'indeterminate' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]);

  var circleStyle = {};
  var rootStyle = {};
  var rootProps = {};

  if (variant === 'determinate' || variant === 'static') {
    var circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps['aria-valuenow'] = Math.round(value);

    if (variant === 'static') {
      circleStyle.strokeDashoffset = "".concat(((100 - value) / 100 * circumference).toFixed(3), "px");
      rootStyle.transform = 'rotate(-90deg)';
    } else {
      circleStyle.strokeDashoffset = "".concat((easeIn((100 - value) / 100) * circumference).toFixed(3), "px");
      rootStyle.transform = "rotate(".concat((easeOut(value / 70) * 270).toFixed(3), "deg)");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, color !== 'inherit' && classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(color))], {
      'indeterminate': classes.indeterminate,
      'static': classes.static
    }[variant]),
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: size,
      height: size
    }, rootStyle, style),
    ref: ref,
    role: "progressbar"
  }, rootProps, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("svg", {
    className: classes.svg,
    viewBox: "".concat(SIZE / 2, " ").concat(SIZE / 2, " ").concat(SIZE, " ").concat(SIZE)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("circle", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.circle, disableShrink && classes.circleDisableShrink, {
      'indeterminate': classes.circleIndeterminate,
      'static': classes.circleStatic
    }[variant]),
    style: circleStyle,
    cx: SIZE,
    cy: SIZE,
    r: (SIZE - thickness) / 2,
    fill: "none",
    strokeWidth: thickness
  })));
});
 true ? CircularProgress.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['inherit', 'primary', 'secondary']),

  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   */
  disableShrink: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, function (props) {
    if (props.disableShrink && props.variant && props.variant !== 'indeterminate') {
      return new Error('Material-UI: You have provided the `disableShrink` prop ' + 'with a variant other than `indeterminate`. This will have no effect.');
    }

    return null;
  }),

  /**
   * The size of the circle.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, e.g '3rem'.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The thickness of the circle.
   */
  thickness: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['determinate', 'indeterminate', 'static'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiCircularProgress',
  flip: false
})(CircularProgress));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/CircularProgress/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CircularProgress/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CircularProgress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CircularProgress__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js ***!
  \***************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end',
    flex: '0 0 auto'
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var DialogActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function DialogActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["disableSpacing", "classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 true ? DialogActions.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiDialogActions'
})(DialogActions));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogActions/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogActions/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DialogActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DialogActions__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js ***!
  \*****************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");








var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    height: '0.01em',
    // Fix IE 11 flexbox alignment. To remove at some point.
    maxHeight: '2em',
    alignItems: 'center',
    whiteSpace: 'nowrap'
  },

  /* Styles applied to the root element if `variant="filled"`. */
  filled: {
    '&$positionStart:not($hiddenLabel)': {
      marginTop: 16
    }
  },

  /* Styles applied to the root element if `position="start"`. */
  positionStart: {
    marginRight: 8
  },

  /* Styles applied to the root element if `position="end"`. */
  positionEnd: {
    marginLeft: 8
  },

  /* Styles applied to the root element if `disablePointerEvents=true`. */
  disablePointerEvents: {
    pointerEvents: 'none'
  },

  /* Styles applied if the adornment is used inside <FormControl hiddenLabel />. */
  hiddenLabel: {},

  /* Styles applied if the adornment is used inside <FormControl margin="dense" />. */
  marginDense: {}
};
var InputAdornment = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function InputAdornment(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disablePointer = props.disablePointerEvents,
      disablePointerEvents = _props$disablePointer === void 0 ? false : _props$disablePointer,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      position = props.position,
      variantProp = props.variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"]);

  var muiFormControl = Object(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__["useFormControl"])() || {};
  var variant = variantProp;

  if (variantProp && muiFormControl.variant) {
    if (true) {
      if (variantProp === muiFormControl.variant) {
        console.error('Material-UI: The `InputAdornment` variant infers the variant prop ' + 'you do not have to provide one.');
      }
    }
  }

  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, disablePointerEvents && classes.disablePointerEvents, muiFormControl.hiddenLabel && classes.hiddenLabel, variant === 'filled' && classes.filled, {
      'start': classes.positionStart,
      'end': classes.positionEnd
    }[position], muiFormControl.margin === 'dense' && classes.marginDense),
    ref: ref
  }, other), typeof children === 'string' && !disableTypography ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "textSecondary"
  }, children) : children));
});
 true ? InputAdornment.propTypes = {
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

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
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the input on click.
   */
  disablePointerEvents: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If children is a string then disable wrapping in a Typography component.
   */
  disableTypography: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  muiFormControl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['start', 'end']),

  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiInputAdornment'
})(InputAdornment));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputAdornment/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputAdornment/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputAdornment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InputAdornment__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tab/Tab.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tab/Tab.js ***!
  \*******************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_unsupportedProp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/unsupportedProp */ "./node_modules/@material-ui/core/esm/utils/unsupportedProp.js");










var styles = function styles(theme) {
  var _extends2;

  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.typography.button, (_extends2 = {
      maxWidth: 264,
      minWidth: 72,
      position: 'relative',
      boxSizing: 'border-box',
      minHeight: 48,
      flexShrink: 0,
      padding: '6px 12px'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, theme.breakpoints.up('sm'), {
      padding: '6px 24px'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, "overflow", 'hidden'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, "whiteSpace", 'normal'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, "textAlign", 'center'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, theme.breakpoints.up('sm'), {
      minWidth: 160
    }), _extends2)),

    /* Styles applied to the root element if both `icon` and `label` are provided. */
    labelIcon: {
      minHeight: 72,
      paddingTop: 9,
      '& $wrapper > *:first-child': {
        marginBottom: 6
      }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="inherit"`. */
    textColorInherit: {
      color: 'inherit',
      opacity: 0.7,
      '&$selected': {
        opacity: 1
      },
      '&$disabled': {
        opacity: 0.5
      }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="primary"`. */
    textColorPrimary: {
      color: theme.palette.text.secondary,
      '&$selected': {
        color: theme.palette.primary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="secondary"`. */
    textColorSecondary: {
      color: theme.palette.text.secondary,
      '&$selected': {
        color: theme.palette.secondary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    },

    /* Pseudo-class applied to the root element if `selected={true}` (controlled by the Tabs component). */
    selected: {},

    /* Pseudo-class applied to the root element if `disabled={true}` (controlled by the Tabs component). */
    disabled: {},

    /* Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
    fullWidth: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: 'none'
    },

    /* Styles applied to the root element if `wrapped={true}`. */
    wrapped: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1.5
    },

    /* Styles applied to the `icon` and `label`'s wrapper element. */
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'column'
    }
  };
};
var Tab = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Tab(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      fullWidth = props.fullWidth,
      icon = props.icon,
      indicator = props.indicator,
      label = props.label,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      selected = props.selected,
      selectionFollowsFocus = props.selectionFollowsFocus,
      _props$textColor = props.textColor,
      textColor = _props$textColor === void 0 ? 'inherit' : _props$textColor,
      value = props.value,
      _props$wrapped = props.wrapped,
      wrapped = _props$wrapped === void 0 ? false : _props$wrapped,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["classes", "className", "disabled", "disableFocusRipple", "fullWidth", "icon", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"]);

  var handleClick = function handleClick(event) {
    if (onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleFocus = function handleFocus(event) {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_ButtonBase__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    focusRipple: !disableFocusRipple,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, classes["textColor".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(textColor))], className, disabled && classes.disabled, selected && classes.selected, label && icon && classes.labelIcon, fullWidth && classes.fullWidth, wrapped && classes.wrapped),
    ref: ref,
    role: "tab",
    "aria-selected": selected,
    disabled: disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    tabIndex: selected ? 0 : -1
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
    className: classes.wrapper
  }, icon, label), indicator);
});
 true ? Tab.propTypes = {
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: _utils_unsupportedProp__WEBPACK_IMPORTED_MODULE_9__["default"],

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * If `true`, the tab will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   */
  disableFocusRipple: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The icon element.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * @ignore
   * For server-side rendering consideration, we let the selected tab
   * render the indicator.
   */
  indicator: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * The label element.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * @ignore
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  selectionFollowsFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['secondary', 'primary', 'inherit']),

  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   */
  wrapped: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiTab'
})(Tab));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tab/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tab/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab */ "./node_modules/@material-ui/core/esm/Tab/Tab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Tab__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TabScrollButton/TabScrollButton.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TabScrollButton/TabScrollButton.js ***!
  \*******************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _internal_svg_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/svg-icons/KeyboardArrowLeft */ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowLeft.js");
/* harmony import */ var _internal_svg_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/svg-icons/KeyboardArrowRight */ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowRight.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");



/* eslint-disable jsx-a11y/aria-role */







var styles = {
  /* Styles applied to the root element. */
  root: {
    width: 40,
    flexShrink: 0,
    opacity: 0.8,
    '&$disabled': {
      opacity: 0
    }
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    width: '100%',
    height: 40,
    '& svg': {
      transform: 'rotate(90deg)'
    }
  },

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {}
};

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5__["default"], {
  fontSize: "small"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__["default"], {
  fontSize: "small"
});

var TabScrollButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TabScrollButton(props, ref) {
  var classes = props.classes,
      classNameProp = props.className,
      direction = props.direction,
      orientation = props.orientation,
      disabled = props.disabled,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "direction", "orientation", "disabled"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ButtonBase__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    component: "div",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classNameProp, disabled && classes.disabled, orientation === 'vertical' && classes.vertical),
    ref: ref,
    role: null,
    tabIndex: null
  }, other), direction === 'left' ? _ref : _ref2);
});
 true ? TabScrollButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Which direction should the button indicate?
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right']).isRequired,

  /**
   * If `true`, the element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['horizontal', 'vertical']).isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiTabScrollButton'
})(TabScrollButton));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TabScrollButton/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TabScrollButton/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabScrollButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabScrollButton */ "./node_modules/@material-ui/core/esm/TabScrollButton/TabScrollButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TabScrollButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tabs/ScrollbarSize.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tabs/ScrollbarSize.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollbarSize; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");





var styles = {
  width: 99,
  height: 99,
  position: 'absolute',
  top: -9999,
  overflow: 'scroll'
};
/**
 * @ignore - internal component.
 * The component originates from https://github.com/STORIS/react-scrollbar-size.
 * It has been moved into the core in order to minimize the bundle size.
 */

function ScrollbarSize(props) {
  var onChange = props.onChange,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["onChange"]);

  var scrollbarHeight = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]();
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);

  var setMeasurements = function setMeasurements() {
    scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    var handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
      var prevHeight = scrollbarHeight.current;
      setMeasurements();

      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [onChange]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    style: styles,
    ref: nodeRef
  }, other));
}
 true ? ScrollbarSize.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
} : undefined;

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tabs/TabIndicator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tabs/TabIndicator.js ***!
  \*****************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");







var styles = function styles(theme) {
  return {
    root: {
      position: 'absolute',
      height: 2,
      bottom: 0,
      width: '100%',
      transition: theme.transitions.create()
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main
    },
    vertical: {
      height: '100%',
      width: 2,
      right: 0
    }
  };
};
/**
 * @ignore - internal component.
 */

var TabIndicator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TabIndicator(props, ref) {
  var classes = props.classes,
      className = props.className,
      color = props.color,
      orientation = props.orientation,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "orientation"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color))], className, orientation === 'vertical' && classes.vertical),
    ref: ref
  }, other));
});
 true ? TabIndicator.propTypes = {
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
   * @ignore
   * The color of the tab indicator.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']).isRequired,

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['horizontal', 'vertical']).isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'PrivateTabIndicator'
})(TabIndicator));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tabs/Tabs.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tabs/Tabs.js ***!
  \*********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");
/* harmony import */ var _utils_scrollLeft__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/scrollLeft */ "./node_modules/@material-ui/core/esm/utils/scrollLeft.js");
/* harmony import */ var _internal_animate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../internal/animate */ "./node_modules/@material-ui/core/esm/internal/animate.js");
/* harmony import */ var _ScrollbarSize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ScrollbarSize */ "./node_modules/@material-ui/core/esm/Tabs/ScrollbarSize.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _TabIndicator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TabIndicator */ "./node_modules/@material-ui/core/esm/Tabs/TabIndicator.js");
/* harmony import */ var _TabScrollButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../TabScrollButton */ "./node_modules/@material-ui/core/esm/TabScrollButton/index.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");


















var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      overflow: 'hidden',
      minHeight: 48,
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      display: 'flex'
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      flexDirection: 'column'
    },

    /* Styles applied to the flex container element. */
    flexContainer: {
      display: 'flex'
    },

    /* Styles applied to the flex container element if `orientation="vertical"`. */
    flexContainerVertical: {
      flexDirection: 'column'
    },

    /* Styles applied to the flex container element if `centered={true}` & `!variant="scrollable"`. */
    centered: {
      justifyContent: 'center'
    },

    /* Styles applied to the tablist element. */
    scroller: {
      position: 'relative',
      display: 'inline-block',
      flex: '1 1 auto',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the tablist element if `!variant="scrollable"`. */
    fixed: {
      overflowX: 'hidden',
      width: '100%'
    },

    /* Styles applied to the tablist element if `variant="scrollable"`. */
    scrollable: {
      overflowX: 'scroll',
      // Hide dimensionless scrollbar on MacOS
      scrollbarWidth: 'none',
      // Firefox
      '&::-webkit-scrollbar': {
        display: 'none' // Safari + Chrome

      }
    },

    /* Styles applied to the `ScrollButtonComponent` component. */
    scrollButtons: {},

    /* Styles applied to the `ScrollButtonComponent` component if `scrollButtons="auto"` or scrollButtons="desktop"`. */
    scrollButtonsDesktop: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.breakpoints.down('xs'), {
      display: 'none'
    }),

    /* Styles applied to the `TabIndicator` component. */
    indicator: {}
  };
};
var Tabs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Tabs(props, ref) {
  var ariaLabel = props['aria-label'],
      ariaLabelledBy = props['aria-labelledby'],
      action = props.action,
      _props$centered = props.centered,
      centered = _props$centered === void 0 ? false : _props$centered,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$indicatorColor = props.indicatorColor,
      indicatorColor = _props$indicatorColor === void 0 ? 'secondary' : _props$indicatorColor,
      onChange = props.onChange,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$ScrollButtonCo = props.ScrollButtonComponent,
      ScrollButtonComponent = _props$ScrollButtonCo === void 0 ? _TabScrollButton__WEBPACK_IMPORTED_MODULE_15__["default"] : _props$ScrollButtonCo,
      _props$scrollButtons = props.scrollButtons,
      scrollButtons = _props$scrollButtons === void 0 ? 'auto' : _props$scrollButtons,
      selectionFollowsFocus = props.selectionFollowsFocus,
      _props$TabIndicatorPr = props.TabIndicatorProps,
      TabIndicatorProps = _props$TabIndicatorPr === void 0 ? {} : _props$TabIndicatorPr,
      TabScrollButtonProps = props.TabScrollButtonProps,
      _props$textColor = props.textColor,
      textColor = _props$textColor === void 0 ? 'inherit' : _props$textColor,
      value = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["aria-label", "aria-labelledby", "action", "centered", "children", "classes", "className", "component", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_17__["default"])();
  var scrollable = variant === 'scrollable';
  var isRtl = theme.direction === 'rtl';
  var vertical = orientation === 'vertical';
  var scrollStart = vertical ? 'scrollTop' : 'scrollLeft';
  var start = vertical ? 'top' : 'left';
  var end = vertical ? 'bottom' : 'right';
  var clientSize = vertical ? 'clientHeight' : 'clientWidth';
  var size = vertical ? 'height' : 'width';

  if (true) {
    if (centered && scrollable) {
      console.error('Material-UI: You can not use the `centered={true}` and `variant="scrollable"` properties ' + 'at the same time on a `Tabs` component.');
    }
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](false),
      mounted = _React$useState[0],
      setMounted = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_3__["useState"]({}),
      indicatorStyle = _React$useState2[0],
      setIndicatorStyle = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__["useState"]({
    start: false,
    end: false
  }),
      displayScroll = _React$useState3[0],
      setDisplayScroll = _React$useState3[1];

  var _React$useState4 = react__WEBPACK_IMPORTED_MODULE_3__["useState"]({
    overflow: 'hidden',
    marginBottom: null
  }),
      scrollerStyle = _React$useState4[0],
      setScrollerStyle = _React$useState4[1];

  var valueToIndex = new Map();
  var tabsRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  var tabListRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);

  var getTabsMeta = function getTabsMeta() {
    var tabsNode = tabsRef.current;
    var tabsMeta;

    if (tabsNode) {
      var rect = tabsNode.getBoundingClientRect(); // create a new object with ClientRect class props + scrollLeft

      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollLeftNormalized: Object(_utils_scrollLeft__WEBPACK_IMPORTED_MODULE_10__["getNormalizedScrollLeft"])(tabsNode, theme.direction),
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      };
    }

    var tabMeta;

    if (tabsNode && value !== false) {
      var _children = tabListRef.current.children;

      if (_children.length > 0) {
        var tab = _children[valueToIndex.get(value)];

        if (true) {
          if (!tab) {
            console.error(["Material-UI: The value provided to the Tabs component is invalid.", "None of the Tabs' children match with `".concat(value, "`."), valueToIndex.keys ? "You can provide one of the following values: ".concat(Array.from(valueToIndex.keys()).join(', '), ".") : null].join('\n'));
          }
        }

        tabMeta = tab ? tab.getBoundingClientRect() : null;
      }
    }

    return {
      tabsMeta: tabsMeta,
      tabMeta: tabMeta
    };
  };

  var updateIndicatorState = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_16__["default"])(function () {
    var _newIndicatorStyle;

    var _getTabsMeta = getTabsMeta(),
        tabsMeta = _getTabsMeta.tabsMeta,
        tabMeta = _getTabsMeta.tabMeta;

    var startValue = 0;

    if (tabMeta && tabsMeta) {
      if (vertical) {
        startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
      } else {
        var correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
        startValue = tabMeta.left - tabsMeta.left + correction;
      }
    }

    var newIndicatorStyle = (_newIndicatorStyle = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_newIndicatorStyle, start, startValue), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_newIndicatorStyle, size, tabMeta ? tabMeta[size] : 0), _newIndicatorStyle);

    if (isNaN(indicatorStyle[start]) || isNaN(indicatorStyle[size])) {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      var dStart = Math.abs(indicatorStyle[start] - newIndicatorStyle[start]);
      var dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);

      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });

  var scroll = function scroll(scrollValue) {
    Object(_internal_animate__WEBPACK_IMPORTED_MODULE_11__["default"])(scrollStart, tabsRef.current, scrollValue);
  };

  var moveTabsScroll = function moveTabsScroll(delta) {
    var scrollValue = tabsRef.current[scrollStart];

    if (vertical) {
      scrollValue += delta;
    } else {
      scrollValue += delta * (isRtl ? -1 : 1); // Fix for Edge

      scrollValue *= isRtl && Object(_utils_scrollLeft__WEBPACK_IMPORTED_MODULE_10__["detectScrollType"])() === 'reverse' ? -1 : 1;
    }

    scroll(scrollValue);
  };

  var handleStartScrollClick = function handleStartScrollClick() {
    moveTabsScroll(-tabsRef.current[clientSize]);
  };

  var handleEndScrollClick = function handleEndScrollClick() {
    moveTabsScroll(tabsRef.current[clientSize]);
  };

  var handleScrollbarSizeChange = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (scrollbarHeight) {
    setScrollerStyle({
      overflow: null,
      marginBottom: -scrollbarHeight
    });
  }, []);

  var getConditionalElements = function getConditionalElements() {
    var conditionalElements = {};
    conditionalElements.scrollbarSizeListener = scrollable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_ScrollbarSize__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.scrollable,
      onChange: handleScrollbarSizeChange
    }) : null;
    var scrollButtonsActive = displayScroll.start || displayScroll.end;
    var showScrollButtons = scrollable && (scrollButtons === 'auto' && scrollButtonsActive || scrollButtons === 'desktop' || scrollButtons === 'on');
    conditionalElements.scrollButtonStart = showScrollButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ScrollButtonComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      orientation: orientation,
      direction: isRtl ? 'right' : 'left',
      onClick: handleStartScrollClick,
      disabled: !displayScroll.start,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.scrollButtons, scrollButtons !== 'on' && classes.scrollButtonsDesktop)
    }, TabScrollButtonProps)) : null;
    conditionalElements.scrollButtonEnd = showScrollButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ScrollButtonComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      orientation: orientation,
      direction: isRtl ? 'left' : 'right',
      onClick: handleEndScrollClick,
      disabled: !displayScroll.end,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.scrollButtons, scrollButtons !== 'on' && classes.scrollButtonsDesktop)
    }, TabScrollButtonProps)) : null;
    return conditionalElements;
  };

  var scrollSelectedIntoView = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_16__["default"])(function () {
    var _getTabsMeta2 = getTabsMeta(),
        tabsMeta = _getTabsMeta2.tabsMeta,
        tabMeta = _getTabsMeta2.tabMeta;

    if (!tabMeta || !tabsMeta) {
      return;
    }

    if (tabMeta[start] < tabsMeta[start]) {
      // left side of button is out of view
      var nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
      scroll(nextScrollStart);
    } else if (tabMeta[end] > tabsMeta[end]) {
      // right side of button is out of view
      var _nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);

      scroll(_nextScrollStart);
    }
  });
  var updateScrollButtonState = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_16__["default"])(function () {
    if (scrollable && scrollButtons !== 'off') {
      var _tabsRef$current = tabsRef.current,
          scrollTop = _tabsRef$current.scrollTop,
          scrollHeight = _tabsRef$current.scrollHeight,
          clientHeight = _tabsRef$current.clientHeight,
          scrollWidth = _tabsRef$current.scrollWidth,
          clientWidth = _tabsRef$current.clientWidth;
      var showStartScroll;
      var showEndScroll;

      if (vertical) {
        showStartScroll = scrollTop > 1;
        showEndScroll = scrollTop < scrollHeight - clientHeight - 1;
      } else {
        var scrollLeft = Object(_utils_scrollLeft__WEBPACK_IMPORTED_MODULE_10__["getNormalizedScrollLeft"])(tabsRef.current, theme.direction); // use 1 for the potential rounding error with browser zooms.

        showStartScroll = isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
        showEndScroll = !isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
      }

      if (showStartScroll !== displayScroll.start || showEndScroll !== displayScroll.end) {
        setDisplayScroll({
          start: showStartScroll,
          end: showEndScroll
        });
      }
    }
  });
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    var handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      updateIndicatorState();
      updateScrollButtonState();
    });
    var win = Object(_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_9__["default"])(tabsRef.current);
    win.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      win.removeEventListener('resize', handleResize);
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  var handleTabsScroll = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
    updateScrollButtonState();
  }));
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    return function () {
      handleTabsScroll.clear();
    };
  }, [handleTabsScroll]);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    setMounted(true);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    updateIndicatorState();
    updateScrollButtonState();
  });
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    scrollSelectedIntoView();
  }, [scrollSelectedIntoView, indicatorStyle]);
  react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"](action, function () {
    return {
      updateIndicator: updateIndicatorState,
      updateScrollButtons: updateScrollButtonState
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  var indicator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_TabIndicator__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.indicator,
    orientation: orientation,
    color: indicatorColor
  }, TabIndicatorProps, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, indicatorStyle, TabIndicatorProps.style)
  }));
  var childIndex = 0;
  var children = react__WEBPACK_IMPORTED_MODULE_3__["Children"].map(childrenProp, function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"](child)) {
      return null;
    }

    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isFragment"])(child)) {
        console.error(["Material-UI: The Tabs component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    var childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    var selected = childValue === value;
    childIndex += 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](child, {
      fullWidth: variant === 'fullWidth',
      indicator: selected && !mounted && indicator,
      selected: selected,
      selectionFollowsFocus: selectionFollowsFocus,
      onChange: onChange,
      textColor: textColor,
      value: childValue
    });
  });

  var handleKeyDown = function handleKeyDown(event) {
    var target = event.target; // Keyboard navigation assumes that [role="tab"] are siblings
    // though we might warn in the future about nested, interactive elements
    // as a a11y violation

    var role = target.getAttribute('role');

    if (role !== 'tab') {
      return;
    }

    var newFocusTarget = null;
    var previousItemKey = orientation !== "vertical" ? 'ArrowLeft' : 'ArrowUp';
    var nextItemKey = orientation !== "vertical" ? 'ArrowRight' : 'ArrowDown';

    if (orientation !== "vertical" && theme.direction === 'rtl') {
      // swap previousItemKey with nextItemKey
      previousItemKey = 'ArrowRight';
      nextItemKey = 'ArrowLeft';
    }

    switch (event.key) {
      case previousItemKey:
        newFocusTarget = target.previousElementSibling || tabListRef.current.lastChild;
        break;

      case nextItemKey:
        newFocusTarget = target.nextElementSibling || tabListRef.current.firstChild;
        break;

      case 'Home':
        newFocusTarget = tabListRef.current.firstChild;
        break;

      case 'End':
        newFocusTarget = tabListRef.current.lastChild;
        break;

      default:
        break;
    }

    if (newFocusTarget !== null) {
      newFocusTarget.focus();
      event.preventDefault();
    }
  };

  var conditionalElements = getConditionalElements();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, className, vertical && classes.vertical),
    ref: ref
  }, other), conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.scroller, scrollable ? classes.scrollable : classes.fixed),
    style: scrollerStyle,
    ref: tabsRef,
    onScroll: handleTabsScroll
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.flexContainer, vertical && classes.flexContainerVertical, centered && !scrollable && classes.centered),
    onKeyDown: handleKeyDown,
    ref: tabListRef,
    role: "tablist"
  }, children), mounted && indicator), conditionalElements.scrollButtonEnd);
});
 true ? Tabs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It supports two actions: `updateIndicator()` and `updateScrollButtons()`
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__["refType"],

  /**
   * The label for the Tabs as a string.
   */
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  'aria-labelledby': prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * If `true`, the tabs will be centered.
   * This property is intended for large views.
   */
  centered: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * Determines the color of the indicator.
   */
  indicatorColor: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['primary', 'secondary']),

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {any} value We default to the index of the child (number)
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['horizontal', 'vertical']),

  /**
   * The component used to render the scroll buttons.
   */
  ScrollButtonComponent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.elementType,

  /**
   * Determine behavior of scroll buttons when tabs are set to scroll:
   *
   * - `auto` will only present them when not all the items are visible.
   * - `desktop` will only present them on medium and larger viewports.
   * - `on` will always present them.
   * - `off` will never present them.
   */
  scrollButtons: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['auto', 'desktop', 'off', 'on']),

  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Props applied to the tab indicator element.
   */
  TabIndicatorProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * Props applied to the [`TabScrollButton`](/api/tab-scroll-button/) element.
   */
  TabScrollButtonProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * Determines the color of the `Tab`.
   */
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['inherit', 'primary', 'secondary']),

  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this property to `false`.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,

  /**
   * Determines additional display behavior of the tabs:
   *
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  -`fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['fullWidth', 'scrollable', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_13__["default"])(styles, {
  name: 'MuiTabs'
})(Tabs));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tabs/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tabs/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs */ "./node_modules/@material-ui/core/esm/Tabs/Tabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/animate.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/animate.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return animate; });
function easeInOutSin(time) {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}

function animate(property, element, to) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var cb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
  var _options$ease = options.ease,
      ease = _options$ease === void 0 ? easeInOutSin : _options$ease,
      _options$duration = options.duration,
      duration = _options$duration === void 0 ? 300 : _options$duration;
  var start = null;
  var from = element[property];
  var cancelled = false;

  var cancel = function cancel() {
    cancelled = true;
  };

  var step = function step(timestamp) {
    if (cancelled) {
      cb(new Error('Animation cancelled'));
      return;
    }

    if (start === null) {
      start = timestamp;
    }

    var time = Math.min(1, (timestamp - start) / duration);
    element[property] = ease(time) * (to - from) + from;

    if (time >= 1) {
      requestAnimationFrame(function () {
        cb(null);
      });
      return;
    }

    requestAnimationFrame(step);
  };

  if (from === to) {
    cb(new Error('Element already at target position'));
    return cancel;
  }

  requestAnimationFrame(step);
  return cancel;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowLeft.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowLeft.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), 'KeyboardArrowLeft'));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowRight.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowRight.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), 'KeyboardArrowRight'));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/scrollLeft.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/scrollLeft.js ***!
  \****************************************************************/
/*! exports provided: detectScrollType, getNormalizedScrollLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectScrollType", function() { return detectScrollType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedScrollLeft", function() { return getNormalizedScrollLeft; });
// Source from https://github.com/alitaheri/normalize-scroll-left
var cachedType;
/**
 * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
 *
 * Types of scrollLeft, assiming scrollWidth=100 and direction is rtl.
 *
 * Browser        | Type          | <- Most Left | Most Right -> | Initial
 * -------------- | ------------- | ------------ | ------------- | -------
 * WebKit         | default       | 0            | 100           | 100
 * Firefox/Opera  | negative      | -100         | 0             | 0
 * IE/Edge        | reverse       | 100          | 0             | 0
 */

function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }

  var dummy = document.createElement('div');
  dummy.appendChild(document.createTextNode('ABCD'));
  dummy.dir = 'rtl';
  dummy.style.fontSize = '14px';
  dummy.style.width = '4px';
  dummy.style.height = '1px';
  dummy.style.position = 'absolute';
  dummy.style.top = '-1000px';
  dummy.style.overflow = 'scroll';
  document.body.appendChild(dummy);
  cachedType = 'reverse';

  if (dummy.scrollLeft > 0) {
    cachedType = 'default';
  } else {
    dummy.scrollLeft = 1;

    if (dummy.scrollLeft === 0) {
      cachedType = 'negative';
    }
  }

  document.body.removeChild(dummy);
  return cachedType;
} // Based on https://stackoverflow.com/a/24394376

function getNormalizedScrollLeft(element, direction) {
  var scrollLeft = element.scrollLeft; // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior

  if (direction !== 'rtl') {
    return scrollLeft;
  }

  var type = detectScrollType();

  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft;

    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft;

    default:
      return scrollLeft;
  }
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/unsupportedProp.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/unsupportedProp.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return unsupportedProp; });
function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (false) {}

  var propFullNameSafe = propFullName || propName;

  if (typeof props[propName] !== 'undefined') {
    return new Error("The prop `".concat(propFullNameSafe, "` is not supported. Please remove it."));
  }

  return null;
}

/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js ***!
  \********************************************************************/
/*! exports provided: C, a, b, g, i, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return Calendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendar$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isYearAndMonthViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getFormatByViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isYearOnlyView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return styles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Day_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Day.js */ "./node_modules/@material-ui/pickers/esm/Day.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");




















var findClosestEnabledDate = function findClosestEnabledDate(_ref) {
  var date = _ref.date,
      utils = _ref.utils,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disableFuture = _ref.disableFuture,
      disablePast = _ref.disablePast,
      shouldDisableDate = _ref.shouldDisableDate;
  var today = utils.startOfDay(utils.date());

  if (disablePast && utils.isBefore(minDate, today)) {
    minDate = today;
  }

  if (disableFuture && utils.isAfter(maxDate, today)) {
    maxDate = today;
  }

  var forward = date;
  var backward = date;

  if (utils.isBefore(date, minDate)) {
    forward = utils.date(minDate);
    backward = null;
  }

  if (utils.isAfter(date, maxDate)) {
    if (backward) {
      backward = utils.date(maxDate);
    }

    forward = null;
  }

  while (forward || backward) {
    if (forward && utils.isAfter(forward, maxDate)) {
      forward = null;
    }

    if (backward && utils.isBefore(backward, minDate)) {
      backward = null;
    }

    if (forward) {
      if (!shouldDisableDate(forward)) {
        return forward;
      }

      forward = utils.addDays(forward, 1);
    }

    if (backward) {
      if (!shouldDisableDate(backward)) {
        return backward;
      }

      backward = utils.addDays(backward, -1);
    }
  } // fallback to today if no enabled days


  return utils.date();
};
var isYearOnlyView = function isYearOnlyView(views) {
  return views.length === 1 && views[0] === 'year';
};
var isYearAndMonthViews = function isYearAndMonthViews(views) {
  return views.length === 2 && Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_8__["a"])(views, 'month') && Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_8__["a"])(views, 'year');
};
var getFormatByViews = function getFormatByViews(views, utils) {
  if (isYearOnlyView(views)) {
    return utils.yearFormat;
  }

  if (isYearAndMonthViews(views)) {
    return utils.yearMonthFormat;
  }

  return utils.dateFormat;
};

var DayWrapper = function DayWrapper(_ref) {
  var children = _ref.children,
      value = _ref.value,
      disabled = _ref.disabled,
      onSelect = _ref.onSelect,
      dayInCurrentMonth = _ref.dayInCurrentMonth,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref, ["children", "value", "disabled", "onSelect", "dayInCurrentMonth"]);

  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return onSelect(value);
  }, [onSelect, value]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
    role: "presentation",
    onClick: dayInCurrentMonth && !disabled ? handleClick : undefined,
    onKeyPress: dayInCurrentMonth && !disabled ? handleClick : undefined
  }, other), children);
};

var animationDuration = 350;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  var slideTransition = theme.transitions.create('transform', {
    duration: animationDuration,
    easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
  });
  return {
    transitionContainer: {
      display: 'block',
      position: 'relative',
      '& > *': {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0
      }
    },
    'slideEnter-left': {
      willChange: 'transform',
      transform: 'translate(100%)'
    },
    'slideEnter-right': {
      willChange: 'transform',
      transform: 'translate(-100%)'
    },
    slideEnterActive: {
      transform: 'translate(0%)',
      transition: slideTransition
    },
    slideExit: {
      transform: 'translate(0%)'
    },
    'slideExitActiveLeft-left': {
      willChange: 'transform',
      transform: 'translate(-200%)',
      transition: slideTransition
    },
    'slideExitActiveLeft-right': {
      willChange: 'transform',
      transform: 'translate(200%)',
      transition: slideTransition
    }
  };
}, {
  name: 'MuiPickersSlideTransition'
});

var SlideTransition = function SlideTransition(_ref) {
  var children = _ref.children,
      transKey = _ref.transKey,
      slideDirection = _ref.slideDirection,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className;
  var classes = useStyles();
  var transitionClasses = {
    exit: classes.slideExit,
    enterActive: classes.slideEnterActive,
    // @ts-ignore
    enter: classes['slideEnter-' + slideDirection],
    // @ts-ignore
    exitActive: classes['slideExitActiveLeft-' + slideDirection]
  };
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_transition_group__WEBPACK_IMPORTED_MODULE_17__["TransitionGroup"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.transitionContainer, className),
    childFactory: function childFactory(element) {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(element, {
        classNames: transitionClasses
      });
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_transition_group__WEBPACK_IMPORTED_MODULE_17__["CSSTransition"], {
    mountOnEnter: true,
    unmountOnExit: true,
    key: transKey + slideDirection,
    timeout: animationDuration,
    classNames: transitionClasses,
    children: children
  }));
};

var ArrowLeftIcon = function ArrowLeftIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_10__["default"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }));
};

var ArrowRightIcon = function ArrowRightIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_10__["default"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }));
};

var useStyles$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    switchHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(1)
    },
    transitionContainer: {
      width: '100%',
      overflow: 'hidden',
      height: 23
    },
    iconButton: {
      zIndex: 1,
      backgroundColor: theme.palette.background.paper
    },
    daysHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: 16
    },
    dayLabel: {
      width: 36,
      margin: '0 2px',
      textAlign: 'center',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersCalendarHeader'
});
var CalendarHeader = function CalendarHeader(_ref) {
  var currentMonth = _ref.currentMonth,
      onMonthChange = _ref.onMonthChange,
      leftArrowIcon = _ref.leftArrowIcon,
      rightArrowIcon = _ref.rightArrowIcon,
      leftArrowButtonProps = _ref.leftArrowButtonProps,
      rightArrowButtonProps = _ref.rightArrowButtonProps,
      disablePrevMonth = _ref.disablePrevMonth,
      disableNextMonth = _ref.disableNextMonth,
      slideDirection = _ref.slideDirection;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_2__["u"])();
  var classes = useStyles$1();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["useTheme"])();
  var rtl = theme.direction === 'rtl';

  var selectNextMonth = function selectNextMonth() {
    return onMonthChange(utils.getNextMonth(currentMonth), 'left');
  };

  var selectPreviousMonth = function selectPreviousMonth() {
    return onMonthChange(utils.getPreviousMonth(currentMonth), 'right');
  };

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classes.switchHeader
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, leftArrowButtonProps, {
    disabled: disablePrevMonth,
    onClick: selectPreviousMonth,
    className: classes.iconButton
  }), rtl ? rightArrowIcon : leftArrowIcon), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SlideTransition, {
    slideDirection: slideDirection,
    transKey: currentMonth.toString(),
    className: classes.transitionContainer
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    align: "center",
    variant: "body1"
  }, utils.getCalendarHeaderText(currentMonth))), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, rightArrowButtonProps, {
    disabled: disableNextMonth,
    onClick: selectNextMonth,
    className: classes.iconButton
  }), rtl ? leftArrowIcon : rightArrowIcon)), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classes.daysHeader
  }, utils.getWeekdays().map(function (day, index) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index // eslint-disable-line react/no-array-index-key
      ,
      variant: "caption",
      className: classes.dayLabel
    }, day);
  })));
};
CalendarHeader.displayName = 'CalendarHeader';
 true ? CalendarHeader.propTypes = {
  leftArrowIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],
  rightArrowIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],
  disablePrevMonth: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  disableNextMonth: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"]
} : undefined;
CalendarHeader.defaultProps = {
  leftArrowIcon: Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ArrowLeftIcon, null),
  rightArrowIcon: Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ArrowRightIcon, null),
  disablePrevMonth: false,
  disableNextMonth: false
};

var withUtils = function withUtils() {
  return function (Component) {
    var WithUtils = function WithUtils(props) {
      var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_2__["u"])();
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
        utils: utils
      }, props));
    };

    WithUtils.displayName = "WithUtils(".concat(Component.displayName || Component.name, ")");
    return WithUtils;
  };
};

var KeyDownListener = function KeyDownListener(_ref) {
  var onKeyDown = _ref.onKeyDown;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('keydown', onKeyDown);
    return function () {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
  return null;
};

var Calendar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_15__["default"])(Calendar, _React$Component);

  function Calendar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__["default"])(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14__["default"])(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      slideDirection: 'left',
      currentMonth: _this.props.utils.startOfMonth(_this.props.date),
      loadingQueue: 0
    };

    _this.pushToLoadingQueue = function () {
      var loadingQueue = _this.state.loadingQueue + 1;

      _this.setState({
        loadingQueue: loadingQueue
      });
    };

    _this.popFromLoadingQueue = function () {
      var loadingQueue = _this.state.loadingQueue;
      loadingQueue = loadingQueue <= 0 ? 0 : loadingQueue - 1;

      _this.setState({
        loadingQueue: loadingQueue
      });
    };

    _this.handleChangeMonth = function (newMonth, slideDirection) {
      _this.setState({
        currentMonth: newMonth,
        slideDirection: slideDirection
      });

      if (_this.props.onMonthChange) {
        var returnVal = _this.props.onMonthChange(newMonth);

        if (returnVal) {
          _this.pushToLoadingQueue();

          returnVal.then(function () {
            _this.popFromLoadingQueue();
          });
        }
      }
    };

    _this.validateMinMaxDate = function (day) {
      var _this$props = _this.props,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate,
          utils = _this$props.utils,
          disableFuture = _this$props.disableFuture,
          disablePast = _this$props.disablePast;
      var now = utils.date();
      return Boolean(disableFuture && utils.isAfterDay(day, now) || disablePast && utils.isBeforeDay(day, now) || minDate && utils.isBeforeDay(day, utils.date(minDate)) || maxDate && utils.isAfterDay(day, utils.date(maxDate)));
    };

    _this.shouldDisablePrevMonth = function () {
      var _this$props2 = _this.props,
          utils = _this$props2.utils,
          disablePast = _this$props2.disablePast,
          minDate = _this$props2.minDate;
      var now = utils.date();
      var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, utils.date(minDate)) ? now : utils.date(minDate));
      return !utils.isBefore(firstEnabledMonth, _this.state.currentMonth);
    };

    _this.shouldDisableNextMonth = function () {
      var _this$props3 = _this.props,
          utils = _this$props3.utils,
          disableFuture = _this$props3.disableFuture,
          maxDate = _this$props3.maxDate;
      var now = utils.date();
      var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, utils.date(maxDate)) ? now : utils.date(maxDate));
      return !utils.isAfter(lastEnabledMonth, _this.state.currentMonth);
    };

    _this.shouldDisableDate = function (day) {
      var shouldDisableDate = _this.props.shouldDisableDate;
      return _this.validateMinMaxDate(day) || Boolean(shouldDisableDate && shouldDisableDate(day));
    };

    _this.handleDaySelect = function (day) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var _this$props4 = _this.props,
          date = _this$props4.date,
          utils = _this$props4.utils;

      _this.props.onChange(utils.mergeDateAndTime(day, date), isFinish);
    };

    _this.moveToDay = function (day) {
      var utils = _this.props.utils;

      if (day && !_this.shouldDisableDate(day)) {
        if (utils.getMonth(day) !== utils.getMonth(_this.state.currentMonth)) {
          _this.handleChangeMonth(utils.startOfMonth(day), 'left');
        }

        _this.handleDaySelect(day, false);
      }
    };

    _this.handleKeyDown = function (event) {
      var _this$props5 = _this.props,
          theme = _this$props5.theme,
          date = _this$props5.date,
          utils = _this$props5.utils;
      Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_8__["r"])(event, {
        ArrowUp: function ArrowUp() {
          return _this.moveToDay(utils.addDays(date, -7));
        },
        ArrowDown: function ArrowDown() {
          return _this.moveToDay(utils.addDays(date, 7));
        },
        ArrowLeft: function ArrowLeft() {
          return _this.moveToDay(utils.addDays(date, theme.direction === 'ltr' ? -1 : 1));
        },
        ArrowRight: function ArrowRight() {
          return _this.moveToDay(utils.addDays(date, theme.direction === 'ltr' ? 1 : -1));
        }
      });
    };

    _this.renderWeeks = function () {
      var _this$props6 = _this.props,
          utils = _this$props6.utils,
          classes = _this$props6.classes;
      var weeks = utils.getWeekArray(_this.state.currentMonth);
      return weeks.map(function (week) {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          key: "week-".concat(week[0].toString()),
          className: classes.week
        }, _this.renderDays(week));
      });
    };

    _this.renderDays = function (week) {
      var _this$props7 = _this.props,
          date = _this$props7.date,
          renderDay = _this$props7.renderDay,
          utils = _this$props7.utils;
      var now = utils.date();
      var selectedDate = utils.startOfDay(date);
      var currentMonthNumber = utils.getMonth(_this.state.currentMonth);
      return week.map(function (day) {
        var disabled = _this.shouldDisableDate(day);

        var isDayInCurrentMonth = utils.getMonth(day) === currentMonthNumber;
        var dayComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Day_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
          disabled: disabled,
          current: utils.isSameDay(day, now),
          hidden: !isDayInCurrentMonth,
          selected: utils.isSameDay(selectedDate, day)
        }, utils.getDayText(day));

        if (renderDay) {
          dayComponent = renderDay(day, selectedDate, isDayInCurrentMonth, dayComponent);
        }

        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DayWrapper, {
          value: day,
          key: day.toString(),
          disabled: disabled,
          dayInCurrentMonth: isDayInCurrentMonth,
          onSelect: _this.handleDaySelect
        }, dayComponent);
      });
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__["default"])(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props8 = this.props,
          date = _this$props8.date,
          minDate = _this$props8.minDate,
          maxDate = _this$props8.maxDate,
          utils = _this$props8.utils,
          disablePast = _this$props8.disablePast,
          disableFuture = _this$props8.disableFuture;

      if (this.shouldDisableDate(date)) {
        var closestEnabledDate = findClosestEnabledDate({
          date: date,
          utils: utils,
          minDate: utils.date(minDate),
          maxDate: utils.date(maxDate),
          disablePast: Boolean(disablePast),
          disableFuture: Boolean(disableFuture),
          shouldDisableDate: this.shouldDisableDate
        });
        this.handleDaySelect(closestEnabledDate, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          currentMonth = _this$state.currentMonth,
          slideDirection = _this$state.slideDirection;
      var _this$props9 = this.props,
          classes = _this$props9.classes,
          allowKeyboardControl = _this$props9.allowKeyboardControl,
          leftArrowButtonProps = _this$props9.leftArrowButtonProps,
          leftArrowIcon = _this$props9.leftArrowIcon,
          rightArrowButtonProps = _this$props9.rightArrowButtonProps,
          rightArrowIcon = _this$props9.rightArrowIcon,
          loadingIndicator = _this$props9.loadingIndicator;
      var loadingElement = loadingIndicator ? loadingIndicator : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_18__["default"], null);
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, allowKeyboardControl && this.context !== 'static' && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(KeyDownListener, {
        onKeyDown: this.handleKeyDown
      }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CalendarHeader, {
        currentMonth: currentMonth,
        slideDirection: slideDirection,
        onMonthChange: this.handleChangeMonth,
        leftArrowIcon: leftArrowIcon,
        leftArrowButtonProps: leftArrowButtonProps,
        rightArrowIcon: rightArrowIcon,
        rightArrowButtonProps: rightArrowButtonProps,
        disablePrevMonth: this.shouldDisablePrevMonth(),
        disableNextMonth: this.shouldDisableNextMonth()
      }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SlideTransition, {
        slideDirection: slideDirection,
        transKey: currentMonth.toString(),
        className: classes.transitionContainer
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, this.state.loadingQueue > 0 && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: classes.progressContainer
      }, loadingElement) || Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, this.renderWeeks()))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      var utils = nextProps.utils,
          nextDate = nextProps.date;

      if (!utils.isEqual(nextDate, state.lastDate)) {
        var nextMonth = utils.getMonth(nextDate);
        var lastDate = state.lastDate || nextDate;
        var lastMonth = utils.getMonth(lastDate);
        return {
          lastDate: nextDate,
          currentMonth: nextProps.utils.startOfMonth(nextDate),
          // prettier-ignore
          slideDirection: nextMonth === lastMonth ? state.slideDirection : utils.isAfterDay(nextDate, lastDate) ? 'left' : 'right'
        };
      }

      return null;
    }
  }]);

  return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
Calendar.contextType = _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_8__["V"];
 true ? Calendar.propTypes = {
  renderDay: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  shouldDisableDate: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  allowKeyboardControl: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"]
} : undefined;
Calendar.defaultProps = {
  minDate: new Date('1900-01-01'),
  maxDate: new Date('2100-01-01'),
  disablePast: false,
  disableFuture: false,
  allowKeyboardControl: true
};
var styles = function styles(theme) {
  return {
    transitionContainer: {
      minHeight: 36 * 6,
      marginTop: theme.spacing(1.5)
    },
    progressContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    week: {
      display: 'flex',
      justifyContent: 'center'
    }
  };
};
var Calendar$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles, {
  name: 'MuiPickersCalendar',
  withTheme: true
})(withUtils()(Calendar));


//# sourceMappingURL=Calendar-11ae61f6.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/Clock-48fde975.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/Clock-48fde975.js ***!
  \*****************************************************************/
/*! exports provided: C, a, b, c, g, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return Clock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clock$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClockType$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return convertToMeridiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getMeridiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return styles$1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");










var ClockType;

(function (ClockType) {
  ClockType["HOURS"] = "hours";
  ClockType["MINUTES"] = "minutes";
  ClockType["SECONDS"] = "seconds";
})(ClockType || (ClockType = {}));

var ClockType$1 = ClockType;

var ClockPointer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ClockPointer, _React$Component);

  function ClockPointer() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ClockPointer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ClockPointer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      toAnimateTransform: false,
      previousType: undefined
    };

    _this.getAngleStyle = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          isInner = _this$props.isInner,
          type = _this$props.type;
      var max = type === ClockType$1.HOURS ? 12 : 60;
      var angle = 360 / max * value;

      if (type === ClockType$1.HOURS && value > 12) {
        angle -= 360; // round up angle to max 360 degrees
      }

      return {
        height: isInner ? '26%' : '40%',
        transform: "rotateZ(".concat(angle, "deg)")
      };
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ClockPointer, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          hasSelected = _this$props2.hasSelected;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        style: this.getAngleStyle(),
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.pointer, this.state.toAnimateTransform && classes.animateTransform)
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.thumb, hasSelected && classes.noPoint)
      }));
    }
  }]);

  return ClockPointer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ClockPointer.getDerivedStateFromProps = function (nextProps, state) {
  if (nextProps.type !== state.previousType) {
    return {
      toAnimateTransform: true,
      previousType: nextProps.type
    };
  }

  return {
    toAnimateTransform: false,
    previousType: nextProps.type
  };
};

var styles = function styles(theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    pointer: {
      width: 2,
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      left: 'calc(50% - 1px)',
      bottom: '50%',
      transformOrigin: 'center bottom 0px'
    },
    animateTransform: {
      transition: theme.transitions.create(['transform', 'height'])
    },
    thumb: {
      width: 4,
      height: 4,
      backgroundColor: theme.palette.primary.contrastText,
      borderRadius: '100%',
      position: 'absolute',
      top: -21,
      left: -15,
      border: "14px solid ".concat(theme.palette.primary.main),
      boxSizing: 'content-box'
    },
    noPoint: {
      backgroundColor: theme.palette.primary.main
    }
  });
};
var ClockPointer$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  name: 'MuiPickersClockPointer'
})(ClockPointer);

var center = {
  x: 260 / 2,
  y: 260 / 2
};
var basePoint = {
  x: center.x,
  y: 0
};
var cx = basePoint.x - center.x;
var cy = basePoint.y - center.y;

var rad2deg = function rad2deg(rad) {
  return rad * 57.29577951308232;
};

var getAngleValue = function getAngleValue(step, offsetX, offsetY) {
  var x = offsetX - center.x;
  var y = offsetY - center.y;
  var atan = Math.atan2(cx, cy) - Math.atan2(x, y);
  var deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;
  var value = Math.floor(deg / step) || 0;
  var delta = Math.pow(x, 2) + Math.pow(y, 2);
  var distance = Math.sqrt(delta);
  return {
    value: value,
    distance: distance
  };
};

var getHours = function getHours(offsetX, offsetY, ampm) {
  var _getAngleValue = getAngleValue(30, offsetX, offsetY),
      value = _getAngleValue.value,
      distance = _getAngleValue.distance;

  value = value || 12;

  if (!ampm) {
    if (distance < 90) {
      value += 12;
      value %= 24;
    }
  } else {
    value %= 12;
  }

  return value;
};
var getMinutes = function getMinutes(offsetX, offsetY) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var angleStep = step * 6;

  var _getAngleValue2 = getAngleValue(angleStep, offsetX, offsetY),
      value = _getAngleValue2.value;

  value = value * step % 60;
  return value;
};
var getMeridiem = function getMeridiem(date, utils) {
  return utils.getHours(date) >= 12 ? 'pm' : 'am';
};
var convertToMeridiem = function convertToMeridiem(time, meridiem, ampm, utils) {
  if (ampm) {
    var currentMeridiem = utils.getHours(time) >= 12 ? 'pm' : 'am';

    if (currentMeridiem !== meridiem) {
      var hours = meridiem === 'am' ? utils.getHours(time) - 12 : utils.getHours(time) + 12;
      return utils.setHours(time, hours);
    }
  }

  return time;
};

var Clock =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Clock, _React$Component);

  function Clock() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Clock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Clock)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.isMoving = false;

    _this.handleTouchMove = function (e) {
      _this.isMoving = true;

      _this.setTime(e);
    };

    _this.handleTouchEnd = function (e) {
      if (_this.isMoving) {
        _this.setTime(e, true);

        _this.isMoving = false;
      }
    };

    _this.handleMove = function (e) {
      e.preventDefault();
      e.stopPropagation(); // MouseEvent.which is deprecated, but MouseEvent.buttons is not supported in Safari

      var isButtonPressed = typeof e.buttons === 'undefined' ? e.nativeEvent.which === 1 : e.buttons === 1;

      if (isButtonPressed) {
        _this.setTime(e.nativeEvent, false);
      }
    };

    _this.handleMouseUp = function (e) {
      if (_this.isMoving) {
        _this.isMoving = false;
      }

      _this.setTime(e.nativeEvent, true);
    };

    _this.hasSelected = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          value = _this$props.value;

      if (type === ClockType$1.HOURS) {
        return true;
      }

      return value % 5 === 0;
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Clock, [{
    key: "setTime",
    value: function setTime(e) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var offsetX = e.offsetX,
          offsetY = e.offsetY;

      if (typeof offsetX === 'undefined') {
        var rect = e.target.getBoundingClientRect();
        offsetX = e.changedTouches[0].clientX - rect.left;
        offsetY = e.changedTouches[0].clientY - rect.top;
      }

      var value = this.props.type === ClockType$1.SECONDS || this.props.type === ClockType$1.MINUTES ? getMinutes(offsetX, offsetY, this.props.minutesStep) : getHours(offsetX, offsetY, Boolean(this.props.ampm));
      this.props.onChange(value, isFinish);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          value = _this$props2.value,
          children = _this$props2.children,
          type = _this$props2.type,
          ampm = _this$props2.ampm;
      var isPointerInner = !ampm && type === ClockType$1.HOURS && (value < 1 || value > 12);
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: classes.container
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: classes.clock
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        role: "menu",
        tabIndex: -1,
        className: classes.squareMask,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        onMouseUp: this.handleMouseUp,
        onMouseMove: this.handleMove
      }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: classes.pin
      }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockPointer$1, {
        type: type,
        value: value,
        isInner: isPointerInner,
        hasSelected: this.hasSelected()
      }), children));
    }
  }]);

  return Clock;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
 true ? Clock.propTypes = {
  type: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOf"])(Object.keys(ClockType$1).map(function (key) {
    return ClockType$1[key];
  })).isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  children: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_1__["node"]).isRequired,
  ampm: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  minutesStep: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1__["any"]
} : undefined;
Clock.defaultProps = {
  ampm: false,
  minutesStep: 1
};
var styles$1 = function styles(theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      margin: "".concat(theme.spacing(2), "px 0 ").concat(theme.spacing(1), "px")
    },
    clock: {
      backgroundColor: 'rgba(0,0,0,.07)',
      borderRadius: '50%',
      height: 260,
      width: 260,
      position: 'relative',
      pointerEvents: 'none'
    },
    squareMask: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'auto',
      outline: 'none',
      touchActions: 'none',
      userSelect: 'none',
      '&:active': {
        cursor: 'move'
      }
    },
    pin: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  });
};
var Clock$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles$1, {
  name: 'MuiPickersClock'
})(Clock);


//# sourceMappingURL=Clock-48fde975.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/ClockView.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/ClockView.js ***!
  \************************************************************/
/*! exports provided: default, ClockView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockView", function() { return ClockView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Clock-48fde975.js */ "./node_modules/@material-ui/pickers/esm/Clock-48fde975.js");














var positions = {
  0: [0, 40],
  1: [55, 19.6],
  2: [94.4, 59.5],
  3: [109, 114],
  4: [94.4, 168.5],
  5: [54.5, 208.4],
  6: [0, 223],
  7: [-54.5, 208.4],
  8: [-94.4, 168.5],
  9: [-109, 114],
  10: [-94.4, 59.5],
  11: [-54.5, 19.6],
  12: [0, 5],
  13: [36.9, 49.9],
  14: [64, 77],
  15: [74, 114],
  16: [64, 151],
  17: [37, 178],
  18: [0, 188],
  19: [-37, 178],
  20: [-64, 151],
  21: [-74, 114],
  22: [-64, 77],
  23: [-37, 50]
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  var size = theme.spacing(4);
  return {
    clockNumber: {
      width: size,
      height: 32,
      userSelect: 'none',
      position: 'absolute',
      left: "calc((100% - ".concat(typeof size === 'number' ? "".concat(size, "px") : size, ") / 2)"),
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.hint
    },
    clockNumberSelected: {
      color: theme.palette.primary.contrastText
    }
  };
}, {
  name: 'MuiPickersClockNumber'
});
var ClockNumber = function ClockNumber(_ref) {
  var selected = _ref.selected,
      label = _ref.label,
      index = _ref.index,
      isInner = _ref.isInner;
  var classes = useStyles();
  var className = Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.clockNumber, selected && classes.clockNumberSelected);
  var transformStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var position = positions[index];
    return {
      transform: "translate(".concat(position[0], "px, ").concat(position[1], "px")
    };
  }, [index]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "span",
    className: className,
    variant: isInner ? 'body2' : 'body1',
    style: transformStyle,
    children: label
  });
};

var getHourNumbers = function getHourNumbers(_ref) {
  var ampm = _ref.ampm,
      utils = _ref.utils,
      date = _ref.date;
  var currentHours = utils.getHours(date);
  var hourNumbers = [];
  var startHour = ampm ? 1 : 0;
  var endHour = ampm ? 12 : 23;

  var isSelected = function isSelected(hour) {
    if (ampm) {
      if (hour === 12) {
        return currentHours === 12 || currentHours === 0;
      }

      return currentHours === hour || currentHours - 12 === hour;
    }

    return currentHours === hour;
  };

  for (var hour = startHour; hour <= endHour; hour += 1) {
    var label = hour.toString();

    if (hour === 0) {
      label = '00';
    }

    var props = {
      index: hour,
      label: utils.formatNumber(label),
      selected: isSelected(hour),
      isInner: !ampm && (hour === 0 || hour > 12)
    };
    hourNumbers.push(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
      key: hour
    }, props)));
  }

  return hourNumbers;
};
var getMinutesNumbers = function getMinutesNumbers(_ref2) {
  var value = _ref2.value,
      utils = _ref2.utils;
  var f = utils.formatNumber;
  return [Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('00'),
    selected: value === 0,
    index: 12,
    key: 12
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('05'),
    selected: value === 5,
    index: 1,
    key: 1
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('10'),
    selected: value === 10,
    index: 2,
    key: 2
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('15'),
    selected: value === 15,
    index: 3,
    key: 3
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('20'),
    selected: value === 20,
    index: 4,
    key: 4
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('25'),
    selected: value === 25,
    index: 5,
    key: 5
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('30'),
    selected: value === 30,
    index: 6,
    key: 6
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('35'),
    selected: value === 35,
    index: 7,
    key: 7
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('40'),
    selected: value === 40,
    index: 8,
    key: 8
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('45'),
    selected: value === 45,
    index: 9,
    key: 9
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('50'),
    selected: value === 50,
    index: 10,
    key: 10
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ClockNumber, {
    label: f('55'),
    selected: value === 55,
    index: 11,
    key: 11
  })];
};

var ClockView = function ClockView(_ref) {
  var type = _ref.type,
      onHourChange = _ref.onHourChange,
      onMinutesChange = _ref.onMinutesChange,
      onSecondsChange = _ref.onSecondsChange,
      ampm = _ref.ampm,
      date = _ref.date,
      minutesStep = _ref.minutesStep;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_2__["u"])();
  var viewProps = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    switch (type) {
      case _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_12__["b"].HOURS:
        return {
          value: utils.getHours(date),
          children: getHourNumbers({
            date: date,
            utils: utils,
            ampm: Boolean(ampm)
          }),
          onChange: function onChange(value, isFinish) {
            var currentMeridiem = Object(_Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_12__["g"])(date, utils);
            var updatedTimeWithMeridiem = Object(_Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_12__["c"])(utils.setHours(date, value), currentMeridiem, Boolean(ampm), utils);
            onHourChange(updatedTimeWithMeridiem, isFinish);
          }
        };

      case _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_12__["b"].MINUTES:
        var minutesValue = utils.getMinutes(date);
        return {
          value: minutesValue,
          children: getMinutesNumbers({
            value: minutesValue,
            utils: utils
          }),
          onChange: function onChange(value, isFinish) {
            var updatedTime = utils.setMinutes(date, value);
            onMinutesChange(updatedTime, isFinish);
          }
        };

      case _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_12__["b"].SECONDS:
        var secondsValue = utils.getSeconds(date);
        return {
          value: secondsValue,
          children: getMinutesNumbers({
            value: secondsValue,
            utils: utils
          }),
          onChange: function onChange(value, isFinish) {
            var updatedTime = utils.setSeconds(date, value);
            onSecondsChange(updatedTime, isFinish);
          }
        };

      default:
        throw new Error('You must provide the type for TimePickerView');
    }
  }, [ampm, date, onHourChange, onMinutesChange, onSecondsChange, type, utils]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_12__["a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
    type: type,
    ampm: ampm,
    minutesStep: minutesStep
  }, viewProps));
};
ClockView.displayName = 'TimePickerView';
 true ? ClockView.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"].isRequired,
  onHourChange: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  onMinutesChange: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  onSecondsChange: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  ampm: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  minutesStep: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  type: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOf"])(Object.keys(_Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_12__["b"]).map(function (key) {
    return _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_12__["b"][key];
  })).isRequired
} : undefined;
ClockView.defaultProps = {
  ampm: true,
  minutesStep: 1
};
var ClockView$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(ClockView);

/* harmony default export */ __webpack_exports__["default"] = (ClockView$1);

//# sourceMappingURL=ClockView.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/DatePicker.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/DatePicker.js ***!
  \*************************************************************/
/*! exports provided: DatePicker, KeyboardDatePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return DatePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardDatePicker", function() { return KeyboardDatePicker; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./makePickerWithState-5a79cb8a.js */ "./node_modules/@material-ui/pickers/esm/makePickerWithState-5a79cb8a.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Calendar-11ae61f6.js */ "./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var rifm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rifm */ "./node_modules/rifm/dist/rifm.esm.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Picker_ccd9ba90_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Picker-ccd9ba90.js */ "./node_modules/@material-ui/pickers/esm/Picker-ccd9ba90.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Day_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Day.js */ "./node_modules/@material-ui/pickers/esm/Day.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Clock-48fde975.js */ "./node_modules/@material-ui/pickers/esm/Clock-48fde975.js");
/* harmony import */ var _ClockView_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ClockView.js */ "./node_modules/@material-ui/pickers/esm/ClockView.js");




































var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
  toolbar: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  toolbarLandscape: {
    padding: 16
  },
  dateLandscape: {
    marginRight: 16
  }
}, {
  name: 'MuiPickersDatePickerRoot'
});
var DatePickerToolbar = function DatePickerToolbar(_ref) {
  var date = _ref.date,
      views = _ref.views,
      setOpenView = _ref.setOpenView,
      isLandscape = _ref.isLandscape,
      openView = _ref.openView;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  var classes = useStyles();
  var isYearOnly = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_13__["i"])(views);
  }, [views]);
  var isYearAndMonth = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_13__["b"])(views);
  }, [views]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["P"], {
    isLandscape: isLandscape,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(!isYearOnly && classes.toolbar, isLandscape && classes.toolbarLandscape)
  }, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: isYearOnly ? 'h3' : 'subtitle1',
    onClick: function onClick() {
      return setOpenView('year');
    },
    selected: openView === 'year',
    label: utils.getYearText(date)
  }), !isYearOnly && !isYearAndMonth && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: "h4",
    selected: openView === 'date',
    onClick: function onClick() {
      return setOpenView('date');
    },
    align: isLandscape ? 'left' : 'center',
    label: utils.getDatePickerHeaderText(date),
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(isLandscape && classes.dateLandscape)
  }), isYearAndMonth && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: "h4",
    onClick: function onClick() {
      return setOpenView('month');
    },
    selected: openView === 'month',
    label: utils.getMonthText(date)
  }));
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultProps = _objectSpread({}, _Picker_ccd9ba90_js__WEBPACK_IMPORTED_MODULE_20__["d"], {
  openTo: 'date',
  views: ['year', 'date']
});

function useOptions(props) {
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  return {
    getDefaultFormat: function getDefaultFormat() {
      return Object(_Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_13__["g"])(props.views, utils);
    }
  };
}

var DatePicker = Object(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["m"])({
  useOptions: useOptions,
  Input: _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["a"],
  useState: _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["u"],
  DefaultToolbarComponent: DatePickerToolbar
});
var KeyboardDatePicker = Object(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["m"])({
  useOptions: useOptions,
  Input: _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["K"],
  useState: _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["b"],
  DefaultToolbarComponent: DatePickerToolbar
});
DatePicker.defaultProps = defaultProps;
KeyboardDatePicker.defaultProps = defaultProps;


//# sourceMappingURL=DatePicker.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/DateTimePicker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/DateTimePicker.js ***!
  \*****************************************************************/
/*! exports provided: DateTimePicker, KeyboardDateTimePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePicker", function() { return DateTimePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardDateTimePicker", function() { return KeyboardDateTimePicker; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./makePickerWithState-5a79cb8a.js */ "./node_modules/@material-ui/pickers/esm/makePickerWithState-5a79cb8a.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Calendar-11ae61f6.js */ "./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var rifm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rifm */ "./node_modules/rifm/dist/rifm.esm.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Picker_ccd9ba90_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Picker-ccd9ba90.js */ "./node_modules/@material-ui/pickers/esm/Picker-ccd9ba90.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Day_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Day.js */ "./node_modules/@material-ui/pickers/esm/Day.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Clock-48fde975.js */ "./node_modules/@material-ui/pickers/esm/Clock-48fde975.js");
/* harmony import */ var _ClockView_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ClockView.js */ "./node_modules/@material-ui/pickers/esm/ClockView.js");
/* harmony import */ var _TimePickerToolbar_81100fab_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./TimePickerToolbar-81100fab.js */ "./node_modules/@material-ui/pickers/esm/TimePickerToolbar-81100fab.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");









































var TimeIcon = function TimeIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_18__["default"], props, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  }));
};

var DateRangeIcon = function DateRangeIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_18__["default"], props, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }));
};

var viewToTabIndex = function viewToTabIndex(openView) {
  if (openView === 'date' || openView === 'year') {
    return 'date';
  }

  return 'time';
};

var tabIndexToView = function tabIndexToView(tab) {
  if (tab === 'date') {
    return 'date';
  }

  return 'hours';
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  // prettier-ignore
  var tabsBackground = theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background["default"];
  return {
    tabs: {
      color: theme.palette.getContrastText(tabsBackground),
      backgroundColor: tabsBackground
    }
  };
}, {
  name: 'MuiPickerDTTabs'
});
var DateTimePickerTabs = function DateTimePickerTabs(_ref) {
  var view = _ref.view,
      onChange = _ref.onChange,
      dateRangeIcon = _ref.dateRangeIcon,
      timeIcon = _ref.timeIcon;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["useTheme"])();
  var indicatorColor = theme.palette.type === 'light' ? 'secondary' : 'primary';

  var handleChange = function handleChange(e, value) {
    if (value !== viewToTabIndex(view)) {
      onChange(tabIndexToView(value));
    }
  };

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_39__["default"], null, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_38__["default"], {
    variant: "fullWidth",
    value: viewToTabIndex(view),
    onChange: handleChange,
    className: classes.tabs,
    indicatorColor: indicatorColor
  }, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_37__["default"], {
    value: "date",
    icon: Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, dateRangeIcon)
  }), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_37__["default"], {
    value: "time",
    icon: Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, timeIcon)
  })));
};
DateTimePickerTabs.defaultProps = {
  dateRangeIcon: Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(DateRangeIcon, null),
  timeIcon: Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeIcon, null)
};

var useStyles$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (_) {
  return {
    toolbar: {
      paddingLeft: 16,
      paddingRight: 16,
      justifyContent: 'space-around'
    },
    separator: {
      margin: '0 4px 0 2px',
      cursor: 'default'
    }
  };
}, {
  name: 'MuiPickerDTToolbar'
});
var DateTimePickerToolbar = function DateTimePickerToolbar(_ref) {
  var date = _ref.date,
      openView = _ref.openView,
      setOpenView = _ref.setOpenView,
      ampm = _ref.ampm,
      hideTabs = _ref.hideTabs,
      dateRangeIcon = _ref.dateRangeIcon,
      timeIcon = _ref.timeIcon,
      onChange = _ref.onChange;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  var classes = useStyles$1();
  var showTabs = !hideTabs && typeof window !== 'undefined' && window.innerHeight > 667;

  var _useMeridiemMode = Object(_TimePickerToolbar_81100fab_js__WEBPACK_IMPORTED_MODULE_35__["u"])(date, ampm, onChange),
      meridiemMode = _useMeridiemMode.meridiemMode,
      handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["useTheme"])();
  var rtl = theme.direction === 'rtl';
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["P"], {
    isLandscape: false,
    className: classes.toolbar
  }, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_36__["default"], {
    container: true,
    justify: "center",
    wrap: "nowrap"
  }, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_36__["default"], {
    item: true,
    container: true,
    xs: 5,
    justify: "flex-start",
    direction: "column"
  }, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: "subtitle1",
    onClick: function onClick() {
      return setOpenView('year');
    },
    selected: openView === 'year',
    label: utils.getYearText(date)
  })), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: "h4",
    onClick: function onClick() {
      return setOpenView('date');
    },
    selected: openView === 'date',
    label: utils.getDateTimePickerHeaderText(date)
  }))), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_36__["default"], {
    item: true,
    container: true,
    xs: 6,
    justify: "center",
    alignItems: "flex-end",
    direction: rtl ? 'row-reverse' : 'row'
  }, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: "h3",
    onClick: function onClick() {
      return setOpenView('hours');
    },
    selected: openView === 'hours',
    label: utils.getHourText(date, ampm)
  }), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["c"], {
    variant: "h3",
    label: ":",
    className: classes.separator
  }), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: "h3",
    onClick: function onClick() {
      return setOpenView('minutes');
    },
    selected: openView === 'minutes',
    label: utils.getMinuteText(date)
  })), ampm && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_36__["default"], {
    item: true,
    container: true,
    xs: 1,
    direction: "column",
    justify: "flex-end"
  }, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: "subtitle1",
    selected: meridiemMode === 'am',
    label: utils.getMeridiemText('am'),
    onClick: function onClick() {
      return handleMeridiemChange('am');
    }
  }), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["T"], {
    variant: "subtitle1",
    selected: meridiemMode === 'pm',
    label: utils.getMeridiemText('pm'),
    onClick: function onClick() {
      return handleMeridiemChange('pm');
    }
  })))), showTabs && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(DateTimePickerTabs, {
    dateRangeIcon: dateRangeIcon,
    timeIcon: timeIcon,
    view: openView,
    onChange: setOpenView
  }));
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultProps = _objectSpread({}, _Picker_ccd9ba90_js__WEBPACK_IMPORTED_MODULE_20__["a"], {
  wider: true,
  orientation: 'portrait',
  openTo: 'date',
  views: ['year', 'date', 'hours', 'minutes']
});

function useOptions(props) {
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();

  if (props.orientation !== 'portrait') {
    throw new Error('We are not supporting custom orientation for DateTimePicker yet :(');
  }

  return {
    getDefaultFormat: function getDefaultFormat() {
      return Object(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["p"])(props.format, props.ampm, {
        '12h': utils.dateTime12hFormat,
        '24h': utils.dateTime24hFormat
      });
    }
  };
}

var DateTimePicker = Object(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["m"])({
  useOptions: useOptions,
  Input: _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["a"],
  useState: _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["u"],
  DefaultToolbarComponent: DateTimePickerToolbar
});
var KeyboardDateTimePicker = Object(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["m"])({
  useOptions: useOptions,
  Input: _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["K"],
  useState: _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["b"],
  DefaultToolbarComponent: DateTimePickerToolbar,
  getCustomProps: function getCustomProps(props) {
    return {
      refuse: props.ampm ? /[^\dap]+/gi : /[^\d]+/gi
    };
  }
});
DateTimePicker.defaultProps = defaultProps;
KeyboardDateTimePicker.defaultProps = defaultProps;


//# sourceMappingURL=DateTimePicker.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/Day.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/Day.js ***!
  \******************************************************/
/*! exports provided: default, Day, useStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day", function() { return Day; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    day: {
      width: 36,
      height: 36,
      fontSize: theme.typography.caption.fontSize,
      margin: '0 2px',
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium,
      padding: 0
    },
    hidden: {
      opacity: 0,
      pointerEvents: 'none'
    },
    current: {
      color: theme.palette.primary.main,
      fontWeight: 600
    },
    daySelected: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      '&:hover': {
        backgroundColor: theme.palette.primary.main
      }
    },
    dayDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersDay'
});
var Day = function Day(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      hidden = _ref.hidden,
      current = _ref.current,
      selected = _ref.selected,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["children", "disabled", "hidden", "current", "selected"]);

  var classes = useStyles();
  var className = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.day, hidden && classes.hidden, current && classes.current, selected && classes.daySelected, disabled && classes.dayDisabled);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    className: className,
    tabIndex: hidden || disabled ? -1 : 0
  }, other), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "body2",
    color: "inherit"
  }, children));
};
Day.displayName = 'Day';
 true ? Day.propTypes = {
  current: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  hidden: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"]
} : undefined;
Day.defaultProps = {
  disabled: false,
  hidden: false,
  current: false,
  selected: false
};

/* harmony default export */ __webpack_exports__["default"] = (Day);

//# sourceMappingURL=Day.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/Picker-ccd9ba90.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/Picker-ccd9ba90.js ***!
  \******************************************************************/
/*! exports provided: P, a, d, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Picker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateTimePickerDefaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return datePickerDefaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return timePickerDefaultProps; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Calendar-11ae61f6.js */ "./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _ClockView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ClockView.js */ "./node_modules/@material-ui/pickers/esm/ClockView.js");














function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var date = Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["object"], prop_types__WEBPACK_IMPORTED_MODULE_2__["string"], prop_types__WEBPACK_IMPORTED_MODULE_2__["number"], Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["instanceOf"])(Date)]);
var datePickerView = Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOf"])(['year', 'month', 'day']);
/* eslint-disable @typescript-eslint/no-object-literal-type-assertion */

var timePickerDefaultProps = {
  ampm: true,
  invalidDateMessage: 'Invalid Time Format'
};
var datePickerDefaultProps = {
  minDate: new Date('1900-01-01'),
  maxDate: new Date('2100-01-01'),
  invalidDateMessage: 'Invalid Date Format',
  minDateMessage: 'Date should not be before minimal date',
  maxDateMessage: 'Date should not be after maximal date',
  allowKeyboardControl: true
};
var dateTimePickerDefaultProps = _objectSpread({}, timePickerDefaultProps, {}, datePickerDefaultProps, {
  showTabs: true
});

function useViews(views, openTo, onChange) {
  var _React$useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(openTo && Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__["a"])(views, openTo) ? openTo : views[0]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__["default"])(_React$useState, 2),
      openView = _React$useState2[0],
      setOpenView = _React$useState2[1];

  var handleChangeAndOpenNext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (date, isFinish) {
    var nextViewToOpen = views[views.indexOf(openView) + 1];

    if (isFinish && nextViewToOpen) {
      // do not close picker if needs to show next view
      onChange(date, false);
      setOpenView(nextViewToOpen);
      return;
    }

    onChange(date, Boolean(isFinish));
  }, [onChange, openView, views]);
  return {
    handleChangeAndOpenNext: handleChangeAndOpenNext,
    openView: openView,
    setOpenView: setOpenView
  };
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      outline: 'none',
      '&:focus': {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    yearSelected: {
      margin: '10px 0',
      fontWeight: theme.typography.fontWeightMedium
    },
    yearDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersYear'
});
var Year = function Year(_ref) {
  var onSelect = _ref.onSelect,
      forwardedRef = _ref.forwardedRef,
      value = _ref.value,
      selected = _ref.selected,
      disabled = _ref.disabled,
      children = _ref.children,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["onSelect", "forwardedRef", "value", "selected", "disabled", "children"]);

  var classes = useStyles();
  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return onSelect(value);
  }, [onSelect, value]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
    role: "button",
    component: "div",
    tabIndex: disabled ? -1 : 0,
    onClick: handleClick,
    onKeyPress: handleClick,
    color: selected ? 'primary' : undefined,
    variant: selected ? 'h5' : 'subtitle1',
    children: children,
    ref: forwardedRef,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, selected && classes.yearSelected, disabled && classes.yearDisabled)
  }, other));
};
Year.displayName = 'Year';
var Year$1 = Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (props, ref) {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Year, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
    forwardedRef: ref
  }));
});

var useStyles$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
  container: {
    height: 300,
    overflowY: 'auto'
  }
}, {
  name: 'MuiPickersYearSelection'
});
var YearSelection = function YearSelection(_ref) {
  var date = _ref.date,
      onChange = _ref.onChange,
      onYearChange = _ref.onYearChange,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disablePast = _ref.disablePast,
      disableFuture = _ref.disableFuture,
      animateYearScrolling = _ref.animateYearScrolling;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  var classes = useStyles$1();
  var currentVariant = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__["V"]);
  var selectedYearRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (selectedYearRef.current && selectedYearRef.current.scrollIntoView) {
      try {
        selectedYearRef.current.scrollIntoView({
          block: currentVariant === 'static' ? 'nearest' : 'center',
          behavior: animateYearScrolling ? 'smooth' : 'auto'
        });
      } catch (e) {
        // call without arguments in case when scrollIntoView works improperly (e.g. Firefox 52-57)
        selectedYearRef.current.scrollIntoView();
      }
    }
  }, []); // eslint-disable-line

  var currentYear = utils.getYear(date);
  var onYearSelect = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (year) {
    var newDate = utils.setYear(date, year);

    if (onYearChange) {
      onYearChange(newDate);
    }

    onChange(newDate, true);
  }, [date, onChange, onYearChange, utils]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classes.container
  }, utils.getYearRange(minDate, maxDate).map(function (year) {
    var yearNumber = utils.getYear(year);
    var selected = yearNumber === currentYear;
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Year$1, {
      key: utils.getYearText(year),
      selected: selected,
      value: yearNumber,
      onSelect: onYearSelect,
      ref: selected ? selectedYearRef : undefined,
      disabled: Boolean(disablePast && utils.isBeforeYear(year, utils.date()) || disableFuture && utils.isAfterYear(year, utils.date()))
    }, utils.getYearText(year));
  }));
};

var useStyles$2 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      flex: '1 0 33.33%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      outline: 'none',
      height: 75,
      transition: theme.transitions.create('font-size', {
        duration: '100ms'
      }),
      '&:focus': {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    monthSelected: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium
    },
    monthDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersMonth'
});
var Month = function Month(_ref) {
  var selected = _ref.selected,
      onSelect = _ref.onSelect,
      disabled = _ref.disabled,
      value = _ref.value,
      children = _ref.children,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["selected", "onSelect", "disabled", "value", "children"]);

  var classes = useStyles$2();
  var handleSelection = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    onSelect(value);
  }, [onSelect, value]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
    role: "button",
    component: "div",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, selected && classes.monthSelected, disabled && classes.monthDisabled),
    tabIndex: disabled ? -1 : 0,
    onClick: handleSelection,
    onKeyPress: handleSelection,
    color: selected ? 'primary' : undefined,
    variant: selected ? 'h5' : 'subtitle1',
    children: children
  }, other));
};
Month.displayName = 'Month';

var useStyles$3 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
  container: {
    width: 310,
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'stretch'
  }
}, {
  name: 'MuiPickersMonthSelection'
});
var MonthSelection = function MonthSelection(_ref) {
  var disablePast = _ref.disablePast,
      disableFuture = _ref.disableFuture,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      date = _ref.date,
      onMonthChange = _ref.onMonthChange,
      onChange = _ref.onChange;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  var classes = useStyles$3();
  var currentMonth = utils.getMonth(date);

  var shouldDisableMonth = function shouldDisableMonth(month) {
    var now = utils.date();
    var utilMinDate = utils.date(minDate);
    var utilMaxDate = utils.date(maxDate);
    var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, utilMinDate) ? now : utilMinDate);
    var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, utilMaxDate) ? now : utilMaxDate);
    var isBeforeFirstEnabled = utils.isBefore(month, firstEnabledMonth);
    var isAfterLastEnabled = utils.isAfter(month, lastEnabledMonth);
    return isBeforeFirstEnabled || isAfterLastEnabled;
  };

  var onMonthSelect = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (month) {
    var newDate = utils.setMonth(date, month);
    onChange(newDate, true);

    if (onMonthChange) {
      onMonthChange(newDate);
    }
  }, [date, onChange, onMonthChange, utils]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classes.container
  }, utils.getMonthArray(date).map(function (month) {
    var monthNumber = utils.getMonth(month);
    var monthText = utils.format(month, 'MMM');
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Month, {
      key: monthText,
      value: monthNumber,
      selected: monthNumber === currentMonth,
      onSelect: onMonthSelect,
      disabled: shouldDisableMonth(month)
    }, monthText);
  }));
};

var getOrientation = function getOrientation() {
  if (typeof window === 'undefined') {
    return 'portrait';
  }

  if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
    return Math.abs(window.screen.orientation.angle) === 90 ? 'landscape' : 'portrait';
  } // Support IOS safari


  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90 ? 'landscape' : 'portrait';
  }

  return 'portrait';
};

function useIsLandscape(customOrientation) {
  var _React$useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getOrientation()),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__["default"])(_React$useState, 2),
      orientation = _React$useState2[0],
      setOrientation = _React$useState2[1];

  var eventHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return setOrientation(getOrientation());
  }, []);
  Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__["u"])(function () {
    window.addEventListener('orientationchange', eventHandler);
    return function () {
      return window.removeEventListener('orientationchange', eventHandler);
    };
  }, [eventHandler]);
  var orientationToUse = customOrientation || orientation;
  return orientationToUse === 'landscape';
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var viewsMap = {
  year: YearSelection,
  month: MonthSelection,
  date: _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_10__["a"],
  hours: _ClockView_js__WEBPACK_IMPORTED_MODULE_12__["ClockView"],
  minutes: _ClockView_js__WEBPACK_IMPORTED_MODULE_12__["ClockView"],
  seconds: _ClockView_js__WEBPACK_IMPORTED_MODULE_12__["ClockView"]
};
var useStyles$4 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  containerLandscape: {
    flexDirection: 'row'
  },
  pickerView: {
    overflowX: 'hidden',
    minHeight: _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__["b"],
    minWidth: _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__["D"],
    maxWidth: _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_9__["c"],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  pickerViewLandscape: {
    padding: '0 8px'
  }
}, {
  name: 'MuiPickersBasePicker'
});
var Picker = function Picker(_ref) {
  var date = _ref.date,
      views = _ref.views,
      disableToolbar = _ref.disableToolbar,
      onChange = _ref.onChange,
      openTo = _ref.openTo,
      unparsedMinDate = _ref.minDate,
      unparsedMaxDate = _ref.maxDate,
      ToolbarComponent = _ref.ToolbarComponent,
      orientation = _ref.orientation,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["date", "views", "disableToolbar", "onChange", "openTo", "minDate", "maxDate", "ToolbarComponent", "orientation"]);

  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  var classes = useStyles$4();
  var isLandscape = useIsLandscape(orientation);

  var _useViews = useViews(views, openTo, onChange),
      openView = _useViews.openView,
      setOpenView = _useViews.setOpenView,
      handleChangeAndOpenNext = _useViews.handleChangeAndOpenNext;

  var minDate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return utils.date(unparsedMinDate);
  }, [unparsedMinDate, utils]);
  var maxDate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return utils.date(unparsedMaxDate);
  }, [unparsedMaxDate, utils]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.container, isLandscape && classes.containerLandscape)
  }, !disableToolbar && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, rest, {
    views: views,
    isLandscape: isLandscape,
    date: date,
    onChange: onChange,
    setOpenView: setOpenView,
    openView: openView
  })), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.pickerView, isLandscape && classes.pickerViewLandscape)
  }, openView === 'year' && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(YearSelection, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, rest, {
    date: date,
    onChange: handleChangeAndOpenNext,
    minDate: minDate,
    maxDate: maxDate
  })), openView === 'month' && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MonthSelection, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, rest, {
    date: date,
    onChange: handleChangeAndOpenNext,
    minDate: minDate,
    maxDate: maxDate
  })), openView === 'date' && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_10__["a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, rest, {
    date: date,
    onChange: handleChangeAndOpenNext,
    minDate: minDate,
    maxDate: maxDate
  })), (openView === 'hours' || openView === 'minutes' || openView === 'seconds') && Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_ClockView_js__WEBPACK_IMPORTED_MODULE_12__["ClockView"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, rest, {
    date: date,
    type: openView,
    onHourChange: handleChangeAndOpenNext,
    onMinutesChange: handleChangeAndOpenNext,
    onSecondsChange: handleChangeAndOpenNext
  }))));
};
Picker.defaultProps = _objectSpread$1({}, datePickerDefaultProps, {
  views: Object.keys(viewsMap)
});


//# sourceMappingURL=Picker-ccd9ba90.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/TimePicker.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/TimePicker.js ***!
  \*************************************************************/
/*! exports provided: KeyboardTimePicker, TimePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardTimePicker", function() { return KeyboardTimePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePicker", function() { return TimePicker; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./makePickerWithState-5a79cb8a.js */ "./node_modules/@material-ui/pickers/esm/makePickerWithState-5a79cb8a.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Calendar-11ae61f6.js */ "./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var rifm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rifm */ "./node_modules/rifm/dist/rifm.esm.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Picker_ccd9ba90_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Picker-ccd9ba90.js */ "./node_modules/@material-ui/pickers/esm/Picker-ccd9ba90.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Day_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Day.js */ "./node_modules/@material-ui/pickers/esm/Day.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Clock-48fde975.js */ "./node_modules/@material-ui/pickers/esm/Clock-48fde975.js");
/* harmony import */ var _ClockView_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ClockView.js */ "./node_modules/@material-ui/pickers/esm/ClockView.js");
/* harmony import */ var _TimePickerToolbar_81100fab_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./TimePickerToolbar-81100fab.js */ "./node_modules/@material-ui/pickers/esm/TimePickerToolbar-81100fab.js");





































function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultProps = _objectSpread({}, _Picker_ccd9ba90_js__WEBPACK_IMPORTED_MODULE_20__["t"], {
  openTo: 'hours',
  views: ['hours', 'minutes']
});

function useOptions(props) {
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  return {
    getDefaultFormat: function getDefaultFormat() {
      return Object(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["p"])(props.format, props.ampm, {
        '12h': utils.time12hFormat,
        '24h': utils.time24hFormat
      });
    }
  };
}

var TimePicker = Object(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["m"])({
  useOptions: useOptions,
  Input: _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["a"],
  useState: _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["u"],
  DefaultToolbarComponent: _TimePickerToolbar_81100fab_js__WEBPACK_IMPORTED_MODULE_35__["T"]
});
var KeyboardTimePicker = Object(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["m"])({
  useOptions: useOptions,
  Input: _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["K"],
  useState: _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["b"],
  DefaultToolbarComponent: _TimePickerToolbar_81100fab_js__WEBPACK_IMPORTED_MODULE_35__["T"],
  getCustomProps: function getCustomProps(props) {
    return {
      refuse: props.ampm ? /[^\dap]+/gi : /[^\d]+/gi
    };
  }
});
TimePicker.defaultProps = defaultProps;
KeyboardTimePicker.defaultProps = defaultProps;


//# sourceMappingURL=TimePicker.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/TimePickerToolbar-81100fab.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/TimePickerToolbar-81100fab.js ***!
  \*****************************************************************************/
/*! exports provided: T, u */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return TimePickerToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return useMeridiemMode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makePickerWithState-5a79cb8a.js */ "./node_modules/@material-ui/pickers/esm/makePickerWithState-5a79cb8a.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Clock-48fde975.js */ "./node_modules/@material-ui/pickers/esm/Clock-48fde975.js");








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  toolbarLandscape: {
    flexWrap: 'wrap'
  },
  toolbarAmpmLeftPadding: {
    paddingLeft: 50
  },
  separator: {
    margin: '0 4px 0 2px',
    cursor: 'default'
  },
  hourMinuteLabel: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  hourMinuteLabelAmpmLandscape: {
    marginTop: 'auto'
  },
  hourMinuteLabelReverse: {
    flexDirection: 'row-reverse'
  },
  ampmSelection: {
    marginLeft: 20,
    marginRight: -20,
    display: 'flex',
    flexDirection: 'column'
  },
  ampmLandscape: {
    margin: '4px 0 auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexBasis: '100%'
  },
  ampmSelectionWithSeconds: {
    marginLeft: 15,
    marginRight: 10
  },
  ampmLabel: {
    fontSize: 18
  }
}, {
  name: 'MuiPickersTimePickerToolbar'
});
function useMeridiemMode(date, ampm, onChange) {
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_1__["u"])();
  var meridiemMode = Object(_Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_6__["g"])(date, utils);
  var handleMeridiemChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (mode) {
    var timeWithMeridiem = Object(_Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_6__["c"])(date, mode, Boolean(ampm), utils);
    onChange(timeWithMeridiem, false);
  }, [ampm, date, onChange, utils]);
  return {
    meridiemMode: meridiemMode,
    handleMeridiemChange: handleMeridiemChange
  };
}
var TimePickerToolbar = function TimePickerToolbar(_ref) {
  var date = _ref.date,
      views = _ref.views,
      ampm = _ref.ampm,
      openView = _ref.openView,
      onChange = _ref.onChange,
      isLandscape = _ref.isLandscape,
      setOpenView = _ref.setOpenView;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_1__["u"])();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var classes = useStyles();

  var _useMeridiemMode = useMeridiemMode(date, ampm, onChange),
      meridiemMode = _useMeridiemMode.meridiemMode,
      handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

  var clockTypographyVariant = isLandscape ? 'h3' : 'h2';
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_4__["P"], {
    isLandscape: isLandscape,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(isLandscape ? classes.toolbarLandscape : ampm && classes.toolbarAmpmLeftPadding)
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.hourMinuteLabel, ampm && isLandscape && classes.hourMinuteLabelAmpmLandscape, {
      rtl: classes.hourMinuteLabelReverse
    }[theme.direction])
  }, Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_5__["a"])(views, 'hours') && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_4__["T"], {
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView(_Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_6__["b"].HOURS);
    },
    selected: openView === _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_6__["b"].HOURS,
    label: utils.getHourText(date, Boolean(ampm))
  }), Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_5__["a"])(views, ['hours', 'minutes']) && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_4__["c"], {
    label: ":",
    variant: clockTypographyVariant,
    selected: false,
    className: classes.separator
  }), Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_5__["a"])(views, 'minutes') && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_4__["T"], {
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView(_Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_6__["b"].MINUTES);
    },
    selected: openView === _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_6__["b"].MINUTES,
    label: utils.getMinuteText(date)
  }), Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_5__["a"])(views, ['minutes', 'seconds']) && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_4__["c"], {
    variant: "h2",
    label: ":",
    selected: false,
    className: classes.separator
  }), Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_5__["a"])(views, 'seconds') && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_4__["T"], {
    variant: "h2",
    onClick: function onClick() {
      return setOpenView(_Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_6__["b"].SECONDS);
    },
    selected: openView === _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_6__["b"].SECONDS,
    label: utils.getSecondText(date)
  })), ampm && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.ampmSelection, isLandscape && classes.ampmLandscape, Object(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_5__["a"])(views, 'seconds') && classes.ampmSelectionWithSeconds)
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_4__["T"], {
    disableRipple: true,
    variant: "subtitle1",
    selected: meridiemMode === 'am',
    typographyClassName: classes.ampmLabel,
    label: utils.getMeridiemText('am'),
    onClick: function onClick() {
      return handleMeridiemChange('am');
    }
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_4__["T"], {
    disableRipple: true,
    variant: "subtitle1",
    selected: meridiemMode === 'pm',
    typographyClassName: classes.ampmLabel,
    label: utils.getMeridiemText('pm'),
    onClick: function onClick() {
      return handleMeridiemChange('pm');
    }
  })));
};


//# sourceMappingURL=TimePickerToolbar-81100fab.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js ***!
  \*******************************************************************/
/*! exports provided: D, V, W, a, b, c, r, u */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return DIALOG_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return VariantContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrayIncludes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VIEW_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DIALOG_WIDTH_WIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return runKeyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return useIsomorphicEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");












/** Use it instead of .includes method for IE support */
function arrayIncludes(array, itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.every(function (item) {
      return array.indexOf(item) !== -1;
    });
  }

  return array.indexOf(itemOrItems) !== -1;
}

var DIALOG_WIDTH = 310;
var DIALOG_WIDTH_WIDER = 325;
var VIEW_HEIGHT = 305;

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    staticWrapperRoot: {
      overflow: 'hidden',
      minWidth: DIALOG_WIDTH,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper
    }
  };
}, {
  name: 'MuiPickersStaticWrapper'
});
var StaticWrapper = function StaticWrapper(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classes.staticWrapperRoot,
    children: children
  });
};

var ModalDialog = function ModalDialog(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      onAccept = _ref.onAccept,
      onDismiss = _ref.onDismiss,
      onClear = _ref.onClear,
      onSetToday = _ref.onSetToday,
      okLabel = _ref.okLabel,
      cancelLabel = _ref.cancelLabel,
      clearLabel = _ref.clearLabel,
      todayLabel = _ref.todayLabel,
      clearable = _ref.clearable,
      showTodayButton = _ref.showTodayButton,
      showTabs = _ref.showTabs,
      wider = _ref.wider,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["children", "classes", "onAccept", "onDismiss", "onClear", "onSetToday", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "clearable", "showTodayButton", "showTabs", "wider"]);

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    role: "dialog",
    onClose: onDismiss,
    classes: {
      paper: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.dialogRoot, wider && classes.dialogRootWider)
    }
  }, other), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    children: children,
    className: classes.dialog
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
    classes: {
      root: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])((clearable || showTodayButton) && classes.withAdditionalAction)
    }
  }, clearable && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "primary",
    onClick: onClear
  }, clearLabel), showTodayButton && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "primary",
    onClick: onSetToday
  }, todayLabel), cancelLabel && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "primary",
    onClick: onDismiss
  }, cancelLabel), okLabel && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "primary",
    onClick: onAccept
  }, okLabel)));
};
ModalDialog.displayName = 'ModalDialog';
var styles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createStyles"])({
  dialogRoot: {
    minWidth: DIALOG_WIDTH
  },
  dialogRootWider: {
    minWidth: DIALOG_WIDTH_WIDER
  },
  dialog: {
    '&:first-child': {
      padding: 0
    }
  },
  withAdditionalAction: {
    // set justifyContent to default value to fix IE11 layout bug
    // see https://github.com/dmtrKovalenko/material-ui-pickers/pull/267
    justifyContent: 'flex-start',
    '& > *:first-child': {
      marginRight: 'auto'
    }
  }
});
var ModalDialog$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles, {
  name: 'MuiPickersModal'
})(ModalDialog);

var useIsomorphicEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];
function runKeyHandler(e, keyHandlers) {
  var handler = keyHandlers[e.key];

  if (handler) {
    handler(); // if event was handled prevent other side effects (e.g. page scroll)

    e.preventDefault();
  }
}
function useKeyDown(active, keyHandlers) {
  var keyHandlersRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(keyHandlers);
  keyHandlersRef.current = keyHandlers;
  useIsomorphicEffect(function () {
    if (active) {
      var handleKeyDown = function handleKeyDown(event) {
        runKeyHandler(event, keyHandlersRef.current);
      };

      window.addEventListener('keydown', handleKeyDown);
      return function () {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [active]);
}

var ModalWrapper = function ModalWrapper(_ref) {
  var open = _ref.open,
      children = _ref.children,
      okLabel = _ref.okLabel,
      cancelLabel = _ref.cancelLabel,
      clearLabel = _ref.clearLabel,
      todayLabel = _ref.todayLabel,
      showTodayButton = _ref.showTodayButton,
      clearable = _ref.clearable,
      DialogProps = _ref.DialogProps,
      showTabs = _ref.showTabs,
      wider = _ref.wider,
      InputComponent = _ref.InputComponent,
      DateInputProps = _ref.DateInputProps,
      onClear = _ref.onClear,
      onAccept = _ref.onAccept,
      onDismiss = _ref.onDismiss,
      onSetToday = _ref.onSetToday,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["open", "children", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "showTodayButton", "clearable", "DialogProps", "showTabs", "wider", "InputComponent", "DateInputProps", "onClear", "onAccept", "onDismiss", "onSetToday"]);

  useKeyDown(open, {
    Enter: onAccept
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, other, DateInputProps)), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ModalDialog$1, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    wider: wider,
    showTabs: showTabs,
    open: open,
    onClear: onClear,
    onAccept: onAccept,
    onDismiss: onDismiss,
    onSetToday: onSetToday,
    clearLabel: clearLabel,
    todayLabel: todayLabel,
    okLabel: okLabel,
    cancelLabel: cancelLabel,
    clearable: clearable,
    showTodayButton: showTodayButton,
    children: children
  }, DialogProps)));
};
 true ? ModalWrapper.propTypes = {
  okLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],
  cancelLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],
  clearLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],
  clearable: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  todayLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],
  showTodayButton: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  DialogProps: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"]
} : undefined;
ModalWrapper.defaultProps = {
  okLabel: 'OK',
  cancelLabel: 'Cancel',
  clearLabel: 'Clear',
  todayLabel: 'Today',
  clearable: false,
  showTodayButton: false
};

var InlineWrapper = function InlineWrapper(_ref) {
  var open = _ref.open,
      wider = _ref.wider,
      children = _ref.children,
      PopoverProps = _ref.PopoverProps,
      onClear = _ref.onClear,
      onDismiss = _ref.onDismiss,
      onSetToday = _ref.onSetToday,
      onAccept = _ref.onAccept,
      showTabs = _ref.showTabs,
      DateInputProps = _ref.DateInputProps,
      InputComponent = _ref.InputComponent,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["open", "wider", "children", "PopoverProps", "onClear", "onDismiss", "onSetToday", "onAccept", "showTabs", "DateInputProps", "InputComponent"]);

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  useKeyDown(open, {
    Enter: onAccept
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, other, DateInputProps, {
    inputRef: ref
  })), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    open: open,
    onClose: onDismiss,
    anchorEl: ref.current,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    children: children
  }, PopoverProps)));
};
 true ? InlineWrapper.propTypes = {
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  PopoverProps: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"]
} : undefined;

function getWrapperFromVariant(variant) {
  switch (variant) {
    case 'inline':
      return InlineWrapper;

    case 'static':
      return StaticWrapper;

    default:
      return ModalWrapper;
  }
}
var VariantContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
var Wrapper = function Wrapper(_ref) {
  var variant = _ref.variant,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["variant"]);

  var Component = getWrapperFromVariant(variant);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(VariantContext.Provider, {
    value: variant || 'dialog'
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component, props));
};


//# sourceMappingURL=Wrapper-241966d7.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/index.js ***!
  \********************************************************/
/*! exports provided: MuiPickersContext, MuiPickersUtilsProvider, useUtils, makePickerWithState, useKeyboardPickerState, usePickerState, validate, Calendar, DatePicker, KeyboardDatePicker, Picker, Day, Clock, ClockView, TimePickerView, KeyboardTimePicker, TimePicker, DateTimePicker, KeyboardDateTimePicker, useStaticState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticState", function() { return useStaticState; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuiPickersContext", function() { return _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuiPickersUtilsProvider", function() { return _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["M"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUtils", function() { return _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"]; });

/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./makePickerWithState-5a79cb8a.js */ "./node_modules/@material-ui/pickers/esm/makePickerWithState-5a79cb8a.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePickerWithState", function() { return _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKeyboardPickerState", function() { return _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePickerState", function() { return _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["v"]; });

/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Calendar-11ae61f6.js */ "./node_modules/@material-ui/pickers/esm/Calendar-11ae61f6.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return _Calendar_11ae61f6_js__WEBPACK_IMPORTED_MODULE_13__["a"]; });

/* harmony import */ var _DatePicker_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DatePicker.js */ "./node_modules/@material-ui/pickers/esm/DatePicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return _DatePicker_js__WEBPACK_IMPORTED_MODULE_14__["DatePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardDatePicker", function() { return _DatePicker_js__WEBPACK_IMPORTED_MODULE_14__["KeyboardDatePicker"]; });

/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var rifm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rifm */ "./node_modules/rifm/dist/rifm.esm.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Picker_ccd9ba90_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Picker-ccd9ba90.js */ "./node_modules/@material-ui/pickers/esm/Picker-ccd9ba90.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _Picker_ccd9ba90_js__WEBPACK_IMPORTED_MODULE_21__["P"]; });

/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Day_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Day.js */ "./node_modules/@material-ui/pickers/esm/Day.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Day", function() { return _Day_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Clock-48fde975.js */ "./node_modules/@material-ui/pickers/esm/Clock-48fde975.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return _Clock_48fde975_js__WEBPACK_IMPORTED_MODULE_34__["a"]; });

/* harmony import */ var _ClockView_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ClockView.js */ "./node_modules/@material-ui/pickers/esm/ClockView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClockView", function() { return _ClockView_js__WEBPACK_IMPORTED_MODULE_35__["ClockView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimePickerView", function() { return _ClockView_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _TimePickerToolbar_81100fab_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./TimePickerToolbar-81100fab.js */ "./node_modules/@material-ui/pickers/esm/TimePickerToolbar-81100fab.js");
/* harmony import */ var _TimePicker_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./TimePicker.js */ "./node_modules/@material-ui/pickers/esm/TimePicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardTimePicker", function() { return _TimePicker_js__WEBPACK_IMPORTED_MODULE_37__["KeyboardTimePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimePicker", function() { return _TimePicker_js__WEBPACK_IMPORTED_MODULE_37__["TimePicker"]; });

/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _DateTimePicker_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./DateTimePicker.js */ "./node_modules/@material-ui/pickers/esm/DateTimePicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimePicker", function() { return _DateTimePicker_js__WEBPACK_IMPORTED_MODULE_42__["DateTimePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardDateTimePicker", function() { return _DateTimePicker_js__WEBPACK_IMPORTED_MODULE_42__["KeyboardDateTimePicker"]; });














































function useStaticState(_ref) {
  var value = _ref.value,
      _ref$autoOk = _ref.autoOk,
      autoOk = _ref$autoOk === void 0 ? true : _ref$autoOk,
      onChange = _ref.onChange,
      defaultFormat = _ref.defaultFormat;

  var _usePickerState = Object(_makePickerWithState_5a79cb8a_js__WEBPACK_IMPORTED_MODULE_9__["u"])({
    value: value,
    onChange: onChange,
    autoOk: autoOk
  }, {
    // just a random format, mostly always not needed for users
    getDefaultFormat: function getDefaultFormat() {
      return defaultFormat || 'MM/dd/yyyy';
    }
  }),
      pickerProps = _usePickerState.pickerProps,
      wrapperProps = _usePickerState.wrapperProps,
      inputProps = _usePickerState.inputProps;

  return {
    pickerProps: pickerProps,
    wrapperProps: wrapperProps,
    inputProps: inputProps
  };
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/makePickerWithState-5a79cb8a.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/makePickerWithState-5a79cb8a.js ***!
  \*******************************************************************************/
/*! exports provided: K, P, T, a, b, c, m, p, u, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return KeyboardDateInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return PickerToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return ToolbarButton$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PureDateInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useKeyboardPickerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ToolbarText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return makePickerWithState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pick12hOr24hFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return usePickerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return validate; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils-cfb96ac9.js */ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Wrapper-241966d7.js */ "./node_modules/@material-ui/pickers/esm/Wrapper-241966d7.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var rifm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rifm */ "./node_modules/rifm/dist/rifm.esm.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Picker_ccd9ba90_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Picker-ccd9ba90.js */ "./node_modules/@material-ui/pickers/esm/Picker-ccd9ba90.js");




















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  var textColor = theme.palette.type === 'light' ? theme.palette.primary.contrastText : theme.palette.getContrastText(theme.palette.background["default"]);
  return {
    toolbarTxt: {
      color: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["fade"])(textColor, 0.54)
    },
    toolbarBtnSelected: {
      color: textColor
    }
  };
}, {
  name: 'MuiPickersToolbarText'
});

var ToolbarText = function ToolbarText(_ref) {
  var selected = _ref.selected,
      label = _ref.label,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["selected", "label", "className"]);

  var classes = useStyles();
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
    children: label,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.toolbarTxt, className, selected && classes.toolbarBtnSelected)
  }, other));
};

var ToolbarButton = function ToolbarButton(_ref) {
  var classes = _ref.classes,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      label = _ref.label,
      selected = _ref.selected,
      variant = _ref.variant,
      align = _ref.align,
      typographyClassName = _ref.typographyClassName,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["classes", "className", "label", "selected", "variant", "align", "typographyClassName"]);

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
    variant: "text",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.toolbarBtn, className)
  }, other), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarText, {
    align: align,
    className: typographyClassName,
    variant: variant,
    label: label,
    selected: selected
  }));
};

 true ? ToolbarButton.propTypes = {
  selected: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"].isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2__["any"].isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2__["any"]
} : undefined;
ToolbarButton.defaultProps = {
  className: ''
};
var styles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["createStyles"])({
  toolbarBtn: {
    padding: 0,
    minWidth: '16px',
    textTransform: 'none'
  }
});
var ToolbarButton$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(styles, {
  name: 'MuiPickersToolbarButton'
})(ToolbarButton);

var useStyles$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    toolbar: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background["default"]
    },
    toolbarLandscape: {
      height: 'auto',
      maxWidth: 150,
      padding: 8,
      justifyContent: 'flex-start'
    }
  };
}, {
  name: 'MuiPickersToolbar'
});

var PickerToolbar = function PickerToolbar(_ref) {
  var children = _ref.children,
      isLandscape = _ref.isLandscape,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["children", "isLandscape", "className"]);

  var classes = useStyles$1();
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.toolbar, className, isLandscape && classes.toolbarLandscape)
  }, other), children);
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var PureDateInput = function PureDateInput(_ref) {
  var inputValue = _ref.inputValue,
      inputVariant = _ref.inputVariant,
      validationError = _ref.validationError,
      InputProps = _ref.InputProps,
      onOpen = _ref.openPicker,
      _ref$TextFieldCompone = _ref.TextFieldComponent,
      TextFieldComponent = _ref$TextFieldCompone === void 0 ? _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"] : _ref$TextFieldCompone,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["inputValue", "inputVariant", "validationError", "InputProps", "openPicker", "TextFieldComponent"]);

  var PureDateInputProps = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return _objectSpread({}, InputProps, {
      readOnly: true
    });
  }, [InputProps]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextFieldComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
    error: Boolean(validationError),
    helperText: validationError
  }, other, {
    // do not overridable
    onClick: onOpen,
    value: inputValue,
    variant: inputVariant,
    InputProps: PureDateInputProps,
    onKeyDown: function onKeyDown(e) {
      // space
      if (e.keyCode === 32) {
        e.stopPropagation();
        onOpen();
      }
    }
  }));
};
PureDateInput.displayName = 'PureDateInput';

var KeyboardIcon = function KeyboardIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_16__["default"], props, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }));
};

var getDisplayDate = function getDisplayDate(value, format, utils, isEmpty, _ref) {
  var invalidLabel = _ref.invalidLabel,
      emptyLabel = _ref.emptyLabel,
      labelFunc = _ref.labelFunc;
  var date = utils.date(value);

  if (labelFunc) {
    return labelFunc(isEmpty ? null : date, invalidLabel);
  }

  if (isEmpty) {
    return emptyLabel || '';
  }

  return utils.isValid(date) ? utils.format(date, format) : invalidLabel;
};

var getComparisonMaxDate = function getComparisonMaxDate(utils, strictCompareDates, date) {
  if (strictCompareDates) {
    return date;
  }

  return utils.endOfDay(date);
};

var getComparisonMinDate = function getComparisonMinDate(utils, strictCompareDates, date) {
  if (strictCompareDates) {
    return date;
  }

  return utils.startOfDay(date);
};

var validate = function validate(value, utils, _ref2) {
  var maxDate = _ref2.maxDate,
      minDate = _ref2.minDate,
      disablePast = _ref2.disablePast,
      disableFuture = _ref2.disableFuture,
      maxDateMessage = _ref2.maxDateMessage,
      minDateMessage = _ref2.minDateMessage,
      invalidDateMessage = _ref2.invalidDateMessage,
      strictCompareDates = _ref2.strictCompareDates;
  var parsedValue = utils.date(value); // if null - do not show error

  if (value === null) {
    return '';
  }

  if (!utils.isValid(value)) {
    return invalidDateMessage;
  }

  if (maxDate && utils.isAfter(parsedValue, getComparisonMaxDate(utils, !!strictCompareDates, utils.date(maxDate)))) {
    return maxDateMessage;
  }

  if (disableFuture && utils.isAfter(parsedValue, getComparisonMaxDate(utils, !!strictCompareDates, utils.date()))) {
    return maxDateMessage;
  }

  if (minDate && utils.isBefore(parsedValue, getComparisonMinDate(utils, !!strictCompareDates, utils.date(minDate)))) {
    return minDateMessage;
  }

  if (disablePast && utils.isBefore(parsedValue, getComparisonMinDate(utils, !!strictCompareDates, utils.date()))) {
    return minDateMessage;
  }

  return '';
};
function pick12hOr24hFormat(userFormat) {
  var ampm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var formats = arguments.length > 2 ? arguments[2] : undefined;

  if (userFormat) {
    return userFormat;
  }

  return ampm ? formats['12h'] : formats['24h'];
}
function makeMaskFromFormat(format, numberMaskChar) {
  return format.replace(/[a-z]/gi, numberMaskChar);
}
var maskedDateFormatter = function maskedDateFormatter(mask, numberMaskChar, refuse) {
  return function (value) {
    var result = '';
    var parsed = value.replace(refuse, '');

    if (parsed === '') {
      return parsed;
    }

    var i = 0;
    var n = 0;

    while (i < mask.length) {
      var maskChar = mask[i];

      if (maskChar === numberMaskChar && n < parsed.length) {
        var parsedChar = parsed[n];
        result += parsedChar;
        n += 1;
      } else {
        result += maskChar;
      }

      i += 1;
    }

    return result;
  };
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var KeyboardDateInput = function KeyboardDateInput(_ref) {
  var inputValue = _ref.inputValue,
      inputVariant = _ref.inputVariant,
      validationError = _ref.validationError,
      KeyboardButtonProps = _ref.KeyboardButtonProps,
      InputAdornmentProps = _ref.InputAdornmentProps,
      onOpen = _ref.openPicker,
      onChange = _ref.onChange,
      InputProps = _ref.InputProps,
      mask = _ref.mask,
      _ref$maskChar = _ref.maskChar,
      maskChar = _ref$maskChar === void 0 ? '_' : _ref$maskChar,
      _ref$refuse = _ref.refuse,
      refuse = _ref$refuse === void 0 ? /[^\d]+/gi : _ref$refuse,
      format = _ref.format,
      keyboardIcon = _ref.keyboardIcon,
      disabled = _ref.disabled,
      rifmFormatter = _ref.rifmFormatter,
      _ref$TextFieldCompone = _ref.TextFieldComponent,
      TextFieldComponent = _ref$TextFieldCompone === void 0 ? _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"] : _ref$TextFieldCompone,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["inputValue", "inputVariant", "validationError", "KeyboardButtonProps", "InputAdornmentProps", "openPicker", "onChange", "InputProps", "mask", "maskChar", "refuse", "format", "keyboardIcon", "disabled", "rifmFormatter", "TextFieldComponent"]);

  var inputMask = mask || makeMaskFromFormat(format, maskChar); // prettier-ignore

  var formatter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return maskedDateFormatter(inputMask, maskChar, refuse);
  }, [inputMask, maskChar, refuse]);
  var position = InputAdornmentProps && InputAdornmentProps.position ? InputAdornmentProps.position : 'end';

  var handleChange = function handleChange(text) {
    var finalString = text === '' || text === inputMask ? null : text;
    onChange(finalString);
  };

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(rifm__WEBPACK_IMPORTED_MODULE_15__["Rifm"], {
    key: inputMask,
    value: inputValue,
    onChange: handleChange,
    refuse: refuse,
    format: rifmFormatter || formatter
  }, function (_ref2) {
    var onChange = _ref2.onChange,
        value = _ref2.value;
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextFieldComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
      disabled: disabled,
      error: Boolean(validationError),
      helperText: validationError
    }, other, {
      value: value,
      onChange: onChange,
      variant: inputVariant,
      InputProps: _objectSpread$1({}, InputProps, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(position, "Adornment"), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
        position: position
      }, InputAdornmentProps), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
        disabled: disabled
      }, KeyboardButtonProps, {
        onClick: onOpen
      }), keyboardIcon))))
    }));
  });
};
KeyboardDateInput.defaultProps = {
  keyboardIcon: Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(KeyboardIcon, null)
};

function useOpenState(_ref) {
  var open = _ref.open,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose;
  var setIsOpenState = null;

  if (open === undefined || open === null) {
    // The component is uncontrolled, so we need to give it its own state.
    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

    var _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_17__["default"])(_useState, 2);

    open = _useState2[0];
    setIsOpenState = _useState2[1];
  } // prettier-ignore


  var setIsOpen = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (newIsOpen) {
    setIsOpenState && setIsOpenState(newIsOpen);
    return newIsOpen ? onOpen && onOpen() : onClose && onClose();
  }, [onOpen, onClose, setIsOpenState]);
  return {
    isOpen: open,
    setIsOpen: setIsOpen
  };
}

var useValueToDate = function useValueToDate(utils, _ref) {
  var value = _ref.value,
      initialFocusedDate = _ref.initialFocusedDate;
  var nowRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(utils.date());
  var date = utils.date(value || initialFocusedDate || nowRef.current);
  return date && utils.isValid(date) ? date : nowRef.current;
};

function useDateValues(props, options) {
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  var date = useValueToDate(utils, props);
  var format = props.format || options.getDefaultFormat();
  return {
    date: date,
    format: format
  };
}

function usePickerState(props, options) {
  var autoOk = props.autoOk,
      disabled = props.disabled,
      readOnly = props.readOnly,
      onAccept = props.onAccept,
      _onChange = props.onChange,
      onError = props.onError,
      value = props.value,
      variant = props.variant;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();

  var _useOpenState = useOpenState(props),
      isOpen = _useOpenState.isOpen,
      setIsOpen = _useOpenState.setIsOpen;

  var _useDateValues = useDateValues(props, options),
      date = _useDateValues.date,
      format = _useDateValues.format;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(date),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_17__["default"])(_useState, 2),
      pickerDate = _useState2[0],
      setPickerDate = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // if value was changed in closed state - treat it as accepted
    if (!isOpen && !utils.isEqual(pickerDate, date)) {
      setPickerDate(date);
    }
  }, [date, isOpen, pickerDate, utils]);
  var acceptDate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (acceptedDate) {
    _onChange(acceptedDate);

    if (onAccept) {
      onAccept(acceptedDate);
    }

    setIsOpen(false);
  }, [onAccept, _onChange, setIsOpen]);
  var wrapperProps = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      format: format,
      open: isOpen,
      onClear: function onClear() {
        return acceptDate(null);
      },
      onAccept: function onAccept() {
        return acceptDate(pickerDate);
      },
      onSetToday: function onSetToday() {
        return setPickerDate(utils.date());
      },
      onDismiss: function onDismiss() {
        setIsOpen(false);
      }
    };
  }, [acceptDate, format, isOpen, pickerDate, setIsOpen, utils]);
  var pickerProps = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      date: pickerDate,
      onChange: function onChange(newDate) {
        var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        setPickerDate(newDate);

        if (isFinish && autoOk) {
          acceptDate(newDate);
          return;
        } // simulate autoOk, but do not close the modal


        if (variant === 'inline' || variant === 'static') {
          _onChange(newDate);

          onAccept && onAccept(newDate);
        }
      }
    };
  }, [acceptDate, autoOk, onAccept, _onChange, pickerDate, variant]);
  var validationError = validate(value, utils, props);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (onError) {
      onError(validationError, value);
    }
  }, [onError, validationError, value]);
  var inputValue = getDisplayDate(date, format, utils, value === null, props);
  var inputProps = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      inputValue: inputValue,
      validationError: validationError,
      openPicker: function openPicker() {
        return !readOnly && !disabled && setIsOpen(true);
      }
    };
  }, [disabled, inputValue, readOnly, setIsOpen, validationError]);
  var pickerState = {
    pickerProps: pickerProps,
    inputProps: inputProps,
    wrapperProps: wrapperProps
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(pickerState);
  return pickerState;
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function parseInputString(value, utils, format) {
  try {
    return utils.parse(value, format);
  } catch (_unused) {
    return null;
  }
}

function useKeyboardPickerState(props, options) {
  var _props$format = props.format,
      format = _props$format === void 0 ? options.getDefaultFormat() : _props$format,
      inputValue = props.inputValue,
      _onChange = props.onChange,
      value = props.value;
  var utils = Object(_useUtils_cfb96ac9_js__WEBPACK_IMPORTED_MODULE_3__["u"])();
  var displayDate = getDisplayDate(value, format, utils, value === null, props);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(displayDate),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_17__["default"])(_useState, 2),
      innerInputValue = _useState2[0],
      setInnerInputValue = _useState2[1];

  var dateValue = inputValue ? parseInputString(inputValue, utils, format) : value;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (value === null || utils.isValid(value)) {
      setInnerInputValue(displayDate);
    }
  }, [displayDate, setInnerInputValue, utils, value]);
  var handleKeyboardChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (date) {
    _onChange(date, date === null ? null : utils.format(date, format));
  }, [format, _onChange, utils]);

  var _usePickerState = usePickerState( // Extend props interface
  _objectSpread$2({}, props, {
    value: dateValue,
    onChange: handleKeyboardChange
  }), options),
      innerInputProps = _usePickerState.inputProps,
      wrapperProps = _usePickerState.wrapperProps,
      pickerProps = _usePickerState.pickerProps;

  var inputProps = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return _objectSpread$2({}, innerInputProps, {
      // reuse validation and open/close logic
      format: wrapperProps.format,
      inputValue: inputValue || innerInputValue,
      onChange: function onChange(value) {
        setInnerInputValue(value || '');
        var date = value === null ? null : utils.parse(value, wrapperProps.format);

        _onChange(date, value);
      }
    });
  }, [innerInputProps, innerInputValue, inputValue, _onChange, utils, wrapperProps.format]);
  return {
    inputProps: inputProps,
    wrapperProps: wrapperProps,
    pickerProps: pickerProps
  };
}

function makePickerWithState(_ref) {
  var Input = _ref.Input,
      useState = _ref.useState,
      useOptions = _ref.useOptions,
      getCustomProps = _ref.getCustomProps,
      DefaultToolbarComponent = _ref.DefaultToolbarComponent;

  function PickerWithState(props) {
    var allowKeyboardControl = props.allowKeyboardControl,
        ampm = props.ampm,
        animateYearScrolling = props.animateYearScrolling,
        autoOk = props.autoOk,
        dateRangeIcon = props.dateRangeIcon,
        disableFuture = props.disableFuture,
        disablePast = props.disablePast,
        disableToolbar = props.disableToolbar,
        emptyLabel = props.emptyLabel,
        format = props.format,
        forwardedRef = props.forwardedRef,
        hideTabs = props.hideTabs,
        initialFocusedDate = props.initialFocusedDate,
        invalidDateMessage = props.invalidDateMessage,
        invalidLabel = props.invalidLabel,
        labelFunc = props.labelFunc,
        leftArrowButtonProps = props.leftArrowButtonProps,
        leftArrowIcon = props.leftArrowIcon,
        loadingIndicator = props.loadingIndicator,
        maxDate = props.maxDate,
        maxDateMessage = props.maxDateMessage,
        minDate = props.minDate,
        minDateMessage = props.minDateMessage,
        minutesStep = props.minutesStep,
        onAccept = props.onAccept,
        onChange = props.onChange,
        onClose = props.onClose,
        onMonthChange = props.onMonthChange,
        onOpen = props.onOpen,
        onYearChange = props.onYearChange,
        openTo = props.openTo,
        orientation = props.orientation,
        renderDay = props.renderDay,
        rightArrowButtonProps = props.rightArrowButtonProps,
        rightArrowIcon = props.rightArrowIcon,
        shouldDisableDate = props.shouldDisableDate,
        strictCompareDates = props.strictCompareDates,
        timeIcon = props.timeIcon,
        _props$ToolbarCompone = props.ToolbarComponent,
        ToolbarComponent = _props$ToolbarCompone === void 0 ? DefaultToolbarComponent : _props$ToolbarCompone,
        value = props.value,
        variant = props.variant,
        views = props.views,
        other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__["default"])(props, ["allowKeyboardControl", "ampm", "animateYearScrolling", "autoOk", "dateRangeIcon", "disableFuture", "disablePast", "disableToolbar", "emptyLabel", "format", "forwardedRef", "hideTabs", "initialFocusedDate", "invalidDateMessage", "invalidLabel", "labelFunc", "leftArrowButtonProps", "leftArrowIcon", "loadingIndicator", "maxDate", "maxDateMessage", "minDate", "minDateMessage", "minutesStep", "onAccept", "onChange", "onClose", "onMonthChange", "onOpen", "onYearChange", "openTo", "orientation", "renderDay", "rightArrowButtonProps", "rightArrowIcon", "shouldDisableDate", "strictCompareDates", "timeIcon", "ToolbarComponent", "value", "variant", "views"]);

    var injectedProps = getCustomProps ? getCustomProps(props) : {};
    var options = useOptions(props);

    var _useState = useState(props, options),
        pickerProps = _useState.pickerProps,
        inputProps = _useState.inputProps,
        wrapperProps = _useState.wrapperProps;

    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_Wrapper_241966d7_js__WEBPACK_IMPORTED_MODULE_11__["W"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
      variant: variant,
      InputComponent: Input,
      DateInputProps: inputProps
    }, injectedProps, wrapperProps, other), Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_Picker_ccd9ba90_js__WEBPACK_IMPORTED_MODULE_18__["P"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, pickerProps, {
      allowKeyboardControl: allowKeyboardControl,
      ampm: ampm,
      animateYearScrolling: animateYearScrolling,
      dateRangeIcon: dateRangeIcon,
      disableFuture: disableFuture,
      disablePast: disablePast,
      disableToolbar: disableToolbar,
      hideTabs: hideTabs,
      leftArrowButtonProps: leftArrowButtonProps,
      leftArrowIcon: leftArrowIcon,
      loadingIndicator: loadingIndicator,
      maxDate: maxDate,
      minDate: minDate,
      minutesStep: minutesStep,
      onMonthChange: onMonthChange,
      onYearChange: onYearChange,
      openTo: openTo,
      orientation: orientation,
      renderDay: renderDay,
      rightArrowButtonProps: rightArrowButtonProps,
      rightArrowIcon: rightArrowIcon,
      shouldDisableDate: shouldDisableDate,
      strictCompareDates: strictCompareDates,
      timeIcon: timeIcon,
      ToolbarComponent: ToolbarComponent,
      views: views
    })));
  }

  return PickerWithState;
}


//# sourceMappingURL=makePickerWithState-5a79cb8a.js.map


/***/ }),

/***/ "./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/pickers/esm/useUtils-cfb96ac9.js ***!
  \********************************************************************/
/*! exports provided: M, a, u */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MuiPickersUtilsProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MuiPickersContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return useUtils; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var MuiPickersContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
var MuiPickersUtilsProvider = function MuiPickersUtilsProvider(_ref) {
  var Utils = _ref.utils,
      children = _ref.children,
      locale = _ref.locale,
      libInstance = _ref.libInstance;
  var utils = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return new Utils({
      locale: locale,
      instance: libInstance
    });
  }, [Utils, libInstance, locale]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MuiPickersContext.Provider, {
    value: utils,
    children: children
  });
};
 true ? MuiPickersUtilsProvider.propTypes = {
  utils: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  locale: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["object"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),
  children: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["element"].isRequired, Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_1__["element"].isRequired)]).isRequired
} : undefined;

var checkUtils = function checkUtils(utils) {
  if (!utils) {
    // tslint:disable-next-line
    throw new Error('Can not find utils in context. You either a) forgot to wrap your component tree in MuiPickersUtilsProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.');
  }
};
function useUtils() {
  var utils = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(MuiPickersContext);
  checkUtils(utils);
  return utils;
}


//# sourceMappingURL=useUtils-cfb96ac9.js.map


/***/ }),

/***/ "./node_modules/rifm/dist/rifm.esm.js":
/*!********************************************!*\
  !*** ./node_modules/rifm/dist/rifm.esm.js ***!
  \********************************************/
/*! exports provided: Rifm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rifm", function() { return Rifm; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Rifm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Rifm, _React$Component);

  function Rifm(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._state = null;
    _this._del = false;

    _this._handleChange = function (evt) {
      if (true) {
        if (evt.target.type === 'number') {
          console.error('Rifm does not support input type=number, use type=tel instead.');
          return;
        }
      } // FUTURE: use evt.nativeEvent.inputType for del event, see comments at onkeydown


      var stateValue = _this.state.value;
      var value = evt.target.value;
      var input = evt.target;
      var op = value.length > stateValue.length;
      var del = _this._del;

      var noOp = stateValue === _this.props.format(value);

      _this.setState({
        value: value,
        local: true
      }, function () {
        var selectionStart = input.selectionStart;
        var refuse = _this.props.refuse || /[^\d]+/g;
        var before = value.substr(0, selectionStart).replace(refuse, '');
        _this._state = {
          input: input,
          before: before,
          op: op,
          di: del && noOp,
          del: del
        };

        if (_this.props.replace && _this.props.replace(stateValue) && op && !noOp) {
          var start = -1;

          for (var i = 0; i !== before.length; ++i) {
            start = Math.max(start, value.toLowerCase().indexOf(before[i].toLowerCase(), start + 1));
          }

          var c = value.substr(start + 1).replace(refuse, '')[0];
          start = value.indexOf(c, start + 1);
          value = "" + value.substr(0, start) + value.substr(start + 1);
        }

        var fv = _this.props.format(value);

        if (stateValue === fv) {
          _this.setState({
            value: value
          });
        } else {
          _this.props.onChange(fv);
        }
      });
    };

    _this._hKD = function (evt) {
      if (evt.code === 'Delete') {
        _this._del = true;
      }
    };

    _this._hKU = function (evt) {
      if (evt.code === 'Delete') {
        _this._del = false;
      }
    };

    _this.state = {
      value: props.value,
      local: true
    };
    return _this;
  }

  Rifm.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    return {
      value: state.local ? state.value : props.value,
      local: false
    };
  };

  var _proto = Rifm.prototype;

  _proto.render = function render() {
    var _handleChange = this._handleChange,
        value = this.state.value,
        children = this.props.children;
    return children({
      value: value,
      onChange: _handleChange
    });
  } // delete when  https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType will be supported by all major browsers
  ;

  _proto.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('keydown', this._hKD);
    document.removeEventListener('keyup', this._hKU);
  } // delete when  https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType will be supported by all major browsers
  ;

  _proto.componentDidMount = function componentDidMount() {
    document.addEventListener('keydown', this._hKD);
    document.addEventListener('keyup', this._hKU);
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    var _state = this._state;

    if (_state) {
      var value = this.state.value;
      var start = -1;

      for (var i = 0; i !== _state.before.length; ++i) {
        start = Math.max(start, value.toLowerCase().indexOf(_state.before[i].toLowerCase(), start + 1));
      } // format usually looks better without this


      if (this.props.replace && (_state.op || _state.del && !_state.di)) {
        while (value[start + 1] && (this.props.refuse || /[^\d]+/).test(value[start + 1])) {
          start += 1;
        }
      }

      _state.input.selectionStart = _state.input.selectionEnd = start + 1 + (_state.di ? 1 : 0);
    }

    this._state = null;
  };

  return Rifm;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);




/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_MovieGallery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/MovieGallery */ "./components/MovieGallery.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);







var _jsxFileName = "C:\\Users\\HP\\Desktop\\movie-master\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var styles = function styles(theme) {
  return {
    headContainer: {
      margin: '45px auto',
      textAlign: 'center'
    },
    textField: {
      width: '70%',
      margin: '20px auto'
    },
    movieContainer: {
      maxWidth: '78%',
      margin: '10px auto 40px'
    }
  };
};

var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      movieInput: '',
      movieArray: '',
      selectedDate: new Date()
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (e) {
      console.log(e.target.value);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "keyPress", function (e, state) {
      if (e.keyCode == 13) {
        _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
          movieInput: e.target.value
        }));

        setTimeout(function () {
          axios__WEBPACK_IMPORTED_MODULE_16___default.a.get('http://www.omdbapi.com/?apikey=50f7c729&s=' + _this.state.movieInput + '&type=series').then(function (res) {
            var movieArray = res.data.Search;

            _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
              movieArray: movieArray
            }));
          });
        }, 500);
      }
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return __jsx("div", {
        className: "mainDiv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }
      }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }
      }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
        maxWidth: "lg",
        className: classes.headContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h4",
        gutterBottom: true,
        className: classes.mainHeading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }
      }, "Search for any movie"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: "Search movies",
        margin: "normal",
        variant: "outlined",
        className: classes.textField,
        onChange: this.handleChange,
        onKeyDown: this.keyPress,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }
      }), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_15__["DatePicker"], {
        views: ['year'],
        label: "Year only",
        value: this.state.selectedDate,
        onChange: function onChange() {
          _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            selectedDate: _this2.value
          }));
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }
      })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.movieContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }
      }, __jsx(_components_MovieGallery__WEBPACK_IMPORTED_MODULE_14__["default"], {
        movieArray: this.state.movieArray,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Index.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_9__["withStyles"])(styles)(Index));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9DaXJjdWxhclByb2dyZXNzL0NpcmN1bGFyUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ2lyY3VsYXJQcm9ncmVzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9EaWFsb2dBY3Rpb25zL0RpYWxvZ0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vRGlhbG9nQWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dEFkb3JubWVudC9JbnB1dEFkb3JubWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dEFkb3JubWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWIvVGFiLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RhYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJTY3JvbGxCdXR0b24vVGFiU2Nyb2xsQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RhYlNjcm9sbEJ1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJzL1Njcm9sbGJhclNpemUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGFicy9UYWJJbmRpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGFicy9UYWJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RhYnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vaW50ZXJuYWwvYW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9pbnRlcm5hbC9zdmctaWNvbnMvS2V5Ym9hcmRBcnJvd0xlZnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vaW50ZXJuYWwvc3ZnLWljb25zL0tleWJvYXJkQXJyb3dSaWdodC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9zY3JvbGxMZWZ0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL3Vuc3VwcG9ydGVkUHJvcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9DYWxlbmRhci0xMWFlNjFmNi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9DbG9jay00OGZkZTk3NS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9DbG9ja1ZpZXcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9lc20vRGF0ZVBpY2tlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9EYXRlVGltZVBpY2tlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9EYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9lc20vUGlja2VyLWNjZDliYTkwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL1RpbWVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9lc20vVGltZVBpY2tlclRvb2xiYXItODExMDBmYWIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9lc20vV3JhcHBlci0yNDE5NjZkNy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9tYWtlUGlja2VyV2l0aFN0YXRlLTVhNzljYjhhLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL3VzZVV0aWxzLWNmYjk2YWM5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmlmbS9kaXN0L3JpZm0uZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsImhlYWRDb250YWluZXIiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iLCJ0ZXh0RmllbGQiLCJ3aWR0aCIsIm1vdmllQ29udGFpbmVyIiwibWF4V2lkdGgiLCJJbmRleCIsIm1vdmllSW5wdXQiLCJtb3ZpZUFycmF5Iiwic2VsZWN0ZWREYXRlIiwiRGF0ZSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJzdGF0ZSIsImtleUNvZGUiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiU2VhcmNoIiwiY2xhc3NlcyIsInByb3BzIiwibWFpbkhlYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJrZXlQcmVzcyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBEO0FBQ2dDO0FBQzNEO0FBQ0k7QUFDWDtBQUM0QjtBQUNOO0FBQ0Q7QUFDN0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUFhO0FBQ25CO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDJEQUFhO0FBQzVCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDJEQUFhLENBQUMsZ0RBQUc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLDJEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSx1RkFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EO0FBQ3BDO0FBQ0s7QUFDeUY7QUFDL0Y7QUFDOEI7QUFDZ0I7QUFDdEI7QUFDSjtBQUNzQztBQUNzRTtBQUM1RztBQUNDO0FBQ0o7QUFDd0I7QUFDVTtBQUM1QjtBQUNDO0FBQ0k7QUFDNUI7QUFDcUI7QUFDZTtBQUNDO0FBQ0E7QUFDSDtBQUNjO0FBQ1g7QUFDTjtBQUNIO0FBQ1Y7QUFDWTtBQUNIO0FBQ0E7QUFDUDtBQUNDO0FBQ2M7QUFDcUI7QUFDN0I7QUFDd0I7QUFDakM7QUFDRDtBQUNDO0FBQ0M7QUFDNEM7O0FBRTdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsMEVBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBCO0FBQzFCOzs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0U7QUFD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LGNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLGlFQUFEO0FBQWMsa0JBQVUsRUFBRSxLQUFLWSxLQUFMLENBQVdSLFVBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQTlCSixDQURKO0FBb0NIOzs7O0VBekVldUIsK0M7O0FBNEVwQnpCLEtBQUssQ0FBQzBCLFNBQU4sR0FBa0I7QUFDZE4sU0FBTyxFQUFFTyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURaLENBQWxCO0FBSWVDLHFJQUFVLENBQUN2QyxNQUFELENBQVYsQ0FBbUJTLEtBQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODA3OWM3MTBmZDkwM2VjZDlmMGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IGNoYWluUHJvcFR5cGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xudmFyIFNJWkUgPSA0NDtcblxuZnVuY3Rpb24gZ2V0UmVsYXRpdmVWYWx1ZSh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIChNYXRoLm1pbihNYXRoLm1heChtaW4sIHZhbHVlKSwgbWF4KSAtIG1pbikgLyAobWF4IC0gbWluKTtcbn1cblxuZnVuY3Rpb24gZWFzZU91dCh0KSB7XG4gIHQgPSBnZXRSZWxhdGl2ZVZhbHVlKHQsIDAsIDEpOyAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9ncmUvMTY1MDI5NFxuXG4gIHQgPSAodCAtPSAxKSAqIHQgKiB0ICsgMTtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGVhc2VJbih0KSB7XG4gIHJldHVybiB0ICogdDtcbn1cblxuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJzdGF0aWNcImAuICovXG4gICAgc3RhdGljOiB7XG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJpbmRldGVybWluYXRlXCJgLiAqL1xuICAgIGluZGV0ZXJtaW5hdGU6IHtcbiAgICAgIGFuaW1hdGlvbjogJyRjaXJjdWxhci1yb3RhdGUgMS40cyBsaW5lYXIgaW5maW5pdGUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwicHJpbWFyeVwiYC4gKi9cbiAgICBjb2xvclByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBzdmdgIGVsZW1lbnQuICovXG4gICAgc3ZnOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snIC8vIEtlZXBzIHRoZSBwcm9ncmVzcyBjZW50ZXJlZFxuXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgY2lyY2xlYCBzdmcgcGF0aC4gKi9cbiAgICBjaXJjbGU6IHtcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicgLy8gVXNlIGJ1dHQgdG8gZm9sbG93IHRoZSBzcGVjaWZpY2F0aW9uLCBieSBjaGFuY2UsIGl0J3MgYWxyZWFkeSB0aGUgZGVmYXVsdCBDU1MgdmFsdWUuXG4gICAgICAvLyBzdHJva2VMaW5lY2FwOiAnYnV0dCcsXG5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBjaXJjbGVgIHN2ZyBwYXRoIGlmIGB2YXJpYW50PVwic3RhdGljXCJgLiAqL1xuICAgIGNpcmNsZVN0YXRpYzoge1xuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdzdHJva2UtZGFzaG9mZnNldCcpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgY2lyY2xlYCBzdmcgcGF0aCBpZiBgdmFyaWFudD1cImluZGV0ZXJtaW5hdGVcImAuICovXG4gICAgY2lyY2xlSW5kZXRlcm1pbmF0ZToge1xuICAgICAgYW5pbWF0aW9uOiAnJGNpcmN1bGFyLWRhc2ggMS40cyBlYXNlLWluLW91dCBpbmZpbml0ZScsXG4gICAgICAvLyBTb21lIGRlZmF1bHQgdmFsdWUgdGhhdCBsb29rcyBmaW5lIHdhaXRpbmcgZm9yIHRoZSBhbmltYXRpb24gdG8ga2lja3MgaW4uXG4gICAgICBzdHJva2VEYXNoYXJyYXk6ICc4MHB4LCAyMDBweCcsXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiAnMHB4JyAvLyBBZGQgdGhlIHVuaXQgdG8gZml4IGEgRWRnZSAxNiBhbmQgYmVsb3cgYnVnLlxuXG4gICAgfSxcbiAgICAnQGtleWZyYW1lcyBjaXJjdWxhci1yb3RhdGUnOiB7XG4gICAgICAnMCUnOiB7XG4gICAgICAgIC8vIEZpeCBJRSAxMSB3b2JibHlcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJSdcbiAgICAgIH0sXG4gICAgICAnMTAwJSc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDM2MGRlZyknXG4gICAgICB9XG4gICAgfSxcbiAgICAnQGtleWZyYW1lcyBjaXJjdWxhci1kYXNoJzoge1xuICAgICAgJzAlJzoge1xuICAgICAgICBzdHJva2VEYXNoYXJyYXk6ICcxcHgsIDIwMHB4JyxcbiAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogJzBweCdcbiAgICAgIH0sXG4gICAgICAnNTAlJzoge1xuICAgICAgICBzdHJva2VEYXNoYXJyYXk6ICcxMDBweCwgMjAwcHgnLFxuICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiAnLTE1cHgnXG4gICAgICB9LFxuICAgICAgJzEwMCUnOiB7XG4gICAgICAgIHN0cm9rZURhc2hhcnJheTogJzEwMHB4LCAyMDBweCcsXG4gICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6ICctMTI1cHgnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgY2lyY2xlYCBzdmcgcGF0aCBpZiBgZGlzYWJsZVNocmluaz17dHJ1ZX1gLiAqL1xuICAgIGNpcmNsZURpc2FibGVTaHJpbms6IHtcbiAgICAgIGFuaW1hdGlvbjogJ25vbmUnXG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogIyMgQVJJQVxuICpcbiAqIElmIHRoZSBwcm9ncmVzcyBiYXIgaXMgZGVzY3JpYmluZyB0aGUgbG9hZGluZyBwcm9ncmVzcyBvZiBhIHBhcnRpY3VsYXIgcmVnaW9uIG9mIGEgcGFnZSxcbiAqIHlvdSBzaG91bGQgdXNlIGBhcmlhLWRlc2NyaWJlZGJ5YCB0byBwb2ludCB0byB0aGUgcHJvZ3Jlc3MgYmFyLCBhbmQgc2V0IHRoZSBgYXJpYS1idXN5YFxuICogYXR0cmlidXRlIHRvIGB0cnVlYCBvbiB0aGF0IHJlZ2lvbiB1bnRpbCBpdCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAqL1xuXG52YXIgQ2lyY3VsYXJQcm9ncmVzcyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIENpcmN1bGFyUHJvZ3Jlc3MocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbG9yID0gX3Byb3BzJGNvbG9yID09PSB2b2lkIDAgPyAncHJpbWFyeScgOiBfcHJvcHMkY29sb3IsXG4gICAgICBfcHJvcHMkZGlzYWJsZVNocmluayA9IHByb3BzLmRpc2FibGVTaHJpbmssXG4gICAgICBkaXNhYmxlU2hyaW5rID0gX3Byb3BzJGRpc2FibGVTaHJpbmsgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVTaHJpbmssXG4gICAgICBfcHJvcHMkc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBzaXplID0gX3Byb3BzJHNpemUgPT09IHZvaWQgMCA/IDQwIDogX3Byb3BzJHNpemUsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgX3Byb3BzJHRoaWNrbmVzcyA9IHByb3BzLnRoaWNrbmVzcyxcbiAgICAgIHRoaWNrbmVzcyA9IF9wcm9wcyR0aGlja25lc3MgPT09IHZvaWQgMCA/IDMuNiA6IF9wcm9wcyR0aGlja25lc3MsXG4gICAgICBfcHJvcHMkdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIHZhbHVlID0gX3Byb3BzJHZhbHVlID09PSB2b2lkIDAgPyAwIDogX3Byb3BzJHZhbHVlLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnaW5kZXRlcm1pbmF0ZScgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlU2hyaW5rXCIsIFwic2l6ZVwiLCBcInN0eWxlXCIsIFwidGhpY2tuZXNzXCIsIFwidmFsdWVcIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgY2lyY2xlU3R5bGUgPSB7fTtcbiAgdmFyIHJvb3RTdHlsZSA9IHt9O1xuICB2YXIgcm9vdFByb3BzID0ge307XG5cbiAgaWYgKHZhcmlhbnQgPT09ICdkZXRlcm1pbmF0ZScgfHwgdmFyaWFudCA9PT0gJ3N0YXRpYycpIHtcbiAgICB2YXIgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogKChTSVpFIC0gdGhpY2tuZXNzKSAvIDIpO1xuICAgIGNpcmNsZVN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGNpcmN1bWZlcmVuY2UudG9GaXhlZCgzKTtcbiAgICByb290UHJvcHNbJ2FyaWEtdmFsdWVub3cnXSA9IE1hdGgucm91bmQodmFsdWUpO1xuXG4gICAgaWYgKHZhcmlhbnQgPT09ICdzdGF0aWMnKSB7XG4gICAgICBjaXJjbGVTdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gXCJcIi5jb25jYXQoKCgxMDAgLSB2YWx1ZSkgLyAxMDAgKiBjaXJjdW1mZXJlbmNlKS50b0ZpeGVkKDMpLCBcInB4XCIpO1xuICAgICAgcm9vdFN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLTkwZGVnKSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNpcmNsZVN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBcIlwiLmNvbmNhdCgoZWFzZUluKCgxMDAgLSB2YWx1ZSkgLyAxMDApICogY2lyY3VtZmVyZW5jZSkudG9GaXhlZCgzKSwgXCJweFwiKTtcbiAgICAgIHJvb3RTdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZShcIi5jb25jYXQoKGVhc2VPdXQodmFsdWUgLyA3MCkgKiAyNzApLnRvRml4ZWQoMyksIFwiZGVnKVwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgY29sb3IgIT09ICdpbmhlcml0JyAmJiBjbGFzc2VzW1wiY29sb3JcIi5jb25jYXQoY2FwaXRhbGl6ZShjb2xvcikpXSwge1xuICAgICAgJ2luZGV0ZXJtaW5hdGUnOiBjbGFzc2VzLmluZGV0ZXJtaW5hdGUsXG4gICAgICAnc3RhdGljJzogY2xhc3Nlcy5zdGF0aWNcbiAgICB9W3ZhcmlhbnRdKSxcbiAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgd2lkdGg6IHNpemUsXG4gICAgICBoZWlnaHQ6IHNpemVcbiAgICB9LCByb290U3R5bGUsIHN0eWxlKSxcbiAgICByZWY6IHJlZixcbiAgICByb2xlOiBcInByb2dyZXNzYmFyXCJcbiAgfSwgcm9vdFByb3BzLCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuc3ZnLFxuICAgIHZpZXdCb3g6IFwiXCIuY29uY2F0KFNJWkUgLyAyLCBcIiBcIikuY29uY2F0KFNJWkUgLyAyLCBcIiBcIikuY29uY2F0KFNJWkUsIFwiIFwiKS5jb25jYXQoU0laRSlcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmNpcmNsZSwgZGlzYWJsZVNocmluayAmJiBjbGFzc2VzLmNpcmNsZURpc2FibGVTaHJpbmssIHtcbiAgICAgICdpbmRldGVybWluYXRlJzogY2xhc3Nlcy5jaXJjbGVJbmRldGVybWluYXRlLFxuICAgICAgJ3N0YXRpYyc6IGNsYXNzZXMuY2lyY2xlU3RhdGljXG4gICAgfVt2YXJpYW50XSksXG4gICAgc3R5bGU6IGNpcmNsZVN0eWxlLFxuICAgIGN4OiBTSVpFLFxuICAgIGN5OiBTSVpFLFxuICAgIHI6IChTSVpFIC0gdGhpY2tuZXNzKSAvIDIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlV2lkdGg6IHRoaWNrbmVzc1xuICB9KSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBDaXJjdWxhclByb2dyZXNzLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnaW5oZXJpdCcsICdwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgc2hyaW5rIGFuaW1hdGlvbiBpcyBkaXNhYmxlZC5cbiAgICogVGhpcyBvbmx5IHdvcmtzIGlmIHZhcmlhbnQgaXMgYGluZGV0ZXJtaW5hdGVgLlxuICAgKi9cbiAgZGlzYWJsZVNocmluazogY2hhaW5Qcm9wVHlwZXMoUHJvcFR5cGVzLmJvb2wsIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmIChwcm9wcy5kaXNhYmxlU2hyaW5rICYmIHByb3BzLnZhcmlhbnQgJiYgcHJvcHMudmFyaWFudCAhPT0gJ2luZGV0ZXJtaW5hdGUnKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdNYXRlcmlhbC1VSTogWW91IGhhdmUgcHJvdmlkZWQgdGhlIGBkaXNhYmxlU2hyaW5rYCBwcm9wICcgKyAnd2l0aCBhIHZhcmlhbnQgb3RoZXIgdGhhbiBgaW5kZXRlcm1pbmF0ZWAuIFRoaXMgd2lsbCBoYXZlIG5vIGVmZmVjdC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSksXG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBjaXJjbGUuXG4gICAqIElmIHVzaW5nIGEgbnVtYmVyLCB0aGUgcGl4ZWwgdW5pdCBpcyBhc3N1bWVkLlxuICAgKiBJZiB1c2luZyBhIHN0cmluZywgeW91IG5lZWQgdG8gcHJvdmlkZSB0aGUgQ1NTIHVuaXQsIGUuZyAnM3JlbScuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgdGhpY2tuZXNzIG9mIHRoZSBjaXJjbGUuXG4gICAqL1xuICB0aGlja25lc3M6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgcHJvZ3Jlc3MgaW5kaWNhdG9yIGZvciB0aGUgZGV0ZXJtaW5hdGUgYW5kIHN0YXRpYyB2YXJpYW50cy5cbiAgICogVmFsdWUgYmV0d2VlbiAwIGFuZCAxMDAuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKiBVc2UgaW5kZXRlcm1pbmF0ZSB3aGVuIHRoZXJlIGlzIG5vIHByb2dyZXNzIHZhbHVlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZGV0ZXJtaW5hdGUnLCAnaW5kZXRlcm1pbmF0ZScsICdzdGF0aWMnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpQ2lyY3VsYXJQcm9ncmVzcycsXG4gIGZsaXA6IGZhbHNlXG59KShDaXJjdWxhclByb2dyZXNzKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DaXJjdWxhclByb2dyZXNzJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiA4LFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgIGZsZXg6ICcwIDAgYXV0bydcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlU3BhY2luZz17ZmFsc2V9YC4gKi9cbiAgc3BhY2luZzoge1xuICAgICcmID4gOm5vdCg6Zmlyc3QtY2hpbGQpJzoge1xuICAgICAgbWFyZ2luTGVmdDogOFxuICAgIH1cbiAgfVxufTtcbnZhciBEaWFsb2dBY3Rpb25zID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRGlhbG9nQWN0aW9ucyhwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkZGlzYWJsZVNwYWNpbmcgPSBwcm9wcy5kaXNhYmxlU3BhY2luZyxcbiAgICAgIGRpc2FibGVTcGFjaW5nID0gX3Byb3BzJGRpc2FibGVTcGFjaW5nID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlU3BhY2luZyxcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImRpc2FibGVTcGFjaW5nXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsICFkaXNhYmxlU3BhY2luZyAmJiBjbGFzc2VzLnNwYWNpbmcpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IERpYWxvZ0FjdGlvbnMucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGFjdGlvbnMgZG8gbm90IGhhdmUgYWRkaXRpb25hbCBtYXJnaW4uXG4gICAqL1xuICBkaXNhYmxlU3BhY2luZzogUHJvcFR5cGVzLmJvb2xcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpRGlhbG9nQWN0aW9ucydcbn0pKERpYWxvZ0FjdGlvbnMpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0RpYWxvZ0FjdGlvbnMnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL1R5cG9ncmFwaHknO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IEZvcm1Db250cm9sQ29udGV4dCwgeyB1c2VGb3JtQ29udHJvbCB9IGZyb20gJy4uL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sQ29udGV4dCc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBoZWlnaHQ6ICcwLjAxZW0nLFxuICAgIC8vIEZpeCBJRSAxMSBmbGV4Ym94IGFsaWdubWVudC4gVG8gcmVtb3ZlIGF0IHNvbWUgcG9pbnQuXG4gICAgbWF4SGVpZ2h0OiAnMmVtJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJmaWxsZWRcImAuICovXG4gIGZpbGxlZDoge1xuICAgICcmJHBvc2l0aW9uU3RhcnQ6bm90KCRoaWRkZW5MYWJlbCknOiB7XG4gICAgICBtYXJnaW5Ub3A6IDE2XG4gICAgfVxuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHBvc2l0aW9uPVwic3RhcnRcImAuICovXG4gIHBvc2l0aW9uU3RhcnQ6IHtcbiAgICBtYXJnaW5SaWdodDogOFxuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHBvc2l0aW9uPVwiZW5kXCJgLiAqL1xuICBwb3NpdGlvbkVuZDoge1xuICAgIG1hcmdpbkxlZnQ6IDhcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlUG9pbnRlckV2ZW50cz10cnVlYC4gKi9cbiAgZGlzYWJsZVBvaW50ZXJFdmVudHM6IHtcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCBpZiB0aGUgYWRvcm5tZW50IGlzIHVzZWQgaW5zaWRlIDxGb3JtQ29udHJvbCBoaWRkZW5MYWJlbCAvPi4gKi9cbiAgaGlkZGVuTGFiZWw6IHt9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIGlmIHRoZSBhZG9ybm1lbnQgaXMgdXNlZCBpbnNpZGUgPEZvcm1Db250cm9sIG1hcmdpbj1cImRlbnNlXCIgLz4uICovXG4gIG1hcmdpbkRlbnNlOiB7fVxufTtcbnZhciBJbnB1dEFkb3JubWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIElucHV0QWRvcm5tZW50KHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnZGl2JyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkZGlzYWJsZVBvaW50ZXIgPSBwcm9wcy5kaXNhYmxlUG9pbnRlckV2ZW50cyxcbiAgICAgIGRpc2FibGVQb2ludGVyRXZlbnRzID0gX3Byb3BzJGRpc2FibGVQb2ludGVyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlUG9pbnRlcixcbiAgICAgIF9wcm9wcyRkaXNhYmxlVHlwb2dyYSA9IHByb3BzLmRpc2FibGVUeXBvZ3JhcGh5LFxuICAgICAgZGlzYWJsZVR5cG9ncmFwaHkgPSBfcHJvcHMkZGlzYWJsZVR5cG9ncmEgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVUeXBvZ3JhLFxuICAgICAgcG9zaXRpb24gPSBwcm9wcy5wb3NpdGlvbixcbiAgICAgIHZhcmlhbnRQcm9wID0gcHJvcHMudmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb21wb25lbnRcIiwgXCJkaXNhYmxlUG9pbnRlckV2ZW50c1wiLCBcImRpc2FibGVUeXBvZ3JhcGh5XCIsIFwicG9zaXRpb25cIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgbXVpRm9ybUNvbnRyb2wgPSB1c2VGb3JtQ29udHJvbCgpIHx8IHt9O1xuICB2YXIgdmFyaWFudCA9IHZhcmlhbnRQcm9wO1xuXG4gIGlmICh2YXJpYW50UHJvcCAmJiBtdWlGb3JtQ29udHJvbC52YXJpYW50KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh2YXJpYW50UHJvcCA9PT0gbXVpRm9ybUNvbnRyb2wudmFyaWFudCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogVGhlIGBJbnB1dEFkb3JubWVudGAgdmFyaWFudCBpbmZlcnMgdGhlIHZhcmlhbnQgcHJvcCAnICsgJ3lvdSBkbyBub3QgaGF2ZSB0byBwcm92aWRlIG9uZS4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobXVpRm9ybUNvbnRyb2wgJiYgIXZhcmlhbnQpIHtcbiAgICB2YXJpYW50ID0gbXVpRm9ybUNvbnRyb2wudmFyaWFudDtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogbnVsbFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIGRpc2FibGVQb2ludGVyRXZlbnRzICYmIGNsYXNzZXMuZGlzYWJsZVBvaW50ZXJFdmVudHMsIG11aUZvcm1Db250cm9sLmhpZGRlbkxhYmVsICYmIGNsYXNzZXMuaGlkZGVuTGFiZWwsIHZhcmlhbnQgPT09ICdmaWxsZWQnICYmIGNsYXNzZXMuZmlsbGVkLCB7XG4gICAgICAnc3RhcnQnOiBjbGFzc2VzLnBvc2l0aW9uU3RhcnQsXG4gICAgICAnZW5kJzogY2xhc3Nlcy5wb3NpdGlvbkVuZFxuICAgIH1bcG9zaXRpb25dLCBtdWlGb3JtQ29udHJvbC5tYXJnaW4gPT09ICdkZW5zZScgJiYgY2xhc3Nlcy5tYXJnaW5EZW5zZSksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnICYmICFkaXNhYmxlVHlwb2dyYXBoeSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHtcbiAgICBjb2xvcjogXCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgfSwgY2hpbGRyZW4pIDogY2hpbGRyZW4pKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gSW5wdXRBZG9ybm1lbnQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudCwgbm9ybWFsbHkgYW4gYEljb25CdXR0b25gIG9yIHN0cmluZy5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogRGlzYWJsZSBwb2ludGVyIGV2ZW50cyBvbiB0aGUgcm9vdC5cbiAgICogVGhpcyBhbGxvd3MgZm9yIHRoZSBjb250ZW50IG9mIHRoZSBhZG9ybm1lbnQgdG8gZm9jdXMgdGhlIGlucHV0IG9uIGNsaWNrLlxuICAgKi9cbiAgZGlzYWJsZVBvaW50ZXJFdmVudHM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBjaGlsZHJlbiBpcyBhIHN0cmluZyB0aGVuIGRpc2FibGUgd3JhcHBpbmcgaW4gYSBUeXBvZ3JhcGh5IGNvbXBvbmVudC5cbiAgICovXG4gIGRpc2FibGVUeXBvZ3JhcGh5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgbXVpRm9ybUNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiB0aGlzIGFkb3JubWVudCBzaG91bGQgYXBwZWFyIHJlbGF0aXZlIHRvIHRoZSBgSW5wdXRgLlxuICAgKi9cbiAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbJ3N0YXJ0JywgJ2VuZCddKSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKiBOb3RlOiBJZiB5b3UgYXJlIHVzaW5nIHRoZSBgVGV4dEZpZWxkYCBjb21wb25lbnQgb3IgdGhlIGBGb3JtQ29udHJvbGAgY29tcG9uZW50XG4gICAqIHlvdSBkbyBub3QgaGF2ZSB0byBzZXQgdGhpcyBtYW51YWxseS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3N0YW5kYXJkJywgJ291dGxpbmVkJywgJ2ZpbGxlZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlJbnB1dEFkb3JubWVudCdcbn0pKElucHV0QWRvcm5tZW50KTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9JbnB1dEFkb3JubWVudCc7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJy4uL0J1dHRvbkJhc2UnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5pbXBvcnQgdW5zdXBwb3J0ZWRQcm9wIGZyb20gJy4uL3V0aWxzL3Vuc3VwcG9ydGVkUHJvcCc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICB2YXIgX2V4dGVuZHMyO1xuXG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiBfZXh0ZW5kcyh7fSwgdGhlbWUudHlwb2dyYXBoeS5idXR0b24sIChfZXh0ZW5kczIgPSB7XG4gICAgICBtYXhXaWR0aDogMjY0LFxuICAgICAgbWluV2lkdGg6IDcyLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1pbkhlaWdodDogNDgsXG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgcGFkZGluZzogJzZweCAxMnB4J1xuICAgIH0sIF9kZWZpbmVQcm9wZXJ0eShfZXh0ZW5kczIsIHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpLCB7XG4gICAgICBwYWRkaW5nOiAnNnB4IDI0cHgnXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfZXh0ZW5kczIsIFwib3ZlcmZsb3dcIiwgJ2hpZGRlbicpLCBfZGVmaW5lUHJvcGVydHkoX2V4dGVuZHMyLCBcIndoaXRlU3BhY2VcIiwgJ25vcm1hbCcpLCBfZGVmaW5lUHJvcGVydHkoX2V4dGVuZHMyLCBcInRleHRBbGlnblwiLCAnY2VudGVyJyksIF9kZWZpbmVQcm9wZXJ0eShfZXh0ZW5kczIsIHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpLCB7XG4gICAgICBtaW5XaWR0aDogMTYwXG4gICAgfSksIF9leHRlbmRzMikpLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBib3RoIGBpY29uYCBhbmQgYGxhYmVsYCBhcmUgcHJvdmlkZWQuICovXG4gICAgbGFiZWxJY29uOiB7XG4gICAgICBtaW5IZWlnaHQ6IDcyLFxuICAgICAgcGFkZGluZ1RvcDogOSxcbiAgICAgICcmICR3cmFwcGVyID4gKjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiA2XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIHBhcmVudCBbYFRhYnNgXSgvYXBpL3RhYnMvKSBoYXMgYHRleHRDb2xvcj1cImluaGVyaXRcImAuICovXG4gICAgdGV4dENvbG9ySW5oZXJpdDoge1xuICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgIG9wYWNpdHk6IDAuNyxcbiAgICAgICcmJHNlbGVjdGVkJzoge1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIG9wYWNpdHk6IDAuNVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBwYXJlbnQgW2BUYWJzYF0oL2FwaS90YWJzLykgaGFzIGB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJgLiAqL1xuICAgIHRleHRDb2xvclByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgJyYkc2VsZWN0ZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LmRpc2FibGVkXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIHBhcmVudCBbYFRhYnNgXSgvYXBpL3RhYnMvKSBoYXMgYHRleHRDb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICB0ZXh0Q29sb3JTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgJyYkc2VsZWN0ZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuZGlzYWJsZWRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc2VsZWN0ZWQ9e3RydWV9YCAoY29udHJvbGxlZCBieSB0aGUgVGFicyBjb21wb25lbnQpLiAqL1xuICAgIHNlbGVjdGVkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAgKGNvbnRyb2xsZWQgYnkgdGhlIFRhYnMgY29tcG9uZW50KS4gKi9cbiAgICBkaXNhYmxlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmdWxsV2lkdGg9e3RydWV9YCAoY29udHJvbGxlZCBieSB0aGUgVGFicyBjb21wb25lbnQpLiAqL1xuICAgIGZ1bGxXaWR0aDoge1xuICAgICAgZmxleFNocmluazogMSxcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgZmxleEJhc2lzOiAwLFxuICAgICAgbWF4V2lkdGg6ICdub25lJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB3cmFwcGVkPXt0cnVlfWAuICovXG4gICAgd3JhcHBlZDoge1xuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMiksXG4gICAgICBsaW5lSGVpZ2h0OiAxLjVcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpY29uYCBhbmQgYGxhYmVsYCdzIHdyYXBwZXIgZWxlbWVudC4gKi9cbiAgICB3cmFwcGVyOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbiAgICB9XG4gIH07XG59O1xudmFyIFRhYiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRhYihwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWQgPSBfcHJvcHMkZGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkLFxuICAgICAgX3Byb3BzJGRpc2FibGVGb2N1c1JpID0gcHJvcHMuZGlzYWJsZUZvY3VzUmlwcGxlLFxuICAgICAgZGlzYWJsZUZvY3VzUmlwcGxlID0gX3Byb3BzJGRpc2FibGVGb2N1c1JpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlRm9jdXNSaSxcbiAgICAgIGZ1bGxXaWR0aCA9IHByb3BzLmZ1bGxXaWR0aCxcbiAgICAgIGljb24gPSBwcm9wcy5pY29uLFxuICAgICAgaW5kaWNhdG9yID0gcHJvcHMuaW5kaWNhdG9yLFxuICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICBvbkNsaWNrID0gcHJvcHMub25DbGljayxcbiAgICAgIG9uRm9jdXMgPSBwcm9wcy5vbkZvY3VzLFxuICAgICAgc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3RlZCxcbiAgICAgIHNlbGVjdGlvbkZvbGxvd3NGb2N1cyA9IHByb3BzLnNlbGVjdGlvbkZvbGxvd3NGb2N1cyxcbiAgICAgIF9wcm9wcyR0ZXh0Q29sb3IgPSBwcm9wcy50ZXh0Q29sb3IsXG4gICAgICB0ZXh0Q29sb3IgPSBfcHJvcHMkdGV4dENvbG9yID09PSB2b2lkIDAgPyAnaW5oZXJpdCcgOiBfcHJvcHMkdGV4dENvbG9yLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIF9wcm9wcyR3cmFwcGVkID0gcHJvcHMud3JhcHBlZCxcbiAgICAgIHdyYXBwZWQgPSBfcHJvcHMkd3JhcHBlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkd3JhcHBlZCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlRm9jdXNSaXBwbGVcIiwgXCJmdWxsV2lkdGhcIiwgXCJpY29uXCIsIFwiaW5kaWNhdG9yXCIsIFwibGFiZWxcIiwgXCJvbkNoYW5nZVwiLCBcIm9uQ2xpY2tcIiwgXCJvbkZvY3VzXCIsIFwic2VsZWN0ZWRcIiwgXCJzZWxlY3Rpb25Gb2xsb3dzRm9jdXNcIiwgXCJ0ZXh0Q29sb3JcIiwgXCJ2YWx1ZVwiLCBcIndyYXBwZWRcIl0pO1xuXG4gIHZhciBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShldmVudCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUZvY3VzID0gZnVuY3Rpb24gaGFuZGxlRm9jdXMoZXZlbnQpIHtcbiAgICBpZiAoc2VsZWN0aW9uRm9sbG93c0ZvY3VzICYmICFzZWxlY3RlZCAmJiBvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoZXZlbnQsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAob25Gb2N1cykge1xuICAgICAgb25Gb2N1cyhldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25CYXNlLCBfZXh0ZW5kcyh7XG4gICAgZm9jdXNSaXBwbGU6ICFkaXNhYmxlRm9jdXNSaXBwbGUsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3Nlc1tcInRleHRDb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKHRleHRDb2xvcikpXSwgY2xhc3NOYW1lLCBkaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkLCBzZWxlY3RlZCAmJiBjbGFzc2VzLnNlbGVjdGVkLCBsYWJlbCAmJiBpY29uICYmIGNsYXNzZXMubGFiZWxJY29uLCBmdWxsV2lkdGggJiYgY2xhc3Nlcy5mdWxsV2lkdGgsIHdyYXBwZWQgJiYgY2xhc3Nlcy53cmFwcGVkKSxcbiAgICByZWY6IHJlZixcbiAgICByb2xlOiBcInRhYlwiLFxuICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBzZWxlY3RlZCxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgb25Gb2N1czogaGFuZGxlRm9jdXMsXG4gICAgdGFiSW5kZXg6IHNlbGVjdGVkID8gMCA6IC0xXG4gIH0sIG90aGVyKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMud3JhcHBlclxuICB9LCBpY29uLCBsYWJlbCksIGluZGljYXRvcik7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRhYi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaXNuJ3Qgc3VwcG9ydGVkLlxuICAgKiBVc2UgdGhlIGBjb21wb25lbnRgIHByb3AgaWYgeW91IG5lZWQgdG8gY2hhbmdlIHRoZSBjaGlsZHJlbiBzdHJ1Y3R1cmUuXG4gICAqL1xuICBjaGlsZHJlbjogdW5zdXBwb3J0ZWRQcm9wLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0YWIgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgIGtleWJvYXJkIGZvY3VzIHJpcHBsZSB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZUZvY3VzUmlwcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgcmlwcGxlIGVmZmVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZVJpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIGVsZW1lbnQuXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBGb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nIGNvbnNpZGVyYXRpb24sIHdlIGxldCB0aGUgc2VsZWN0ZWQgdGFiXG4gICAqIHJlbmRlciB0aGUgaW5kaWNhdG9yLlxuICAgKi9cbiAgaW5kaWNhdG9yOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIGVsZW1lbnQuXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHNlbGVjdGlvbkZvbGxvd3NGb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHRleHRDb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnc2Vjb25kYXJ5JywgJ3ByaW1hcnknLCAnaW5oZXJpdCddKSxcblxuICAvKipcbiAgICogWW91IGNhbiBwcm92aWRlIHlvdXIgb3duIHZhbHVlLiBPdGhlcndpc2UsIHdlIGZhbGxiYWNrIHRvIHRoZSBjaGlsZCBwb3NpdGlvbiBpbmRleC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBUYWIgbGFiZWxzIGFwcGVhciBpbiBhIHNpbmdsZSByb3cuXG4gICAqIFRoZXkgY2FuIHVzZSBhIHNlY29uZCBsaW5lIGlmIG5lZWRlZC5cbiAgICovXG4gIHdyYXBwZWQ6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVRhYidcbn0pKFRhYik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGFiJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FyaWEtcm9sZSAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IEtleWJvYXJkQXJyb3dMZWZ0IGZyb20gJy4uL2ludGVybmFsL3N2Zy1pY29ucy9LZXlib2FyZEFycm93TGVmdCc7XG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1JpZ2h0IGZyb20gJy4uL2ludGVybmFsL3N2Zy1pY29ucy9LZXlib2FyZEFycm93UmlnaHQnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnLi4vQnV0dG9uQmFzZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIHdpZHRoOiA0MCxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG9wYWNpdHk6IDAuOCxcbiAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9XG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiYC4gKi9cbiAgdmVydGljYWw6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogNDAsXG4gICAgJyYgc3ZnJzoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDkwZGVnKSdcbiAgICB9XG4gIH0sXG5cbiAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZWQ9e3RydWV9YC4gKi9cbiAgZGlzYWJsZWQ6IHt9XG59O1xuXG52YXIgX3JlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEtleWJvYXJkQXJyb3dMZWZ0LCB7XG4gIGZvbnRTaXplOiBcInNtYWxsXCJcbn0pO1xuXG52YXIgX3JlZjIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChLZXlib2FyZEFycm93UmlnaHQsIHtcbiAgZm9udFNpemU6IFwic21hbGxcIlxufSk7XG5cbnZhciBUYWJTY3JvbGxCdXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUYWJTY3JvbGxCdXR0b24ocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWVQcm9wID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgb3JpZW50YXRpb24gPSBwcm9wcy5vcmllbnRhdGlvbixcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImRpcmVjdGlvblwiLCBcIm9yaWVudGF0aW9uXCIsIFwiZGlzYWJsZWRcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25CYXNlLCBfZXh0ZW5kcyh7XG4gICAgY29tcG9uZW50OiBcImRpdlwiLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZVByb3AsIGRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQsIG9yaWVudGF0aW9uID09PSAndmVydGljYWwnICYmIGNsYXNzZXMudmVydGljYWwpLFxuICAgIHJlZjogcmVmLFxuICAgIHJvbGU6IG51bGwsXG4gICAgdGFiSW5kZXg6IG51bGxcbiAgfSwgb3RoZXIpLCBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IF9yZWYgOiBfcmVmMik7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRhYlNjcm9sbEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogV2hpY2ggZGlyZWN0aW9uIHNob3VsZCB0aGUgYnV0dG9uIGluZGljYXRlP1xuICAgKi9cbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGVsZW1lbnQgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIHRhYnMgb3JpZW50YXRpb24gKGxheW91dCBmbG93IGRpcmVjdGlvbikuXG4gICAqL1xuICBvcmllbnRhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddKS5pc1JlcXVpcmVkXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVRhYlNjcm9sbEJ1dHRvbidcbn0pKFRhYlNjcm9sbEJ1dHRvbik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGFiU2Nyb2xsQnV0dG9uJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uL3V0aWxzL2RlYm91bmNlJztcbnZhciBzdHlsZXMgPSB7XG4gIHdpZHRoOiA5OSxcbiAgaGVpZ2h0OiA5OSxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHRvcDogLTk5OTksXG4gIG92ZXJmbG93OiAnc2Nyb2xsJ1xufTtcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqIFRoZSBjb21wb25lbnQgb3JpZ2luYXRlcyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9TVE9SSVMvcmVhY3Qtc2Nyb2xsYmFyLXNpemUuXG4gKiBJdCBoYXMgYmVlbiBtb3ZlZCBpbnRvIHRoZSBjb3JlIGluIG9yZGVyIHRvIG1pbmltaXplIHRoZSBidW5kbGUgc2l6ZS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxiYXJTaXplKHByb3BzKSB7XG4gIHZhciBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcIm9uQ2hhbmdlXCJdKTtcblxuICB2YXIgc2Nyb2xsYmFySGVpZ2h0ID0gUmVhY3QudXNlUmVmKCk7XG4gIHZhciBub2RlUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIHZhciBzZXRNZWFzdXJlbWVudHMgPSBmdW5jdGlvbiBzZXRNZWFzdXJlbWVudHMoKSB7XG4gICAgc2Nyb2xsYmFySGVpZ2h0LmN1cnJlbnQgPSBub2RlUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0IC0gbm9kZVJlZi5jdXJyZW50LmNsaWVudEhlaWdodDtcbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVSZXNpemUgPSBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcHJldkhlaWdodCA9IHNjcm9sbGJhckhlaWdodC5jdXJyZW50O1xuICAgICAgc2V0TWVhc3VyZW1lbnRzKCk7XG5cbiAgICAgIGlmIChwcmV2SGVpZ2h0ICE9PSBzY3JvbGxiYXJIZWlnaHQuY3VycmVudCkge1xuICAgICAgICBvbkNoYW5nZShzY3JvbGxiYXJIZWlnaHQuY3VycmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZVJlc2l6ZS5jbGVhcigpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW29uQ2hhbmdlXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2V0TWVhc3VyZW1lbnRzKCk7XG4gICAgb25DaGFuZ2Uoc2Nyb2xsYmFySGVpZ2h0LmN1cnJlbnQpO1xuICB9LCBbb25DaGFuZ2VdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBzdHlsZTogc3R5bGVzLFxuICAgIHJlZjogbm9kZVJlZlxuICB9LCBvdGhlcikpO1xufVxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU2Nyb2xsYmFyU2l6ZS5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59IDogdm9pZCAwOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGhlaWdodDogMixcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoKVxuICAgIH0sXG4gICAgY29sb3JQcmltYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgfSxcbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgfSxcbiAgICB2ZXJ0aWNhbDoge1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB3aWR0aDogMixcbiAgICAgIHJpZ2h0OiAwXG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG52YXIgVGFiSW5kaWNhdG9yID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGFiSW5kaWNhdG9yKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIG9yaWVudGF0aW9uID0gcHJvcHMub3JpZW50YXRpb24sXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwib3JpZW50YXRpb25cIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXNbXCJjb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGNvbG9yKSldLCBjbGFzc05hbWUsIG9yaWVudGF0aW9uID09PSAndmVydGljYWwnICYmIGNsYXNzZXMudmVydGljYWwpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRhYkluZGljYXRvci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgdGFiIGluZGljYXRvci5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgdGFicyBvcmllbnRhdGlvbiAobGF5b3V0IGZsb3cgZGlyZWN0aW9uKS5cbiAgICovXG4gIG9yaWVudGF0aW9uOiBQcm9wVHlwZXMub25lT2YoWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ10pLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnUHJpdmF0ZVRhYkluZGljYXRvcidcbn0pKFRhYkluZGljYXRvcik7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzRnJhZ21lbnQgfSBmcm9tICdyZWFjdC1pcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyByZWZUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgb3duZXJXaW5kb3cgZnJvbSAnLi4vdXRpbHMvb3duZXJXaW5kb3cnO1xuaW1wb3J0IHsgZ2V0Tm9ybWFsaXplZFNjcm9sbExlZnQsIGRldGVjdFNjcm9sbFR5cGUgfSBmcm9tICcuLi91dGlscy9zY3JvbGxMZWZ0JztcbmltcG9ydCBhbmltYXRlIGZyb20gJy4uL2ludGVybmFsL2FuaW1hdGUnO1xuaW1wb3J0IFNjcm9sbGJhclNpemUgZnJvbSAnLi9TY3JvbGxiYXJTaXplJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBUYWJJbmRpY2F0b3IgZnJvbSAnLi9UYWJJbmRpY2F0b3InO1xuaW1wb3J0IFRhYlNjcm9sbEJ1dHRvbiBmcm9tICcuLi9UYWJTY3JvbGxCdXR0b24nO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnLi4vdXRpbHMvdXNlRXZlbnRDYWxsYmFjayc7XG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3VzZVRoZW1lJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBtaW5IZWlnaHQ6IDQ4LFxuICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsXG4gICAgICAvLyBBZGQgaU9TIG1vbWVudHVtIHNjcm9sbGluZy5cbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJgLiAqL1xuICAgIHZlcnRpY2FsOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgZmxleCBjb250YWluZXIgZWxlbWVudC4gKi9cbiAgICBmbGV4Q29udGFpbmVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGZsZXggY29udGFpbmVyIGVsZW1lbnQgaWYgYG9yaWVudGF0aW9uPVwidmVydGljYWxcImAuICovXG4gICAgZmxleENvbnRhaW5lclZlcnRpY2FsOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgZmxleCBjb250YWluZXIgZWxlbWVudCBpZiBgY2VudGVyZWQ9e3RydWV9YCAmIGAhdmFyaWFudD1cInNjcm9sbGFibGVcImAuICovXG4gICAgY2VudGVyZWQ6IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgdGFibGlzdCBlbGVtZW50LiAqL1xuICAgIHNjcm9sbGVyOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSB0YWJsaXN0IGVsZW1lbnQgaWYgYCF2YXJpYW50PVwic2Nyb2xsYWJsZVwiYFxiXGJcYi4gKi9cbiAgICBmaXhlZDoge1xuICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHRhYmxpc3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInNjcm9sbGFibGVcImAuICovXG4gICAgc2Nyb2xsYWJsZToge1xuICAgICAgb3ZlcmZsb3dYOiAnc2Nyb2xsJyxcbiAgICAgIC8vIEhpZGUgZGltZW5zaW9ubGVzcyBzY3JvbGxiYXIgb24gTWFjT1NcbiAgICAgIHNjcm9sbGJhcldpZHRoOiAnbm9uZScsXG4gICAgICAvLyBGaXJlZm94XG4gICAgICAnJjo6LXdlYmtpdC1zY3JvbGxiYXInOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyAvLyBTYWZhcmkgKyBDaHJvbWVcblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFNjcm9sbEJ1dHRvbkNvbXBvbmVudGAgY29tcG9uZW50LiAqL1xuICAgIHNjcm9sbEJ1dHRvbnM6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBTY3JvbGxCdXR0b25Db21wb25lbnRgIGNvbXBvbmVudCBpZiBgc2Nyb2xsQnV0dG9ucz1cImF1dG9cImAgb3Igc2Nyb2xsQnV0dG9ucz1cImRlc2t0b3BcImAuICovXG4gICAgc2Nyb2xsQnV0dG9uc0Rlc2t0b3A6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKSwge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSksXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFRhYkluZGljYXRvcmAgY29tcG9uZW50LiAqL1xuICAgIGluZGljYXRvcjoge31cbiAgfTtcbn07XG52YXIgVGFicyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRhYnMocHJvcHMsIHJlZikge1xuICB2YXIgYXJpYUxhYmVsID0gcHJvcHNbJ2FyaWEtbGFiZWwnXSxcbiAgICAgIGFyaWFMYWJlbGxlZEJ5ID0gcHJvcHNbJ2FyaWEtbGFiZWxsZWRieSddLFxuICAgICAgYWN0aW9uID0gcHJvcHMuYWN0aW9uLFxuICAgICAgX3Byb3BzJGNlbnRlcmVkID0gcHJvcHMuY2VudGVyZWQsXG4gICAgICBjZW50ZXJlZCA9IF9wcm9wcyRjZW50ZXJlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkY2VudGVyZWQsXG4gICAgICBjaGlsZHJlblByb3AgPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdkaXYnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRpbmRpY2F0b3JDb2xvciA9IHByb3BzLmluZGljYXRvckNvbG9yLFxuICAgICAgaW5kaWNhdG9yQ29sb3IgPSBfcHJvcHMkaW5kaWNhdG9yQ29sb3IgPT09IHZvaWQgMCA/ICdzZWNvbmRhcnknIDogX3Byb3BzJGluZGljYXRvckNvbG9yLFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIF9wcm9wcyRvcmllbnRhdGlvbiA9IHByb3BzLm9yaWVudGF0aW9uLFxuICAgICAgb3JpZW50YXRpb24gPSBfcHJvcHMkb3JpZW50YXRpb24gPT09IHZvaWQgMCA/ICdob3Jpem9udGFsJyA6IF9wcm9wcyRvcmllbnRhdGlvbixcbiAgICAgIF9wcm9wcyRTY3JvbGxCdXR0b25DbyA9IHByb3BzLlNjcm9sbEJ1dHRvbkNvbXBvbmVudCxcbiAgICAgIFNjcm9sbEJ1dHRvbkNvbXBvbmVudCA9IF9wcm9wcyRTY3JvbGxCdXR0b25DbyA9PT0gdm9pZCAwID8gVGFiU2Nyb2xsQnV0dG9uIDogX3Byb3BzJFNjcm9sbEJ1dHRvbkNvLFxuICAgICAgX3Byb3BzJHNjcm9sbEJ1dHRvbnMgPSBwcm9wcy5zY3JvbGxCdXR0b25zLFxuICAgICAgc2Nyb2xsQnV0dG9ucyA9IF9wcm9wcyRzY3JvbGxCdXR0b25zID09PSB2b2lkIDAgPyAnYXV0bycgOiBfcHJvcHMkc2Nyb2xsQnV0dG9ucyxcbiAgICAgIHNlbGVjdGlvbkZvbGxvd3NGb2N1cyA9IHByb3BzLnNlbGVjdGlvbkZvbGxvd3NGb2N1cyxcbiAgICAgIF9wcm9wcyRUYWJJbmRpY2F0b3JQciA9IHByb3BzLlRhYkluZGljYXRvclByb3BzLFxuICAgICAgVGFiSW5kaWNhdG9yUHJvcHMgPSBfcHJvcHMkVGFiSW5kaWNhdG9yUHIgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJFRhYkluZGljYXRvclByLFxuICAgICAgVGFiU2Nyb2xsQnV0dG9uUHJvcHMgPSBwcm9wcy5UYWJTY3JvbGxCdXR0b25Qcm9wcyxcbiAgICAgIF9wcm9wcyR0ZXh0Q29sb3IgPSBwcm9wcy50ZXh0Q29sb3IsXG4gICAgICB0ZXh0Q29sb3IgPSBfcHJvcHMkdGV4dENvbG9yID09PSB2b2lkIDAgPyAnaW5oZXJpdCcgOiBfcHJvcHMkdGV4dENvbG9yLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3N0YW5kYXJkJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFyaWEtbGFiZWxcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIiwgXCJhY3Rpb25cIiwgXCJjZW50ZXJlZFwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcImluZGljYXRvckNvbG9yXCIsIFwib25DaGFuZ2VcIiwgXCJvcmllbnRhdGlvblwiLCBcIlNjcm9sbEJ1dHRvbkNvbXBvbmVudFwiLCBcInNjcm9sbEJ1dHRvbnNcIiwgXCJzZWxlY3Rpb25Gb2xsb3dzRm9jdXNcIiwgXCJUYWJJbmRpY2F0b3JQcm9wc1wiLCBcIlRhYlNjcm9sbEJ1dHRvblByb3BzXCIsIFwidGV4dENvbG9yXCIsIFwidmFsdWVcIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgc2Nyb2xsYWJsZSA9IHZhcmlhbnQgPT09ICdzY3JvbGxhYmxlJztcbiAgdmFyIGlzUnRsID0gdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJztcbiAgdmFyIHZlcnRpY2FsID0gb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCc7XG4gIHZhciBzY3JvbGxTdGFydCA9IHZlcnRpY2FsID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XG4gIHZhciBzdGFydCA9IHZlcnRpY2FsID8gJ3RvcCcgOiAnbGVmdCc7XG4gIHZhciBlbmQgPSB2ZXJ0aWNhbCA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgdmFyIGNsaWVudFNpemUgPSB2ZXJ0aWNhbCA/ICdjbGllbnRIZWlnaHQnIDogJ2NsaWVudFdpZHRoJztcbiAgdmFyIHNpemUgPSB2ZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChjZW50ZXJlZCAmJiBzY3JvbGxhYmxlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogWW91IGNhbiBub3QgdXNlIHRoZSBgY2VudGVyZWQ9e3RydWV9YCBhbmQgYHZhcmlhbnQ9XCJzY3JvbGxhYmxlXCJgIHByb3BlcnRpZXMgJyArICdhdCB0aGUgc2FtZSB0aW1lIG9uIGEgYFRhYnNgIGNvbXBvbmVudC4nKTtcbiAgICB9XG4gIH1cblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLFxuICAgICAgbW91bnRlZCA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldE1vdW50ZWQgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTIgPSBSZWFjdC51c2VTdGF0ZSh7fSksXG4gICAgICBpbmRpY2F0b3JTdHlsZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRJbmRpY2F0b3JTdHlsZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTMgPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgc3RhcnQ6IGZhbHNlLFxuICAgIGVuZDogZmFsc2VcbiAgfSksXG4gICAgICBkaXNwbGF5U2Nyb2xsID0gX1JlYWN0JHVzZVN0YXRlM1swXSxcbiAgICAgIHNldERpc3BsYXlTY3JvbGwgPSBfUmVhY3QkdXNlU3RhdGUzWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGU0ID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBtYXJnaW5Cb3R0b206IG51bGxcbiAgfSksXG4gICAgICBzY3JvbGxlclN0eWxlID0gX1JlYWN0JHVzZVN0YXRlNFswXSxcbiAgICAgIHNldFNjcm9sbGVyU3R5bGUgPSBfUmVhY3QkdXNlU3RhdGU0WzFdO1xuXG4gIHZhciB2YWx1ZVRvSW5kZXggPSBuZXcgTWFwKCk7XG4gIHZhciB0YWJzUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgdGFiTGlzdFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB2YXIgZ2V0VGFic01ldGEgPSBmdW5jdGlvbiBnZXRUYWJzTWV0YSgpIHtcbiAgICB2YXIgdGFic05vZGUgPSB0YWJzUmVmLmN1cnJlbnQ7XG4gICAgdmFyIHRhYnNNZXRhO1xuXG4gICAgaWYgKHRhYnNOb2RlKSB7XG4gICAgICB2YXIgcmVjdCA9IHRhYnNOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyAvLyBjcmVhdGUgYSBuZXcgb2JqZWN0IHdpdGggQ2xpZW50UmVjdCBjbGFzcyBwcm9wcyArIHNjcm9sbExlZnRcblxuICAgICAgdGFic01ldGEgPSB7XG4gICAgICAgIGNsaWVudFdpZHRoOiB0YWJzTm9kZS5jbGllbnRXaWR0aCxcbiAgICAgICAgc2Nyb2xsTGVmdDogdGFic05vZGUuc2Nyb2xsTGVmdCxcbiAgICAgICAgc2Nyb2xsVG9wOiB0YWJzTm9kZS5zY3JvbGxUb3AsXG4gICAgICAgIHNjcm9sbExlZnROb3JtYWxpemVkOiBnZXROb3JtYWxpemVkU2Nyb2xsTGVmdCh0YWJzTm9kZSwgdGhlbWUuZGlyZWN0aW9uKSxcbiAgICAgICAgc2Nyb2xsV2lkdGg6IHRhYnNOb2RlLnNjcm9sbFdpZHRoLFxuICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciB0YWJNZXRhO1xuXG4gICAgaWYgKHRhYnNOb2RlICYmIHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgdmFyIF9jaGlsZHJlbiA9IHRhYkxpc3RSZWYuY3VycmVudC5jaGlsZHJlbjtcblxuICAgICAgaWYgKF9jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciB0YWIgPSBfY2hpbGRyZW5bdmFsdWVUb0luZGV4LmdldCh2YWx1ZSldO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgaWYgKCF0YWIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoW1wiTWF0ZXJpYWwtVUk6IFRoZSB2YWx1ZSBwcm92aWRlZCB0byB0aGUgVGFicyBjb21wb25lbnQgaXMgaW52YWxpZC5cIiwgXCJOb25lIG9mIHRoZSBUYWJzJyBjaGlsZHJlbiBtYXRjaCB3aXRoIGBcIi5jb25jYXQodmFsdWUsIFwiYC5cIiksIHZhbHVlVG9JbmRleC5rZXlzID8gXCJZb3UgY2FuIHByb3ZpZGUgb25lIG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzOiBcIi5jb25jYXQoQXJyYXkuZnJvbSh2YWx1ZVRvSW5kZXgua2V5cygpKS5qb2luKCcsICcpLCBcIi5cIikgOiBudWxsXS5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFiTWV0YSA9IHRhYiA/IHRhYi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRhYnNNZXRhOiB0YWJzTWV0YSxcbiAgICAgIHRhYk1ldGE6IHRhYk1ldGFcbiAgICB9O1xuICB9O1xuXG4gIHZhciB1cGRhdGVJbmRpY2F0b3JTdGF0ZSA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBfbmV3SW5kaWNhdG9yU3R5bGU7XG5cbiAgICB2YXIgX2dldFRhYnNNZXRhID0gZ2V0VGFic01ldGEoKSxcbiAgICAgICAgdGFic01ldGEgPSBfZ2V0VGFic01ldGEudGFic01ldGEsXG4gICAgICAgIHRhYk1ldGEgPSBfZ2V0VGFic01ldGEudGFiTWV0YTtcblxuICAgIHZhciBzdGFydFZhbHVlID0gMDtcblxuICAgIGlmICh0YWJNZXRhICYmIHRhYnNNZXRhKSB7XG4gICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgc3RhcnRWYWx1ZSA9IHRhYk1ldGEudG9wIC0gdGFic01ldGEudG9wICsgdGFic01ldGEuc2Nyb2xsVG9wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNvcnJlY3Rpb24gPSBpc1J0bCA/IHRhYnNNZXRhLnNjcm9sbExlZnROb3JtYWxpemVkICsgdGFic01ldGEuY2xpZW50V2lkdGggLSB0YWJzTWV0YS5zY3JvbGxXaWR0aCA6IHRhYnNNZXRhLnNjcm9sbExlZnQ7XG4gICAgICAgIHN0YXJ0VmFsdWUgPSB0YWJNZXRhLmxlZnQgLSB0YWJzTWV0YS5sZWZ0ICsgY29ycmVjdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbmV3SW5kaWNhdG9yU3R5bGUgPSAoX25ld0luZGljYXRvclN0eWxlID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfbmV3SW5kaWNhdG9yU3R5bGUsIHN0YXJ0LCBzdGFydFZhbHVlKSwgX2RlZmluZVByb3BlcnR5KF9uZXdJbmRpY2F0b3JTdHlsZSwgc2l6ZSwgdGFiTWV0YSA/IHRhYk1ldGFbc2l6ZV0gOiAwKSwgX25ld0luZGljYXRvclN0eWxlKTtcblxuICAgIGlmIChpc05hTihpbmRpY2F0b3JTdHlsZVtzdGFydF0pIHx8IGlzTmFOKGluZGljYXRvclN0eWxlW3NpemVdKSkge1xuICAgICAgc2V0SW5kaWNhdG9yU3R5bGUobmV3SW5kaWNhdG9yU3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZFN0YXJ0ID0gTWF0aC5hYnMoaW5kaWNhdG9yU3R5bGVbc3RhcnRdIC0gbmV3SW5kaWNhdG9yU3R5bGVbc3RhcnRdKTtcbiAgICAgIHZhciBkU2l6ZSA9IE1hdGguYWJzKGluZGljYXRvclN0eWxlW3NpemVdIC0gbmV3SW5kaWNhdG9yU3R5bGVbc2l6ZV0pO1xuXG4gICAgICBpZiAoZFN0YXJ0ID49IDEgfHwgZFNpemUgPj0gMSkge1xuICAgICAgICBzZXRJbmRpY2F0b3JTdHlsZShuZXdJbmRpY2F0b3JTdHlsZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB2YXIgc2Nyb2xsID0gZnVuY3Rpb24gc2Nyb2xsKHNjcm9sbFZhbHVlKSB7XG4gICAgYW5pbWF0ZShzY3JvbGxTdGFydCwgdGFic1JlZi5jdXJyZW50LCBzY3JvbGxWYWx1ZSk7XG4gIH07XG5cbiAgdmFyIG1vdmVUYWJzU2Nyb2xsID0gZnVuY3Rpb24gbW92ZVRhYnNTY3JvbGwoZGVsdGEpIHtcbiAgICB2YXIgc2Nyb2xsVmFsdWUgPSB0YWJzUmVmLmN1cnJlbnRbc2Nyb2xsU3RhcnRdO1xuXG4gICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICBzY3JvbGxWYWx1ZSArPSBkZWx0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsVmFsdWUgKz0gZGVsdGEgKiAoaXNSdGwgPyAtMSA6IDEpOyAvLyBGaXggZm9yIEVkZ2VcblxuICAgICAgc2Nyb2xsVmFsdWUgKj0gaXNSdGwgJiYgZGV0ZWN0U2Nyb2xsVHlwZSgpID09PSAncmV2ZXJzZScgPyAtMSA6IDE7XG4gICAgfVxuXG4gICAgc2Nyb2xsKHNjcm9sbFZhbHVlKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlU3RhcnRTY3JvbGxDbGljayA9IGZ1bmN0aW9uIGhhbmRsZVN0YXJ0U2Nyb2xsQ2xpY2soKSB7XG4gICAgbW92ZVRhYnNTY3JvbGwoLXRhYnNSZWYuY3VycmVudFtjbGllbnRTaXplXSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUVuZFNjcm9sbENsaWNrID0gZnVuY3Rpb24gaGFuZGxlRW5kU2Nyb2xsQ2xpY2soKSB7XG4gICAgbW92ZVRhYnNTY3JvbGwodGFic1JlZi5jdXJyZW50W2NsaWVudFNpemVdKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlU2Nyb2xsYmFyU2l6ZUNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChzY3JvbGxiYXJIZWlnaHQpIHtcbiAgICBzZXRTY3JvbGxlclN0eWxlKHtcbiAgICAgIG92ZXJmbG93OiBudWxsLFxuICAgICAgbWFyZ2luQm90dG9tOiAtc2Nyb2xsYmFySGVpZ2h0XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICB2YXIgZ2V0Q29uZGl0aW9uYWxFbGVtZW50cyA9IGZ1bmN0aW9uIGdldENvbmRpdGlvbmFsRWxlbWVudHMoKSB7XG4gICAgdmFyIGNvbmRpdGlvbmFsRWxlbWVudHMgPSB7fTtcbiAgICBjb25kaXRpb25hbEVsZW1lbnRzLnNjcm9sbGJhclNpemVMaXN0ZW5lciA9IHNjcm9sbGFibGUgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTY3JvbGxiYXJTaXplLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMuc2Nyb2xsYWJsZSxcbiAgICAgIG9uQ2hhbmdlOiBoYW5kbGVTY3JvbGxiYXJTaXplQ2hhbmdlXG4gICAgfSkgOiBudWxsO1xuICAgIHZhciBzY3JvbGxCdXR0b25zQWN0aXZlID0gZGlzcGxheVNjcm9sbC5zdGFydCB8fCBkaXNwbGF5U2Nyb2xsLmVuZDtcbiAgICB2YXIgc2hvd1Njcm9sbEJ1dHRvbnMgPSBzY3JvbGxhYmxlICYmIChzY3JvbGxCdXR0b25zID09PSAnYXV0bycgJiYgc2Nyb2xsQnV0dG9uc0FjdGl2ZSB8fCBzY3JvbGxCdXR0b25zID09PSAnZGVza3RvcCcgfHwgc2Nyb2xsQnV0dG9ucyA9PT0gJ29uJyk7XG4gICAgY29uZGl0aW9uYWxFbGVtZW50cy5zY3JvbGxCdXR0b25TdGFydCA9IHNob3dTY3JvbGxCdXR0b25zID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsQnV0dG9uQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgICBvcmllbnRhdGlvbjogb3JpZW50YXRpb24sXG4gICAgICBkaXJlY3Rpb246IGlzUnRsID8gJ3JpZ2h0JyA6ICdsZWZ0JyxcbiAgICAgIG9uQ2xpY2s6IGhhbmRsZVN0YXJ0U2Nyb2xsQ2xpY2ssXG4gICAgICBkaXNhYmxlZDogIWRpc3BsYXlTY3JvbGwuc3RhcnQsXG4gICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5zY3JvbGxCdXR0b25zLCBzY3JvbGxCdXR0b25zICE9PSAnb24nICYmIGNsYXNzZXMuc2Nyb2xsQnV0dG9uc0Rlc2t0b3ApXG4gICAgfSwgVGFiU2Nyb2xsQnV0dG9uUHJvcHMpKSA6IG51bGw7XG4gICAgY29uZGl0aW9uYWxFbGVtZW50cy5zY3JvbGxCdXR0b25FbmQgPSBzaG93U2Nyb2xsQnV0dG9ucyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNjcm9sbEJ1dHRvbkNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgb3JpZW50YXRpb246IG9yaWVudGF0aW9uLFxuICAgICAgZGlyZWN0aW9uOiBpc1J0bCA/ICdsZWZ0JyA6ICdyaWdodCcsXG4gICAgICBvbkNsaWNrOiBoYW5kbGVFbmRTY3JvbGxDbGljayxcbiAgICAgIGRpc2FibGVkOiAhZGlzcGxheVNjcm9sbC5lbmQsXG4gICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5zY3JvbGxCdXR0b25zLCBzY3JvbGxCdXR0b25zICE9PSAnb24nICYmIGNsYXNzZXMuc2Nyb2xsQnV0dG9uc0Rlc2t0b3ApXG4gICAgfSwgVGFiU2Nyb2xsQnV0dG9uUHJvcHMpKSA6IG51bGw7XG4gICAgcmV0dXJuIGNvbmRpdGlvbmFsRWxlbWVudHM7XG4gIH07XG5cbiAgdmFyIHNjcm9sbFNlbGVjdGVkSW50b1ZpZXcgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2dldFRhYnNNZXRhMiA9IGdldFRhYnNNZXRhKCksXG4gICAgICAgIHRhYnNNZXRhID0gX2dldFRhYnNNZXRhMi50YWJzTWV0YSxcbiAgICAgICAgdGFiTWV0YSA9IF9nZXRUYWJzTWV0YTIudGFiTWV0YTtcblxuICAgIGlmICghdGFiTWV0YSB8fCAhdGFic01ldGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFiTWV0YVtzdGFydF0gPCB0YWJzTWV0YVtzdGFydF0pIHtcbiAgICAgIC8vIGxlZnQgc2lkZSBvZiBidXR0b24gaXMgb3V0IG9mIHZpZXdcbiAgICAgIHZhciBuZXh0U2Nyb2xsU3RhcnQgPSB0YWJzTWV0YVtzY3JvbGxTdGFydF0gKyAodGFiTWV0YVtzdGFydF0gLSB0YWJzTWV0YVtzdGFydF0pO1xuICAgICAgc2Nyb2xsKG5leHRTY3JvbGxTdGFydCk7XG4gICAgfSBlbHNlIGlmICh0YWJNZXRhW2VuZF0gPiB0YWJzTWV0YVtlbmRdKSB7XG4gICAgICAvLyByaWdodCBzaWRlIG9mIGJ1dHRvbiBpcyBvdXQgb2Ygdmlld1xuICAgICAgdmFyIF9uZXh0U2Nyb2xsU3RhcnQgPSB0YWJzTWV0YVtzY3JvbGxTdGFydF0gKyAodGFiTWV0YVtlbmRdIC0gdGFic01ldGFbZW5kXSk7XG5cbiAgICAgIHNjcm9sbChfbmV4dFNjcm9sbFN0YXJ0KTtcbiAgICB9XG4gIH0pO1xuICB2YXIgdXBkYXRlU2Nyb2xsQnV0dG9uU3RhdGUgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2Nyb2xsYWJsZSAmJiBzY3JvbGxCdXR0b25zICE9PSAnb2ZmJykge1xuICAgICAgdmFyIF90YWJzUmVmJGN1cnJlbnQgPSB0YWJzUmVmLmN1cnJlbnQsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gX3RhYnNSZWYkY3VycmVudC5zY3JvbGxUb3AsXG4gICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gX3RhYnNSZWYkY3VycmVudC5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gX3RhYnNSZWYkY3VycmVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgc2Nyb2xsV2lkdGggPSBfdGFic1JlZiRjdXJyZW50LnNjcm9sbFdpZHRoLFxuICAgICAgICAgIGNsaWVudFdpZHRoID0gX3RhYnNSZWYkY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICAgIHZhciBzaG93U3RhcnRTY3JvbGw7XG4gICAgICB2YXIgc2hvd0VuZFNjcm9sbDtcblxuICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgIHNob3dTdGFydFNjcm9sbCA9IHNjcm9sbFRvcCA+IDE7XG4gICAgICAgIHNob3dFbmRTY3JvbGwgPSBzY3JvbGxUb3AgPCBzY3JvbGxIZWlnaHQgLSBjbGllbnRIZWlnaHQgLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNjcm9sbExlZnQgPSBnZXROb3JtYWxpemVkU2Nyb2xsTGVmdCh0YWJzUmVmLmN1cnJlbnQsIHRoZW1lLmRpcmVjdGlvbik7IC8vIHVzZSAxIGZvciB0aGUgcG90ZW50aWFsIHJvdW5kaW5nIGVycm9yIHdpdGggYnJvd3NlciB6b29tcy5cblxuICAgICAgICBzaG93U3RhcnRTY3JvbGwgPSBpc1J0bCA/IHNjcm9sbExlZnQgPCBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIC0gMSA6IHNjcm9sbExlZnQgPiAxO1xuICAgICAgICBzaG93RW5kU2Nyb2xsID0gIWlzUnRsID8gc2Nyb2xsTGVmdCA8IHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGggLSAxIDogc2Nyb2xsTGVmdCA+IDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG93U3RhcnRTY3JvbGwgIT09IGRpc3BsYXlTY3JvbGwuc3RhcnQgfHwgc2hvd0VuZFNjcm9sbCAhPT0gZGlzcGxheVNjcm9sbC5lbmQpIHtcbiAgICAgICAgc2V0RGlzcGxheVNjcm9sbCh7XG4gICAgICAgICAgc3RhcnQ6IHNob3dTdGFydFNjcm9sbCxcbiAgICAgICAgICBlbmQ6IHNob3dFbmRTY3JvbGxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlUmVzaXplID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgdXBkYXRlSW5kaWNhdG9yU3RhdGUoKTtcbiAgICAgIHVwZGF0ZVNjcm9sbEJ1dHRvblN0YXRlKCk7XG4gICAgfSk7XG4gICAgdmFyIHdpbiA9IG93bmVyV2luZG93KHRhYnNSZWYuY3VycmVudCk7XG4gICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZVJlc2l6ZS5jbGVhcigpO1xuICAgICAgd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW3VwZGF0ZUluZGljYXRvclN0YXRlLCB1cGRhdGVTY3JvbGxCdXR0b25TdGF0ZV0pO1xuICB2YXIgaGFuZGxlVGFic1Njcm9sbCA9IFJlYWN0LnVzZUNhbGxiYWNrKGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICB1cGRhdGVTY3JvbGxCdXR0b25TdGF0ZSgpO1xuICB9KSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZVRhYnNTY3JvbGwuY2xlYXIoKTtcbiAgICB9O1xuICB9LCBbaGFuZGxlVGFic1Njcm9sbF0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB1cGRhdGVJbmRpY2F0b3JTdGF0ZSgpO1xuICAgIHVwZGF0ZVNjcm9sbEJ1dHRvblN0YXRlKCk7XG4gIH0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHNjcm9sbFNlbGVjdGVkSW50b1ZpZXcoKTtcbiAgfSwgW3Njcm9sbFNlbGVjdGVkSW50b1ZpZXcsIGluZGljYXRvclN0eWxlXSk7XG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUoYWN0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZUluZGljYXRvcjogdXBkYXRlSW5kaWNhdG9yU3RhdGUsXG4gICAgICB1cGRhdGVTY3JvbGxCdXR0b25zOiB1cGRhdGVTY3JvbGxCdXR0b25TdGF0ZVxuICAgIH07XG4gIH0sIFt1cGRhdGVJbmRpY2F0b3JTdGF0ZSwgdXBkYXRlU2Nyb2xsQnV0dG9uU3RhdGVdKTtcbiAgdmFyIGluZGljYXRvciA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRhYkluZGljYXRvciwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5pbmRpY2F0b3IsXG4gICAgb3JpZW50YXRpb246IG9yaWVudGF0aW9uLFxuICAgIGNvbG9yOiBpbmRpY2F0b3JDb2xvclxuICB9LCBUYWJJbmRpY2F0b3JQcm9wcywge1xuICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgaW5kaWNhdG9yU3R5bGUsIFRhYkluZGljYXRvclByb3BzLnN0eWxlKVxuICB9KSk7XG4gIHZhciBjaGlsZEluZGV4ID0gMDtcbiAgdmFyIGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuUHJvcCwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChpc0ZyYWdtZW50KGNoaWxkKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgVGFicyBjb21wb25lbnQgZG9lc24ndCBhY2NlcHQgYSBGcmFnbWVudCBhcyBhIGNoaWxkLlwiLCAnQ29uc2lkZXIgcHJvdmlkaW5nIGFuIGFycmF5IGluc3RlYWQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGlsZFZhbHVlID0gY2hpbGQucHJvcHMudmFsdWUgPT09IHVuZGVmaW5lZCA/IGNoaWxkSW5kZXggOiBjaGlsZC5wcm9wcy52YWx1ZTtcbiAgICB2YWx1ZVRvSW5kZXguc2V0KGNoaWxkVmFsdWUsIGNoaWxkSW5kZXgpO1xuICAgIHZhciBzZWxlY3RlZCA9IGNoaWxkVmFsdWUgPT09IHZhbHVlO1xuICAgIGNoaWxkSW5kZXggKz0gMTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgZnVsbFdpZHRoOiB2YXJpYW50ID09PSAnZnVsbFdpZHRoJyxcbiAgICAgIGluZGljYXRvcjogc2VsZWN0ZWQgJiYgIW1vdW50ZWQgJiYgaW5kaWNhdG9yLFxuICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkLFxuICAgICAgc2VsZWN0aW9uRm9sbG93c0ZvY3VzOiBzZWxlY3Rpb25Gb2xsb3dzRm9jdXMsXG4gICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICB0ZXh0Q29sb3I6IHRleHRDb2xvcixcbiAgICAgIHZhbHVlOiBjaGlsZFZhbHVlXG4gICAgfSk7XG4gIH0pO1xuXG4gIHZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7IC8vIEtleWJvYXJkIG5hdmlnYXRpb24gYXNzdW1lcyB0aGF0IFtyb2xlPVwidGFiXCJdIGFyZSBzaWJsaW5nc1xuICAgIC8vIHRob3VnaCB3ZSBtaWdodCB3YXJuIGluIHRoZSBmdXR1cmUgYWJvdXQgbmVzdGVkLCBpbnRlcmFjdGl2ZSBlbGVtZW50c1xuICAgIC8vIGFzIGEgYTExeSB2aW9sYXRpb25cblxuICAgIHZhciByb2xlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgncm9sZScpO1xuXG4gICAgaWYgKHJvbGUgIT09ICd0YWInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5ld0ZvY3VzVGFyZ2V0ID0gbnVsbDtcbiAgICB2YXIgcHJldmlvdXNJdGVtS2V5ID0gb3JpZW50YXRpb24gIT09IFwidmVydGljYWxcIiA/ICdBcnJvd0xlZnQnIDogJ0Fycm93VXAnO1xuICAgIHZhciBuZXh0SXRlbUtleSA9IG9yaWVudGF0aW9uICE9PSBcInZlcnRpY2FsXCIgPyAnQXJyb3dSaWdodCcgOiAnQXJyb3dEb3duJztcblxuICAgIGlmIChvcmllbnRhdGlvbiAhPT0gXCJ2ZXJ0aWNhbFwiICYmIHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgIC8vIHN3YXAgcHJldmlvdXNJdGVtS2V5IHdpdGggbmV4dEl0ZW1LZXlcbiAgICAgIHByZXZpb3VzSXRlbUtleSA9ICdBcnJvd1JpZ2h0JztcbiAgICAgIG5leHRJdGVtS2V5ID0gJ0Fycm93TGVmdCc7XG4gICAgfVxuXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgcHJldmlvdXNJdGVtS2V5OlxuICAgICAgICBuZXdGb2N1c1RhcmdldCA9IHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIHx8IHRhYkxpc3RSZWYuY3VycmVudC5sYXN0Q2hpbGQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIG5leHRJdGVtS2V5OlxuICAgICAgICBuZXdGb2N1c1RhcmdldCA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgdGFiTGlzdFJlZi5jdXJyZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgbmV3Rm9jdXNUYXJnZXQgPSB0YWJMaXN0UmVmLmN1cnJlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgIG5ld0ZvY3VzVGFyZ2V0ID0gdGFiTGlzdFJlZi5jdXJyZW50Lmxhc3RDaGlsZDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChuZXdGb2N1c1RhcmdldCAhPT0gbnVsbCkge1xuICAgICAgbmV3Rm9jdXNUYXJnZXQuZm9jdXMoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjb25kaXRpb25hbEVsZW1lbnRzID0gZ2V0Q29uZGl0aW9uYWxFbGVtZW50cygpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCB2ZXJ0aWNhbCAmJiBjbGFzc2VzLnZlcnRpY2FsKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIGNvbmRpdGlvbmFsRWxlbWVudHMuc2Nyb2xsQnV0dG9uU3RhcnQsIGNvbmRpdGlvbmFsRWxlbWVudHMuc2Nyb2xsYmFyU2l6ZUxpc3RlbmVyLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuc2Nyb2xsZXIsIHNjcm9sbGFibGUgPyBjbGFzc2VzLnNjcm9sbGFibGUgOiBjbGFzc2VzLmZpeGVkKSxcbiAgICBzdHlsZTogc2Nyb2xsZXJTdHlsZSxcbiAgICByZWY6IHRhYnNSZWYsXG4gICAgb25TY3JvbGw6IGhhbmRsZVRhYnNTY3JvbGxcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWwsXG4gICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogYXJpYUxhYmVsbGVkQnksXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuZmxleENvbnRhaW5lciwgdmVydGljYWwgJiYgY2xhc3Nlcy5mbGV4Q29udGFpbmVyVmVydGljYWwsIGNlbnRlcmVkICYmICFzY3JvbGxhYmxlICYmIGNsYXNzZXMuY2VudGVyZWQpLFxuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICByZWY6IHRhYkxpc3RSZWYsXG4gICAgcm9sZTogXCJ0YWJsaXN0XCJcbiAgfSwgY2hpbGRyZW4pLCBtb3VudGVkICYmIGluZGljYXRvciksIGNvbmRpdGlvbmFsRWxlbWVudHMuc2Nyb2xsQnV0dG9uRW5kKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGFicy5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzLlxuICAgKiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHlvdSB3YW50IHRvIHRyaWdnZXIgYW4gYWN0aW9uIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqIEl0IHN1cHBvcnRzIHR3byBhY3Rpb25zOiBgdXBkYXRlSW5kaWNhdG9yKClgIGFuZCBgdXBkYXRlU2Nyb2xsQnV0dG9ucygpYFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYWN0aW9ucyBUaGlzIG9iamVjdCBjb250YWlucyBhbGwgcG9zc2libGUgYWN0aW9uc1xuICAgKiB0aGF0IGNhbiBiZSB0cmlnZ2VyZWQgcHJvZ3JhbW1hdGljYWxseS5cbiAgICovXG4gIGFjdGlvbjogcmVmVHlwZSxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIGZvciB0aGUgVGFicyBhcyBhIHN0cmluZy5cbiAgICovXG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQW4gaWQgb3IgbGlzdCBvZiBpZHMgc2VwYXJhdGVkIGJ5IGEgc3BhY2UgdGhhdCBsYWJlbCB0aGUgVGFicy5cbiAgICovXG4gICdhcmlhLWxhYmVsbGVkYnknOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0YWJzIHdpbGwgYmUgY2VudGVyZWQuXG4gICAqIFRoaXMgcHJvcGVydHkgaXMgaW50ZW5kZWQgZm9yIGxhcmdlIHZpZXdzLlxuICAgKi9cbiAgY2VudGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIGNvbG9yIG9mIHRoZSBpbmRpY2F0b3IuXG4gICAqL1xuICBpbmRpY2F0b3JDb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFja1xuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgV2UgZGVmYXVsdCB0byB0aGUgaW5kZXggb2YgdGhlIGNoaWxkIChudW1iZXIpXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSB0YWJzIG9yaWVudGF0aW9uIChsYXlvdXQgZmxvdyBkaXJlY3Rpb24pLlxuICAgKi9cbiAgb3JpZW50YXRpb246IFByb3BUeXBlcy5vbmVPZihbJ2hvcml6b250YWwnLCAndmVydGljYWwnXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCB0byByZW5kZXIgdGhlIHNjcm9sbCBidXR0b25zLlxuICAgKi9cbiAgU2Nyb2xsQnV0dG9uQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIERldGVybWluZSBiZWhhdmlvciBvZiBzY3JvbGwgYnV0dG9ucyB3aGVuIHRhYnMgYXJlIHNldCB0byBzY3JvbGw6XG4gICAqXG4gICAqIC0gYGF1dG9gIHdpbGwgb25seSBwcmVzZW50IHRoZW0gd2hlbiBub3QgYWxsIHRoZSBpdGVtcyBhcmUgdmlzaWJsZS5cbiAgICogLSBgZGVza3RvcGAgd2lsbCBvbmx5IHByZXNlbnQgdGhlbSBvbiBtZWRpdW0gYW5kIGxhcmdlciB2aWV3cG9ydHMuXG4gICAqIC0gYG9uYCB3aWxsIGFsd2F5cyBwcmVzZW50IHRoZW0uXG4gICAqIC0gYG9mZmAgd2lsbCBuZXZlciBwcmVzZW50IHRoZW0uXG4gICAqL1xuICBzY3JvbGxCdXR0b25zOiBQcm9wVHlwZXMub25lT2YoWydhdXRvJywgJ2Rlc2t0b3AnLCAnb2ZmJywgJ29uJ10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAgdGhlIHNlbGVjdGVkIHRhYiBjaGFuZ2VzIG9uIGZvY3VzLiBPdGhlcndpc2UgaXQgb25seVxuICAgKiBjaGFuZ2VzIG9uIGFjdGl2YXRpb24uXG4gICAqL1xuICBzZWxlY3Rpb25Gb2xsb3dzRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSB0YWIgaW5kaWNhdG9yIGVsZW1lbnQuXG4gICAqL1xuICBUYWJJbmRpY2F0b3JQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BUYWJTY3JvbGxCdXR0b25gXSgvYXBpL3RhYi1zY3JvbGwtYnV0dG9uLykgZWxlbWVudC5cbiAgICovXG4gIFRhYlNjcm9sbEJ1dHRvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBjb2xvciBvZiB0aGUgYFRhYmAuXG4gICAqL1xuICB0ZXh0Q29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2luaGVyaXQnLCAncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGBUYWJgLlxuICAgKiBJZiB5b3UgZG9uJ3Qgd2FudCBhbnkgc2VsZWN0ZWQgYFRhYmAsIHlvdSBjYW4gc2V0IHRoaXMgcHJvcGVydHkgdG8gYGZhbHNlYC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGFkZGl0aW9uYWwgZGlzcGxheSBiZWhhdmlvciBvZiB0aGUgdGFiczpcbiAgICpcbiAgICogIC0gYHNjcm9sbGFibGVgIHdpbGwgaW52b2tlIHNjcm9sbGluZyBwcm9wZXJ0aWVzIGFuZCBhbGxvdyBmb3IgaG9yaXpvbnRhbGx5XG4gICAqICBzY3JvbGxpbmcgKG9yIHN3aXBpbmcpIG9mIHRoZSB0YWIgYmFyLlxuICAgKiAgLWBmdWxsV2lkdGhgIHdpbGwgbWFrZSB0aGUgdGFicyBncm93IHRvIHVzZSBhbGwgdGhlIGF2YWlsYWJsZSBzcGFjZSxcbiAgICogIHdoaWNoIHNob3VsZCBiZSB1c2VkIGZvciBzbWFsbCB2aWV3cywgbGlrZSBvbiBtb2JpbGUuXG4gICAqICAtIGBzdGFuZGFyZGAgd2lsbCByZW5kZXIgdGhlIGRlZmF1bHQgc3RhdGUuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydmdWxsV2lkdGgnLCAnc2Nyb2xsYWJsZScsICdzdGFuZGFyZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlUYWJzJ1xufSkoVGFicyk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGFicyc7IiwiZnVuY3Rpb24gZWFzZUluT3V0U2luKHRpbWUpIHtcbiAgcmV0dXJuICgxICsgTWF0aC5zaW4oTWF0aC5QSSAqIHRpbWUgLSBNYXRoLlBJIC8gMikpIC8gMjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5pbWF0ZShwcm9wZXJ0eSwgZWxlbWVudCwgdG8pIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICB2YXIgY2IgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IGZ1bmN0aW9uICgpIHt9O1xuICB2YXIgX29wdGlvbnMkZWFzZSA9IG9wdGlvbnMuZWFzZSxcbiAgICAgIGVhc2UgPSBfb3B0aW9ucyRlYXNlID09PSB2b2lkIDAgPyBlYXNlSW5PdXRTaW4gOiBfb3B0aW9ucyRlYXNlLFxuICAgICAgX29wdGlvbnMkZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uLFxuICAgICAgZHVyYXRpb24gPSBfb3B0aW9ucyRkdXJhdGlvbiA9PT0gdm9pZCAwID8gMzAwIDogX29wdGlvbnMkZHVyYXRpb247XG4gIHZhciBzdGFydCA9IG51bGw7XG4gIHZhciBmcm9tID0gZWxlbWVudFtwcm9wZXJ0eV07XG4gIHZhciBjYW5jZWxsZWQgPSBmYWxzZTtcblxuICB2YXIgY2FuY2VsID0gZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gIH07XG5cbiAgdmFyIHN0ZXAgPSBmdW5jdGlvbiBzdGVwKHRpbWVzdGFtcCkge1xuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNiKG5ldyBFcnJvcignQW5pbWF0aW9uIGNhbmNlbGxlZCcpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPT09IG51bGwpIHtcbiAgICAgIHN0YXJ0ID0gdGltZXN0YW1wO1xuICAgIH1cblxuICAgIHZhciB0aW1lID0gTWF0aC5taW4oMSwgKHRpbWVzdGFtcCAtIHN0YXJ0KSAvIGR1cmF0aW9uKTtcbiAgICBlbGVtZW50W3Byb3BlcnR5XSA9IGVhc2UodGltZSkgKiAodG8gLSBmcm9tKSArIGZyb207XG5cbiAgICBpZiAodGltZSA+PSAxKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYihudWxsKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgfTtcblxuICBpZiAoZnJvbSA9PT0gdG8pIHtcbiAgICBjYihuZXcgRXJyb3IoJ0VsZW1lbnQgYWxyZWFkeSBhdCB0YXJnZXQgcG9zaXRpb24nKSk7XG4gICAgcmV0dXJuIGNhbmNlbDtcbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgcmV0dXJuIGNhbmNlbDtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuLi8uLi91dGlscy9jcmVhdGVTdmdJY29uJztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xNS40MSAxNi4wOWwtNC41OC00LjU5IDQuNTgtNC41OUwxNCA1LjVsLTYgNiA2IDZ6XCJcbn0pLCAnS2V5Ym9hcmRBcnJvd0xlZnQnKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuLi8uLi91dGlscy9jcmVhdGVTdmdJY29uJztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk04LjU5IDE2LjM0bDQuNTgtNC41OS00LjU4LTQuNTlMMTAgNS43NWw2IDYtNiA2elwiXG59KSwgJ0tleWJvYXJkQXJyb3dSaWdodCcpOyIsIi8vIFNvdXJjZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbGl0YWhlcmkvbm9ybWFsaXplLXNjcm9sbC1sZWZ0XG52YXIgY2FjaGVkVHlwZTtcbi8qKlxuICogQmFzZWQgb24gdGhlIGpxdWVyeSBwbHVnaW4gaHR0cHM6Ly9naXRodWIuY29tL290aHJlZS9qcXVlcnkucnRsLXNjcm9sbC10eXBlXG4gKlxuICogVHlwZXMgb2Ygc2Nyb2xsTGVmdCwgYXNzaW1pbmcgc2Nyb2xsV2lkdGg9MTAwIGFuZCBkaXJlY3Rpb24gaXMgcnRsLlxuICpcbiAqIEJyb3dzZXIgICAgICAgIHwgVHlwZSAgICAgICAgICB8IDwtIE1vc3QgTGVmdCB8IE1vc3QgUmlnaHQgLT4gfCBJbml0aWFsXG4gKiAtLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tIHwgLS0tLS0tLVxuICogV2ViS2l0ICAgICAgICAgfCBkZWZhdWx0ICAgICAgIHwgMCAgICAgICAgICAgIHwgMTAwICAgICAgICAgICB8IDEwMFxuICogRmlyZWZveC9PcGVyYSAgfCBuZWdhdGl2ZSAgICAgIHwgLTEwMCAgICAgICAgIHwgMCAgICAgICAgICAgICB8IDBcbiAqIElFL0VkZ2UgICAgICAgIHwgcmV2ZXJzZSAgICAgICB8IDEwMCAgICAgICAgICB8IDAgICAgICAgICAgICAgfCAwXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdFNjcm9sbFR5cGUoKSB7XG4gIGlmIChjYWNoZWRUeXBlKSB7XG4gICAgcmV0dXJuIGNhY2hlZFR5cGU7XG4gIH1cblxuICB2YXIgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVtbXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0FCQ0QnKSk7XG4gIGR1bW15LmRpciA9ICdydGwnO1xuICBkdW1teS5zdHlsZS5mb250U2l6ZSA9ICcxNHB4JztcbiAgZHVtbXkuc3R5bGUud2lkdGggPSAnNHB4JztcbiAgZHVtbXkuc3R5bGUuaGVpZ2h0ID0gJzFweCc7XG4gIGR1bW15LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgZHVtbXkuc3R5bGUudG9wID0gJy0xMDAwcHgnO1xuICBkdW1teS5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGR1bW15KTtcbiAgY2FjaGVkVHlwZSA9ICdyZXZlcnNlJztcblxuICBpZiAoZHVtbXkuc2Nyb2xsTGVmdCA+IDApIHtcbiAgICBjYWNoZWRUeXBlID0gJ2RlZmF1bHQnO1xuICB9IGVsc2Uge1xuICAgIGR1bW15LnNjcm9sbExlZnQgPSAxO1xuXG4gICAgaWYgKGR1bW15LnNjcm9sbExlZnQgPT09IDApIHtcbiAgICAgIGNhY2hlZFR5cGUgPSAnbmVnYXRpdmUnO1xuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZHVtbXkpO1xuICByZXR1cm4gY2FjaGVkVHlwZTtcbn0gLy8gQmFzZWQgb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI0Mzk0Mzc2XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3JtYWxpemVkU2Nyb2xsTGVmdChlbGVtZW50LCBkaXJlY3Rpb24pIHtcbiAgdmFyIHNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7IC8vIFBlcmZvcm0gdGhlIGNhbGN1bGF0aW9ucyBvbmx5IHdoZW4gZGlyZWN0aW9uIGlzIHJ0bCB0byBhdm9pZCBtZXNzaW5nIHVwIHRoZSBsdHIgYmFoYXZpb3JcblxuICBpZiAoZGlyZWN0aW9uICE9PSAncnRsJykge1xuICAgIHJldHVybiBzY3JvbGxMZWZ0O1xuICB9XG5cbiAgdmFyIHR5cGUgPSBkZXRlY3RTY3JvbGxUeXBlKCk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnbmVnYXRpdmUnOlxuICAgICAgcmV0dXJuIGVsZW1lbnQuc2Nyb2xsV2lkdGggLSBlbGVtZW50LmNsaWVudFdpZHRoICsgc2Nyb2xsTGVmdDtcblxuICAgIGNhc2UgJ3JldmVyc2UnOlxuICAgICAgcmV0dXJuIGVsZW1lbnQuc2Nyb2xsV2lkdGggLSBlbGVtZW50LmNsaWVudFdpZHRoIC0gc2Nyb2xsTGVmdDtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc2Nyb2xsTGVmdDtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuc3VwcG9ydGVkUHJvcChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBwcm9wRnVsbE5hbWVTYWZlID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gIGlmICh0eXBlb2YgcHJvcHNbcHJvcE5hbWVdICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXCJUaGUgcHJvcCBgXCIuY29uY2F0KHByb3BGdWxsTmFtZVNhZmUsIFwiYCBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgcmVtb3ZlIGl0LlwiKSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0iLCJpbXBvcnQgUmVhY3RfX2RlZmF1bHQsIHsgdXNlQ2FsbGJhY2ssIGNyZWF0ZUVsZW1lbnQsIGNsb25lRWxlbWVudCwgRnJhZ21lbnQsIENvbXBvbmVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm9kZSwgYm9vbCwgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdSBhcyB1c2VVdGlscyB9IGZyb20gJy4vdXNlVXRpbHMtY2ZiOTZhYzkuanMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgYSBhcyBhcnJheUluY2x1ZGVzLCByIGFzIHJ1bktleUhhbmRsZXIsIFYgYXMgVmFyaWFudENvbnRleHQgfSBmcm9tICcuL1dyYXBwZXItMjQxOTY2ZDcuanMnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdmdJY29uJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0IERheSBmcm9tICcuL0RheS5qcyc7XG5pbXBvcnQgeyBUcmFuc2l0aW9uR3JvdXAsIENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuXG52YXIgZmluZENsb3Nlc3RFbmFibGVkRGF0ZSA9IGZ1bmN0aW9uIGZpbmRDbG9zZXN0RW5hYmxlZERhdGUoX3JlZikge1xuICB2YXIgZGF0ZSA9IF9yZWYuZGF0ZSxcbiAgICAgIHV0aWxzID0gX3JlZi51dGlscyxcbiAgICAgIG1pbkRhdGUgPSBfcmVmLm1pbkRhdGUsXG4gICAgICBtYXhEYXRlID0gX3JlZi5tYXhEYXRlLFxuICAgICAgZGlzYWJsZUZ1dHVyZSA9IF9yZWYuZGlzYWJsZUZ1dHVyZSxcbiAgICAgIGRpc2FibGVQYXN0ID0gX3JlZi5kaXNhYmxlUGFzdCxcbiAgICAgIHNob3VsZERpc2FibGVEYXRlID0gX3JlZi5zaG91bGREaXNhYmxlRGF0ZTtcbiAgdmFyIHRvZGF5ID0gdXRpbHMuc3RhcnRPZkRheSh1dGlscy5kYXRlKCkpO1xuXG4gIGlmIChkaXNhYmxlUGFzdCAmJiB1dGlscy5pc0JlZm9yZShtaW5EYXRlLCB0b2RheSkpIHtcbiAgICBtaW5EYXRlID0gdG9kYXk7XG4gIH1cblxuICBpZiAoZGlzYWJsZUZ1dHVyZSAmJiB1dGlscy5pc0FmdGVyKG1heERhdGUsIHRvZGF5KSkge1xuICAgIG1heERhdGUgPSB0b2RheTtcbiAgfVxuXG4gIHZhciBmb3J3YXJkID0gZGF0ZTtcbiAgdmFyIGJhY2t3YXJkID0gZGF0ZTtcblxuICBpZiAodXRpbHMuaXNCZWZvcmUoZGF0ZSwgbWluRGF0ZSkpIHtcbiAgICBmb3J3YXJkID0gdXRpbHMuZGF0ZShtaW5EYXRlKTtcbiAgICBiYWNrd2FyZCA9IG51bGw7XG4gIH1cblxuICBpZiAodXRpbHMuaXNBZnRlcihkYXRlLCBtYXhEYXRlKSkge1xuICAgIGlmIChiYWNrd2FyZCkge1xuICAgICAgYmFja3dhcmQgPSB1dGlscy5kYXRlKG1heERhdGUpO1xuICAgIH1cblxuICAgIGZvcndhcmQgPSBudWxsO1xuICB9XG5cbiAgd2hpbGUgKGZvcndhcmQgfHwgYmFja3dhcmQpIHtcbiAgICBpZiAoZm9yd2FyZCAmJiB1dGlscy5pc0FmdGVyKGZvcndhcmQsIG1heERhdGUpKSB7XG4gICAgICBmb3J3YXJkID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoYmFja3dhcmQgJiYgdXRpbHMuaXNCZWZvcmUoYmFja3dhcmQsIG1pbkRhdGUpKSB7XG4gICAgICBiYWNrd2FyZCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGZvcndhcmQpIHtcbiAgICAgIGlmICghc2hvdWxkRGlzYWJsZURhdGUoZm9yd2FyZCkpIHtcbiAgICAgICAgcmV0dXJuIGZvcndhcmQ7XG4gICAgICB9XG5cbiAgICAgIGZvcndhcmQgPSB1dGlscy5hZGREYXlzKGZvcndhcmQsIDEpO1xuICAgIH1cblxuICAgIGlmIChiYWNrd2FyZCkge1xuICAgICAgaWYgKCFzaG91bGREaXNhYmxlRGF0ZShiYWNrd2FyZCkpIHtcbiAgICAgICAgcmV0dXJuIGJhY2t3YXJkO1xuICAgICAgfVxuXG4gICAgICBiYWNrd2FyZCA9IHV0aWxzLmFkZERheXMoYmFja3dhcmQsIC0xKTtcbiAgICB9XG4gIH0gLy8gZmFsbGJhY2sgdG8gdG9kYXkgaWYgbm8gZW5hYmxlZCBkYXlzXG5cblxuICByZXR1cm4gdXRpbHMuZGF0ZSgpO1xufTtcbnZhciBpc1llYXJPbmx5VmlldyA9IGZ1bmN0aW9uIGlzWWVhck9ubHlWaWV3KHZpZXdzKSB7XG4gIHJldHVybiB2aWV3cy5sZW5ndGggPT09IDEgJiYgdmlld3NbMF0gPT09ICd5ZWFyJztcbn07XG52YXIgaXNZZWFyQW5kTW9udGhWaWV3cyA9IGZ1bmN0aW9uIGlzWWVhckFuZE1vbnRoVmlld3Modmlld3MpIHtcbiAgcmV0dXJuIHZpZXdzLmxlbmd0aCA9PT0gMiAmJiBhcnJheUluY2x1ZGVzKHZpZXdzLCAnbW9udGgnKSAmJiBhcnJheUluY2x1ZGVzKHZpZXdzLCAneWVhcicpO1xufTtcbnZhciBnZXRGb3JtYXRCeVZpZXdzID0gZnVuY3Rpb24gZ2V0Rm9ybWF0QnlWaWV3cyh2aWV3cywgdXRpbHMpIHtcbiAgaWYgKGlzWWVhck9ubHlWaWV3KHZpZXdzKSkge1xuICAgIHJldHVybiB1dGlscy55ZWFyRm9ybWF0O1xuICB9XG5cbiAgaWYgKGlzWWVhckFuZE1vbnRoVmlld3Modmlld3MpKSB7XG4gICAgcmV0dXJuIHV0aWxzLnllYXJNb250aEZvcm1hdDtcbiAgfVxuXG4gIHJldHVybiB1dGlscy5kYXRlRm9ybWF0O1xufTtcblxudmFyIERheVdyYXBwZXIgPSBmdW5jdGlvbiBEYXlXcmFwcGVyKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICAgIG9uU2VsZWN0ID0gX3JlZi5vblNlbGVjdCxcbiAgICAgIGRheUluQ3VycmVudE1vbnRoID0gX3JlZi5kYXlJbkN1cnJlbnRNb250aCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImNoaWxkcmVuXCIsIFwidmFsdWVcIiwgXCJkaXNhYmxlZFwiLCBcIm9uU2VsZWN0XCIsIFwiZGF5SW5DdXJyZW50TW9udGhcIl0pO1xuXG4gIHZhciBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gb25TZWxlY3QodmFsdWUpO1xuICB9LCBbb25TZWxlY3QsIHZhbHVlXSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICByb2xlOiBcInByZXNlbnRhdGlvblwiLFxuICAgIG9uQ2xpY2s6IGRheUluQ3VycmVudE1vbnRoICYmICFkaXNhYmxlZCA/IGhhbmRsZUNsaWNrIDogdW5kZWZpbmVkLFxuICAgIG9uS2V5UHJlc3M6IGRheUluQ3VycmVudE1vbnRoICYmICFkaXNhYmxlZCA/IGhhbmRsZUNsaWNrIDogdW5kZWZpbmVkXG4gIH0sIG90aGVyKSwgY2hpbGRyZW4pO1xufTtcblxudmFyIGFuaW1hdGlvbkR1cmF0aW9uID0gMzUwO1xudmFyIHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoZnVuY3Rpb24gKHRoZW1lKSB7XG4gIHZhciBzbGlkZVRyYW5zaXRpb24gPSB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScsIHtcbiAgICBkdXJhdGlvbjogYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgZWFzaW5nOiAnY3ViaWMtYmV6aWVyKDAuMzUsIDAuOCwgMC40LCAxKSdcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdHJhbnNpdGlvbkNvbnRhaW5lcjoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgJyYgPiAqJzoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfVxuICAgIH0sXG4gICAgJ3NsaWRlRW50ZXItbGVmdCc6IHtcbiAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDEwMCUpJ1xuICAgIH0sXG4gICAgJ3NsaWRlRW50ZXItcmlnaHQnOiB7XG4gICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtMTAwJSknXG4gICAgfSxcbiAgICBzbGlkZUVudGVyQWN0aXZlOiB7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCUpJyxcbiAgICAgIHRyYW5zaXRpb246IHNsaWRlVHJhbnNpdGlvblxuICAgIH0sXG4gICAgc2xpZGVFeGl0OiB7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCUpJ1xuICAgIH0sXG4gICAgJ3NsaWRlRXhpdEFjdGl2ZUxlZnQtbGVmdCc6IHtcbiAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC0yMDAlKScsXG4gICAgICB0cmFuc2l0aW9uOiBzbGlkZVRyYW5zaXRpb25cbiAgICB9LFxuICAgICdzbGlkZUV4aXRBY3RpdmVMZWZ0LXJpZ2h0Jzoge1xuICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMjAwJSknLFxuICAgICAgdHJhbnNpdGlvbjogc2xpZGVUcmFuc2l0aW9uXG4gICAgfVxuICB9O1xufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc1NsaWRlVHJhbnNpdGlvbidcbn0pO1xuXG52YXIgU2xpZGVUcmFuc2l0aW9uID0gZnVuY3Rpb24gU2xpZGVUcmFuc2l0aW9uKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHRyYW5zS2V5ID0gX3JlZi50cmFuc0tleSxcbiAgICAgIHNsaWRlRGlyZWN0aW9uID0gX3JlZi5zbGlkZURpcmVjdGlvbixcbiAgICAgIF9yZWYkY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmJGNsYXNzTmFtZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkY2xhc3NOYW1lO1xuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICB2YXIgdHJhbnNpdGlvbkNsYXNzZXMgPSB7XG4gICAgZXhpdDogY2xhc3Nlcy5zbGlkZUV4aXQsXG4gICAgZW50ZXJBY3RpdmU6IGNsYXNzZXMuc2xpZGVFbnRlckFjdGl2ZSxcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZW50ZXI6IGNsYXNzZXNbJ3NsaWRlRW50ZXItJyArIHNsaWRlRGlyZWN0aW9uXSxcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZXhpdEFjdGl2ZTogY2xhc3Nlc1snc2xpZGVFeGl0QWN0aXZlTGVmdC0nICsgc2xpZGVEaXJlY3Rpb25dXG4gIH07XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Hcm91cCwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnRyYW5zaXRpb25Db250YWluZXIsIGNsYXNzTmFtZSksXG4gICAgY2hpbGRGYWN0b3J5OiBmdW5jdGlvbiBjaGlsZEZhY3RvcnkoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGNsb25lRWxlbWVudChlbGVtZW50LCB7XG4gICAgICAgIGNsYXNzTmFtZXM6IHRyYW5zaXRpb25DbGFzc2VzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIGNyZWF0ZUVsZW1lbnQoQ1NTVHJhbnNpdGlvbiwge1xuICAgIG1vdW50T25FbnRlcjogdHJ1ZSxcbiAgICB1bm1vdW50T25FeGl0OiB0cnVlLFxuICAgIGtleTogdHJhbnNLZXkgKyBzbGlkZURpcmVjdGlvbixcbiAgICB0aW1lb3V0OiBhbmltYXRpb25EdXJhdGlvbixcbiAgICBjbGFzc05hbWVzOiB0cmFuc2l0aW9uQ2xhc3NlcyxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSkpO1xufTtcblxudmFyIEFycm93TGVmdEljb24gPSBmdW5jdGlvbiBBcnJvd0xlZnRJY29uKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN2Z0ljb24sIHByb3BzLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxelwiXG4gIH0pLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZDogXCJNMCAwaDI0djI0SDBWMHpcIlxuICB9KSk7XG59O1xuXG52YXIgQXJyb3dSaWdodEljb24gPSBmdW5jdGlvbiBBcnJvd1JpZ2h0SWNvbihwcm9wcykge1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChTdmdJY29uLCBwcm9wcywgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTguNTkgMTYuNTlMMTMuMTcgMTIgOC41OSA3LjQxIDEwIDZsNiA2LTYgNi0xLjQxLTEuNDF6XCJcbiAgfSksIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBkOiBcIk0wIDBoMjR2MjRIMFYwelwiXG4gIH0pKTtcbn07XG5cbnZhciB1c2VTdHlsZXMkMSA9IG1ha2VTdHlsZXMoZnVuY3Rpb24gKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgc3dpdGNoSGVhZGVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKVxuICAgIH0sXG4gICAgdHJhbnNpdGlvbkNvbnRhaW5lcjoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGhlaWdodDogMjNcbiAgICB9LFxuICAgIGljb25CdXR0b246IHtcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyXG4gICAgfSxcbiAgICBkYXlzSGVhZGVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIG1heEhlaWdodDogMTZcbiAgICB9LFxuICAgIGRheUxhYmVsOiB7XG4gICAgICB3aWR0aDogMzYsXG4gICAgICBtYXJnaW46ICcwIDJweCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5oaW50XG4gICAgfVxuICB9O1xufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc0NhbGVuZGFySGVhZGVyJ1xufSk7XG52YXIgQ2FsZW5kYXJIZWFkZXIgPSBmdW5jdGlvbiBDYWxlbmRhckhlYWRlcihfcmVmKSB7XG4gIHZhciBjdXJyZW50TW9udGggPSBfcmVmLmN1cnJlbnRNb250aCxcbiAgICAgIG9uTW9udGhDaGFuZ2UgPSBfcmVmLm9uTW9udGhDaGFuZ2UsXG4gICAgICBsZWZ0QXJyb3dJY29uID0gX3JlZi5sZWZ0QXJyb3dJY29uLFxuICAgICAgcmlnaHRBcnJvd0ljb24gPSBfcmVmLnJpZ2h0QXJyb3dJY29uLFxuICAgICAgbGVmdEFycm93QnV0dG9uUHJvcHMgPSBfcmVmLmxlZnRBcnJvd0J1dHRvblByb3BzLFxuICAgICAgcmlnaHRBcnJvd0J1dHRvblByb3BzID0gX3JlZi5yaWdodEFycm93QnV0dG9uUHJvcHMsXG4gICAgICBkaXNhYmxlUHJldk1vbnRoID0gX3JlZi5kaXNhYmxlUHJldk1vbnRoLFxuICAgICAgZGlzYWJsZU5leHRNb250aCA9IF9yZWYuZGlzYWJsZU5leHRNb250aCxcbiAgICAgIHNsaWRlRGlyZWN0aW9uID0gX3JlZi5zbGlkZURpcmVjdGlvbjtcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMkMSgpO1xuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgcnRsID0gdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJztcblxuICB2YXIgc2VsZWN0TmV4dE1vbnRoID0gZnVuY3Rpb24gc2VsZWN0TmV4dE1vbnRoKCkge1xuICAgIHJldHVybiBvbk1vbnRoQ2hhbmdlKHV0aWxzLmdldE5leHRNb250aChjdXJyZW50TW9udGgpLCAnbGVmdCcpO1xuICB9O1xuXG4gIHZhciBzZWxlY3RQcmV2aW91c01vbnRoID0gZnVuY3Rpb24gc2VsZWN0UHJldmlvdXNNb250aCgpIHtcbiAgICByZXR1cm4gb25Nb250aENoYW5nZSh1dGlscy5nZXRQcmV2aW91c01vbnRoKGN1cnJlbnRNb250aCksICdyaWdodCcpO1xuICB9O1xuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5zd2l0Y2hIZWFkZXJcbiAgfSwgY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCBfZXh0ZW5kcyh7fSwgbGVmdEFycm93QnV0dG9uUHJvcHMsIHtcbiAgICBkaXNhYmxlZDogZGlzYWJsZVByZXZNb250aCxcbiAgICBvbkNsaWNrOiBzZWxlY3RQcmV2aW91c01vbnRoLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5pY29uQnV0dG9uXG4gIH0pLCBydGwgPyByaWdodEFycm93SWNvbiA6IGxlZnRBcnJvd0ljb24pLCBjcmVhdGVFbGVtZW50KFNsaWRlVHJhbnNpdGlvbiwge1xuICAgIHNsaWRlRGlyZWN0aW9uOiBzbGlkZURpcmVjdGlvbixcbiAgICB0cmFuc0tleTogY3VycmVudE1vbnRoLnRvU3RyaW5nKCksXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRyYW5zaXRpb25Db250YWluZXJcbiAgfSwgY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7XG4gICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgdmFyaWFudDogXCJib2R5MVwiXG4gIH0sIHV0aWxzLmdldENhbGVuZGFySGVhZGVyVGV4dChjdXJyZW50TW9udGgpKSksIGNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwgX2V4dGVuZHMoe30sIHJpZ2h0QXJyb3dCdXR0b25Qcm9wcywge1xuICAgIGRpc2FibGVkOiBkaXNhYmxlTmV4dE1vbnRoLFxuICAgIG9uQ2xpY2s6IHNlbGVjdE5leHRNb250aCxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuaWNvbkJ1dHRvblxuICB9KSwgcnRsID8gbGVmdEFycm93SWNvbiA6IHJpZ2h0QXJyb3dJY29uKSksIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5kYXlzSGVhZGVyXG4gIH0sIHV0aWxzLmdldFdlZWtkYXlzKCkubWFwKGZ1bmN0aW9uIChkYXksIGluZGV4KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwge1xuICAgICAga2V5OiBpbmRleCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgLFxuICAgICAgdmFyaWFudDogXCJjYXB0aW9uXCIsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMuZGF5TGFiZWxcbiAgICB9LCBkYXkpO1xuICB9KSkpO1xufTtcbkNhbGVuZGFySGVhZGVyLmRpc3BsYXlOYW1lID0gJ0NhbGVuZGFySGVhZGVyJztcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IENhbGVuZGFySGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgbGVmdEFycm93SWNvbjogbm9kZSxcbiAgcmlnaHRBcnJvd0ljb246IG5vZGUsXG4gIGRpc2FibGVQcmV2TW9udGg6IGJvb2wsXG4gIGRpc2FibGVOZXh0TW9udGg6IGJvb2xcbn0gOiB2b2lkIDA7XG5DYWxlbmRhckhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGxlZnRBcnJvd0ljb246IGNyZWF0ZUVsZW1lbnQoQXJyb3dMZWZ0SWNvbiwgbnVsbCksXG4gIHJpZ2h0QXJyb3dJY29uOiBjcmVhdGVFbGVtZW50KEFycm93UmlnaHRJY29uLCBudWxsKSxcbiAgZGlzYWJsZVByZXZNb250aDogZmFsc2UsXG4gIGRpc2FibGVOZXh0TW9udGg6IGZhbHNlXG59O1xuXG52YXIgd2l0aFV0aWxzID0gZnVuY3Rpb24gd2l0aFV0aWxzKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICAgIHZhciBXaXRoVXRpbHMgPSBmdW5jdGlvbiBXaXRoVXRpbHMocHJvcHMpIHtcbiAgICAgIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgdXRpbHM6IHV0aWxzXG4gICAgICB9LCBwcm9wcykpO1xuICAgIH07XG5cbiAgICBXaXRoVXRpbHMuZGlzcGxheU5hbWUgPSBcIldpdGhVdGlscyhcIi5jb25jYXQoQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lLCBcIilcIik7XG4gICAgcmV0dXJuIFdpdGhVdGlscztcbiAgfTtcbn07XG5cbnZhciBLZXlEb3duTGlzdGVuZXIgPSBmdW5jdGlvbiBLZXlEb3duTGlzdGVuZXIoX3JlZikge1xuICB2YXIgb25LZXlEb3duID0gX3JlZi5vbktleURvd247XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bik7XG4gICAgfTtcbiAgfSwgW29uS2V5RG93bl0pO1xuICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBDYWxlbmRhciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ2FsZW5kYXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENhbGVuZGFyKCkge1xuICAgIHZhciBfZ2V0UHJvdG90eXBlT2YyO1xuXG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbGVuZGFyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YyID0gX2dldFByb3RvdHlwZU9mKENhbGVuZGFyKSkuY2FsbC5hcHBseShfZ2V0UHJvdG90eXBlT2YyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzbGlkZURpcmVjdGlvbjogJ2xlZnQnLFxuICAgICAgY3VycmVudE1vbnRoOiBfdGhpcy5wcm9wcy51dGlscy5zdGFydE9mTW9udGgoX3RoaXMucHJvcHMuZGF0ZSksXG4gICAgICBsb2FkaW5nUXVldWU6IDBcbiAgICB9O1xuXG4gICAgX3RoaXMucHVzaFRvTG9hZGluZ1F1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGxvYWRpbmdRdWV1ZSA9IF90aGlzLnN0YXRlLmxvYWRpbmdRdWV1ZSArIDE7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZ1F1ZXVlOiBsb2FkaW5nUXVldWVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5wb3BGcm9tTG9hZGluZ1F1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGxvYWRpbmdRdWV1ZSA9IF90aGlzLnN0YXRlLmxvYWRpbmdRdWV1ZTtcbiAgICAgIGxvYWRpbmdRdWV1ZSA9IGxvYWRpbmdRdWV1ZSA8PSAwID8gMCA6IGxvYWRpbmdRdWV1ZSAtIDE7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZ1F1ZXVlOiBsb2FkaW5nUXVldWVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVDaGFuZ2VNb250aCA9IGZ1bmN0aW9uIChuZXdNb250aCwgc2xpZGVEaXJlY3Rpb24pIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudE1vbnRoOiBuZXdNb250aCxcbiAgICAgICAgc2xpZGVEaXJlY3Rpb246IHNsaWRlRGlyZWN0aW9uXG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW9udGhDaGFuZ2UpIHtcbiAgICAgICAgdmFyIHJldHVyblZhbCA9IF90aGlzLnByb3BzLm9uTW9udGhDaGFuZ2UobmV3TW9udGgpO1xuXG4gICAgICAgIGlmIChyZXR1cm5WYWwpIHtcbiAgICAgICAgICBfdGhpcy5wdXNoVG9Mb2FkaW5nUXVldWUoKTtcblxuICAgICAgICAgIHJldHVyblZhbC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnBvcEZyb21Mb2FkaW5nUXVldWUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy52YWxpZGF0ZU1pbk1heERhdGUgPSBmdW5jdGlvbiAoZGF5KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtaW5EYXRlID0gX3RoaXMkcHJvcHMubWluRGF0ZSxcbiAgICAgICAgICBtYXhEYXRlID0gX3RoaXMkcHJvcHMubWF4RGF0ZSxcbiAgICAgICAgICB1dGlscyA9IF90aGlzJHByb3BzLnV0aWxzLFxuICAgICAgICAgIGRpc2FibGVGdXR1cmUgPSBfdGhpcyRwcm9wcy5kaXNhYmxlRnV0dXJlLFxuICAgICAgICAgIGRpc2FibGVQYXN0ID0gX3RoaXMkcHJvcHMuZGlzYWJsZVBhc3Q7XG4gICAgICB2YXIgbm93ID0gdXRpbHMuZGF0ZSgpO1xuICAgICAgcmV0dXJuIEJvb2xlYW4oZGlzYWJsZUZ1dHVyZSAmJiB1dGlscy5pc0FmdGVyRGF5KGRheSwgbm93KSB8fCBkaXNhYmxlUGFzdCAmJiB1dGlscy5pc0JlZm9yZURheShkYXksIG5vdykgfHwgbWluRGF0ZSAmJiB1dGlscy5pc0JlZm9yZURheShkYXksIHV0aWxzLmRhdGUobWluRGF0ZSkpIHx8IG1heERhdGUgJiYgdXRpbHMuaXNBZnRlckRheShkYXksIHV0aWxzLmRhdGUobWF4RGF0ZSkpKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2hvdWxkRGlzYWJsZVByZXZNb250aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB1dGlscyA9IF90aGlzJHByb3BzMi51dGlscyxcbiAgICAgICAgICBkaXNhYmxlUGFzdCA9IF90aGlzJHByb3BzMi5kaXNhYmxlUGFzdCxcbiAgICAgICAgICBtaW5EYXRlID0gX3RoaXMkcHJvcHMyLm1pbkRhdGU7XG4gICAgICB2YXIgbm93ID0gdXRpbHMuZGF0ZSgpO1xuICAgICAgdmFyIGZpcnN0RW5hYmxlZE1vbnRoID0gdXRpbHMuc3RhcnRPZk1vbnRoKGRpc2FibGVQYXN0ICYmIHV0aWxzLmlzQWZ0ZXIobm93LCB1dGlscy5kYXRlKG1pbkRhdGUpKSA/IG5vdyA6IHV0aWxzLmRhdGUobWluRGF0ZSkpO1xuICAgICAgcmV0dXJuICF1dGlscy5pc0JlZm9yZShmaXJzdEVuYWJsZWRNb250aCwgX3RoaXMuc3RhdGUuY3VycmVudE1vbnRoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2hvdWxkRGlzYWJsZU5leHRNb250aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB1dGlscyA9IF90aGlzJHByb3BzMy51dGlscyxcbiAgICAgICAgICBkaXNhYmxlRnV0dXJlID0gX3RoaXMkcHJvcHMzLmRpc2FibGVGdXR1cmUsXG4gICAgICAgICAgbWF4RGF0ZSA9IF90aGlzJHByb3BzMy5tYXhEYXRlO1xuICAgICAgdmFyIG5vdyA9IHV0aWxzLmRhdGUoKTtcbiAgICAgIHZhciBsYXN0RW5hYmxlZE1vbnRoID0gdXRpbHMuc3RhcnRPZk1vbnRoKGRpc2FibGVGdXR1cmUgJiYgdXRpbHMuaXNCZWZvcmUobm93LCB1dGlscy5kYXRlKG1heERhdGUpKSA/IG5vdyA6IHV0aWxzLmRhdGUobWF4RGF0ZSkpO1xuICAgICAgcmV0dXJuICF1dGlscy5pc0FmdGVyKGxhc3RFbmFibGVkTW9udGgsIF90aGlzLnN0YXRlLmN1cnJlbnRNb250aCk7XG4gICAgfTtcblxuICAgIF90aGlzLnNob3VsZERpc2FibGVEYXRlID0gZnVuY3Rpb24gKGRheSkge1xuICAgICAgdmFyIHNob3VsZERpc2FibGVEYXRlID0gX3RoaXMucHJvcHMuc2hvdWxkRGlzYWJsZURhdGU7XG4gICAgICByZXR1cm4gX3RoaXMudmFsaWRhdGVNaW5NYXhEYXRlKGRheSkgfHwgQm9vbGVhbihzaG91bGREaXNhYmxlRGF0ZSAmJiBzaG91bGREaXNhYmxlRGF0ZShkYXkpKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRGF5U2VsZWN0ID0gZnVuY3Rpb24gKGRheSkge1xuICAgICAgdmFyIGlzRmluaXNoID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGRhdGUgPSBfdGhpcyRwcm9wczQuZGF0ZSxcbiAgICAgICAgICB1dGlscyA9IF90aGlzJHByb3BzNC51dGlscztcblxuICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2UodXRpbHMubWVyZ2VEYXRlQW5kVGltZShkYXksIGRhdGUpLCBpc0ZpbmlzaCk7XG4gICAgfTtcblxuICAgIF90aGlzLm1vdmVUb0RheSA9IGZ1bmN0aW9uIChkYXkpIHtcbiAgICAgIHZhciB1dGlscyA9IF90aGlzLnByb3BzLnV0aWxzO1xuXG4gICAgICBpZiAoZGF5ICYmICFfdGhpcy5zaG91bGREaXNhYmxlRGF0ZShkYXkpKSB7XG4gICAgICAgIGlmICh1dGlscy5nZXRNb250aChkYXkpICE9PSB1dGlscy5nZXRNb250aChfdGhpcy5zdGF0ZS5jdXJyZW50TW9udGgpKSB7XG4gICAgICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlTW9udGgodXRpbHMuc3RhcnRPZk1vbnRoKGRheSksICdsZWZ0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5oYW5kbGVEYXlTZWxlY3QoZGF5LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB0aGVtZSA9IF90aGlzJHByb3BzNS50aGVtZSxcbiAgICAgICAgICBkYXRlID0gX3RoaXMkcHJvcHM1LmRhdGUsXG4gICAgICAgICAgdXRpbHMgPSBfdGhpcyRwcm9wczUudXRpbHM7XG4gICAgICBydW5LZXlIYW5kbGVyKGV2ZW50LCB7XG4gICAgICAgIEFycm93VXA6IGZ1bmN0aW9uIEFycm93VXAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm1vdmVUb0RheSh1dGlscy5hZGREYXlzKGRhdGUsIC03KSk7XG4gICAgICAgIH0sXG4gICAgICAgIEFycm93RG93bjogZnVuY3Rpb24gQXJyb3dEb3duKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5tb3ZlVG9EYXkodXRpbHMuYWRkRGF5cyhkYXRlLCA3KSk7XG4gICAgICAgIH0sXG4gICAgICAgIEFycm93TGVmdDogZnVuY3Rpb24gQXJyb3dMZWZ0KCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5tb3ZlVG9EYXkodXRpbHMuYWRkRGF5cyhkYXRlLCB0aGVtZS5kaXJlY3Rpb24gPT09ICdsdHInID8gLTEgOiAxKSk7XG4gICAgICAgIH0sXG4gICAgICAgIEFycm93UmlnaHQ6IGZ1bmN0aW9uIEFycm93UmlnaHQoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm1vdmVUb0RheSh1dGlscy5hZGREYXlzKGRhdGUsIHRoZW1lLmRpcmVjdGlvbiA9PT0gJ2x0cicgPyAxIDogLTEpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlcldlZWtzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHV0aWxzID0gX3RoaXMkcHJvcHM2LnV0aWxzLFxuICAgICAgICAgIGNsYXNzZXMgPSBfdGhpcyRwcm9wczYuY2xhc3NlcztcbiAgICAgIHZhciB3ZWVrcyA9IHV0aWxzLmdldFdlZWtBcnJheShfdGhpcy5zdGF0ZS5jdXJyZW50TW9udGgpO1xuICAgICAgcmV0dXJuIHdlZWtzLm1hcChmdW5jdGlvbiAod2Vlaykge1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAga2V5OiBcIndlZWstXCIuY29uY2F0KHdlZWtbMF0udG9TdHJpbmcoKSksXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLndlZWtcbiAgICAgICAgfSwgX3RoaXMucmVuZGVyRGF5cyh3ZWVrKSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyRGF5cyA9IGZ1bmN0aW9uICh3ZWVrKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZGF0ZSA9IF90aGlzJHByb3BzNy5kYXRlLFxuICAgICAgICAgIHJlbmRlckRheSA9IF90aGlzJHByb3BzNy5yZW5kZXJEYXksXG4gICAgICAgICAgdXRpbHMgPSBfdGhpcyRwcm9wczcudXRpbHM7XG4gICAgICB2YXIgbm93ID0gdXRpbHMuZGF0ZSgpO1xuICAgICAgdmFyIHNlbGVjdGVkRGF0ZSA9IHV0aWxzLnN0YXJ0T2ZEYXkoZGF0ZSk7XG4gICAgICB2YXIgY3VycmVudE1vbnRoTnVtYmVyID0gdXRpbHMuZ2V0TW9udGgoX3RoaXMuc3RhdGUuY3VycmVudE1vbnRoKTtcbiAgICAgIHJldHVybiB3ZWVrLm1hcChmdW5jdGlvbiAoZGF5KSB7XG4gICAgICAgIHZhciBkaXNhYmxlZCA9IF90aGlzLnNob3VsZERpc2FibGVEYXRlKGRheSk7XG5cbiAgICAgICAgdmFyIGlzRGF5SW5DdXJyZW50TW9udGggPSB1dGlscy5nZXRNb250aChkYXkpID09PSBjdXJyZW50TW9udGhOdW1iZXI7XG4gICAgICAgIHZhciBkYXlDb21wb25lbnQgPSBjcmVhdGVFbGVtZW50KERheSwge1xuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICBjdXJyZW50OiB1dGlscy5pc1NhbWVEYXkoZGF5LCBub3cpLFxuICAgICAgICAgIGhpZGRlbjogIWlzRGF5SW5DdXJyZW50TW9udGgsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHV0aWxzLmlzU2FtZURheShzZWxlY3RlZERhdGUsIGRheSlcbiAgICAgICAgfSwgdXRpbHMuZ2V0RGF5VGV4dChkYXkpKTtcblxuICAgICAgICBpZiAocmVuZGVyRGF5KSB7XG4gICAgICAgICAgZGF5Q29tcG9uZW50ID0gcmVuZGVyRGF5KGRheSwgc2VsZWN0ZWREYXRlLCBpc0RheUluQ3VycmVudE1vbnRoLCBkYXlDb21wb25lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoRGF5V3JhcHBlciwge1xuICAgICAgICAgIHZhbHVlOiBkYXksXG4gICAgICAgICAga2V5OiBkYXkudG9TdHJpbmcoKSxcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgZGF5SW5DdXJyZW50TW9udGg6IGlzRGF5SW5DdXJyZW50TW9udGgsXG4gICAgICAgICAgb25TZWxlY3Q6IF90aGlzLmhhbmRsZURheVNlbGVjdFxuICAgICAgICB9LCBkYXlDb21wb25lbnQpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDYWxlbmRhciwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM4ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBkYXRlID0gX3RoaXMkcHJvcHM4LmRhdGUsXG4gICAgICAgICAgbWluRGF0ZSA9IF90aGlzJHByb3BzOC5taW5EYXRlLFxuICAgICAgICAgIG1heERhdGUgPSBfdGhpcyRwcm9wczgubWF4RGF0ZSxcbiAgICAgICAgICB1dGlscyA9IF90aGlzJHByb3BzOC51dGlscyxcbiAgICAgICAgICBkaXNhYmxlUGFzdCA9IF90aGlzJHByb3BzOC5kaXNhYmxlUGFzdCxcbiAgICAgICAgICBkaXNhYmxlRnV0dXJlID0gX3RoaXMkcHJvcHM4LmRpc2FibGVGdXR1cmU7XG5cbiAgICAgIGlmICh0aGlzLnNob3VsZERpc2FibGVEYXRlKGRhdGUpKSB7XG4gICAgICAgIHZhciBjbG9zZXN0RW5hYmxlZERhdGUgPSBmaW5kQ2xvc2VzdEVuYWJsZWREYXRlKHtcbiAgICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICAgIHV0aWxzOiB1dGlscyxcbiAgICAgICAgICBtaW5EYXRlOiB1dGlscy5kYXRlKG1pbkRhdGUpLFxuICAgICAgICAgIG1heERhdGU6IHV0aWxzLmRhdGUobWF4RGF0ZSksXG4gICAgICAgICAgZGlzYWJsZVBhc3Q6IEJvb2xlYW4oZGlzYWJsZVBhc3QpLFxuICAgICAgICAgIGRpc2FibGVGdXR1cmU6IEJvb2xlYW4oZGlzYWJsZUZ1dHVyZSksXG4gICAgICAgICAgc2hvdWxkRGlzYWJsZURhdGU6IHRoaXMuc2hvdWxkRGlzYWJsZURhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGFuZGxlRGF5U2VsZWN0KGNsb3Nlc3RFbmFibGVkRGF0ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBjdXJyZW50TW9udGggPSBfdGhpcyRzdGF0ZS5jdXJyZW50TW9udGgsXG4gICAgICAgICAgc2xpZGVEaXJlY3Rpb24gPSBfdGhpcyRzdGF0ZS5zbGlkZURpcmVjdGlvbjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczkgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzZXMgPSBfdGhpcyRwcm9wczkuY2xhc3NlcyxcbiAgICAgICAgICBhbGxvd0tleWJvYXJkQ29udHJvbCA9IF90aGlzJHByb3BzOS5hbGxvd0tleWJvYXJkQ29udHJvbCxcbiAgICAgICAgICBsZWZ0QXJyb3dCdXR0b25Qcm9wcyA9IF90aGlzJHByb3BzOS5sZWZ0QXJyb3dCdXR0b25Qcm9wcyxcbiAgICAgICAgICBsZWZ0QXJyb3dJY29uID0gX3RoaXMkcHJvcHM5LmxlZnRBcnJvd0ljb24sXG4gICAgICAgICAgcmlnaHRBcnJvd0J1dHRvblByb3BzID0gX3RoaXMkcHJvcHM5LnJpZ2h0QXJyb3dCdXR0b25Qcm9wcyxcbiAgICAgICAgICByaWdodEFycm93SWNvbiA9IF90aGlzJHByb3BzOS5yaWdodEFycm93SWNvbixcbiAgICAgICAgICBsb2FkaW5nSW5kaWNhdG9yID0gX3RoaXMkcHJvcHM5LmxvYWRpbmdJbmRpY2F0b3I7XG4gICAgICB2YXIgbG9hZGluZ0VsZW1lbnQgPSBsb2FkaW5nSW5kaWNhdG9yID8gbG9hZGluZ0luZGljYXRvciA6IGNyZWF0ZUVsZW1lbnQoQ2lyY3VsYXJQcm9ncmVzcywgbnVsbCk7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgYWxsb3dLZXlib2FyZENvbnRyb2wgJiYgdGhpcy5jb250ZXh0ICE9PSAnc3RhdGljJyAmJiBjcmVhdGVFbGVtZW50KEtleURvd25MaXN0ZW5lciwge1xuICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93blxuICAgICAgfSksIGNyZWF0ZUVsZW1lbnQoQ2FsZW5kYXJIZWFkZXIsIHtcbiAgICAgICAgY3VycmVudE1vbnRoOiBjdXJyZW50TW9udGgsXG4gICAgICAgIHNsaWRlRGlyZWN0aW9uOiBzbGlkZURpcmVjdGlvbixcbiAgICAgICAgb25Nb250aENoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2VNb250aCxcbiAgICAgICAgbGVmdEFycm93SWNvbjogbGVmdEFycm93SWNvbixcbiAgICAgICAgbGVmdEFycm93QnV0dG9uUHJvcHM6IGxlZnRBcnJvd0J1dHRvblByb3BzLFxuICAgICAgICByaWdodEFycm93SWNvbjogcmlnaHRBcnJvd0ljb24sXG4gICAgICAgIHJpZ2h0QXJyb3dCdXR0b25Qcm9wczogcmlnaHRBcnJvd0J1dHRvblByb3BzLFxuICAgICAgICBkaXNhYmxlUHJldk1vbnRoOiB0aGlzLnNob3VsZERpc2FibGVQcmV2TW9udGgoKSxcbiAgICAgICAgZGlzYWJsZU5leHRNb250aDogdGhpcy5zaG91bGREaXNhYmxlTmV4dE1vbnRoKClcbiAgICAgIH0pLCBjcmVhdGVFbGVtZW50KFNsaWRlVHJhbnNpdGlvbiwge1xuICAgICAgICBzbGlkZURpcmVjdGlvbjogc2xpZGVEaXJlY3Rpb24sXG4gICAgICAgIHRyYW5zS2V5OiBjdXJyZW50TW9udGgudG9TdHJpbmcoKSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRyYW5zaXRpb25Db250YWluZXJcbiAgICAgIH0sIGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIHRoaXMuc3RhdGUubG9hZGluZ1F1ZXVlID4gMCAmJiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnByb2dyZXNzQ29udGFpbmVyXG4gICAgICB9LCBsb2FkaW5nRWxlbWVudCkgfHwgY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB0aGlzLnJlbmRlcldlZWtzKCkpKSkpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBzdGF0ZSkge1xuICAgICAgdmFyIHV0aWxzID0gbmV4dFByb3BzLnV0aWxzLFxuICAgICAgICAgIG5leHREYXRlID0gbmV4dFByb3BzLmRhdGU7XG5cbiAgICAgIGlmICghdXRpbHMuaXNFcXVhbChuZXh0RGF0ZSwgc3RhdGUubGFzdERhdGUpKSB7XG4gICAgICAgIHZhciBuZXh0TW9udGggPSB1dGlscy5nZXRNb250aChuZXh0RGF0ZSk7XG4gICAgICAgIHZhciBsYXN0RGF0ZSA9IHN0YXRlLmxhc3REYXRlIHx8IG5leHREYXRlO1xuICAgICAgICB2YXIgbGFzdE1vbnRoID0gdXRpbHMuZ2V0TW9udGgobGFzdERhdGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxhc3REYXRlOiBuZXh0RGF0ZSxcbiAgICAgICAgICBjdXJyZW50TW9udGg6IG5leHRQcm9wcy51dGlscy5zdGFydE9mTW9udGgobmV4dERhdGUpLFxuICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgIHNsaWRlRGlyZWN0aW9uOiBuZXh0TW9udGggPT09IGxhc3RNb250aCA/IHN0YXRlLnNsaWRlRGlyZWN0aW9uIDogdXRpbHMuaXNBZnRlckRheShuZXh0RGF0ZSwgbGFzdERhdGUpID8gJ2xlZnQnIDogJ3JpZ2h0J1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2FsZW5kYXI7XG59KENvbXBvbmVudCk7XG5DYWxlbmRhci5jb250ZXh0VHlwZSA9IFZhcmlhbnRDb250ZXh0O1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gQ2FsZW5kYXIucHJvcFR5cGVzID0ge1xuICByZW5kZXJEYXk6IGZ1bmMsXG4gIHNob3VsZERpc2FibGVEYXRlOiBmdW5jLFxuICBhbGxvd0tleWJvYXJkQ29udHJvbDogYm9vbFxufSA6IHZvaWQgMDtcbkNhbGVuZGFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgbWluRGF0ZTogbmV3IERhdGUoJzE5MDAtMDEtMDEnKSxcbiAgbWF4RGF0ZTogbmV3IERhdGUoJzIxMDAtMDEtMDEnKSxcbiAgZGlzYWJsZVBhc3Q6IGZhbHNlLFxuICBkaXNhYmxlRnV0dXJlOiBmYWxzZSxcbiAgYWxsb3dLZXlib2FyZENvbnRyb2w6IHRydWVcbn07XG52YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgdHJhbnNpdGlvbkNvbnRhaW5lcjoge1xuICAgICAgbWluSGVpZ2h0OiAzNiAqIDYsXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS41KVxuICAgIH0sXG4gICAgcHJvZ3Jlc3NDb250YWluZXI6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgfSxcbiAgICB3ZWVrOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICB9XG4gIH07XG59O1xudmFyIENhbGVuZGFyJDEgPSB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpUGlja2Vyc0NhbGVuZGFyJyxcbiAgd2l0aFRoZW1lOiB0cnVlXG59KSh3aXRoVXRpbHMoKShDYWxlbmRhcikpO1xuXG5leHBvcnQgeyBDYWxlbmRhciBhcyBDLCBDYWxlbmRhciQxIGFzIGEsIGlzWWVhckFuZE1vbnRoVmlld3MgYXMgYiwgZ2V0Rm9ybWF0QnlWaWV3cyBhcyBnLCBpc1llYXJPbmx5VmlldyBhcyBpLCBzdHlsZXMgYXMgcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2FsZW5kYXItMTFhZTYxZjYuanMubWFwXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBvbmVPZiwgbnVtYmVyLCBmdW5jLCBhcnJheU9mLCBub2RlLCBib29sLCBhbnkgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuXG52YXIgQ2xvY2tUeXBlO1xuXG4oZnVuY3Rpb24gKENsb2NrVHlwZSkge1xuICBDbG9ja1R5cGVbXCJIT1VSU1wiXSA9IFwiaG91cnNcIjtcbiAgQ2xvY2tUeXBlW1wiTUlOVVRFU1wiXSA9IFwibWludXRlc1wiO1xuICBDbG9ja1R5cGVbXCJTRUNPTkRTXCJdID0gXCJzZWNvbmRzXCI7XG59KShDbG9ja1R5cGUgfHwgKENsb2NrVHlwZSA9IHt9KSk7XG5cbnZhciBDbG9ja1R5cGUkMSA9IENsb2NrVHlwZTtcblxudmFyIENsb2NrUG9pbnRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ2xvY2tQb2ludGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDbG9ja1BvaW50ZXIoKSB7XG4gICAgdmFyIF9nZXRQcm90b3R5cGVPZjI7XG5cbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xvY2tQb2ludGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YyID0gX2dldFByb3RvdHlwZU9mKENsb2NrUG9pbnRlcikpLmNhbGwuYXBwbHkoX2dldFByb3RvdHlwZU9mMiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdG9BbmltYXRlVHJhbnNmb3JtOiBmYWxzZSxcbiAgICAgIHByZXZpb3VzVHlwZTogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIF90aGlzLmdldEFuZ2xlU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzLnZhbHVlLFxuICAgICAgICAgIGlzSW5uZXIgPSBfdGhpcyRwcm9wcy5pc0lubmVyLFxuICAgICAgICAgIHR5cGUgPSBfdGhpcyRwcm9wcy50eXBlO1xuICAgICAgdmFyIG1heCA9IHR5cGUgPT09IENsb2NrVHlwZSQxLkhPVVJTID8gMTIgOiA2MDtcbiAgICAgIHZhciBhbmdsZSA9IDM2MCAvIG1heCAqIHZhbHVlO1xuXG4gICAgICBpZiAodHlwZSA9PT0gQ2xvY2tUeXBlJDEuSE9VUlMgJiYgdmFsdWUgPiAxMikge1xuICAgICAgICBhbmdsZSAtPSAzNjA7IC8vIHJvdW5kIHVwIGFuZ2xlIHRvIG1heCAzNjAgZGVncmVlc1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IGlzSW5uZXIgPyAnMjYlJyA6ICc0MCUnLFxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlWihcIi5jb25jYXQoYW5nbGUsIFwiZGVnKVwiKVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENsb2NrUG9pbnRlciwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzZXMgPSBfdGhpcyRwcm9wczIuY2xhc3NlcyxcbiAgICAgICAgICBoYXNTZWxlY3RlZCA9IF90aGlzJHByb3BzMi5oYXNTZWxlY3RlZDtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHRoaXMuZ2V0QW5nbGVTdHlsZSgpLFxuICAgICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5wb2ludGVyLCB0aGlzLnN0YXRlLnRvQW5pbWF0ZVRyYW5zZm9ybSAmJiBjbGFzc2VzLmFuaW1hdGVUcmFuc2Zvcm0pXG4gICAgICB9LCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMudGh1bWIsIGhhc1NlbGVjdGVkICYmIGNsYXNzZXMubm9Qb2ludClcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2xvY2tQb2ludGVyO1xufShDb21wb25lbnQpO1xuXG5DbG9ja1BvaW50ZXIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gKG5leHRQcm9wcywgc3RhdGUpIHtcbiAgaWYgKG5leHRQcm9wcy50eXBlICE9PSBzdGF0ZS5wcmV2aW91c1R5cGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9BbmltYXRlVHJhbnNmb3JtOiB0cnVlLFxuICAgICAgcHJldmlvdXNUeXBlOiBuZXh0UHJvcHMudHlwZVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvQW5pbWF0ZVRyYW5zZm9ybTogZmFsc2UsXG4gICAgcHJldmlvdXNUeXBlOiBuZXh0UHJvcHMudHlwZVxuICB9O1xufTtcblxudmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4gY3JlYXRlU3R5bGVzKHtcbiAgICBwb2ludGVyOiB7XG4gICAgICB3aWR0aDogMixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6ICdjYWxjKDUwJSAtIDFweCknLFxuICAgICAgYm90dG9tOiAnNTAlJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciBib3R0b20gMHB4J1xuICAgIH0sXG4gICAgYW5pbWF0ZVRyYW5zZm9ybToge1xuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsndHJhbnNmb3JtJywgJ2hlaWdodCddKVxuICAgIH0sXG4gICAgdGh1bWI6IHtcbiAgICAgIHdpZHRoOiA0LFxuICAgICAgaGVpZ2h0OiA0LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogLTIxLFxuICAgICAgbGVmdDogLTE1LFxuICAgICAgYm9yZGVyOiBcIjE0cHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluKSxcbiAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94J1xuICAgIH0sXG4gICAgbm9Qb2ludDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgIH1cbiAgfSk7XG59O1xudmFyIENsb2NrUG9pbnRlciQxID0gd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVBpY2tlcnNDbG9ja1BvaW50ZXInXG59KShDbG9ja1BvaW50ZXIpO1xuXG52YXIgY2VudGVyID0ge1xuICB4OiAyNjAgLyAyLFxuICB5OiAyNjAgLyAyXG59O1xudmFyIGJhc2VQb2ludCA9IHtcbiAgeDogY2VudGVyLngsXG4gIHk6IDBcbn07XG52YXIgY3ggPSBiYXNlUG9pbnQueCAtIGNlbnRlci54O1xudmFyIGN5ID0gYmFzZVBvaW50LnkgLSBjZW50ZXIueTtcblxudmFyIHJhZDJkZWcgPSBmdW5jdGlvbiByYWQyZGVnKHJhZCkge1xuICByZXR1cm4gcmFkICogNTcuMjk1Nzc5NTEzMDgyMzI7XG59O1xuXG52YXIgZ2V0QW5nbGVWYWx1ZSA9IGZ1bmN0aW9uIGdldEFuZ2xlVmFsdWUoc3RlcCwgb2Zmc2V0WCwgb2Zmc2V0WSkge1xuICB2YXIgeCA9IG9mZnNldFggLSBjZW50ZXIueDtcbiAgdmFyIHkgPSBvZmZzZXRZIC0gY2VudGVyLnk7XG4gIHZhciBhdGFuID0gTWF0aC5hdGFuMihjeCwgY3kpIC0gTWF0aC5hdGFuMih4LCB5KTtcbiAgdmFyIGRlZyA9IHJhZDJkZWcoYXRhbik7XG4gIGRlZyA9IE1hdGgucm91bmQoZGVnIC8gc3RlcCkgKiBzdGVwO1xuICBkZWcgJT0gMzYwO1xuICB2YXIgdmFsdWUgPSBNYXRoLmZsb29yKGRlZyAvIHN0ZXApIHx8IDA7XG4gIHZhciBkZWx0YSA9IE1hdGgucG93KHgsIDIpICsgTWF0aC5wb3coeSwgMik7XG4gIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChkZWx0YSk7XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGRpc3RhbmNlOiBkaXN0YW5jZVxuICB9O1xufTtcblxudmFyIGdldEhvdXJzID0gZnVuY3Rpb24gZ2V0SG91cnMob2Zmc2V0WCwgb2Zmc2V0WSwgYW1wbSkge1xuICB2YXIgX2dldEFuZ2xlVmFsdWUgPSBnZXRBbmdsZVZhbHVlKDMwLCBvZmZzZXRYLCBvZmZzZXRZKSxcbiAgICAgIHZhbHVlID0gX2dldEFuZ2xlVmFsdWUudmFsdWUsXG4gICAgICBkaXN0YW5jZSA9IF9nZXRBbmdsZVZhbHVlLmRpc3RhbmNlO1xuXG4gIHZhbHVlID0gdmFsdWUgfHwgMTI7XG5cbiAgaWYgKCFhbXBtKSB7XG4gICAgaWYgKGRpc3RhbmNlIDwgOTApIHtcbiAgICAgIHZhbHVlICs9IDEyO1xuICAgICAgdmFsdWUgJT0gMjQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhbHVlICU9IDEyO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcbnZhciBnZXRNaW51dGVzID0gZnVuY3Rpb24gZ2V0TWludXRlcyhvZmZzZXRYLCBvZmZzZXRZKSB7XG4gIHZhciBzdGVwID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAxO1xuICB2YXIgYW5nbGVTdGVwID0gc3RlcCAqIDY7XG5cbiAgdmFyIF9nZXRBbmdsZVZhbHVlMiA9IGdldEFuZ2xlVmFsdWUoYW5nbGVTdGVwLCBvZmZzZXRYLCBvZmZzZXRZKSxcbiAgICAgIHZhbHVlID0gX2dldEFuZ2xlVmFsdWUyLnZhbHVlO1xuXG4gIHZhbHVlID0gdmFsdWUgKiBzdGVwICUgNjA7XG4gIHJldHVybiB2YWx1ZTtcbn07XG52YXIgZ2V0TWVyaWRpZW0gPSBmdW5jdGlvbiBnZXRNZXJpZGllbShkYXRlLCB1dGlscykge1xuICByZXR1cm4gdXRpbHMuZ2V0SG91cnMoZGF0ZSkgPj0gMTIgPyAncG0nIDogJ2FtJztcbn07XG52YXIgY29udmVydFRvTWVyaWRpZW0gPSBmdW5jdGlvbiBjb252ZXJ0VG9NZXJpZGllbSh0aW1lLCBtZXJpZGllbSwgYW1wbSwgdXRpbHMpIHtcbiAgaWYgKGFtcG0pIHtcbiAgICB2YXIgY3VycmVudE1lcmlkaWVtID0gdXRpbHMuZ2V0SG91cnModGltZSkgPj0gMTIgPyAncG0nIDogJ2FtJztcblxuICAgIGlmIChjdXJyZW50TWVyaWRpZW0gIT09IG1lcmlkaWVtKSB7XG4gICAgICB2YXIgaG91cnMgPSBtZXJpZGllbSA9PT0gJ2FtJyA/IHV0aWxzLmdldEhvdXJzKHRpbWUpIC0gMTIgOiB1dGlscy5nZXRIb3Vycyh0aW1lKSArIDEyO1xuICAgICAgcmV0dXJuIHV0aWxzLnNldEhvdXJzKHRpbWUsIGhvdXJzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGltZTtcbn07XG5cbnZhciBDbG9jayA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ2xvY2ssIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENsb2NrKCkge1xuICAgIHZhciBfZ2V0UHJvdG90eXBlT2YyO1xuXG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENsb2NrKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YyID0gX2dldFByb3RvdHlwZU9mKENsb2NrKSkuY2FsbC5hcHBseShfZ2V0UHJvdG90eXBlT2YyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG4gICAgX3RoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcblxuICAgIF90aGlzLmhhbmRsZVRvdWNoTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBfdGhpcy5pc01vdmluZyA9IHRydWU7XG5cbiAgICAgIF90aGlzLnNldFRpbWUoZSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVRvdWNoRW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChfdGhpcy5pc01vdmluZykge1xuICAgICAgICBfdGhpcy5zZXRUaW1lKGUsIHRydWUpO1xuXG4gICAgICAgIF90aGlzLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZU1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gTW91c2VFdmVudC53aGljaCBpcyBkZXByZWNhdGVkLCBidXQgTW91c2VFdmVudC5idXR0b25zIGlzIG5vdCBzdXBwb3J0ZWQgaW4gU2FmYXJpXG5cbiAgICAgIHZhciBpc0J1dHRvblByZXNzZWQgPSB0eXBlb2YgZS5idXR0b25zID09PSAndW5kZWZpbmVkJyA/IGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDEgOiBlLmJ1dHRvbnMgPT09IDE7XG5cbiAgICAgIGlmIChpc0J1dHRvblByZXNzZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0VGltZShlLm5hdGl2ZUV2ZW50LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZU1vdXNlVXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKF90aGlzLmlzTW92aW5nKSB7XG4gICAgICAgIF90aGlzLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFRpbWUoZS5uYXRpdmVFdmVudCwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhc1NlbGVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdHlwZSA9IF90aGlzJHByb3BzLnR5cGUsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wcy52YWx1ZTtcblxuICAgICAgaWYgKHR5cGUgPT09IENsb2NrVHlwZSQxLkhPVVJTKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWUgJSA1ID09PSAwO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2xvY2ssIFt7XG4gICAga2V5OiBcInNldFRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGltZShlKSB7XG4gICAgICB2YXIgaXNGaW5pc2ggPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgICAgdmFyIG9mZnNldFggPSBlLm9mZnNldFgsXG4gICAgICAgICAgb2Zmc2V0WSA9IGUub2Zmc2V0WTtcblxuICAgICAgaWYgKHR5cGVvZiBvZmZzZXRYID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBvZmZzZXRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICBvZmZzZXRZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMudHlwZSA9PT0gQ2xvY2tUeXBlJDEuU0VDT05EUyB8fCB0aGlzLnByb3BzLnR5cGUgPT09IENsb2NrVHlwZSQxLk1JTlVURVMgPyBnZXRNaW51dGVzKG9mZnNldFgsIG9mZnNldFksIHRoaXMucHJvcHMubWludXRlc1N0ZXApIDogZ2V0SG91cnMob2Zmc2V0WCwgb2Zmc2V0WSwgQm9vbGVhbih0aGlzLnByb3BzLmFtcG0pKTtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUsIGlzRmluaXNoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzZXMgPSBfdGhpcyRwcm9wczIuY2xhc3NlcyxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzMi52YWx1ZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICB0eXBlID0gX3RoaXMkcHJvcHMyLnR5cGUsXG4gICAgICAgICAgYW1wbSA9IF90aGlzJHByb3BzMi5hbXBtO1xuICAgICAgdmFyIGlzUG9pbnRlcklubmVyID0gIWFtcG0gJiYgdHlwZSA9PT0gQ2xvY2tUeXBlJDEuSE9VUlMgJiYgKHZhbHVlIDwgMSB8fCB2YWx1ZSA+IDEyKTtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmNvbnRhaW5lclxuICAgICAgfSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5jbG9ja1xuICAgICAgfSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHJvbGU6IFwibWVudVwiLFxuICAgICAgICB0YWJJbmRleDogLTEsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5zcXVhcmVNYXNrLFxuICAgICAgICBvblRvdWNoTW92ZTogdGhpcy5oYW5kbGVUb3VjaE1vdmUsXG4gICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmQsXG4gICAgICAgIG9uTW91c2VVcDogdGhpcy5oYW5kbGVNb3VzZVVwLFxuICAgICAgICBvbk1vdXNlTW92ZTogdGhpcy5oYW5kbGVNb3ZlXG4gICAgICB9KSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5waW5cbiAgICAgIH0pLCBjcmVhdGVFbGVtZW50KENsb2NrUG9pbnRlciQxLCB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaXNJbm5lcjogaXNQb2ludGVySW5uZXIsXG4gICAgICAgIGhhc1NlbGVjdGVkOiB0aGlzLmhhc1NlbGVjdGVkKClcbiAgICAgIH0pLCBjaGlsZHJlbikpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDbG9jaztcbn0oQ29tcG9uZW50KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IENsb2NrLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogb25lT2YoT2JqZWN0LmtleXMoQ2xvY2tUeXBlJDEpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIENsb2NrVHlwZSQxW2tleV07XG4gIH0pKS5pc1JlcXVpcmVkLFxuICB2YWx1ZTogbnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBmdW5jLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBhcnJheU9mKG5vZGUpLmlzUmVxdWlyZWQsXG4gIGFtcG06IGJvb2wsXG4gIG1pbnV0ZXNTdGVwOiBudW1iZXIsXG4gIGlubmVyUmVmOiBhbnlcbn0gOiB2b2lkIDA7XG5DbG9jay5kZWZhdWx0UHJvcHMgPSB7XG4gIGFtcG06IGZhbHNlLFxuICBtaW51dGVzU3RlcDogMVxufTtcbnZhciBzdHlsZXMkMSA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4gY3JlYXRlU3R5bGVzKHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXG4gICAgICBtYXJnaW46IFwiXCIuY29uY2F0KHRoZW1lLnNwYWNpbmcoMiksIFwicHggMCBcIikuY29uY2F0KHRoZW1lLnNwYWNpbmcoMSksIFwicHhcIilcbiAgICB9LFxuICAgIGNsb2NrOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLC4wNyknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGhlaWdodDogMjYwLFxuICAgICAgd2lkdGg6IDI2MCxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSxcbiAgICBzcXVhcmVNYXNrOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIHRvdWNoQWN0aW9uczogJ25vbmUnLFxuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBjdXJzb3I6ICdtb3ZlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgcGluOiB7XG4gICAgICB3aWR0aDogNixcbiAgICAgIGhlaWdodDogNixcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6ICc1MCUnLFxuICAgICAgbGVmdDogJzUwJScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknXG4gICAgfVxuICB9KTtcbn07XG52YXIgQ2xvY2skMSA9IHdpdGhTdHlsZXMoc3R5bGVzJDEsIHtcbiAgbmFtZTogJ011aVBpY2tlcnNDbG9jaydcbn0pKENsb2NrKTtcblxuZXhwb3J0IHsgQ2xvY2sgYXMgQywgQ2xvY2skMSBhcyBhLCBDbG9ja1R5cGUkMSBhcyBiLCBjb252ZXJ0VG9NZXJpZGllbSBhcyBjLCBnZXRNZXJpZGllbSBhcyBnLCBzdHlsZXMkMSBhcyBzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DbG9jay00OGZkZTk3NS5qcy5tYXBcbiIsImltcG9ydCB7IHVzZU1lbW8sIGNyZWF0ZUVsZW1lbnQsIG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBvYmplY3QsIGZ1bmMsIGJvb2wsIG51bWJlciwgb25lT2YgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHUgYXMgdXNlVXRpbHMgfSBmcm9tICcuL3VzZVV0aWxzLWNmYjk2YWM5LmpzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmltcG9ydCB7IGIgYXMgQ2xvY2tUeXBlLCBnIGFzIGdldE1lcmlkaWVtLCBjIGFzIGNvbnZlcnRUb01lcmlkaWVtLCBhIGFzIENsb2NrIH0gZnJvbSAnLi9DbG9jay00OGZkZTk3NS5qcyc7XG5cbnZhciBwb3NpdGlvbnMgPSB7XG4gIDA6IFswLCA0MF0sXG4gIDE6IFs1NSwgMTkuNl0sXG4gIDI6IFs5NC40LCA1OS41XSxcbiAgMzogWzEwOSwgMTE0XSxcbiAgNDogWzk0LjQsIDE2OC41XSxcbiAgNTogWzU0LjUsIDIwOC40XSxcbiAgNjogWzAsIDIyM10sXG4gIDc6IFstNTQuNSwgMjA4LjRdLFxuICA4OiBbLTk0LjQsIDE2OC41XSxcbiAgOTogWy0xMDksIDExNF0sXG4gIDEwOiBbLTk0LjQsIDU5LjVdLFxuICAxMTogWy01NC41LCAxOS42XSxcbiAgMTI6IFswLCA1XSxcbiAgMTM6IFszNi45LCA0OS45XSxcbiAgMTQ6IFs2NCwgNzddLFxuICAxNTogWzc0LCAxMTRdLFxuICAxNjogWzY0LCAxNTFdLFxuICAxNzogWzM3LCAxNzhdLFxuICAxODogWzAsIDE4OF0sXG4gIDE5OiBbLTM3LCAxNzhdLFxuICAyMDogWy02NCwgMTUxXSxcbiAgMjE6IFstNzQsIDExNF0sXG4gIDIyOiBbLTY0LCA3N10sXG4gIDIzOiBbLTM3LCA1MF1cbn07XG52YXIgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHtcbiAgdmFyIHNpemUgPSB0aGVtZS5zcGFjaW5nKDQpO1xuICByZXR1cm4ge1xuICAgIGNsb2NrTnVtYmVyOiB7XG4gICAgICB3aWR0aDogc2l6ZSxcbiAgICAgIGhlaWdodDogMzIsXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6IFwiY2FsYygoMTAwJSAtIFwiLmNvbmNhdCh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicgPyBcIlwiLmNvbmNhdChzaXplLCBcInB4XCIpIDogc2l6ZSwgXCIpIC8gMilcIiksXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5IDogdGhlbWUucGFsZXR0ZS50ZXh0LmhpbnRcbiAgICB9LFxuICAgIGNsb2NrTnVtYmVyU2VsZWN0ZWQ6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0XG4gICAgfVxuICB9O1xufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc0Nsb2NrTnVtYmVyJ1xufSk7XG52YXIgQ2xvY2tOdW1iZXIgPSBmdW5jdGlvbiBDbG9ja051bWJlcihfcmVmKSB7XG4gIHZhciBzZWxlY3RlZCA9IF9yZWYuc2VsZWN0ZWQsXG4gICAgICBsYWJlbCA9IF9yZWYubGFiZWwsXG4gICAgICBpbmRleCA9IF9yZWYuaW5kZXgsXG4gICAgICBpc0lubmVyID0gX3JlZi5pc0lubmVyO1xuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICB2YXIgY2xhc3NOYW1lID0gY2xzeChjbGFzc2VzLmNsb2NrTnVtYmVyLCBzZWxlY3RlZCAmJiBjbGFzc2VzLmNsb2NrTnVtYmVyU2VsZWN0ZWQpO1xuICB2YXIgdHJhbnNmb3JtU3R5bGUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiLmNvbmNhdChwb3NpdGlvblswXSwgXCJweCwgXCIpLmNvbmNhdChwb3NpdGlvblsxXSwgXCJweFwiKVxuICAgIH07XG4gIH0sIFtpbmRleF0pO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7XG4gICAgY29tcG9uZW50OiBcInNwYW5cIixcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICB2YXJpYW50OiBpc0lubmVyID8gJ2JvZHkyJyA6ICdib2R5MScsXG4gICAgc3R5bGU6IHRyYW5zZm9ybVN0eWxlLFxuICAgIGNoaWxkcmVuOiBsYWJlbFxuICB9KTtcbn07XG5cbnZhciBnZXRIb3VyTnVtYmVycyA9IGZ1bmN0aW9uIGdldEhvdXJOdW1iZXJzKF9yZWYpIHtcbiAgdmFyIGFtcG0gPSBfcmVmLmFtcG0sXG4gICAgICB1dGlscyA9IF9yZWYudXRpbHMsXG4gICAgICBkYXRlID0gX3JlZi5kYXRlO1xuICB2YXIgY3VycmVudEhvdXJzID0gdXRpbHMuZ2V0SG91cnMoZGF0ZSk7XG4gIHZhciBob3VyTnVtYmVycyA9IFtdO1xuICB2YXIgc3RhcnRIb3VyID0gYW1wbSA/IDEgOiAwO1xuICB2YXIgZW5kSG91ciA9IGFtcG0gPyAxMiA6IDIzO1xuXG4gIHZhciBpc1NlbGVjdGVkID0gZnVuY3Rpb24gaXNTZWxlY3RlZChob3VyKSB7XG4gICAgaWYgKGFtcG0pIHtcbiAgICAgIGlmIChob3VyID09PSAxMikge1xuICAgICAgICByZXR1cm4gY3VycmVudEhvdXJzID09PSAxMiB8fCBjdXJyZW50SG91cnMgPT09IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjdXJyZW50SG91cnMgPT09IGhvdXIgfHwgY3VycmVudEhvdXJzIC0gMTIgPT09IGhvdXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRIb3VycyA9PT0gaG91cjtcbiAgfTtcblxuICBmb3IgKHZhciBob3VyID0gc3RhcnRIb3VyOyBob3VyIDw9IGVuZEhvdXI7IGhvdXIgKz0gMSkge1xuICAgIHZhciBsYWJlbCA9IGhvdXIudG9TdHJpbmcoKTtcblxuICAgIGlmIChob3VyID09PSAwKSB7XG4gICAgICBsYWJlbCA9ICcwMCc7XG4gICAgfVxuXG4gICAgdmFyIHByb3BzID0ge1xuICAgICAgaW5kZXg6IGhvdXIsXG4gICAgICBsYWJlbDogdXRpbHMuZm9ybWF0TnVtYmVyKGxhYmVsKSxcbiAgICAgIHNlbGVjdGVkOiBpc1NlbGVjdGVkKGhvdXIpLFxuICAgICAgaXNJbm5lcjogIWFtcG0gJiYgKGhvdXIgPT09IDAgfHwgaG91ciA+IDEyKVxuICAgIH07XG4gICAgaG91ck51bWJlcnMucHVzaChjcmVhdGVFbGVtZW50KENsb2NrTnVtYmVyLCBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IGhvdXJcbiAgICB9LCBwcm9wcykpKTtcbiAgfVxuXG4gIHJldHVybiBob3VyTnVtYmVycztcbn07XG52YXIgZ2V0TWludXRlc051bWJlcnMgPSBmdW5jdGlvbiBnZXRNaW51dGVzTnVtYmVycyhfcmVmMikge1xuICB2YXIgdmFsdWUgPSBfcmVmMi52YWx1ZSxcbiAgICAgIHV0aWxzID0gX3JlZjIudXRpbHM7XG4gIHZhciBmID0gdXRpbHMuZm9ybWF0TnVtYmVyO1xuICByZXR1cm4gW2NyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignMDAnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDAsXG4gICAgaW5kZXg6IDEyLFxuICAgIGtleTogMTJcbiAgfSksIGNyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignMDUnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDUsXG4gICAgaW5kZXg6IDEsXG4gICAga2V5OiAxXG4gIH0pLCBjcmVhdGVFbGVtZW50KENsb2NrTnVtYmVyLCB7XG4gICAgbGFiZWw6IGYoJzEwJyksXG4gICAgc2VsZWN0ZWQ6IHZhbHVlID09PSAxMCxcbiAgICBpbmRleDogMixcbiAgICBrZXk6IDJcbiAgfSksIGNyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignMTUnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDE1LFxuICAgIGluZGV4OiAzLFxuICAgIGtleTogM1xuICB9KSwgY3JlYXRlRWxlbWVudChDbG9ja051bWJlciwge1xuICAgIGxhYmVsOiBmKCcyMCcpLFxuICAgIHNlbGVjdGVkOiB2YWx1ZSA9PT0gMjAsXG4gICAgaW5kZXg6IDQsXG4gICAga2V5OiA0XG4gIH0pLCBjcmVhdGVFbGVtZW50KENsb2NrTnVtYmVyLCB7XG4gICAgbGFiZWw6IGYoJzI1JyksXG4gICAgc2VsZWN0ZWQ6IHZhbHVlID09PSAyNSxcbiAgICBpbmRleDogNSxcbiAgICBrZXk6IDVcbiAgfSksIGNyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignMzAnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDMwLFxuICAgIGluZGV4OiA2LFxuICAgIGtleTogNlxuICB9KSwgY3JlYXRlRWxlbWVudChDbG9ja051bWJlciwge1xuICAgIGxhYmVsOiBmKCczNScpLFxuICAgIHNlbGVjdGVkOiB2YWx1ZSA9PT0gMzUsXG4gICAgaW5kZXg6IDcsXG4gICAga2V5OiA3XG4gIH0pLCBjcmVhdGVFbGVtZW50KENsb2NrTnVtYmVyLCB7XG4gICAgbGFiZWw6IGYoJzQwJyksXG4gICAgc2VsZWN0ZWQ6IHZhbHVlID09PSA0MCxcbiAgICBpbmRleDogOCxcbiAgICBrZXk6IDhcbiAgfSksIGNyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignNDUnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDQ1LFxuICAgIGluZGV4OiA5LFxuICAgIGtleTogOVxuICB9KSwgY3JlYXRlRWxlbWVudChDbG9ja051bWJlciwge1xuICAgIGxhYmVsOiBmKCc1MCcpLFxuICAgIHNlbGVjdGVkOiB2YWx1ZSA9PT0gNTAsXG4gICAgaW5kZXg6IDEwLFxuICAgIGtleTogMTBcbiAgfSksIGNyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignNTUnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDU1LFxuICAgIGluZGV4OiAxMSxcbiAgICBrZXk6IDExXG4gIH0pXTtcbn07XG5cbnZhciBDbG9ja1ZpZXcgPSBmdW5jdGlvbiBDbG9ja1ZpZXcoX3JlZikge1xuICB2YXIgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIG9uSG91ckNoYW5nZSA9IF9yZWYub25Ib3VyQ2hhbmdlLFxuICAgICAgb25NaW51dGVzQ2hhbmdlID0gX3JlZi5vbk1pbnV0ZXNDaGFuZ2UsXG4gICAgICBvblNlY29uZHNDaGFuZ2UgPSBfcmVmLm9uU2Vjb25kc0NoYW5nZSxcbiAgICAgIGFtcG0gPSBfcmVmLmFtcG0sXG4gICAgICBkYXRlID0gX3JlZi5kYXRlLFxuICAgICAgbWludXRlc1N0ZXAgPSBfcmVmLm1pbnV0ZXNTdGVwO1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICB2YXIgdmlld1Byb3BzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIENsb2NrVHlwZS5IT1VSUzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdXRpbHMuZ2V0SG91cnMoZGF0ZSksXG4gICAgICAgICAgY2hpbGRyZW46IGdldEhvdXJOdW1iZXJzKHtcbiAgICAgICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgICAgICB1dGlsczogdXRpbHMsXG4gICAgICAgICAgICBhbXBtOiBCb29sZWFuKGFtcG0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlLCBpc0ZpbmlzaCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRNZXJpZGllbSA9IGdldE1lcmlkaWVtKGRhdGUsIHV0aWxzKTtcbiAgICAgICAgICAgIHZhciB1cGRhdGVkVGltZVdpdGhNZXJpZGllbSA9IGNvbnZlcnRUb01lcmlkaWVtKHV0aWxzLnNldEhvdXJzKGRhdGUsIHZhbHVlKSwgY3VycmVudE1lcmlkaWVtLCBCb29sZWFuKGFtcG0pLCB1dGlscyk7XG4gICAgICAgICAgICBvbkhvdXJDaGFuZ2UodXBkYXRlZFRpbWVXaXRoTWVyaWRpZW0sIGlzRmluaXNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgQ2xvY2tUeXBlLk1JTlVURVM6XG4gICAgICAgIHZhciBtaW51dGVzVmFsdWUgPSB1dGlscy5nZXRNaW51dGVzKGRhdGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBtaW51dGVzVmFsdWUsXG4gICAgICAgICAgY2hpbGRyZW46IGdldE1pbnV0ZXNOdW1iZXJzKHtcbiAgICAgICAgICAgIHZhbHVlOiBtaW51dGVzVmFsdWUsXG4gICAgICAgICAgICB1dGlsczogdXRpbHNcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUsIGlzRmluaXNoKSB7XG4gICAgICAgICAgICB2YXIgdXBkYXRlZFRpbWUgPSB1dGlscy5zZXRNaW51dGVzKGRhdGUsIHZhbHVlKTtcbiAgICAgICAgICAgIG9uTWludXRlc0NoYW5nZSh1cGRhdGVkVGltZSwgaXNGaW5pc2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgY2FzZSBDbG9ja1R5cGUuU0VDT05EUzpcbiAgICAgICAgdmFyIHNlY29uZHNWYWx1ZSA9IHV0aWxzLmdldFNlY29uZHMoZGF0ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHNlY29uZHNWYWx1ZSxcbiAgICAgICAgICBjaGlsZHJlbjogZ2V0TWludXRlc051bWJlcnMoe1xuICAgICAgICAgICAgdmFsdWU6IHNlY29uZHNWYWx1ZSxcbiAgICAgICAgICAgIHV0aWxzOiB1dGlsc1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSwgaXNGaW5pc2gpIHtcbiAgICAgICAgICAgIHZhciB1cGRhdGVkVGltZSA9IHV0aWxzLnNldFNlY29uZHMoZGF0ZSwgdmFsdWUpO1xuICAgICAgICAgICAgb25TZWNvbmRzQ2hhbmdlKHVwZGF0ZWRUaW1lLCBpc0ZpbmlzaCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgdGhlIHR5cGUgZm9yIFRpbWVQaWNrZXJWaWV3Jyk7XG4gICAgfVxuICB9LCBbYW1wbSwgZGF0ZSwgb25Ib3VyQ2hhbmdlLCBvbk1pbnV0ZXNDaGFuZ2UsIG9uU2Vjb25kc0NoYW5nZSwgdHlwZSwgdXRpbHNdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoQ2xvY2ssIF9leHRlbmRzKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGFtcG06IGFtcG0sXG4gICAgbWludXRlc1N0ZXA6IG1pbnV0ZXNTdGVwXG4gIH0sIHZpZXdQcm9wcykpO1xufTtcbkNsb2NrVmlldy5kaXNwbGF5TmFtZSA9ICdUaW1lUGlja2VyVmlldyc7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBDbG9ja1ZpZXcucHJvcFR5cGVzID0ge1xuICBkYXRlOiBvYmplY3QuaXNSZXF1aXJlZCxcbiAgb25Ib3VyQ2hhbmdlOiBmdW5jLmlzUmVxdWlyZWQsXG4gIG9uTWludXRlc0NoYW5nZTogZnVuYy5pc1JlcXVpcmVkLFxuICBvblNlY29uZHNDaGFuZ2U6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgYW1wbTogYm9vbCxcbiAgbWludXRlc1N0ZXA6IG51bWJlcixcbiAgdHlwZTogb25lT2YoT2JqZWN0LmtleXMoQ2xvY2tUeXBlKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBDbG9ja1R5cGVba2V5XTtcbiAgfSkpLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5DbG9ja1ZpZXcuZGVmYXVsdFByb3BzID0ge1xuICBhbXBtOiB0cnVlLFxuICBtaW51dGVzU3RlcDogMVxufTtcbnZhciBDbG9ja1ZpZXckMSA9IG1lbW8oQ2xvY2tWaWV3KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xvY2tWaWV3JDE7XG5leHBvcnQgeyBDbG9ja1ZpZXcgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNsb2NrVmlldy5qcy5tYXBcbiIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IHsgdXNlTWVtbywgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1IGFzIHVzZVV0aWxzIH0gZnJvbSAnLi91c2VVdGlscy1jZmI5NmFjOS5qcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IFAgYXMgUGlja2VyVG9vbGJhciwgVCBhcyBUb29sYmFyQnV0dG9uLCBtIGFzIG1ha2VQaWNrZXJXaXRoU3RhdGUsIGEgYXMgUHVyZURhdGVJbnB1dCwgdSBhcyB1c2VQaWNrZXJTdGF0ZSwgSyBhcyBLZXlib2FyZERhdGVJbnB1dCwgYiBhcyB1c2VLZXlib2FyZFBpY2tlclN0YXRlIH0gZnJvbSAnLi9tYWtlUGlja2VyV2l0aFN0YXRlLTVhNzljYjhhLmpzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgJy4vV3JhcHBlci0yNDE5NjZkNy5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzWWVhck9ubHlWaWV3LCBiIGFzIGlzWWVhckFuZE1vbnRoVmlld3MsIGcgYXMgZ2V0Rm9ybWF0QnlWaWV3cyB9IGZyb20gJy4vQ2FsZW5kYXItMTFhZTYxZjYuanMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnQnO1xuaW1wb3J0ICdyaWZtJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvbic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXknO1xuaW1wb3J0IHsgZCBhcyBkYXRlUGlja2VyRGVmYXVsdFByb3BzIH0gZnJvbSAnLi9QaWNrZXItY2NkOWJhOTAuanMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0ICcuL0RheS5qcyc7XG5pbXBvcnQgJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyJztcbmltcG9ydCAnLi9DbG9jay00OGZkZTk3NS5qcyc7XG5pbXBvcnQgJy4vQ2xvY2tWaWV3LmpzJztcblxudmFyIHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICB0b29sYmFyOiB7XG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnXG4gIH0sXG4gIHRvb2xiYXJMYW5kc2NhcGU6IHtcbiAgICBwYWRkaW5nOiAxNlxuICB9LFxuICBkYXRlTGFuZHNjYXBlOiB7XG4gICAgbWFyZ2luUmlnaHQ6IDE2XG4gIH1cbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlcnNEYXRlUGlja2VyUm9vdCdcbn0pO1xudmFyIERhdGVQaWNrZXJUb29sYmFyID0gZnVuY3Rpb24gRGF0ZVBpY2tlclRvb2xiYXIoX3JlZikge1xuICB2YXIgZGF0ZSA9IF9yZWYuZGF0ZSxcbiAgICAgIHZpZXdzID0gX3JlZi52aWV3cyxcbiAgICAgIHNldE9wZW5WaWV3ID0gX3JlZi5zZXRPcGVuVmlldyxcbiAgICAgIGlzTGFuZHNjYXBlID0gX3JlZi5pc0xhbmRzY2FwZSxcbiAgICAgIG9wZW5WaWV3ID0gX3JlZi5vcGVuVmlldztcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgdmFyIGlzWWVhck9ubHkgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaXNZZWFyT25seVZpZXcodmlld3MpO1xuICB9LCBbdmlld3NdKTtcbiAgdmFyIGlzWWVhckFuZE1vbnRoID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzWWVhckFuZE1vbnRoVmlld3Modmlld3MpO1xuICB9LCBbdmlld3NdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoUGlja2VyVG9vbGJhciwge1xuICAgIGlzTGFuZHNjYXBlOiBpc0xhbmRzY2FwZSxcbiAgICBjbGFzc05hbWU6IGNsc3goIWlzWWVhck9ubHkgJiYgY2xhc3Nlcy50b29sYmFyLCBpc0xhbmRzY2FwZSAmJiBjbGFzc2VzLnRvb2xiYXJMYW5kc2NhcGUpXG4gIH0sIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IGlzWWVhck9ubHkgPyAnaDMnIDogJ3N1YnRpdGxlMScsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBzZXRPcGVuVmlldygneWVhcicpO1xuICAgIH0sXG4gICAgc2VsZWN0ZWQ6IG9wZW5WaWV3ID09PSAneWVhcicsXG4gICAgbGFiZWw6IHV0aWxzLmdldFllYXJUZXh0KGRhdGUpXG4gIH0pLCAhaXNZZWFyT25seSAmJiAhaXNZZWFyQW5kTW9udGggJiYgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogXCJoNFwiLFxuICAgIHNlbGVjdGVkOiBvcGVuVmlldyA9PT0gJ2RhdGUnLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gc2V0T3BlblZpZXcoJ2RhdGUnKTtcbiAgICB9LFxuICAgIGFsaWduOiBpc0xhbmRzY2FwZSA/ICdsZWZ0JyA6ICdjZW50ZXInLFxuICAgIGxhYmVsOiB1dGlscy5nZXREYXRlUGlja2VySGVhZGVyVGV4dChkYXRlKSxcbiAgICBjbGFzc05hbWU6IGNsc3goaXNMYW5kc2NhcGUgJiYgY2xhc3Nlcy5kYXRlTGFuZHNjYXBlKVxuICB9KSwgaXNZZWFyQW5kTW9udGggJiYgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogXCJoNFwiLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gc2V0T3BlblZpZXcoJ21vbnRoJyk7XG4gICAgfSxcbiAgICBzZWxlY3RlZDogb3BlblZpZXcgPT09ICdtb250aCcsXG4gICAgbGFiZWw6IHV0aWxzLmdldE1vbnRoVGV4dChkYXRlKVxuICB9KSk7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgZGVmYXVsdFByb3BzID0gX29iamVjdFNwcmVhZCh7fSwgZGF0ZVBpY2tlckRlZmF1bHRQcm9wcywge1xuICBvcGVuVG86ICdkYXRlJyxcbiAgdmlld3M6IFsneWVhcicsICdkYXRlJ11cbn0pO1xuXG5mdW5jdGlvbiB1c2VPcHRpb25zKHByb3BzKSB7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHJldHVybiB7XG4gICAgZ2V0RGVmYXVsdEZvcm1hdDogZnVuY3Rpb24gZ2V0RGVmYXVsdEZvcm1hdCgpIHtcbiAgICAgIHJldHVybiBnZXRGb3JtYXRCeVZpZXdzKHByb3BzLnZpZXdzLCB1dGlscyk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgRGF0ZVBpY2tlciA9IG1ha2VQaWNrZXJXaXRoU3RhdGUoe1xuICB1c2VPcHRpb25zOiB1c2VPcHRpb25zLFxuICBJbnB1dDogUHVyZURhdGVJbnB1dCxcbiAgdXNlU3RhdGU6IHVzZVBpY2tlclN0YXRlLFxuICBEZWZhdWx0VG9vbGJhckNvbXBvbmVudDogRGF0ZVBpY2tlclRvb2xiYXJcbn0pO1xudmFyIEtleWJvYXJkRGF0ZVBpY2tlciA9IG1ha2VQaWNrZXJXaXRoU3RhdGUoe1xuICB1c2VPcHRpb25zOiB1c2VPcHRpb25zLFxuICBJbnB1dDogS2V5Ym9hcmREYXRlSW5wdXQsXG4gIHVzZVN0YXRlOiB1c2VLZXlib2FyZFBpY2tlclN0YXRlLFxuICBEZWZhdWx0VG9vbGJhckNvbXBvbmVudDogRGF0ZVBpY2tlclRvb2xiYXJcbn0pO1xuRGF0ZVBpY2tlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5LZXlib2FyZERhdGVQaWNrZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgeyBEYXRlUGlja2VyLCBLZXlib2FyZERhdGVQaWNrZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURhdGVQaWNrZXIuanMubWFwXG4iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBSZWFjdF9fZGVmYXVsdCwgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1IGFzIHVzZVV0aWxzIH0gZnJvbSAnLi91c2VVdGlscy1jZmI5NmFjOS5qcyc7XG5pbXBvcnQgJ2Nsc3gnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IFAgYXMgUGlja2VyVG9vbGJhciwgVCBhcyBUb29sYmFyQnV0dG9uLCBjIGFzIFRvb2xiYXJUZXh0LCBtIGFzIG1ha2VQaWNrZXJXaXRoU3RhdGUsIGEgYXMgUHVyZURhdGVJbnB1dCwgdSBhcyB1c2VQaWNrZXJTdGF0ZSwgSyBhcyBLZXlib2FyZERhdGVJbnB1dCwgYiBhcyB1c2VLZXlib2FyZFBpY2tlclN0YXRlLCBwIGFzIHBpY2sxMmhPcjI0aEZvcm1hdCB9IGZyb20gJy4vbWFrZVBpY2tlcldpdGhTdGF0ZS01YTc5Y2I4YS5qcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0ICcuL1dyYXBwZXItMjQxOTY2ZDcuanMnO1xuaW1wb3J0ICcuL0NhbGVuZGFyLTExYWU2MWY2LmpzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcbmltcG9ydCAncmlmbSc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdmdJY29uJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheSc7XG5pbXBvcnQgeyBhIGFzIGRhdGVUaW1lUGlja2VyRGVmYXVsdFByb3BzIH0gZnJvbSAnLi9QaWNrZXItY2NkOWJhOTAuanMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0ICcuL0RheS5qcyc7XG5pbXBvcnQgJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyJztcbmltcG9ydCAnLi9DbG9jay00OGZkZTk3NS5qcyc7XG5pbXBvcnQgJy4vQ2xvY2tWaWV3LmpzJztcbmltcG9ydCB7IHUgYXMgdXNlTWVyaWRpZW1Nb2RlIH0gZnJvbSAnLi9UaW1lUGlja2VyVG9vbGJhci04MTEwMGZhYi5qcyc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiJztcbmltcG9ydCBUYWJzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYnMnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcblxudmFyIFRpbWVJY29uID0gZnVuY3Rpb24gVGltZUljb24ocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3ZnSWNvbiwgcHJvcHMsIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMS45OSAyQzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyek0xMiAyMGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6XCJcbiAgfSksIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBkOiBcIk0wIDBoMjR2MjRIMHpcIlxuICB9KSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTEyLjUgN0gxMXY2bDUuMjUgMy4xNS43NS0xLjIzLTQuNS0yLjY3elwiXG4gIH0pKTtcbn07XG5cbnZhciBEYXRlUmFuZ2VJY29uID0gZnVuY3Rpb24gRGF0ZVJhbmdlSWNvbihwcm9wcykge1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChTdmdJY29uLCBwcm9wcywgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTkgMTFIN3YyaDJ2LTJ6bTQgMGgtMnYyaDJ2LTJ6bTQgMGgtMnYyaDJ2LTJ6bTItN2gtMVYyaC0ydjJIOFYySDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDIwYzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY5aDE0djExelwiXG4gIH0pLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZDogXCJNMCAwaDI0djI0SDB6XCJcbiAgfSkpO1xufTtcblxudmFyIHZpZXdUb1RhYkluZGV4ID0gZnVuY3Rpb24gdmlld1RvVGFiSW5kZXgob3BlblZpZXcpIHtcbiAgaWYgKG9wZW5WaWV3ID09PSAnZGF0ZScgfHwgb3BlblZpZXcgPT09ICd5ZWFyJykge1xuICAgIHJldHVybiAnZGF0ZSc7XG4gIH1cblxuICByZXR1cm4gJ3RpbWUnO1xufTtcblxudmFyIHRhYkluZGV4VG9WaWV3ID0gZnVuY3Rpb24gdGFiSW5kZXhUb1ZpZXcodGFiKSB7XG4gIGlmICh0YWIgPT09ICdkYXRlJykge1xuICAgIHJldHVybiAnZGF0ZSc7XG4gIH1cblxuICByZXR1cm4gJ2hvdXJzJztcbn07XG5cbnZhciB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgdmFyIHRhYnNCYWNrZ3JvdW5kID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4gOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmRbXCJkZWZhdWx0XCJdO1xuICByZXR1cm4ge1xuICAgIHRhYnM6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dCh0YWJzQmFja2dyb3VuZCksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRhYnNCYWNrZ3JvdW5kXG4gICAgfVxuICB9O1xufSwge1xuICBuYW1lOiAnTXVpUGlja2VyRFRUYWJzJ1xufSk7XG52YXIgRGF0ZVRpbWVQaWNrZXJUYWJzID0gZnVuY3Rpb24gRGF0ZVRpbWVQaWNrZXJUYWJzKF9yZWYpIHtcbiAgdmFyIHZpZXcgPSBfcmVmLnZpZXcsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBkYXRlUmFuZ2VJY29uID0gX3JlZi5kYXRlUmFuZ2VJY29uLFxuICAgICAgdGltZUljb24gPSBfcmVmLnRpbWVJY29uO1xuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgaW5kaWNhdG9yQ29sb3IgPSB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyAnc2Vjb25kYXJ5JyA6ICdwcmltYXJ5JztcblxuICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB2aWV3VG9UYWJJbmRleCh2aWV3KSkge1xuICAgICAgb25DaGFuZ2UodGFiSW5kZXhUb1ZpZXcodmFsdWUpKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoUGFwZXIsIG51bGwsIGNyZWF0ZUVsZW1lbnQoVGFicywge1xuICAgIHZhcmlhbnQ6IFwiZnVsbFdpZHRoXCIsXG4gICAgdmFsdWU6IHZpZXdUb1RhYkluZGV4KHZpZXcpLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRhYnMsXG4gICAgaW5kaWNhdG9yQ29sb3I6IGluZGljYXRvckNvbG9yXG4gIH0sIGNyZWF0ZUVsZW1lbnQoVGFiLCB7XG4gICAgdmFsdWU6IFwiZGF0ZVwiLFxuICAgIGljb246IGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIGRhdGVSYW5nZUljb24pXG4gIH0pLCBjcmVhdGVFbGVtZW50KFRhYiwge1xuICAgIHZhbHVlOiBcInRpbWVcIixcbiAgICBpY29uOiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCB0aW1lSWNvbilcbiAgfSkpKTtcbn07XG5EYXRlVGltZVBpY2tlclRhYnMuZGVmYXVsdFByb3BzID0ge1xuICBkYXRlUmFuZ2VJY29uOiBjcmVhdGVFbGVtZW50KERhdGVSYW5nZUljb24sIG51bGwpLFxuICB0aW1lSWNvbjogY3JlYXRlRWxlbWVudChUaW1lSWNvbiwgbnVsbClcbn07XG5cbnZhciB1c2VTdHlsZXMkMSA9IG1ha2VTdHlsZXMoZnVuY3Rpb24gKF8pIHtcbiAgcmV0dXJuIHtcbiAgICB0b29sYmFyOiB7XG4gICAgICBwYWRkaW5nTGVmdDogMTYsXG4gICAgICBwYWRkaW5nUmlnaHQ6IDE2LFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnXG4gICAgfSxcbiAgICBzZXBhcmF0b3I6IHtcbiAgICAgIG1hcmdpbjogJzAgNHB4IDAgMnB4JyxcbiAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgfVxuICB9O1xufSwge1xuICBuYW1lOiAnTXVpUGlja2VyRFRUb29sYmFyJ1xufSk7XG52YXIgRGF0ZVRpbWVQaWNrZXJUb29sYmFyID0gZnVuY3Rpb24gRGF0ZVRpbWVQaWNrZXJUb29sYmFyKF9yZWYpIHtcbiAgdmFyIGRhdGUgPSBfcmVmLmRhdGUsXG4gICAgICBvcGVuVmlldyA9IF9yZWYub3BlblZpZXcsXG4gICAgICBzZXRPcGVuVmlldyA9IF9yZWYuc2V0T3BlblZpZXcsXG4gICAgICBhbXBtID0gX3JlZi5hbXBtLFxuICAgICAgaGlkZVRhYnMgPSBfcmVmLmhpZGVUYWJzLFxuICAgICAgZGF0ZVJhbmdlSWNvbiA9IF9yZWYuZGF0ZVJhbmdlSWNvbixcbiAgICAgIHRpbWVJY29uID0gX3JlZi50aW1lSWNvbixcbiAgICAgIG9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZTtcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMkMSgpO1xuICB2YXIgc2hvd1RhYnMgPSAhaGlkZVRhYnMgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmlubmVySGVpZ2h0ID4gNjY3O1xuXG4gIHZhciBfdXNlTWVyaWRpZW1Nb2RlID0gdXNlTWVyaWRpZW1Nb2RlKGRhdGUsIGFtcG0sIG9uQ2hhbmdlKSxcbiAgICAgIG1lcmlkaWVtTW9kZSA9IF91c2VNZXJpZGllbU1vZGUubWVyaWRpZW1Nb2RlLFxuICAgICAgaGFuZGxlTWVyaWRpZW1DaGFuZ2UgPSBfdXNlTWVyaWRpZW1Nb2RlLmhhbmRsZU1lcmlkaWVtQ2hhbmdlO1xuXG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHZhciBydGwgPSB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgY3JlYXRlRWxlbWVudChQaWNrZXJUb29sYmFyLCB7XG4gICAgaXNMYW5kc2NhcGU6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50b29sYmFyXG4gIH0sIGNyZWF0ZUVsZW1lbnQoR3JpZCwge1xuICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICBqdXN0aWZ5OiBcImNlbnRlclwiLFxuICAgIHdyYXA6IFwibm93cmFwXCJcbiAgfSwgY3JlYXRlRWxlbWVudChHcmlkLCB7XG4gICAgaXRlbTogdHJ1ZSxcbiAgICBjb250YWluZXI6IHRydWUsXG4gICAgeHM6IDUsXG4gICAganVzdGlmeTogXCJmbGV4LXN0YXJ0XCIsXG4gICAgZGlyZWN0aW9uOiBcImNvbHVtblwiXG4gIH0sIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogXCJzdWJ0aXRsZTFcIixcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHNldE9wZW5WaWV3KCd5ZWFyJyk7XG4gICAgfSxcbiAgICBzZWxlY3RlZDogb3BlblZpZXcgPT09ICd5ZWFyJyxcbiAgICBsYWJlbDogdXRpbHMuZ2V0WWVhclRleHQoZGF0ZSlcbiAgfSkpLCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IFwiaDRcIixcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHNldE9wZW5WaWV3KCdkYXRlJyk7XG4gICAgfSxcbiAgICBzZWxlY3RlZDogb3BlblZpZXcgPT09ICdkYXRlJyxcbiAgICBsYWJlbDogdXRpbHMuZ2V0RGF0ZVRpbWVQaWNrZXJIZWFkZXJUZXh0KGRhdGUpXG4gIH0pKSksIGNyZWF0ZUVsZW1lbnQoR3JpZCwge1xuICAgIGl0ZW06IHRydWUsXG4gICAgY29udGFpbmVyOiB0cnVlLFxuICAgIHhzOiA2LFxuICAgIGp1c3RpZnk6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LWVuZFwiLFxuICAgIGRpcmVjdGlvbjogcnRsID8gJ3Jvdy1yZXZlcnNlJyA6ICdyb3cnXG4gIH0sIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IFwiaDNcIixcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHNldE9wZW5WaWV3KCdob3VycycpO1xuICAgIH0sXG4gICAgc2VsZWN0ZWQ6IG9wZW5WaWV3ID09PSAnaG91cnMnLFxuICAgIGxhYmVsOiB1dGlscy5nZXRIb3VyVGV4dChkYXRlLCBhbXBtKVxuICB9KSwgY3JlYXRlRWxlbWVudChUb29sYmFyVGV4dCwge1xuICAgIHZhcmlhbnQ6IFwiaDNcIixcbiAgICBsYWJlbDogXCI6XCIsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnNlcGFyYXRvclxuICB9KSwgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogXCJoM1wiLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gc2V0T3BlblZpZXcoJ21pbnV0ZXMnKTtcbiAgICB9LFxuICAgIHNlbGVjdGVkOiBvcGVuVmlldyA9PT0gJ21pbnV0ZXMnLFxuICAgIGxhYmVsOiB1dGlscy5nZXRNaW51dGVUZXh0KGRhdGUpXG4gIH0pKSwgYW1wbSAmJiBjcmVhdGVFbGVtZW50KEdyaWQsIHtcbiAgICBpdGVtOiB0cnVlLFxuICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICB4czogMSxcbiAgICBkaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAganVzdGlmeTogXCJmbGV4LWVuZFwiXG4gIH0sIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IFwic3VidGl0bGUxXCIsXG4gICAgc2VsZWN0ZWQ6IG1lcmlkaWVtTW9kZSA9PT0gJ2FtJyxcbiAgICBsYWJlbDogdXRpbHMuZ2V0TWVyaWRpZW1UZXh0KCdhbScpLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gaGFuZGxlTWVyaWRpZW1DaGFuZ2UoJ2FtJyk7XG4gICAgfVxuICB9KSwgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogXCJzdWJ0aXRsZTFcIixcbiAgICBzZWxlY3RlZDogbWVyaWRpZW1Nb2RlID09PSAncG0nLFxuICAgIGxhYmVsOiB1dGlscy5nZXRNZXJpZGllbVRleHQoJ3BtJyksXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBoYW5kbGVNZXJpZGllbUNoYW5nZSgncG0nKTtcbiAgICB9XG4gIH0pKSkpLCBzaG93VGFicyAmJiBjcmVhdGVFbGVtZW50KERhdGVUaW1lUGlja2VyVGFicywge1xuICAgIGRhdGVSYW5nZUljb246IGRhdGVSYW5nZUljb24sXG4gICAgdGltZUljb246IHRpbWVJY29uLFxuICAgIHZpZXc6IG9wZW5WaWV3LFxuICAgIG9uQ2hhbmdlOiBzZXRPcGVuVmlld1xuICB9KSk7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgZGVmYXVsdFByb3BzID0gX29iamVjdFNwcmVhZCh7fSwgZGF0ZVRpbWVQaWNrZXJEZWZhdWx0UHJvcHMsIHtcbiAgd2lkZXI6IHRydWUsXG4gIG9yaWVudGF0aW9uOiAncG9ydHJhaXQnLFxuICBvcGVuVG86ICdkYXRlJyxcbiAgdmlld3M6IFsneWVhcicsICdkYXRlJywgJ2hvdXJzJywgJ21pbnV0ZXMnXVxufSk7XG5cbmZ1bmN0aW9uIHVzZU9wdGlvbnMocHJvcHMpIHtcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcblxuICBpZiAocHJvcHMub3JpZW50YXRpb24gIT09ICdwb3J0cmFpdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlIGFyZSBub3Qgc3VwcG9ydGluZyBjdXN0b20gb3JpZW50YXRpb24gZm9yIERhdGVUaW1lUGlja2VyIHlldCA6KCcpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXREZWZhdWx0Rm9ybWF0OiBmdW5jdGlvbiBnZXREZWZhdWx0Rm9ybWF0KCkge1xuICAgICAgcmV0dXJuIHBpY2sxMmhPcjI0aEZvcm1hdChwcm9wcy5mb3JtYXQsIHByb3BzLmFtcG0sIHtcbiAgICAgICAgJzEyaCc6IHV0aWxzLmRhdGVUaW1lMTJoRm9ybWF0LFxuICAgICAgICAnMjRoJzogdXRpbHMuZGF0ZVRpbWUyNGhGb3JtYXRcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIERhdGVUaW1lUGlja2VyID0gbWFrZVBpY2tlcldpdGhTdGF0ZSh7XG4gIHVzZU9wdGlvbnM6IHVzZU9wdGlvbnMsXG4gIElucHV0OiBQdXJlRGF0ZUlucHV0LFxuICB1c2VTdGF0ZTogdXNlUGlja2VyU3RhdGUsXG4gIERlZmF1bHRUb29sYmFyQ29tcG9uZW50OiBEYXRlVGltZVBpY2tlclRvb2xiYXJcbn0pO1xudmFyIEtleWJvYXJkRGF0ZVRpbWVQaWNrZXIgPSBtYWtlUGlja2VyV2l0aFN0YXRlKHtcbiAgdXNlT3B0aW9uczogdXNlT3B0aW9ucyxcbiAgSW5wdXQ6IEtleWJvYXJkRGF0ZUlucHV0LFxuICB1c2VTdGF0ZTogdXNlS2V5Ym9hcmRQaWNrZXJTdGF0ZSxcbiAgRGVmYXVsdFRvb2xiYXJDb21wb25lbnQ6IERhdGVUaW1lUGlja2VyVG9vbGJhcixcbiAgZ2V0Q3VzdG9tUHJvcHM6IGZ1bmN0aW9uIGdldEN1c3RvbVByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZnVzZTogcHJvcHMuYW1wbSA/IC9bXlxcZGFwXSsvZ2kgOiAvW15cXGRdKy9naVxuICAgIH07XG4gIH1cbn0pO1xuRGF0ZVRpbWVQaWNrZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuS2V5Ym9hcmREYXRlVGltZVBpY2tlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCB7IERhdGVUaW1lUGlja2VyLCBLZXlib2FyZERhdGVUaW1lUGlja2VyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1EYXRlVGltZVBpY2tlci5qcy5tYXBcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuXG52YXIgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBkYXk6IHtcbiAgICAgIHdpZHRoOiAzNixcbiAgICAgIGhlaWdodDogMzYsXG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5jYXB0aW9uLmZvbnRTaXplLFxuICAgICAgbWFyZ2luOiAnMCAycHgnLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgcGFkZGluZzogMFxuICAgIH0sXG4gICAgaGlkZGVuOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSxcbiAgICBjdXJyZW50OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICBmb250V2VpZ2h0OiA2MDBcbiAgICB9LFxuICAgIGRheVNlbGVjdGVkOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgfVxuICAgIH0sXG4gICAgZGF5RGlzYWJsZWQ6IHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuaGludFxuICAgIH1cbiAgfTtcbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlcnNEYXknXG59KTtcbnZhciBEYXkgPSBmdW5jdGlvbiBEYXkoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgaGlkZGVuID0gX3JlZi5oaWRkZW4sXG4gICAgICBjdXJyZW50ID0gX3JlZi5jdXJyZW50LFxuICAgICAgc2VsZWN0ZWQgPSBfcmVmLnNlbGVjdGVkLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiY2hpbGRyZW5cIiwgXCJkaXNhYmxlZFwiLCBcImhpZGRlblwiLCBcImN1cnJlbnRcIiwgXCJzZWxlY3RlZFwiXSk7XG5cbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgdmFyIGNsYXNzTmFtZSA9IGNsc3goY2xhc3Nlcy5kYXksIGhpZGRlbiAmJiBjbGFzc2VzLmhpZGRlbiwgY3VycmVudCAmJiBjbGFzc2VzLmN1cnJlbnQsIHNlbGVjdGVkICYmIGNsYXNzZXMuZGF5U2VsZWN0ZWQsIGRpc2FibGVkICYmIGNsYXNzZXMuZGF5RGlzYWJsZWQpO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgdGFiSW5kZXg6IGhpZGRlbiB8fCBkaXNhYmxlZCA/IC0xIDogMFxuICB9LCBvdGhlciksIGNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwge1xuICAgIHZhcmlhbnQ6IFwiYm9keTJcIixcbiAgICBjb2xvcjogXCJpbmhlcml0XCJcbiAgfSwgY2hpbGRyZW4pKTtcbn07XG5EYXkuZGlzcGxheU5hbWUgPSAnRGF5JztcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IERheS5wcm9wVHlwZXMgPSB7XG4gIGN1cnJlbnQ6IGJvb2wsXG4gIGRpc2FibGVkOiBib29sLFxuICBoaWRkZW46IGJvb2wsXG4gIHNlbGVjdGVkOiBib29sXG59IDogdm9pZCAwO1xuRGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBoaWRkZW46IGZhbHNlLFxuICBjdXJyZW50OiBmYWxzZSxcbiAgc2VsZWN0ZWQ6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXk7XG5leHBvcnQgeyBEYXksIHVzZVN0eWxlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGF5LmpzLm1hcFxuIiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIGZvcndhcmRSZWYsIGNyZWF0ZUVsZW1lbnQsIHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb25lT2ZUeXBlLCBvYmplY3QsIHN0cmluZywgbnVtYmVyLCBpbnN0YW5jZU9mLCBvbmVPZiB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdSBhcyB1c2VVdGlscyB9IGZyb20gJy4vdXNlVXRpbHMtY2ZiOTZhYzkuanMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBhIGFzIGFycmF5SW5jbHVkZXMsIFYgYXMgVmFyaWFudENvbnRleHQsIHUgYXMgdXNlSXNvbW9ycGhpY0VmZmVjdCwgYiBhcyBWSUVXX0hFSUdIVCwgRCBhcyBESUFMT0dfV0lEVEgsIGMgYXMgRElBTE9HX1dJRFRIX1dJREVSIH0gZnJvbSAnLi9XcmFwcGVyLTI0MTk2NmQ3LmpzJztcbmltcG9ydCB7IGEgYXMgQ2FsZW5kYXIgfSBmcm9tICcuL0NhbGVuZGFyLTExYWU2MWY2LmpzJztcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5JztcbmltcG9ydCB7IENsb2NrVmlldyB9IGZyb20gJy4vQ2xvY2tWaWV3LmpzJztcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBkYXRlID0gb25lT2ZUeXBlKFtvYmplY3QsIHN0cmluZywgbnVtYmVyLCBpbnN0YW5jZU9mKERhdGUpXSk7XG52YXIgZGF0ZVBpY2tlclZpZXcgPSBvbmVPZihbJ3llYXInLCAnbW9udGgnLCAnZGF5J10pO1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW9iamVjdC1saXRlcmFsLXR5cGUtYXNzZXJ0aW9uICovXG5cbnZhciB0aW1lUGlja2VyRGVmYXVsdFByb3BzID0ge1xuICBhbXBtOiB0cnVlLFxuICBpbnZhbGlkRGF0ZU1lc3NhZ2U6ICdJbnZhbGlkIFRpbWUgRm9ybWF0J1xufTtcbnZhciBkYXRlUGlja2VyRGVmYXVsdFByb3BzID0ge1xuICBtaW5EYXRlOiBuZXcgRGF0ZSgnMTkwMC0wMS0wMScpLFxuICBtYXhEYXRlOiBuZXcgRGF0ZSgnMjEwMC0wMS0wMScpLFxuICBpbnZhbGlkRGF0ZU1lc3NhZ2U6ICdJbnZhbGlkIERhdGUgRm9ybWF0JyxcbiAgbWluRGF0ZU1lc3NhZ2U6ICdEYXRlIHNob3VsZCBub3QgYmUgYmVmb3JlIG1pbmltYWwgZGF0ZScsXG4gIG1heERhdGVNZXNzYWdlOiAnRGF0ZSBzaG91bGQgbm90IGJlIGFmdGVyIG1heGltYWwgZGF0ZScsXG4gIGFsbG93S2V5Ym9hcmRDb250cm9sOiB0cnVlXG59O1xudmFyIGRhdGVUaW1lUGlja2VyRGVmYXVsdFByb3BzID0gX29iamVjdFNwcmVhZCh7fSwgdGltZVBpY2tlckRlZmF1bHRQcm9wcywge30sIGRhdGVQaWNrZXJEZWZhdWx0UHJvcHMsIHtcbiAgc2hvd1RhYnM6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiB1c2VWaWV3cyh2aWV3cywgb3BlblRvLCBvbkNoYW5nZSkge1xuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gdXNlU3RhdGUob3BlblRvICYmIGFycmF5SW5jbHVkZXModmlld3MsIG9wZW5UbykgPyBvcGVuVG8gOiB2aWV3c1swXSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIG9wZW5WaWV3ID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldE9wZW5WaWV3ID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgaGFuZGxlQ2hhbmdlQW5kT3Blbk5leHQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZGF0ZSwgaXNGaW5pc2gpIHtcbiAgICB2YXIgbmV4dFZpZXdUb09wZW4gPSB2aWV3c1t2aWV3cy5pbmRleE9mKG9wZW5WaWV3KSArIDFdO1xuXG4gICAgaWYgKGlzRmluaXNoICYmIG5leHRWaWV3VG9PcGVuKSB7XG4gICAgICAvLyBkbyBub3QgY2xvc2UgcGlja2VyIGlmIG5lZWRzIHRvIHNob3cgbmV4dCB2aWV3XG4gICAgICBvbkNoYW5nZShkYXRlLCBmYWxzZSk7XG4gICAgICBzZXRPcGVuVmlldyhuZXh0Vmlld1RvT3Blbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb25DaGFuZ2UoZGF0ZSwgQm9vbGVhbihpc0ZpbmlzaCkpO1xuICB9LCBbb25DaGFuZ2UsIG9wZW5WaWV3LCB2aWV3c10pO1xuICByZXR1cm4ge1xuICAgIGhhbmRsZUNoYW5nZUFuZE9wZW5OZXh0OiBoYW5kbGVDaGFuZ2VBbmRPcGVuTmV4dCxcbiAgICBvcGVuVmlldzogb3BlblZpZXcsXG4gICAgc2V0T3BlblZpZXc6IHNldE9wZW5WaWV3XG4gIH07XG59XG5cbnZhciB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGhlaWdodDogNDAsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtXG4gICAgICB9XG4gICAgfSxcbiAgICB5ZWFyU2VsZWN0ZWQ6IHtcbiAgICAgIG1hcmdpbjogJzEwcHggMCcsXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW1cbiAgICB9LFxuICAgIHllYXJEaXNhYmxlZDoge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5oaW50XG4gICAgfVxuICB9O1xufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc1llYXInXG59KTtcbnZhciBZZWFyID0gZnVuY3Rpb24gWWVhcihfcmVmKSB7XG4gIHZhciBvblNlbGVjdCA9IF9yZWYub25TZWxlY3QsXG4gICAgICBmb3J3YXJkZWRSZWYgPSBfcmVmLmZvcndhcmRlZFJlZixcbiAgICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIHNlbGVjdGVkID0gX3JlZi5zZWxlY3RlZCxcbiAgICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcIm9uU2VsZWN0XCIsIFwiZm9yd2FyZGVkUmVmXCIsIFwidmFsdWVcIiwgXCJzZWxlY3RlZFwiLCBcImRpc2FibGVkXCIsIFwiY2hpbGRyZW5cIl0pO1xuXG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHZhciBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gb25TZWxlY3QodmFsdWUpO1xuICB9LCBbb25TZWxlY3QsIHZhbHVlXSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIF9leHRlbmRzKHtcbiAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgIGNvbXBvbmVudDogXCJkaXZcIixcbiAgICB0YWJJbmRleDogZGlzYWJsZWQgPyAtMSA6IDAsXG4gICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgb25LZXlQcmVzczogaGFuZGxlQ2xpY2ssXG4gICAgY29sb3I6IHNlbGVjdGVkID8gJ3ByaW1hcnknIDogdW5kZWZpbmVkLFxuICAgIHZhcmlhbnQ6IHNlbGVjdGVkID8gJ2g1JyA6ICdzdWJ0aXRsZTEnLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICByZWY6IGZvcndhcmRlZFJlZixcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBzZWxlY3RlZCAmJiBjbGFzc2VzLnllYXJTZWxlY3RlZCwgZGlzYWJsZWQgJiYgY2xhc3Nlcy55ZWFyRGlzYWJsZWQpXG4gIH0sIG90aGVyKSk7XG59O1xuWWVhci5kaXNwbGF5TmFtZSA9ICdZZWFyJztcbnZhciBZZWFyJDEgPSBmb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFllYXIsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGZvcndhcmRlZFJlZjogcmVmXG4gIH0pKTtcbn0pO1xuXG52YXIgdXNlU3R5bGVzJDEgPSBtYWtlU3R5bGVzKHtcbiAgY29udGFpbmVyOiB7XG4gICAgaGVpZ2h0OiAzMDAsXG4gICAgb3ZlcmZsb3dZOiAnYXV0bydcbiAgfVxufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc1llYXJTZWxlY3Rpb24nXG59KTtcbnZhciBZZWFyU2VsZWN0aW9uID0gZnVuY3Rpb24gWWVhclNlbGVjdGlvbihfcmVmKSB7XG4gIHZhciBkYXRlID0gX3JlZi5kYXRlLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgb25ZZWFyQ2hhbmdlID0gX3JlZi5vblllYXJDaGFuZ2UsXG4gICAgICBtaW5EYXRlID0gX3JlZi5taW5EYXRlLFxuICAgICAgbWF4RGF0ZSA9IF9yZWYubWF4RGF0ZSxcbiAgICAgIGRpc2FibGVQYXN0ID0gX3JlZi5kaXNhYmxlUGFzdCxcbiAgICAgIGRpc2FibGVGdXR1cmUgPSBfcmVmLmRpc2FibGVGdXR1cmUsXG4gICAgICBhbmltYXRlWWVhclNjcm9sbGluZyA9IF9yZWYuYW5pbWF0ZVllYXJTY3JvbGxpbmc7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzJDEoKTtcbiAgdmFyIGN1cnJlbnRWYXJpYW50ID0gdXNlQ29udGV4dChWYXJpYW50Q29udGV4dCk7XG4gIHZhciBzZWxlY3RlZFllYXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNlbGVjdGVkWWVhclJlZi5jdXJyZW50ICYmIHNlbGVjdGVkWWVhclJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZWxlY3RlZFllYXJSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgYmxvY2s6IGN1cnJlbnRWYXJpYW50ID09PSAnc3RhdGljJyA/ICduZWFyZXN0JyA6ICdjZW50ZXInLFxuICAgICAgICAgIGJlaGF2aW9yOiBhbmltYXRlWWVhclNjcm9sbGluZyA/ICdzbW9vdGgnIDogJ2F1dG8nXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBjYWxsIHdpdGhvdXQgYXJndW1lbnRzIGluIGNhc2Ugd2hlbiBzY3JvbGxJbnRvVmlldyB3b3JrcyBpbXByb3Blcmx5IChlLmcuIEZpcmVmb3ggNTItNTcpXG4gICAgICAgIHNlbGVjdGVkWWVhclJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICB2YXIgY3VycmVudFllYXIgPSB1dGlscy5nZXRZZWFyKGRhdGUpO1xuICB2YXIgb25ZZWFyU2VsZWN0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHllYXIpIHtcbiAgICB2YXIgbmV3RGF0ZSA9IHV0aWxzLnNldFllYXIoZGF0ZSwgeWVhcik7XG5cbiAgICBpZiAob25ZZWFyQ2hhbmdlKSB7XG4gICAgICBvblllYXJDaGFuZ2UobmV3RGF0ZSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UobmV3RGF0ZSwgdHJ1ZSk7XG4gIH0sIFtkYXRlLCBvbkNoYW5nZSwgb25ZZWFyQ2hhbmdlLCB1dGlsc10pO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmNvbnRhaW5lclxuICB9LCB1dGlscy5nZXRZZWFyUmFuZ2UobWluRGF0ZSwgbWF4RGF0ZSkubWFwKGZ1bmN0aW9uICh5ZWFyKSB7XG4gICAgdmFyIHllYXJOdW1iZXIgPSB1dGlscy5nZXRZZWFyKHllYXIpO1xuICAgIHZhciBzZWxlY3RlZCA9IHllYXJOdW1iZXIgPT09IGN1cnJlbnRZZWFyO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFllYXIkMSwge1xuICAgICAga2V5OiB1dGlscy5nZXRZZWFyVGV4dCh5ZWFyKSxcbiAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZCxcbiAgICAgIHZhbHVlOiB5ZWFyTnVtYmVyLFxuICAgICAgb25TZWxlY3Q6IG9uWWVhclNlbGVjdCxcbiAgICAgIHJlZjogc2VsZWN0ZWQgPyBzZWxlY3RlZFllYXJSZWYgOiB1bmRlZmluZWQsXG4gICAgICBkaXNhYmxlZDogQm9vbGVhbihkaXNhYmxlUGFzdCAmJiB1dGlscy5pc0JlZm9yZVllYXIoeWVhciwgdXRpbHMuZGF0ZSgpKSB8fCBkaXNhYmxlRnV0dXJlICYmIHV0aWxzLmlzQWZ0ZXJZZWFyKHllYXIsIHV0aWxzLmRhdGUoKSkpXG4gICAgfSwgdXRpbHMuZ2V0WWVhclRleHQoeWVhcikpO1xuICB9KSk7XG59O1xuXG52YXIgdXNlU3R5bGVzJDIgPSBtYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGZsZXg6ICcxIDAgMzMuMzMlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBoZWlnaHQ6IDc1LFxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdmb250LXNpemUnLCB7XG4gICAgICAgIGR1cmF0aW9uOiAnMTAwbXMnXG4gICAgICB9KSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bVxuICAgICAgfVxuICAgIH0sXG4gICAgbW9udGhTZWxlY3RlZDoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtXG4gICAgfSxcbiAgICBtb250aERpc2FibGVkOiB7XG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LmhpbnRcbiAgICB9XG4gIH07XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzTW9udGgnXG59KTtcbnZhciBNb250aCA9IGZ1bmN0aW9uIE1vbnRoKF9yZWYpIHtcbiAgdmFyIHNlbGVjdGVkID0gX3JlZi5zZWxlY3RlZCxcbiAgICAgIG9uU2VsZWN0ID0gX3JlZi5vblNlbGVjdCxcbiAgICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInNlbGVjdGVkXCIsIFwib25TZWxlY3RcIiwgXCJkaXNhYmxlZFwiLCBcInZhbHVlXCIsIFwiY2hpbGRyZW5cIl0pO1xuXG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzJDIoKTtcbiAgdmFyIGhhbmRsZVNlbGVjdGlvbiA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBvblNlbGVjdCh2YWx1ZSk7XG4gIH0sIFtvblNlbGVjdCwgdmFsdWVdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwgX2V4dGVuZHMoe1xuICAgIHJvbGU6IFwiYnV0dG9uXCIsXG4gICAgY29tcG9uZW50OiBcImRpdlwiLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIHNlbGVjdGVkICYmIGNsYXNzZXMubW9udGhTZWxlY3RlZCwgZGlzYWJsZWQgJiYgY2xhc3Nlcy5tb250aERpc2FibGVkKSxcbiAgICB0YWJJbmRleDogZGlzYWJsZWQgPyAtMSA6IDAsXG4gICAgb25DbGljazogaGFuZGxlU2VsZWN0aW9uLFxuICAgIG9uS2V5UHJlc3M6IGhhbmRsZVNlbGVjdGlvbixcbiAgICBjb2xvcjogc2VsZWN0ZWQgPyAncHJpbWFyeScgOiB1bmRlZmluZWQsXG4gICAgdmFyaWFudDogc2VsZWN0ZWQgPyAnaDUnIDogJ3N1YnRpdGxlMScsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0sIG90aGVyKSk7XG59O1xuTW9udGguZGlzcGxheU5hbWUgPSAnTW9udGgnO1xuXG52YXIgdXNlU3R5bGVzJDMgPSBtYWtlU3R5bGVzKHtcbiAgY29udGFpbmVyOiB7XG4gICAgd2lkdGg6IDMxMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdzdHJldGNoJ1xuICB9XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzTW9udGhTZWxlY3Rpb24nXG59KTtcbnZhciBNb250aFNlbGVjdGlvbiA9IGZ1bmN0aW9uIE1vbnRoU2VsZWN0aW9uKF9yZWYpIHtcbiAgdmFyIGRpc2FibGVQYXN0ID0gX3JlZi5kaXNhYmxlUGFzdCxcbiAgICAgIGRpc2FibGVGdXR1cmUgPSBfcmVmLmRpc2FibGVGdXR1cmUsXG4gICAgICBtaW5EYXRlID0gX3JlZi5taW5EYXRlLFxuICAgICAgbWF4RGF0ZSA9IF9yZWYubWF4RGF0ZSxcbiAgICAgIGRhdGUgPSBfcmVmLmRhdGUsXG4gICAgICBvbk1vbnRoQ2hhbmdlID0gX3JlZi5vbk1vbnRoQ2hhbmdlLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlO1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcyQzKCk7XG4gIHZhciBjdXJyZW50TW9udGggPSB1dGlscy5nZXRNb250aChkYXRlKTtcblxuICB2YXIgc2hvdWxkRGlzYWJsZU1vbnRoID0gZnVuY3Rpb24gc2hvdWxkRGlzYWJsZU1vbnRoKG1vbnRoKSB7XG4gICAgdmFyIG5vdyA9IHV0aWxzLmRhdGUoKTtcbiAgICB2YXIgdXRpbE1pbkRhdGUgPSB1dGlscy5kYXRlKG1pbkRhdGUpO1xuICAgIHZhciB1dGlsTWF4RGF0ZSA9IHV0aWxzLmRhdGUobWF4RGF0ZSk7XG4gICAgdmFyIGZpcnN0RW5hYmxlZE1vbnRoID0gdXRpbHMuc3RhcnRPZk1vbnRoKGRpc2FibGVQYXN0ICYmIHV0aWxzLmlzQWZ0ZXIobm93LCB1dGlsTWluRGF0ZSkgPyBub3cgOiB1dGlsTWluRGF0ZSk7XG4gICAgdmFyIGxhc3RFbmFibGVkTW9udGggPSB1dGlscy5zdGFydE9mTW9udGgoZGlzYWJsZUZ1dHVyZSAmJiB1dGlscy5pc0JlZm9yZShub3csIHV0aWxNYXhEYXRlKSA/IG5vdyA6IHV0aWxNYXhEYXRlKTtcbiAgICB2YXIgaXNCZWZvcmVGaXJzdEVuYWJsZWQgPSB1dGlscy5pc0JlZm9yZShtb250aCwgZmlyc3RFbmFibGVkTW9udGgpO1xuICAgIHZhciBpc0FmdGVyTGFzdEVuYWJsZWQgPSB1dGlscy5pc0FmdGVyKG1vbnRoLCBsYXN0RW5hYmxlZE1vbnRoKTtcbiAgICByZXR1cm4gaXNCZWZvcmVGaXJzdEVuYWJsZWQgfHwgaXNBZnRlckxhc3RFbmFibGVkO1xuICB9O1xuXG4gIHZhciBvbk1vbnRoU2VsZWN0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG1vbnRoKSB7XG4gICAgdmFyIG5ld0RhdGUgPSB1dGlscy5zZXRNb250aChkYXRlLCBtb250aCk7XG4gICAgb25DaGFuZ2UobmV3RGF0ZSwgdHJ1ZSk7XG5cbiAgICBpZiAob25Nb250aENoYW5nZSkge1xuICAgICAgb25Nb250aENoYW5nZShuZXdEYXRlKTtcbiAgICB9XG4gIH0sIFtkYXRlLCBvbkNoYW5nZSwgb25Nb250aENoYW5nZSwgdXRpbHNdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5jb250YWluZXJcbiAgfSwgdXRpbHMuZ2V0TW9udGhBcnJheShkYXRlKS5tYXAoZnVuY3Rpb24gKG1vbnRoKSB7XG4gICAgdmFyIG1vbnRoTnVtYmVyID0gdXRpbHMuZ2V0TW9udGgobW9udGgpO1xuICAgIHZhciBtb250aFRleHQgPSB1dGlscy5mb3JtYXQobW9udGgsICdNTU0nKTtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChNb250aCwge1xuICAgICAga2V5OiBtb250aFRleHQsXG4gICAgICB2YWx1ZTogbW9udGhOdW1iZXIsXG4gICAgICBzZWxlY3RlZDogbW9udGhOdW1iZXIgPT09IGN1cnJlbnRNb250aCxcbiAgICAgIG9uU2VsZWN0OiBvbk1vbnRoU2VsZWN0LFxuICAgICAgZGlzYWJsZWQ6IHNob3VsZERpc2FibGVNb250aChtb250aClcbiAgICB9LCBtb250aFRleHQpO1xuICB9KSk7XG59O1xuXG52YXIgZ2V0T3JpZW50YXRpb24gPSBmdW5jdGlvbiBnZXRPcmllbnRhdGlvbigpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICdwb3J0cmFpdCc7XG4gIH1cblxuICBpZiAod2luZG93LnNjcmVlbiAmJiB3aW5kb3cuc2NyZWVuLm9yaWVudGF0aW9uICYmIHdpbmRvdy5zY3JlZW4ub3JpZW50YXRpb24uYW5nbGUpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMod2luZG93LnNjcmVlbi5vcmllbnRhdGlvbi5hbmdsZSkgPT09IDkwID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xuICB9IC8vIFN1cHBvcnQgSU9TIHNhZmFyaVxuXG5cbiAgaWYgKHdpbmRvdy5vcmllbnRhdGlvbikge1xuICAgIHJldHVybiBNYXRoLmFicyhOdW1iZXIod2luZG93Lm9yaWVudGF0aW9uKSkgPT09IDkwID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnO1xuICB9XG5cbiAgcmV0dXJuICdwb3J0cmFpdCc7XG59O1xuXG5mdW5jdGlvbiB1c2VJc0xhbmRzY2FwZShjdXN0b21PcmllbnRhdGlvbikge1xuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gdXNlU3RhdGUoZ2V0T3JpZW50YXRpb24oKSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIG9yaWVudGF0aW9uID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldE9yaWVudGF0aW9uID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgZXZlbnRIYW5kbGVyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzZXRPcmllbnRhdGlvbihnZXRPcmllbnRhdGlvbigpKTtcbiAgfSwgW10pO1xuICB1c2VJc29tb3JwaGljRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBldmVudEhhbmRsZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgZXZlbnRIYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbZXZlbnRIYW5kbGVyXSk7XG4gIHZhciBvcmllbnRhdGlvblRvVXNlID0gY3VzdG9tT3JpZW50YXRpb24gfHwgb3JpZW50YXRpb247XG4gIHJldHVybiBvcmllbnRhdGlvblRvVXNlID09PSAnbGFuZHNjYXBlJztcbn1cblxuZnVuY3Rpb24gb3duS2V5cyQxKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQxKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDEoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxudmFyIHZpZXdzTWFwID0ge1xuICB5ZWFyOiBZZWFyU2VsZWN0aW9uLFxuICBtb250aDogTW9udGhTZWxlY3Rpb24sXG4gIGRhdGU6IENhbGVuZGFyLFxuICBob3VyczogQ2xvY2tWaWV3LFxuICBtaW51dGVzOiBDbG9ja1ZpZXcsXG4gIHNlY29uZHM6IENsb2NrVmlld1xufTtcbnZhciB1c2VTdHlsZXMkNCA9IG1ha2VTdHlsZXMoe1xuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbiAgfSxcbiAgY29udGFpbmVyTGFuZHNjYXBlOiB7XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdydcbiAgfSxcbiAgcGlja2VyVmlldzoge1xuICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgbWluSGVpZ2h0OiBWSUVXX0hFSUdIVCxcbiAgICBtaW5XaWR0aDogRElBTE9HX1dJRFRILFxuICAgIG1heFdpZHRoOiBESUFMT0dfV0lEVEhfV0lERVIsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICB9LFxuICBwaWNrZXJWaWV3TGFuZHNjYXBlOiB7XG4gICAgcGFkZGluZzogJzAgOHB4J1xuICB9XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzQmFzZVBpY2tlcidcbn0pO1xudmFyIFBpY2tlciA9IGZ1bmN0aW9uIFBpY2tlcihfcmVmKSB7XG4gIHZhciBkYXRlID0gX3JlZi5kYXRlLFxuICAgICAgdmlld3MgPSBfcmVmLnZpZXdzLFxuICAgICAgZGlzYWJsZVRvb2xiYXIgPSBfcmVmLmRpc2FibGVUb29sYmFyLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgb3BlblRvID0gX3JlZi5vcGVuVG8sXG4gICAgICB1bnBhcnNlZE1pbkRhdGUgPSBfcmVmLm1pbkRhdGUsXG4gICAgICB1bnBhcnNlZE1heERhdGUgPSBfcmVmLm1heERhdGUsXG4gICAgICBUb29sYmFyQ29tcG9uZW50ID0gX3JlZi5Ub29sYmFyQ29tcG9uZW50LFxuICAgICAgb3JpZW50YXRpb24gPSBfcmVmLm9yaWVudGF0aW9uLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJkYXRlXCIsIFwidmlld3NcIiwgXCJkaXNhYmxlVG9vbGJhclwiLCBcIm9uQ2hhbmdlXCIsIFwib3BlblRvXCIsIFwibWluRGF0ZVwiLCBcIm1heERhdGVcIiwgXCJUb29sYmFyQ29tcG9uZW50XCIsIFwib3JpZW50YXRpb25cIl0pO1xuXG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzJDQoKTtcbiAgdmFyIGlzTGFuZHNjYXBlID0gdXNlSXNMYW5kc2NhcGUob3JpZW50YXRpb24pO1xuXG4gIHZhciBfdXNlVmlld3MgPSB1c2VWaWV3cyh2aWV3cywgb3BlblRvLCBvbkNoYW5nZSksXG4gICAgICBvcGVuVmlldyA9IF91c2VWaWV3cy5vcGVuVmlldyxcbiAgICAgIHNldE9wZW5WaWV3ID0gX3VzZVZpZXdzLnNldE9wZW5WaWV3LFxuICAgICAgaGFuZGxlQ2hhbmdlQW5kT3Blbk5leHQgPSBfdXNlVmlld3MuaGFuZGxlQ2hhbmdlQW5kT3Blbk5leHQ7XG5cbiAgdmFyIG1pbkRhdGUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdXRpbHMuZGF0ZSh1bnBhcnNlZE1pbkRhdGUpO1xuICB9LCBbdW5wYXJzZWRNaW5EYXRlLCB1dGlsc10pO1xuICB2YXIgbWF4RGF0ZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB1dGlscy5kYXRlKHVucGFyc2VkTWF4RGF0ZSk7XG4gIH0sIFt1bnBhcnNlZE1heERhdGUsIHV0aWxzXSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5jb250YWluZXIsIGlzTGFuZHNjYXBlICYmIGNsYXNzZXMuY29udGFpbmVyTGFuZHNjYXBlKVxuICB9LCAhZGlzYWJsZVRvb2xiYXIgJiYgY3JlYXRlRWxlbWVudChUb29sYmFyQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIHZpZXdzOiB2aWV3cyxcbiAgICBpc0xhbmRzY2FwZTogaXNMYW5kc2NhcGUsXG4gICAgZGF0ZTogZGF0ZSxcbiAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgc2V0T3BlblZpZXc6IHNldE9wZW5WaWV3LFxuICAgIG9wZW5WaWV3OiBvcGVuVmlld1xuICB9KSksIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnBpY2tlclZpZXcsIGlzTGFuZHNjYXBlICYmIGNsYXNzZXMucGlja2VyVmlld0xhbmRzY2FwZSlcbiAgfSwgb3BlblZpZXcgPT09ICd5ZWFyJyAmJiBjcmVhdGVFbGVtZW50KFllYXJTZWxlY3Rpb24sIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgZGF0ZTogZGF0ZSxcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlQW5kT3Blbk5leHQsXG4gICAgbWluRGF0ZTogbWluRGF0ZSxcbiAgICBtYXhEYXRlOiBtYXhEYXRlXG4gIH0pKSwgb3BlblZpZXcgPT09ICdtb250aCcgJiYgY3JlYXRlRWxlbWVudChNb250aFNlbGVjdGlvbiwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBkYXRlOiBkYXRlLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2VBbmRPcGVuTmV4dCxcbiAgICBtaW5EYXRlOiBtaW5EYXRlLFxuICAgIG1heERhdGU6IG1heERhdGVcbiAgfSkpLCBvcGVuVmlldyA9PT0gJ2RhdGUnICYmIGNyZWF0ZUVsZW1lbnQoQ2FsZW5kYXIsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgZGF0ZTogZGF0ZSxcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlQW5kT3Blbk5leHQsXG4gICAgbWluRGF0ZTogbWluRGF0ZSxcbiAgICBtYXhEYXRlOiBtYXhEYXRlXG4gIH0pKSwgKG9wZW5WaWV3ID09PSAnaG91cnMnIHx8IG9wZW5WaWV3ID09PSAnbWludXRlcycgfHwgb3BlblZpZXcgPT09ICdzZWNvbmRzJykgJiYgY3JlYXRlRWxlbWVudChDbG9ja1ZpZXcsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgZGF0ZTogZGF0ZSxcbiAgICB0eXBlOiBvcGVuVmlldyxcbiAgICBvbkhvdXJDaGFuZ2U6IGhhbmRsZUNoYW5nZUFuZE9wZW5OZXh0LFxuICAgIG9uTWludXRlc0NoYW5nZTogaGFuZGxlQ2hhbmdlQW5kT3Blbk5leHQsXG4gICAgb25TZWNvbmRzQ2hhbmdlOiBoYW5kbGVDaGFuZ2VBbmRPcGVuTmV4dFxuICB9KSkpKTtcbn07XG5QaWNrZXIuZGVmYXVsdFByb3BzID0gX29iamVjdFNwcmVhZCQxKHt9LCBkYXRlUGlja2VyRGVmYXVsdFByb3BzLCB7XG4gIHZpZXdzOiBPYmplY3Qua2V5cyh2aWV3c01hcClcbn0pO1xuXG5leHBvcnQgeyBQaWNrZXIgYXMgUCwgZGF0ZVRpbWVQaWNrZXJEZWZhdWx0UHJvcHMgYXMgYSwgZGF0ZVBpY2tlckRlZmF1bHRQcm9wcyBhcyBkLCB0aW1lUGlja2VyRGVmYXVsdFByb3BzIGFzIHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVBpY2tlci1jY2Q5YmE5MC5qcy5tYXBcbiIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0ICdyZWFjdCc7XG5pbXBvcnQgJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdSBhcyB1c2VVdGlscyB9IGZyb20gJy4vdXNlVXRpbHMtY2ZiOTZhYzkuanMnO1xuaW1wb3J0ICdjbHN4JztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBtIGFzIG1ha2VQaWNrZXJXaXRoU3RhdGUsIGEgYXMgUHVyZURhdGVJbnB1dCwgdSBhcyB1c2VQaWNrZXJTdGF0ZSwgSyBhcyBLZXlib2FyZERhdGVJbnB1dCwgYiBhcyB1c2VLZXlib2FyZFBpY2tlclN0YXRlLCBwIGFzIHBpY2sxMmhPcjI0aEZvcm1hdCB9IGZyb20gJy4vbWFrZVBpY2tlcldpdGhTdGF0ZS01YTc5Y2I4YS5qcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0ICcuL1dyYXBwZXItMjQxOTY2ZDcuanMnO1xuaW1wb3J0ICcuL0NhbGVuZGFyLTExYWU2MWY2LmpzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcbmltcG9ydCAncmlmbSc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1N2Z0ljb24nO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5JztcbmltcG9ydCB7IHQgYXMgdGltZVBpY2tlckRlZmF1bHRQcm9wcyB9IGZyb20gJy4vUGlja2VyLWNjZDliYTkwLmpzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmltcG9ydCAnLi9EYXkuanMnO1xuaW1wb3J0ICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3Zlcic7XG5pbXBvcnQgJy4vQ2xvY2stNDhmZGU5NzUuanMnO1xuaW1wb3J0ICcuL0Nsb2NrVmlldy5qcyc7XG5pbXBvcnQgeyBUIGFzIFRpbWVQaWNrZXJUb29sYmFyIH0gZnJvbSAnLi9UaW1lUGlja2VyVG9vbGJhci04MTEwMGZhYi5qcyc7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBkZWZhdWx0UHJvcHMgPSBfb2JqZWN0U3ByZWFkKHt9LCB0aW1lUGlja2VyRGVmYXVsdFByb3BzLCB7XG4gIG9wZW5UbzogJ2hvdXJzJyxcbiAgdmlld3M6IFsnaG91cnMnLCAnbWludXRlcyddXG59KTtcblxuZnVuY3Rpb24gdXNlT3B0aW9ucyhwcm9wcykge1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICByZXR1cm4ge1xuICAgIGdldERlZmF1bHRGb3JtYXQ6IGZ1bmN0aW9uIGdldERlZmF1bHRGb3JtYXQoKSB7XG4gICAgICByZXR1cm4gcGljazEyaE9yMjRoRm9ybWF0KHByb3BzLmZvcm1hdCwgcHJvcHMuYW1wbSwge1xuICAgICAgICAnMTJoJzogdXRpbHMudGltZTEyaEZvcm1hdCxcbiAgICAgICAgJzI0aCc6IHV0aWxzLnRpbWUyNGhGb3JtYXRcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIFRpbWVQaWNrZXIgPSBtYWtlUGlja2VyV2l0aFN0YXRlKHtcbiAgdXNlT3B0aW9uczogdXNlT3B0aW9ucyxcbiAgSW5wdXQ6IFB1cmVEYXRlSW5wdXQsXG4gIHVzZVN0YXRlOiB1c2VQaWNrZXJTdGF0ZSxcbiAgRGVmYXVsdFRvb2xiYXJDb21wb25lbnQ6IFRpbWVQaWNrZXJUb29sYmFyXG59KTtcbnZhciBLZXlib2FyZFRpbWVQaWNrZXIgPSBtYWtlUGlja2VyV2l0aFN0YXRlKHtcbiAgdXNlT3B0aW9uczogdXNlT3B0aW9ucyxcbiAgSW5wdXQ6IEtleWJvYXJkRGF0ZUlucHV0LFxuICB1c2VTdGF0ZTogdXNlS2V5Ym9hcmRQaWNrZXJTdGF0ZSxcbiAgRGVmYXVsdFRvb2xiYXJDb21wb25lbnQ6IFRpbWVQaWNrZXJUb29sYmFyLFxuICBnZXRDdXN0b21Qcm9wczogZnVuY3Rpb24gZ2V0Q3VzdG9tUHJvcHMocHJvcHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVmdXNlOiBwcm9wcy5hbXBtID8gL1teXFxkYXBdKy9naSA6IC9bXlxcZF0rL2dpXG4gICAgfTtcbiAgfVxufSk7XG5UaW1lUGlja2VyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbktleWJvYXJkVGltZVBpY2tlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCB7IEtleWJvYXJkVGltZVBpY2tlciwgVGltZVBpY2tlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGltZVBpY2tlci5qcy5tYXBcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdSBhcyB1c2VVdGlscyB9IGZyb20gJy4vdXNlVXRpbHMtY2ZiOTZhYzkuanMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBQIGFzIFBpY2tlclRvb2xiYXIsIFQgYXMgVG9vbGJhckJ1dHRvbiwgYyBhcyBUb29sYmFyVGV4dCB9IGZyb20gJy4vbWFrZVBpY2tlcldpdGhTdGF0ZS01YTc5Y2I4YS5qcyc7XG5pbXBvcnQgeyBhIGFzIGFycmF5SW5jbHVkZXMgfSBmcm9tICcuL1dyYXBwZXItMjQxOTY2ZDcuanMnO1xuaW1wb3J0IHsgYiBhcyBDbG9ja1R5cGUsIGcgYXMgZ2V0TWVyaWRpZW0sIGMgYXMgY29udmVydFRvTWVyaWRpZW0gfSBmcm9tICcuL0Nsb2NrLTQ4ZmRlOTc1LmpzJztcblxudmFyIHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICB0b29sYmFyTGFuZHNjYXBlOiB7XG4gICAgZmxleFdyYXA6ICd3cmFwJ1xuICB9LFxuICB0b29sYmFyQW1wbUxlZnRQYWRkaW5nOiB7XG4gICAgcGFkZGluZ0xlZnQ6IDUwXG4gIH0sXG4gIHNlcGFyYXRvcjoge1xuICAgIG1hcmdpbjogJzAgNHB4IDAgMnB4JyxcbiAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICB9LFxuICBob3VyTWludXRlTGFiZWw6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJ1xuICB9LFxuICBob3VyTWludXRlTGFiZWxBbXBtTGFuZHNjYXBlOiB7XG4gICAgbWFyZ2luVG9wOiAnYXV0bydcbiAgfSxcbiAgaG91ck1pbnV0ZUxhYmVsUmV2ZXJzZToge1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZSdcbiAgfSxcbiAgYW1wbVNlbGVjdGlvbjoge1xuICAgIG1hcmdpbkxlZnQ6IDIwLFxuICAgIG1hcmdpblJpZ2h0OiAtMjAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gIH0sXG4gIGFtcG1MYW5kc2NhcGU6IHtcbiAgICBtYXJnaW46ICc0cHggMCBhdXRvJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gICAgZmxleEJhc2lzOiAnMTAwJSdcbiAgfSxcbiAgYW1wbVNlbGVjdGlvbldpdGhTZWNvbmRzOiB7XG4gICAgbWFyZ2luTGVmdDogMTUsXG4gICAgbWFyZ2luUmlnaHQ6IDEwXG4gIH0sXG4gIGFtcG1MYWJlbDoge1xuICAgIGZvbnRTaXplOiAxOFxuICB9XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzVGltZVBpY2tlclRvb2xiYXInXG59KTtcbmZ1bmN0aW9uIHVzZU1lcmlkaWVtTW9kZShkYXRlLCBhbXBtLCBvbkNoYW5nZSkge1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICB2YXIgbWVyaWRpZW1Nb2RlID0gZ2V0TWVyaWRpZW0oZGF0ZSwgdXRpbHMpO1xuICB2YXIgaGFuZGxlTWVyaWRpZW1DaGFuZ2UgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobW9kZSkge1xuICAgIHZhciB0aW1lV2l0aE1lcmlkaWVtID0gY29udmVydFRvTWVyaWRpZW0oZGF0ZSwgbW9kZSwgQm9vbGVhbihhbXBtKSwgdXRpbHMpO1xuICAgIG9uQ2hhbmdlKHRpbWVXaXRoTWVyaWRpZW0sIGZhbHNlKTtcbiAgfSwgW2FtcG0sIGRhdGUsIG9uQ2hhbmdlLCB1dGlsc10pO1xuICByZXR1cm4ge1xuICAgIG1lcmlkaWVtTW9kZTogbWVyaWRpZW1Nb2RlLFxuICAgIGhhbmRsZU1lcmlkaWVtQ2hhbmdlOiBoYW5kbGVNZXJpZGllbUNoYW5nZVxuICB9O1xufVxudmFyIFRpbWVQaWNrZXJUb29sYmFyID0gZnVuY3Rpb24gVGltZVBpY2tlclRvb2xiYXIoX3JlZikge1xuICB2YXIgZGF0ZSA9IF9yZWYuZGF0ZSxcbiAgICAgIHZpZXdzID0gX3JlZi52aWV3cyxcbiAgICAgIGFtcG0gPSBfcmVmLmFtcG0sXG4gICAgICBvcGVuVmlldyA9IF9yZWYub3BlblZpZXcsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBpc0xhbmRzY2FwZSA9IF9yZWYuaXNMYW5kc2NhcGUsXG4gICAgICBzZXRPcGVuVmlldyA9IF9yZWYuc2V0T3BlblZpZXc7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgdmFyIF91c2VNZXJpZGllbU1vZGUgPSB1c2VNZXJpZGllbU1vZGUoZGF0ZSwgYW1wbSwgb25DaGFuZ2UpLFxuICAgICAgbWVyaWRpZW1Nb2RlID0gX3VzZU1lcmlkaWVtTW9kZS5tZXJpZGllbU1vZGUsXG4gICAgICBoYW5kbGVNZXJpZGllbUNoYW5nZSA9IF91c2VNZXJpZGllbU1vZGUuaGFuZGxlTWVyaWRpZW1DaGFuZ2U7XG5cbiAgdmFyIGNsb2NrVHlwb2dyYXBoeVZhcmlhbnQgPSBpc0xhbmRzY2FwZSA/ICdoMycgOiAnaDInO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChQaWNrZXJUb29sYmFyLCB7XG4gICAgaXNMYW5kc2NhcGU6IGlzTGFuZHNjYXBlLFxuICAgIGNsYXNzTmFtZTogY2xzeChpc0xhbmRzY2FwZSA/IGNsYXNzZXMudG9vbGJhckxhbmRzY2FwZSA6IGFtcG0gJiYgY2xhc3Nlcy50b29sYmFyQW1wbUxlZnRQYWRkaW5nKVxuICB9LCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5ob3VyTWludXRlTGFiZWwsIGFtcG0gJiYgaXNMYW5kc2NhcGUgJiYgY2xhc3Nlcy5ob3VyTWludXRlTGFiZWxBbXBtTGFuZHNjYXBlLCB7XG4gICAgICBydGw6IGNsYXNzZXMuaG91ck1pbnV0ZUxhYmVsUmV2ZXJzZVxuICAgIH1bdGhlbWUuZGlyZWN0aW9uXSlcbiAgfSwgYXJyYXlJbmNsdWRlcyh2aWV3cywgJ2hvdXJzJykgJiYgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogY2xvY2tUeXBvZ3JhcGh5VmFyaWFudCxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHNldE9wZW5WaWV3KENsb2NrVHlwZS5IT1VSUyk7XG4gICAgfSxcbiAgICBzZWxlY3RlZDogb3BlblZpZXcgPT09IENsb2NrVHlwZS5IT1VSUyxcbiAgICBsYWJlbDogdXRpbHMuZ2V0SG91clRleHQoZGF0ZSwgQm9vbGVhbihhbXBtKSlcbiAgfSksIGFycmF5SW5jbHVkZXModmlld3MsIFsnaG91cnMnLCAnbWludXRlcyddKSAmJiBjcmVhdGVFbGVtZW50KFRvb2xiYXJUZXh0LCB7XG4gICAgbGFiZWw6IFwiOlwiLFxuICAgIHZhcmlhbnQ6IGNsb2NrVHlwb2dyYXBoeVZhcmlhbnQsXG4gICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5zZXBhcmF0b3JcbiAgfSksIGFycmF5SW5jbHVkZXModmlld3MsICdtaW51dGVzJykgJiYgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgdmFyaWFudDogY2xvY2tUeXBvZ3JhcGh5VmFyaWFudCxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHNldE9wZW5WaWV3KENsb2NrVHlwZS5NSU5VVEVTKTtcbiAgICB9LFxuICAgIHNlbGVjdGVkOiBvcGVuVmlldyA9PT0gQ2xvY2tUeXBlLk1JTlVURVMsXG4gICAgbGFiZWw6IHV0aWxzLmdldE1pbnV0ZVRleHQoZGF0ZSlcbiAgfSksIGFycmF5SW5jbHVkZXModmlld3MsIFsnbWludXRlcycsICdzZWNvbmRzJ10pICYmIGNyZWF0ZUVsZW1lbnQoVG9vbGJhclRleHQsIHtcbiAgICB2YXJpYW50OiBcImgyXCIsXG4gICAgbGFiZWw6IFwiOlwiLFxuICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuc2VwYXJhdG9yXG4gIH0pLCBhcnJheUluY2x1ZGVzKHZpZXdzLCAnc2Vjb25kcycpICYmIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IFwiaDJcIixcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHNldE9wZW5WaWV3KENsb2NrVHlwZS5TRUNPTkRTKTtcbiAgICB9LFxuICAgIHNlbGVjdGVkOiBvcGVuVmlldyA9PT0gQ2xvY2tUeXBlLlNFQ09ORFMsXG4gICAgbGFiZWw6IHV0aWxzLmdldFNlY29uZFRleHQoZGF0ZSlcbiAgfSkpLCBhbXBtICYmIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmFtcG1TZWxlY3Rpb24sIGlzTGFuZHNjYXBlICYmIGNsYXNzZXMuYW1wbUxhbmRzY2FwZSwgYXJyYXlJbmNsdWRlcyh2aWV3cywgJ3NlY29uZHMnKSAmJiBjbGFzc2VzLmFtcG1TZWxlY3Rpb25XaXRoU2Vjb25kcylcbiAgfSwgY3JlYXRlRWxlbWVudChUb29sYmFyQnV0dG9uLCB7XG4gICAgZGlzYWJsZVJpcHBsZTogdHJ1ZSxcbiAgICB2YXJpYW50OiBcInN1YnRpdGxlMVwiLFxuICAgIHNlbGVjdGVkOiBtZXJpZGllbU1vZGUgPT09ICdhbScsXG4gICAgdHlwb2dyYXBoeUNsYXNzTmFtZTogY2xhc3Nlcy5hbXBtTGFiZWwsXG4gICAgbGFiZWw6IHV0aWxzLmdldE1lcmlkaWVtVGV4dCgnYW0nKSxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIGhhbmRsZU1lcmlkaWVtQ2hhbmdlKCdhbScpO1xuICAgIH1cbiAgfSksIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIGRpc2FibGVSaXBwbGU6IHRydWUsXG4gICAgdmFyaWFudDogXCJzdWJ0aXRsZTFcIixcbiAgICBzZWxlY3RlZDogbWVyaWRpZW1Nb2RlID09PSAncG0nLFxuICAgIHR5cG9ncmFwaHlDbGFzc05hbWU6IGNsYXNzZXMuYW1wbUxhYmVsLFxuICAgIGxhYmVsOiB1dGlscy5nZXRNZXJpZGllbVRleHQoJ3BtJyksXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBoYW5kbGVNZXJpZGllbUNoYW5nZSgncG0nKTtcbiAgICB9XG4gIH0pKSk7XG59O1xuXG5leHBvcnQgeyBUaW1lUGlja2VyVG9vbGJhciBhcyBULCB1c2VNZXJpZGllbU1vZGUgYXMgdSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGltZVBpY2tlclRvb2xiYXItODExMDBmYWIuanMubWFwXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmLCBGcmFnbWVudCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vZGUsIGJvb2wsIG9iamVjdCwgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3Zlcic7XG5cbi8qKiBVc2UgaXQgaW5zdGVhZCBvZiAuaW5jbHVkZXMgbWV0aG9kIGZvciBJRSBzdXBwb3J0ICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCBpdGVtT3JJdGVtcykge1xuICBpZiAoQXJyYXkuaXNBcnJheShpdGVtT3JJdGVtcykpIHtcbiAgICByZXR1cm4gaXRlbU9ySXRlbXMuZXZlcnkoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBhcnJheS5pbmRleE9mKGl0ZW0pICE9PSAtMTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBhcnJheS5pbmRleE9mKGl0ZW1Pckl0ZW1zKSAhPT0gLTE7XG59XG5cbnZhciBESUFMT0dfV0lEVEggPSAzMTA7XG52YXIgRElBTE9HX1dJRFRIX1dJREVSID0gMzI1O1xudmFyIFZJRVdfSEVJR0hUID0gMzA1O1xuXG52YXIgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0aWNXcmFwcGVyUm9vdDoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgbWluV2lkdGg6IERJQUxPR19XSURUSCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXJcbiAgICB9XG4gIH07XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzU3RhdGljV3JhcHBlcidcbn0pO1xudmFyIFN0YXRpY1dyYXBwZXIgPSBmdW5jdGlvbiBTdGF0aWNXcmFwcGVyKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5zdGF0aWNXcmFwcGVyUm9vdCxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSk7XG59O1xuXG52YXIgTW9kYWxEaWFsb2cgPSBmdW5jdGlvbiBNb2RhbERpYWxvZyhfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gX3JlZi5jbGFzc2VzLFxuICAgICAgb25BY2NlcHQgPSBfcmVmLm9uQWNjZXB0LFxuICAgICAgb25EaXNtaXNzID0gX3JlZi5vbkRpc21pc3MsXG4gICAgICBvbkNsZWFyID0gX3JlZi5vbkNsZWFyLFxuICAgICAgb25TZXRUb2RheSA9IF9yZWYub25TZXRUb2RheSxcbiAgICAgIG9rTGFiZWwgPSBfcmVmLm9rTGFiZWwsXG4gICAgICBjYW5jZWxMYWJlbCA9IF9yZWYuY2FuY2VsTGFiZWwsXG4gICAgICBjbGVhckxhYmVsID0gX3JlZi5jbGVhckxhYmVsLFxuICAgICAgdG9kYXlMYWJlbCA9IF9yZWYudG9kYXlMYWJlbCxcbiAgICAgIGNsZWFyYWJsZSA9IF9yZWYuY2xlYXJhYmxlLFxuICAgICAgc2hvd1RvZGF5QnV0dG9uID0gX3JlZi5zaG93VG9kYXlCdXR0b24sXG4gICAgICBzaG93VGFicyA9IF9yZWYuc2hvd1RhYnMsXG4gICAgICB3aWRlciA9IF9yZWYud2lkZXIsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJvbkFjY2VwdFwiLCBcIm9uRGlzbWlzc1wiLCBcIm9uQ2xlYXJcIiwgXCJvblNldFRvZGF5XCIsIFwib2tMYWJlbFwiLCBcImNhbmNlbExhYmVsXCIsIFwiY2xlYXJMYWJlbFwiLCBcInRvZGF5TGFiZWxcIiwgXCJjbGVhcmFibGVcIiwgXCJzaG93VG9kYXlCdXR0b25cIiwgXCJzaG93VGFic1wiLCBcIndpZGVyXCJdKTtcblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChEaWFsb2csIF9leHRlbmRzKHtcbiAgICByb2xlOiBcImRpYWxvZ1wiLFxuICAgIG9uQ2xvc2U6IG9uRGlzbWlzcyxcbiAgICBjbGFzc2VzOiB7XG4gICAgICBwYXBlcjogY2xzeChjbGFzc2VzLmRpYWxvZ1Jvb3QsIHdpZGVyICYmIGNsYXNzZXMuZGlhbG9nUm9vdFdpZGVyKVxuICAgIH1cbiAgfSwgb3RoZXIpLCBjcmVhdGVFbGVtZW50KERpYWxvZ0NvbnRlbnQsIHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmRpYWxvZ1xuICB9KSwgY3JlYXRlRWxlbWVudChEaWFsb2dBY3Rpb25zLCB7XG4gICAgY2xhc3Nlczoge1xuICAgICAgcm9vdDogY2xzeCgoY2xlYXJhYmxlIHx8IHNob3dUb2RheUJ1dHRvbikgJiYgY2xhc3Nlcy53aXRoQWRkaXRpb25hbEFjdGlvbilcbiAgICB9XG4gIH0sIGNsZWFyYWJsZSAmJiBjcmVhdGVFbGVtZW50KEJ1dHRvbiwge1xuICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICBvbkNsaWNrOiBvbkNsZWFyXG4gIH0sIGNsZWFyTGFiZWwpLCBzaG93VG9kYXlCdXR0b24gJiYgY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgb25DbGljazogb25TZXRUb2RheVxuICB9LCB0b2RheUxhYmVsKSwgY2FuY2VsTGFiZWwgJiYgY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgb25DbGljazogb25EaXNtaXNzXG4gIH0sIGNhbmNlbExhYmVsKSwgb2tMYWJlbCAmJiBjcmVhdGVFbGVtZW50KEJ1dHRvbiwge1xuICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICBvbkNsaWNrOiBvbkFjY2VwdFxuICB9LCBva0xhYmVsKSkpO1xufTtcbk1vZGFsRGlhbG9nLmRpc3BsYXlOYW1lID0gJ01vZGFsRGlhbG9nJztcbnZhciBzdHlsZXMgPSBjcmVhdGVTdHlsZXMoe1xuICBkaWFsb2dSb290OiB7XG4gICAgbWluV2lkdGg6IERJQUxPR19XSURUSFxuICB9LFxuICBkaWFsb2dSb290V2lkZXI6IHtcbiAgICBtaW5XaWR0aDogRElBTE9HX1dJRFRIX1dJREVSXG4gIH0sXG4gIGRpYWxvZzoge1xuICAgICcmOmZpcnN0LWNoaWxkJzoge1xuICAgICAgcGFkZGluZzogMFxuICAgIH1cbiAgfSxcbiAgd2l0aEFkZGl0aW9uYWxBY3Rpb246IHtcbiAgICAvLyBzZXQganVzdGlmeUNvbnRlbnQgdG8gZGVmYXVsdCB2YWx1ZSB0byBmaXggSUUxMSBsYXlvdXQgYnVnXG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9kbXRyS292YWxlbmtvL21hdGVyaWFsLXVpLXBpY2tlcnMvcHVsbC8yNjdcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgICcmID4gKjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bydcbiAgICB9XG4gIH1cbn0pO1xudmFyIE1vZGFsRGlhbG9nJDEgPSB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpUGlja2Vyc01vZGFsJ1xufSkoTW9kYWxEaWFsb2cpO1xuXG52YXIgdXNlSXNvbW9ycGhpY0VmZmVjdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gdXNlRWZmZWN0IDogdXNlTGF5b3V0RWZmZWN0O1xuZnVuY3Rpb24gcnVuS2V5SGFuZGxlcihlLCBrZXlIYW5kbGVycykge1xuICB2YXIgaGFuZGxlciA9IGtleUhhbmRsZXJzW2Uua2V5XTtcblxuICBpZiAoaGFuZGxlcikge1xuICAgIGhhbmRsZXIoKTsgLy8gaWYgZXZlbnQgd2FzIGhhbmRsZWQgcHJldmVudCBvdGhlciBzaWRlIGVmZmVjdHMgKGUuZy4gcGFnZSBzY3JvbGwpXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHVzZUtleURvd24oYWN0aXZlLCBrZXlIYW5kbGVycykge1xuICB2YXIga2V5SGFuZGxlcnNSZWYgPSB1c2VSZWYoa2V5SGFuZGxlcnMpO1xuICBrZXlIYW5kbGVyc1JlZi5jdXJyZW50ID0ga2V5SGFuZGxlcnM7XG4gIHVzZUlzb21vcnBoaWNFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgICBydW5LZXlIYW5kbGVyKGV2ZW50LCBrZXlIYW5kbGVyc1JlZi5jdXJyZW50KTtcbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFthY3RpdmVdKTtcbn1cblxudmFyIE1vZGFsV3JhcHBlciA9IGZ1bmN0aW9uIE1vZGFsV3JhcHBlcihfcmVmKSB7XG4gIHZhciBvcGVuID0gX3JlZi5vcGVuLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgb2tMYWJlbCA9IF9yZWYub2tMYWJlbCxcbiAgICAgIGNhbmNlbExhYmVsID0gX3JlZi5jYW5jZWxMYWJlbCxcbiAgICAgIGNsZWFyTGFiZWwgPSBfcmVmLmNsZWFyTGFiZWwsXG4gICAgICB0b2RheUxhYmVsID0gX3JlZi50b2RheUxhYmVsLFxuICAgICAgc2hvd1RvZGF5QnV0dG9uID0gX3JlZi5zaG93VG9kYXlCdXR0b24sXG4gICAgICBjbGVhcmFibGUgPSBfcmVmLmNsZWFyYWJsZSxcbiAgICAgIERpYWxvZ1Byb3BzID0gX3JlZi5EaWFsb2dQcm9wcyxcbiAgICAgIHNob3dUYWJzID0gX3JlZi5zaG93VGFicyxcbiAgICAgIHdpZGVyID0gX3JlZi53aWRlcixcbiAgICAgIElucHV0Q29tcG9uZW50ID0gX3JlZi5JbnB1dENvbXBvbmVudCxcbiAgICAgIERhdGVJbnB1dFByb3BzID0gX3JlZi5EYXRlSW5wdXRQcm9wcyxcbiAgICAgIG9uQ2xlYXIgPSBfcmVmLm9uQ2xlYXIsXG4gICAgICBvbkFjY2VwdCA9IF9yZWYub25BY2NlcHQsXG4gICAgICBvbkRpc21pc3MgPSBfcmVmLm9uRGlzbWlzcyxcbiAgICAgIG9uU2V0VG9kYXkgPSBfcmVmLm9uU2V0VG9kYXksXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJvcGVuXCIsIFwiY2hpbGRyZW5cIiwgXCJva0xhYmVsXCIsIFwiY2FuY2VsTGFiZWxcIiwgXCJjbGVhckxhYmVsXCIsIFwidG9kYXlMYWJlbFwiLCBcInNob3dUb2RheUJ1dHRvblwiLCBcImNsZWFyYWJsZVwiLCBcIkRpYWxvZ1Byb3BzXCIsIFwic2hvd1RhYnNcIiwgXCJ3aWRlclwiLCBcIklucHV0Q29tcG9uZW50XCIsIFwiRGF0ZUlucHV0UHJvcHNcIiwgXCJvbkNsZWFyXCIsIFwib25BY2NlcHRcIiwgXCJvbkRpc21pc3NcIiwgXCJvblNldFRvZGF5XCJdKTtcblxuICB1c2VLZXlEb3duKG9wZW4sIHtcbiAgICBFbnRlcjogb25BY2NlcHRcbiAgfSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBjcmVhdGVFbGVtZW50KElucHV0Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgb3RoZXIsIERhdGVJbnB1dFByb3BzKSksIGNyZWF0ZUVsZW1lbnQoTW9kYWxEaWFsb2ckMSwgX2V4dGVuZHMoe1xuICAgIHdpZGVyOiB3aWRlcixcbiAgICBzaG93VGFiczogc2hvd1RhYnMsXG4gICAgb3Blbjogb3BlbixcbiAgICBvbkNsZWFyOiBvbkNsZWFyLFxuICAgIG9uQWNjZXB0OiBvbkFjY2VwdCxcbiAgICBvbkRpc21pc3M6IG9uRGlzbWlzcyxcbiAgICBvblNldFRvZGF5OiBvblNldFRvZGF5LFxuICAgIGNsZWFyTGFiZWw6IGNsZWFyTGFiZWwsXG4gICAgdG9kYXlMYWJlbDogdG9kYXlMYWJlbCxcbiAgICBva0xhYmVsOiBva0xhYmVsLFxuICAgIGNhbmNlbExhYmVsOiBjYW5jZWxMYWJlbCxcbiAgICBjbGVhcmFibGU6IGNsZWFyYWJsZSxcbiAgICBzaG93VG9kYXlCdXR0b246IHNob3dUb2RheUJ1dHRvbixcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSwgRGlhbG9nUHJvcHMpKSk7XG59O1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gTW9kYWxXcmFwcGVyLnByb3BUeXBlcyA9IHtcbiAgb2tMYWJlbDogbm9kZSxcbiAgY2FuY2VsTGFiZWw6IG5vZGUsXG4gIGNsZWFyTGFiZWw6IG5vZGUsXG4gIGNsZWFyYWJsZTogYm9vbCxcbiAgdG9kYXlMYWJlbDogbm9kZSxcbiAgc2hvd1RvZGF5QnV0dG9uOiBib29sLFxuICBEaWFsb2dQcm9wczogb2JqZWN0XG59IDogdm9pZCAwO1xuTW9kYWxXcmFwcGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgb2tMYWJlbDogJ09LJyxcbiAgY2FuY2VsTGFiZWw6ICdDYW5jZWwnLFxuICBjbGVhckxhYmVsOiAnQ2xlYXInLFxuICB0b2RheUxhYmVsOiAnVG9kYXknLFxuICBjbGVhcmFibGU6IGZhbHNlLFxuICBzaG93VG9kYXlCdXR0b246IGZhbHNlXG59O1xuXG52YXIgSW5saW5lV3JhcHBlciA9IGZ1bmN0aW9uIElubGluZVdyYXBwZXIoX3JlZikge1xuICB2YXIgb3BlbiA9IF9yZWYub3BlbixcbiAgICAgIHdpZGVyID0gX3JlZi53aWRlcixcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIFBvcG92ZXJQcm9wcyA9IF9yZWYuUG9wb3ZlclByb3BzLFxuICAgICAgb25DbGVhciA9IF9yZWYub25DbGVhcixcbiAgICAgIG9uRGlzbWlzcyA9IF9yZWYub25EaXNtaXNzLFxuICAgICAgb25TZXRUb2RheSA9IF9yZWYub25TZXRUb2RheSxcbiAgICAgIG9uQWNjZXB0ID0gX3JlZi5vbkFjY2VwdCxcbiAgICAgIHNob3dUYWJzID0gX3JlZi5zaG93VGFicyxcbiAgICAgIERhdGVJbnB1dFByb3BzID0gX3JlZi5EYXRlSW5wdXRQcm9wcyxcbiAgICAgIElucHV0Q29tcG9uZW50ID0gX3JlZi5JbnB1dENvbXBvbmVudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcIm9wZW5cIiwgXCJ3aWRlclwiLCBcImNoaWxkcmVuXCIsIFwiUG9wb3ZlclByb3BzXCIsIFwib25DbGVhclwiLCBcIm9uRGlzbWlzc1wiLCBcIm9uU2V0VG9kYXlcIiwgXCJvbkFjY2VwdFwiLCBcInNob3dUYWJzXCIsIFwiRGF0ZUlucHV0UHJvcHNcIiwgXCJJbnB1dENvbXBvbmVudFwiXSk7XG5cbiAgdmFyIHJlZiA9IHVzZVJlZigpO1xuICB1c2VLZXlEb3duKG9wZW4sIHtcbiAgICBFbnRlcjogb25BY2NlcHRcbiAgfSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBjcmVhdGVFbGVtZW50KElucHV0Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgb3RoZXIsIERhdGVJbnB1dFByb3BzLCB7XG4gICAgaW5wdXRSZWY6IHJlZlxuICB9KSksIGNyZWF0ZUVsZW1lbnQoUG9wb3ZlciwgX2V4dGVuZHMoe1xuICAgIG9wZW46IG9wZW4sXG4gICAgb25DbG9zZTogb25EaXNtaXNzLFxuICAgIGFuY2hvckVsOiByZWYuY3VycmVudCxcbiAgICBhbmNob3JPcmlnaW46IHtcbiAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgIGhvcml6b250YWw6ICdjZW50ZXInXG4gICAgfSxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IHtcbiAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgIGhvcml6b250YWw6ICdjZW50ZXInXG4gICAgfSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSwgUG9wb3ZlclByb3BzKSkpO1xufTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IElubGluZVdyYXBwZXIucHJvcFR5cGVzID0ge1xuICBvbk9wZW46IGZ1bmMsXG4gIG9uQ2xvc2U6IGZ1bmMsXG4gIFBvcG92ZXJQcm9wczogb2JqZWN0XG59IDogdm9pZCAwO1xuXG5mdW5jdGlvbiBnZXRXcmFwcGVyRnJvbVZhcmlhbnQodmFyaWFudCkge1xuICBzd2l0Y2ggKHZhcmlhbnQpIHtcbiAgICBjYXNlICdpbmxpbmUnOlxuICAgICAgcmV0dXJuIElubGluZVdyYXBwZXI7XG5cbiAgICBjYXNlICdzdGF0aWMnOlxuICAgICAgcmV0dXJuIFN0YXRpY1dyYXBwZXI7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIE1vZGFsV3JhcHBlcjtcbiAgfVxufVxudmFyIFZhcmlhbnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcbnZhciBXcmFwcGVyID0gZnVuY3Rpb24gV3JhcHBlcihfcmVmKSB7XG4gIHZhciB2YXJpYW50ID0gX3JlZi52YXJpYW50LFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1widmFyaWFudFwiXSk7XG5cbiAgdmFyIENvbXBvbmVudCA9IGdldFdyYXBwZXJGcm9tVmFyaWFudCh2YXJpYW50KTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVmFyaWFudENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdmFyaWFudCB8fCAnZGlhbG9nJ1xuICB9LCBjcmVhdGVFbGVtZW50KENvbXBvbmVudCwgcHJvcHMpKTtcbn07XG5cbmV4cG9ydCB7IERJQUxPR19XSURUSCBhcyBELCBWYXJpYW50Q29udGV4dCBhcyBWLCBXcmFwcGVyIGFzIFcsIGFycmF5SW5jbHVkZXMgYXMgYSwgVklFV19IRUlHSFQgYXMgYiwgRElBTE9HX1dJRFRIX1dJREVSIGFzIGMsIHJ1bktleUhhbmRsZXIgYXMgciwgdXNlSXNvbW9ycGhpY0VmZmVjdCBhcyB1IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1XcmFwcGVyLTI0MTk2NmQ3LmpzLm1hcFxuIiwiaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgJ3JlYWN0JztcbmltcG9ydCAncHJvcC10eXBlcyc7XG5leHBvcnQgeyBhIGFzIE11aVBpY2tlcnNDb250ZXh0LCBNIGFzIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLCB1IGFzIHVzZVV0aWxzIH0gZnJvbSAnLi91c2VVdGlscy1jZmI5NmFjOS5qcyc7XG5pbXBvcnQgJ2Nsc3gnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IHUgYXMgdXNlUGlja2VyU3RhdGUgfSBmcm9tICcuL21ha2VQaWNrZXJXaXRoU3RhdGUtNWE3OWNiOGEuanMnO1xuZXhwb3J0IHsgbSBhcyBtYWtlUGlja2VyV2l0aFN0YXRlLCBiIGFzIHVzZUtleWJvYXJkUGlja2VyU3RhdGUsIHUgYXMgdXNlUGlja2VyU3RhdGUsIHYgYXMgdmFsaWRhdGUgfSBmcm9tICcuL21ha2VQaWNrZXJXaXRoU3RhdGUtNWE3OWNiOGEuanMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCAnLi9XcmFwcGVyLTI0MTk2NmQ3LmpzJztcbmV4cG9ydCB7IGEgYXMgQ2FsZW5kYXIgfSBmcm9tICcuL0NhbGVuZGFyLTExYWU2MWY2LmpzJztcbmV4cG9ydCB7IERhdGVQaWNrZXIsIEtleWJvYXJkRGF0ZVBpY2tlciB9IGZyb20gJy4vRGF0ZVBpY2tlci5qcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XG5pbXBvcnQgJ3JpZm0nO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9TdmdJY29uJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheSc7XG5leHBvcnQgeyBQIGFzIFBpY2tlciB9IGZyb20gJy4vUGlja2VyLWNjZDliYTkwLmpzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGF5IH0gZnJvbSAnLi9EYXkuanMnO1xuaW1wb3J0ICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3Zlcic7XG5leHBvcnQgeyBhIGFzIENsb2NrIH0gZnJvbSAnLi9DbG9jay00OGZkZTk3NS5qcyc7XG5leHBvcnQgeyBDbG9ja1ZpZXcsIGRlZmF1bHQgYXMgVGltZVBpY2tlclZpZXcgfSBmcm9tICcuL0Nsb2NrVmlldy5qcyc7XG5pbXBvcnQgJy4vVGltZVBpY2tlclRvb2xiYXItODExMDBmYWIuanMnO1xuZXhwb3J0IHsgS2V5Ym9hcmRUaW1lUGlja2VyLCBUaW1lUGlja2VyIH0gZnJvbSAnLi9UaW1lUGlja2VyLmpzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1RhYnMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5leHBvcnQgeyBEYXRlVGltZVBpY2tlciwgS2V5Ym9hcmREYXRlVGltZVBpY2tlciB9IGZyb20gJy4vRGF0ZVRpbWVQaWNrZXIuanMnO1xuXG5mdW5jdGlvbiB1c2VTdGF0aWNTdGF0ZShfcmVmKSB7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBfcmVmJGF1dG9PayA9IF9yZWYuYXV0b09rLFxuICAgICAgYXV0b09rID0gX3JlZiRhdXRvT2sgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGF1dG9PayxcbiAgICAgIG9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZSxcbiAgICAgIGRlZmF1bHRGb3JtYXQgPSBfcmVmLmRlZmF1bHRGb3JtYXQ7XG5cbiAgdmFyIF91c2VQaWNrZXJTdGF0ZSA9IHVzZVBpY2tlclN0YXRlKHtcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgIGF1dG9PazogYXV0b09rXG4gIH0sIHtcbiAgICAvLyBqdXN0IGEgcmFuZG9tIGZvcm1hdCwgbW9zdGx5IGFsd2F5cyBub3QgbmVlZGVkIGZvciB1c2Vyc1xuICAgIGdldERlZmF1bHRGb3JtYXQ6IGZ1bmN0aW9uIGdldERlZmF1bHRGb3JtYXQoKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdEZvcm1hdCB8fCAnTU0vZGQveXl5eSc7XG4gICAgfVxuICB9KSxcbiAgICAgIHBpY2tlclByb3BzID0gX3VzZVBpY2tlclN0YXRlLnBpY2tlclByb3BzLFxuICAgICAgd3JhcHBlclByb3BzID0gX3VzZVBpY2tlclN0YXRlLndyYXBwZXJQcm9wcyxcbiAgICAgIGlucHV0UHJvcHMgPSBfdXNlUGlja2VyU3RhdGUuaW5wdXRQcm9wcztcblxuICByZXR1cm4ge1xuICAgIHBpY2tlclByb3BzOiBwaWNrZXJQcm9wcyxcbiAgICB3cmFwcGVyUHJvcHM6IHdyYXBwZXJQcm9wcyxcbiAgICBpbnB1dFByb3BzOiBpbnB1dFByb3BzXG4gIH07XG59XG5cbmV4cG9ydCB7IHVzZVN0YXRpY1N0YXRlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IFJlYWN0X19kZWZhdWx0LCB7IGNyZWF0ZUVsZW1lbnQsIHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VEZWJ1Z1ZhbHVlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBib29sLCBzdHJpbmcsIGFueSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdSBhcyB1c2VVdGlscyB9IGZyb20gJy4vdXNlVXRpbHMtY2ZiOTZhYzkuanMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgZmFkZSwgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IHsgVyBhcyBXcmFwcGVyIH0gZnJvbSAnLi9XcmFwcGVyLTI0MTk2NmQ3LmpzJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcbmltcG9ydCB7IFJpZm0gfSBmcm9tICdyaWZtJztcbmltcG9ydCBTdmdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N2Z0ljb24nO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXknO1xuaW1wb3J0IHsgUCBhcyBQaWNrZXIgfSBmcm9tICcuL1BpY2tlci1jY2Q5YmE5MC5qcyc7XG5cbnZhciB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICB2YXIgdGV4dENvbG9yID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dCA6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZFtcImRlZmF1bHRcIl0pO1xuICByZXR1cm4ge1xuICAgIHRvb2xiYXJUeHQ6IHtcbiAgICAgIGNvbG9yOiBmYWRlKHRleHRDb2xvciwgMC41NClcbiAgICB9LFxuICAgIHRvb2xiYXJCdG5TZWxlY3RlZDoge1xuICAgICAgY29sb3I6IHRleHRDb2xvclxuICAgIH1cbiAgfTtcbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlcnNUb29sYmFyVGV4dCdcbn0pO1xuXG52YXIgVG9vbGJhclRleHQgPSBmdW5jdGlvbiBUb29sYmFyVGV4dChfcmVmKSB7XG4gIHZhciBzZWxlY3RlZCA9IF9yZWYuc2VsZWN0ZWQsXG4gICAgICBsYWJlbCA9IF9yZWYubGFiZWwsXG4gICAgICBfcmVmJGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJGNsYXNzTmFtZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInNlbGVjdGVkXCIsIFwibGFiZWxcIiwgXCJjbGFzc05hbWVcIl0pO1xuXG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIF9leHRlbmRzKHtcbiAgICBjaGlsZHJlbjogbGFiZWwsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMudG9vbGJhclR4dCwgY2xhc3NOYW1lLCBzZWxlY3RlZCAmJiBjbGFzc2VzLnRvb2xiYXJCdG5TZWxlY3RlZClcbiAgfSwgb3RoZXIpKTtcbn07XG5cbnZhciBUb29sYmFyQnV0dG9uID0gZnVuY3Rpb24gVG9vbGJhckJ1dHRvbihfcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gX3JlZi5jbGFzc2VzLFxuICAgICAgX3JlZiRjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYkY2xhc3NOYW1lID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRjbGFzc05hbWUsXG4gICAgICBsYWJlbCA9IF9yZWYubGFiZWwsXG4gICAgICBzZWxlY3RlZCA9IF9yZWYuc2VsZWN0ZWQsXG4gICAgICB2YXJpYW50ID0gX3JlZi52YXJpYW50LFxuICAgICAgYWxpZ24gPSBfcmVmLmFsaWduLFxuICAgICAgdHlwb2dyYXBoeUNsYXNzTmFtZSA9IF9yZWYudHlwb2dyYXBoeUNsYXNzTmFtZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJsYWJlbFwiLCBcInNlbGVjdGVkXCIsIFwidmFyaWFudFwiLCBcImFsaWduXCIsIFwidHlwb2dyYXBoeUNsYXNzTmFtZVwiXSk7XG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBfZXh0ZW5kcyh7XG4gICAgdmFyaWFudDogXCJ0ZXh0XCIsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMudG9vbGJhckJ0biwgY2xhc3NOYW1lKVxuICB9LCBvdGhlciksIGNyZWF0ZUVsZW1lbnQoVG9vbGJhclRleHQsIHtcbiAgICBhbGlnbjogYWxpZ24sXG4gICAgY2xhc3NOYW1lOiB0eXBvZ3JhcGh5Q2xhc3NOYW1lLFxuICAgIHZhcmlhbnQ6IHZhcmlhbnQsXG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIHNlbGVjdGVkOiBzZWxlY3RlZFxuICB9KSk7XG59O1xuXG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUb29sYmFyQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgc2VsZWN0ZWQ6IGJvb2wuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGFzc2VzOiBhbnkuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gIGlubmVyUmVmOiBhbnlcbn0gOiB2b2lkIDA7XG5Ub29sYmFyQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJ1xufTtcbnZhciBzdHlsZXMgPSBjcmVhdGVTdHlsZXMoe1xuICB0b29sYmFyQnRuOiB7XG4gICAgcGFkZGluZzogMCxcbiAgICBtaW5XaWR0aDogJzE2cHgnLFxuICAgIHRleHRUcmFuc2Zvcm06ICdub25lJ1xuICB9XG59KTtcbnZhciBUb29sYmFyQnV0dG9uJDEgPSB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpUGlja2Vyc1Rvb2xiYXJCdXR0b24nXG59KShUb29sYmFyQnV0dG9uKTtcblxudmFyIHVzZVN0eWxlcyQxID0gbWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0b29sYmFyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgaGVpZ2h0OiAxMDAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluIDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kW1wiZGVmYXVsdFwiXVxuICAgIH0sXG4gICAgdG9vbGJhckxhbmRzY2FwZToge1xuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBtYXhXaWR0aDogMTUwLFxuICAgICAgcGFkZGluZzogOCxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCdcbiAgICB9XG4gIH07XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzVG9vbGJhcidcbn0pO1xuXG52YXIgUGlja2VyVG9vbGJhciA9IGZ1bmN0aW9uIFBpY2tlclRvb2xiYXIoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgaXNMYW5kc2NhcGUgPSBfcmVmLmlzTGFuZHNjYXBlLFxuICAgICAgX3JlZiRjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYkY2xhc3NOYW1lID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRjbGFzc05hbWUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjaGlsZHJlblwiLCBcImlzTGFuZHNjYXBlXCIsIFwiY2xhc3NOYW1lXCJdKTtcblxuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcyQxKCk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFRvb2xiYXIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy50b29sYmFyLCBjbGFzc05hbWUsIGlzTGFuZHNjYXBlICYmIGNsYXNzZXMudG9vbGJhckxhbmRzY2FwZSlcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbik7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxudmFyIFB1cmVEYXRlSW5wdXQgPSBmdW5jdGlvbiBQdXJlRGF0ZUlucHV0KF9yZWYpIHtcbiAgdmFyIGlucHV0VmFsdWUgPSBfcmVmLmlucHV0VmFsdWUsXG4gICAgICBpbnB1dFZhcmlhbnQgPSBfcmVmLmlucHV0VmFyaWFudCxcbiAgICAgIHZhbGlkYXRpb25FcnJvciA9IF9yZWYudmFsaWRhdGlvbkVycm9yLFxuICAgICAgSW5wdXRQcm9wcyA9IF9yZWYuSW5wdXRQcm9wcyxcbiAgICAgIG9uT3BlbiA9IF9yZWYub3BlblBpY2tlcixcbiAgICAgIF9yZWYkVGV4dEZpZWxkQ29tcG9uZSA9IF9yZWYuVGV4dEZpZWxkQ29tcG9uZW50LFxuICAgICAgVGV4dEZpZWxkQ29tcG9uZW50ID0gX3JlZiRUZXh0RmllbGRDb21wb25lID09PSB2b2lkIDAgPyBUZXh0RmllbGQgOiBfcmVmJFRleHRGaWVsZENvbXBvbmUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJpbnB1dFZhbHVlXCIsIFwiaW5wdXRWYXJpYW50XCIsIFwidmFsaWRhdGlvbkVycm9yXCIsIFwiSW5wdXRQcm9wc1wiLCBcIm9wZW5QaWNrZXJcIiwgXCJUZXh0RmllbGRDb21wb25lbnRcIl0pO1xuXG4gIHZhciBQdXJlRGF0ZUlucHV0UHJvcHMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgSW5wdXRQcm9wcywge1xuICAgICAgcmVhZE9ubHk6IHRydWVcbiAgICB9KTtcbiAgfSwgW0lucHV0UHJvcHNdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVGV4dEZpZWxkQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgZXJyb3I6IEJvb2xlYW4odmFsaWRhdGlvbkVycm9yKSxcbiAgICBoZWxwZXJUZXh0OiB2YWxpZGF0aW9uRXJyb3JcbiAgfSwgb3RoZXIsIHtcbiAgICAvLyBkbyBub3Qgb3ZlcnJpZGFibGVcbiAgICBvbkNsaWNrOiBvbk9wZW4sXG4gICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgdmFyaWFudDogaW5wdXRWYXJpYW50LFxuICAgIElucHV0UHJvcHM6IFB1cmVEYXRlSW5wdXRQcm9wcyxcbiAgICBvbktleURvd246IGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG4gICAgICAvLyBzcGFjZVxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgb25PcGVuKCk7XG4gICAgICB9XG4gICAgfVxuICB9KSk7XG59O1xuUHVyZURhdGVJbnB1dC5kaXNwbGF5TmFtZSA9ICdQdXJlRGF0ZUlucHV0JztcblxudmFyIEtleWJvYXJkSWNvbiA9IGZ1bmN0aW9uIEtleWJvYXJkSWNvbihwcm9wcykge1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChTdmdJY29uLCBwcm9wcywgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE3IDEyaC01djVoNXYtNXpNMTYgMXYySDhWMUg2djJINWMtMS4xMSAwLTEuOTkuOS0xLjk5IDJMMyAxOWMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yaC0xVjFoLTJ6bTMgMThINVY4aDE0djExelwiXG4gIH0pLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZDogXCJNMCAwaDI0djI0SDB6XCJcbiAgfSkpO1xufTtcblxudmFyIGdldERpc3BsYXlEYXRlID0gZnVuY3Rpb24gZ2V0RGlzcGxheURhdGUodmFsdWUsIGZvcm1hdCwgdXRpbHMsIGlzRW1wdHksIF9yZWYpIHtcbiAgdmFyIGludmFsaWRMYWJlbCA9IF9yZWYuaW52YWxpZExhYmVsLFxuICAgICAgZW1wdHlMYWJlbCA9IF9yZWYuZW1wdHlMYWJlbCxcbiAgICAgIGxhYmVsRnVuYyA9IF9yZWYubGFiZWxGdW5jO1xuICB2YXIgZGF0ZSA9IHV0aWxzLmRhdGUodmFsdWUpO1xuXG4gIGlmIChsYWJlbEZ1bmMpIHtcbiAgICByZXR1cm4gbGFiZWxGdW5jKGlzRW1wdHkgPyBudWxsIDogZGF0ZSwgaW52YWxpZExhYmVsKTtcbiAgfVxuXG4gIGlmIChpc0VtcHR5KSB7XG4gICAgcmV0dXJuIGVtcHR5TGFiZWwgfHwgJyc7XG4gIH1cblxuICByZXR1cm4gdXRpbHMuaXNWYWxpZChkYXRlKSA/IHV0aWxzLmZvcm1hdChkYXRlLCBmb3JtYXQpIDogaW52YWxpZExhYmVsO1xufTtcblxudmFyIGdldENvbXBhcmlzb25NYXhEYXRlID0gZnVuY3Rpb24gZ2V0Q29tcGFyaXNvbk1heERhdGUodXRpbHMsIHN0cmljdENvbXBhcmVEYXRlcywgZGF0ZSkge1xuICBpZiAoc3RyaWN0Q29tcGFyZURhdGVzKSB7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICByZXR1cm4gdXRpbHMuZW5kT2ZEYXkoZGF0ZSk7XG59O1xuXG52YXIgZ2V0Q29tcGFyaXNvbk1pbkRhdGUgPSBmdW5jdGlvbiBnZXRDb21wYXJpc29uTWluRGF0ZSh1dGlscywgc3RyaWN0Q29tcGFyZURhdGVzLCBkYXRlKSB7XG4gIGlmIChzdHJpY3RDb21wYXJlRGF0ZXMpIHtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIHJldHVybiB1dGlscy5zdGFydE9mRGF5KGRhdGUpO1xufTtcblxudmFyIHZhbGlkYXRlID0gZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIHV0aWxzLCBfcmVmMikge1xuICB2YXIgbWF4RGF0ZSA9IF9yZWYyLm1heERhdGUsXG4gICAgICBtaW5EYXRlID0gX3JlZjIubWluRGF0ZSxcbiAgICAgIGRpc2FibGVQYXN0ID0gX3JlZjIuZGlzYWJsZVBhc3QsXG4gICAgICBkaXNhYmxlRnV0dXJlID0gX3JlZjIuZGlzYWJsZUZ1dHVyZSxcbiAgICAgIG1heERhdGVNZXNzYWdlID0gX3JlZjIubWF4RGF0ZU1lc3NhZ2UsXG4gICAgICBtaW5EYXRlTWVzc2FnZSA9IF9yZWYyLm1pbkRhdGVNZXNzYWdlLFxuICAgICAgaW52YWxpZERhdGVNZXNzYWdlID0gX3JlZjIuaW52YWxpZERhdGVNZXNzYWdlLFxuICAgICAgc3RyaWN0Q29tcGFyZURhdGVzID0gX3JlZjIuc3RyaWN0Q29tcGFyZURhdGVzO1xuICB2YXIgcGFyc2VkVmFsdWUgPSB1dGlscy5kYXRlKHZhbHVlKTsgLy8gaWYgbnVsbCAtIGRvIG5vdCBzaG93IGVycm9yXG5cbiAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKCF1dGlscy5pc1ZhbGlkKHZhbHVlKSkge1xuICAgIHJldHVybiBpbnZhbGlkRGF0ZU1lc3NhZ2U7XG4gIH1cblxuICBpZiAobWF4RGF0ZSAmJiB1dGlscy5pc0FmdGVyKHBhcnNlZFZhbHVlLCBnZXRDb21wYXJpc29uTWF4RGF0ZSh1dGlscywgISFzdHJpY3RDb21wYXJlRGF0ZXMsIHV0aWxzLmRhdGUobWF4RGF0ZSkpKSkge1xuICAgIHJldHVybiBtYXhEYXRlTWVzc2FnZTtcbiAgfVxuXG4gIGlmIChkaXNhYmxlRnV0dXJlICYmIHV0aWxzLmlzQWZ0ZXIocGFyc2VkVmFsdWUsIGdldENvbXBhcmlzb25NYXhEYXRlKHV0aWxzLCAhIXN0cmljdENvbXBhcmVEYXRlcywgdXRpbHMuZGF0ZSgpKSkpIHtcbiAgICByZXR1cm4gbWF4RGF0ZU1lc3NhZ2U7XG4gIH1cblxuICBpZiAobWluRGF0ZSAmJiB1dGlscy5pc0JlZm9yZShwYXJzZWRWYWx1ZSwgZ2V0Q29tcGFyaXNvbk1pbkRhdGUodXRpbHMsICEhc3RyaWN0Q29tcGFyZURhdGVzLCB1dGlscy5kYXRlKG1pbkRhdGUpKSkpIHtcbiAgICByZXR1cm4gbWluRGF0ZU1lc3NhZ2U7XG4gIH1cblxuICBpZiAoZGlzYWJsZVBhc3QgJiYgdXRpbHMuaXNCZWZvcmUocGFyc2VkVmFsdWUsIGdldENvbXBhcmlzb25NaW5EYXRlKHV0aWxzLCAhIXN0cmljdENvbXBhcmVEYXRlcywgdXRpbHMuZGF0ZSgpKSkpIHtcbiAgICByZXR1cm4gbWluRGF0ZU1lc3NhZ2U7XG4gIH1cblxuICByZXR1cm4gJyc7XG59O1xuZnVuY3Rpb24gcGljazEyaE9yMjRoRm9ybWF0KHVzZXJGb3JtYXQpIHtcbiAgdmFyIGFtcG0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG4gIHZhciBmb3JtYXRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgaWYgKHVzZXJGb3JtYXQpIHtcbiAgICByZXR1cm4gdXNlckZvcm1hdDtcbiAgfVxuXG4gIHJldHVybiBhbXBtID8gZm9ybWF0c1snMTJoJ10gOiBmb3JtYXRzWycyNGgnXTtcbn1cbmZ1bmN0aW9uIG1ha2VNYXNrRnJvbUZvcm1hdChmb3JtYXQsIG51bWJlck1hc2tDaGFyKSB7XG4gIHJldHVybiBmb3JtYXQucmVwbGFjZSgvW2Etel0vZ2ksIG51bWJlck1hc2tDaGFyKTtcbn1cbnZhciBtYXNrZWREYXRlRm9ybWF0dGVyID0gZnVuY3Rpb24gbWFza2VkRGF0ZUZvcm1hdHRlcihtYXNrLCBudW1iZXJNYXNrQ2hhciwgcmVmdXNlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIHBhcnNlZCA9IHZhbHVlLnJlcGxhY2UocmVmdXNlLCAnJyk7XG5cbiAgICBpZiAocGFyc2VkID09PSAnJykge1xuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG5cbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIG4gPSAwO1xuXG4gICAgd2hpbGUgKGkgPCBtYXNrLmxlbmd0aCkge1xuICAgICAgdmFyIG1hc2tDaGFyID0gbWFza1tpXTtcblxuICAgICAgaWYgKG1hc2tDaGFyID09PSBudW1iZXJNYXNrQ2hhciAmJiBuIDwgcGFyc2VkLmxlbmd0aCkge1xuICAgICAgICB2YXIgcGFyc2VkQ2hhciA9IHBhcnNlZFtuXTtcbiAgICAgICAgcmVzdWx0ICs9IHBhcnNlZENoYXI7XG4gICAgICAgIG4gKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCArPSBtYXNrQ2hhcjtcbiAgICAgIH1cblxuICAgICAgaSArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDEob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMSh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDEoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMShzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgS2V5Ym9hcmREYXRlSW5wdXQgPSBmdW5jdGlvbiBLZXlib2FyZERhdGVJbnB1dChfcmVmKSB7XG4gIHZhciBpbnB1dFZhbHVlID0gX3JlZi5pbnB1dFZhbHVlLFxuICAgICAgaW5wdXRWYXJpYW50ID0gX3JlZi5pbnB1dFZhcmlhbnQsXG4gICAgICB2YWxpZGF0aW9uRXJyb3IgPSBfcmVmLnZhbGlkYXRpb25FcnJvcixcbiAgICAgIEtleWJvYXJkQnV0dG9uUHJvcHMgPSBfcmVmLktleWJvYXJkQnV0dG9uUHJvcHMsXG4gICAgICBJbnB1dEFkb3JubWVudFByb3BzID0gX3JlZi5JbnB1dEFkb3JubWVudFByb3BzLFxuICAgICAgb25PcGVuID0gX3JlZi5vcGVuUGlja2VyLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgSW5wdXRQcm9wcyA9IF9yZWYuSW5wdXRQcm9wcyxcbiAgICAgIG1hc2sgPSBfcmVmLm1hc2ssXG4gICAgICBfcmVmJG1hc2tDaGFyID0gX3JlZi5tYXNrQ2hhcixcbiAgICAgIG1hc2tDaGFyID0gX3JlZiRtYXNrQ2hhciA9PT0gdm9pZCAwID8gJ18nIDogX3JlZiRtYXNrQ2hhcixcbiAgICAgIF9yZWYkcmVmdXNlID0gX3JlZi5yZWZ1c2UsXG4gICAgICByZWZ1c2UgPSBfcmVmJHJlZnVzZSA9PT0gdm9pZCAwID8gL1teXFxkXSsvZ2kgOiBfcmVmJHJlZnVzZSxcbiAgICAgIGZvcm1hdCA9IF9yZWYuZm9ybWF0LFxuICAgICAga2V5Ym9hcmRJY29uID0gX3JlZi5rZXlib2FyZEljb24sXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICByaWZtRm9ybWF0dGVyID0gX3JlZi5yaWZtRm9ybWF0dGVyLFxuICAgICAgX3JlZiRUZXh0RmllbGRDb21wb25lID0gX3JlZi5UZXh0RmllbGRDb21wb25lbnQsXG4gICAgICBUZXh0RmllbGRDb21wb25lbnQgPSBfcmVmJFRleHRGaWVsZENvbXBvbmUgPT09IHZvaWQgMCA/IFRleHRGaWVsZCA6IF9yZWYkVGV4dEZpZWxkQ29tcG9uZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImlucHV0VmFsdWVcIiwgXCJpbnB1dFZhcmlhbnRcIiwgXCJ2YWxpZGF0aW9uRXJyb3JcIiwgXCJLZXlib2FyZEJ1dHRvblByb3BzXCIsIFwiSW5wdXRBZG9ybm1lbnRQcm9wc1wiLCBcIm9wZW5QaWNrZXJcIiwgXCJvbkNoYW5nZVwiLCBcIklucHV0UHJvcHNcIiwgXCJtYXNrXCIsIFwibWFza0NoYXJcIiwgXCJyZWZ1c2VcIiwgXCJmb3JtYXRcIiwgXCJrZXlib2FyZEljb25cIiwgXCJkaXNhYmxlZFwiLCBcInJpZm1Gb3JtYXR0ZXJcIiwgXCJUZXh0RmllbGRDb21wb25lbnRcIl0pO1xuXG4gIHZhciBpbnB1dE1hc2sgPSBtYXNrIHx8IG1ha2VNYXNrRnJvbUZvcm1hdChmb3JtYXQsIG1hc2tDaGFyKTsgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgdmFyIGZvcm1hdHRlciA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtYXNrZWREYXRlRm9ybWF0dGVyKGlucHV0TWFzaywgbWFza0NoYXIsIHJlZnVzZSk7XG4gIH0sIFtpbnB1dE1hc2ssIG1hc2tDaGFyLCByZWZ1c2VdKTtcbiAgdmFyIHBvc2l0aW9uID0gSW5wdXRBZG9ybm1lbnRQcm9wcyAmJiBJbnB1dEFkb3JubWVudFByb3BzLnBvc2l0aW9uID8gSW5wdXRBZG9ybm1lbnRQcm9wcy5wb3NpdGlvbiA6ICdlbmQnO1xuXG4gIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UodGV4dCkge1xuICAgIHZhciBmaW5hbFN0cmluZyA9IHRleHQgPT09ICcnIHx8IHRleHQgPT09IGlucHV0TWFzayA/IG51bGwgOiB0ZXh0O1xuICAgIG9uQ2hhbmdlKGZpbmFsU3RyaW5nKTtcbiAgfTtcblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChSaWZtLCB7XG4gICAga2V5OiBpbnB1dE1hc2ssXG4gICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICByZWZ1c2U6IHJlZnVzZSxcbiAgICBmb3JtYXQ6IHJpZm1Gb3JtYXR0ZXIgfHwgZm9ybWF0dGVyXG4gIH0sIGZ1bmN0aW9uIChfcmVmMikge1xuICAgIHZhciBvbkNoYW5nZSA9IF9yZWYyLm9uQ2hhbmdlLFxuICAgICAgICB2YWx1ZSA9IF9yZWYyLnZhbHVlO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFRleHRGaWVsZENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgZXJyb3I6IEJvb2xlYW4odmFsaWRhdGlvbkVycm9yKSxcbiAgICAgIGhlbHBlclRleHQ6IHZhbGlkYXRpb25FcnJvclxuICAgIH0sIG90aGVyLCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICB2YXJpYW50OiBpbnB1dFZhcmlhbnQsXG4gICAgICBJbnB1dFByb3BzOiBfb2JqZWN0U3ByZWFkJDEoe30sIElucHV0UHJvcHMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocG9zaXRpb24sIFwiQWRvcm5tZW50XCIpLCBjcmVhdGVFbGVtZW50KElucHV0QWRvcm5tZW50LCBfZXh0ZW5kcyh7XG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICAgICAgfSwgSW5wdXRBZG9ybm1lbnRQcm9wcyksIGNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwgX2V4dGVuZHMoe1xuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgICAgIH0sIEtleWJvYXJkQnV0dG9uUHJvcHMsIHtcbiAgICAgICAgb25DbGljazogb25PcGVuXG4gICAgICB9KSwga2V5Ym9hcmRJY29uKSkpKVxuICAgIH0pKTtcbiAgfSk7XG59O1xuS2V5Ym9hcmREYXRlSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBrZXlib2FyZEljb246IGNyZWF0ZUVsZW1lbnQoS2V5Ym9hcmRJY29uLCBudWxsKVxufTtcblxuZnVuY3Rpb24gdXNlT3BlblN0YXRlKF9yZWYpIHtcbiAgdmFyIG9wZW4gPSBfcmVmLm9wZW4sXG4gICAgICBvbk9wZW4gPSBfcmVmLm9uT3BlbixcbiAgICAgIG9uQ2xvc2UgPSBfcmVmLm9uQ2xvc2U7XG4gIHZhciBzZXRJc09wZW5TdGF0ZSA9IG51bGw7XG5cbiAgaWYgKG9wZW4gPT09IHVuZGVmaW5lZCB8fCBvcGVuID09PSBudWxsKSB7XG4gICAgLy8gVGhlIGNvbXBvbmVudCBpcyB1bmNvbnRyb2xsZWQsIHNvIHdlIG5lZWQgdG8gZ2l2ZSBpdCBpdHMgb3duIHN0YXRlLlxuICAgIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB2YXIgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMik7XG5cbiAgICBvcGVuID0gX3VzZVN0YXRlMlswXTtcbiAgICBzZXRJc09wZW5TdGF0ZSA9IF91c2VTdGF0ZTJbMV07XG4gIH0gLy8gcHJldHRpZXItaWdub3JlXG5cblxuICB2YXIgc2V0SXNPcGVuID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5ld0lzT3Blbikge1xuICAgIHNldElzT3BlblN0YXRlICYmIHNldElzT3BlblN0YXRlKG5ld0lzT3Blbik7XG4gICAgcmV0dXJuIG5ld0lzT3BlbiA/IG9uT3BlbiAmJiBvbk9wZW4oKSA6IG9uQ2xvc2UgJiYgb25DbG9zZSgpO1xuICB9LCBbb25PcGVuLCBvbkNsb3NlLCBzZXRJc09wZW5TdGF0ZV0pO1xuICByZXR1cm4ge1xuICAgIGlzT3Blbjogb3BlbixcbiAgICBzZXRJc09wZW46IHNldElzT3BlblxuICB9O1xufVxuXG52YXIgdXNlVmFsdWVUb0RhdGUgPSBmdW5jdGlvbiB1c2VWYWx1ZVRvRGF0ZSh1dGlscywgX3JlZikge1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgaW5pdGlhbEZvY3VzZWREYXRlID0gX3JlZi5pbml0aWFsRm9jdXNlZERhdGU7XG4gIHZhciBub3dSZWYgPSB1c2VSZWYodXRpbHMuZGF0ZSgpKTtcbiAgdmFyIGRhdGUgPSB1dGlscy5kYXRlKHZhbHVlIHx8IGluaXRpYWxGb2N1c2VkRGF0ZSB8fCBub3dSZWYuY3VycmVudCk7XG4gIHJldHVybiBkYXRlICYmIHV0aWxzLmlzVmFsaWQoZGF0ZSkgPyBkYXRlIDogbm93UmVmLmN1cnJlbnQ7XG59O1xuXG5mdW5jdGlvbiB1c2VEYXRlVmFsdWVzKHByb3BzLCBvcHRpb25zKSB7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHZhciBkYXRlID0gdXNlVmFsdWVUb0RhdGUodXRpbHMsIHByb3BzKTtcbiAgdmFyIGZvcm1hdCA9IHByb3BzLmZvcm1hdCB8fCBvcHRpb25zLmdldERlZmF1bHRGb3JtYXQoKTtcbiAgcmV0dXJuIHtcbiAgICBkYXRlOiBkYXRlLFxuICAgIGZvcm1hdDogZm9ybWF0XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZVBpY2tlclN0YXRlKHByb3BzLCBvcHRpb25zKSB7XG4gIHZhciBhdXRvT2sgPSBwcm9wcy5hdXRvT2ssXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgcmVhZE9ubHkgPSBwcm9wcy5yZWFkT25seSxcbiAgICAgIG9uQWNjZXB0ID0gcHJvcHMub25BY2NlcHQsXG4gICAgICBfb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIG9uRXJyb3IgPSBwcm9wcy5vbkVycm9yLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIHZhcmlhbnQgPSBwcm9wcy52YXJpYW50O1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuXG4gIHZhciBfdXNlT3BlblN0YXRlID0gdXNlT3BlblN0YXRlKHByb3BzKSxcbiAgICAgIGlzT3BlbiA9IF91c2VPcGVuU3RhdGUuaXNPcGVuLFxuICAgICAgc2V0SXNPcGVuID0gX3VzZU9wZW5TdGF0ZS5zZXRJc09wZW47XG5cbiAgdmFyIF91c2VEYXRlVmFsdWVzID0gdXNlRGF0ZVZhbHVlcyhwcm9wcywgb3B0aW9ucyksXG4gICAgICBkYXRlID0gX3VzZURhdGVWYWx1ZXMuZGF0ZSxcbiAgICAgIGZvcm1hdCA9IF91c2VEYXRlVmFsdWVzLmZvcm1hdDtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZGF0ZSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIHBpY2tlckRhdGUgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0UGlja2VyRGF0ZSA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBpZiB2YWx1ZSB3YXMgY2hhbmdlZCBpbiBjbG9zZWQgc3RhdGUgLSB0cmVhdCBpdCBhcyBhY2NlcHRlZFxuICAgIGlmICghaXNPcGVuICYmICF1dGlscy5pc0VxdWFsKHBpY2tlckRhdGUsIGRhdGUpKSB7XG4gICAgICBzZXRQaWNrZXJEYXRlKGRhdGUpO1xuICAgIH1cbiAgfSwgW2RhdGUsIGlzT3BlbiwgcGlja2VyRGF0ZSwgdXRpbHNdKTtcbiAgdmFyIGFjY2VwdERhdGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoYWNjZXB0ZWREYXRlKSB7XG4gICAgX29uQ2hhbmdlKGFjY2VwdGVkRGF0ZSk7XG5cbiAgICBpZiAob25BY2NlcHQpIHtcbiAgICAgIG9uQWNjZXB0KGFjY2VwdGVkRGF0ZSk7XG4gICAgfVxuXG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgfSwgW29uQWNjZXB0LCBfb25DaGFuZ2UsIHNldElzT3Blbl0pO1xuICB2YXIgd3JhcHBlclByb3BzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcm1hdDogZm9ybWF0LFxuICAgICAgb3BlbjogaXNPcGVuLFxuICAgICAgb25DbGVhcjogZnVuY3Rpb24gb25DbGVhcigpIHtcbiAgICAgICAgcmV0dXJuIGFjY2VwdERhdGUobnVsbCk7XG4gICAgICB9LFxuICAgICAgb25BY2NlcHQ6IGZ1bmN0aW9uIG9uQWNjZXB0KCkge1xuICAgICAgICByZXR1cm4gYWNjZXB0RGF0ZShwaWNrZXJEYXRlKTtcbiAgICAgIH0sXG4gICAgICBvblNldFRvZGF5OiBmdW5jdGlvbiBvblNldFRvZGF5KCkge1xuICAgICAgICByZXR1cm4gc2V0UGlja2VyRGF0ZSh1dGlscy5kYXRlKCkpO1xuICAgICAgfSxcbiAgICAgIG9uRGlzbWlzczogZnVuY3Rpb24gb25EaXNtaXNzKCkge1xuICAgICAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFthY2NlcHREYXRlLCBmb3JtYXQsIGlzT3BlbiwgcGlja2VyRGF0ZSwgc2V0SXNPcGVuLCB1dGlsc10pO1xuICB2YXIgcGlja2VyUHJvcHMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogcGlja2VyRGF0ZSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdEYXRlKSB7XG4gICAgICAgIHZhciBpc0ZpbmlzaCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgICAgICAgc2V0UGlja2VyRGF0ZShuZXdEYXRlKTtcblxuICAgICAgICBpZiAoaXNGaW5pc2ggJiYgYXV0b09rKSB7XG4gICAgICAgICAgYWNjZXB0RGF0ZShuZXdEYXRlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gc2ltdWxhdGUgYXV0b09rLCBidXQgZG8gbm90IGNsb3NlIHRoZSBtb2RhbFxuXG5cbiAgICAgICAgaWYgKHZhcmlhbnQgPT09ICdpbmxpbmUnIHx8IHZhcmlhbnQgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgX29uQ2hhbmdlKG5ld0RhdGUpO1xuXG4gICAgICAgICAgb25BY2NlcHQgJiYgb25BY2NlcHQobmV3RGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9LCBbYWNjZXB0RGF0ZSwgYXV0b09rLCBvbkFjY2VwdCwgX29uQ2hhbmdlLCBwaWNrZXJEYXRlLCB2YXJpYW50XSk7XG4gIHZhciB2YWxpZGF0aW9uRXJyb3IgPSB2YWxpZGF0ZSh2YWx1ZSwgdXRpbHMsIHByb3BzKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob25FcnJvcikge1xuICAgICAgb25FcnJvcih2YWxpZGF0aW9uRXJyb3IsIHZhbHVlKTtcbiAgICB9XG4gIH0sIFtvbkVycm9yLCB2YWxpZGF0aW9uRXJyb3IsIHZhbHVlXSk7XG4gIHZhciBpbnB1dFZhbHVlID0gZ2V0RGlzcGxheURhdGUoZGF0ZSwgZm9ybWF0LCB1dGlscywgdmFsdWUgPT09IG51bGwsIHByb3BzKTtcbiAgdmFyIGlucHV0UHJvcHMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgIHZhbGlkYXRpb25FcnJvcjogdmFsaWRhdGlvbkVycm9yLFxuICAgICAgb3BlblBpY2tlcjogZnVuY3Rpb24gb3BlblBpY2tlcigpIHtcbiAgICAgICAgcmV0dXJuICFyZWFkT25seSAmJiAhZGlzYWJsZWQgJiYgc2V0SXNPcGVuKHRydWUpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtkaXNhYmxlZCwgaW5wdXRWYWx1ZSwgcmVhZE9ubHksIHNldElzT3BlbiwgdmFsaWRhdGlvbkVycm9yXSk7XG4gIHZhciBwaWNrZXJTdGF0ZSA9IHtcbiAgICBwaWNrZXJQcm9wczogcGlja2VyUHJvcHMsXG4gICAgaW5wdXRQcm9wczogaW5wdXRQcm9wcyxcbiAgICB3cmFwcGVyUHJvcHM6IHdyYXBwZXJQcm9wc1xuICB9O1xuICB1c2VEZWJ1Z1ZhbHVlKHBpY2tlclN0YXRlKTtcbiAgcmV0dXJuIHBpY2tlclN0YXRlO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzJDIob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMih0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDIoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMihzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIHBhcnNlSW5wdXRTdHJpbmcodmFsdWUsIHV0aWxzLCBmb3JtYXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdXRpbHMucGFyc2UodmFsdWUsIGZvcm1hdCk7XG4gIH0gY2F0Y2ggKF91bnVzZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VLZXlib2FyZFBpY2tlclN0YXRlKHByb3BzLCBvcHRpb25zKSB7XG4gIHZhciBfcHJvcHMkZm9ybWF0ID0gcHJvcHMuZm9ybWF0LFxuICAgICAgZm9ybWF0ID0gX3Byb3BzJGZvcm1hdCA9PT0gdm9pZCAwID8gb3B0aW9ucy5nZXREZWZhdWx0Rm9ybWF0KCkgOiBfcHJvcHMkZm9ybWF0LFxuICAgICAgaW5wdXRWYWx1ZSA9IHByb3BzLmlucHV0VmFsdWUsXG4gICAgICBfb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWU7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHZhciBkaXNwbGF5RGF0ZSA9IGdldERpc3BsYXlEYXRlKHZhbHVlLCBmb3JtYXQsIHV0aWxzLCB2YWx1ZSA9PT0gbnVsbCwgcHJvcHMpO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShkaXNwbGF5RGF0ZSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGlubmVySW5wdXRWYWx1ZSA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRJbm5lcklucHV0VmFsdWUgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBkYXRlVmFsdWUgPSBpbnB1dFZhbHVlID8gcGFyc2VJbnB1dFN0cmluZyhpbnB1dFZhbHVlLCB1dGlscywgZm9ybWF0KSA6IHZhbHVlO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB1dGlscy5pc1ZhbGlkKHZhbHVlKSkge1xuICAgICAgc2V0SW5uZXJJbnB1dFZhbHVlKGRpc3BsYXlEYXRlKTtcbiAgICB9XG4gIH0sIFtkaXNwbGF5RGF0ZSwgc2V0SW5uZXJJbnB1dFZhbHVlLCB1dGlscywgdmFsdWVdKTtcbiAgdmFyIGhhbmRsZUtleWJvYXJkQ2hhbmdlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGRhdGUpIHtcbiAgICBfb25DaGFuZ2UoZGF0ZSwgZGF0ZSA9PT0gbnVsbCA/IG51bGwgOiB1dGlscy5mb3JtYXQoZGF0ZSwgZm9ybWF0KSk7XG4gIH0sIFtmb3JtYXQsIF9vbkNoYW5nZSwgdXRpbHNdKTtcblxuICB2YXIgX3VzZVBpY2tlclN0YXRlID0gdXNlUGlja2VyU3RhdGUoIC8vIEV4dGVuZCBwcm9wcyBpbnRlcmZhY2VcbiAgX29iamVjdFNwcmVhZCQyKHt9LCBwcm9wcywge1xuICAgIHZhbHVlOiBkYXRlVmFsdWUsXG4gICAgb25DaGFuZ2U6IGhhbmRsZUtleWJvYXJkQ2hhbmdlXG4gIH0pLCBvcHRpb25zKSxcbiAgICAgIGlubmVySW5wdXRQcm9wcyA9IF91c2VQaWNrZXJTdGF0ZS5pbnB1dFByb3BzLFxuICAgICAgd3JhcHBlclByb3BzID0gX3VzZVBpY2tlclN0YXRlLndyYXBwZXJQcm9wcyxcbiAgICAgIHBpY2tlclByb3BzID0gX3VzZVBpY2tlclN0YXRlLnBpY2tlclByb3BzO1xuXG4gIHZhciBpbnB1dFByb3BzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkMih7fSwgaW5uZXJJbnB1dFByb3BzLCB7XG4gICAgICAvLyByZXVzZSB2YWxpZGF0aW9uIGFuZCBvcGVuL2Nsb3NlIGxvZ2ljXG4gICAgICBmb3JtYXQ6IHdyYXBwZXJQcm9wcy5mb3JtYXQsXG4gICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlIHx8IGlubmVySW5wdXRWYWx1ZSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICBzZXRJbm5lcklucHV0VmFsdWUodmFsdWUgfHwgJycpO1xuICAgICAgICB2YXIgZGF0ZSA9IHZhbHVlID09PSBudWxsID8gbnVsbCA6IHV0aWxzLnBhcnNlKHZhbHVlLCB3cmFwcGVyUHJvcHMuZm9ybWF0KTtcblxuICAgICAgICBfb25DaGFuZ2UoZGF0ZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbaW5uZXJJbnB1dFByb3BzLCBpbm5lcklucHV0VmFsdWUsIGlucHV0VmFsdWUsIF9vbkNoYW5nZSwgdXRpbHMsIHdyYXBwZXJQcm9wcy5mb3JtYXRdKTtcbiAgcmV0dXJuIHtcbiAgICBpbnB1dFByb3BzOiBpbnB1dFByb3BzLFxuICAgIHdyYXBwZXJQcm9wczogd3JhcHBlclByb3BzLFxuICAgIHBpY2tlclByb3BzOiBwaWNrZXJQcm9wc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlUGlja2VyV2l0aFN0YXRlKF9yZWYpIHtcbiAgdmFyIElucHV0ID0gX3JlZi5JbnB1dCxcbiAgICAgIHVzZVN0YXRlID0gX3JlZi51c2VTdGF0ZSxcbiAgICAgIHVzZU9wdGlvbnMgPSBfcmVmLnVzZU9wdGlvbnMsXG4gICAgICBnZXRDdXN0b21Qcm9wcyA9IF9yZWYuZ2V0Q3VzdG9tUHJvcHMsXG4gICAgICBEZWZhdWx0VG9vbGJhckNvbXBvbmVudCA9IF9yZWYuRGVmYXVsdFRvb2xiYXJDb21wb25lbnQ7XG5cbiAgZnVuY3Rpb24gUGlja2VyV2l0aFN0YXRlKHByb3BzKSB7XG4gICAgdmFyIGFsbG93S2V5Ym9hcmRDb250cm9sID0gcHJvcHMuYWxsb3dLZXlib2FyZENvbnRyb2wsXG4gICAgICAgIGFtcG0gPSBwcm9wcy5hbXBtLFxuICAgICAgICBhbmltYXRlWWVhclNjcm9sbGluZyA9IHByb3BzLmFuaW1hdGVZZWFyU2Nyb2xsaW5nLFxuICAgICAgICBhdXRvT2sgPSBwcm9wcy5hdXRvT2ssXG4gICAgICAgIGRhdGVSYW5nZUljb24gPSBwcm9wcy5kYXRlUmFuZ2VJY29uLFxuICAgICAgICBkaXNhYmxlRnV0dXJlID0gcHJvcHMuZGlzYWJsZUZ1dHVyZSxcbiAgICAgICAgZGlzYWJsZVBhc3QgPSBwcm9wcy5kaXNhYmxlUGFzdCxcbiAgICAgICAgZGlzYWJsZVRvb2xiYXIgPSBwcm9wcy5kaXNhYmxlVG9vbGJhcixcbiAgICAgICAgZW1wdHlMYWJlbCA9IHByb3BzLmVtcHR5TGFiZWwsXG4gICAgICAgIGZvcm1hdCA9IHByb3BzLmZvcm1hdCxcbiAgICAgICAgZm9yd2FyZGVkUmVmID0gcHJvcHMuZm9yd2FyZGVkUmVmLFxuICAgICAgICBoaWRlVGFicyA9IHByb3BzLmhpZGVUYWJzLFxuICAgICAgICBpbml0aWFsRm9jdXNlZERhdGUgPSBwcm9wcy5pbml0aWFsRm9jdXNlZERhdGUsXG4gICAgICAgIGludmFsaWREYXRlTWVzc2FnZSA9IHByb3BzLmludmFsaWREYXRlTWVzc2FnZSxcbiAgICAgICAgaW52YWxpZExhYmVsID0gcHJvcHMuaW52YWxpZExhYmVsLFxuICAgICAgICBsYWJlbEZ1bmMgPSBwcm9wcy5sYWJlbEZ1bmMsXG4gICAgICAgIGxlZnRBcnJvd0J1dHRvblByb3BzID0gcHJvcHMubGVmdEFycm93QnV0dG9uUHJvcHMsXG4gICAgICAgIGxlZnRBcnJvd0ljb24gPSBwcm9wcy5sZWZ0QXJyb3dJY29uLFxuICAgICAgICBsb2FkaW5nSW5kaWNhdG9yID0gcHJvcHMubG9hZGluZ0luZGljYXRvcixcbiAgICAgICAgbWF4RGF0ZSA9IHByb3BzLm1heERhdGUsXG4gICAgICAgIG1heERhdGVNZXNzYWdlID0gcHJvcHMubWF4RGF0ZU1lc3NhZ2UsXG4gICAgICAgIG1pbkRhdGUgPSBwcm9wcy5taW5EYXRlLFxuICAgICAgICBtaW5EYXRlTWVzc2FnZSA9IHByb3BzLm1pbkRhdGVNZXNzYWdlLFxuICAgICAgICBtaW51dGVzU3RlcCA9IHByb3BzLm1pbnV0ZXNTdGVwLFxuICAgICAgICBvbkFjY2VwdCA9IHByb3BzLm9uQWNjZXB0LFxuICAgICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgICBvbkNsb3NlID0gcHJvcHMub25DbG9zZSxcbiAgICAgICAgb25Nb250aENoYW5nZSA9IHByb3BzLm9uTW9udGhDaGFuZ2UsXG4gICAgICAgIG9uT3BlbiA9IHByb3BzLm9uT3BlbixcbiAgICAgICAgb25ZZWFyQ2hhbmdlID0gcHJvcHMub25ZZWFyQ2hhbmdlLFxuICAgICAgICBvcGVuVG8gPSBwcm9wcy5vcGVuVG8sXG4gICAgICAgIG9yaWVudGF0aW9uID0gcHJvcHMub3JpZW50YXRpb24sXG4gICAgICAgIHJlbmRlckRheSA9IHByb3BzLnJlbmRlckRheSxcbiAgICAgICAgcmlnaHRBcnJvd0J1dHRvblByb3BzID0gcHJvcHMucmlnaHRBcnJvd0J1dHRvblByb3BzLFxuICAgICAgICByaWdodEFycm93SWNvbiA9IHByb3BzLnJpZ2h0QXJyb3dJY29uLFxuICAgICAgICBzaG91bGREaXNhYmxlRGF0ZSA9IHByb3BzLnNob3VsZERpc2FibGVEYXRlLFxuICAgICAgICBzdHJpY3RDb21wYXJlRGF0ZXMgPSBwcm9wcy5zdHJpY3RDb21wYXJlRGF0ZXMsXG4gICAgICAgIHRpbWVJY29uID0gcHJvcHMudGltZUljb24sXG4gICAgICAgIF9wcm9wcyRUb29sYmFyQ29tcG9uZSA9IHByb3BzLlRvb2xiYXJDb21wb25lbnQsXG4gICAgICAgIFRvb2xiYXJDb21wb25lbnQgPSBfcHJvcHMkVG9vbGJhckNvbXBvbmUgPT09IHZvaWQgMCA/IERlZmF1bHRUb29sYmFyQ29tcG9uZW50IDogX3Byb3BzJFRvb2xiYXJDb21wb25lLFxuICAgICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgICB2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgICAgdmlld3MgPSBwcm9wcy52aWV3cyxcbiAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFsbG93S2V5Ym9hcmRDb250cm9sXCIsIFwiYW1wbVwiLCBcImFuaW1hdGVZZWFyU2Nyb2xsaW5nXCIsIFwiYXV0b09rXCIsIFwiZGF0ZVJhbmdlSWNvblwiLCBcImRpc2FibGVGdXR1cmVcIiwgXCJkaXNhYmxlUGFzdFwiLCBcImRpc2FibGVUb29sYmFyXCIsIFwiZW1wdHlMYWJlbFwiLCBcImZvcm1hdFwiLCBcImZvcndhcmRlZFJlZlwiLCBcImhpZGVUYWJzXCIsIFwiaW5pdGlhbEZvY3VzZWREYXRlXCIsIFwiaW52YWxpZERhdGVNZXNzYWdlXCIsIFwiaW52YWxpZExhYmVsXCIsIFwibGFiZWxGdW5jXCIsIFwibGVmdEFycm93QnV0dG9uUHJvcHNcIiwgXCJsZWZ0QXJyb3dJY29uXCIsIFwibG9hZGluZ0luZGljYXRvclwiLCBcIm1heERhdGVcIiwgXCJtYXhEYXRlTWVzc2FnZVwiLCBcIm1pbkRhdGVcIiwgXCJtaW5EYXRlTWVzc2FnZVwiLCBcIm1pbnV0ZXNTdGVwXCIsIFwib25BY2NlcHRcIiwgXCJvbkNoYW5nZVwiLCBcIm9uQ2xvc2VcIiwgXCJvbk1vbnRoQ2hhbmdlXCIsIFwib25PcGVuXCIsIFwib25ZZWFyQ2hhbmdlXCIsIFwib3BlblRvXCIsIFwib3JpZW50YXRpb25cIiwgXCJyZW5kZXJEYXlcIiwgXCJyaWdodEFycm93QnV0dG9uUHJvcHNcIiwgXCJyaWdodEFycm93SWNvblwiLCBcInNob3VsZERpc2FibGVEYXRlXCIsIFwic3RyaWN0Q29tcGFyZURhdGVzXCIsIFwidGltZUljb25cIiwgXCJUb29sYmFyQ29tcG9uZW50XCIsIFwidmFsdWVcIiwgXCJ2YXJpYW50XCIsIFwidmlld3NcIl0pO1xuXG4gICAgdmFyIGluamVjdGVkUHJvcHMgPSBnZXRDdXN0b21Qcm9wcyA/IGdldEN1c3RvbVByb3BzKHByb3BzKSA6IHt9O1xuICAgIHZhciBvcHRpb25zID0gdXNlT3B0aW9ucyhwcm9wcyk7XG5cbiAgICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUocHJvcHMsIG9wdGlvbnMpLFxuICAgICAgICBwaWNrZXJQcm9wcyA9IF91c2VTdGF0ZS5waWNrZXJQcm9wcyxcbiAgICAgICAgaW5wdXRQcm9wcyA9IF91c2VTdGF0ZS5pbnB1dFByb3BzLFxuICAgICAgICB3cmFwcGVyUHJvcHMgPSBfdXNlU3RhdGUud3JhcHBlclByb3BzO1xuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoV3JhcHBlciwgX2V4dGVuZHMoe1xuICAgICAgdmFyaWFudDogdmFyaWFudCxcbiAgICAgIElucHV0Q29tcG9uZW50OiBJbnB1dCxcbiAgICAgIERhdGVJbnB1dFByb3BzOiBpbnB1dFByb3BzXG4gICAgfSwgaW5qZWN0ZWRQcm9wcywgd3JhcHBlclByb3BzLCBvdGhlciksIGNyZWF0ZUVsZW1lbnQoUGlja2VyLCBfZXh0ZW5kcyh7fSwgcGlja2VyUHJvcHMsIHtcbiAgICAgIGFsbG93S2V5Ym9hcmRDb250cm9sOiBhbGxvd0tleWJvYXJkQ29udHJvbCxcbiAgICAgIGFtcG06IGFtcG0sXG4gICAgICBhbmltYXRlWWVhclNjcm9sbGluZzogYW5pbWF0ZVllYXJTY3JvbGxpbmcsXG4gICAgICBkYXRlUmFuZ2VJY29uOiBkYXRlUmFuZ2VJY29uLFxuICAgICAgZGlzYWJsZUZ1dHVyZTogZGlzYWJsZUZ1dHVyZSxcbiAgICAgIGRpc2FibGVQYXN0OiBkaXNhYmxlUGFzdCxcbiAgICAgIGRpc2FibGVUb29sYmFyOiBkaXNhYmxlVG9vbGJhcixcbiAgICAgIGhpZGVUYWJzOiBoaWRlVGFicyxcbiAgICAgIGxlZnRBcnJvd0J1dHRvblByb3BzOiBsZWZ0QXJyb3dCdXR0b25Qcm9wcyxcbiAgICAgIGxlZnRBcnJvd0ljb246IGxlZnRBcnJvd0ljb24sXG4gICAgICBsb2FkaW5nSW5kaWNhdG9yOiBsb2FkaW5nSW5kaWNhdG9yLFxuICAgICAgbWF4RGF0ZTogbWF4RGF0ZSxcbiAgICAgIG1pbkRhdGU6IG1pbkRhdGUsXG4gICAgICBtaW51dGVzU3RlcDogbWludXRlc1N0ZXAsXG4gICAgICBvbk1vbnRoQ2hhbmdlOiBvbk1vbnRoQ2hhbmdlLFxuICAgICAgb25ZZWFyQ2hhbmdlOiBvblllYXJDaGFuZ2UsXG4gICAgICBvcGVuVG86IG9wZW5UbyxcbiAgICAgIG9yaWVudGF0aW9uOiBvcmllbnRhdGlvbixcbiAgICAgIHJlbmRlckRheTogcmVuZGVyRGF5LFxuICAgICAgcmlnaHRBcnJvd0J1dHRvblByb3BzOiByaWdodEFycm93QnV0dG9uUHJvcHMsXG4gICAgICByaWdodEFycm93SWNvbjogcmlnaHRBcnJvd0ljb24sXG4gICAgICBzaG91bGREaXNhYmxlRGF0ZTogc2hvdWxkRGlzYWJsZURhdGUsXG4gICAgICBzdHJpY3RDb21wYXJlRGF0ZXM6IHN0cmljdENvbXBhcmVEYXRlcyxcbiAgICAgIHRpbWVJY29uOiB0aW1lSWNvbixcbiAgICAgIFRvb2xiYXJDb21wb25lbnQ6IFRvb2xiYXJDb21wb25lbnQsXG4gICAgICB2aWV3czogdmlld3NcbiAgICB9KSkpO1xuICB9XG5cbiAgcmV0dXJuIFBpY2tlcldpdGhTdGF0ZTtcbn1cblxuZXhwb3J0IHsgS2V5Ym9hcmREYXRlSW5wdXQgYXMgSywgUGlja2VyVG9vbGJhciBhcyBQLCBUb29sYmFyQnV0dG9uJDEgYXMgVCwgUHVyZURhdGVJbnB1dCBhcyBhLCB1c2VLZXlib2FyZFBpY2tlclN0YXRlIGFzIGIsIFRvb2xiYXJUZXh0IGFzIGMsIG1ha2VQaWNrZXJXaXRoU3RhdGUgYXMgbSwgcGljazEyaE9yMjRoRm9ybWF0IGFzIHAsIHVzZVBpY2tlclN0YXRlIGFzIHUsIHZhbGlkYXRlIGFzIHYgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1ha2VQaWNrZXJXaXRoU3RhdGUtNWE3OWNiOGEuanMubWFwXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VNZW1vLCBjcmVhdGVFbGVtZW50LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZnVuYywgb25lT2ZUeXBlLCBvYmplY3QsIHN0cmluZywgZWxlbWVudCwgYXJyYXlPZiB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG52YXIgTXVpUGlja2Vyc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xudmFyIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyID0gZnVuY3Rpb24gTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIoX3JlZikge1xuICB2YXIgVXRpbHMgPSBfcmVmLnV0aWxzLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGUsXG4gICAgICBsaWJJbnN0YW5jZSA9IF9yZWYubGliSW5zdGFuY2U7XG4gIHZhciB1dGlscyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgVXRpbHMoe1xuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICBpbnN0YW5jZTogbGliSW5zdGFuY2VcbiAgICB9KTtcbiAgfSwgW1V0aWxzLCBsaWJJbnN0YW5jZSwgbG9jYWxlXSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KE11aVBpY2tlcnNDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHV0aWxzLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9KTtcbn07XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBNdWlQaWNrZXJzVXRpbHNQcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIHV0aWxzOiBmdW5jLmlzUmVxdWlyZWQsXG4gIGxvY2FsZTogb25lT2ZUeXBlKFtvYmplY3QsIHN0cmluZ10pLFxuICBjaGlsZHJlbjogb25lT2ZUeXBlKFtlbGVtZW50LmlzUmVxdWlyZWQsIGFycmF5T2YoZWxlbWVudC5pc1JlcXVpcmVkKV0pLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5cbnZhciBjaGVja1V0aWxzID0gZnVuY3Rpb24gY2hlY2tVdGlscyh1dGlscykge1xuICBpZiAoIXV0aWxzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGZpbmQgdXRpbHMgaW4gY29udGV4dC4gWW91IGVpdGhlciBhKSBmb3Jnb3QgdG8gd3JhcCB5b3VyIGNvbXBvbmVudCB0cmVlIGluIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyOyBvciBiKSBtaXhlZCBuYW1lZCBhbmQgZGlyZWN0IGZpbGUgaW1wb3J0cy4gIFJlY29tbWVuZGF0aW9uOiB1c2UgbmFtZWQgaW1wb3J0cyBmcm9tIHRoZSBtb2R1bGUgaW5kZXguJyk7XG4gIH1cbn07XG5mdW5jdGlvbiB1c2VVdGlscygpIHtcbiAgdmFyIHV0aWxzID0gdXNlQ29udGV4dChNdWlQaWNrZXJzQ29udGV4dCk7XG4gIGNoZWNrVXRpbHModXRpbHMpO1xuICByZXR1cm4gdXRpbHM7XG59XG5cbmV4cG9ydCB7IE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIGFzIE0sIE11aVBpY2tlcnNDb250ZXh0IGFzIGEsIHVzZVV0aWxzIGFzIHUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZVV0aWxzLWNmYjk2YWM5LmpzLm1hcFxuIiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG52YXIgUmlmbSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShSaWZtLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSaWZtKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuX3N0YXRlID0gbnVsbDtcbiAgICBfdGhpcy5fZGVsID0gZmFsc2U7XG5cbiAgICBfdGhpcy5faGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGV2dC50YXJnZXQudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdSaWZtIGRvZXMgbm90IHN1cHBvcnQgaW5wdXQgdHlwZT1udW1iZXIsIHVzZSB0eXBlPXRlbCBpbnN0ZWFkLicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSAvLyBGVVRVUkU6IHVzZSBldnQubmF0aXZlRXZlbnQuaW5wdXRUeXBlIGZvciBkZWwgZXZlbnQsIHNlZSBjb21tZW50cyBhdCBvbmtleWRvd25cblxuXG4gICAgICB2YXIgc3RhdGVWYWx1ZSA9IF90aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgdmFyIHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcbiAgICAgIHZhciBpbnB1dCA9IGV2dC50YXJnZXQ7XG4gICAgICB2YXIgb3AgPSB2YWx1ZS5sZW5ndGggPiBzdGF0ZVZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBkZWwgPSBfdGhpcy5fZGVsO1xuXG4gICAgICB2YXIgbm9PcCA9IHN0YXRlVmFsdWUgPT09IF90aGlzLnByb3BzLmZvcm1hdCh2YWx1ZSk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBsb2NhbDogdHJ1ZVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgdmFyIHJlZnVzZSA9IF90aGlzLnByb3BzLnJlZnVzZSB8fCAvW15cXGRdKy9nO1xuICAgICAgICB2YXIgYmVmb3JlID0gdmFsdWUuc3Vic3RyKDAsIHNlbGVjdGlvblN0YXJ0KS5yZXBsYWNlKHJlZnVzZSwgJycpO1xuICAgICAgICBfdGhpcy5fc3RhdGUgPSB7XG4gICAgICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgICAgIGJlZm9yZTogYmVmb3JlLFxuICAgICAgICAgIG9wOiBvcCxcbiAgICAgICAgICBkaTogZGVsICYmIG5vT3AsXG4gICAgICAgICAgZGVsOiBkZWxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoX3RoaXMucHJvcHMucmVwbGFjZSAmJiBfdGhpcy5wcm9wcy5yZXBsYWNlKHN0YXRlVmFsdWUpICYmIG9wICYmICFub09wKSB7XG4gICAgICAgICAgdmFyIHN0YXJ0ID0gLTE7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSAhPT0gYmVmb3JlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBzdGFydCA9IE1hdGgubWF4KHN0YXJ0LCB2YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoYmVmb3JlW2ldLnRvTG93ZXJDYXNlKCksIHN0YXJ0ICsgMSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjID0gdmFsdWUuc3Vic3RyKHN0YXJ0ICsgMSkucmVwbGFjZShyZWZ1c2UsICcnKVswXTtcbiAgICAgICAgICBzdGFydCA9IHZhbHVlLmluZGV4T2YoYywgc3RhcnQgKyAxKTtcbiAgICAgICAgICB2YWx1ZSA9IFwiXCIgKyB2YWx1ZS5zdWJzdHIoMCwgc3RhcnQpICsgdmFsdWUuc3Vic3RyKHN0YXJ0ICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZnYgPSBfdGhpcy5wcm9wcy5mb3JtYXQodmFsdWUpO1xuXG4gICAgICAgIGlmIChzdGF0ZVZhbHVlID09PSBmdikge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKGZ2KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLl9oS0QgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoZXZ0LmNvZGUgPT09ICdEZWxldGUnKSB7XG4gICAgICAgIF90aGlzLl9kZWwgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5faEtVID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKGV2dC5jb2RlID09PSAnRGVsZXRlJykge1xuICAgICAgICBfdGhpcy5fZGVsID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHByb3BzLnZhbHVlLFxuICAgICAgbG9jYWw6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFJpZm0uZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogc3RhdGUubG9jYWwgPyBzdGF0ZS52YWx1ZSA6IHByb3BzLnZhbHVlLFxuICAgICAgbG9jYWw6IGZhbHNlXG4gICAgfTtcbiAgfTtcblxuICB2YXIgX3Byb3RvID0gUmlmbS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2hhbmRsZUNoYW5nZSA9IHRoaXMuX2hhbmRsZUNoYW5nZSxcbiAgICAgICAgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlLFxuICAgICAgICBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgcmV0dXJuIGNoaWxkcmVuKHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIG9uQ2hhbmdlOiBfaGFuZGxlQ2hhbmdlXG4gICAgfSk7XG4gIH0gLy8gZGVsZXRlIHdoZW4gIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JbnB1dEV2ZW50L2lucHV0VHlwZSB3aWxsIGJlIHN1cHBvcnRlZCBieSBhbGwgbWFqb3IgYnJvd3NlcnNcbiAgO1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oS0QpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5faEtVKTtcbiAgfSAvLyBkZWxldGUgd2hlbiAgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0lucHV0RXZlbnQvaW5wdXRUeXBlIHdpbGwgYmUgc3VwcG9ydGVkIGJ5IGFsbCBtYWpvciBicm93c2Vyc1xuICA7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hLRCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9oS1UpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdmFyIF9zdGF0ZSA9IHRoaXMuX3N0YXRlO1xuXG4gICAgaWYgKF9zdGF0ZSkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIHZhciBzdGFydCA9IC0xO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSAhPT0gX3N0YXRlLmJlZm9yZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBzdGFydCA9IE1hdGgubWF4KHN0YXJ0LCB2YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoX3N0YXRlLmJlZm9yZVtpXS50b0xvd2VyQ2FzZSgpLCBzdGFydCArIDEpKTtcbiAgICAgIH0gLy8gZm9ybWF0IHVzdWFsbHkgbG9va3MgYmV0dGVyIHdpdGhvdXQgdGhpc1xuXG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnJlcGxhY2UgJiYgKF9zdGF0ZS5vcCB8fCBfc3RhdGUuZGVsICYmICFfc3RhdGUuZGkpKSB7XG4gICAgICAgIHdoaWxlICh2YWx1ZVtzdGFydCArIDFdICYmICh0aGlzLnByb3BzLnJlZnVzZSB8fCAvW15cXGRdKy8pLnRlc3QodmFsdWVbc3RhcnQgKyAxXSkpIHtcbiAgICAgICAgICBzdGFydCArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF9zdGF0ZS5pbnB1dC5zZWxlY3Rpb25TdGFydCA9IF9zdGF0ZS5pbnB1dC5zZWxlY3Rpb25FbmQgPSBzdGFydCArIDEgKyAoX3N0YXRlLmRpID8gMSA6IDApO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXRlID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gUmlmbTtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgUmlmbSB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgTW92aWVHYWxsZXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvTW92aWVHYWxsZXJ5JztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9waWNrZXJzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICAgIGhlYWRDb250YWluZXI6IHtcclxuICAgICAgICBtYXJnaW46ICc0NXB4IGF1dG8nLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICB0ZXh0RmllbGQ6IHtcclxuICAgICAgICB3aWR0aDogJzcwJScsXHJcbiAgICAgICAgbWFyZ2luOiAnMjBweCBhdXRvJ1xyXG4gICAgfSxcclxuICAgIG1vdmllQ29udGFpbmVyOiB7XHJcbiAgICAgICAgbWF4V2lkdGg6ICc3OCUnLFxyXG4gICAgICAgIG1hcmdpbjogJzEwcHggYXV0byA0MHB4J1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIG1vdmllSW5wdXQ6ICcnLFxyXG4gICAgICAgIG1vdmllQXJyYXk6ICcnLFxyXG4gICAgICAgIHNlbGVjdGVkRGF0ZTogbmV3IERhdGUoKVxyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAga2V5UHJlc3MgPSAoZSwgc3RhdGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1vdmllSW5wdXQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAgICAgLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT01MGY3YzcyOSZzPScgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb3ZpZUlucHV0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmdHlwZT1zZXJpZXMnXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vdmllQXJyYXkgPSByZXMuZGF0YS5TZWFyY2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmllQXJyYXk6IG1vdmllQXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkRpdlwiPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2ggZm9yIGFueSBtb3ZpZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VhcmNoIG1vdmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmtleVByZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld3M9e1sneWVhciddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlllYXIgb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREYXRlOiB0aGlzLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3ZpZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vdmllR2FsbGVyeSBtb3ZpZUFycmF5PXt0aGlzLnN0YXRlLm1vdmllQXJyYXl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuSW5kZXgucHJvcFR5cGVzID0ge1xyXG4gICAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSW5kZXgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9