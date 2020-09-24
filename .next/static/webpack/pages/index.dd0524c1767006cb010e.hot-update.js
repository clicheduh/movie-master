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
      movieArray: ''
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
      var classes = this.props.classes;
      return __jsx("div", {
        className: "mainDiv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }
      }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
        maxWidth: "lg",
        className: classes.headContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h4",
        gutterBottom: true,
        className: classes.mainHeading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
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
          lineNumber: 74,
          columnNumber: 21
        }
      })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.movieContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 17
        }
      }, __jsx(_components_MovieGallery__WEBPACK_IMPORTED_MODULE_14__["default"], {
        movieArray: this.state.movieArray,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9DaXJjdWxhclByb2dyZXNzL0NpcmN1bGFyUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ2lyY3VsYXJQcm9ncmVzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9EaWFsb2dBY3Rpb25zL0RpYWxvZ0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vRGlhbG9nQWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dEFkb3JubWVudC9JbnB1dEFkb3JubWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dEFkb3JubWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWIvVGFiLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RhYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJTY3JvbGxCdXR0b24vVGFiU2Nyb2xsQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RhYlNjcm9sbEJ1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJzL1Njcm9sbGJhclNpemUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGFicy9UYWJJbmRpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGFicy9UYWJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RhYnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vaW50ZXJuYWwvYW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9pbnRlcm5hbC9zdmctaWNvbnMvS2V5Ym9hcmRBcnJvd0xlZnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vaW50ZXJuYWwvc3ZnLWljb25zL0tleWJvYXJkQXJyb3dSaWdodC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9zY3JvbGxMZWZ0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL3Vuc3VwcG9ydGVkUHJvcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9DYWxlbmRhci0xMWFlNjFmNi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9DbG9jay00OGZkZTk3NS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9DbG9ja1ZpZXcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9lc20vRGF0ZVBpY2tlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9EYXRlVGltZVBpY2tlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9EYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9lc20vUGlja2VyLWNjZDliYTkwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL1RpbWVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9lc20vVGltZVBpY2tlclRvb2xiYXItODExMDBmYWIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvcGlja2Vycy9lc20vV3JhcHBlci0yNDE5NjZkNy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9waWNrZXJzL2VzbS9tYWtlUGlja2VyV2l0aFN0YXRlLTVhNzljYjhhLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3BpY2tlcnMvZXNtL3VzZVV0aWxzLWNmYjk2YWM5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmlmbS9kaXN0L3JpZm0uZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0aGVtZSIsImhlYWRDb250YWluZXIiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iLCJ0ZXh0RmllbGQiLCJ3aWR0aCIsIm1vdmllQ29udGFpbmVyIiwibWF4V2lkdGgiLCJJbmRleCIsIm1vdmllSW5wdXQiLCJtb3ZpZUFycmF5IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0YXRlIiwia2V5Q29kZSIsInNldFN0YXRlIiwic2V0VGltZW91dCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJTZWFyY2giLCJjbGFzc2VzIiwicHJvcHMiLCJtYWluSGVhZGluZyIsImhhbmRsZUNoYW5nZSIsImtleVByZXNzIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEQ7QUFDZ0M7QUFDM0Q7QUFDSTtBQUNYO0FBQzRCO0FBQ047QUFDRDtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxr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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOERBQWE7QUFDbkI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMkRBQWE7QUFDNUI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsMkRBQWEsQ0FBQyxnREFBRztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBLGVBQWUsMkRBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQSxFQUFFLHVGQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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ZWJwYWNrL3BhZ2VzL2luZGV4LmRkMDUyNGMxNzY3MDA2Y2IwMTBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBjaGFpblByb3BUeXBlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbnZhciBTSVpFID0gNDQ7XG5cbmZ1bmN0aW9uIGdldFJlbGF0aXZlVmFsdWUodmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiAoTWF0aC5taW4oTWF0aC5tYXgobWluLCB2YWx1ZSksIG1heCkgLSBtaW4pIC8gKG1heCAtIG1pbik7XG59XG5cbmZ1bmN0aW9uIGVhc2VPdXQodCkge1xuICB0ID0gZ2V0UmVsYXRpdmVWYWx1ZSh0LCAwLCAxKTsgLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZ3JlLzE2NTAyOTRcblxuICB0ID0gKHQgLT0gMSkgKiB0ICogdCArIDE7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBlYXNlSW4odCkge1xuICByZXR1cm4gdCAqIHQ7XG59XG5cbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwic3RhdGljXCJgLiAqL1xuICAgIHN0YXRpYzoge1xuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nKVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiaW5kZXRlcm1pbmF0ZVwiYC4gKi9cbiAgICBpbmRldGVybWluYXRlOiB7XG4gICAgICBhbmltYXRpb246ICckY2lyY3VsYXItcm90YXRlIDEuNHMgbGluZWFyIGluZmluaXRlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgY29sb3JQcmltYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJzZWNvbmRhcnlcImAuICovXG4gICAgY29sb3JTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgc3ZnYCBlbGVtZW50LiAqL1xuICAgIHN2Zzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyAvLyBLZWVwcyB0aGUgcHJvZ3Jlc3MgY2VudGVyZWRcblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGNpcmNsZWAgc3ZnIHBhdGguICovXG4gICAgY2lyY2xlOiB7XG4gICAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InIC8vIFVzZSBidXR0IHRvIGZvbGxvdyB0aGUgc3BlY2lmaWNhdGlvbiwgYnkgY2hhbmNlLCBpdCdzIGFscmVhZHkgdGhlIGRlZmF1bHQgQ1NTIHZhbHVlLlxuICAgICAgLy8gc3Ryb2tlTGluZWNhcDogJ2J1dHQnLFxuXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgY2lyY2xlYCBzdmcgcGF0aCBpZiBgdmFyaWFudD1cInN0YXRpY1wiYC4gKi9cbiAgICBjaXJjbGVTdGF0aWM6IHtcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnc3Ryb2tlLWRhc2hvZmZzZXQnKVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGNpcmNsZWAgc3ZnIHBhdGggaWYgYHZhcmlhbnQ9XCJpbmRldGVybWluYXRlXCJgLiAqL1xuICAgIGNpcmNsZUluZGV0ZXJtaW5hdGU6IHtcbiAgICAgIGFuaW1hdGlvbjogJyRjaXJjdWxhci1kYXNoIDEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUnLFxuICAgICAgLy8gU29tZSBkZWZhdWx0IHZhbHVlIHRoYXQgbG9va3MgZmluZSB3YWl0aW5nIGZvciB0aGUgYW5pbWF0aW9uIHRvIGtpY2tzIGluLlxuICAgICAgc3Ryb2tlRGFzaGFycmF5OiAnODBweCwgMjAwcHgnLFxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogJzBweCcgLy8gQWRkIHRoZSB1bml0IHRvIGZpeCBhIEVkZ2UgMTYgYW5kIGJlbG93IGJ1Zy5cblxuICAgIH0sXG4gICAgJ0BrZXlmcmFtZXMgY2lyY3VsYXItcm90YXRlJzoge1xuICAgICAgJzAlJzoge1xuICAgICAgICAvLyBGaXggSUUgMTEgd29iYmx5XG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzUwJSA1MCUnXG4gICAgICB9LFxuICAgICAgJzEwMCUnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgzNjBkZWcpJ1xuICAgICAgfVxuICAgIH0sXG4gICAgJ0BrZXlmcmFtZXMgY2lyY3VsYXItZGFzaCc6IHtcbiAgICAgICcwJSc6IHtcbiAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiAnMXB4LCAyMDBweCcsXG4gICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6ICcwcHgnXG4gICAgICB9LFxuICAgICAgJzUwJSc6IHtcbiAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiAnMTAwcHgsIDIwMHB4JyxcbiAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogJy0xNXB4J1xuICAgICAgfSxcbiAgICAgICcxMDAlJzoge1xuICAgICAgICBzdHJva2VEYXNoYXJyYXk6ICcxMDBweCwgMjAwcHgnLFxuICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiAnLTEyNXB4J1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGNpcmNsZWAgc3ZnIHBhdGggaWYgYGRpc2FibGVTaHJpbms9e3RydWV9YC4gKi9cbiAgICBjaXJjbGVEaXNhYmxlU2hyaW5rOiB7XG4gICAgICBhbmltYXRpb246ICdub25lJ1xuICAgIH1cbiAgfTtcbn07XG4vKipcbiAqICMjIEFSSUFcbiAqXG4gKiBJZiB0aGUgcHJvZ3Jlc3MgYmFyIGlzIGRlc2NyaWJpbmcgdGhlIGxvYWRpbmcgcHJvZ3Jlc3Mgb2YgYSBwYXJ0aWN1bGFyIHJlZ2lvbiBvZiBhIHBhZ2UsXG4gKiB5b3Ugc2hvdWxkIHVzZSBgYXJpYS1kZXNjcmliZWRieWAgdG8gcG9pbnQgdG8gdGhlIHByb2dyZXNzIGJhciwgYW5kIHNldCB0aGUgYGFyaWEtYnVzeWBcbiAqIGF0dHJpYnV0ZSB0byBgdHJ1ZWAgb24gdGhhdCByZWdpb24gdW50aWwgaXQgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gKi9cblxudmFyIENpcmN1bGFyUHJvZ3Jlc3MgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBDaXJjdWxhclByb2dyZXNzKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb2xvciA9IF9wcm9wcyRjb2xvciA9PT0gdm9pZCAwID8gJ3ByaW1hcnknIDogX3Byb3BzJGNvbG9yLFxuICAgICAgX3Byb3BzJGRpc2FibGVTaHJpbmsgPSBwcm9wcy5kaXNhYmxlU2hyaW5rLFxuICAgICAgZGlzYWJsZVNocmluayA9IF9wcm9wcyRkaXNhYmxlU2hyaW5rID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlU2hyaW5rLFxuICAgICAgX3Byb3BzJHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgc2l6ZSA9IF9wcm9wcyRzaXplID09PSB2b2lkIDAgPyA0MCA6IF9wcm9wcyRzaXplLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIF9wcm9wcyR0aGlja25lc3MgPSBwcm9wcy50aGlja25lc3MsXG4gICAgICB0aGlja25lc3MgPSBfcHJvcHMkdGhpY2tuZXNzID09PSB2b2lkIDAgPyAzLjYgOiBfcHJvcHMkdGhpY2tuZXNzLFxuICAgICAgX3Byb3BzJHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICB2YWx1ZSA9IF9wcm9wcyR2YWx1ZSA9PT0gdm9pZCAwID8gMCA6IF9wcm9wcyR2YWx1ZSxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ2luZGV0ZXJtaW5hdGUnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiZGlzYWJsZVNocmlua1wiLCBcInNpemVcIiwgXCJzdHlsZVwiLCBcInRoaWNrbmVzc1wiLCBcInZhbHVlXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIGNpcmNsZVN0eWxlID0ge307XG4gIHZhciByb290U3R5bGUgPSB7fTtcbiAgdmFyIHJvb3RQcm9wcyA9IHt9O1xuXG4gIGlmICh2YXJpYW50ID09PSAnZGV0ZXJtaW5hdGUnIHx8IHZhcmlhbnQgPT09ICdzdGF0aWMnKSB7XG4gICAgdmFyIGNpcmN1bWZlcmVuY2UgPSAyICogTWF0aC5QSSAqICgoU0laRSAtIHRoaWNrbmVzcykgLyAyKTtcbiAgICBjaXJjbGVTdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBjaXJjdW1mZXJlbmNlLnRvRml4ZWQoMyk7XG4gICAgcm9vdFByb3BzWydhcmlhLXZhbHVlbm93J10gPSBNYXRoLnJvdW5kKHZhbHVlKTtcblxuICAgIGlmICh2YXJpYW50ID09PSAnc3RhdGljJykge1xuICAgICAgY2lyY2xlU3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IFwiXCIuY29uY2F0KCgoMTAwIC0gdmFsdWUpIC8gMTAwICogY2lyY3VtZmVyZW5jZSkudG9GaXhlZCgzKSwgXCJweFwiKTtcbiAgICAgIHJvb3RTdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC05MGRlZyknO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaXJjbGVTdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gXCJcIi5jb25jYXQoKGVhc2VJbigoMTAwIC0gdmFsdWUpIC8gMTAwKSAqIGNpcmN1bWZlcmVuY2UpLnRvRml4ZWQoMyksIFwicHhcIik7XG4gICAgICByb290U3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoXCIuY29uY2F0KChlYXNlT3V0KHZhbHVlIC8gNzApICogMjcwKS50b0ZpeGVkKDMpLCBcImRlZylcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIGNvbG9yICE9PSAnaW5oZXJpdCcgJiYgY2xhc3Nlc1tcImNvbG9yXCIuY29uY2F0KGNhcGl0YWxpemUoY29sb3IpKV0sIHtcbiAgICAgICdpbmRldGVybWluYXRlJzogY2xhc3Nlcy5pbmRldGVybWluYXRlLFxuICAgICAgJ3N0YXRpYyc6IGNsYXNzZXMuc3RhdGljXG4gICAgfVt2YXJpYW50XSksXG4gICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgaGVpZ2h0OiBzaXplXG4gICAgfSwgcm9vdFN0eWxlLCBzdHlsZSksXG4gICAgcmVmOiByZWYsXG4gICAgcm9sZTogXCJwcm9ncmVzc2JhclwiXG4gIH0sIHJvb3RQcm9wcywgb3RoZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnN2ZyxcbiAgICB2aWV3Qm94OiBcIlwiLmNvbmNhdChTSVpFIC8gMiwgXCIgXCIpLmNvbmNhdChTSVpFIC8gMiwgXCIgXCIpLmNvbmNhdChTSVpFLCBcIiBcIikuY29uY2F0KFNJWkUpXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5jaXJjbGUsIGRpc2FibGVTaHJpbmsgJiYgY2xhc3Nlcy5jaXJjbGVEaXNhYmxlU2hyaW5rLCB7XG4gICAgICAnaW5kZXRlcm1pbmF0ZSc6IGNsYXNzZXMuY2lyY2xlSW5kZXRlcm1pbmF0ZSxcbiAgICAgICdzdGF0aWMnOiBjbGFzc2VzLmNpcmNsZVN0YXRpY1xuICAgIH1bdmFyaWFudF0pLFxuICAgIHN0eWxlOiBjaXJjbGVTdHlsZSxcbiAgICBjeDogU0laRSxcbiAgICBjeTogU0laRSxcbiAgICByOiAoU0laRSAtIHRoaWNrbmVzcykgLyAyLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZVdpZHRoOiB0aGlja25lc3NcbiAgfSkpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gQ2lyY3VsYXJQcm9ncmVzcy5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2luaGVyaXQnLCAncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHNocmluayBhbmltYXRpb24gaXMgZGlzYWJsZWQuXG4gICAqIFRoaXMgb25seSB3b3JrcyBpZiB2YXJpYW50IGlzIGBpbmRldGVybWluYXRlYC5cbiAgICovXG4gIGRpc2FibGVTaHJpbms6IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5ib29sLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuZGlzYWJsZVNocmluayAmJiBwcm9wcy52YXJpYW50ICYmIHByb3BzLnZhcmlhbnQgIT09ICdpbmRldGVybWluYXRlJykge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignTWF0ZXJpYWwtVUk6IFlvdSBoYXZlIHByb3ZpZGVkIHRoZSBgZGlzYWJsZVNocmlua2AgcHJvcCAnICsgJ3dpdGggYSB2YXJpYW50IG90aGVyIHRoYW4gYGluZGV0ZXJtaW5hdGVgLiBUaGlzIHdpbGwgaGF2ZSBubyBlZmZlY3QuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0pLFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgY2lyY2xlLlxuICAgKiBJZiB1c2luZyBhIG51bWJlciwgdGhlIHBpeGVsIHVuaXQgaXMgYXNzdW1lZC5cbiAgICogSWYgdXNpbmcgYSBzdHJpbmcsIHlvdSBuZWVkIHRvIHByb3ZpZGUgdGhlIENTUyB1bml0LCBlLmcgJzNyZW0nLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIHRoaWNrbmVzcyBvZiB0aGUgY2lyY2xlLlxuICAgKi9cbiAgdGhpY2tuZXNzOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIHByb2dyZXNzIGluZGljYXRvciBmb3IgdGhlIGRldGVybWluYXRlIGFuZCBzdGF0aWMgdmFyaWFudHMuXG4gICAqIFZhbHVlIGJldHdlZW4gMCBhbmQgMTAwLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICogVXNlIGluZGV0ZXJtaW5hdGUgd2hlbiB0aGVyZSBpcyBubyBwcm9ncmVzcyB2YWx1ZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2RldGVybWluYXRlJywgJ2luZGV0ZXJtaW5hdGUnLCAnc3RhdGljJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUNpcmN1bGFyUHJvZ3Jlc3MnLFxuICBmbGlwOiBmYWxzZVxufSkoQ2lyY3VsYXJQcm9ncmVzcyk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2lyY3VsYXJQcm9ncmVzcyc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogOCxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBmbGV4OiAnMCAwIGF1dG8nXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZVNwYWNpbmc9e2ZhbHNlfWAuICovXG4gIHNwYWNpbmc6IHtcbiAgICAnJiA+IDpub3QoOmZpcnN0LWNoaWxkKSc6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IDhcbiAgICB9XG4gIH1cbn07XG52YXIgRGlhbG9nQWN0aW9ucyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIERpYWxvZ0FjdGlvbnMocHJvcHMsIHJlZikge1xuICB2YXIgX3Byb3BzJGRpc2FibGVTcGFjaW5nID0gcHJvcHMuZGlzYWJsZVNwYWNpbmcsXG4gICAgICBkaXNhYmxlU3BhY2luZyA9IF9wcm9wcyRkaXNhYmxlU3BhY2luZyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVNwYWNpbmcsXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJkaXNhYmxlU3BhY2luZ1wiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCAhZGlzYWJsZVNwYWNpbmcgJiYgY2xhc3Nlcy5zcGFjaW5nKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBEaWFsb2dBY3Rpb25zLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBhY3Rpb25zIGRvIG5vdCBoYXZlIGFkZGl0aW9uYWwgbWFyZ2luLlxuICAgKi9cbiAgZGlzYWJsZVNwYWNpbmc6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aURpYWxvZ0FjdGlvbnMnXG59KShEaWFsb2dBY3Rpb25zKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9EaWFsb2dBY3Rpb25zJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9UeXBvZ3JhcGh5JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBGb3JtQ29udHJvbENvbnRleHQsIHsgdXNlRm9ybUNvbnRyb2wgfSBmcm9tICcuLi9Gb3JtQ29udHJvbC9Gb3JtQ29udHJvbENvbnRleHQnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgaGVpZ2h0OiAnMC4wMWVtJyxcbiAgICAvLyBGaXggSUUgMTEgZmxleGJveCBhbGlnbm1lbnQuIFRvIHJlbW92ZSBhdCBzb21lIHBvaW50LlxuICAgIG1heEhlaWdodDogJzJlbScsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiZmlsbGVkXCJgLiAqL1xuICBmaWxsZWQ6IHtcbiAgICAnJiRwb3NpdGlvblN0YXJ0Om5vdCgkaGlkZGVuTGFiZWwpJzoge1xuICAgICAgbWFyZ2luVG9wOiAxNlxuICAgIH1cbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBwb3NpdGlvbj1cInN0YXJ0XCJgLiAqL1xuICBwb3NpdGlvblN0YXJ0OiB7XG4gICAgbWFyZ2luUmlnaHQ6IDhcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBwb3NpdGlvbj1cImVuZFwiYC4gKi9cbiAgcG9zaXRpb25FbmQ6IHtcbiAgICBtYXJnaW5MZWZ0OiA4XG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZVBvaW50ZXJFdmVudHM9dHJ1ZWAuICovXG4gIGRpc2FibGVQb2ludGVyRXZlbnRzOiB7XG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgaWYgdGhlIGFkb3JubWVudCBpcyB1c2VkIGluc2lkZSA8Rm9ybUNvbnRyb2wgaGlkZGVuTGFiZWwgLz4uICovXG4gIGhpZGRlbkxhYmVsOiB7fSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCBpZiB0aGUgYWRvcm5tZW50IGlzIHVzZWQgaW5zaWRlIDxGb3JtQ29udHJvbCBtYXJnaW49XCJkZW5zZVwiIC8+LiAqL1xuICBtYXJnaW5EZW5zZToge31cbn07XG52YXIgSW5wdXRBZG9ybm1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBJbnB1dEFkb3JubWVudChwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJGRpc2FibGVQb2ludGVyID0gcHJvcHMuZGlzYWJsZVBvaW50ZXJFdmVudHMsXG4gICAgICBkaXNhYmxlUG9pbnRlckV2ZW50cyA9IF9wcm9wcyRkaXNhYmxlUG9pbnRlciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVBvaW50ZXIsXG4gICAgICBfcHJvcHMkZGlzYWJsZVR5cG9ncmEgPSBwcm9wcy5kaXNhYmxlVHlwb2dyYXBoeSxcbiAgICAgIGRpc2FibGVUeXBvZ3JhcGh5ID0gX3Byb3BzJGRpc2FibGVUeXBvZ3JhID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlVHlwb2dyYSxcbiAgICAgIHBvc2l0aW9uID0gcHJvcHMucG9zaXRpb24sXG4gICAgICB2YXJpYW50UHJvcCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCIsIFwiZGlzYWJsZVBvaW50ZXJFdmVudHNcIiwgXCJkaXNhYmxlVHlwb2dyYXBoeVwiLCBcInBvc2l0aW9uXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIG11aUZvcm1Db250cm9sID0gdXNlRm9ybUNvbnRyb2woKSB8fCB7fTtcbiAgdmFyIHZhcmlhbnQgPSB2YXJpYW50UHJvcDtcblxuICBpZiAodmFyaWFudFByb3AgJiYgbXVpRm9ybUNvbnRyb2wudmFyaWFudCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodmFyaWFudFByb3AgPT09IG11aUZvcm1Db250cm9sLnZhcmlhbnQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IFRoZSBgSW5wdXRBZG9ybm1lbnRgIHZhcmlhbnQgaW5mZXJzIHRoZSB2YXJpYW50IHByb3AgJyArICd5b3UgZG8gbm90IGhhdmUgdG8gcHJvdmlkZSBvbmUuJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKG11aUZvcm1Db250cm9sICYmICF2YXJpYW50KSB7XG4gICAgdmFyaWFudCA9IG11aUZvcm1Db250cm9sLnZhcmlhbnQ7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IG51bGxcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCBkaXNhYmxlUG9pbnRlckV2ZW50cyAmJiBjbGFzc2VzLmRpc2FibGVQb2ludGVyRXZlbnRzLCBtdWlGb3JtQ29udHJvbC5oaWRkZW5MYWJlbCAmJiBjbGFzc2VzLmhpZGRlbkxhYmVsLCB2YXJpYW50ID09PSAnZmlsbGVkJyAmJiBjbGFzc2VzLmZpbGxlZCwge1xuICAgICAgJ3N0YXJ0JzogY2xhc3Nlcy5wb3NpdGlvblN0YXJ0LFxuICAgICAgJ2VuZCc6IGNsYXNzZXMucG9zaXRpb25FbmRcbiAgICB9W3Bvc2l0aW9uXSwgbXVpRm9ybUNvbnRyb2wubWFyZ2luID09PSAnZGVuc2UnICYmIGNsYXNzZXMubWFyZ2luRGVuc2UpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyAmJiAhZGlzYWJsZVR5cG9ncmFwaHkgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7XG4gICAgY29sb3I6IFwidGV4dFNlY29uZGFyeVwiXG4gIH0sIGNoaWxkcmVuKSA6IGNoaWxkcmVuKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IElucHV0QWRvcm5tZW50LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQsIG5vcm1hbGx5IGFuIGBJY29uQnV0dG9uYCBvciBzdHJpbmcuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIERpc2FibGUgcG9pbnRlciBldmVudHMgb24gdGhlIHJvb3QuXG4gICAqIFRoaXMgYWxsb3dzIGZvciB0aGUgY29udGVudCBvZiB0aGUgYWRvcm5tZW50IHRvIGZvY3VzIHRoZSBpbnB1dCBvbiBjbGljay5cbiAgICovXG4gIGRpc2FibGVQb2ludGVyRXZlbnRzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgY2hpbGRyZW4gaXMgYSBzdHJpbmcgdGhlbiBkaXNhYmxlIHdyYXBwaW5nIGluIGEgVHlwb2dyYXBoeSBjb21wb25lbnQuXG4gICAqL1xuICBkaXNhYmxlVHlwb2dyYXBoeTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG11aUZvcm1Db250cm9sOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gdGhpcyBhZG9ybm1lbnQgc2hvdWxkIGFwcGVhciByZWxhdGl2ZSB0byB0aGUgYElucHV0YC5cbiAgICovXG4gIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoWydzdGFydCcsICdlbmQnXSksXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICogTm90ZTogSWYgeW91IGFyZSB1c2luZyB0aGUgYFRleHRGaWVsZGAgY29tcG9uZW50IG9yIHRoZSBgRm9ybUNvbnRyb2xgIGNvbXBvbmVudFxuICAgKiB5b3UgZG8gbm90IGhhdmUgdG8gc2V0IHRoaXMgbWFudWFsbHkuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydzdGFuZGFyZCcsICdvdXRsaW5lZCcsICdmaWxsZWQnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpSW5wdXRBZG9ybm1lbnQnXG59KShJbnB1dEFkb3JubWVudCk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSW5wdXRBZG9ybm1lbnQnOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICcuLi9CdXR0b25CYXNlJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xuaW1wb3J0IHVuc3VwcG9ydGVkUHJvcCBmcm9tICcuLi91dGlscy91bnN1cHBvcnRlZFByb3AnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIF9leHRlbmRzMjtcblxuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDogX2V4dGVuZHMoe30sIHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLCAoX2V4dGVuZHMyID0ge1xuICAgICAgbWF4V2lkdGg6IDI2NCxcbiAgICAgIG1pbldpZHRoOiA3MixcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtaW5IZWlnaHQ6IDQ4LFxuICAgICAgZmxleFNocmluazogMCxcbiAgICAgIHBhZGRpbmc6ICc2cHggMTJweCdcbiAgICB9LCBfZGVmaW5lUHJvcGVydHkoX2V4dGVuZHMyLCB0aGVtZS5icmVha3BvaW50cy51cCgnc20nKSwge1xuICAgICAgcGFkZGluZzogJzZweCAyNHB4J1xuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX2V4dGVuZHMyLCBcIm92ZXJmbG93XCIsICdoaWRkZW4nKSwgX2RlZmluZVByb3BlcnR5KF9leHRlbmRzMiwgXCJ3aGl0ZVNwYWNlXCIsICdub3JtYWwnKSwgX2RlZmluZVByb3BlcnR5KF9leHRlbmRzMiwgXCJ0ZXh0QWxpZ25cIiwgJ2NlbnRlcicpLCBfZGVmaW5lUHJvcGVydHkoX2V4dGVuZHMyLCB0aGVtZS5icmVha3BvaW50cy51cCgnc20nKSwge1xuICAgICAgbWluV2lkdGg6IDE2MFxuICAgIH0pLCBfZXh0ZW5kczIpKSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYm90aCBgaWNvbmAgYW5kIGBsYWJlbGAgYXJlIHByb3ZpZGVkLiAqL1xuICAgIGxhYmVsSWNvbjoge1xuICAgICAgbWluSGVpZ2h0OiA3MixcbiAgICAgIHBhZGRpbmdUb3A6IDksXG4gICAgICAnJiAkd3JhcHBlciA+ICo6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogNlxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBwYXJlbnQgW2BUYWJzYF0oL2FwaS90YWJzLykgaGFzIGB0ZXh0Q29sb3I9XCJpbmhlcml0XCJgLiAqL1xuICAgIHRleHRDb2xvckluaGVyaXQ6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICBvcGFjaXR5OiAwLjcsXG4gICAgICAnJiRzZWxlY3RlZCc6IHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBvcGFjaXR5OiAwLjVcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgcGFyZW50IFtgVGFic2BdKC9hcGkvdGFicy8pIGhhcyBgdGV4dENvbG9yPVwicHJpbWFyeVwiYC4gKi9cbiAgICB0ZXh0Q29sb3JQcmltYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICcmJHNlbGVjdGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5kaXNhYmxlZFxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBwYXJlbnQgW2BUYWJzYF0oL2FwaS90YWJzLykgaGFzIGB0ZXh0Q29sb3I9XCJzZWNvbmRhcnlcImAuICovXG4gICAgdGV4dENvbG9yU2Vjb25kYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICcmJHNlbGVjdGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LmRpc2FibGVkXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHNlbGVjdGVkPXt0cnVlfWAgKGNvbnRyb2xsZWQgYnkgdGhlIFRhYnMgY29tcG9uZW50KS4gKi9cbiAgICBzZWxlY3RlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gIChjb250cm9sbGVkIGJ5IHRoZSBUYWJzIGNvbXBvbmVudCkuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAgKGNvbnRyb2xsZWQgYnkgdGhlIFRhYnMgY29tcG9uZW50KS4gKi9cbiAgICBmdWxsV2lkdGg6IHtcbiAgICAgIGZsZXhTaHJpbms6IDEsXG4gICAgICBmbGV4R3JvdzogMSxcbiAgICAgIGZsZXhCYXNpczogMCxcbiAgICAgIG1heFdpZHRoOiAnbm9uZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgd3JhcHBlZD17dHJ1ZX1gLiAqL1xuICAgIHdyYXBwZWQ6IHtcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTIpLFxuICAgICAgbGluZUhlaWdodDogMS41XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaWNvbmAgYW5kIGBsYWJlbGAncyB3cmFwcGVyIGVsZW1lbnQuICovXG4gICAgd3JhcHBlcjoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gICAgfVxuICB9O1xufTtcbnZhciBUYWIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUYWIocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkID0gX3Byb3BzJGRpc2FibGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlZCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlRm9jdXNSaSA9IHByb3BzLmRpc2FibGVGb2N1c1JpcHBsZSxcbiAgICAgIGRpc2FibGVGb2N1c1JpcHBsZSA9IF9wcm9wcyRkaXNhYmxlRm9jdXNSaSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUZvY3VzUmksXG4gICAgICBmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBpY29uID0gcHJvcHMuaWNvbixcbiAgICAgIGluZGljYXRvciA9IHByb3BzLmluZGljYXRvcixcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgICBvbkZvY3VzID0gcHJvcHMub25Gb2N1cyxcbiAgICAgIHNlbGVjdGVkID0gcHJvcHMuc2VsZWN0ZWQsXG4gICAgICBzZWxlY3Rpb25Gb2xsb3dzRm9jdXMgPSBwcm9wcy5zZWxlY3Rpb25Gb2xsb3dzRm9jdXMsXG4gICAgICBfcHJvcHMkdGV4dENvbG9yID0gcHJvcHMudGV4dENvbG9yLFxuICAgICAgdGV4dENvbG9yID0gX3Byb3BzJHRleHRDb2xvciA9PT0gdm9pZCAwID8gJ2luaGVyaXQnIDogX3Byb3BzJHRleHRDb2xvcixcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICBfcHJvcHMkd3JhcHBlZCA9IHByb3BzLndyYXBwZWQsXG4gICAgICB3cmFwcGVkID0gX3Byb3BzJHdyYXBwZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHdyYXBwZWQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImRpc2FibGVkXCIsIFwiZGlzYWJsZUZvY3VzUmlwcGxlXCIsIFwiZnVsbFdpZHRoXCIsIFwiaWNvblwiLCBcImluZGljYXRvclwiLCBcImxhYmVsXCIsIFwib25DaGFuZ2VcIiwgXCJvbkNsaWNrXCIsIFwib25Gb2N1c1wiLCBcInNlbGVjdGVkXCIsIFwic2VsZWN0aW9uRm9sbG93c0ZvY3VzXCIsIFwidGV4dENvbG9yXCIsIFwidmFsdWVcIiwgXCJ3cmFwcGVkXCJdKTtcblxuICB2YXIgaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoZXZlbnQsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAob25DbGljaykge1xuICAgICAgb25DbGljayhldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIGhhbmRsZUZvY3VzKGV2ZW50KSB7XG4gICAgaWYgKHNlbGVjdGlvbkZvbGxvd3NGb2N1cyAmJiAhc2VsZWN0ZWQgJiYgb25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKGV2ZW50LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKG9uRm9jdXMpIHtcbiAgICAgIG9uRm9jdXMoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uQmFzZSwgX2V4dGVuZHMoe1xuICAgIGZvY3VzUmlwcGxlOiAhZGlzYWJsZUZvY3VzUmlwcGxlLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXNbXCJ0ZXh0Q29sb3JcIi5jb25jYXQoY2FwaXRhbGl6ZSh0ZXh0Q29sb3IpKV0sIGNsYXNzTmFtZSwgZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZCwgc2VsZWN0ZWQgJiYgY2xhc3Nlcy5zZWxlY3RlZCwgbGFiZWwgJiYgaWNvbiAmJiBjbGFzc2VzLmxhYmVsSWNvbiwgZnVsbFdpZHRoICYmIGNsYXNzZXMuZnVsbFdpZHRoLCB3cmFwcGVkICYmIGNsYXNzZXMud3JhcHBlZCksXG4gICAgcmVmOiByZWYsXG4gICAgcm9sZTogXCJ0YWJcIixcbiAgICBcImFyaWEtc2VsZWN0ZWRcIjogc2VsZWN0ZWQsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgIG9uRm9jdXM6IGhhbmRsZUZvY3VzLFxuICAgIHRhYkluZGV4OiBzZWxlY3RlZCA/IDAgOiAtMVxuICB9LCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLndyYXBwZXJcbiAgfSwgaWNvbiwgbGFiZWwpLCBpbmRpY2F0b3IpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUYWIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhpcyBwcm9wIGlzbid0IHN1cHBvcnRlZC5cbiAgICogVXNlIHRoZSBgY29tcG9uZW50YCBwcm9wIGlmIHlvdSBuZWVkIHRvIGNoYW5nZSB0aGUgY2hpbGRyZW4gc3RydWN0dXJlLlxuICAgKi9cbiAgY2hpbGRyZW46IHVuc3VwcG9ydGVkUHJvcCxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdGFiIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlICBrZXlib2FyZCBmb2N1cyByaXBwbGUgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVGb2N1c1JpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHJpcHBsZSBlZmZlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVSaXBwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiBlbGVtZW50LlxuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogRm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZyBjb25zaWRlcmF0aW9uLCB3ZSBsZXQgdGhlIHNlbGVjdGVkIHRhYlxuICAgKiByZW5kZXIgdGhlIGluZGljYXRvci5cbiAgICovXG4gIGluZGljYXRvcjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBlbGVtZW50LlxuICAgKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzZWxlY3Rpb25Gb2xsb3dzRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICB0ZXh0Q29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ3NlY29uZGFyeScsICdwcmltYXJ5JywgJ2luaGVyaXQnXSksXG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gcHJvdmlkZSB5b3VyIG93biB2YWx1ZS4gT3RoZXJ3aXNlLCB3ZSBmYWxsYmFjayB0byB0aGUgY2hpbGQgcG9zaXRpb24gaW5kZXguXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogVGFiIGxhYmVscyBhcHBlYXIgaW4gYSBzaW5nbGUgcm93LlxuICAgKiBUaGV5IGNhbiB1c2UgYSBzZWNvbmQgbGluZSBpZiBuZWVkZWQuXG4gICAqL1xuICB3cmFwcGVkOiBQcm9wVHlwZXMuYm9vbFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlUYWInXG59KShUYWIpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1RhYic7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hcmlhLXJvbGUgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBLZXlib2FyZEFycm93TGVmdCBmcm9tICcuLi9pbnRlcm5hbC9zdmctaWNvbnMvS2V5Ym9hcmRBcnJvd0xlZnQnO1xuaW1wb3J0IEtleWJvYXJkQXJyb3dSaWdodCBmcm9tICcuLi9pbnRlcm5hbC9zdmctaWNvbnMvS2V5Ym9hcmRBcnJvd1JpZ2h0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJy4uL0J1dHRvbkJhc2UnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogNDAsXG4gICAgZmxleFNocmluazogMCxcbiAgICBvcGFjaXR5OiAwLjgsXG4gICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICBvcGFjaXR5OiAwXG4gICAgfVxuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG9yaWVudGF0aW9uPVwidmVydGljYWxcImAuICovXG4gIHZlcnRpY2FsOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6IDQwLFxuICAgICcmIHN2Zyc6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg5MGRlZyknXG4gICAgfVxuICB9LFxuXG4gIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gIGRpc2FibGVkOiB7fVxufTtcblxudmFyIF9yZWYgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChLZXlib2FyZEFycm93TGVmdCwge1xuICBmb250U2l6ZTogXCJzbWFsbFwiXG59KTtcblxudmFyIF9yZWYyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoS2V5Ym9hcmRBcnJvd1JpZ2h0LCB7XG4gIGZvbnRTaXplOiBcInNtYWxsXCJcbn0pO1xuXG52YXIgVGFiU2Nyb2xsQnV0dG9uID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGFiU2Nyb2xsQnV0dG9uKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lUHJvcCA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGRpcmVjdGlvbiA9IHByb3BzLmRpcmVjdGlvbixcbiAgICAgIG9yaWVudGF0aW9uID0gcHJvcHMub3JpZW50YXRpb24sXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJkaXJlY3Rpb25cIiwgXCJvcmllbnRhdGlvblwiLCBcImRpc2FibGVkXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uQmFzZSwgX2V4dGVuZHMoe1xuICAgIGNvbXBvbmVudDogXCJkaXZcIixcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWVQcm9wLCBkaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkLCBvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJiBjbGFzc2VzLnZlcnRpY2FsKSxcbiAgICByZWY6IHJlZixcbiAgICByb2xlOiBudWxsLFxuICAgIHRhYkluZGV4OiBudWxsXG4gIH0sIG90aGVyKSwgZGlyZWN0aW9uID09PSAnbGVmdCcgPyBfcmVmIDogX3JlZjIpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUYWJTY3JvbGxCdXR0b24ucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFdoaWNoIGRpcmVjdGlvbiBzaG91bGQgdGhlIGJ1dHRvbiBpbmRpY2F0ZT9cbiAgICovXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCddKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBlbGVtZW50IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSB0YWJzIG9yaWVudGF0aW9uIChsYXlvdXQgZmxvdyBkaXJlY3Rpb24pLlxuICAgKi9cbiAgb3JpZW50YXRpb246IFByb3BUeXBlcy5vbmVPZihbJ2hvcml6b250YWwnLCAndmVydGljYWwnXSkuaXNSZXF1aXJlZFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlUYWJTY3JvbGxCdXR0b24nXG59KShUYWJTY3JvbGxCdXR0b24pOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1RhYlNjcm9sbEJ1dHRvbic7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi91dGlscy9kZWJvdW5jZSc7XG52YXIgc3R5bGVzID0ge1xuICB3aWR0aDogOTksXG4gIGhlaWdodDogOTksXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6IC05OTk5LFxuICBvdmVyZmxvdzogJ3Njcm9sbCdcbn07XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKiBUaGUgY29tcG9uZW50IG9yaWdpbmF0ZXMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vU1RPUklTL3JlYWN0LXNjcm9sbGJhci1zaXplLlxuICogSXQgaGFzIGJlZW4gbW92ZWQgaW50byB0aGUgY29yZSBpbiBvcmRlciB0byBtaW5pbWl6ZSB0aGUgYnVuZGxlIHNpemUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsYmFyU2l6ZShwcm9wcykge1xuICB2YXIgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJvbkNoYW5nZVwiXSk7XG5cbiAgdmFyIHNjcm9sbGJhckhlaWdodCA9IFJlYWN0LnVzZVJlZigpO1xuICB2YXIgbm9kZVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB2YXIgc2V0TWVhc3VyZW1lbnRzID0gZnVuY3Rpb24gc2V0TWVhc3VyZW1lbnRzKCkge1xuICAgIHNjcm9sbGJhckhlaWdodC5jdXJyZW50ID0gbm9kZVJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCAtIG5vZGVSZWYuY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gIH07XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlUmVzaXplID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHByZXZIZWlnaHQgPSBzY3JvbGxiYXJIZWlnaHQuY3VycmVudDtcbiAgICAgIHNldE1lYXN1cmVtZW50cygpO1xuXG4gICAgICBpZiAocHJldkhlaWdodCAhPT0gc2Nyb2xsYmFySGVpZ2h0LmN1cnJlbnQpIHtcbiAgICAgICAgb25DaGFuZ2Uoc2Nyb2xsYmFySGVpZ2h0LmN1cnJlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBoYW5kbGVSZXNpemUuY2xlYXIoKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIH07XG4gIH0sIFtvbkNoYW5nZV0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHNldE1lYXN1cmVtZW50cygpO1xuICAgIG9uQ2hhbmdlKHNjcm9sbGJhckhlaWdodC5jdXJyZW50KTtcbiAgfSwgW29uQ2hhbmdlXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgc3R5bGU6IHN0eWxlcyxcbiAgICByZWY6IG5vZGVSZWZcbiAgfSwgb3RoZXIpKTtcbn1cbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFNjcm9sbGJhclNpemUucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufSA6IHZvaWQgMDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBoZWlnaHQ6IDIsXG4gICAgICBib3R0b206IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKClcbiAgICB9LFxuICAgIGNvbG9yUHJpbWFyeToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgIH0sXG4gICAgY29sb3JTZWNvbmRhcnk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgIH0sXG4gICAgdmVydGljYWw6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6IDIsXG4gICAgICByaWdodDogMFxuICAgIH1cbiAgfTtcbn07XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxudmFyIFRhYkluZGljYXRvciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRhYkluZGljYXRvcihwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBvcmllbnRhdGlvbiA9IHByb3BzLm9yaWVudGF0aW9uLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xvclwiLCBcIm9yaWVudGF0aW9uXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc2VzW1wiY29sb3JcIi5jb25jYXQoY2FwaXRhbGl6ZShjb2xvcikpXSwgY2xhc3NOYW1lLCBvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJiBjbGFzc2VzLnZlcnRpY2FsKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUYWJJbmRpY2F0b3IucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBUaGUgY29sb3Igb2YgdGhlIHRhYiBpbmRpY2F0b3IuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVGhlIHRhYnMgb3JpZW50YXRpb24gKGxheW91dCBmbG93IGRpcmVjdGlvbikuXG4gICAqL1xuICBvcmllbnRhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddKS5pc1JlcXVpcmVkXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ1ByaXZhdGVUYWJJbmRpY2F0b3InXG59KShUYWJJbmRpY2F0b3IpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0ZyYWdtZW50IH0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVmVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IG93bmVyV2luZG93IGZyb20gJy4uL3V0aWxzL293bmVyV2luZG93JztcbmltcG9ydCB7IGdldE5vcm1hbGl6ZWRTY3JvbGxMZWZ0LCBkZXRlY3RTY3JvbGxUeXBlIH0gZnJvbSAnLi4vdXRpbHMvc2Nyb2xsTGVmdCc7XG5pbXBvcnQgYW5pbWF0ZSBmcm9tICcuLi9pbnRlcm5hbC9hbmltYXRlJztcbmltcG9ydCBTY3JvbGxiYXJTaXplIGZyb20gJy4vU2Nyb2xsYmFyU2l6ZSc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgVGFiSW5kaWNhdG9yIGZyb20gJy4vVGFiSW5kaWNhdG9yJztcbmltcG9ydCBUYWJTY3JvbGxCdXR0b24gZnJvbSAnLi4vVGFiU2Nyb2xsQnV0dG9uJztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJy4uL3V0aWxzL3VzZUV2ZW50Q2FsbGJhY2snO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4uL3N0eWxlcy91c2VUaGVtZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgbWluSGVpZ2h0OiA0OCxcbiAgICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnLFxuICAgICAgLy8gQWRkIGlPUyBtb21lbnR1bSBzY3JvbGxpbmcuXG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiYC4gKi9cbiAgICB2ZXJ0aWNhbDoge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGZsZXggY29udGFpbmVyIGVsZW1lbnQuICovXG4gICAgZmxleENvbnRhaW5lcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBmbGV4IGNvbnRhaW5lciBlbGVtZW50IGlmIGBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJgLiAqL1xuICAgIGZsZXhDb250YWluZXJWZXJ0aWNhbDoge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGZsZXggY29udGFpbmVyIGVsZW1lbnQgaWYgYGNlbnRlcmVkPXt0cnVlfWAgJiBgIXZhcmlhbnQ9XCJzY3JvbGxhYmxlXCJgLiAqL1xuICAgIGNlbnRlcmVkOiB7XG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHRhYmxpc3QgZWxlbWVudC4gKi9cbiAgICBzY3JvbGxlcjoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgdGFibGlzdCBlbGVtZW50IGlmIGAhdmFyaWFudD1cInNjcm9sbGFibGVcImBcYlxiXGIuICovXG4gICAgZml4ZWQ6IHtcbiAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSB0YWJsaXN0IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJzY3JvbGxhYmxlXCJgLiAqL1xuICAgIHNjcm9sbGFibGU6IHtcbiAgICAgIG92ZXJmbG93WDogJ3Njcm9sbCcsXG4gICAgICAvLyBIaWRlIGRpbWVuc2lvbmxlc3Mgc2Nyb2xsYmFyIG9uIE1hY09TXG4gICAgICBzY3JvbGxiYXJXaWR0aDogJ25vbmUnLFxuICAgICAgLy8gRmlyZWZveFxuICAgICAgJyY6Oi13ZWJraXQtc2Nyb2xsYmFyJzoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScgLy8gU2FmYXJpICsgQ2hyb21lXG5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBTY3JvbGxCdXR0b25Db21wb25lbnRgIGNvbXBvbmVudC4gKi9cbiAgICBzY3JvbGxCdXR0b25zOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgU2Nyb2xsQnV0dG9uQ29tcG9uZW50YCBjb21wb25lbnQgaWYgYHNjcm9sbEJ1dHRvbnM9XCJhdXRvXCJgIG9yIHNjcm9sbEJ1dHRvbnM9XCJkZXNrdG9wXCJgLiAqL1xuICAgIHNjcm9sbEJ1dHRvbnNEZXNrdG9wOiBfZGVmaW5lUHJvcGVydHkoe30sIHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyksIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBUYWJJbmRpY2F0b3JgIGNvbXBvbmVudC4gKi9cbiAgICBpbmRpY2F0b3I6IHt9XG4gIH07XG59O1xudmFyIFRhYnMgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUYWJzKHByb3BzLCByZWYpIHtcbiAgdmFyIGFyaWFMYWJlbCA9IHByb3BzWydhcmlhLWxhYmVsJ10sXG4gICAgICBhcmlhTGFiZWxsZWRCeSA9IHByb3BzWydhcmlhLWxhYmVsbGVkYnknXSxcbiAgICAgIGFjdGlvbiA9IHByb3BzLmFjdGlvbixcbiAgICAgIF9wcm9wcyRjZW50ZXJlZCA9IHByb3BzLmNlbnRlcmVkLFxuICAgICAgY2VudGVyZWQgPSBfcHJvcHMkY2VudGVyZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGNlbnRlcmVkLFxuICAgICAgY2hpbGRyZW5Qcm9wID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnZGl2JyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkaW5kaWNhdG9yQ29sb3IgPSBwcm9wcy5pbmRpY2F0b3JDb2xvcixcbiAgICAgIGluZGljYXRvckNvbG9yID0gX3Byb3BzJGluZGljYXRvckNvbG9yID09PSB2b2lkIDAgPyAnc2Vjb25kYXJ5JyA6IF9wcm9wcyRpbmRpY2F0b3JDb2xvcixcbiAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICBfcHJvcHMkb3JpZW50YXRpb24gPSBwcm9wcy5vcmllbnRhdGlvbixcbiAgICAgIG9yaWVudGF0aW9uID0gX3Byb3BzJG9yaWVudGF0aW9uID09PSB2b2lkIDAgPyAnaG9yaXpvbnRhbCcgOiBfcHJvcHMkb3JpZW50YXRpb24sXG4gICAgICBfcHJvcHMkU2Nyb2xsQnV0dG9uQ28gPSBwcm9wcy5TY3JvbGxCdXR0b25Db21wb25lbnQsXG4gICAgICBTY3JvbGxCdXR0b25Db21wb25lbnQgPSBfcHJvcHMkU2Nyb2xsQnV0dG9uQ28gPT09IHZvaWQgMCA/IFRhYlNjcm9sbEJ1dHRvbiA6IF9wcm9wcyRTY3JvbGxCdXR0b25DbyxcbiAgICAgIF9wcm9wcyRzY3JvbGxCdXR0b25zID0gcHJvcHMuc2Nyb2xsQnV0dG9ucyxcbiAgICAgIHNjcm9sbEJ1dHRvbnMgPSBfcHJvcHMkc2Nyb2xsQnV0dG9ucyA9PT0gdm9pZCAwID8gJ2F1dG8nIDogX3Byb3BzJHNjcm9sbEJ1dHRvbnMsXG4gICAgICBzZWxlY3Rpb25Gb2xsb3dzRm9jdXMgPSBwcm9wcy5zZWxlY3Rpb25Gb2xsb3dzRm9jdXMsXG4gICAgICBfcHJvcHMkVGFiSW5kaWNhdG9yUHIgPSBwcm9wcy5UYWJJbmRpY2F0b3JQcm9wcyxcbiAgICAgIFRhYkluZGljYXRvclByb3BzID0gX3Byb3BzJFRhYkluZGljYXRvclByID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRUYWJJbmRpY2F0b3JQcixcbiAgICAgIFRhYlNjcm9sbEJ1dHRvblByb3BzID0gcHJvcHMuVGFiU2Nyb2xsQnV0dG9uUHJvcHMsXG4gICAgICBfcHJvcHMkdGV4dENvbG9yID0gcHJvcHMudGV4dENvbG9yLFxuICAgICAgdGV4dENvbG9yID0gX3Byb3BzJHRleHRDb2xvciA9PT0gdm9pZCAwID8gJ2luaGVyaXQnIDogX3Byb3BzJHRleHRDb2xvcixcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICBfcHJvcHMkdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICB2YXJpYW50ID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdzdGFuZGFyZCcgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhcmlhLWxhYmVsXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCIsIFwiYWN0aW9uXCIsIFwiY2VudGVyZWRcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb21wb25lbnRcIiwgXCJpbmRpY2F0b3JDb2xvclwiLCBcIm9uQ2hhbmdlXCIsIFwib3JpZW50YXRpb25cIiwgXCJTY3JvbGxCdXR0b25Db21wb25lbnRcIiwgXCJzY3JvbGxCdXR0b25zXCIsIFwic2VsZWN0aW9uRm9sbG93c0ZvY3VzXCIsIFwiVGFiSW5kaWNhdG9yUHJvcHNcIiwgXCJUYWJTY3JvbGxCdXR0b25Qcm9wc1wiLCBcInRleHRDb2xvclwiLCBcInZhbHVlXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgdmFyIHNjcm9sbGFibGUgPSB2YXJpYW50ID09PSAnc2Nyb2xsYWJsZSc7XG4gIHZhciBpc1J0bCA9IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCc7XG4gIHZhciB2ZXJ0aWNhbCA9IG9yaWVudGF0aW9uID09PSAndmVydGljYWwnO1xuICB2YXIgc2Nyb2xsU3RhcnQgPSB2ZXJ0aWNhbCA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnO1xuICB2YXIgc3RhcnQgPSB2ZXJ0aWNhbCA/ICd0b3AnIDogJ2xlZnQnO1xuICB2YXIgZW5kID0gdmVydGljYWwgPyAnYm90dG9tJyA6ICdyaWdodCc7XG4gIHZhciBjbGllbnRTaXplID0gdmVydGljYWwgPyAnY2xpZW50SGVpZ2h0JyA6ICdjbGllbnRXaWR0aCc7XG4gIHZhciBzaXplID0gdmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoY2VudGVyZWQgJiYgc2Nyb2xsYWJsZSkge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IFlvdSBjYW4gbm90IHVzZSB0aGUgYGNlbnRlcmVkPXt0cnVlfWAgYW5kIGB2YXJpYW50PVwic2Nyb2xsYWJsZVwiYCBwcm9wZXJ0aWVzICcgKyAnYXQgdGhlIHNhbWUgdGltZSBvbiBhIGBUYWJzYCBjb21wb25lbnQuJyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIG1vdW50ZWQgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRNb3VudGVkID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUyID0gUmVhY3QudXNlU3RhdGUoe30pLFxuICAgICAgaW5kaWNhdG9yU3R5bGUgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0SW5kaWNhdG9yU3R5bGUgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUzID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIHN0YXJ0OiBmYWxzZSxcbiAgICBlbmQ6IGZhbHNlXG4gIH0pLFxuICAgICAgZGlzcGxheVNjcm9sbCA9IF9SZWFjdCR1c2VTdGF0ZTNbMF0sXG4gICAgICBzZXREaXNwbGF5U2Nyb2xsID0gX1JlYWN0JHVzZVN0YXRlM1sxXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlNCA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgbWFyZ2luQm90dG9tOiBudWxsXG4gIH0pLFxuICAgICAgc2Nyb2xsZXJTdHlsZSA9IF9SZWFjdCR1c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRTY3JvbGxlclN0eWxlID0gX1JlYWN0JHVzZVN0YXRlNFsxXTtcblxuICB2YXIgdmFsdWVUb0luZGV4ID0gbmV3IE1hcCgpO1xuICB2YXIgdGFic1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIHRhYkxpc3RSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgdmFyIGdldFRhYnNNZXRhID0gZnVuY3Rpb24gZ2V0VGFic01ldGEoKSB7XG4gICAgdmFyIHRhYnNOb2RlID0gdGFic1JlZi5jdXJyZW50O1xuICAgIHZhciB0YWJzTWV0YTtcblxuICAgIGlmICh0YWJzTm9kZSkge1xuICAgICAgdmFyIHJlY3QgPSB0YWJzTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgLy8gY3JlYXRlIGEgbmV3IG9iamVjdCB3aXRoIENsaWVudFJlY3QgY2xhc3MgcHJvcHMgKyBzY3JvbGxMZWZ0XG5cbiAgICAgIHRhYnNNZXRhID0ge1xuICAgICAgICBjbGllbnRXaWR0aDogdGFic05vZGUuY2xpZW50V2lkdGgsXG4gICAgICAgIHNjcm9sbExlZnQ6IHRhYnNOb2RlLnNjcm9sbExlZnQsXG4gICAgICAgIHNjcm9sbFRvcDogdGFic05vZGUuc2Nyb2xsVG9wLFxuICAgICAgICBzY3JvbGxMZWZ0Tm9ybWFsaXplZDogZ2V0Tm9ybWFsaXplZFNjcm9sbExlZnQodGFic05vZGUsIHRoZW1lLmRpcmVjdGlvbiksXG4gICAgICAgIHNjcm9sbFdpZHRoOiB0YWJzTm9kZS5zY3JvbGxXaWR0aCxcbiAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgICByaWdodDogcmVjdC5yaWdodFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgdGFiTWV0YTtcblxuICAgIGlmICh0YWJzTm9kZSAmJiB2YWx1ZSAhPT0gZmFsc2UpIHtcbiAgICAgIHZhciBfY2hpbGRyZW4gPSB0YWJMaXN0UmVmLmN1cnJlbnQuY2hpbGRyZW47XG5cbiAgICAgIGlmIChfY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgdGFiID0gX2NoaWxkcmVuW3ZhbHVlVG9JbmRleC5nZXQodmFsdWUpXTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGlmICghdGFiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgdmFsdWUgcHJvdmlkZWQgdG8gdGhlIFRhYnMgY29tcG9uZW50IGlzIGludmFsaWQuXCIsIFwiTm9uZSBvZiB0aGUgVGFicycgY2hpbGRyZW4gbWF0Y2ggd2l0aCBgXCIuY29uY2F0KHZhbHVlLCBcImAuXCIpLCB2YWx1ZVRvSW5kZXgua2V5cyA/IFwiWW91IGNhbiBwcm92aWRlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczogXCIuY29uY2F0KEFycmF5LmZyb20odmFsdWVUb0luZGV4LmtleXMoKSkuam9pbignLCAnKSwgXCIuXCIpIDogbnVsbF0uam9pbignXFxuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRhYk1ldGEgPSB0YWIgPyB0YWIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0YWJzTWV0YTogdGFic01ldGEsXG4gICAgICB0YWJNZXRhOiB0YWJNZXRhXG4gICAgfTtcbiAgfTtcblxuICB2YXIgdXBkYXRlSW5kaWNhdG9yU3RhdGUgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX25ld0luZGljYXRvclN0eWxlO1xuXG4gICAgdmFyIF9nZXRUYWJzTWV0YSA9IGdldFRhYnNNZXRhKCksXG4gICAgICAgIHRhYnNNZXRhID0gX2dldFRhYnNNZXRhLnRhYnNNZXRhLFxuICAgICAgICB0YWJNZXRhID0gX2dldFRhYnNNZXRhLnRhYk1ldGE7XG5cbiAgICB2YXIgc3RhcnRWYWx1ZSA9IDA7XG5cbiAgICBpZiAodGFiTWV0YSAmJiB0YWJzTWV0YSkge1xuICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgIHN0YXJ0VmFsdWUgPSB0YWJNZXRhLnRvcCAtIHRhYnNNZXRhLnRvcCArIHRhYnNNZXRhLnNjcm9sbFRvcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjb3JyZWN0aW9uID0gaXNSdGwgPyB0YWJzTWV0YS5zY3JvbGxMZWZ0Tm9ybWFsaXplZCArIHRhYnNNZXRhLmNsaWVudFdpZHRoIC0gdGFic01ldGEuc2Nyb2xsV2lkdGggOiB0YWJzTWV0YS5zY3JvbGxMZWZ0O1xuICAgICAgICBzdGFydFZhbHVlID0gdGFiTWV0YS5sZWZ0IC0gdGFic01ldGEubGVmdCArIGNvcnJlY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG5ld0luZGljYXRvclN0eWxlID0gKF9uZXdJbmRpY2F0b3JTdHlsZSA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX25ld0luZGljYXRvclN0eWxlLCBzdGFydCwgc3RhcnRWYWx1ZSksIF9kZWZpbmVQcm9wZXJ0eShfbmV3SW5kaWNhdG9yU3R5bGUsIHNpemUsIHRhYk1ldGEgPyB0YWJNZXRhW3NpemVdIDogMCksIF9uZXdJbmRpY2F0b3JTdHlsZSk7XG5cbiAgICBpZiAoaXNOYU4oaW5kaWNhdG9yU3R5bGVbc3RhcnRdKSB8fCBpc05hTihpbmRpY2F0b3JTdHlsZVtzaXplXSkpIHtcbiAgICAgIHNldEluZGljYXRvclN0eWxlKG5ld0luZGljYXRvclN0eWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGRTdGFydCA9IE1hdGguYWJzKGluZGljYXRvclN0eWxlW3N0YXJ0XSAtIG5ld0luZGljYXRvclN0eWxlW3N0YXJ0XSk7XG4gICAgICB2YXIgZFNpemUgPSBNYXRoLmFicyhpbmRpY2F0b3JTdHlsZVtzaXplXSAtIG5ld0luZGljYXRvclN0eWxlW3NpemVdKTtcblxuICAgICAgaWYgKGRTdGFydCA+PSAxIHx8IGRTaXplID49IDEpIHtcbiAgICAgICAgc2V0SW5kaWNhdG9yU3R5bGUobmV3SW5kaWNhdG9yU3R5bGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHNjcm9sbCA9IGZ1bmN0aW9uIHNjcm9sbChzY3JvbGxWYWx1ZSkge1xuICAgIGFuaW1hdGUoc2Nyb2xsU3RhcnQsIHRhYnNSZWYuY3VycmVudCwgc2Nyb2xsVmFsdWUpO1xuICB9O1xuXG4gIHZhciBtb3ZlVGFic1Njcm9sbCA9IGZ1bmN0aW9uIG1vdmVUYWJzU2Nyb2xsKGRlbHRhKSB7XG4gICAgdmFyIHNjcm9sbFZhbHVlID0gdGFic1JlZi5jdXJyZW50W3Njcm9sbFN0YXJ0XTtcblxuICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgc2Nyb2xsVmFsdWUgKz0gZGVsdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcm9sbFZhbHVlICs9IGRlbHRhICogKGlzUnRsID8gLTEgOiAxKTsgLy8gRml4IGZvciBFZGdlXG5cbiAgICAgIHNjcm9sbFZhbHVlICo9IGlzUnRsICYmIGRldGVjdFNjcm9sbFR5cGUoKSA9PT0gJ3JldmVyc2UnID8gLTEgOiAxO1xuICAgIH1cblxuICAgIHNjcm9sbChzY3JvbGxWYWx1ZSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZVN0YXJ0U2Nyb2xsQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVTdGFydFNjcm9sbENsaWNrKCkge1xuICAgIG1vdmVUYWJzU2Nyb2xsKC10YWJzUmVmLmN1cnJlbnRbY2xpZW50U2l6ZV0pO1xuICB9O1xuXG4gIHZhciBoYW5kbGVFbmRTY3JvbGxDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUVuZFNjcm9sbENsaWNrKCkge1xuICAgIG1vdmVUYWJzU2Nyb2xsKHRhYnNSZWYuY3VycmVudFtjbGllbnRTaXplXSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZVNjcm9sbGJhclNpemVDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoc2Nyb2xsYmFySGVpZ2h0KSB7XG4gICAgc2V0U2Nyb2xsZXJTdHlsZSh7XG4gICAgICBvdmVyZmxvdzogbnVsbCxcbiAgICAgIG1hcmdpbkJvdHRvbTogLXNjcm9sbGJhckhlaWdodFxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgdmFyIGdldENvbmRpdGlvbmFsRWxlbWVudHMgPSBmdW5jdGlvbiBnZXRDb25kaXRpb25hbEVsZW1lbnRzKCkge1xuICAgIHZhciBjb25kaXRpb25hbEVsZW1lbnRzID0ge307XG4gICAgY29uZGl0aW9uYWxFbGVtZW50cy5zY3JvbGxiYXJTaXplTGlzdGVuZXIgPSBzY3JvbGxhYmxlID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsYmFyU2l6ZSwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnNjcm9sbGFibGUsXG4gICAgICBvbkNoYW5nZTogaGFuZGxlU2Nyb2xsYmFyU2l6ZUNoYW5nZVxuICAgIH0pIDogbnVsbDtcbiAgICB2YXIgc2Nyb2xsQnV0dG9uc0FjdGl2ZSA9IGRpc3BsYXlTY3JvbGwuc3RhcnQgfHwgZGlzcGxheVNjcm9sbC5lbmQ7XG4gICAgdmFyIHNob3dTY3JvbGxCdXR0b25zID0gc2Nyb2xsYWJsZSAmJiAoc2Nyb2xsQnV0dG9ucyA9PT0gJ2F1dG8nICYmIHNjcm9sbEJ1dHRvbnNBY3RpdmUgfHwgc2Nyb2xsQnV0dG9ucyA9PT0gJ2Rlc2t0b3AnIHx8IHNjcm9sbEJ1dHRvbnMgPT09ICdvbicpO1xuICAgIGNvbmRpdGlvbmFsRWxlbWVudHMuc2Nyb2xsQnV0dG9uU3RhcnQgPSBzaG93U2Nyb2xsQnV0dG9ucyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNjcm9sbEJ1dHRvbkNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgb3JpZW50YXRpb246IG9yaWVudGF0aW9uLFxuICAgICAgZGlyZWN0aW9uOiBpc1J0bCA/ICdyaWdodCcgOiAnbGVmdCcsXG4gICAgICBvbkNsaWNrOiBoYW5kbGVTdGFydFNjcm9sbENsaWNrLFxuICAgICAgZGlzYWJsZWQ6ICFkaXNwbGF5U2Nyb2xsLnN0YXJ0LFxuICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuc2Nyb2xsQnV0dG9ucywgc2Nyb2xsQnV0dG9ucyAhPT0gJ29uJyAmJiBjbGFzc2VzLnNjcm9sbEJ1dHRvbnNEZXNrdG9wKVxuICAgIH0sIFRhYlNjcm9sbEJ1dHRvblByb3BzKSkgOiBudWxsO1xuICAgIGNvbmRpdGlvbmFsRWxlbWVudHMuc2Nyb2xsQnV0dG9uRW5kID0gc2hvd1Njcm9sbEJ1dHRvbnMgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTY3JvbGxCdXR0b25Db21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgIG9yaWVudGF0aW9uOiBvcmllbnRhdGlvbixcbiAgICAgIGRpcmVjdGlvbjogaXNSdGwgPyAnbGVmdCcgOiAncmlnaHQnLFxuICAgICAgb25DbGljazogaGFuZGxlRW5kU2Nyb2xsQ2xpY2ssXG4gICAgICBkaXNhYmxlZDogIWRpc3BsYXlTY3JvbGwuZW5kLFxuICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuc2Nyb2xsQnV0dG9ucywgc2Nyb2xsQnV0dG9ucyAhPT0gJ29uJyAmJiBjbGFzc2VzLnNjcm9sbEJ1dHRvbnNEZXNrdG9wKVxuICAgIH0sIFRhYlNjcm9sbEJ1dHRvblByb3BzKSkgOiBudWxsO1xuICAgIHJldHVybiBjb25kaXRpb25hbEVsZW1lbnRzO1xuICB9O1xuXG4gIHZhciBzY3JvbGxTZWxlY3RlZEludG9WaWV3ID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9nZXRUYWJzTWV0YTIgPSBnZXRUYWJzTWV0YSgpLFxuICAgICAgICB0YWJzTWV0YSA9IF9nZXRUYWJzTWV0YTIudGFic01ldGEsXG4gICAgICAgIHRhYk1ldGEgPSBfZ2V0VGFic01ldGEyLnRhYk1ldGE7XG5cbiAgICBpZiAoIXRhYk1ldGEgfHwgIXRhYnNNZXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRhYk1ldGFbc3RhcnRdIDwgdGFic01ldGFbc3RhcnRdKSB7XG4gICAgICAvLyBsZWZ0IHNpZGUgb2YgYnV0dG9uIGlzIG91dCBvZiB2aWV3XG4gICAgICB2YXIgbmV4dFNjcm9sbFN0YXJ0ID0gdGFic01ldGFbc2Nyb2xsU3RhcnRdICsgKHRhYk1ldGFbc3RhcnRdIC0gdGFic01ldGFbc3RhcnRdKTtcbiAgICAgIHNjcm9sbChuZXh0U2Nyb2xsU3RhcnQpO1xuICAgIH0gZWxzZSBpZiAodGFiTWV0YVtlbmRdID4gdGFic01ldGFbZW5kXSkge1xuICAgICAgLy8gcmlnaHQgc2lkZSBvZiBidXR0b24gaXMgb3V0IG9mIHZpZXdcbiAgICAgIHZhciBfbmV4dFNjcm9sbFN0YXJ0ID0gdGFic01ldGFbc2Nyb2xsU3RhcnRdICsgKHRhYk1ldGFbZW5kXSAtIHRhYnNNZXRhW2VuZF0pO1xuXG4gICAgICBzY3JvbGwoX25leHRTY3JvbGxTdGFydCk7XG4gICAgfVxuICB9KTtcbiAgdmFyIHVwZGF0ZVNjcm9sbEJ1dHRvblN0YXRlID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNjcm9sbGFibGUgJiYgc2Nyb2xsQnV0dG9ucyAhPT0gJ29mZicpIHtcbiAgICAgIHZhciBfdGFic1JlZiRjdXJyZW50ID0gdGFic1JlZi5jdXJyZW50LFxuICAgICAgICAgIHNjcm9sbFRvcCA9IF90YWJzUmVmJGN1cnJlbnQuc2Nyb2xsVG9wLFxuICAgICAgICAgIHNjcm9sbEhlaWdodCA9IF90YWJzUmVmJGN1cnJlbnQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IF90YWJzUmVmJGN1cnJlbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIHNjcm9sbFdpZHRoID0gX3RhYnNSZWYkY3VycmVudC5zY3JvbGxXaWR0aCxcbiAgICAgICAgICBjbGllbnRXaWR0aCA9IF90YWJzUmVmJGN1cnJlbnQuY2xpZW50V2lkdGg7XG4gICAgICB2YXIgc2hvd1N0YXJ0U2Nyb2xsO1xuICAgICAgdmFyIHNob3dFbmRTY3JvbGw7XG5cbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICBzaG93U3RhcnRTY3JvbGwgPSBzY3JvbGxUb3AgPiAxO1xuICAgICAgICBzaG93RW5kU2Nyb2xsID0gc2Nyb2xsVG9wIDwgc2Nyb2xsSGVpZ2h0IC0gY2xpZW50SGVpZ2h0IC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gZ2V0Tm9ybWFsaXplZFNjcm9sbExlZnQodGFic1JlZi5jdXJyZW50LCB0aGVtZS5kaXJlY3Rpb24pOyAvLyB1c2UgMSBmb3IgdGhlIHBvdGVudGlhbCByb3VuZGluZyBlcnJvciB3aXRoIGJyb3dzZXIgem9vbXMuXG5cbiAgICAgICAgc2hvd1N0YXJ0U2Nyb2xsID0gaXNSdGwgPyBzY3JvbGxMZWZ0IDwgc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCAtIDEgOiBzY3JvbGxMZWZ0ID4gMTtcbiAgICAgICAgc2hvd0VuZFNjcm9sbCA9ICFpc1J0bCA/IHNjcm9sbExlZnQgPCBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIC0gMSA6IHNjcm9sbExlZnQgPiAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hvd1N0YXJ0U2Nyb2xsICE9PSBkaXNwbGF5U2Nyb2xsLnN0YXJ0IHx8IHNob3dFbmRTY3JvbGwgIT09IGRpc3BsYXlTY3JvbGwuZW5kKSB7XG4gICAgICAgIHNldERpc3BsYXlTY3JvbGwoe1xuICAgICAgICAgIHN0YXJ0OiBzaG93U3RhcnRTY3JvbGwsXG4gICAgICAgICAgZW5kOiBzaG93RW5kU2Nyb2xsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZVJlc2l6ZSA9IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHVwZGF0ZUluZGljYXRvclN0YXRlKCk7XG4gICAgICB1cGRhdGVTY3JvbGxCdXR0b25TdGF0ZSgpO1xuICAgIH0pO1xuICAgIHZhciB3aW4gPSBvd25lcldpbmRvdyh0YWJzUmVmLmN1cnJlbnQpO1xuICAgIHdpbi5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBoYW5kbGVSZXNpemUuY2xlYXIoKTtcbiAgICAgIHdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIH07XG4gIH0sIFt1cGRhdGVJbmRpY2F0b3JTdGF0ZSwgdXBkYXRlU2Nyb2xsQnV0dG9uU3RhdGVdKTtcbiAgdmFyIGhhbmRsZVRhYnNTY3JvbGwgPSBSZWFjdC51c2VDYWxsYmFjayhkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgdXBkYXRlU2Nyb2xsQnV0dG9uU3RhdGUoKTtcbiAgfSkpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBoYW5kbGVUYWJzU2Nyb2xsLmNsZWFyKCk7XG4gICAgfTtcbiAgfSwgW2hhbmRsZVRhYnNTY3JvbGxdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBzZXRNb3VudGVkKHRydWUpO1xuICB9LCBbXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdXBkYXRlSW5kaWNhdG9yU3RhdGUoKTtcbiAgICB1cGRhdGVTY3JvbGxCdXR0b25TdGF0ZSgpO1xuICB9KTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBzY3JvbGxTZWxlY3RlZEludG9WaWV3KCk7XG4gIH0sIFtzY3JvbGxTZWxlY3RlZEludG9WaWV3LCBpbmRpY2F0b3JTdHlsZV0pO1xuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKGFjdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGVJbmRpY2F0b3I6IHVwZGF0ZUluZGljYXRvclN0YXRlLFxuICAgICAgdXBkYXRlU2Nyb2xsQnV0dG9uczogdXBkYXRlU2Nyb2xsQnV0dG9uU3RhdGVcbiAgICB9O1xuICB9LCBbdXBkYXRlSW5kaWNhdG9yU3RhdGUsIHVwZGF0ZVNjcm9sbEJ1dHRvblN0YXRlXSk7XG4gIHZhciBpbmRpY2F0b3IgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUYWJJbmRpY2F0b3IsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuaW5kaWNhdG9yLFxuICAgIG9yaWVudGF0aW9uOiBvcmllbnRhdGlvbixcbiAgICBjb2xvcjogaW5kaWNhdG9yQ29sb3JcbiAgfSwgVGFiSW5kaWNhdG9yUHJvcHMsIHtcbiAgICBzdHlsZTogX2V4dGVuZHMoe30sIGluZGljYXRvclN0eWxlLCBUYWJJbmRpY2F0b3JQcm9wcy5zdHlsZSlcbiAgfSkpO1xuICB2YXIgY2hpbGRJbmRleCA9IDA7XG4gIHZhciBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlblByb3AsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmICghIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaXNGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIFRhYnMgY29tcG9uZW50IGRvZXNuJ3QgYWNjZXB0IGEgRnJhZ21lbnQgYXMgYSBjaGlsZC5cIiwgJ0NvbnNpZGVyIHByb3ZpZGluZyBhbiBhcnJheSBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hpbGRWYWx1ZSA9IGNoaWxkLnByb3BzLnZhbHVlID09PSB1bmRlZmluZWQgPyBjaGlsZEluZGV4IDogY2hpbGQucHJvcHMudmFsdWU7XG4gICAgdmFsdWVUb0luZGV4LnNldChjaGlsZFZhbHVlLCBjaGlsZEluZGV4KTtcbiAgICB2YXIgc2VsZWN0ZWQgPSBjaGlsZFZhbHVlID09PSB2YWx1ZTtcbiAgICBjaGlsZEluZGV4ICs9IDE7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIGZ1bGxXaWR0aDogdmFyaWFudCA9PT0gJ2Z1bGxXaWR0aCcsXG4gICAgICBpbmRpY2F0b3I6IHNlbGVjdGVkICYmICFtb3VudGVkICYmIGluZGljYXRvcixcbiAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZCxcbiAgICAgIHNlbGVjdGlvbkZvbGxvd3NGb2N1czogc2VsZWN0aW9uRm9sbG93c0ZvY3VzLFxuICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgICAgdGV4dENvbG9yOiB0ZXh0Q29sb3IsXG4gICAgICB2YWx1ZTogY2hpbGRWYWx1ZVxuICAgIH0pO1xuICB9KTtcblxuICB2YXIgaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0OyAvLyBLZXlib2FyZCBuYXZpZ2F0aW9uIGFzc3VtZXMgdGhhdCBbcm9sZT1cInRhYlwiXSBhcmUgc2libGluZ3NcbiAgICAvLyB0aG91Z2ggd2UgbWlnaHQgd2FybiBpbiB0aGUgZnV0dXJlIGFib3V0IG5lc3RlZCwgaW50ZXJhY3RpdmUgZWxlbWVudHNcbiAgICAvLyBhcyBhIGExMXkgdmlvbGF0aW9uXG5cbiAgICB2YXIgcm9sZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKTtcblxuICAgIGlmIChyb2xlICE9PSAndGFiJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXdGb2N1c1RhcmdldCA9IG51bGw7XG4gICAgdmFyIHByZXZpb3VzSXRlbUtleSA9IG9yaWVudGF0aW9uICE9PSBcInZlcnRpY2FsXCIgPyAnQXJyb3dMZWZ0JyA6ICdBcnJvd1VwJztcbiAgICB2YXIgbmV4dEl0ZW1LZXkgPSBvcmllbnRhdGlvbiAhPT0gXCJ2ZXJ0aWNhbFwiID8gJ0Fycm93UmlnaHQnIDogJ0Fycm93RG93bic7XG5cbiAgICBpZiAob3JpZW50YXRpb24gIT09IFwidmVydGljYWxcIiAmJiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICAvLyBzd2FwIHByZXZpb3VzSXRlbUtleSB3aXRoIG5leHRJdGVtS2V5XG4gICAgICBwcmV2aW91c0l0ZW1LZXkgPSAnQXJyb3dSaWdodCc7XG4gICAgICBuZXh0SXRlbUtleSA9ICdBcnJvd0xlZnQnO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlIHByZXZpb3VzSXRlbUtleTpcbiAgICAgICAgbmV3Rm9jdXNUYXJnZXQgPSB0YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZyB8fCB0YWJMaXN0UmVmLmN1cnJlbnQubGFzdENoaWxkO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBuZXh0SXRlbUtleTpcbiAgICAgICAgbmV3Rm9jdXNUYXJnZXQgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nIHx8IHRhYkxpc3RSZWYuY3VycmVudC5maXJzdENoaWxkO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgIG5ld0ZvY3VzVGFyZ2V0ID0gdGFiTGlzdFJlZi5jdXJyZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdFbmQnOlxuICAgICAgICBuZXdGb2N1c1RhcmdldCA9IHRhYkxpc3RSZWYuY3VycmVudC5sYXN0Q2hpbGQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAobmV3Rm9jdXNUYXJnZXQgIT09IG51bGwpIHtcbiAgICAgIG5ld0ZvY3VzVGFyZ2V0LmZvY3VzKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY29uZGl0aW9uYWxFbGVtZW50cyA9IGdldENvbmRpdGlvbmFsRWxlbWVudHMoKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgdmVydGljYWwgJiYgY2xhc3Nlcy52ZXJ0aWNhbCksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBjb25kaXRpb25hbEVsZW1lbnRzLnNjcm9sbEJ1dHRvblN0YXJ0LCBjb25kaXRpb25hbEVsZW1lbnRzLnNjcm9sbGJhclNpemVMaXN0ZW5lciwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnNjcm9sbGVyLCBzY3JvbGxhYmxlID8gY2xhc3Nlcy5zY3JvbGxhYmxlIDogY2xhc3Nlcy5maXhlZCksXG4gICAgc3R5bGU6IHNjcm9sbGVyU3R5bGUsXG4gICAgcmVmOiB0YWJzUmVmLFxuICAgIG9uU2Nyb2xsOiBoYW5kbGVUYWJzU2Nyb2xsXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsLFxuICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGFyaWFMYWJlbGxlZEJ5LFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmZsZXhDb250YWluZXIsIHZlcnRpY2FsICYmIGNsYXNzZXMuZmxleENvbnRhaW5lclZlcnRpY2FsLCBjZW50ZXJlZCAmJiAhc2Nyb2xsYWJsZSAmJiBjbGFzc2VzLmNlbnRlcmVkKSxcbiAgICBvbktleURvd246IGhhbmRsZUtleURvd24sXG4gICAgcmVmOiB0YWJMaXN0UmVmLFxuICAgIHJvbGU6IFwidGFibGlzdFwiXG4gIH0sIGNoaWxkcmVuKSwgbW91bnRlZCAmJiBpbmRpY2F0b3IpLCBjb25kaXRpb25hbEVsZW1lbnRzLnNjcm9sbEJ1dHRvbkVuZCk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRhYnMucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cy5cbiAgICogVGhpcyBpcyB1c2VmdWwgd2hlbiB5b3Ugd2FudCB0byB0cmlnZ2VyIGFuIGFjdGlvbiBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKiBJdCBzdXBwb3J0cyB0d28gYWN0aW9uczogYHVwZGF0ZUluZGljYXRvcigpYCBhbmQgYHVwZGF0ZVNjcm9sbEJ1dHRvbnMoKWBcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGFjdGlvbnMgVGhpcyBvYmplY3QgY29udGFpbnMgYWxsIHBvc3NpYmxlIGFjdGlvbnNcbiAgICogdGhhdCBjYW4gYmUgdHJpZ2dlcmVkIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqL1xuICBhY3Rpb246IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBmb3IgdGhlIFRhYnMgYXMgYSBzdHJpbmcuXG4gICAqL1xuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEFuIGlkIG9yIGxpc3Qgb2YgaWRzIHNlcGFyYXRlZCBieSBhIHNwYWNlIHRoYXQgbGFiZWwgdGhlIFRhYnMuXG4gICAqL1xuICAnYXJpYS1sYWJlbGxlZGJ5JzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdGFicyB3aWxsIGJlIGNlbnRlcmVkLlxuICAgKiBUaGlzIHByb3BlcnR5IGlzIGludGVuZGVkIGZvciBsYXJnZSB2aWV3cy5cbiAgICovXG4gIGNlbnRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBjb2xvciBvZiB0aGUgaW5kaWNhdG9yLlxuICAgKi9cbiAgaW5kaWNhdG9yQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2tcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlIFdlIGRlZmF1bHQgdG8gdGhlIGluZGV4IG9mIHRoZSBjaGlsZCAobnVtYmVyKVxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgdGFicyBvcmllbnRhdGlvbiAobGF5b3V0IGZsb3cgZGlyZWN0aW9uKS5cbiAgICovXG4gIG9yaWVudGF0aW9uOiBQcm9wVHlwZXMub25lT2YoWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgdG8gcmVuZGVyIHRoZSBzY3JvbGwgYnV0dG9ucy5cbiAgICovXG4gIFNjcm9sbEJ1dHRvbkNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgYmVoYXZpb3Igb2Ygc2Nyb2xsIGJ1dHRvbnMgd2hlbiB0YWJzIGFyZSBzZXQgdG8gc2Nyb2xsOlxuICAgKlxuICAgKiAtIGBhdXRvYCB3aWxsIG9ubHkgcHJlc2VudCB0aGVtIHdoZW4gbm90IGFsbCB0aGUgaXRlbXMgYXJlIHZpc2libGUuXG4gICAqIC0gYGRlc2t0b3BgIHdpbGwgb25seSBwcmVzZW50IHRoZW0gb24gbWVkaXVtIGFuZCBsYXJnZXIgdmlld3BvcnRzLlxuICAgKiAtIGBvbmAgd2lsbCBhbHdheXMgcHJlc2VudCB0aGVtLlxuICAgKiAtIGBvZmZgIHdpbGwgbmV2ZXIgcHJlc2VudCB0aGVtLlxuICAgKi9cbiAgc2Nyb2xsQnV0dG9uczogUHJvcFR5cGVzLm9uZU9mKFsnYXV0bycsICdkZXNrdG9wJywgJ29mZicsICdvbiddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgIHRoZSBzZWxlY3RlZCB0YWIgY2hhbmdlcyBvbiBmb2N1cy4gT3RoZXJ3aXNlIGl0IG9ubHlcbiAgICogY2hhbmdlcyBvbiBhY3RpdmF0aW9uLlxuICAgKi9cbiAgc2VsZWN0aW9uRm9sbG93c0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgdGFiIGluZGljYXRvciBlbGVtZW50LlxuICAgKi9cbiAgVGFiSW5kaWNhdG9yUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgVGFiU2Nyb2xsQnV0dG9uYF0oL2FwaS90YWItc2Nyb2xsLWJ1dHRvbi8pIGVsZW1lbnQuXG4gICAqL1xuICBUYWJTY3JvbGxCdXR0b25Qcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgY29sb3Igb2YgdGhlIGBUYWJgLlxuICAgKi9cbiAgdGV4dENvbG9yOiBQcm9wVHlwZXMub25lT2YoWydpbmhlcml0JywgJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBgVGFiYC5cbiAgICogSWYgeW91IGRvbid0IHdhbnQgYW55IHNlbGVjdGVkIGBUYWJgLCB5b3UgY2FuIHNldCB0aGlzIHByb3BlcnR5IHRvIGBmYWxzZWAuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBhZGRpdGlvbmFsIGRpc3BsYXkgYmVoYXZpb3Igb2YgdGhlIHRhYnM6XG4gICAqXG4gICAqICAtIGBzY3JvbGxhYmxlYCB3aWxsIGludm9rZSBzY3JvbGxpbmcgcHJvcGVydGllcyBhbmQgYWxsb3cgZm9yIGhvcml6b250YWxseVxuICAgKiAgc2Nyb2xsaW5nIChvciBzd2lwaW5nKSBvZiB0aGUgdGFiIGJhci5cbiAgICogIC1gZnVsbFdpZHRoYCB3aWxsIG1ha2UgdGhlIHRhYnMgZ3JvdyB0byB1c2UgYWxsIHRoZSBhdmFpbGFibGUgc3BhY2UsXG4gICAqICB3aGljaCBzaG91bGQgYmUgdXNlZCBmb3Igc21hbGwgdmlld3MsIGxpa2Ugb24gbW9iaWxlLlxuICAgKiAgLSBgc3RhbmRhcmRgIHdpbGwgcmVuZGVyIHRoZSBkZWZhdWx0IHN0YXRlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZnVsbFdpZHRoJywgJ3Njcm9sbGFibGUnLCAnc3RhbmRhcmQnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVGFicydcbn0pKFRhYnMpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1RhYnMnOyIsImZ1bmN0aW9uIGVhc2VJbk91dFNpbih0aW1lKSB7XG4gIHJldHVybiAoMSArIE1hdGguc2luKE1hdGguUEkgKiB0aW1lIC0gTWF0aC5QSSAvIDIpKSAvIDI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuaW1hdGUocHJvcGVydHksIGVsZW1lbnQsIHRvKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgdmFyIGNiID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBmdW5jdGlvbiAoKSB7fTtcbiAgdmFyIF9vcHRpb25zJGVhc2UgPSBvcHRpb25zLmVhc2UsXG4gICAgICBlYXNlID0gX29wdGlvbnMkZWFzZSA9PT0gdm9pZCAwID8gZWFzZUluT3V0U2luIDogX29wdGlvbnMkZWFzZSxcbiAgICAgIF9vcHRpb25zJGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbixcbiAgICAgIGR1cmF0aW9uID0gX29wdGlvbnMkZHVyYXRpb24gPT09IHZvaWQgMCA/IDMwMCA6IF9vcHRpb25zJGR1cmF0aW9uO1xuICB2YXIgc3RhcnQgPSBudWxsO1xuICB2YXIgZnJvbSA9IGVsZW1lbnRbcHJvcGVydHldO1xuICB2YXIgY2FuY2VsbGVkID0gZmFsc2U7XG5cbiAgdmFyIGNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICB9O1xuXG4gIHZhciBzdGVwID0gZnVuY3Rpb24gc3RlcCh0aW1lc3RhbXApIHtcbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjYihuZXcgRXJyb3IoJ0FuaW1hdGlvbiBjYW5jZWxsZWQnKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID09PSBudWxsKSB7XG4gICAgICBzdGFydCA9IHRpbWVzdGFtcDtcbiAgICB9XG5cbiAgICB2YXIgdGltZSA9IE1hdGgubWluKDEsICh0aW1lc3RhbXAgLSBzdGFydCkgLyBkdXJhdGlvbik7XG4gICAgZWxlbWVudFtwcm9wZXJ0eV0gPSBlYXNlKHRpbWUpICogKHRvIC0gZnJvbSkgKyBmcm9tO1xuXG4gICAgaWYgKHRpbWUgPj0gMSkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2IobnVsbCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gIH07XG5cbiAgaWYgKGZyb20gPT09IHRvKSB7XG4gICAgY2IobmV3IEVycm9yKCdFbGVtZW50IGFscmVhZHkgYXQgdGFyZ2V0IHBvc2l0aW9uJykpO1xuICAgIHJldHVybiBjYW5jZWw7XG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gIHJldHVybiBjYW5jZWw7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTUuNDEgMTYuMDlsLTQuNTgtNC41OSA0LjU4LTQuNTlMMTQgNS41bC02IDYgNiA2elwiXG59KSwgJ0tleWJvYXJkQXJyb3dMZWZ0Jyk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNOC41OSAxNi4zNGw0LjU4LTQuNTktNC41OC00LjU5TDEwIDUuNzVsNiA2LTYgNnpcIlxufSksICdLZXlib2FyZEFycm93UmlnaHQnKTsiLCIvLyBTb3VyY2UgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYWxpdGFoZXJpL25vcm1hbGl6ZS1zY3JvbGwtbGVmdFxudmFyIGNhY2hlZFR5cGU7XG4vKipcbiAqIEJhc2VkIG9uIHRoZSBqcXVlcnkgcGx1Z2luIGh0dHBzOi8vZ2l0aHViLmNvbS9vdGhyZWUvanF1ZXJ5LnJ0bC1zY3JvbGwtdHlwZVxuICpcbiAqIFR5cGVzIG9mIHNjcm9sbExlZnQsIGFzc2ltaW5nIHNjcm9sbFdpZHRoPTEwMCBhbmQgZGlyZWN0aW9uIGlzIHJ0bC5cbiAqXG4gKiBCcm93c2VyICAgICAgICB8IFR5cGUgICAgICAgICAgfCA8LSBNb3N0IExlZnQgfCBNb3N0IFJpZ2h0IC0+IHwgSW5pdGlhbFxuICogLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS1cbiAqIFdlYktpdCAgICAgICAgIHwgZGVmYXVsdCAgICAgICB8IDAgICAgICAgICAgICB8IDEwMCAgICAgICAgICAgfCAxMDBcbiAqIEZpcmVmb3gvT3BlcmEgIHwgbmVnYXRpdmUgICAgICB8IC0xMDAgICAgICAgICB8IDAgICAgICAgICAgICAgfCAwXG4gKiBJRS9FZGdlICAgICAgICB8IHJldmVyc2UgICAgICAgfCAxMDAgICAgICAgICAgfCAwICAgICAgICAgICAgIHwgMFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RTY3JvbGxUeXBlKCkge1xuICBpZiAoY2FjaGVkVHlwZSkge1xuICAgIHJldHVybiBjYWNoZWRUeXBlO1xuICB9XG5cbiAgdmFyIGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1bW15LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdBQkNEJykpO1xuICBkdW1teS5kaXIgPSAncnRsJztcbiAgZHVtbXkuc3R5bGUuZm9udFNpemUgPSAnMTRweCc7XG4gIGR1bW15LnN0eWxlLndpZHRoID0gJzRweCc7XG4gIGR1bW15LnN0eWxlLmhlaWdodCA9ICcxcHgnO1xuICBkdW1teS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIGR1bW15LnN0eWxlLnRvcCA9ICctMTAwMHB4JztcbiAgZHVtbXkuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkdW1teSk7XG4gIGNhY2hlZFR5cGUgPSAncmV2ZXJzZSc7XG5cbiAgaWYgKGR1bW15LnNjcm9sbExlZnQgPiAwKSB7XG4gICAgY2FjaGVkVHlwZSA9ICdkZWZhdWx0JztcbiAgfSBlbHNlIHtcbiAgICBkdW1teS5zY3JvbGxMZWZ0ID0gMTtcblxuICAgIGlmIChkdW1teS5zY3JvbGxMZWZ0ID09PSAwKSB7XG4gICAgICBjYWNoZWRUeXBlID0gJ25lZ2F0aXZlJztcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGR1bW15KTtcbiAgcmV0dXJuIGNhY2hlZFR5cGU7XG59IC8vIEJhc2VkIG9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNDM5NDM3NlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZFNjcm9sbExlZnQoZWxlbWVudCwgZGlyZWN0aW9uKSB7XG4gIHZhciBzY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0OyAvLyBQZXJmb3JtIHRoZSBjYWxjdWxhdGlvbnMgb25seSB3aGVuIGRpcmVjdGlvbiBpcyBydGwgdG8gYXZvaWQgbWVzc2luZyB1cCB0aGUgbHRyIGJhaGF2aW9yXG5cbiAgaWYgKGRpcmVjdGlvbiAhPT0gJ3J0bCcpIHtcbiAgICByZXR1cm4gc2Nyb2xsTGVmdDtcbiAgfVxuXG4gIHZhciB0eXBlID0gZGV0ZWN0U2Nyb2xsVHlwZSgpO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ25lZ2F0aXZlJzpcbiAgICAgIHJldHVybiBlbGVtZW50LnNjcm9sbFdpZHRoIC0gZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbExlZnQ7XG5cbiAgICBjYXNlICdyZXZlcnNlJzpcbiAgICAgIHJldHVybiBlbGVtZW50LnNjcm9sbFdpZHRoIC0gZWxlbWVudC5jbGllbnRXaWR0aCAtIHNjcm9sbExlZnQ7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHNjcm9sbExlZnQ7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bnN1cHBvcnRlZFByb3AocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgcHJvcEZ1bGxOYW1lU2FmZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICBpZiAodHlwZW9mIHByb3BzW3Byb3BOYW1lXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFwiVGhlIHByb3AgYFwiLmNvbmNhdChwcm9wRnVsbE5hbWVTYWZlLCBcImAgaXMgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHJlbW92ZSBpdC5cIikpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IiwiaW1wb3J0IFJlYWN0X19kZWZhdWx0LCB7IHVzZUNhbGxiYWNrLCBjcmVhdGVFbGVtZW50LCBjbG9uZUVsZW1lbnQsIEZyYWdtZW50LCBDb21wb25lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vZGUsIGJvb2wsIGZ1bmMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHUgYXMgdXNlVXRpbHMgfSBmcm9tICcuL3VzZVV0aWxzLWNmYjk2YWM5LmpzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IGEgYXMgYXJyYXlJbmNsdWRlcywgciBhcyBydW5LZXlIYW5kbGVyLCBWIGFzIFZhcmlhbnRDb250ZXh0IH0gZnJvbSAnLi9XcmFwcGVyLTI0MTk2NmQ3LmpzJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvbic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmltcG9ydCBEYXkgZnJvbSAnLi9EYXkuanMnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkdyb3VwLCBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcblxudmFyIGZpbmRDbG9zZXN0RW5hYmxlZERhdGUgPSBmdW5jdGlvbiBmaW5kQ2xvc2VzdEVuYWJsZWREYXRlKF9yZWYpIHtcbiAgdmFyIGRhdGUgPSBfcmVmLmRhdGUsXG4gICAgICB1dGlscyA9IF9yZWYudXRpbHMsXG4gICAgICBtaW5EYXRlID0gX3JlZi5taW5EYXRlLFxuICAgICAgbWF4RGF0ZSA9IF9yZWYubWF4RGF0ZSxcbiAgICAgIGRpc2FibGVGdXR1cmUgPSBfcmVmLmRpc2FibGVGdXR1cmUsXG4gICAgICBkaXNhYmxlUGFzdCA9IF9yZWYuZGlzYWJsZVBhc3QsXG4gICAgICBzaG91bGREaXNhYmxlRGF0ZSA9IF9yZWYuc2hvdWxkRGlzYWJsZURhdGU7XG4gIHZhciB0b2RheSA9IHV0aWxzLnN0YXJ0T2ZEYXkodXRpbHMuZGF0ZSgpKTtcblxuICBpZiAoZGlzYWJsZVBhc3QgJiYgdXRpbHMuaXNCZWZvcmUobWluRGF0ZSwgdG9kYXkpKSB7XG4gICAgbWluRGF0ZSA9IHRvZGF5O1xuICB9XG5cbiAgaWYgKGRpc2FibGVGdXR1cmUgJiYgdXRpbHMuaXNBZnRlcihtYXhEYXRlLCB0b2RheSkpIHtcbiAgICBtYXhEYXRlID0gdG9kYXk7XG4gIH1cblxuICB2YXIgZm9yd2FyZCA9IGRhdGU7XG4gIHZhciBiYWNrd2FyZCA9IGRhdGU7XG5cbiAgaWYgKHV0aWxzLmlzQmVmb3JlKGRhdGUsIG1pbkRhdGUpKSB7XG4gICAgZm9yd2FyZCA9IHV0aWxzLmRhdGUobWluRGF0ZSk7XG4gICAgYmFja3dhcmQgPSBudWxsO1xuICB9XG5cbiAgaWYgKHV0aWxzLmlzQWZ0ZXIoZGF0ZSwgbWF4RGF0ZSkpIHtcbiAgICBpZiAoYmFja3dhcmQpIHtcbiAgICAgIGJhY2t3YXJkID0gdXRpbHMuZGF0ZShtYXhEYXRlKTtcbiAgICB9XG5cbiAgICBmb3J3YXJkID0gbnVsbDtcbiAgfVxuXG4gIHdoaWxlIChmb3J3YXJkIHx8IGJhY2t3YXJkKSB7XG4gICAgaWYgKGZvcndhcmQgJiYgdXRpbHMuaXNBZnRlcihmb3J3YXJkLCBtYXhEYXRlKSkge1xuICAgICAgZm9yd2FyZCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGJhY2t3YXJkICYmIHV0aWxzLmlzQmVmb3JlKGJhY2t3YXJkLCBtaW5EYXRlKSkge1xuICAgICAgYmFja3dhcmQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICBpZiAoIXNob3VsZERpc2FibGVEYXRlKGZvcndhcmQpKSB7XG4gICAgICAgIHJldHVybiBmb3J3YXJkO1xuICAgICAgfVxuXG4gICAgICBmb3J3YXJkID0gdXRpbHMuYWRkRGF5cyhmb3J3YXJkLCAxKTtcbiAgICB9XG5cbiAgICBpZiAoYmFja3dhcmQpIHtcbiAgICAgIGlmICghc2hvdWxkRGlzYWJsZURhdGUoYmFja3dhcmQpKSB7XG4gICAgICAgIHJldHVybiBiYWNrd2FyZDtcbiAgICAgIH1cblxuICAgICAgYmFja3dhcmQgPSB1dGlscy5hZGREYXlzKGJhY2t3YXJkLCAtMSk7XG4gICAgfVxuICB9IC8vIGZhbGxiYWNrIHRvIHRvZGF5IGlmIG5vIGVuYWJsZWQgZGF5c1xuXG5cbiAgcmV0dXJuIHV0aWxzLmRhdGUoKTtcbn07XG52YXIgaXNZZWFyT25seVZpZXcgPSBmdW5jdGlvbiBpc1llYXJPbmx5Vmlldyh2aWV3cykge1xuICByZXR1cm4gdmlld3MubGVuZ3RoID09PSAxICYmIHZpZXdzWzBdID09PSAneWVhcic7XG59O1xudmFyIGlzWWVhckFuZE1vbnRoVmlld3MgPSBmdW5jdGlvbiBpc1llYXJBbmRNb250aFZpZXdzKHZpZXdzKSB7XG4gIHJldHVybiB2aWV3cy5sZW5ndGggPT09IDIgJiYgYXJyYXlJbmNsdWRlcyh2aWV3cywgJ21vbnRoJykgJiYgYXJyYXlJbmNsdWRlcyh2aWV3cywgJ3llYXInKTtcbn07XG52YXIgZ2V0Rm9ybWF0QnlWaWV3cyA9IGZ1bmN0aW9uIGdldEZvcm1hdEJ5Vmlld3Modmlld3MsIHV0aWxzKSB7XG4gIGlmIChpc1llYXJPbmx5Vmlldyh2aWV3cykpIHtcbiAgICByZXR1cm4gdXRpbHMueWVhckZvcm1hdDtcbiAgfVxuXG4gIGlmIChpc1llYXJBbmRNb250aFZpZXdzKHZpZXdzKSkge1xuICAgIHJldHVybiB1dGlscy55ZWFyTW9udGhGb3JtYXQ7XG4gIH1cblxuICByZXR1cm4gdXRpbHMuZGF0ZUZvcm1hdDtcbn07XG5cbnZhciBEYXlXcmFwcGVyID0gZnVuY3Rpb24gRGF5V3JhcHBlcihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBvblNlbGVjdCA9IF9yZWYub25TZWxlY3QsXG4gICAgICBkYXlJbkN1cnJlbnRNb250aCA9IF9yZWYuZGF5SW5DdXJyZW50TW9udGgsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjaGlsZHJlblwiLCBcInZhbHVlXCIsIFwiZGlzYWJsZWRcIiwgXCJvblNlbGVjdFwiLCBcImRheUluQ3VycmVudE1vbnRoXCJdKTtcblxuICB2YXIgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG9uU2VsZWN0KHZhbHVlKTtcbiAgfSwgW29uU2VsZWN0LCB2YWx1ZV0pO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgcm9sZTogXCJwcmVzZW50YXRpb25cIixcbiAgICBvbkNsaWNrOiBkYXlJbkN1cnJlbnRNb250aCAmJiAhZGlzYWJsZWQgPyBoYW5kbGVDbGljayA6IHVuZGVmaW5lZCxcbiAgICBvbktleVByZXNzOiBkYXlJbkN1cnJlbnRNb250aCAmJiAhZGlzYWJsZWQgPyBoYW5kbGVDbGljayA6IHVuZGVmaW5lZFxuICB9LCBvdGhlciksIGNoaWxkcmVuKTtcbn07XG5cbnZhciBhbmltYXRpb25EdXJhdGlvbiA9IDM1MDtcbnZhciB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICB2YXIgc2xpZGVUcmFuc2l0aW9uID0gdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgZHVyYXRpb246IGFuaW1hdGlvbkR1cmF0aW9uLFxuICAgIGVhc2luZzogJ2N1YmljLWJlemllcigwLjM1LCAwLjgsIDAuNCwgMSknXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRyYW5zaXRpb25Db250YWluZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICcmID4gKic6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH1cbiAgICB9LFxuICAgICdzbGlkZUVudGVyLWxlZnQnOiB7XG4gICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxMDAlKSdcbiAgICB9LFxuICAgICdzbGlkZUVudGVyLXJpZ2h0Jzoge1xuICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTEwMCUpJ1xuICAgIH0sXG4gICAgc2xpZGVFbnRlckFjdGl2ZToge1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAlKScsXG4gICAgICB0cmFuc2l0aW9uOiBzbGlkZVRyYW5zaXRpb25cbiAgICB9LFxuICAgIHNsaWRlRXhpdDoge1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAlKSdcbiAgICB9LFxuICAgICdzbGlkZUV4aXRBY3RpdmVMZWZ0LWxlZnQnOiB7XG4gICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtMjAwJSknLFxuICAgICAgdHJhbnNpdGlvbjogc2xpZGVUcmFuc2l0aW9uXG4gICAgfSxcbiAgICAnc2xpZGVFeGl0QWN0aXZlTGVmdC1yaWdodCc6IHtcbiAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDIwMCUpJyxcbiAgICAgIHRyYW5zaXRpb246IHNsaWRlVHJhbnNpdGlvblxuICAgIH1cbiAgfTtcbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlcnNTbGlkZVRyYW5zaXRpb24nXG59KTtcblxudmFyIFNsaWRlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIFNsaWRlVHJhbnNpdGlvbihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICB0cmFuc0tleSA9IF9yZWYudHJhbnNLZXksXG4gICAgICBzbGlkZURpcmVjdGlvbiA9IF9yZWYuc2xpZGVEaXJlY3Rpb24sXG4gICAgICBfcmVmJGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJGNsYXNzTmFtZTtcbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgdmFyIHRyYW5zaXRpb25DbGFzc2VzID0ge1xuICAgIGV4aXQ6IGNsYXNzZXMuc2xpZGVFeGl0LFxuICAgIGVudGVyQWN0aXZlOiBjbGFzc2VzLnNsaWRlRW50ZXJBY3RpdmUsXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGVudGVyOiBjbGFzc2VzWydzbGlkZUVudGVyLScgKyBzbGlkZURpcmVjdGlvbl0sXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGV4aXRBY3RpdmU6IGNsYXNzZXNbJ3NsaWRlRXhpdEFjdGl2ZUxlZnQtJyArIHNsaWRlRGlyZWN0aW9uXVxuICB9O1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXAsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy50cmFuc2l0aW9uQ29udGFpbmVyLCBjbGFzc05hbWUpLFxuICAgIGNoaWxkRmFjdG9yeTogZnVuY3Rpb24gY2hpbGRGYWN0b3J5KGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBjbG9uZUVsZW1lbnQoZWxlbWVudCwge1xuICAgICAgICBjbGFzc05hbWVzOiB0cmFuc2l0aW9uQ2xhc3Nlc1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBjcmVhdGVFbGVtZW50KENTU1RyYW5zaXRpb24sIHtcbiAgICBtb3VudE9uRW50ZXI6IHRydWUsXG4gICAgdW5tb3VudE9uRXhpdDogdHJ1ZSxcbiAgICBrZXk6IHRyYW5zS2V5ICsgc2xpZGVEaXJlY3Rpb24sXG4gICAgdGltZW91dDogYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgY2xhc3NOYW1lczogdHJhbnNpdGlvbkNsYXNzZXMsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0pKTtcbn07XG5cbnZhciBBcnJvd0xlZnRJY29uID0gZnVuY3Rpb24gQXJyb3dMZWZ0SWNvbihwcm9wcykge1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChTdmdJY29uLCBwcm9wcywgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE1LjQxIDE2LjU5TDEwLjgzIDEybDQuNTgtNC41OUwxNCA2bC02IDYgNiA2IDEuNDEtMS40MXpcIlxuICB9KSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIGQ6IFwiTTAgMGgyNHYyNEgwVjB6XCJcbiAgfSkpO1xufTtcblxudmFyIEFycm93UmlnaHRJY29uID0gZnVuY3Rpb24gQXJyb3dSaWdodEljb24ocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3ZnSWNvbiwgcHJvcHMsIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk04LjU5IDE2LjU5TDEzLjE3IDEyIDguNTkgNy40MSAxMCA2bDYgNi02IDYtMS40MS0xLjQxelwiXG4gIH0pLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZDogXCJNMCAwaDI0djI0SDBWMHpcIlxuICB9KSk7XG59O1xuXG52YXIgdXNlU3R5bGVzJDEgPSBtYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIHN3aXRjaEhlYWRlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSlcbiAgICB9LFxuICAgIHRyYW5zaXRpb25Db250YWluZXI6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBoZWlnaHQ6IDIzXG4gICAgfSxcbiAgICBpY29uQnV0dG9uOiB7XG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlclxuICAgIH0sXG4gICAgZGF5c0hlYWRlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBtYXhIZWlnaHQ6IDE2XG4gICAgfSxcbiAgICBkYXlMYWJlbDoge1xuICAgICAgd2lkdGg6IDM2LFxuICAgICAgbWFyZ2luOiAnMCAycHgnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuaGludFxuICAgIH1cbiAgfTtcbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlcnNDYWxlbmRhckhlYWRlcidcbn0pO1xudmFyIENhbGVuZGFySGVhZGVyID0gZnVuY3Rpb24gQ2FsZW5kYXJIZWFkZXIoX3JlZikge1xuICB2YXIgY3VycmVudE1vbnRoID0gX3JlZi5jdXJyZW50TW9udGgsXG4gICAgICBvbk1vbnRoQ2hhbmdlID0gX3JlZi5vbk1vbnRoQ2hhbmdlLFxuICAgICAgbGVmdEFycm93SWNvbiA9IF9yZWYubGVmdEFycm93SWNvbixcbiAgICAgIHJpZ2h0QXJyb3dJY29uID0gX3JlZi5yaWdodEFycm93SWNvbixcbiAgICAgIGxlZnRBcnJvd0J1dHRvblByb3BzID0gX3JlZi5sZWZ0QXJyb3dCdXR0b25Qcm9wcyxcbiAgICAgIHJpZ2h0QXJyb3dCdXR0b25Qcm9wcyA9IF9yZWYucmlnaHRBcnJvd0J1dHRvblByb3BzLFxuICAgICAgZGlzYWJsZVByZXZNb250aCA9IF9yZWYuZGlzYWJsZVByZXZNb250aCxcbiAgICAgIGRpc2FibGVOZXh0TW9udGggPSBfcmVmLmRpc2FibGVOZXh0TW9udGgsXG4gICAgICBzbGlkZURpcmVjdGlvbiA9IF9yZWYuc2xpZGVEaXJlY3Rpb247XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzJDEoKTtcbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgdmFyIHJ0bCA9IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCc7XG5cbiAgdmFyIHNlbGVjdE5leHRNb250aCA9IGZ1bmN0aW9uIHNlbGVjdE5leHRNb250aCgpIHtcbiAgICByZXR1cm4gb25Nb250aENoYW5nZSh1dGlscy5nZXROZXh0TW9udGgoY3VycmVudE1vbnRoKSwgJ2xlZnQnKTtcbiAgfTtcblxuICB2YXIgc2VsZWN0UHJldmlvdXNNb250aCA9IGZ1bmN0aW9uIHNlbGVjdFByZXZpb3VzTW9udGgoKSB7XG4gICAgcmV0dXJuIG9uTW9udGhDaGFuZ2UodXRpbHMuZ2V0UHJldmlvdXNNb250aChjdXJyZW50TW9udGgpLCAncmlnaHQnKTtcbiAgfTtcblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuc3dpdGNoSGVhZGVyXG4gIH0sIGNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwgX2V4dGVuZHMoe30sIGxlZnRBcnJvd0J1dHRvblByb3BzLCB7XG4gICAgZGlzYWJsZWQ6IGRpc2FibGVQcmV2TW9udGgsXG4gICAgb25DbGljazogc2VsZWN0UHJldmlvdXNNb250aCxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuaWNvbkJ1dHRvblxuICB9KSwgcnRsID8gcmlnaHRBcnJvd0ljb24gOiBsZWZ0QXJyb3dJY29uKSwgY3JlYXRlRWxlbWVudChTbGlkZVRyYW5zaXRpb24sIHtcbiAgICBzbGlkZURpcmVjdGlvbjogc2xpZGVEaXJlY3Rpb24sXG4gICAgdHJhbnNLZXk6IGN1cnJlbnRNb250aC50b1N0cmluZygpLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50cmFuc2l0aW9uQ29udGFpbmVyXG4gIH0sIGNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwge1xuICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgIHZhcmlhbnQ6IFwiYm9keTFcIlxuICB9LCB1dGlscy5nZXRDYWxlbmRhckhlYWRlclRleHQoY3VycmVudE1vbnRoKSkpLCBjcmVhdGVFbGVtZW50KEljb25CdXR0b24sIF9leHRlbmRzKHt9LCByaWdodEFycm93QnV0dG9uUHJvcHMsIHtcbiAgICBkaXNhYmxlZDogZGlzYWJsZU5leHRNb250aCxcbiAgICBvbkNsaWNrOiBzZWxlY3ROZXh0TW9udGgsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmljb25CdXR0b25cbiAgfSksIHJ0bCA/IGxlZnRBcnJvd0ljb24gOiByaWdodEFycm93SWNvbikpLCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuZGF5c0hlYWRlclxuICB9LCB1dGlscy5nZXRXZWVrZGF5cygpLm1hcChmdW5jdGlvbiAoZGF5LCBpbmRleCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHtcbiAgICAgIGtleTogaW5kZXggLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgICxcbiAgICAgIHZhcmlhbnQ6IFwiY2FwdGlvblwiLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmRheUxhYmVsXG4gICAgfSwgZGF5KTtcbiAgfSkpKTtcbn07XG5DYWxlbmRhckhlYWRlci5kaXNwbGF5TmFtZSA9ICdDYWxlbmRhckhlYWRlcic7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBDYWxlbmRhckhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGxlZnRBcnJvd0ljb246IG5vZGUsXG4gIHJpZ2h0QXJyb3dJY29uOiBub2RlLFxuICBkaXNhYmxlUHJldk1vbnRoOiBib29sLFxuICBkaXNhYmxlTmV4dE1vbnRoOiBib29sXG59IDogdm9pZCAwO1xuQ2FsZW5kYXJIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICBsZWZ0QXJyb3dJY29uOiBjcmVhdGVFbGVtZW50KEFycm93TGVmdEljb24sIG51bGwpLFxuICByaWdodEFycm93SWNvbjogY3JlYXRlRWxlbWVudChBcnJvd1JpZ2h0SWNvbiwgbnVsbCksXG4gIGRpc2FibGVQcmV2TW9udGg6IGZhbHNlLFxuICBkaXNhYmxlTmV4dE1vbnRoOiBmYWxzZVxufTtcblxudmFyIHdpdGhVdGlscyA9IGZ1bmN0aW9uIHdpdGhVdGlscygpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgICB2YXIgV2l0aFV0aWxzID0gZnVuY3Rpb24gV2l0aFV0aWxzKHByb3BzKSB7XG4gICAgICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgICAgIHV0aWxzOiB1dGlsc1xuICAgICAgfSwgcHJvcHMpKTtcbiAgICB9O1xuXG4gICAgV2l0aFV0aWxzLmRpc3BsYXlOYW1lID0gXCJXaXRoVXRpbHMoXCIuY29uY2F0KENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSwgXCIpXCIpO1xuICAgIHJldHVybiBXaXRoVXRpbHM7XG4gIH07XG59O1xuXG52YXIgS2V5RG93bkxpc3RlbmVyID0gZnVuY3Rpb24gS2V5RG93bkxpc3RlbmVyKF9yZWYpIHtcbiAgdmFyIG9uS2V5RG93biA9IF9yZWYub25LZXlEb3duO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pO1xuICAgIH07XG4gIH0sIFtvbktleURvd25dKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgQ2FsZW5kYXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENhbGVuZGFyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDYWxlbmRhcigpIHtcbiAgICB2YXIgX2dldFByb3RvdHlwZU9mMjtcblxuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYWxlbmRhcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX2dldFByb3RvdHlwZU9mMiA9IF9nZXRQcm90b3R5cGVPZihDYWxlbmRhcikpLmNhbGwuYXBwbHkoX2dldFByb3RvdHlwZU9mMiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc2xpZGVEaXJlY3Rpb246ICdsZWZ0JyxcbiAgICAgIGN1cnJlbnRNb250aDogX3RoaXMucHJvcHMudXRpbHMuc3RhcnRPZk1vbnRoKF90aGlzLnByb3BzLmRhdGUpLFxuICAgICAgbG9hZGluZ1F1ZXVlOiAwXG4gICAgfTtcblxuICAgIF90aGlzLnB1c2hUb0xvYWRpbmdRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBsb2FkaW5nUXVldWUgPSBfdGhpcy5zdGF0ZS5sb2FkaW5nUXVldWUgKyAxO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmdRdWV1ZTogbG9hZGluZ1F1ZXVlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucG9wRnJvbUxvYWRpbmdRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBsb2FkaW5nUXVldWUgPSBfdGhpcy5zdGF0ZS5sb2FkaW5nUXVldWU7XG4gICAgICBsb2FkaW5nUXVldWUgPSBsb2FkaW5nUXVldWUgPD0gMCA/IDAgOiBsb2FkaW5nUXVldWUgLSAxO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmdRdWV1ZTogbG9hZGluZ1F1ZXVlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlQ2hhbmdlTW9udGggPSBmdW5jdGlvbiAobmV3TW9udGgsIHNsaWRlRGlyZWN0aW9uKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRNb250aDogbmV3TW9udGgsXG4gICAgICAgIHNsaWRlRGlyZWN0aW9uOiBzbGlkZURpcmVjdGlvblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vbnRoQ2hhbmdlKSB7XG4gICAgICAgIHZhciByZXR1cm5WYWwgPSBfdGhpcy5wcm9wcy5vbk1vbnRoQ2hhbmdlKG5ld01vbnRoKTtcblxuICAgICAgICBpZiAocmV0dXJuVmFsKSB7XG4gICAgICAgICAgX3RoaXMucHVzaFRvTG9hZGluZ1F1ZXVlKCk7XG5cbiAgICAgICAgICByZXR1cm5WYWwudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5wb3BGcm9tTG9hZGluZ1F1ZXVlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMudmFsaWRhdGVNaW5NYXhEYXRlID0gZnVuY3Rpb24gKGRheSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgbWluRGF0ZSA9IF90aGlzJHByb3BzLm1pbkRhdGUsXG4gICAgICAgICAgbWF4RGF0ZSA9IF90aGlzJHByb3BzLm1heERhdGUsXG4gICAgICAgICAgdXRpbHMgPSBfdGhpcyRwcm9wcy51dGlscyxcbiAgICAgICAgICBkaXNhYmxlRnV0dXJlID0gX3RoaXMkcHJvcHMuZGlzYWJsZUZ1dHVyZSxcbiAgICAgICAgICBkaXNhYmxlUGFzdCA9IF90aGlzJHByb3BzLmRpc2FibGVQYXN0O1xuICAgICAgdmFyIG5vdyA9IHV0aWxzLmRhdGUoKTtcbiAgICAgIHJldHVybiBCb29sZWFuKGRpc2FibGVGdXR1cmUgJiYgdXRpbHMuaXNBZnRlckRheShkYXksIG5vdykgfHwgZGlzYWJsZVBhc3QgJiYgdXRpbHMuaXNCZWZvcmVEYXkoZGF5LCBub3cpIHx8IG1pbkRhdGUgJiYgdXRpbHMuaXNCZWZvcmVEYXkoZGF5LCB1dGlscy5kYXRlKG1pbkRhdGUpKSB8fCBtYXhEYXRlICYmIHV0aWxzLmlzQWZ0ZXJEYXkoZGF5LCB1dGlscy5kYXRlKG1heERhdGUpKSk7XG4gICAgfTtcblxuICAgIF90aGlzLnNob3VsZERpc2FibGVQcmV2TW9udGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdXRpbHMgPSBfdGhpcyRwcm9wczIudXRpbHMsXG4gICAgICAgICAgZGlzYWJsZVBhc3QgPSBfdGhpcyRwcm9wczIuZGlzYWJsZVBhc3QsXG4gICAgICAgICAgbWluRGF0ZSA9IF90aGlzJHByb3BzMi5taW5EYXRlO1xuICAgICAgdmFyIG5vdyA9IHV0aWxzLmRhdGUoKTtcbiAgICAgIHZhciBmaXJzdEVuYWJsZWRNb250aCA9IHV0aWxzLnN0YXJ0T2ZNb250aChkaXNhYmxlUGFzdCAmJiB1dGlscy5pc0FmdGVyKG5vdywgdXRpbHMuZGF0ZShtaW5EYXRlKSkgPyBub3cgOiB1dGlscy5kYXRlKG1pbkRhdGUpKTtcbiAgICAgIHJldHVybiAhdXRpbHMuaXNCZWZvcmUoZmlyc3RFbmFibGVkTW9udGgsIF90aGlzLnN0YXRlLmN1cnJlbnRNb250aCk7XG4gICAgfTtcblxuICAgIF90aGlzLnNob3VsZERpc2FibGVOZXh0TW9udGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdXRpbHMgPSBfdGhpcyRwcm9wczMudXRpbHMsXG4gICAgICAgICAgZGlzYWJsZUZ1dHVyZSA9IF90aGlzJHByb3BzMy5kaXNhYmxlRnV0dXJlLFxuICAgICAgICAgIG1heERhdGUgPSBfdGhpcyRwcm9wczMubWF4RGF0ZTtcbiAgICAgIHZhciBub3cgPSB1dGlscy5kYXRlKCk7XG4gICAgICB2YXIgbGFzdEVuYWJsZWRNb250aCA9IHV0aWxzLnN0YXJ0T2ZNb250aChkaXNhYmxlRnV0dXJlICYmIHV0aWxzLmlzQmVmb3JlKG5vdywgdXRpbHMuZGF0ZShtYXhEYXRlKSkgPyBub3cgOiB1dGlscy5kYXRlKG1heERhdGUpKTtcbiAgICAgIHJldHVybiAhdXRpbHMuaXNBZnRlcihsYXN0RW5hYmxlZE1vbnRoLCBfdGhpcy5zdGF0ZS5jdXJyZW50TW9udGgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zaG91bGREaXNhYmxlRGF0ZSA9IGZ1bmN0aW9uIChkYXkpIHtcbiAgICAgIHZhciBzaG91bGREaXNhYmxlRGF0ZSA9IF90aGlzLnByb3BzLnNob3VsZERpc2FibGVEYXRlO1xuICAgICAgcmV0dXJuIF90aGlzLnZhbGlkYXRlTWluTWF4RGF0ZShkYXkpIHx8IEJvb2xlYW4oc2hvdWxkRGlzYWJsZURhdGUgJiYgc2hvdWxkRGlzYWJsZURhdGUoZGF5KSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZURheVNlbGVjdCA9IGZ1bmN0aW9uIChkYXkpIHtcbiAgICAgIHZhciBpc0ZpbmlzaCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBkYXRlID0gX3RoaXMkcHJvcHM0LmRhdGUsXG4gICAgICAgICAgdXRpbHMgPSBfdGhpcyRwcm9wczQudXRpbHM7XG5cbiAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKHV0aWxzLm1lcmdlRGF0ZUFuZFRpbWUoZGF5LCBkYXRlKSwgaXNGaW5pc2gpO1xuICAgIH07XG5cbiAgICBfdGhpcy5tb3ZlVG9EYXkgPSBmdW5jdGlvbiAoZGF5KSB7XG4gICAgICB2YXIgdXRpbHMgPSBfdGhpcy5wcm9wcy51dGlscztcblxuICAgICAgaWYgKGRheSAmJiAhX3RoaXMuc2hvdWxkRGlzYWJsZURhdGUoZGF5KSkge1xuICAgICAgICBpZiAodXRpbHMuZ2V0TW9udGgoZGF5KSAhPT0gdXRpbHMuZ2V0TW9udGgoX3RoaXMuc3RhdGUuY3VycmVudE1vbnRoKSkge1xuICAgICAgICAgIF90aGlzLmhhbmRsZUNoYW5nZU1vbnRoKHV0aWxzLnN0YXJ0T2ZNb250aChkYXkpLCAnbGVmdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuaGFuZGxlRGF5U2VsZWN0KGRheSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdGhlbWUgPSBfdGhpcyRwcm9wczUudGhlbWUsXG4gICAgICAgICAgZGF0ZSA9IF90aGlzJHByb3BzNS5kYXRlLFxuICAgICAgICAgIHV0aWxzID0gX3RoaXMkcHJvcHM1LnV0aWxzO1xuICAgICAgcnVuS2V5SGFuZGxlcihldmVudCwge1xuICAgICAgICBBcnJvd1VwOiBmdW5jdGlvbiBBcnJvd1VwKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5tb3ZlVG9EYXkodXRpbHMuYWRkRGF5cyhkYXRlLCAtNykpO1xuICAgICAgICB9LFxuICAgICAgICBBcnJvd0Rvd246IGZ1bmN0aW9uIEFycm93RG93bigpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMubW92ZVRvRGF5KHV0aWxzLmFkZERheXMoZGF0ZSwgNykpO1xuICAgICAgICB9LFxuICAgICAgICBBcnJvd0xlZnQ6IGZ1bmN0aW9uIEFycm93TGVmdCgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMubW92ZVRvRGF5KHV0aWxzLmFkZERheXMoZGF0ZSwgdGhlbWUuZGlyZWN0aW9uID09PSAnbHRyJyA/IC0xIDogMSkpO1xuICAgICAgICB9LFxuICAgICAgICBBcnJvd1JpZ2h0OiBmdW5jdGlvbiBBcnJvd1JpZ2h0KCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5tb3ZlVG9EYXkodXRpbHMuYWRkRGF5cyhkYXRlLCB0aGVtZS5kaXJlY3Rpb24gPT09ICdsdHInID8gMSA6IC0xKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJXZWVrcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczYgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB1dGlscyA9IF90aGlzJHByb3BzNi51dGlscyxcbiAgICAgICAgICBjbGFzc2VzID0gX3RoaXMkcHJvcHM2LmNsYXNzZXM7XG4gICAgICB2YXIgd2Vla3MgPSB1dGlscy5nZXRXZWVrQXJyYXkoX3RoaXMuc3RhdGUuY3VycmVudE1vbnRoKTtcbiAgICAgIHJldHVybiB3ZWVrcy5tYXAoZnVuY3Rpb24gKHdlZWspIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGtleTogXCJ3ZWVrLVwiLmNvbmNhdCh3ZWVrWzBdLnRvU3RyaW5nKCkpLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy53ZWVrXG4gICAgICAgIH0sIF90aGlzLnJlbmRlckRheXMod2VlaykpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlckRheXMgPSBmdW5jdGlvbiAod2Vlaykge1xuICAgICAgdmFyIF90aGlzJHByb3BzNyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGRhdGUgPSBfdGhpcyRwcm9wczcuZGF0ZSxcbiAgICAgICAgICByZW5kZXJEYXkgPSBfdGhpcyRwcm9wczcucmVuZGVyRGF5LFxuICAgICAgICAgIHV0aWxzID0gX3RoaXMkcHJvcHM3LnV0aWxzO1xuICAgICAgdmFyIG5vdyA9IHV0aWxzLmRhdGUoKTtcbiAgICAgIHZhciBzZWxlY3RlZERhdGUgPSB1dGlscy5zdGFydE9mRGF5KGRhdGUpO1xuICAgICAgdmFyIGN1cnJlbnRNb250aE51bWJlciA9IHV0aWxzLmdldE1vbnRoKF90aGlzLnN0YXRlLmN1cnJlbnRNb250aCk7XG4gICAgICByZXR1cm4gd2Vlay5tYXAoZnVuY3Rpb24gKGRheSkge1xuICAgICAgICB2YXIgZGlzYWJsZWQgPSBfdGhpcy5zaG91bGREaXNhYmxlRGF0ZShkYXkpO1xuXG4gICAgICAgIHZhciBpc0RheUluQ3VycmVudE1vbnRoID0gdXRpbHMuZ2V0TW9udGgoZGF5KSA9PT0gY3VycmVudE1vbnRoTnVtYmVyO1xuICAgICAgICB2YXIgZGF5Q29tcG9uZW50ID0gY3JlYXRlRWxlbWVudChEYXksIHtcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgY3VycmVudDogdXRpbHMuaXNTYW1lRGF5KGRheSwgbm93KSxcbiAgICAgICAgICBoaWRkZW46ICFpc0RheUluQ3VycmVudE1vbnRoLFxuICAgICAgICAgIHNlbGVjdGVkOiB1dGlscy5pc1NhbWVEYXkoc2VsZWN0ZWREYXRlLCBkYXkpXG4gICAgICAgIH0sIHV0aWxzLmdldERheVRleHQoZGF5KSk7XG5cbiAgICAgICAgaWYgKHJlbmRlckRheSkge1xuICAgICAgICAgIGRheUNvbXBvbmVudCA9IHJlbmRlckRheShkYXksIHNlbGVjdGVkRGF0ZSwgaXNEYXlJbkN1cnJlbnRNb250aCwgZGF5Q29tcG9uZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KERheVdyYXBwZXIsIHtcbiAgICAgICAgICB2YWx1ZTogZGF5LFxuICAgICAgICAgIGtleTogZGF5LnRvU3RyaW5nKCksXG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgIGRheUluQ3VycmVudE1vbnRoOiBpc0RheUluQ3VycmVudE1vbnRoLFxuICAgICAgICAgIG9uU2VsZWN0OiBfdGhpcy5oYW5kbGVEYXlTZWxlY3RcbiAgICAgICAgfSwgZGF5Q29tcG9uZW50KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2FsZW5kYXIsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzOCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZGF0ZSA9IF90aGlzJHByb3BzOC5kYXRlLFxuICAgICAgICAgIG1pbkRhdGUgPSBfdGhpcyRwcm9wczgubWluRGF0ZSxcbiAgICAgICAgICBtYXhEYXRlID0gX3RoaXMkcHJvcHM4Lm1heERhdGUsXG4gICAgICAgICAgdXRpbHMgPSBfdGhpcyRwcm9wczgudXRpbHMsXG4gICAgICAgICAgZGlzYWJsZVBhc3QgPSBfdGhpcyRwcm9wczguZGlzYWJsZVBhc3QsXG4gICAgICAgICAgZGlzYWJsZUZ1dHVyZSA9IF90aGlzJHByb3BzOC5kaXNhYmxlRnV0dXJlO1xuXG4gICAgICBpZiAodGhpcy5zaG91bGREaXNhYmxlRGF0ZShkYXRlKSkge1xuICAgICAgICB2YXIgY2xvc2VzdEVuYWJsZWREYXRlID0gZmluZENsb3Nlc3RFbmFibGVkRGF0ZSh7XG4gICAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgICAgICB1dGlsczogdXRpbHMsXG4gICAgICAgICAgbWluRGF0ZTogdXRpbHMuZGF0ZShtaW5EYXRlKSxcbiAgICAgICAgICBtYXhEYXRlOiB1dGlscy5kYXRlKG1heERhdGUpLFxuICAgICAgICAgIGRpc2FibGVQYXN0OiBCb29sZWFuKGRpc2FibGVQYXN0KSxcbiAgICAgICAgICBkaXNhYmxlRnV0dXJlOiBCb29sZWFuKGRpc2FibGVGdXR1cmUpLFxuICAgICAgICAgIHNob3VsZERpc2FibGVEYXRlOiB0aGlzLnNob3VsZERpc2FibGVEYXRlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbmRsZURheVNlbGVjdChjbG9zZXN0RW5hYmxlZERhdGUsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgY3VycmVudE1vbnRoID0gX3RoaXMkc3RhdGUuY3VycmVudE1vbnRoLFxuICAgICAgICAgIHNsaWRlRGlyZWN0aW9uID0gX3RoaXMkc3RhdGUuc2xpZGVEaXJlY3Rpb247XG4gICAgICB2YXIgX3RoaXMkcHJvcHM5ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc2VzID0gX3RoaXMkcHJvcHM5LmNsYXNzZXMsXG4gICAgICAgICAgYWxsb3dLZXlib2FyZENvbnRyb2wgPSBfdGhpcyRwcm9wczkuYWxsb3dLZXlib2FyZENvbnRyb2wsXG4gICAgICAgICAgbGVmdEFycm93QnV0dG9uUHJvcHMgPSBfdGhpcyRwcm9wczkubGVmdEFycm93QnV0dG9uUHJvcHMsXG4gICAgICAgICAgbGVmdEFycm93SWNvbiA9IF90aGlzJHByb3BzOS5sZWZ0QXJyb3dJY29uLFxuICAgICAgICAgIHJpZ2h0QXJyb3dCdXR0b25Qcm9wcyA9IF90aGlzJHByb3BzOS5yaWdodEFycm93QnV0dG9uUHJvcHMsXG4gICAgICAgICAgcmlnaHRBcnJvd0ljb24gPSBfdGhpcyRwcm9wczkucmlnaHRBcnJvd0ljb24sXG4gICAgICAgICAgbG9hZGluZ0luZGljYXRvciA9IF90aGlzJHByb3BzOS5sb2FkaW5nSW5kaWNhdG9yO1xuICAgICAgdmFyIGxvYWRpbmdFbGVtZW50ID0gbG9hZGluZ0luZGljYXRvciA/IGxvYWRpbmdJbmRpY2F0b3IgOiBjcmVhdGVFbGVtZW50KENpcmN1bGFyUHJvZ3Jlc3MsIG51bGwpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIGFsbG93S2V5Ym9hcmRDb250cm9sICYmIHRoaXMuY29udGV4dCAhPT0gJ3N0YXRpYycgJiYgY3JlYXRlRWxlbWVudChLZXlEb3duTGlzdGVuZXIsIHtcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd25cbiAgICAgIH0pLCBjcmVhdGVFbGVtZW50KENhbGVuZGFySGVhZGVyLCB7XG4gICAgICAgIGN1cnJlbnRNb250aDogY3VycmVudE1vbnRoLFxuICAgICAgICBzbGlkZURpcmVjdGlvbjogc2xpZGVEaXJlY3Rpb24sXG4gICAgICAgIG9uTW9udGhDaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlTW9udGgsXG4gICAgICAgIGxlZnRBcnJvd0ljb246IGxlZnRBcnJvd0ljb24sXG4gICAgICAgIGxlZnRBcnJvd0J1dHRvblByb3BzOiBsZWZ0QXJyb3dCdXR0b25Qcm9wcyxcbiAgICAgICAgcmlnaHRBcnJvd0ljb246IHJpZ2h0QXJyb3dJY29uLFxuICAgICAgICByaWdodEFycm93QnV0dG9uUHJvcHM6IHJpZ2h0QXJyb3dCdXR0b25Qcm9wcyxcbiAgICAgICAgZGlzYWJsZVByZXZNb250aDogdGhpcy5zaG91bGREaXNhYmxlUHJldk1vbnRoKCksXG4gICAgICAgIGRpc2FibGVOZXh0TW9udGg6IHRoaXMuc2hvdWxkRGlzYWJsZU5leHRNb250aCgpXG4gICAgICB9KSwgY3JlYXRlRWxlbWVudChTbGlkZVRyYW5zaXRpb24sIHtcbiAgICAgICAgc2xpZGVEaXJlY3Rpb246IHNsaWRlRGlyZWN0aW9uLFxuICAgICAgICB0cmFuc0tleTogY3VycmVudE1vbnRoLnRvU3RyaW5nKCksXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50cmFuc2l0aW9uQ29udGFpbmVyXG4gICAgICB9LCBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCB0aGlzLnN0YXRlLmxvYWRpbmdRdWV1ZSA+IDAgJiYgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5wcm9ncmVzc0NvbnRhaW5lclxuICAgICAgfSwgbG9hZGluZ0VsZW1lbnQpIHx8IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgdGhpcy5yZW5kZXJXZWVrcygpKSkpKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgc3RhdGUpIHtcbiAgICAgIHZhciB1dGlscyA9IG5leHRQcm9wcy51dGlscyxcbiAgICAgICAgICBuZXh0RGF0ZSA9IG5leHRQcm9wcy5kYXRlO1xuXG4gICAgICBpZiAoIXV0aWxzLmlzRXF1YWwobmV4dERhdGUsIHN0YXRlLmxhc3REYXRlKSkge1xuICAgICAgICB2YXIgbmV4dE1vbnRoID0gdXRpbHMuZ2V0TW9udGgobmV4dERhdGUpO1xuICAgICAgICB2YXIgbGFzdERhdGUgPSBzdGF0ZS5sYXN0RGF0ZSB8fCBuZXh0RGF0ZTtcbiAgICAgICAgdmFyIGxhc3RNb250aCA9IHV0aWxzLmdldE1vbnRoKGxhc3REYXRlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsYXN0RGF0ZTogbmV4dERhdGUsXG4gICAgICAgICAgY3VycmVudE1vbnRoOiBuZXh0UHJvcHMudXRpbHMuc3RhcnRPZk1vbnRoKG5leHREYXRlKSxcbiAgICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICBzbGlkZURpcmVjdGlvbjogbmV4dE1vbnRoID09PSBsYXN0TW9udGggPyBzdGF0ZS5zbGlkZURpcmVjdGlvbiA6IHV0aWxzLmlzQWZ0ZXJEYXkobmV4dERhdGUsIGxhc3REYXRlKSA/ICdsZWZ0JyA6ICdyaWdodCdcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENhbGVuZGFyO1xufShDb21wb25lbnQpO1xuQ2FsZW5kYXIuY29udGV4dFR5cGUgPSBWYXJpYW50Q29udGV4dDtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IENhbGVuZGFyLnByb3BUeXBlcyA9IHtcbiAgcmVuZGVyRGF5OiBmdW5jLFxuICBzaG91bGREaXNhYmxlRGF0ZTogZnVuYyxcbiAgYWxsb3dLZXlib2FyZENvbnRyb2w6IGJvb2xcbn0gOiB2b2lkIDA7XG5DYWxlbmRhci5kZWZhdWx0UHJvcHMgPSB7XG4gIG1pbkRhdGU6IG5ldyBEYXRlKCcxOTAwLTAxLTAxJyksXG4gIG1heERhdGU6IG5ldyBEYXRlKCcyMTAwLTAxLTAxJyksXG4gIGRpc2FibGVQYXN0OiBmYWxzZSxcbiAgZGlzYWJsZUZ1dHVyZTogZmFsc2UsXG4gIGFsbG93S2V5Ym9hcmRDb250cm9sOiB0cnVlXG59O1xudmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIHRyYW5zaXRpb25Db250YWluZXI6IHtcbiAgICAgIG1pbkhlaWdodDogMzYgKiA2LFxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuNSlcbiAgICB9LFxuICAgIHByb2dyZXNzQ29udGFpbmVyOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgd2Vlazoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfVxuICB9O1xufTtcbnZhciBDYWxlbmRhciQxID0gd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVBpY2tlcnNDYWxlbmRhcicsXG4gIHdpdGhUaGVtZTogdHJ1ZVxufSkod2l0aFV0aWxzKCkoQ2FsZW5kYXIpKTtcblxuZXhwb3J0IHsgQ2FsZW5kYXIgYXMgQywgQ2FsZW5kYXIkMSBhcyBhLCBpc1llYXJBbmRNb250aFZpZXdzIGFzIGIsIGdldEZvcm1hdEJ5Vmlld3MgYXMgZywgaXNZZWFyT25seVZpZXcgYXMgaSwgc3R5bGVzIGFzIHMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNhbGVuZGFyLTExYWU2MWY2LmpzLm1hcFxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb25lT2YsIG51bWJlciwgZnVuYywgYXJyYXlPZiwgbm9kZSwgYm9vbCwgYW55IH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcblxudmFyIENsb2NrVHlwZTtcblxuKGZ1bmN0aW9uIChDbG9ja1R5cGUpIHtcbiAgQ2xvY2tUeXBlW1wiSE9VUlNcIl0gPSBcImhvdXJzXCI7XG4gIENsb2NrVHlwZVtcIk1JTlVURVNcIl0gPSBcIm1pbnV0ZXNcIjtcbiAgQ2xvY2tUeXBlW1wiU0VDT05EU1wiXSA9IFwic2Vjb25kc1wiO1xufSkoQ2xvY2tUeXBlIHx8IChDbG9ja1R5cGUgPSB7fSkpO1xuXG52YXIgQ2xvY2tUeXBlJDEgPSBDbG9ja1R5cGU7XG5cbnZhciBDbG9ja1BvaW50ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENsb2NrUG9pbnRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2xvY2tQb2ludGVyKCkge1xuICAgIHZhciBfZ2V0UHJvdG90eXBlT2YyO1xuXG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENsb2NrUG9pbnRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX2dldFByb3RvdHlwZU9mMiA9IF9nZXRQcm90b3R5cGVPZihDbG9ja1BvaW50ZXIpKS5jYWxsLmFwcGx5KF9nZXRQcm90b3R5cGVPZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvQW5pbWF0ZVRyYW5zZm9ybTogZmFsc2UsXG4gICAgICBwcmV2aW91c1R5cGU6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICBfdGhpcy5nZXRBbmdsZVN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wcy52YWx1ZSxcbiAgICAgICAgICBpc0lubmVyID0gX3RoaXMkcHJvcHMuaXNJbm5lcixcbiAgICAgICAgICB0eXBlID0gX3RoaXMkcHJvcHMudHlwZTtcbiAgICAgIHZhciBtYXggPSB0eXBlID09PSBDbG9ja1R5cGUkMS5IT1VSUyA/IDEyIDogNjA7XG4gICAgICB2YXIgYW5nbGUgPSAzNjAgLyBtYXggKiB2YWx1ZTtcblxuICAgICAgaWYgKHR5cGUgPT09IENsb2NrVHlwZSQxLkhPVVJTICYmIHZhbHVlID4gMTIpIHtcbiAgICAgICAgYW5nbGUgLT0gMzYwOyAvLyByb3VuZCB1cCBhbmdsZSB0byBtYXggMzYwIGRlZ3JlZXNcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiBpc0lubmVyID8gJzI2JScgOiAnNDAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZVooXCIuY29uY2F0KGFuZ2xlLCBcImRlZylcIilcbiAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDbG9ja1BvaW50ZXIsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc2VzID0gX3RoaXMkcHJvcHMyLmNsYXNzZXMsXG4gICAgICAgICAgaGFzU2VsZWN0ZWQgPSBfdGhpcyRwcm9wczIuaGFzU2VsZWN0ZWQ7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB0aGlzLmdldEFuZ2xlU3R5bGUoKSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucG9pbnRlciwgdGhpcy5zdGF0ZS50b0FuaW1hdGVUcmFuc2Zvcm0gJiYgY2xhc3Nlcy5hbmltYXRlVHJhbnNmb3JtKVxuICAgICAgfSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnRodW1iLCBoYXNTZWxlY3RlZCAmJiBjbGFzc2VzLm5vUG9pbnQpXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENsb2NrUG9pbnRlcjtcbn0oQ29tcG9uZW50KTtcblxuQ2xvY2tQb2ludGVyLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIChuZXh0UHJvcHMsIHN0YXRlKSB7XG4gIGlmIChuZXh0UHJvcHMudHlwZSAhPT0gc3RhdGUucHJldmlvdXNUeXBlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvQW5pbWF0ZVRyYW5zZm9ybTogdHJ1ZSxcbiAgICAgIHByZXZpb3VzVHlwZTogbmV4dFByb3BzLnR5cGVcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b0FuaW1hdGVUcmFuc2Zvcm06IGZhbHNlLFxuICAgIHByZXZpb3VzVHlwZTogbmV4dFByb3BzLnR5cGVcbiAgfTtcbn07XG5cbnZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIGNyZWF0ZVN0eWxlcyh7XG4gICAgcG9pbnRlcjoge1xuICAgICAgd2lkdGg6IDIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAnY2FsYyg1MCUgLSAxcHgpJyxcbiAgICAgIGJvdHRvbTogJzUwJScsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXIgYm90dG9tIDBweCdcbiAgICB9LFxuICAgIGFuaW1hdGVUcmFuc2Zvcm06IHtcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3RyYW5zZm9ybScsICdoZWlnaHQnXSlcbiAgICB9LFxuICAgIHRodW1iOiB7XG4gICAgICB3aWR0aDogNCxcbiAgICAgIGhlaWdodDogNCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dCxcbiAgICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IC0yMSxcbiAgICAgIGxlZnQ6IC0xNSxcbiAgICAgIGJvcmRlcjogXCIxNHB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiksXG4gICAgICBib3hTaXppbmc6ICdjb250ZW50LWJveCdcbiAgICB9LFxuICAgIG5vUG9pbnQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICB9XG4gIH0pO1xufTtcbnZhciBDbG9ja1BvaW50ZXIkMSA9IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzQ2xvY2tQb2ludGVyJ1xufSkoQ2xvY2tQb2ludGVyKTtcblxudmFyIGNlbnRlciA9IHtcbiAgeDogMjYwIC8gMixcbiAgeTogMjYwIC8gMlxufTtcbnZhciBiYXNlUG9pbnQgPSB7XG4gIHg6IGNlbnRlci54LFxuICB5OiAwXG59O1xudmFyIGN4ID0gYmFzZVBvaW50LnggLSBjZW50ZXIueDtcbnZhciBjeSA9IGJhc2VQb2ludC55IC0gY2VudGVyLnk7XG5cbnZhciByYWQyZGVnID0gZnVuY3Rpb24gcmFkMmRlZyhyYWQpIHtcbiAgcmV0dXJuIHJhZCAqIDU3LjI5NTc3OTUxMzA4MjMyO1xufTtcblxudmFyIGdldEFuZ2xlVmFsdWUgPSBmdW5jdGlvbiBnZXRBbmdsZVZhbHVlKHN0ZXAsIG9mZnNldFgsIG9mZnNldFkpIHtcbiAgdmFyIHggPSBvZmZzZXRYIC0gY2VudGVyLng7XG4gIHZhciB5ID0gb2Zmc2V0WSAtIGNlbnRlci55O1xuICB2YXIgYXRhbiA9IE1hdGguYXRhbjIoY3gsIGN5KSAtIE1hdGguYXRhbjIoeCwgeSk7XG4gIHZhciBkZWcgPSByYWQyZGVnKGF0YW4pO1xuICBkZWcgPSBNYXRoLnJvdW5kKGRlZyAvIHN0ZXApICogc3RlcDtcbiAgZGVnICU9IDM2MDtcbiAgdmFyIHZhbHVlID0gTWF0aC5mbG9vcihkZWcgLyBzdGVwKSB8fCAwO1xuICB2YXIgZGVsdGEgPSBNYXRoLnBvdyh4LCAyKSArIE1hdGgucG93KHksIDIpO1xuICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZGVsdGEpO1xuICByZXR1cm4ge1xuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBkaXN0YW5jZTogZGlzdGFuY2VcbiAgfTtcbn07XG5cbnZhciBnZXRIb3VycyA9IGZ1bmN0aW9uIGdldEhvdXJzKG9mZnNldFgsIG9mZnNldFksIGFtcG0pIHtcbiAgdmFyIF9nZXRBbmdsZVZhbHVlID0gZ2V0QW5nbGVWYWx1ZSgzMCwgb2Zmc2V0WCwgb2Zmc2V0WSksXG4gICAgICB2YWx1ZSA9IF9nZXRBbmdsZVZhbHVlLnZhbHVlLFxuICAgICAgZGlzdGFuY2UgPSBfZ2V0QW5nbGVWYWx1ZS5kaXN0YW5jZTtcblxuICB2YWx1ZSA9IHZhbHVlIHx8IDEyO1xuXG4gIGlmICghYW1wbSkge1xuICAgIGlmIChkaXN0YW5jZSA8IDkwKSB7XG4gICAgICB2YWx1ZSArPSAxMjtcbiAgICAgIHZhbHVlICU9IDI0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSAlPSAxMjtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn07XG52YXIgZ2V0TWludXRlcyA9IGZ1bmN0aW9uIGdldE1pbnV0ZXMob2Zmc2V0WCwgb2Zmc2V0WSkge1xuICB2YXIgc3RlcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMTtcbiAgdmFyIGFuZ2xlU3RlcCA9IHN0ZXAgKiA2O1xuXG4gIHZhciBfZ2V0QW5nbGVWYWx1ZTIgPSBnZXRBbmdsZVZhbHVlKGFuZ2xlU3RlcCwgb2Zmc2V0WCwgb2Zmc2V0WSksXG4gICAgICB2YWx1ZSA9IF9nZXRBbmdsZVZhbHVlMi52YWx1ZTtcblxuICB2YWx1ZSA9IHZhbHVlICogc3RlcCAlIDYwO1xuICByZXR1cm4gdmFsdWU7XG59O1xudmFyIGdldE1lcmlkaWVtID0gZnVuY3Rpb24gZ2V0TWVyaWRpZW0oZGF0ZSwgdXRpbHMpIHtcbiAgcmV0dXJuIHV0aWxzLmdldEhvdXJzKGRhdGUpID49IDEyID8gJ3BtJyA6ICdhbSc7XG59O1xudmFyIGNvbnZlcnRUb01lcmlkaWVtID0gZnVuY3Rpb24gY29udmVydFRvTWVyaWRpZW0odGltZSwgbWVyaWRpZW0sIGFtcG0sIHV0aWxzKSB7XG4gIGlmIChhbXBtKSB7XG4gICAgdmFyIGN1cnJlbnRNZXJpZGllbSA9IHV0aWxzLmdldEhvdXJzKHRpbWUpID49IDEyID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBpZiAoY3VycmVudE1lcmlkaWVtICE9PSBtZXJpZGllbSkge1xuICAgICAgdmFyIGhvdXJzID0gbWVyaWRpZW0gPT09ICdhbScgPyB1dGlscy5nZXRIb3Vycyh0aW1lKSAtIDEyIDogdXRpbHMuZ2V0SG91cnModGltZSkgKyAxMjtcbiAgICAgIHJldHVybiB1dGlscy5zZXRIb3Vycyh0aW1lLCBob3Vycyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRpbWU7XG59O1xuXG52YXIgQ2xvY2sgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENsb2NrLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDbG9jaygpIHtcbiAgICB2YXIgX2dldFByb3RvdHlwZU9mMjtcblxuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDbG9jayk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX2dldFByb3RvdHlwZU9mMiA9IF9nZXRQcm90b3R5cGVPZihDbG9jaykpLmNhbGwuYXBwbHkoX2dldFByb3RvdHlwZU9mMiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuICAgIF90aGlzLmlzTW92aW5nID0gZmFsc2U7XG5cbiAgICBfdGhpcy5oYW5kbGVUb3VjaE1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgX3RoaXMuaXNNb3ZpbmcgPSB0cnVlO1xuXG4gICAgICBfdGhpcy5zZXRUaW1lKGUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVUb3VjaEVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoX3RoaXMuaXNNb3ZpbmcpIHtcbiAgICAgICAgX3RoaXMuc2V0VGltZShlLCB0cnVlKTtcblxuICAgICAgICBfdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVNb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIE1vdXNlRXZlbnQud2hpY2ggaXMgZGVwcmVjYXRlZCwgYnV0IE1vdXNlRXZlbnQuYnV0dG9ucyBpcyBub3Qgc3VwcG9ydGVkIGluIFNhZmFyaVxuXG4gICAgICB2YXIgaXNCdXR0b25QcmVzc2VkID0gdHlwZW9mIGUuYnV0dG9ucyA9PT0gJ3VuZGVmaW5lZCcgPyBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAxIDogZS5idXR0b25zID09PSAxO1xuXG4gICAgICBpZiAoaXNCdXR0b25QcmVzc2VkKSB7XG4gICAgICAgIF90aGlzLnNldFRpbWUoZS5uYXRpdmVFdmVudCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVNb3VzZVVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChfdGhpcy5pc01vdmluZykge1xuICAgICAgICBfdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRUaW1lKGUubmF0aXZlRXZlbnQsIHRydWUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYXNTZWxlY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHR5cGUgPSBfdGhpcyRwcm9wcy50eXBlLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcHJvcHMudmFsdWU7XG5cbiAgICAgIGlmICh0eXBlID09PSBDbG9ja1R5cGUkMS5IT1VSUykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlICUgNSA9PT0gMDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENsb2NrLCBbe1xuICAgIGtleTogXCJzZXRUaW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRpbWUoZSkge1xuICAgICAgdmFyIGlzRmluaXNoID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICAgIHZhciBvZmZzZXRYID0gZS5vZmZzZXRYLFxuICAgICAgICAgIG9mZnNldFkgPSBlLm9mZnNldFk7XG5cbiAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0WCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgb2Zmc2V0WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgb2Zmc2V0WSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb3BzLnR5cGUgPT09IENsb2NrVHlwZSQxLlNFQ09ORFMgfHwgdGhpcy5wcm9wcy50eXBlID09PSBDbG9ja1R5cGUkMS5NSU5VVEVTID8gZ2V0TWludXRlcyhvZmZzZXRYLCBvZmZzZXRZLCB0aGlzLnByb3BzLm1pbnV0ZXNTdGVwKSA6IGdldEhvdXJzKG9mZnNldFgsIG9mZnNldFksIEJvb2xlYW4odGhpcy5wcm9wcy5hbXBtKSk7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlLCBpc0ZpbmlzaCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc2VzID0gX3RoaXMkcHJvcHMyLmNsYXNzZXMsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wczIudmFsdWUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgdHlwZSA9IF90aGlzJHByb3BzMi50eXBlLFxuICAgICAgICAgIGFtcG0gPSBfdGhpcyRwcm9wczIuYW1wbTtcbiAgICAgIHZhciBpc1BvaW50ZXJJbm5lciA9ICFhbXBtICYmIHR5cGUgPT09IENsb2NrVHlwZSQxLkhPVVJTICYmICh2YWx1ZSA8IDEgfHwgdmFsdWUgPiAxMik7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5jb250YWluZXJcbiAgICAgIH0sIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMuY2xvY2tcbiAgICAgIH0sIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICByb2xlOiBcIm1lbnVcIixcbiAgICAgICAgdGFiSW5kZXg6IC0xLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMuc3F1YXJlTWFzayxcbiAgICAgICAgb25Ub3VjaE1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlLFxuICAgICAgICBvblRvdWNoRW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kLFxuICAgICAgICBvbk1vdXNlVXA6IHRoaXMuaGFuZGxlTW91c2VVcCxcbiAgICAgICAgb25Nb3VzZU1vdmU6IHRoaXMuaGFuZGxlTW92ZVxuICAgICAgfSksIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMucGluXG4gICAgICB9KSwgY3JlYXRlRWxlbWVudChDbG9ja1BvaW50ZXIkMSwge1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlzSW5uZXI6IGlzUG9pbnRlcklubmVyLFxuICAgICAgICBoYXNTZWxlY3RlZDogdGhpcy5oYXNTZWxlY3RlZCgpXG4gICAgICB9KSwgY2hpbGRyZW4pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2xvY2s7XG59KENvbXBvbmVudCk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBDbG9jay5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IG9uZU9mKE9iamVjdC5rZXlzKENsb2NrVHlwZSQxKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBDbG9ja1R5cGUkMVtrZXldO1xuICB9KSkuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IG51bWJlci5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogZnVuYy5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogYXJyYXlPZihub2RlKS5pc1JlcXVpcmVkLFxuICBhbXBtOiBib29sLFxuICBtaW51dGVzU3RlcDogbnVtYmVyLFxuICBpbm5lclJlZjogYW55XG59IDogdm9pZCAwO1xuQ2xvY2suZGVmYXVsdFByb3BzID0ge1xuICBhbXBtOiBmYWxzZSxcbiAgbWludXRlc1N0ZXA6IDFcbn07XG52YXIgc3R5bGVzJDEgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIGNyZWF0ZVN0eWxlcyh7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxuICAgICAgbWFyZ2luOiBcIlwiLmNvbmNhdCh0aGVtZS5zcGFjaW5nKDIpLCBcInB4IDAgXCIpLmNvbmNhdCh0aGVtZS5zcGFjaW5nKDEpLCBcInB4XCIpXG4gICAgfSxcbiAgICBjbG9jazoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwuMDcpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBoZWlnaHQ6IDI2MCxcbiAgICAgIHdpZHRoOiAyNjAsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgc3F1YXJlTWFzazoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnYXV0bycsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICB0b3VjaEFjdGlvbnM6ICdub25lJyxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgY3Vyc29yOiAnbW92ZSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHBpbjoge1xuICAgICAgd2lkdGg6IDYsXG4gICAgICBoZWlnaHQ6IDYsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAnNTAlJyxcbiAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJ1xuICAgIH1cbiAgfSk7XG59O1xudmFyIENsb2NrJDEgPSB3aXRoU3R5bGVzKHN0eWxlcyQxLCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzQ2xvY2snXG59KShDbG9jayk7XG5cbmV4cG9ydCB7IENsb2NrIGFzIEMsIENsb2NrJDEgYXMgYSwgQ2xvY2tUeXBlJDEgYXMgYiwgY29udmVydFRvTWVyaWRpZW0gYXMgYywgZ2V0TWVyaWRpZW0gYXMgZywgc3R5bGVzJDEgYXMgcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2xvY2stNDhmZGU5NzUuanMubWFwXG4iLCJpbXBvcnQgeyB1c2VNZW1vLCBjcmVhdGVFbGVtZW50LCBtZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb2JqZWN0LCBmdW5jLCBib29sLCBudW1iZXIsIG9uZU9mIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1IGFzIHVzZVV0aWxzIH0gZnJvbSAnLi91c2VVdGlscy1jZmI5NmFjOS5qcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cyc7XG5pbXBvcnQgeyBiIGFzIENsb2NrVHlwZSwgZyBhcyBnZXRNZXJpZGllbSwgYyBhcyBjb252ZXJ0VG9NZXJpZGllbSwgYSBhcyBDbG9jayB9IGZyb20gJy4vQ2xvY2stNDhmZGU5NzUuanMnO1xuXG52YXIgcG9zaXRpb25zID0ge1xuICAwOiBbMCwgNDBdLFxuICAxOiBbNTUsIDE5LjZdLFxuICAyOiBbOTQuNCwgNTkuNV0sXG4gIDM6IFsxMDksIDExNF0sXG4gIDQ6IFs5NC40LCAxNjguNV0sXG4gIDU6IFs1NC41LCAyMDguNF0sXG4gIDY6IFswLCAyMjNdLFxuICA3OiBbLTU0LjUsIDIwOC40XSxcbiAgODogWy05NC40LCAxNjguNV0sXG4gIDk6IFstMTA5LCAxMTRdLFxuICAxMDogWy05NC40LCA1OS41XSxcbiAgMTE6IFstNTQuNSwgMTkuNl0sXG4gIDEyOiBbMCwgNV0sXG4gIDEzOiBbMzYuOSwgNDkuOV0sXG4gIDE0OiBbNjQsIDc3XSxcbiAgMTU6IFs3NCwgMTE0XSxcbiAgMTY6IFs2NCwgMTUxXSxcbiAgMTc6IFszNywgMTc4XSxcbiAgMTg6IFswLCAxODhdLFxuICAxOTogWy0zNywgMTc4XSxcbiAgMjA6IFstNjQsIDE1MV0sXG4gIDIxOiBbLTc0LCAxMTRdLFxuICAyMjogWy02NCwgNzddLFxuICAyMzogWy0zNywgNTBdXG59O1xudmFyIHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoZnVuY3Rpb24gKHRoZW1lKSB7XG4gIHZhciBzaXplID0gdGhlbWUuc3BhY2luZyg0KTtcbiAgcmV0dXJuIHtcbiAgICBjbG9ja051bWJlcjoge1xuICAgICAgd2lkdGg6IHNpemUsXG4gICAgICBoZWlnaHQ6IDMyLFxuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiBcImNhbGMoKDEwMCUgLSBcIi5jb25jYXQodHlwZW9mIHNpemUgPT09ICdudW1iZXInID8gXCJcIi5jb25jYXQoc2l6ZSwgXCJweFwiKSA6IHNpemUsIFwiKSAvIDIpXCIpLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSA6IHRoZW1lLnBhbGV0dGUudGV4dC5oaW50XG4gICAgfSxcbiAgICBjbG9ja051bWJlclNlbGVjdGVkOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dFxuICAgIH1cbiAgfTtcbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlcnNDbG9ja051bWJlcidcbn0pO1xudmFyIENsb2NrTnVtYmVyID0gZnVuY3Rpb24gQ2xvY2tOdW1iZXIoX3JlZikge1xuICB2YXIgc2VsZWN0ZWQgPSBfcmVmLnNlbGVjdGVkLFxuICAgICAgbGFiZWwgPSBfcmVmLmxhYmVsLFxuICAgICAgaW5kZXggPSBfcmVmLmluZGV4LFxuICAgICAgaXNJbm5lciA9IF9yZWYuaXNJbm5lcjtcbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgdmFyIGNsYXNzTmFtZSA9IGNsc3goY2xhc3Nlcy5jbG9ja051bWJlciwgc2VsZWN0ZWQgJiYgY2xhc3Nlcy5jbG9ja051bWJlclNlbGVjdGVkKTtcbiAgdmFyIHRyYW5zZm9ybVN0eWxlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gcG9zaXRpb25zW2luZGV4XTtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIi5jb25jYXQocG9zaXRpb25bMF0sIFwicHgsIFwiKS5jb25jYXQocG9zaXRpb25bMV0sIFwicHhcIilcbiAgICB9O1xuICB9LCBbaW5kZXhdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwge1xuICAgIGNvbXBvbmVudDogXCJzcGFuXCIsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgdmFyaWFudDogaXNJbm5lciA/ICdib2R5MicgOiAnYm9keTEnLFxuICAgIHN0eWxlOiB0cmFuc2Zvcm1TdHlsZSxcbiAgICBjaGlsZHJlbjogbGFiZWxcbiAgfSk7XG59O1xuXG52YXIgZ2V0SG91ck51bWJlcnMgPSBmdW5jdGlvbiBnZXRIb3VyTnVtYmVycyhfcmVmKSB7XG4gIHZhciBhbXBtID0gX3JlZi5hbXBtLFxuICAgICAgdXRpbHMgPSBfcmVmLnV0aWxzLFxuICAgICAgZGF0ZSA9IF9yZWYuZGF0ZTtcbiAgdmFyIGN1cnJlbnRIb3VycyA9IHV0aWxzLmdldEhvdXJzKGRhdGUpO1xuICB2YXIgaG91ck51bWJlcnMgPSBbXTtcbiAgdmFyIHN0YXJ0SG91ciA9IGFtcG0gPyAxIDogMDtcbiAgdmFyIGVuZEhvdXIgPSBhbXBtID8gMTIgOiAyMztcblxuICB2YXIgaXNTZWxlY3RlZCA9IGZ1bmN0aW9uIGlzU2VsZWN0ZWQoaG91cikge1xuICAgIGlmIChhbXBtKSB7XG4gICAgICBpZiAoaG91ciA9PT0gMTIpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRIb3VycyA9PT0gMTIgfHwgY3VycmVudEhvdXJzID09PSAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3VycmVudEhvdXJzID09PSBob3VyIHx8IGN1cnJlbnRIb3VycyAtIDEyID09PSBob3VyO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50SG91cnMgPT09IGhvdXI7XG4gIH07XG5cbiAgZm9yICh2YXIgaG91ciA9IHN0YXJ0SG91cjsgaG91ciA8PSBlbmRIb3VyOyBob3VyICs9IDEpIHtcbiAgICB2YXIgbGFiZWwgPSBob3VyLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAoaG91ciA9PT0gMCkge1xuICAgICAgbGFiZWwgPSAnMDAnO1xuICAgIH1cblxuICAgIHZhciBwcm9wcyA9IHtcbiAgICAgIGluZGV4OiBob3VyLFxuICAgICAgbGFiZWw6IHV0aWxzLmZvcm1hdE51bWJlcihsYWJlbCksXG4gICAgICBzZWxlY3RlZDogaXNTZWxlY3RlZChob3VyKSxcbiAgICAgIGlzSW5uZXI6ICFhbXBtICYmIChob3VyID09PSAwIHx8IGhvdXIgPiAxMilcbiAgICB9O1xuICAgIGhvdXJOdW1iZXJzLnB1c2goY3JlYXRlRWxlbWVudChDbG9ja051bWJlciwgX2V4dGVuZHMoe1xuICAgICAga2V5OiBob3VyXG4gICAgfSwgcHJvcHMpKSk7XG4gIH1cblxuICByZXR1cm4gaG91ck51bWJlcnM7XG59O1xudmFyIGdldE1pbnV0ZXNOdW1iZXJzID0gZnVuY3Rpb24gZ2V0TWludXRlc051bWJlcnMoX3JlZjIpIHtcbiAgdmFyIHZhbHVlID0gX3JlZjIudmFsdWUsXG4gICAgICB1dGlscyA9IF9yZWYyLnV0aWxzO1xuICB2YXIgZiA9IHV0aWxzLmZvcm1hdE51bWJlcjtcbiAgcmV0dXJuIFtjcmVhdGVFbGVtZW50KENsb2NrTnVtYmVyLCB7XG4gICAgbGFiZWw6IGYoJzAwJyksXG4gICAgc2VsZWN0ZWQ6IHZhbHVlID09PSAwLFxuICAgIGluZGV4OiAxMixcbiAgICBrZXk6IDEyXG4gIH0pLCBjcmVhdGVFbGVtZW50KENsb2NrTnVtYmVyLCB7XG4gICAgbGFiZWw6IGYoJzA1JyksXG4gICAgc2VsZWN0ZWQ6IHZhbHVlID09PSA1LFxuICAgIGluZGV4OiAxLFxuICAgIGtleTogMVxuICB9KSwgY3JlYXRlRWxlbWVudChDbG9ja051bWJlciwge1xuICAgIGxhYmVsOiBmKCcxMCcpLFxuICAgIHNlbGVjdGVkOiB2YWx1ZSA9PT0gMTAsXG4gICAgaW5kZXg6IDIsXG4gICAga2V5OiAyXG4gIH0pLCBjcmVhdGVFbGVtZW50KENsb2NrTnVtYmVyLCB7XG4gICAgbGFiZWw6IGYoJzE1JyksXG4gICAgc2VsZWN0ZWQ6IHZhbHVlID09PSAxNSxcbiAgICBpbmRleDogMyxcbiAgICBrZXk6IDNcbiAgfSksIGNyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignMjAnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDIwLFxuICAgIGluZGV4OiA0LFxuICAgIGtleTogNFxuICB9KSwgY3JlYXRlRWxlbWVudChDbG9ja051bWJlciwge1xuICAgIGxhYmVsOiBmKCcyNScpLFxuICAgIHNlbGVjdGVkOiB2YWx1ZSA9PT0gMjUsXG4gICAgaW5kZXg6IDUsXG4gICAga2V5OiA1XG4gIH0pLCBjcmVhdGVFbGVtZW50KENsb2NrTnVtYmVyLCB7XG4gICAgbGFiZWw6IGYoJzMwJyksXG4gICAgc2VsZWN0ZWQ6IHZhbHVlID09PSAzMCxcbiAgICBpbmRleDogNixcbiAgICBrZXk6IDZcbiAgfSksIGNyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignMzUnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDM1LFxuICAgIGluZGV4OiA3LFxuICAgIGtleTogN1xuICB9KSwgY3JlYXRlRWxlbWVudChDbG9ja051bWJlciwge1xuICAgIGxhYmVsOiBmKCc0MCcpLFxuICAgIHNlbGVjdGVkOiB2YWx1ZSA9PT0gNDAsXG4gICAgaW5kZXg6IDgsXG4gICAga2V5OiA4XG4gIH0pLCBjcmVhdGVFbGVtZW50KENsb2NrTnVtYmVyLCB7XG4gICAgbGFiZWw6IGYoJzQ1JyksXG4gICAgc2VsZWN0ZWQ6IHZhbHVlID09PSA0NSxcbiAgICBpbmRleDogOSxcbiAgICBrZXk6IDlcbiAgfSksIGNyZWF0ZUVsZW1lbnQoQ2xvY2tOdW1iZXIsIHtcbiAgICBsYWJlbDogZignNTAnKSxcbiAgICBzZWxlY3RlZDogdmFsdWUgPT09IDUwLFxuICAgIGluZGV4OiAxMCxcbiAgICBrZXk6IDEwXG4gIH0pLCBjcmVhdGVFbGVtZW50KENsb2NrTnVtYmVyLCB7XG4gICAgbGFiZWw6IGYoJzU1JyksXG4gICAgc2VsZWN0ZWQ6IHZhbHVlID09PSA1NSxcbiAgICBpbmRleDogMTEsXG4gICAga2V5OiAxMVxuICB9KV07XG59O1xuXG52YXIgQ2xvY2tWaWV3ID0gZnVuY3Rpb24gQ2xvY2tWaWV3KF9yZWYpIHtcbiAgdmFyIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICBvbkhvdXJDaGFuZ2UgPSBfcmVmLm9uSG91ckNoYW5nZSxcbiAgICAgIG9uTWludXRlc0NoYW5nZSA9IF9yZWYub25NaW51dGVzQ2hhbmdlLFxuICAgICAgb25TZWNvbmRzQ2hhbmdlID0gX3JlZi5vblNlY29uZHNDaGFuZ2UsXG4gICAgICBhbXBtID0gX3JlZi5hbXBtLFxuICAgICAgZGF0ZSA9IF9yZWYuZGF0ZSxcbiAgICAgIG1pbnV0ZXNTdGVwID0gX3JlZi5taW51dGVzU3RlcDtcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcbiAgdmFyIHZpZXdQcm9wcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBDbG9ja1R5cGUuSE9VUlM6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHV0aWxzLmdldEhvdXJzKGRhdGUpLFxuICAgICAgICAgIGNoaWxkcmVuOiBnZXRIb3VyTnVtYmVycyh7XG4gICAgICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICAgICAgdXRpbHM6IHV0aWxzLFxuICAgICAgICAgICAgYW1wbTogQm9vbGVhbihhbXBtKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSwgaXNGaW5pc2gpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50TWVyaWRpZW0gPSBnZXRNZXJpZGllbShkYXRlLCB1dGlscyk7XG4gICAgICAgICAgICB2YXIgdXBkYXRlZFRpbWVXaXRoTWVyaWRpZW0gPSBjb252ZXJ0VG9NZXJpZGllbSh1dGlscy5zZXRIb3VycyhkYXRlLCB2YWx1ZSksIGN1cnJlbnRNZXJpZGllbSwgQm9vbGVhbihhbXBtKSwgdXRpbHMpO1xuICAgICAgICAgICAgb25Ib3VyQ2hhbmdlKHVwZGF0ZWRUaW1lV2l0aE1lcmlkaWVtLCBpc0ZpbmlzaCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICBjYXNlIENsb2NrVHlwZS5NSU5VVEVTOlxuICAgICAgICB2YXIgbWludXRlc1ZhbHVlID0gdXRpbHMuZ2V0TWludXRlcyhkYXRlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogbWludXRlc1ZhbHVlLFxuICAgICAgICAgIGNoaWxkcmVuOiBnZXRNaW51dGVzTnVtYmVycyh7XG4gICAgICAgICAgICB2YWx1ZTogbWludXRlc1ZhbHVlLFxuICAgICAgICAgICAgdXRpbHM6IHV0aWxzXG4gICAgICAgICAgfSksXG4gICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlLCBpc0ZpbmlzaCkge1xuICAgICAgICAgICAgdmFyIHVwZGF0ZWRUaW1lID0gdXRpbHMuc2V0TWludXRlcyhkYXRlLCB2YWx1ZSk7XG4gICAgICAgICAgICBvbk1pbnV0ZXNDaGFuZ2UodXBkYXRlZFRpbWUsIGlzRmluaXNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgQ2xvY2tUeXBlLlNFQ09ORFM6XG4gICAgICAgIHZhciBzZWNvbmRzVmFsdWUgPSB1dGlscy5nZXRTZWNvbmRzKGRhdGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBzZWNvbmRzVmFsdWUsXG4gICAgICAgICAgY2hpbGRyZW46IGdldE1pbnV0ZXNOdW1iZXJzKHtcbiAgICAgICAgICAgIHZhbHVlOiBzZWNvbmRzVmFsdWUsXG4gICAgICAgICAgICB1dGlsczogdXRpbHNcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUsIGlzRmluaXNoKSB7XG4gICAgICAgICAgICB2YXIgdXBkYXRlZFRpbWUgPSB1dGlscy5zZXRTZWNvbmRzKGRhdGUsIHZhbHVlKTtcbiAgICAgICAgICAgIG9uU2Vjb25kc0NoYW5nZSh1cGRhdGVkVGltZSwgaXNGaW5pc2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBwcm92aWRlIHRoZSB0eXBlIGZvciBUaW1lUGlja2VyVmlldycpO1xuICAgIH1cbiAgfSwgW2FtcG0sIGRhdGUsIG9uSG91ckNoYW5nZSwgb25NaW51dGVzQ2hhbmdlLCBvblNlY29uZHNDaGFuZ2UsIHR5cGUsIHV0aWxzXSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KENsb2NrLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBhbXBtOiBhbXBtLFxuICAgIG1pbnV0ZXNTdGVwOiBtaW51dGVzU3RlcFxuICB9LCB2aWV3UHJvcHMpKTtcbn07XG5DbG9ja1ZpZXcuZGlzcGxheU5hbWUgPSAnVGltZVBpY2tlclZpZXcnO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gQ2xvY2tWaWV3LnByb3BUeXBlcyA9IHtcbiAgZGF0ZTogb2JqZWN0LmlzUmVxdWlyZWQsXG4gIG9uSG91ckNoYW5nZTogZnVuYy5pc1JlcXVpcmVkLFxuICBvbk1pbnV0ZXNDaGFuZ2U6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgb25TZWNvbmRzQ2hhbmdlOiBmdW5jLmlzUmVxdWlyZWQsXG4gIGFtcG06IGJvb2wsXG4gIG1pbnV0ZXNTdGVwOiBudW1iZXIsXG4gIHR5cGU6IG9uZU9mKE9iamVjdC5rZXlzKENsb2NrVHlwZSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gQ2xvY2tUeXBlW2tleV07XG4gIH0pKS5pc1JlcXVpcmVkXG59IDogdm9pZCAwO1xuQ2xvY2tWaWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgYW1wbTogdHJ1ZSxcbiAgbWludXRlc1N0ZXA6IDFcbn07XG52YXIgQ2xvY2tWaWV3JDEgPSBtZW1vKENsb2NrVmlldyk7XG5cbmV4cG9ydCBkZWZhdWx0IENsb2NrVmlldyQxO1xuZXhwb3J0IHsgQ2xvY2tWaWV3IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DbG9ja1ZpZXcuanMubWFwXG4iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCB7IHVzZU1lbW8sIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdSBhcyB1c2VVdGlscyB9IGZyb20gJy4vdXNlVXRpbHMtY2ZiOTZhYzkuanMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBQIGFzIFBpY2tlclRvb2xiYXIsIFQgYXMgVG9vbGJhckJ1dHRvbiwgbSBhcyBtYWtlUGlja2VyV2l0aFN0YXRlLCBhIGFzIFB1cmVEYXRlSW5wdXQsIHUgYXMgdXNlUGlja2VyU3RhdGUsIEsgYXMgS2V5Ym9hcmREYXRlSW5wdXQsIGIgYXMgdXNlS2V5Ym9hcmRQaWNrZXJTdGF0ZSB9IGZyb20gJy4vbWFrZVBpY2tlcldpdGhTdGF0ZS01YTc5Y2I4YS5qcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0ICcuL1dyYXBwZXItMjQxOTY2ZDcuanMnO1xuaW1wb3J0IHsgaSBhcyBpc1llYXJPbmx5VmlldywgYiBhcyBpc1llYXJBbmRNb250aFZpZXdzLCBnIGFzIGdldEZvcm1hdEJ5Vmlld3MgfSBmcm9tICcuL0NhbGVuZGFyLTExYWU2MWY2LmpzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcbmltcG9ydCAncmlmbSc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1N2Z0ljb24nO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5JztcbmltcG9ydCB7IGQgYXMgZGF0ZVBpY2tlckRlZmF1bHRQcm9wcyB9IGZyb20gJy4vUGlja2VyLWNjZDliYTkwLmpzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmltcG9ydCAnLi9EYXkuanMnO1xuaW1wb3J0ICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3Zlcic7XG5pbXBvcnQgJy4vQ2xvY2stNDhmZGU5NzUuanMnO1xuaW1wb3J0ICcuL0Nsb2NrVmlldy5qcyc7XG5cbnZhciB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgdG9vbGJhcjoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0J1xuICB9LFxuICB0b29sYmFyTGFuZHNjYXBlOiB7XG4gICAgcGFkZGluZzogMTZcbiAgfSxcbiAgZGF0ZUxhbmRzY2FwZToge1xuICAgIG1hcmdpblJpZ2h0OiAxNlxuICB9XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzRGF0ZVBpY2tlclJvb3QnXG59KTtcbnZhciBEYXRlUGlja2VyVG9vbGJhciA9IGZ1bmN0aW9uIERhdGVQaWNrZXJUb29sYmFyKF9yZWYpIHtcbiAgdmFyIGRhdGUgPSBfcmVmLmRhdGUsXG4gICAgICB2aWV3cyA9IF9yZWYudmlld3MsXG4gICAgICBzZXRPcGVuVmlldyA9IF9yZWYuc2V0T3BlblZpZXcsXG4gICAgICBpc0xhbmRzY2FwZSA9IF9yZWYuaXNMYW5kc2NhcGUsXG4gICAgICBvcGVuVmlldyA9IF9yZWYub3BlblZpZXc7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHZhciBpc1llYXJPbmx5ID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzWWVhck9ubHlWaWV3KHZpZXdzKTtcbiAgfSwgW3ZpZXdzXSk7XG4gIHZhciBpc1llYXJBbmRNb250aCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpc1llYXJBbmRNb250aFZpZXdzKHZpZXdzKTtcbiAgfSwgW3ZpZXdzXSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFBpY2tlclRvb2xiYXIsIHtcbiAgICBpc0xhbmRzY2FwZTogaXNMYW5kc2NhcGUsXG4gICAgY2xhc3NOYW1lOiBjbHN4KCFpc1llYXJPbmx5ICYmIGNsYXNzZXMudG9vbGJhciwgaXNMYW5kc2NhcGUgJiYgY2xhc3Nlcy50b29sYmFyTGFuZHNjYXBlKVxuICB9LCBjcmVhdGVFbGVtZW50KFRvb2xiYXJCdXR0b24sIHtcbiAgICB2YXJpYW50OiBpc1llYXJPbmx5ID8gJ2gzJyA6ICdzdWJ0aXRsZTEnLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gc2V0T3BlblZpZXcoJ3llYXInKTtcbiAgICB9LFxuICAgIHNlbGVjdGVkOiBvcGVuVmlldyA9PT0gJ3llYXInLFxuICAgIGxhYmVsOiB1dGlscy5nZXRZZWFyVGV4dChkYXRlKVxuICB9KSwgIWlzWWVhck9ubHkgJiYgIWlzWWVhckFuZE1vbnRoICYmIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IFwiaDRcIixcbiAgICBzZWxlY3RlZDogb3BlblZpZXcgPT09ICdkYXRlJyxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHNldE9wZW5WaWV3KCdkYXRlJyk7XG4gICAgfSxcbiAgICBhbGlnbjogaXNMYW5kc2NhcGUgPyAnbGVmdCcgOiAnY2VudGVyJyxcbiAgICBsYWJlbDogdXRpbHMuZ2V0RGF0ZVBpY2tlckhlYWRlclRleHQoZGF0ZSksXG4gICAgY2xhc3NOYW1lOiBjbHN4KGlzTGFuZHNjYXBlICYmIGNsYXNzZXMuZGF0ZUxhbmRzY2FwZSlcbiAgfSksIGlzWWVhckFuZE1vbnRoICYmIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IFwiaDRcIixcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHNldE9wZW5WaWV3KCdtb250aCcpO1xuICAgIH0sXG4gICAgc2VsZWN0ZWQ6IG9wZW5WaWV3ID09PSAnbW9udGgnLFxuICAgIGxhYmVsOiB1dGlscy5nZXRNb250aFRleHQoZGF0ZSlcbiAgfSkpO1xufTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIGRlZmF1bHRQcm9wcyA9IF9vYmplY3RTcHJlYWQoe30sIGRhdGVQaWNrZXJEZWZhdWx0UHJvcHMsIHtcbiAgb3BlblRvOiAnZGF0ZScsXG4gIHZpZXdzOiBbJ3llYXInLCAnZGF0ZSddXG59KTtcblxuZnVuY3Rpb24gdXNlT3B0aW9ucyhwcm9wcykge1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICByZXR1cm4ge1xuICAgIGdldERlZmF1bHRGb3JtYXQ6IGZ1bmN0aW9uIGdldERlZmF1bHRGb3JtYXQoKSB7XG4gICAgICByZXR1cm4gZ2V0Rm9ybWF0QnlWaWV3cyhwcm9wcy52aWV3cywgdXRpbHMpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIERhdGVQaWNrZXIgPSBtYWtlUGlja2VyV2l0aFN0YXRlKHtcbiAgdXNlT3B0aW9uczogdXNlT3B0aW9ucyxcbiAgSW5wdXQ6IFB1cmVEYXRlSW5wdXQsXG4gIHVzZVN0YXRlOiB1c2VQaWNrZXJTdGF0ZSxcbiAgRGVmYXVsdFRvb2xiYXJDb21wb25lbnQ6IERhdGVQaWNrZXJUb29sYmFyXG59KTtcbnZhciBLZXlib2FyZERhdGVQaWNrZXIgPSBtYWtlUGlja2VyV2l0aFN0YXRlKHtcbiAgdXNlT3B0aW9uczogdXNlT3B0aW9ucyxcbiAgSW5wdXQ6IEtleWJvYXJkRGF0ZUlucHV0LFxuICB1c2VTdGF0ZTogdXNlS2V5Ym9hcmRQaWNrZXJTdGF0ZSxcbiAgRGVmYXVsdFRvb2xiYXJDb21wb25lbnQ6IERhdGVQaWNrZXJUb29sYmFyXG59KTtcbkRhdGVQaWNrZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuS2V5Ym9hcmREYXRlUGlja2VyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IHsgRGF0ZVBpY2tlciwgS2V5Ym9hcmREYXRlUGlja2VyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1EYXRlUGlja2VyLmpzLm1hcFxuIiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgUmVhY3RfX2RlZmF1bHQsIHsgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdSBhcyB1c2VVdGlscyB9IGZyb20gJy4vdXNlVXRpbHMtY2ZiOTZhYzkuanMnO1xuaW1wb3J0ICdjbHN4JztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBQIGFzIFBpY2tlclRvb2xiYXIsIFQgYXMgVG9vbGJhckJ1dHRvbiwgYyBhcyBUb29sYmFyVGV4dCwgbSBhcyBtYWtlUGlja2VyV2l0aFN0YXRlLCBhIGFzIFB1cmVEYXRlSW5wdXQsIHUgYXMgdXNlUGlja2VyU3RhdGUsIEsgYXMgS2V5Ym9hcmREYXRlSW5wdXQsIGIgYXMgdXNlS2V5Ym9hcmRQaWNrZXJTdGF0ZSwgcCBhcyBwaWNrMTJoT3IyNGhGb3JtYXQgfSBmcm9tICcuL21ha2VQaWNrZXJXaXRoU3RhdGUtNWE3OWNiOGEuanMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCAnLi9XcmFwcGVyLTI0MTk2NmQ3LmpzJztcbmltcG9ydCAnLi9DYWxlbmRhci0xMWFlNjFmNi5qcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XG5pbXBvcnQgJ3JpZm0nO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvbic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXknO1xuaW1wb3J0IHsgYSBhcyBkYXRlVGltZVBpY2tlckRlZmF1bHRQcm9wcyB9IGZyb20gJy4vUGlja2VyLWNjZDliYTkwLmpzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmltcG9ydCAnLi9EYXkuanMnO1xuaW1wb3J0ICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3Zlcic7XG5pbXBvcnQgJy4vQ2xvY2stNDhmZGU5NzUuanMnO1xuaW1wb3J0ICcuL0Nsb2NrVmlldy5qcyc7XG5pbXBvcnQgeyB1IGFzIHVzZU1lcmlkaWVtTW9kZSB9IGZyb20gJy4vVGltZVBpY2tlclRvb2xiYXItODExMDBmYWIuanMnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XG5pbXBvcnQgVGFicyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJzJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5cbnZhciBUaW1lSWNvbiA9IGZ1bmN0aW9uIFRpbWVJY29uKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN2Z0ljb24sIHByb3BzLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTEuOTkgMkM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMnpNMTIgMjBjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4elwiXG4gIH0pLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZDogXCJNMCAwaDI0djI0SDB6XCJcbiAgfSksIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMi41IDdIMTF2Nmw1LjI1IDMuMTUuNzUtMS4yMy00LjUtMi42N3pcIlxuICB9KSk7XG59O1xuXG52YXIgRGF0ZVJhbmdlSWNvbiA9IGZ1bmN0aW9uIERhdGVSYW5nZUljb24ocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3ZnSWNvbiwgcHJvcHMsIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk05IDExSDd2Mmgydi0yem00IDBoLTJ2Mmgydi0yem00IDBoLTJ2Mmgydi0yem0yLTdoLTFWMmgtMnYySDhWMkg2djJINWMtMS4xMSAwLTEuOTkuOS0xLjk5IDJMMyAyMGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0wIDE2SDVWOWgxNHYxMXpcIlxuICB9KSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIGQ6IFwiTTAgMGgyNHYyNEgwelwiXG4gIH0pKTtcbn07XG5cbnZhciB2aWV3VG9UYWJJbmRleCA9IGZ1bmN0aW9uIHZpZXdUb1RhYkluZGV4KG9wZW5WaWV3KSB7XG4gIGlmIChvcGVuVmlldyA9PT0gJ2RhdGUnIHx8IG9wZW5WaWV3ID09PSAneWVhcicpIHtcbiAgICByZXR1cm4gJ2RhdGUnO1xuICB9XG5cbiAgcmV0dXJuICd0aW1lJztcbn07XG5cbnZhciB0YWJJbmRleFRvVmlldyA9IGZ1bmN0aW9uIHRhYkluZGV4VG9WaWV3KHRhYikge1xuICBpZiAodGFiID09PSAnZGF0ZScpIHtcbiAgICByZXR1cm4gJ2RhdGUnO1xuICB9XG5cbiAgcmV0dXJuICdob3Vycyc7XG59O1xuXG52YXIgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIHZhciB0YWJzQmFja2dyb3VuZCA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluIDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kW1wiZGVmYXVsdFwiXTtcbiAgcmV0dXJuIHtcbiAgICB0YWJzOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5nZXRDb250cmFzdFRleHQodGFic0JhY2tncm91bmQpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0YWJzQmFja2dyb3VuZFxuICAgIH1cbiAgfTtcbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlckRUVGFicydcbn0pO1xudmFyIERhdGVUaW1lUGlja2VyVGFicyA9IGZ1bmN0aW9uIERhdGVUaW1lUGlja2VyVGFicyhfcmVmKSB7XG4gIHZhciB2aWV3ID0gX3JlZi52aWV3LFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgZGF0ZVJhbmdlSWNvbiA9IF9yZWYuZGF0ZVJhbmdlSWNvbixcbiAgICAgIHRpbWVJY29uID0gX3JlZi50aW1lSWNvbjtcbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgdmFyIGluZGljYXRvckNvbG9yID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gJ3NlY29uZGFyeScgOiAncHJpbWFyeSc7XG5cbiAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdmlld1RvVGFiSW5kZXgodmlldykpIHtcbiAgICAgIG9uQ2hhbmdlKHRhYkluZGV4VG9WaWV3KHZhbHVlKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFBhcGVyLCBudWxsLCBjcmVhdGVFbGVtZW50KFRhYnMsIHtcbiAgICB2YXJpYW50OiBcImZ1bGxXaWR0aFwiLFxuICAgIHZhbHVlOiB2aWV3VG9UYWJJbmRleCh2aWV3KSxcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50YWJzLFxuICAgIGluZGljYXRvckNvbG9yOiBpbmRpY2F0b3JDb2xvclxuICB9LCBjcmVhdGVFbGVtZW50KFRhYiwge1xuICAgIHZhbHVlOiBcImRhdGVcIixcbiAgICBpY29uOiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBkYXRlUmFuZ2VJY29uKVxuICB9KSwgY3JlYXRlRWxlbWVudChUYWIsIHtcbiAgICB2YWx1ZTogXCJ0aW1lXCIsXG4gICAgaWNvbjogY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgdGltZUljb24pXG4gIH0pKSk7XG59O1xuRGF0ZVRpbWVQaWNrZXJUYWJzLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0ZVJhbmdlSWNvbjogY3JlYXRlRWxlbWVudChEYXRlUmFuZ2VJY29uLCBudWxsKSxcbiAgdGltZUljb246IGNyZWF0ZUVsZW1lbnQoVGltZUljb24sIG51bGwpXG59O1xuXG52YXIgdXNlU3R5bGVzJDEgPSBtYWtlU3R5bGVzKGZ1bmN0aW9uIChfKSB7XG4gIHJldHVybiB7XG4gICAgdG9vbGJhcjoge1xuICAgICAgcGFkZGluZ0xlZnQ6IDE2LFxuICAgICAgcGFkZGluZ1JpZ2h0OiAxNixcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJ1xuICAgIH0sXG4gICAgc2VwYXJhdG9yOiB7XG4gICAgICBtYXJnaW46ICcwIDRweCAwIDJweCcsXG4gICAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICAgIH1cbiAgfTtcbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlckRUVG9vbGJhcidcbn0pO1xudmFyIERhdGVUaW1lUGlja2VyVG9vbGJhciA9IGZ1bmN0aW9uIERhdGVUaW1lUGlja2VyVG9vbGJhcihfcmVmKSB7XG4gIHZhciBkYXRlID0gX3JlZi5kYXRlLFxuICAgICAgb3BlblZpZXcgPSBfcmVmLm9wZW5WaWV3LFxuICAgICAgc2V0T3BlblZpZXcgPSBfcmVmLnNldE9wZW5WaWV3LFxuICAgICAgYW1wbSA9IF9yZWYuYW1wbSxcbiAgICAgIGhpZGVUYWJzID0gX3JlZi5oaWRlVGFicyxcbiAgICAgIGRhdGVSYW5nZUljb24gPSBfcmVmLmRhdGVSYW5nZUljb24sXG4gICAgICB0aW1lSWNvbiA9IF9yZWYudGltZUljb24sXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2U7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzJDEoKTtcbiAgdmFyIHNob3dUYWJzID0gIWhpZGVUYWJzICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5pbm5lckhlaWdodCA+IDY2NztcblxuICB2YXIgX3VzZU1lcmlkaWVtTW9kZSA9IHVzZU1lcmlkaWVtTW9kZShkYXRlLCBhbXBtLCBvbkNoYW5nZSksXG4gICAgICBtZXJpZGllbU1vZGUgPSBfdXNlTWVyaWRpZW1Nb2RlLm1lcmlkaWVtTW9kZSxcbiAgICAgIGhhbmRsZU1lcmlkaWVtQ2hhbmdlID0gX3VzZU1lcmlkaWVtTW9kZS5oYW5kbGVNZXJpZGllbUNoYW5nZTtcblxuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgcnRsID0gdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJztcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIGNyZWF0ZUVsZW1lbnQoUGlja2VyVG9vbGJhciwge1xuICAgIGlzTGFuZHNjYXBlOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMudG9vbGJhclxuICB9LCBjcmVhdGVFbGVtZW50KEdyaWQsIHtcbiAgICBjb250YWluZXI6IHRydWUsXG4gICAganVzdGlmeTogXCJjZW50ZXJcIixcbiAgICB3cmFwOiBcIm5vd3JhcFwiXG4gIH0sIGNyZWF0ZUVsZW1lbnQoR3JpZCwge1xuICAgIGl0ZW06IHRydWUsXG4gICAgY29udGFpbmVyOiB0cnVlLFxuICAgIHhzOiA1LFxuICAgIGp1c3RpZnk6IFwiZmxleC1zdGFydFwiLFxuICAgIGRpcmVjdGlvbjogXCJjb2x1bW5cIlxuICB9LCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IFwic3VidGl0bGUxXCIsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBzZXRPcGVuVmlldygneWVhcicpO1xuICAgIH0sXG4gICAgc2VsZWN0ZWQ6IG9wZW5WaWV3ID09PSAneWVhcicsXG4gICAgbGFiZWw6IHV0aWxzLmdldFllYXJUZXh0KGRhdGUpXG4gIH0pKSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBjcmVhdGVFbGVtZW50KFRvb2xiYXJCdXR0b24sIHtcbiAgICB2YXJpYW50OiBcImg0XCIsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBzZXRPcGVuVmlldygnZGF0ZScpO1xuICAgIH0sXG4gICAgc2VsZWN0ZWQ6IG9wZW5WaWV3ID09PSAnZGF0ZScsXG4gICAgbGFiZWw6IHV0aWxzLmdldERhdGVUaW1lUGlja2VySGVhZGVyVGV4dChkYXRlKVxuICB9KSkpLCBjcmVhdGVFbGVtZW50KEdyaWQsIHtcbiAgICBpdGVtOiB0cnVlLFxuICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICB4czogNixcbiAgICBqdXN0aWZ5OiBcImNlbnRlclwiLFxuICAgIGFsaWduSXRlbXM6IFwiZmxleC1lbmRcIixcbiAgICBkaXJlY3Rpb246IHJ0bCA/ICdyb3ctcmV2ZXJzZScgOiAncm93J1xuICB9LCBjcmVhdGVFbGVtZW50KFRvb2xiYXJCdXR0b24sIHtcbiAgICB2YXJpYW50OiBcImgzXCIsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBzZXRPcGVuVmlldygnaG91cnMnKTtcbiAgICB9LFxuICAgIHNlbGVjdGVkOiBvcGVuVmlldyA9PT0gJ2hvdXJzJyxcbiAgICBsYWJlbDogdXRpbHMuZ2V0SG91clRleHQoZGF0ZSwgYW1wbSlcbiAgfSksIGNyZWF0ZUVsZW1lbnQoVG9vbGJhclRleHQsIHtcbiAgICB2YXJpYW50OiBcImgzXCIsXG4gICAgbGFiZWw6IFwiOlwiLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5zZXBhcmF0b3JcbiAgfSksIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IFwiaDNcIixcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHNldE9wZW5WaWV3KCdtaW51dGVzJyk7XG4gICAgfSxcbiAgICBzZWxlY3RlZDogb3BlblZpZXcgPT09ICdtaW51dGVzJyxcbiAgICBsYWJlbDogdXRpbHMuZ2V0TWludXRlVGV4dChkYXRlKVxuICB9KSksIGFtcG0gJiYgY3JlYXRlRWxlbWVudChHcmlkLCB7XG4gICAgaXRlbTogdHJ1ZSxcbiAgICBjb250YWluZXI6IHRydWUsXG4gICAgeHM6IDEsXG4gICAgZGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGp1c3RpZnk6IFwiZmxleC1lbmRcIlxuICB9LCBjcmVhdGVFbGVtZW50KFRvb2xiYXJCdXR0b24sIHtcbiAgICB2YXJpYW50OiBcInN1YnRpdGxlMVwiLFxuICAgIHNlbGVjdGVkOiBtZXJpZGllbU1vZGUgPT09ICdhbScsXG4gICAgbGFiZWw6IHV0aWxzLmdldE1lcmlkaWVtVGV4dCgnYW0nKSxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIGhhbmRsZU1lcmlkaWVtQ2hhbmdlKCdhbScpO1xuICAgIH1cbiAgfSksIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IFwic3VidGl0bGUxXCIsXG4gICAgc2VsZWN0ZWQ6IG1lcmlkaWVtTW9kZSA9PT0gJ3BtJyxcbiAgICBsYWJlbDogdXRpbHMuZ2V0TWVyaWRpZW1UZXh0KCdwbScpLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gaGFuZGxlTWVyaWRpZW1DaGFuZ2UoJ3BtJyk7XG4gICAgfVxuICB9KSkpKSwgc2hvd1RhYnMgJiYgY3JlYXRlRWxlbWVudChEYXRlVGltZVBpY2tlclRhYnMsIHtcbiAgICBkYXRlUmFuZ2VJY29uOiBkYXRlUmFuZ2VJY29uLFxuICAgIHRpbWVJY29uOiB0aW1lSWNvbixcbiAgICB2aWV3OiBvcGVuVmlldyxcbiAgICBvbkNoYW5nZTogc2V0T3BlblZpZXdcbiAgfSkpO1xufTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIGRlZmF1bHRQcm9wcyA9IF9vYmplY3RTcHJlYWQoe30sIGRhdGVUaW1lUGlja2VyRGVmYXVsdFByb3BzLCB7XG4gIHdpZGVyOiB0cnVlLFxuICBvcmllbnRhdGlvbjogJ3BvcnRyYWl0JyxcbiAgb3BlblRvOiAnZGF0ZScsXG4gIHZpZXdzOiBbJ3llYXInLCAnZGF0ZScsICdob3VycycsICdtaW51dGVzJ11cbn0pO1xuXG5mdW5jdGlvbiB1c2VPcHRpb25zKHByb3BzKSB7XG4gIHZhciB1dGlscyA9IHVzZVV0aWxzKCk7XG5cbiAgaWYgKHByb3BzLm9yaWVudGF0aW9uICE9PSAncG9ydHJhaXQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdXZSBhcmUgbm90IHN1cHBvcnRpbmcgY3VzdG9tIG9yaWVudGF0aW9uIGZvciBEYXRlVGltZVBpY2tlciB5ZXQgOignKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0RGVmYXVsdEZvcm1hdDogZnVuY3Rpb24gZ2V0RGVmYXVsdEZvcm1hdCgpIHtcbiAgICAgIHJldHVybiBwaWNrMTJoT3IyNGhGb3JtYXQocHJvcHMuZm9ybWF0LCBwcm9wcy5hbXBtLCB7XG4gICAgICAgICcxMmgnOiB1dGlscy5kYXRlVGltZTEyaEZvcm1hdCxcbiAgICAgICAgJzI0aCc6IHV0aWxzLmRhdGVUaW1lMjRoRm9ybWF0XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBEYXRlVGltZVBpY2tlciA9IG1ha2VQaWNrZXJXaXRoU3RhdGUoe1xuICB1c2VPcHRpb25zOiB1c2VPcHRpb25zLFxuICBJbnB1dDogUHVyZURhdGVJbnB1dCxcbiAgdXNlU3RhdGU6IHVzZVBpY2tlclN0YXRlLFxuICBEZWZhdWx0VG9vbGJhckNvbXBvbmVudDogRGF0ZVRpbWVQaWNrZXJUb29sYmFyXG59KTtcbnZhciBLZXlib2FyZERhdGVUaW1lUGlja2VyID0gbWFrZVBpY2tlcldpdGhTdGF0ZSh7XG4gIHVzZU9wdGlvbnM6IHVzZU9wdGlvbnMsXG4gIElucHV0OiBLZXlib2FyZERhdGVJbnB1dCxcbiAgdXNlU3RhdGU6IHVzZUtleWJvYXJkUGlja2VyU3RhdGUsXG4gIERlZmF1bHRUb29sYmFyQ29tcG9uZW50OiBEYXRlVGltZVBpY2tlclRvb2xiYXIsXG4gIGdldEN1c3RvbVByb3BzOiBmdW5jdGlvbiBnZXRDdXN0b21Qcm9wcyhwcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICByZWZ1c2U6IHByb3BzLmFtcG0gPyAvW15cXGRhcF0rL2dpIDogL1teXFxkXSsvZ2lcbiAgICB9O1xuICB9XG59KTtcbkRhdGVUaW1lUGlja2VyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbktleWJvYXJkRGF0ZVRpbWVQaWNrZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgeyBEYXRlVGltZVBpY2tlciwgS2V5Ym9hcmREYXRlVGltZVBpY2tlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGF0ZVRpbWVQaWNrZXIuanMubWFwXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYm9vbCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcblxudmFyIHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoZnVuY3Rpb24gKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgZGF5OiB7XG4gICAgICB3aWR0aDogMzYsXG4gICAgICBoZWlnaHQ6IDM2LFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuY2FwdGlvbi5mb250U2l6ZSxcbiAgICAgIG1hcmdpbjogJzAgMnB4JyxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bSxcbiAgICAgIHBhZGRpbmc6IDBcbiAgICB9LFxuICAgIGhpZGRlbjoge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgY3VycmVudDoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgZm9udFdlaWdodDogNjAwXG4gICAgfSxcbiAgICBkYXlTZWxlY3RlZDoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5jb250cmFzdFRleHQsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICAgIH1cbiAgICB9LFxuICAgIGRheURpc2FibGVkOiB7XG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LmhpbnRcbiAgICB9XG4gIH07XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzRGF5J1xufSk7XG52YXIgRGF5ID0gZnVuY3Rpb24gRGF5KF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICAgIGhpZGRlbiA9IF9yZWYuaGlkZGVuLFxuICAgICAgY3VycmVudCA9IF9yZWYuY3VycmVudCxcbiAgICAgIHNlbGVjdGVkID0gX3JlZi5zZWxlY3RlZCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImNoaWxkcmVuXCIsIFwiZGlzYWJsZWRcIiwgXCJoaWRkZW5cIiwgXCJjdXJyZW50XCIsIFwic2VsZWN0ZWRcIl0pO1xuXG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHZhciBjbGFzc05hbWUgPSBjbHN4KGNsYXNzZXMuZGF5LCBoaWRkZW4gJiYgY2xhc3Nlcy5oaWRkZW4sIGN1cnJlbnQgJiYgY2xhc3Nlcy5jdXJyZW50LCBzZWxlY3RlZCAmJiBjbGFzc2VzLmRheVNlbGVjdGVkLCBkaXNhYmxlZCAmJiBjbGFzc2VzLmRheURpc2FibGVkKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHRhYkluZGV4OiBoaWRkZW4gfHwgZGlzYWJsZWQgPyAtMSA6IDBcbiAgfSwgb3RoZXIpLCBjcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHtcbiAgICB2YXJpYW50OiBcImJvZHkyXCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH0sIGNoaWxkcmVuKSk7XG59O1xuRGF5LmRpc3BsYXlOYW1lID0gJ0RheSc7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBEYXkucHJvcFR5cGVzID0ge1xuICBjdXJyZW50OiBib29sLFxuICBkaXNhYmxlZDogYm9vbCxcbiAgaGlkZGVuOiBib29sLFxuICBzZWxlY3RlZDogYm9vbFxufSA6IHZvaWQgMDtcbkRheS5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgaGlkZGVuOiBmYWxzZSxcbiAgY3VycmVudDogZmFsc2UsXG4gIHNlbGVjdGVkOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF5O1xuZXhwb3J0IHsgRGF5LCB1c2VTdHlsZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURheS5qcy5tYXBcbiIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCBmb3J3YXJkUmVmLCBjcmVhdGVFbGVtZW50LCB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9uZU9mVHlwZSwgb2JqZWN0LCBzdHJpbmcsIG51bWJlciwgaW5zdGFuY2VPZiwgb25lT2YgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHUgYXMgdXNlVXRpbHMgfSBmcm9tICcuL3VzZVV0aWxzLWNmYjk2YWM5LmpzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgYSBhcyBhcnJheUluY2x1ZGVzLCBWIGFzIFZhcmlhbnRDb250ZXh0LCB1IGFzIHVzZUlzb21vcnBoaWNFZmZlY3QsIGIgYXMgVklFV19IRUlHSFQsIEQgYXMgRElBTE9HX1dJRFRILCBjIGFzIERJQUxPR19XSURUSF9XSURFUiB9IGZyb20gJy4vV3JhcHBlci0yNDE5NjZkNy5qcyc7XG5pbXBvcnQgeyBhIGFzIENhbGVuZGFyIH0gZnJvbSAnLi9DYWxlbmRhci0xMWFlNjFmNi5qcyc7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheSc7XG5pbXBvcnQgeyBDbG9ja1ZpZXcgfSBmcm9tICcuL0Nsb2NrVmlldy5qcyc7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgZGF0ZSA9IG9uZU9mVHlwZShbb2JqZWN0LCBzdHJpbmcsIG51bWJlciwgaW5zdGFuY2VPZihEYXRlKV0pO1xudmFyIGRhdGVQaWNrZXJWaWV3ID0gb25lT2YoWyd5ZWFyJywgJ21vbnRoJywgJ2RheSddKTtcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1vYmplY3QtbGl0ZXJhbC10eXBlLWFzc2VydGlvbiAqL1xuXG52YXIgdGltZVBpY2tlckRlZmF1bHRQcm9wcyA9IHtcbiAgYW1wbTogdHJ1ZSxcbiAgaW52YWxpZERhdGVNZXNzYWdlOiAnSW52YWxpZCBUaW1lIEZvcm1hdCdcbn07XG52YXIgZGF0ZVBpY2tlckRlZmF1bHRQcm9wcyA9IHtcbiAgbWluRGF0ZTogbmV3IERhdGUoJzE5MDAtMDEtMDEnKSxcbiAgbWF4RGF0ZTogbmV3IERhdGUoJzIxMDAtMDEtMDEnKSxcbiAgaW52YWxpZERhdGVNZXNzYWdlOiAnSW52YWxpZCBEYXRlIEZvcm1hdCcsXG4gIG1pbkRhdGVNZXNzYWdlOiAnRGF0ZSBzaG91bGQgbm90IGJlIGJlZm9yZSBtaW5pbWFsIGRhdGUnLFxuICBtYXhEYXRlTWVzc2FnZTogJ0RhdGUgc2hvdWxkIG5vdCBiZSBhZnRlciBtYXhpbWFsIGRhdGUnLFxuICBhbGxvd0tleWJvYXJkQ29udHJvbDogdHJ1ZVxufTtcbnZhciBkYXRlVGltZVBpY2tlckRlZmF1bHRQcm9wcyA9IF9vYmplY3RTcHJlYWQoe30sIHRpbWVQaWNrZXJEZWZhdWx0UHJvcHMsIHt9LCBkYXRlUGlja2VyRGVmYXVsdFByb3BzLCB7XG4gIHNob3dUYWJzOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gdXNlVmlld3Modmlld3MsIG9wZW5Ubywgb25DaGFuZ2UpIHtcbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IHVzZVN0YXRlKG9wZW5UbyAmJiBhcnJheUluY2x1ZGVzKHZpZXdzLCBvcGVuVG8pID8gb3BlblRvIDogdmlld3NbMF0pLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBvcGVuVmlldyA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRPcGVuVmlldyA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIGhhbmRsZUNoYW5nZUFuZE9wZW5OZXh0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGRhdGUsIGlzRmluaXNoKSB7XG4gICAgdmFyIG5leHRWaWV3VG9PcGVuID0gdmlld3Nbdmlld3MuaW5kZXhPZihvcGVuVmlldykgKyAxXTtcblxuICAgIGlmIChpc0ZpbmlzaCAmJiBuZXh0Vmlld1RvT3Blbikge1xuICAgICAgLy8gZG8gbm90IGNsb3NlIHBpY2tlciBpZiBuZWVkcyB0byBzaG93IG5leHQgdmlld1xuICAgICAgb25DaGFuZ2UoZGF0ZSwgZmFsc2UpO1xuICAgICAgc2V0T3BlblZpZXcobmV4dFZpZXdUb09wZW4pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKGRhdGUsIEJvb2xlYW4oaXNGaW5pc2gpKTtcbiAgfSwgW29uQ2hhbmdlLCBvcGVuVmlldywgdmlld3NdKTtcbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVDaGFuZ2VBbmRPcGVuTmV4dDogaGFuZGxlQ2hhbmdlQW5kT3Blbk5leHQsXG4gICAgb3BlblZpZXc6IG9wZW5WaWV3LFxuICAgIHNldE9wZW5WaWV3OiBzZXRPcGVuVmlld1xuICB9O1xufVxuXG52YXIgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBoZWlnaHQ6IDQwLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bVxuICAgICAgfVxuICAgIH0sXG4gICAgeWVhclNlbGVjdGVkOiB7XG4gICAgICBtYXJnaW46ICcxMHB4IDAnLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtXG4gICAgfSxcbiAgICB5ZWFyRGlzYWJsZWQ6IHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuaGludFxuICAgIH1cbiAgfTtcbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlcnNZZWFyJ1xufSk7XG52YXIgWWVhciA9IGZ1bmN0aW9uIFllYXIoX3JlZikge1xuICB2YXIgb25TZWxlY3QgPSBfcmVmLm9uU2VsZWN0LFxuICAgICAgZm9yd2FyZGVkUmVmID0gX3JlZi5mb3J3YXJkZWRSZWYsXG4gICAgICB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBzZWxlY3RlZCA9IF9yZWYuc2VsZWN0ZWQsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJvblNlbGVjdFwiLCBcImZvcndhcmRlZFJlZlwiLCBcInZhbHVlXCIsIFwic2VsZWN0ZWRcIiwgXCJkaXNhYmxlZFwiLCBcImNoaWxkcmVuXCJdKTtcblxuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICB2YXIgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG9uU2VsZWN0KHZhbHVlKTtcbiAgfSwgW29uU2VsZWN0LCB2YWx1ZV0pO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCBfZXh0ZW5kcyh7XG4gICAgcm9sZTogXCJidXR0b25cIixcbiAgICBjb21wb25lbnQ6IFwiZGl2XCIsXG4gICAgdGFiSW5kZXg6IGRpc2FibGVkID8gLTEgOiAwLFxuICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgIG9uS2V5UHJlc3M6IGhhbmRsZUNsaWNrLFxuICAgIGNvbG9yOiBzZWxlY3RlZCA/ICdwcmltYXJ5JyA6IHVuZGVmaW5lZCxcbiAgICB2YXJpYW50OiBzZWxlY3RlZCA/ICdoNScgOiAnc3VidGl0bGUxJyxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgcmVmOiBmb3J3YXJkZWRSZWYsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgc2VsZWN0ZWQgJiYgY2xhc3Nlcy55ZWFyU2VsZWN0ZWQsIGRpc2FibGVkICYmIGNsYXNzZXMueWVhckRpc2FibGVkKVxuICB9LCBvdGhlcikpO1xufTtcblllYXIuZGlzcGxheU5hbWUgPSAnWWVhcic7XG52YXIgWWVhciQxID0gZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChZZWFyLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBmb3J3YXJkZWRSZWY6IHJlZlxuICB9KSk7XG59KTtcblxudmFyIHVzZVN0eWxlcyQxID0gbWFrZVN0eWxlcyh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGhlaWdodDogMzAwLFxuICAgIG92ZXJmbG93WTogJ2F1dG8nXG4gIH1cbn0sIHtcbiAgbmFtZTogJ011aVBpY2tlcnNZZWFyU2VsZWN0aW9uJ1xufSk7XG52YXIgWWVhclNlbGVjdGlvbiA9IGZ1bmN0aW9uIFllYXJTZWxlY3Rpb24oX3JlZikge1xuICB2YXIgZGF0ZSA9IF9yZWYuZGF0ZSxcbiAgICAgIG9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZSxcbiAgICAgIG9uWWVhckNoYW5nZSA9IF9yZWYub25ZZWFyQ2hhbmdlLFxuICAgICAgbWluRGF0ZSA9IF9yZWYubWluRGF0ZSxcbiAgICAgIG1heERhdGUgPSBfcmVmLm1heERhdGUsXG4gICAgICBkaXNhYmxlUGFzdCA9IF9yZWYuZGlzYWJsZVBhc3QsXG4gICAgICBkaXNhYmxlRnV0dXJlID0gX3JlZi5kaXNhYmxlRnV0dXJlLFxuICAgICAgYW5pbWF0ZVllYXJTY3JvbGxpbmcgPSBfcmVmLmFuaW1hdGVZZWFyU2Nyb2xsaW5nO1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcyQxKCk7XG4gIHZhciBjdXJyZW50VmFyaWFudCA9IHVzZUNvbnRleHQoVmFyaWFudENvbnRleHQpO1xuICB2YXIgc2VsZWN0ZWRZZWFyUmVmID0gdXNlUmVmKG51bGwpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChzZWxlY3RlZFllYXJSZWYuY3VycmVudCAmJiBzZWxlY3RlZFllYXJSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2VsZWN0ZWRZZWFyUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgIGJsb2NrOiBjdXJyZW50VmFyaWFudCA9PT0gJ3N0YXRpYycgPyAnbmVhcmVzdCcgOiAnY2VudGVyJyxcbiAgICAgICAgICBiZWhhdmlvcjogYW5pbWF0ZVllYXJTY3JvbGxpbmcgPyAnc21vb3RoJyA6ICdhdXRvJ1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gY2FsbCB3aXRob3V0IGFyZ3VtZW50cyBpbiBjYXNlIHdoZW4gc2Nyb2xsSW50b1ZpZXcgd29ya3MgaW1wcm9wZXJseSAoZS5nLiBGaXJlZm94IDUyLTU3KVxuICAgICAgICBzZWxlY3RlZFllYXJSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgdmFyIGN1cnJlbnRZZWFyID0gdXRpbHMuZ2V0WWVhcihkYXRlKTtcbiAgdmFyIG9uWWVhclNlbGVjdCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh5ZWFyKSB7XG4gICAgdmFyIG5ld0RhdGUgPSB1dGlscy5zZXRZZWFyKGRhdGUsIHllYXIpO1xuXG4gICAgaWYgKG9uWWVhckNoYW5nZSkge1xuICAgICAgb25ZZWFyQ2hhbmdlKG5ld0RhdGUpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKG5ld0RhdGUsIHRydWUpO1xuICB9LCBbZGF0ZSwgb25DaGFuZ2UsIG9uWWVhckNoYW5nZSwgdXRpbHNdKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5jb250YWluZXJcbiAgfSwgdXRpbHMuZ2V0WWVhclJhbmdlKG1pbkRhdGUsIG1heERhdGUpLm1hcChmdW5jdGlvbiAoeWVhcikge1xuICAgIHZhciB5ZWFyTnVtYmVyID0gdXRpbHMuZ2V0WWVhcih5ZWFyKTtcbiAgICB2YXIgc2VsZWN0ZWQgPSB5ZWFyTnVtYmVyID09PSBjdXJyZW50WWVhcjtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChZZWFyJDEsIHtcbiAgICAgIGtleTogdXRpbHMuZ2V0WWVhclRleHQoeWVhciksXG4gICAgICBzZWxlY3RlZDogc2VsZWN0ZWQsXG4gICAgICB2YWx1ZTogeWVhck51bWJlcixcbiAgICAgIG9uU2VsZWN0OiBvblllYXJTZWxlY3QsXG4gICAgICByZWY6IHNlbGVjdGVkID8gc2VsZWN0ZWRZZWFyUmVmIDogdW5kZWZpbmVkLFxuICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4oZGlzYWJsZVBhc3QgJiYgdXRpbHMuaXNCZWZvcmVZZWFyKHllYXIsIHV0aWxzLmRhdGUoKSkgfHwgZGlzYWJsZUZ1dHVyZSAmJiB1dGlscy5pc0FmdGVyWWVhcih5ZWFyLCB1dGlscy5kYXRlKCkpKVxuICAgIH0sIHV0aWxzLmdldFllYXJUZXh0KHllYXIpKTtcbiAgfSkpO1xufTtcblxudmFyIHVzZVN0eWxlcyQyID0gbWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBmbGV4OiAnMSAwIDMzLjMzJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgaGVpZ2h0OiA3NSxcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnZm9udC1zaXplJywge1xuICAgICAgICBkdXJhdGlvbjogJzEwMG1zJ1xuICAgICAgfSksXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW1cbiAgICAgIH1cbiAgICB9LFxuICAgIG1vbnRoU2VsZWN0ZWQ6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bVxuICAgIH0sXG4gICAgbW9udGhEaXNhYmxlZDoge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5oaW50XG4gICAgfVxuICB9O1xufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc01vbnRoJ1xufSk7XG52YXIgTW9udGggPSBmdW5jdGlvbiBNb250aChfcmVmKSB7XG4gIHZhciBzZWxlY3RlZCA9IF9yZWYuc2VsZWN0ZWQsXG4gICAgICBvblNlbGVjdCA9IF9yZWYub25TZWxlY3QsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJzZWxlY3RlZFwiLCBcIm9uU2VsZWN0XCIsIFwiZGlzYWJsZWRcIiwgXCJ2YWx1ZVwiLCBcImNoaWxkcmVuXCJdKTtcblxuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcyQyKCk7XG4gIHZhciBoYW5kbGVTZWxlY3Rpb24gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgb25TZWxlY3QodmFsdWUpO1xuICB9LCBbb25TZWxlY3QsIHZhbHVlXSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIF9leHRlbmRzKHtcbiAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgIGNvbXBvbmVudDogXCJkaXZcIixcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBzZWxlY3RlZCAmJiBjbGFzc2VzLm1vbnRoU2VsZWN0ZWQsIGRpc2FibGVkICYmIGNsYXNzZXMubW9udGhEaXNhYmxlZCksXG4gICAgdGFiSW5kZXg6IGRpc2FibGVkID8gLTEgOiAwLFxuICAgIG9uQ2xpY2s6IGhhbmRsZVNlbGVjdGlvbixcbiAgICBvbktleVByZXNzOiBoYW5kbGVTZWxlY3Rpb24sXG4gICAgY29sb3I6IHNlbGVjdGVkID8gJ3ByaW1hcnknIDogdW5kZWZpbmVkLFxuICAgIHZhcmlhbnQ6IHNlbGVjdGVkID8gJ2g1JyA6ICdzdWJ0aXRsZTEnLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9LCBvdGhlcikpO1xufTtcbk1vbnRoLmRpc3BsYXlOYW1lID0gJ01vbnRoJztcblxudmFyIHVzZVN0eWxlcyQzID0gbWFrZVN0eWxlcyh7XG4gIGNvbnRhaW5lcjoge1xuICAgIHdpZHRoOiAzMTAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgYWxpZ25Db250ZW50OiAnc3RyZXRjaCdcbiAgfVxufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc01vbnRoU2VsZWN0aW9uJ1xufSk7XG52YXIgTW9udGhTZWxlY3Rpb24gPSBmdW5jdGlvbiBNb250aFNlbGVjdGlvbihfcmVmKSB7XG4gIHZhciBkaXNhYmxlUGFzdCA9IF9yZWYuZGlzYWJsZVBhc3QsXG4gICAgICBkaXNhYmxlRnV0dXJlID0gX3JlZi5kaXNhYmxlRnV0dXJlLFxuICAgICAgbWluRGF0ZSA9IF9yZWYubWluRGF0ZSxcbiAgICAgIG1heERhdGUgPSBfcmVmLm1heERhdGUsXG4gICAgICBkYXRlID0gX3JlZi5kYXRlLFxuICAgICAgb25Nb250aENoYW5nZSA9IF9yZWYub25Nb250aENoYW5nZSxcbiAgICAgIG9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZTtcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMkMygpO1xuICB2YXIgY3VycmVudE1vbnRoID0gdXRpbHMuZ2V0TW9udGgoZGF0ZSk7XG5cbiAgdmFyIHNob3VsZERpc2FibGVNb250aCA9IGZ1bmN0aW9uIHNob3VsZERpc2FibGVNb250aChtb250aCkge1xuICAgIHZhciBub3cgPSB1dGlscy5kYXRlKCk7XG4gICAgdmFyIHV0aWxNaW5EYXRlID0gdXRpbHMuZGF0ZShtaW5EYXRlKTtcbiAgICB2YXIgdXRpbE1heERhdGUgPSB1dGlscy5kYXRlKG1heERhdGUpO1xuICAgIHZhciBmaXJzdEVuYWJsZWRNb250aCA9IHV0aWxzLnN0YXJ0T2ZNb250aChkaXNhYmxlUGFzdCAmJiB1dGlscy5pc0FmdGVyKG5vdywgdXRpbE1pbkRhdGUpID8gbm93IDogdXRpbE1pbkRhdGUpO1xuICAgIHZhciBsYXN0RW5hYmxlZE1vbnRoID0gdXRpbHMuc3RhcnRPZk1vbnRoKGRpc2FibGVGdXR1cmUgJiYgdXRpbHMuaXNCZWZvcmUobm93LCB1dGlsTWF4RGF0ZSkgPyBub3cgOiB1dGlsTWF4RGF0ZSk7XG4gICAgdmFyIGlzQmVmb3JlRmlyc3RFbmFibGVkID0gdXRpbHMuaXNCZWZvcmUobW9udGgsIGZpcnN0RW5hYmxlZE1vbnRoKTtcbiAgICB2YXIgaXNBZnRlckxhc3RFbmFibGVkID0gdXRpbHMuaXNBZnRlcihtb250aCwgbGFzdEVuYWJsZWRNb250aCk7XG4gICAgcmV0dXJuIGlzQmVmb3JlRmlyc3RFbmFibGVkIHx8IGlzQWZ0ZXJMYXN0RW5hYmxlZDtcbiAgfTtcblxuICB2YXIgb25Nb250aFNlbGVjdCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChtb250aCkge1xuICAgIHZhciBuZXdEYXRlID0gdXRpbHMuc2V0TW9udGgoZGF0ZSwgbW9udGgpO1xuICAgIG9uQ2hhbmdlKG5ld0RhdGUsIHRydWUpO1xuXG4gICAgaWYgKG9uTW9udGhDaGFuZ2UpIHtcbiAgICAgIG9uTW9udGhDaGFuZ2UobmV3RGF0ZSk7XG4gICAgfVxuICB9LCBbZGF0ZSwgb25DaGFuZ2UsIG9uTW9udGhDaGFuZ2UsIHV0aWxzXSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuY29udGFpbmVyXG4gIH0sIHV0aWxzLmdldE1vbnRoQXJyYXkoZGF0ZSkubWFwKGZ1bmN0aW9uIChtb250aCkge1xuICAgIHZhciBtb250aE51bWJlciA9IHV0aWxzLmdldE1vbnRoKG1vbnRoKTtcbiAgICB2YXIgbW9udGhUZXh0ID0gdXRpbHMuZm9ybWF0KG1vbnRoLCAnTU1NJyk7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoTW9udGgsIHtcbiAgICAgIGtleTogbW9udGhUZXh0LFxuICAgICAgdmFsdWU6IG1vbnRoTnVtYmVyLFxuICAgICAgc2VsZWN0ZWQ6IG1vbnRoTnVtYmVyID09PSBjdXJyZW50TW9udGgsXG4gICAgICBvblNlbGVjdDogb25Nb250aFNlbGVjdCxcbiAgICAgIGRpc2FibGVkOiBzaG91bGREaXNhYmxlTW9udGgobW9udGgpXG4gICAgfSwgbW9udGhUZXh0KTtcbiAgfSkpO1xufTtcblxudmFyIGdldE9yaWVudGF0aW9uID0gZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAncG9ydHJhaXQnO1xuICB9XG5cbiAgaWYgKHdpbmRvdy5zY3JlZW4gJiYgd2luZG93LnNjcmVlbi5vcmllbnRhdGlvbiAmJiB3aW5kb3cuc2NyZWVuLm9yaWVudGF0aW9uLmFuZ2xlKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHdpbmRvdy5zY3JlZW4ub3JpZW50YXRpb24uYW5nbGUpID09PSA5MCA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0JztcbiAgfSAvLyBTdXBwb3J0IElPUyBzYWZhcmlcblxuXG4gIGlmICh3aW5kb3cub3JpZW50YXRpb24pIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoTnVtYmVyKHdpbmRvdy5vcmllbnRhdGlvbikpID09PSA5MCA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0JztcbiAgfVxuXG4gIHJldHVybiAncG9ydHJhaXQnO1xufTtcblxuZnVuY3Rpb24gdXNlSXNMYW5kc2NhcGUoY3VzdG9tT3JpZW50YXRpb24pIHtcbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IHVzZVN0YXRlKGdldE9yaWVudGF0aW9uKCkpLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBvcmllbnRhdGlvbiA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRPcmllbnRhdGlvbiA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIGV2ZW50SGFuZGxlciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2V0T3JpZW50YXRpb24oZ2V0T3JpZW50YXRpb24oKSk7XG4gIH0sIFtdKTtcbiAgdXNlSXNvbW9ycGhpY0VmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgZXZlbnRIYW5kbGVyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIGV2ZW50SGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW2V2ZW50SGFuZGxlcl0pO1xuICB2YXIgb3JpZW50YXRpb25Ub1VzZSA9IGN1c3RvbU9yaWVudGF0aW9uIHx8IG9yaWVudGF0aW9uO1xuICByZXR1cm4gb3JpZW50YXRpb25Ub1VzZSA9PT0gJ2xhbmRzY2FwZSc7XG59XG5cbmZ1bmN0aW9uIG93bktleXMkMShvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQxKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkMShzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQxKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciB2aWV3c01hcCA9IHtcbiAgeWVhcjogWWVhclNlbGVjdGlvbixcbiAgbW9udGg6IE1vbnRoU2VsZWN0aW9uLFxuICBkYXRlOiBDYWxlbmRhcixcbiAgaG91cnM6IENsb2NrVmlldyxcbiAgbWludXRlczogQ2xvY2tWaWV3LFxuICBzZWNvbmRzOiBDbG9ja1ZpZXdcbn07XG52YXIgdXNlU3R5bGVzJDQgPSBtYWtlU3R5bGVzKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gIH0sXG4gIGNvbnRhaW5lckxhbmRzY2FwZToge1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnXG4gIH0sXG4gIHBpY2tlclZpZXc6IHtcbiAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxuICAgIG1pbkhlaWdodDogVklFV19IRUlHSFQsXG4gICAgbWluV2lkdGg6IERJQUxPR19XSURUSCxcbiAgICBtYXhXaWR0aDogRElBTE9HX1dJRFRIX1dJREVSLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgfSxcbiAgcGlja2VyVmlld0xhbmRzY2FwZToge1xuICAgIHBhZGRpbmc6ICcwIDhweCdcbiAgfVxufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc0Jhc2VQaWNrZXInXG59KTtcbnZhciBQaWNrZXIgPSBmdW5jdGlvbiBQaWNrZXIoX3JlZikge1xuICB2YXIgZGF0ZSA9IF9yZWYuZGF0ZSxcbiAgICAgIHZpZXdzID0gX3JlZi52aWV3cyxcbiAgICAgIGRpc2FibGVUb29sYmFyID0gX3JlZi5kaXNhYmxlVG9vbGJhcixcbiAgICAgIG9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZSxcbiAgICAgIG9wZW5UbyA9IF9yZWYub3BlblRvLFxuICAgICAgdW5wYXJzZWRNaW5EYXRlID0gX3JlZi5taW5EYXRlLFxuICAgICAgdW5wYXJzZWRNYXhEYXRlID0gX3JlZi5tYXhEYXRlLFxuICAgICAgVG9vbGJhckNvbXBvbmVudCA9IF9yZWYuVG9vbGJhckNvbXBvbmVudCxcbiAgICAgIG9yaWVudGF0aW9uID0gX3JlZi5vcmllbnRhdGlvbixcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiZGF0ZVwiLCBcInZpZXdzXCIsIFwiZGlzYWJsZVRvb2xiYXJcIiwgXCJvbkNoYW5nZVwiLCBcIm9wZW5Ub1wiLCBcIm1pbkRhdGVcIiwgXCJtYXhEYXRlXCIsIFwiVG9vbGJhckNvbXBvbmVudFwiLCBcIm9yaWVudGF0aW9uXCJdKTtcblxuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcyQ0KCk7XG4gIHZhciBpc0xhbmRzY2FwZSA9IHVzZUlzTGFuZHNjYXBlKG9yaWVudGF0aW9uKTtcblxuICB2YXIgX3VzZVZpZXdzID0gdXNlVmlld3Modmlld3MsIG9wZW5Ubywgb25DaGFuZ2UpLFxuICAgICAgb3BlblZpZXcgPSBfdXNlVmlld3Mub3BlblZpZXcsXG4gICAgICBzZXRPcGVuVmlldyA9IF91c2VWaWV3cy5zZXRPcGVuVmlldyxcbiAgICAgIGhhbmRsZUNoYW5nZUFuZE9wZW5OZXh0ID0gX3VzZVZpZXdzLmhhbmRsZUNoYW5nZUFuZE9wZW5OZXh0O1xuXG4gIHZhciBtaW5EYXRlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHV0aWxzLmRhdGUodW5wYXJzZWRNaW5EYXRlKTtcbiAgfSwgW3VucGFyc2VkTWluRGF0ZSwgdXRpbHNdKTtcbiAgdmFyIG1heERhdGUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdXRpbHMuZGF0ZSh1bnBhcnNlZE1heERhdGUpO1xuICB9LCBbdW5wYXJzZWRNYXhEYXRlLCB1dGlsc10pO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuY29udGFpbmVyLCBpc0xhbmRzY2FwZSAmJiBjbGFzc2VzLmNvbnRhaW5lckxhbmRzY2FwZSlcbiAgfSwgIWRpc2FibGVUb29sYmFyICYmIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckNvbXBvbmVudCwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICB2aWV3czogdmlld3MsXG4gICAgaXNMYW5kc2NhcGU6IGlzTGFuZHNjYXBlLFxuICAgIGRhdGU6IGRhdGUsXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgIHNldE9wZW5WaWV3OiBzZXRPcGVuVmlldyxcbiAgICBvcGVuVmlldzogb3BlblZpZXdcbiAgfSkpLCBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5waWNrZXJWaWV3LCBpc0xhbmRzY2FwZSAmJiBjbGFzc2VzLnBpY2tlclZpZXdMYW5kc2NhcGUpXG4gIH0sIG9wZW5WaWV3ID09PSAneWVhcicgJiYgY3JlYXRlRWxlbWVudChZZWFyU2VsZWN0aW9uLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIGRhdGU6IGRhdGUsXG4gICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZUFuZE9wZW5OZXh0LFxuICAgIG1pbkRhdGU6IG1pbkRhdGUsXG4gICAgbWF4RGF0ZTogbWF4RGF0ZVxuICB9KSksIG9wZW5WaWV3ID09PSAnbW9udGgnICYmIGNyZWF0ZUVsZW1lbnQoTW9udGhTZWxlY3Rpb24sIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgZGF0ZTogZGF0ZSxcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlQW5kT3Blbk5leHQsXG4gICAgbWluRGF0ZTogbWluRGF0ZSxcbiAgICBtYXhEYXRlOiBtYXhEYXRlXG4gIH0pKSwgb3BlblZpZXcgPT09ICdkYXRlJyAmJiBjcmVhdGVFbGVtZW50KENhbGVuZGFyLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIGRhdGU6IGRhdGUsXG4gICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZUFuZE9wZW5OZXh0LFxuICAgIG1pbkRhdGU6IG1pbkRhdGUsXG4gICAgbWF4RGF0ZTogbWF4RGF0ZVxuICB9KSksIChvcGVuVmlldyA9PT0gJ2hvdXJzJyB8fCBvcGVuVmlldyA9PT0gJ21pbnV0ZXMnIHx8IG9wZW5WaWV3ID09PSAnc2Vjb25kcycpICYmIGNyZWF0ZUVsZW1lbnQoQ2xvY2tWaWV3LCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIGRhdGU6IGRhdGUsXG4gICAgdHlwZTogb3BlblZpZXcsXG4gICAgb25Ib3VyQ2hhbmdlOiBoYW5kbGVDaGFuZ2VBbmRPcGVuTmV4dCxcbiAgICBvbk1pbnV0ZXNDaGFuZ2U6IGhhbmRsZUNoYW5nZUFuZE9wZW5OZXh0LFxuICAgIG9uU2Vjb25kc0NoYW5nZTogaGFuZGxlQ2hhbmdlQW5kT3Blbk5leHRcbiAgfSkpKSk7XG59O1xuUGlja2VyLmRlZmF1bHRQcm9wcyA9IF9vYmplY3RTcHJlYWQkMSh7fSwgZGF0ZVBpY2tlckRlZmF1bHRQcm9wcywge1xuICB2aWV3czogT2JqZWN0LmtleXModmlld3NNYXApXG59KTtcblxuZXhwb3J0IHsgUGlja2VyIGFzIFAsIGRhdGVUaW1lUGlja2VyRGVmYXVsdFByb3BzIGFzIGEsIGRhdGVQaWNrZXJEZWZhdWx0UHJvcHMgYXMgZCwgdGltZVBpY2tlckRlZmF1bHRQcm9wcyBhcyB0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1QaWNrZXItY2NkOWJhOTAuanMubWFwXG4iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCAncmVhY3QnO1xuaW1wb3J0ICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHUgYXMgdXNlVXRpbHMgfSBmcm9tICcuL3VzZVV0aWxzLWNmYjk2YWM5LmpzJztcbmltcG9ydCAnY2xzeCc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgbSBhcyBtYWtlUGlja2VyV2l0aFN0YXRlLCBhIGFzIFB1cmVEYXRlSW5wdXQsIHUgYXMgdXNlUGlja2VyU3RhdGUsIEsgYXMgS2V5Ym9hcmREYXRlSW5wdXQsIGIgYXMgdXNlS2V5Ym9hcmRQaWNrZXJTdGF0ZSwgcCBhcyBwaWNrMTJoT3IyNGhGb3JtYXQgfSBmcm9tICcuL21ha2VQaWNrZXJXaXRoU3RhdGUtNWE3OWNiOGEuanMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCAnLi9XcmFwcGVyLTI0MTk2NmQ3LmpzJztcbmltcG9ydCAnLi9DYWxlbmRhci0xMWFlNjFmNi5qcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XG5pbXBvcnQgJ3JpZm0nO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9TdmdJY29uJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheSc7XG5pbXBvcnQgeyB0IGFzIHRpbWVQaWNrZXJEZWZhdWx0UHJvcHMgfSBmcm9tICcuL1BpY2tlci1jY2Q5YmE5MC5qcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cyc7XG5pbXBvcnQgJy4vRGF5LmpzJztcbmltcG9ydCAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXInO1xuaW1wb3J0ICcuL0Nsb2NrLTQ4ZmRlOTc1LmpzJztcbmltcG9ydCAnLi9DbG9ja1ZpZXcuanMnO1xuaW1wb3J0IHsgVCBhcyBUaW1lUGlja2VyVG9vbGJhciB9IGZyb20gJy4vVGltZVBpY2tlclRvb2xiYXItODExMDBmYWIuanMnO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgZGVmYXVsdFByb3BzID0gX29iamVjdFNwcmVhZCh7fSwgdGltZVBpY2tlckRlZmF1bHRQcm9wcywge1xuICBvcGVuVG86ICdob3VycycsXG4gIHZpZXdzOiBbJ2hvdXJzJywgJ21pbnV0ZXMnXVxufSk7XG5cbmZ1bmN0aW9uIHVzZU9wdGlvbnMocHJvcHMpIHtcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcbiAgcmV0dXJuIHtcbiAgICBnZXREZWZhdWx0Rm9ybWF0OiBmdW5jdGlvbiBnZXREZWZhdWx0Rm9ybWF0KCkge1xuICAgICAgcmV0dXJuIHBpY2sxMmhPcjI0aEZvcm1hdChwcm9wcy5mb3JtYXQsIHByb3BzLmFtcG0sIHtcbiAgICAgICAgJzEyaCc6IHV0aWxzLnRpbWUxMmhGb3JtYXQsXG4gICAgICAgICcyNGgnOiB1dGlscy50aW1lMjRoRm9ybWF0XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBUaW1lUGlja2VyID0gbWFrZVBpY2tlcldpdGhTdGF0ZSh7XG4gIHVzZU9wdGlvbnM6IHVzZU9wdGlvbnMsXG4gIElucHV0OiBQdXJlRGF0ZUlucHV0LFxuICB1c2VTdGF0ZTogdXNlUGlja2VyU3RhdGUsXG4gIERlZmF1bHRUb29sYmFyQ29tcG9uZW50OiBUaW1lUGlja2VyVG9vbGJhclxufSk7XG52YXIgS2V5Ym9hcmRUaW1lUGlja2VyID0gbWFrZVBpY2tlcldpdGhTdGF0ZSh7XG4gIHVzZU9wdGlvbnM6IHVzZU9wdGlvbnMsXG4gIElucHV0OiBLZXlib2FyZERhdGVJbnB1dCxcbiAgdXNlU3RhdGU6IHVzZUtleWJvYXJkUGlja2VyU3RhdGUsXG4gIERlZmF1bHRUb29sYmFyQ29tcG9uZW50OiBUaW1lUGlja2VyVG9vbGJhcixcbiAgZ2V0Q3VzdG9tUHJvcHM6IGZ1bmN0aW9uIGdldEN1c3RvbVByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZnVzZTogcHJvcHMuYW1wbSA/IC9bXlxcZGFwXSsvZ2kgOiAvW15cXGRdKy9naVxuICAgIH07XG4gIH1cbn0pO1xuVGltZVBpY2tlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5LZXlib2FyZFRpbWVQaWNrZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgeyBLZXlib2FyZFRpbWVQaWNrZXIsIFRpbWVQaWNrZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRpbWVQaWNrZXIuanMubWFwXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHUgYXMgdXNlVXRpbHMgfSBmcm9tICcuL3VzZVV0aWxzLWNmYjk2YWM5LmpzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgUCBhcyBQaWNrZXJUb29sYmFyLCBUIGFzIFRvb2xiYXJCdXR0b24sIGMgYXMgVG9vbGJhclRleHQgfSBmcm9tICcuL21ha2VQaWNrZXJXaXRoU3RhdGUtNWE3OWNiOGEuanMnO1xuaW1wb3J0IHsgYSBhcyBhcnJheUluY2x1ZGVzIH0gZnJvbSAnLi9XcmFwcGVyLTI0MTk2NmQ3LmpzJztcbmltcG9ydCB7IGIgYXMgQ2xvY2tUeXBlLCBnIGFzIGdldE1lcmlkaWVtLCBjIGFzIGNvbnZlcnRUb01lcmlkaWVtIH0gZnJvbSAnLi9DbG9jay00OGZkZTk3NS5qcyc7XG5cbnZhciB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgdG9vbGJhckxhbmRzY2FwZToge1xuICAgIGZsZXhXcmFwOiAnd3JhcCdcbiAgfSxcbiAgdG9vbGJhckFtcG1MZWZ0UGFkZGluZzoge1xuICAgIHBhZGRpbmdMZWZ0OiA1MFxuICB9LFxuICBzZXBhcmF0b3I6IHtcbiAgICBtYXJnaW46ICcwIDRweCAwIDJweCcsXG4gICAgY3Vyc29yOiAnZGVmYXVsdCdcbiAgfSxcbiAgaG91ck1pbnV0ZUxhYmVsOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCdcbiAgfSxcbiAgaG91ck1pbnV0ZUxhYmVsQW1wbUxhbmRzY2FwZToge1xuICAgIG1hcmdpblRvcDogJ2F1dG8nXG4gIH0sXG4gIGhvdXJNaW51dGVMYWJlbFJldmVyc2U6IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93LXJldmVyc2UnXG4gIH0sXG4gIGFtcG1TZWxlY3Rpb246IHtcbiAgICBtYXJnaW5MZWZ0OiAyMCxcbiAgICBtYXJnaW5SaWdodDogLTIwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICB9LFxuICBhbXBtTGFuZHNjYXBlOiB7XG4gICAgbWFyZ2luOiAnNHB4IDAgYXV0bycsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxuICAgIGZsZXhCYXNpczogJzEwMCUnXG4gIH0sXG4gIGFtcG1TZWxlY3Rpb25XaXRoU2Vjb25kczoge1xuICAgIG1hcmdpbkxlZnQ6IDE1LFxuICAgIG1hcmdpblJpZ2h0OiAxMFxuICB9LFxuICBhbXBtTGFiZWw6IHtcbiAgICBmb250U2l6ZTogMThcbiAgfVxufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc1RpbWVQaWNrZXJUb29sYmFyJ1xufSk7XG5mdW5jdGlvbiB1c2VNZXJpZGllbU1vZGUoZGF0ZSwgYW1wbSwgb25DaGFuZ2UpIHtcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcbiAgdmFyIG1lcmlkaWVtTW9kZSA9IGdldE1lcmlkaWVtKGRhdGUsIHV0aWxzKTtcbiAgdmFyIGhhbmRsZU1lcmlkaWVtQ2hhbmdlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG1vZGUpIHtcbiAgICB2YXIgdGltZVdpdGhNZXJpZGllbSA9IGNvbnZlcnRUb01lcmlkaWVtKGRhdGUsIG1vZGUsIEJvb2xlYW4oYW1wbSksIHV0aWxzKTtcbiAgICBvbkNoYW5nZSh0aW1lV2l0aE1lcmlkaWVtLCBmYWxzZSk7XG4gIH0sIFthbXBtLCBkYXRlLCBvbkNoYW5nZSwgdXRpbHNdKTtcbiAgcmV0dXJuIHtcbiAgICBtZXJpZGllbU1vZGU6IG1lcmlkaWVtTW9kZSxcbiAgICBoYW5kbGVNZXJpZGllbUNoYW5nZTogaGFuZGxlTWVyaWRpZW1DaGFuZ2VcbiAgfTtcbn1cbnZhciBUaW1lUGlja2VyVG9vbGJhciA9IGZ1bmN0aW9uIFRpbWVQaWNrZXJUb29sYmFyKF9yZWYpIHtcbiAgdmFyIGRhdGUgPSBfcmVmLmRhdGUsXG4gICAgICB2aWV3cyA9IF9yZWYudmlld3MsXG4gICAgICBhbXBtID0gX3JlZi5hbXBtLFxuICAgICAgb3BlblZpZXcgPSBfcmVmLm9wZW5WaWV3LFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgaXNMYW5kc2NhcGUgPSBfcmVmLmlzTGFuZHNjYXBlLFxuICAgICAgc2V0T3BlblZpZXcgPSBfcmVmLnNldE9wZW5WaWV3O1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHZhciBfdXNlTWVyaWRpZW1Nb2RlID0gdXNlTWVyaWRpZW1Nb2RlKGRhdGUsIGFtcG0sIG9uQ2hhbmdlKSxcbiAgICAgIG1lcmlkaWVtTW9kZSA9IF91c2VNZXJpZGllbU1vZGUubWVyaWRpZW1Nb2RlLFxuICAgICAgaGFuZGxlTWVyaWRpZW1DaGFuZ2UgPSBfdXNlTWVyaWRpZW1Nb2RlLmhhbmRsZU1lcmlkaWVtQ2hhbmdlO1xuXG4gIHZhciBjbG9ja1R5cG9ncmFwaHlWYXJpYW50ID0gaXNMYW5kc2NhcGUgPyAnaDMnIDogJ2gyJztcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoUGlja2VyVG9vbGJhciwge1xuICAgIGlzTGFuZHNjYXBlOiBpc0xhbmRzY2FwZSxcbiAgICBjbGFzc05hbWU6IGNsc3goaXNMYW5kc2NhcGUgPyBjbGFzc2VzLnRvb2xiYXJMYW5kc2NhcGUgOiBhbXBtICYmIGNsYXNzZXMudG9vbGJhckFtcG1MZWZ0UGFkZGluZylcbiAgfSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuaG91ck1pbnV0ZUxhYmVsLCBhbXBtICYmIGlzTGFuZHNjYXBlICYmIGNsYXNzZXMuaG91ck1pbnV0ZUxhYmVsQW1wbUxhbmRzY2FwZSwge1xuICAgICAgcnRsOiBjbGFzc2VzLmhvdXJNaW51dGVMYWJlbFJldmVyc2VcbiAgICB9W3RoZW1lLmRpcmVjdGlvbl0pXG4gIH0sIGFycmF5SW5jbHVkZXModmlld3MsICdob3VycycpICYmIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IGNsb2NrVHlwb2dyYXBoeVZhcmlhbnQsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBzZXRPcGVuVmlldyhDbG9ja1R5cGUuSE9VUlMpO1xuICAgIH0sXG4gICAgc2VsZWN0ZWQ6IG9wZW5WaWV3ID09PSBDbG9ja1R5cGUuSE9VUlMsXG4gICAgbGFiZWw6IHV0aWxzLmdldEhvdXJUZXh0KGRhdGUsIEJvb2xlYW4oYW1wbSkpXG4gIH0pLCBhcnJheUluY2x1ZGVzKHZpZXdzLCBbJ2hvdXJzJywgJ21pbnV0ZXMnXSkgJiYgY3JlYXRlRWxlbWVudChUb29sYmFyVGV4dCwge1xuICAgIGxhYmVsOiBcIjpcIixcbiAgICB2YXJpYW50OiBjbG9ja1R5cG9ncmFwaHlWYXJpYW50LFxuICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuc2VwYXJhdG9yXG4gIH0pLCBhcnJheUluY2x1ZGVzKHZpZXdzLCAnbWludXRlcycpICYmIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IGNsb2NrVHlwb2dyYXBoeVZhcmlhbnQsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBzZXRPcGVuVmlldyhDbG9ja1R5cGUuTUlOVVRFUyk7XG4gICAgfSxcbiAgICBzZWxlY3RlZDogb3BlblZpZXcgPT09IENsb2NrVHlwZS5NSU5VVEVTLFxuICAgIGxhYmVsOiB1dGlscy5nZXRNaW51dGVUZXh0KGRhdGUpXG4gIH0pLCBhcnJheUluY2x1ZGVzKHZpZXdzLCBbJ21pbnV0ZXMnLCAnc2Vjb25kcyddKSAmJiBjcmVhdGVFbGVtZW50KFRvb2xiYXJUZXh0LCB7XG4gICAgdmFyaWFudDogXCJoMlwiLFxuICAgIGxhYmVsOiBcIjpcIixcbiAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnNlcGFyYXRvclxuICB9KSwgYXJyYXlJbmNsdWRlcyh2aWV3cywgJ3NlY29uZHMnKSAmJiBjcmVhdGVFbGVtZW50KFRvb2xiYXJCdXR0b24sIHtcbiAgICB2YXJpYW50OiBcImgyXCIsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBzZXRPcGVuVmlldyhDbG9ja1R5cGUuU0VDT05EUyk7XG4gICAgfSxcbiAgICBzZWxlY3RlZDogb3BlblZpZXcgPT09IENsb2NrVHlwZS5TRUNPTkRTLFxuICAgIGxhYmVsOiB1dGlscy5nZXRTZWNvbmRUZXh0KGRhdGUpXG4gIH0pKSwgYW1wbSAmJiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5hbXBtU2VsZWN0aW9uLCBpc0xhbmRzY2FwZSAmJiBjbGFzc2VzLmFtcG1MYW5kc2NhcGUsIGFycmF5SW5jbHVkZXModmlld3MsICdzZWNvbmRzJykgJiYgY2xhc3Nlcy5hbXBtU2VsZWN0aW9uV2l0aFNlY29uZHMpXG4gIH0sIGNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwge1xuICAgIGRpc2FibGVSaXBwbGU6IHRydWUsXG4gICAgdmFyaWFudDogXCJzdWJ0aXRsZTFcIixcbiAgICBzZWxlY3RlZDogbWVyaWRpZW1Nb2RlID09PSAnYW0nLFxuICAgIHR5cG9ncmFwaHlDbGFzc05hbWU6IGNsYXNzZXMuYW1wbUxhYmVsLFxuICAgIGxhYmVsOiB1dGlscy5nZXRNZXJpZGllbVRleHQoJ2FtJyksXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiBoYW5kbGVNZXJpZGllbUNoYW5nZSgnYW0nKTtcbiAgICB9XG4gIH0pLCBjcmVhdGVFbGVtZW50KFRvb2xiYXJCdXR0b24sIHtcbiAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLFxuICAgIHZhcmlhbnQ6IFwic3VidGl0bGUxXCIsXG4gICAgc2VsZWN0ZWQ6IG1lcmlkaWVtTW9kZSA9PT0gJ3BtJyxcbiAgICB0eXBvZ3JhcGh5Q2xhc3NOYW1lOiBjbGFzc2VzLmFtcG1MYWJlbCxcbiAgICBsYWJlbDogdXRpbHMuZ2V0TWVyaWRpZW1UZXh0KCdwbScpLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICByZXR1cm4gaGFuZGxlTWVyaWRpZW1DaGFuZ2UoJ3BtJyk7XG4gICAgfVxuICB9KSkpO1xufTtcblxuZXhwb3J0IHsgVGltZVBpY2tlclRvb2xiYXIgYXMgVCwgdXNlTWVyaWRpZW1Nb2RlIGFzIHUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRpbWVQaWNrZXJUb29sYmFyLTgxMTAwZmFiLmpzLm1hcFxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgRnJhZ21lbnQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub2RlLCBib29sLCBvYmplY3QsIGZ1bmMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBQb3BvdmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXInO1xuXG4vKiogVXNlIGl0IGluc3RlYWQgb2YgLmluY2x1ZGVzIG1ldGhvZCBmb3IgSUUgc3VwcG9ydCAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgaXRlbU9ySXRlbXMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbU9ySXRlbXMpKSB7XG4gICAgcmV0dXJuIGl0ZW1Pckl0ZW1zLmV2ZXJ5KGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gYXJyYXkuaW5kZXhPZihpdGVtKSAhPT0gLTE7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gYXJyYXkuaW5kZXhPZihpdGVtT3JJdGVtcykgIT09IC0xO1xufVxuXG52YXIgRElBTE9HX1dJRFRIID0gMzEwO1xudmFyIERJQUxPR19XSURUSF9XSURFUiA9IDMyNTtcbnZhciBWSUVXX0hFSUdIVCA9IDMwNTtcblxudmFyIHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoZnVuY3Rpb24gKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgc3RhdGljV3JhcHBlclJvb3Q6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIG1pbldpZHRoOiBESUFMT0dfV0lEVEgsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyXG4gICAgfVxuICB9O1xufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc1N0YXRpY1dyYXBwZXInXG59KTtcbnZhciBTdGF0aWNXcmFwcGVyID0gZnVuY3Rpb24gU3RhdGljV3JhcHBlcihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuc3RhdGljV3JhcHBlclJvb3QsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0pO1xufTtcblxudmFyIE1vZGFsRGlhbG9nID0gZnVuY3Rpb24gTW9kYWxEaWFsb2coX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IF9yZWYuY2xhc3NlcyxcbiAgICAgIG9uQWNjZXB0ID0gX3JlZi5vbkFjY2VwdCxcbiAgICAgIG9uRGlzbWlzcyA9IF9yZWYub25EaXNtaXNzLFxuICAgICAgb25DbGVhciA9IF9yZWYub25DbGVhcixcbiAgICAgIG9uU2V0VG9kYXkgPSBfcmVmLm9uU2V0VG9kYXksXG4gICAgICBva0xhYmVsID0gX3JlZi5va0xhYmVsLFxuICAgICAgY2FuY2VsTGFiZWwgPSBfcmVmLmNhbmNlbExhYmVsLFxuICAgICAgY2xlYXJMYWJlbCA9IF9yZWYuY2xlYXJMYWJlbCxcbiAgICAgIHRvZGF5TGFiZWwgPSBfcmVmLnRvZGF5TGFiZWwsXG4gICAgICBjbGVhcmFibGUgPSBfcmVmLmNsZWFyYWJsZSxcbiAgICAgIHNob3dUb2RheUJ1dHRvbiA9IF9yZWYuc2hvd1RvZGF5QnV0dG9uLFxuICAgICAgc2hvd1RhYnMgPSBfcmVmLnNob3dUYWJzLFxuICAgICAgd2lkZXIgPSBfcmVmLndpZGVyLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwib25BY2NlcHRcIiwgXCJvbkRpc21pc3NcIiwgXCJvbkNsZWFyXCIsIFwib25TZXRUb2RheVwiLCBcIm9rTGFiZWxcIiwgXCJjYW5jZWxMYWJlbFwiLCBcImNsZWFyTGFiZWxcIiwgXCJ0b2RheUxhYmVsXCIsIFwiY2xlYXJhYmxlXCIsIFwic2hvd1RvZGF5QnV0dG9uXCIsIFwic2hvd1RhYnNcIiwgXCJ3aWRlclwiXSk7XG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoRGlhbG9nLCBfZXh0ZW5kcyh7XG4gICAgcm9sZTogXCJkaWFsb2dcIixcbiAgICBvbkNsb3NlOiBvbkRpc21pc3MsXG4gICAgY2xhc3Nlczoge1xuICAgICAgcGFwZXI6IGNsc3goY2xhc3Nlcy5kaWFsb2dSb290LCB3aWRlciAmJiBjbGFzc2VzLmRpYWxvZ1Jvb3RXaWRlcilcbiAgICB9XG4gIH0sIG90aGVyKSwgY3JlYXRlRWxlbWVudChEaWFsb2dDb250ZW50LCB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5kaWFsb2dcbiAgfSksIGNyZWF0ZUVsZW1lbnQoRGlhbG9nQWN0aW9ucywge1xuICAgIGNsYXNzZXM6IHtcbiAgICAgIHJvb3Q6IGNsc3goKGNsZWFyYWJsZSB8fCBzaG93VG9kYXlCdXR0b24pICYmIGNsYXNzZXMud2l0aEFkZGl0aW9uYWxBY3Rpb24pXG4gICAgfVxuICB9LCBjbGVhcmFibGUgJiYgY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgb25DbGljazogb25DbGVhclxuICB9LCBjbGVhckxhYmVsKSwgc2hvd1RvZGF5QnV0dG9uICYmIGNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7XG4gICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgIG9uQ2xpY2s6IG9uU2V0VG9kYXlcbiAgfSwgdG9kYXlMYWJlbCksIGNhbmNlbExhYmVsICYmIGNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7XG4gICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgIG9uQ2xpY2s6IG9uRGlzbWlzc1xuICB9LCBjYW5jZWxMYWJlbCksIG9rTGFiZWwgJiYgY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgb25DbGljazogb25BY2NlcHRcbiAgfSwgb2tMYWJlbCkpKTtcbn07XG5Nb2RhbERpYWxvZy5kaXNwbGF5TmFtZSA9ICdNb2RhbERpYWxvZyc7XG52YXIgc3R5bGVzID0gY3JlYXRlU3R5bGVzKHtcbiAgZGlhbG9nUm9vdDoge1xuICAgIG1pbldpZHRoOiBESUFMT0dfV0lEVEhcbiAgfSxcbiAgZGlhbG9nUm9vdFdpZGVyOiB7XG4gICAgbWluV2lkdGg6IERJQUxPR19XSURUSF9XSURFUlxuICB9LFxuICBkaWFsb2c6IHtcbiAgICAnJjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgIHBhZGRpbmc6IDBcbiAgICB9XG4gIH0sXG4gIHdpdGhBZGRpdGlvbmFsQWN0aW9uOiB7XG4gICAgLy8gc2V0IGp1c3RpZnlDb250ZW50IHRvIGRlZmF1bHQgdmFsdWUgdG8gZml4IElFMTEgbGF5b3V0IGJ1Z1xuICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZG10cktvdmFsZW5rby9tYXRlcmlhbC11aS1waWNrZXJzL3B1bGwvMjY3XG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgICAnJiA+ICo6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICBtYXJnaW5SaWdodDogJ2F1dG8nXG4gICAgfVxuICB9XG59KTtcbnZhciBNb2RhbERpYWxvZyQxID0gd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVBpY2tlcnNNb2RhbCdcbn0pKE1vZGFsRGlhbG9nKTtcblxudmFyIHVzZUlzb21vcnBoaWNFZmZlY3QgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IHVzZUVmZmVjdCA6IHVzZUxheW91dEVmZmVjdDtcbmZ1bmN0aW9uIHJ1bktleUhhbmRsZXIoZSwga2V5SGFuZGxlcnMpIHtcbiAgdmFyIGhhbmRsZXIgPSBrZXlIYW5kbGVyc1tlLmtleV07XG5cbiAgaWYgKGhhbmRsZXIpIHtcbiAgICBoYW5kbGVyKCk7IC8vIGlmIGV2ZW50IHdhcyBoYW5kbGVkIHByZXZlbnQgb3RoZXIgc2lkZSBlZmZlY3RzIChlLmcuIHBhZ2Ugc2Nyb2xsKVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5mdW5jdGlvbiB1c2VLZXlEb3duKGFjdGl2ZSwga2V5SGFuZGxlcnMpIHtcbiAgdmFyIGtleUhhbmRsZXJzUmVmID0gdXNlUmVmKGtleUhhbmRsZXJzKTtcbiAga2V5SGFuZGxlcnNSZWYuY3VycmVudCA9IGtleUhhbmRsZXJzO1xuICB1c2VJc29tb3JwaGljRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICB2YXIgaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgICAgcnVuS2V5SGFuZGxlcihldmVudCwga2V5SGFuZGxlcnNSZWYuY3VycmVudCk7XG4gICAgICB9O1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbYWN0aXZlXSk7XG59XG5cbnZhciBNb2RhbFdyYXBwZXIgPSBmdW5jdGlvbiBNb2RhbFdyYXBwZXIoX3JlZikge1xuICB2YXIgb3BlbiA9IF9yZWYub3BlbixcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIG9rTGFiZWwgPSBfcmVmLm9rTGFiZWwsXG4gICAgICBjYW5jZWxMYWJlbCA9IF9yZWYuY2FuY2VsTGFiZWwsXG4gICAgICBjbGVhckxhYmVsID0gX3JlZi5jbGVhckxhYmVsLFxuICAgICAgdG9kYXlMYWJlbCA9IF9yZWYudG9kYXlMYWJlbCxcbiAgICAgIHNob3dUb2RheUJ1dHRvbiA9IF9yZWYuc2hvd1RvZGF5QnV0dG9uLFxuICAgICAgY2xlYXJhYmxlID0gX3JlZi5jbGVhcmFibGUsXG4gICAgICBEaWFsb2dQcm9wcyA9IF9yZWYuRGlhbG9nUHJvcHMsXG4gICAgICBzaG93VGFicyA9IF9yZWYuc2hvd1RhYnMsXG4gICAgICB3aWRlciA9IF9yZWYud2lkZXIsXG4gICAgICBJbnB1dENvbXBvbmVudCA9IF9yZWYuSW5wdXRDb21wb25lbnQsXG4gICAgICBEYXRlSW5wdXRQcm9wcyA9IF9yZWYuRGF0ZUlucHV0UHJvcHMsXG4gICAgICBvbkNsZWFyID0gX3JlZi5vbkNsZWFyLFxuICAgICAgb25BY2NlcHQgPSBfcmVmLm9uQWNjZXB0LFxuICAgICAgb25EaXNtaXNzID0gX3JlZi5vbkRpc21pc3MsXG4gICAgICBvblNldFRvZGF5ID0gX3JlZi5vblNldFRvZGF5LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wib3BlblwiLCBcImNoaWxkcmVuXCIsIFwib2tMYWJlbFwiLCBcImNhbmNlbExhYmVsXCIsIFwiY2xlYXJMYWJlbFwiLCBcInRvZGF5TGFiZWxcIiwgXCJzaG93VG9kYXlCdXR0b25cIiwgXCJjbGVhcmFibGVcIiwgXCJEaWFsb2dQcm9wc1wiLCBcInNob3dUYWJzXCIsIFwid2lkZXJcIiwgXCJJbnB1dENvbXBvbmVudFwiLCBcIkRhdGVJbnB1dFByb3BzXCIsIFwib25DbGVhclwiLCBcIm9uQWNjZXB0XCIsIFwib25EaXNtaXNzXCIsIFwib25TZXRUb2RheVwiXSk7XG5cbiAgdXNlS2V5RG93bihvcGVuLCB7XG4gICAgRW50ZXI6IG9uQWNjZXB0XG4gIH0pO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgY3JlYXRlRWxlbWVudChJbnB1dENvbXBvbmVudCwgX2V4dGVuZHMoe30sIG90aGVyLCBEYXRlSW5wdXRQcm9wcykpLCBjcmVhdGVFbGVtZW50KE1vZGFsRGlhbG9nJDEsIF9leHRlbmRzKHtcbiAgICB3aWRlcjogd2lkZXIsXG4gICAgc2hvd1RhYnM6IHNob3dUYWJzLFxuICAgIG9wZW46IG9wZW4sXG4gICAgb25DbGVhcjogb25DbGVhcixcbiAgICBvbkFjY2VwdDogb25BY2NlcHQsXG4gICAgb25EaXNtaXNzOiBvbkRpc21pc3MsXG4gICAgb25TZXRUb2RheTogb25TZXRUb2RheSxcbiAgICBjbGVhckxhYmVsOiBjbGVhckxhYmVsLFxuICAgIHRvZGF5TGFiZWw6IHRvZGF5TGFiZWwsXG4gICAgb2tMYWJlbDogb2tMYWJlbCxcbiAgICBjYW5jZWxMYWJlbDogY2FuY2VsTGFiZWwsXG4gICAgY2xlYXJhYmxlOiBjbGVhcmFibGUsXG4gICAgc2hvd1RvZGF5QnV0dG9uOiBzaG93VG9kYXlCdXR0b24sXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0sIERpYWxvZ1Byb3BzKSkpO1xufTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IE1vZGFsV3JhcHBlci5wcm9wVHlwZXMgPSB7XG4gIG9rTGFiZWw6IG5vZGUsXG4gIGNhbmNlbExhYmVsOiBub2RlLFxuICBjbGVhckxhYmVsOiBub2RlLFxuICBjbGVhcmFibGU6IGJvb2wsXG4gIHRvZGF5TGFiZWw6IG5vZGUsXG4gIHNob3dUb2RheUJ1dHRvbjogYm9vbCxcbiAgRGlhbG9nUHJvcHM6IG9iamVjdFxufSA6IHZvaWQgMDtcbk1vZGFsV3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XG4gIG9rTGFiZWw6ICdPSycsXG4gIGNhbmNlbExhYmVsOiAnQ2FuY2VsJyxcbiAgY2xlYXJMYWJlbDogJ0NsZWFyJyxcbiAgdG9kYXlMYWJlbDogJ1RvZGF5JyxcbiAgY2xlYXJhYmxlOiBmYWxzZSxcbiAgc2hvd1RvZGF5QnV0dG9uOiBmYWxzZVxufTtcblxudmFyIElubGluZVdyYXBwZXIgPSBmdW5jdGlvbiBJbmxpbmVXcmFwcGVyKF9yZWYpIHtcbiAgdmFyIG9wZW4gPSBfcmVmLm9wZW4sXG4gICAgICB3aWRlciA9IF9yZWYud2lkZXIsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBQb3BvdmVyUHJvcHMgPSBfcmVmLlBvcG92ZXJQcm9wcyxcbiAgICAgIG9uQ2xlYXIgPSBfcmVmLm9uQ2xlYXIsXG4gICAgICBvbkRpc21pc3MgPSBfcmVmLm9uRGlzbWlzcyxcbiAgICAgIG9uU2V0VG9kYXkgPSBfcmVmLm9uU2V0VG9kYXksXG4gICAgICBvbkFjY2VwdCA9IF9yZWYub25BY2NlcHQsXG4gICAgICBzaG93VGFicyA9IF9yZWYuc2hvd1RhYnMsXG4gICAgICBEYXRlSW5wdXRQcm9wcyA9IF9yZWYuRGF0ZUlucHV0UHJvcHMsXG4gICAgICBJbnB1dENvbXBvbmVudCA9IF9yZWYuSW5wdXRDb21wb25lbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJvcGVuXCIsIFwid2lkZXJcIiwgXCJjaGlsZHJlblwiLCBcIlBvcG92ZXJQcm9wc1wiLCBcIm9uQ2xlYXJcIiwgXCJvbkRpc21pc3NcIiwgXCJvblNldFRvZGF5XCIsIFwib25BY2NlcHRcIiwgXCJzaG93VGFic1wiLCBcIkRhdGVJbnB1dFByb3BzXCIsIFwiSW5wdXRDb21wb25lbnRcIl0pO1xuXG4gIHZhciByZWYgPSB1c2VSZWYoKTtcbiAgdXNlS2V5RG93bihvcGVuLCB7XG4gICAgRW50ZXI6IG9uQWNjZXB0XG4gIH0pO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgY3JlYXRlRWxlbWVudChJbnB1dENvbXBvbmVudCwgX2V4dGVuZHMoe30sIG90aGVyLCBEYXRlSW5wdXRQcm9wcywge1xuICAgIGlucHV0UmVmOiByZWZcbiAgfSkpLCBjcmVhdGVFbGVtZW50KFBvcG92ZXIsIF9leHRlbmRzKHtcbiAgICBvcGVuOiBvcGVuLFxuICAgIG9uQ2xvc2U6IG9uRGlzbWlzcyxcbiAgICBhbmNob3JFbDogcmVmLmN1cnJlbnQsXG4gICAgYW5jaG9yT3JpZ2luOiB7XG4gICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICBob3Jpem9udGFsOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgdHJhbnNmb3JtT3JpZ2luOiB7XG4gICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICBob3Jpem9udGFsOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0sIFBvcG92ZXJQcm9wcykpKTtcbn07XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBJbmxpbmVXcmFwcGVyLnByb3BUeXBlcyA9IHtcbiAgb25PcGVuOiBmdW5jLFxuICBvbkNsb3NlOiBmdW5jLFxuICBQb3BvdmVyUHJvcHM6IG9iamVjdFxufSA6IHZvaWQgMDtcblxuZnVuY3Rpb24gZ2V0V3JhcHBlckZyb21WYXJpYW50KHZhcmlhbnQpIHtcbiAgc3dpdGNoICh2YXJpYW50KSB7XG4gICAgY2FzZSAnaW5saW5lJzpcbiAgICAgIHJldHVybiBJbmxpbmVXcmFwcGVyO1xuXG4gICAgY2FzZSAnc3RhdGljJzpcbiAgICAgIHJldHVybiBTdGF0aWNXcmFwcGVyO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBNb2RhbFdyYXBwZXI7XG4gIH1cbn1cbnZhciBWYXJpYW50Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG52YXIgV3JhcHBlciA9IGZ1bmN0aW9uIFdyYXBwZXIoX3JlZikge1xuICB2YXIgdmFyaWFudCA9IF9yZWYudmFyaWFudCxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInZhcmlhbnRcIl0pO1xuXG4gIHZhciBDb21wb25lbnQgPSBnZXRXcmFwcGVyRnJvbVZhcmlhbnQodmFyaWFudCk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFZhcmlhbnRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHZhcmlhbnQgfHwgJ2RpYWxvZydcbiAgfSwgY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHByb3BzKSk7XG59O1xuXG5leHBvcnQgeyBESUFMT0dfV0lEVEggYXMgRCwgVmFyaWFudENvbnRleHQgYXMgViwgV3JhcHBlciBhcyBXLCBhcnJheUluY2x1ZGVzIGFzIGEsIFZJRVdfSEVJR0hUIGFzIGIsIERJQUxPR19XSURUSF9XSURFUiBhcyBjLCBydW5LZXlIYW5kbGVyIGFzIHIsIHVzZUlzb21vcnBoaWNFZmZlY3QgYXMgdSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V3JhcHBlci0yNDE5NjZkNy5qcy5tYXBcbiIsImltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0ICdyZWFjdCc7XG5pbXBvcnQgJ3Byb3AtdHlwZXMnO1xuZXhwb3J0IHsgYSBhcyBNdWlQaWNrZXJzQ29udGV4dCwgTSBhcyBNdWlQaWNrZXJzVXRpbHNQcm92aWRlciwgdSBhcyB1c2VVdGlscyB9IGZyb20gJy4vdXNlVXRpbHMtY2ZiOTZhYzkuanMnO1xuaW1wb3J0ICdjbHN4JztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyB1IGFzIHVzZVBpY2tlclN0YXRlIH0gZnJvbSAnLi9tYWtlUGlja2VyV2l0aFN0YXRlLTVhNzljYjhhLmpzJztcbmV4cG9ydCB7IG0gYXMgbWFrZVBpY2tlcldpdGhTdGF0ZSwgYiBhcyB1c2VLZXlib2FyZFBpY2tlclN0YXRlLCB1IGFzIHVzZVBpY2tlclN0YXRlLCB2IGFzIHZhbGlkYXRlIH0gZnJvbSAnLi9tYWtlUGlja2VyV2l0aFN0YXRlLTVhNzljYjhhLmpzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgJy4vV3JhcHBlci0yNDE5NjZkNy5qcyc7XG5leHBvcnQgeyBhIGFzIENhbGVuZGFyIH0gZnJvbSAnLi9DYWxlbmRhci0xMWFlNjFmNi5qcyc7XG5leHBvcnQgeyBEYXRlUGlja2VyLCBLZXlib2FyZERhdGVQaWNrZXIgfSBmcm9tICcuL0RhdGVQaWNrZXIuanMnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnQnO1xuaW1wb3J0ICdyaWZtJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvbic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXknO1xuZXhwb3J0IHsgUCBhcyBQaWNrZXIgfSBmcm9tICcuL1BpY2tlci1jY2Q5YmE5MC5qcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERheSB9IGZyb20gJy4vRGF5LmpzJztcbmltcG9ydCAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXInO1xuZXhwb3J0IHsgYSBhcyBDbG9jayB9IGZyb20gJy4vQ2xvY2stNDhmZGU5NzUuanMnO1xuZXhwb3J0IHsgQ2xvY2tWaWV3LCBkZWZhdWx0IGFzIFRpbWVQaWNrZXJWaWV3IH0gZnJvbSAnLi9DbG9ja1ZpZXcuanMnO1xuaW1wb3J0ICcuL1RpbWVQaWNrZXJUb29sYmFyLTgxMTAwZmFiLmpzJztcbmV4cG9ydCB7IEtleWJvYXJkVGltZVBpY2tlciwgVGltZVBpY2tlciB9IGZyb20gJy4vVGltZVBpY2tlci5qcyc7XG5pbXBvcnQgJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9UYWInO1xuaW1wb3J0ICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJzJztcbmltcG9ydCAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuZXhwb3J0IHsgRGF0ZVRpbWVQaWNrZXIsIEtleWJvYXJkRGF0ZVRpbWVQaWNrZXIgfSBmcm9tICcuL0RhdGVUaW1lUGlja2VyLmpzJztcblxuZnVuY3Rpb24gdXNlU3RhdGljU3RhdGUoX3JlZikge1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgX3JlZiRhdXRvT2sgPSBfcmVmLmF1dG9PayxcbiAgICAgIGF1dG9PayA9IF9yZWYkYXV0b09rID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRhdXRvT2ssXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBkZWZhdWx0Rm9ybWF0ID0gX3JlZi5kZWZhdWx0Rm9ybWF0O1xuXG4gIHZhciBfdXNlUGlja2VyU3RhdGUgPSB1c2VQaWNrZXJTdGF0ZSh7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICBhdXRvT2s6IGF1dG9Pa1xuICB9LCB7XG4gICAgLy8ganVzdCBhIHJhbmRvbSBmb3JtYXQsIG1vc3RseSBhbHdheXMgbm90IG5lZWRlZCBmb3IgdXNlcnNcbiAgICBnZXREZWZhdWx0Rm9ybWF0OiBmdW5jdGlvbiBnZXREZWZhdWx0Rm9ybWF0KCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRGb3JtYXQgfHwgJ01NL2RkL3l5eXknO1xuICAgIH1cbiAgfSksXG4gICAgICBwaWNrZXJQcm9wcyA9IF91c2VQaWNrZXJTdGF0ZS5waWNrZXJQcm9wcyxcbiAgICAgIHdyYXBwZXJQcm9wcyA9IF91c2VQaWNrZXJTdGF0ZS53cmFwcGVyUHJvcHMsXG4gICAgICBpbnB1dFByb3BzID0gX3VzZVBpY2tlclN0YXRlLmlucHV0UHJvcHM7XG5cbiAgcmV0dXJuIHtcbiAgICBwaWNrZXJQcm9wczogcGlja2VyUHJvcHMsXG4gICAgd3JhcHBlclByb3BzOiB3cmFwcGVyUHJvcHMsXG4gICAgaW5wdXRQcm9wczogaW5wdXRQcm9wc1xuICB9O1xufVxuXG5leHBvcnQgeyB1c2VTdGF0aWNTdGF0ZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBSZWFjdF9fZGVmYXVsdCwgeyBjcmVhdGVFbGVtZW50LCB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlRGVidWdWYWx1ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYm9vbCwgc3RyaW5nLCBhbnkgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHUgYXMgdXNlVXRpbHMgfSBmcm9tICcuL3VzZVV0aWxzLWNmYjk2YWM5LmpzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIGZhZGUsIHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCB7IFcgYXMgV3JhcHBlciB9IGZyb20gJy4vV3JhcHBlci0yNDE5NjZkNy5qcyc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XG5pbXBvcnQgeyBSaWZtIH0gZnJvbSAncmlmbSc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdmdJY29uJztcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5JztcbmltcG9ydCB7IFAgYXMgUGlja2VyIH0gZnJvbSAnLi9QaWNrZXItY2NkOWJhOTAuanMnO1xuXG52YXIgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHtcbiAgdmFyIHRleHRDb2xvciA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5jb250cmFzdFRleHQgOiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dCh0aGVtZS5wYWxldHRlLmJhY2tncm91bmRbXCJkZWZhdWx0XCJdKTtcbiAgcmV0dXJuIHtcbiAgICB0b29sYmFyVHh0OiB7XG4gICAgICBjb2xvcjogZmFkZSh0ZXh0Q29sb3IsIDAuNTQpXG4gICAgfSxcbiAgICB0b29sYmFyQnRuU2VsZWN0ZWQ6IHtcbiAgICAgIGNvbG9yOiB0ZXh0Q29sb3JcbiAgICB9XG4gIH07XG59LCB7XG4gIG5hbWU6ICdNdWlQaWNrZXJzVG9vbGJhclRleHQnXG59KTtcblxudmFyIFRvb2xiYXJUZXh0ID0gZnVuY3Rpb24gVG9vbGJhclRleHQoX3JlZikge1xuICB2YXIgc2VsZWN0ZWQgPSBfcmVmLnNlbGVjdGVkLFxuICAgICAgbGFiZWwgPSBfcmVmLmxhYmVsLFxuICAgICAgX3JlZiRjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYkY2xhc3NOYW1lID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRjbGFzc05hbWUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJzZWxlY3RlZFwiLCBcImxhYmVsXCIsIFwiY2xhc3NOYW1lXCJdKTtcblxuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCBfZXh0ZW5kcyh7XG4gICAgY2hpbGRyZW46IGxhYmVsLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnRvb2xiYXJUeHQsIGNsYXNzTmFtZSwgc2VsZWN0ZWQgJiYgY2xhc3Nlcy50b29sYmFyQnRuU2VsZWN0ZWQpXG4gIH0sIG90aGVyKSk7XG59O1xuXG52YXIgVG9vbGJhckJ1dHRvbiA9IGZ1bmN0aW9uIFRvb2xiYXJCdXR0b24oX3JlZikge1xuICB2YXIgY2xhc3NlcyA9IF9yZWYuY2xhc3NlcyxcbiAgICAgIF9yZWYkY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmJGNsYXNzTmFtZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkY2xhc3NOYW1lLFxuICAgICAgbGFiZWwgPSBfcmVmLmxhYmVsLFxuICAgICAgc2VsZWN0ZWQgPSBfcmVmLnNlbGVjdGVkLFxuICAgICAgdmFyaWFudCA9IF9yZWYudmFyaWFudCxcbiAgICAgIGFsaWduID0gX3JlZi5hbGlnbixcbiAgICAgIHR5cG9ncmFwaHlDbGFzc05hbWUgPSBfcmVmLnR5cG9ncmFwaHlDbGFzc05hbWUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwibGFiZWxcIiwgXCJzZWxlY3RlZFwiLCBcInZhcmlhbnRcIiwgXCJhbGlnblwiLCBcInR5cG9ncmFwaHlDbGFzc05hbWVcIl0pO1xuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KEJ1dHRvbiwgX2V4dGVuZHMoe1xuICAgIHZhcmlhbnQ6IFwidGV4dFwiLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnRvb2xiYXJCdG4sIGNsYXNzTmFtZSlcbiAgfSwgb3RoZXIpLCBjcmVhdGVFbGVtZW50KFRvb2xiYXJUZXh0LCB7XG4gICAgYWxpZ246IGFsaWduLFxuICAgIGNsYXNzTmFtZTogdHlwb2dyYXBoeUNsYXNzTmFtZSxcbiAgICB2YXJpYW50OiB2YXJpYW50LFxuICAgIGxhYmVsOiBsYWJlbCxcbiAgICBzZWxlY3RlZDogc2VsZWN0ZWRcbiAgfSkpO1xufTtcblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVG9vbGJhckJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIHNlbGVjdGVkOiBib29sLmlzUmVxdWlyZWQsXG4gIGxhYmVsOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NlczogYW55LmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogc3RyaW5nLFxuICBpbm5lclJlZjogYW55XG59IDogdm9pZCAwO1xuVG9vbGJhckJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJydcbn07XG52YXIgc3R5bGVzID0gY3JlYXRlU3R5bGVzKHtcbiAgdG9vbGJhckJ0bjoge1xuICAgIHBhZGRpbmc6IDAsXG4gICAgbWluV2lkdGg6ICcxNnB4JyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZSdcbiAgfVxufSk7XG52YXIgVG9vbGJhckJ1dHRvbiQxID0gd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVBpY2tlcnNUb29sYmFyQnV0dG9uJ1xufSkoVG9vbGJhckJ1dHRvbik7XG5cbnZhciB1c2VTdHlsZXMkMSA9IG1ha2VTdHlsZXMoZnVuY3Rpb24gKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgdG9vbGJhcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGhlaWdodDogMTAwLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiA6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZFtcImRlZmF1bHRcIl1cbiAgICB9LFxuICAgIHRvb2xiYXJMYW5kc2NhcGU6IHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgbWF4V2lkdGg6IDE1MCxcbiAgICAgIHBhZGRpbmc6IDgsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnXG4gICAgfVxuICB9O1xufSwge1xuICBuYW1lOiAnTXVpUGlja2Vyc1Rvb2xiYXInXG59KTtcblxudmFyIFBpY2tlclRvb2xiYXIgPSBmdW5jdGlvbiBQaWNrZXJUb29sYmFyKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGlzTGFuZHNjYXBlID0gX3JlZi5pc0xhbmRzY2FwZSxcbiAgICAgIF9yZWYkY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmJGNsYXNzTmFtZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkY2xhc3NOYW1lLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiY2hpbGRyZW5cIiwgXCJpc0xhbmRzY2FwZVwiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMkMSgpO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChUb29sYmFyLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMudG9vbGJhciwgY2xhc3NOYW1lLCBpc0xhbmRzY2FwZSAmJiBjbGFzc2VzLnRvb2xiYXJMYW5kc2NhcGUpXG4gIH0sIG90aGVyKSwgY2hpbGRyZW4pO1xufTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBQdXJlRGF0ZUlucHV0ID0gZnVuY3Rpb24gUHVyZURhdGVJbnB1dChfcmVmKSB7XG4gIHZhciBpbnB1dFZhbHVlID0gX3JlZi5pbnB1dFZhbHVlLFxuICAgICAgaW5wdXRWYXJpYW50ID0gX3JlZi5pbnB1dFZhcmlhbnQsXG4gICAgICB2YWxpZGF0aW9uRXJyb3IgPSBfcmVmLnZhbGlkYXRpb25FcnJvcixcbiAgICAgIElucHV0UHJvcHMgPSBfcmVmLklucHV0UHJvcHMsXG4gICAgICBvbk9wZW4gPSBfcmVmLm9wZW5QaWNrZXIsXG4gICAgICBfcmVmJFRleHRGaWVsZENvbXBvbmUgPSBfcmVmLlRleHRGaWVsZENvbXBvbmVudCxcbiAgICAgIFRleHRGaWVsZENvbXBvbmVudCA9IF9yZWYkVGV4dEZpZWxkQ29tcG9uZSA9PT0gdm9pZCAwID8gVGV4dEZpZWxkIDogX3JlZiRUZXh0RmllbGRDb21wb25lLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiaW5wdXRWYWx1ZVwiLCBcImlucHV0VmFyaWFudFwiLCBcInZhbGlkYXRpb25FcnJvclwiLCBcIklucHV0UHJvcHNcIiwgXCJvcGVuUGlja2VyXCIsIFwiVGV4dEZpZWxkQ29tcG9uZW50XCJdKTtcblxuICB2YXIgUHVyZURhdGVJbnB1dFByb3BzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIElucHV0UHJvcHMsIHtcbiAgICAgIHJlYWRPbmx5OiB0cnVlXG4gICAgfSk7XG4gIH0sIFtJbnB1dFByb3BzXSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFRleHRGaWVsZENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGVycm9yOiBCb29sZWFuKHZhbGlkYXRpb25FcnJvciksXG4gICAgaGVscGVyVGV4dDogdmFsaWRhdGlvbkVycm9yXG4gIH0sIG90aGVyLCB7XG4gICAgLy8gZG8gbm90IG92ZXJyaWRhYmxlXG4gICAgb25DbGljazogb25PcGVuLFxuICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxuICAgIHZhcmlhbnQ6IGlucHV0VmFyaWFudCxcbiAgICBJbnB1dFByb3BzOiBQdXJlRGF0ZUlucHV0UHJvcHMsXG4gICAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgICAgLy8gc3BhY2VcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIG9uT3BlbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSkpO1xufTtcblB1cmVEYXRlSW5wdXQuZGlzcGxheU5hbWUgPSAnUHVyZURhdGVJbnB1dCc7XG5cbnZhciBLZXlib2FyZEljb24gPSBmdW5jdGlvbiBLZXlib2FyZEljb24ocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3ZnSWNvbiwgcHJvcHMsIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xNyAxMmgtNXY1aDV2LTV6TTE2IDF2Mkg4VjFINnYySDVjLTEuMTEgMC0xLjk5LjktMS45OSAyTDMgMTljMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMmgtMVYxaC0yem0zIDE4SDVWOGgxNHYxMXpcIlxuICB9KSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIGQ6IFwiTTAgMGgyNHYyNEgwelwiXG4gIH0pKTtcbn07XG5cbnZhciBnZXREaXNwbGF5RGF0ZSA9IGZ1bmN0aW9uIGdldERpc3BsYXlEYXRlKHZhbHVlLCBmb3JtYXQsIHV0aWxzLCBpc0VtcHR5LCBfcmVmKSB7XG4gIHZhciBpbnZhbGlkTGFiZWwgPSBfcmVmLmludmFsaWRMYWJlbCxcbiAgICAgIGVtcHR5TGFiZWwgPSBfcmVmLmVtcHR5TGFiZWwsXG4gICAgICBsYWJlbEZ1bmMgPSBfcmVmLmxhYmVsRnVuYztcbiAgdmFyIGRhdGUgPSB1dGlscy5kYXRlKHZhbHVlKTtcblxuICBpZiAobGFiZWxGdW5jKSB7XG4gICAgcmV0dXJuIGxhYmVsRnVuYyhpc0VtcHR5ID8gbnVsbCA6IGRhdGUsIGludmFsaWRMYWJlbCk7XG4gIH1cblxuICBpZiAoaXNFbXB0eSkge1xuICAgIHJldHVybiBlbXB0eUxhYmVsIHx8ICcnO1xuICB9XG5cbiAgcmV0dXJuIHV0aWxzLmlzVmFsaWQoZGF0ZSkgPyB1dGlscy5mb3JtYXQoZGF0ZSwgZm9ybWF0KSA6IGludmFsaWRMYWJlbDtcbn07XG5cbnZhciBnZXRDb21wYXJpc29uTWF4RGF0ZSA9IGZ1bmN0aW9uIGdldENvbXBhcmlzb25NYXhEYXRlKHV0aWxzLCBzdHJpY3RDb21wYXJlRGF0ZXMsIGRhdGUpIHtcbiAgaWYgKHN0cmljdENvbXBhcmVEYXRlcykge1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgcmV0dXJuIHV0aWxzLmVuZE9mRGF5KGRhdGUpO1xufTtcblxudmFyIGdldENvbXBhcmlzb25NaW5EYXRlID0gZnVuY3Rpb24gZ2V0Q29tcGFyaXNvbk1pbkRhdGUodXRpbHMsIHN0cmljdENvbXBhcmVEYXRlcywgZGF0ZSkge1xuICBpZiAoc3RyaWN0Q29tcGFyZURhdGVzKSB7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICByZXR1cm4gdXRpbHMuc3RhcnRPZkRheShkYXRlKTtcbn07XG5cbnZhciB2YWxpZGF0ZSA9IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCB1dGlscywgX3JlZjIpIHtcbiAgdmFyIG1heERhdGUgPSBfcmVmMi5tYXhEYXRlLFxuICAgICAgbWluRGF0ZSA9IF9yZWYyLm1pbkRhdGUsXG4gICAgICBkaXNhYmxlUGFzdCA9IF9yZWYyLmRpc2FibGVQYXN0LFxuICAgICAgZGlzYWJsZUZ1dHVyZSA9IF9yZWYyLmRpc2FibGVGdXR1cmUsXG4gICAgICBtYXhEYXRlTWVzc2FnZSA9IF9yZWYyLm1heERhdGVNZXNzYWdlLFxuICAgICAgbWluRGF0ZU1lc3NhZ2UgPSBfcmVmMi5taW5EYXRlTWVzc2FnZSxcbiAgICAgIGludmFsaWREYXRlTWVzc2FnZSA9IF9yZWYyLmludmFsaWREYXRlTWVzc2FnZSxcbiAgICAgIHN0cmljdENvbXBhcmVEYXRlcyA9IF9yZWYyLnN0cmljdENvbXBhcmVEYXRlcztcbiAgdmFyIHBhcnNlZFZhbHVlID0gdXRpbHMuZGF0ZSh2YWx1ZSk7IC8vIGlmIG51bGwgLSBkbyBub3Qgc2hvdyBlcnJvclxuXG4gIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICghdXRpbHMuaXNWYWxpZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gaW52YWxpZERhdGVNZXNzYWdlO1xuICB9XG5cbiAgaWYgKG1heERhdGUgJiYgdXRpbHMuaXNBZnRlcihwYXJzZWRWYWx1ZSwgZ2V0Q29tcGFyaXNvbk1heERhdGUodXRpbHMsICEhc3RyaWN0Q29tcGFyZURhdGVzLCB1dGlscy5kYXRlKG1heERhdGUpKSkpIHtcbiAgICByZXR1cm4gbWF4RGF0ZU1lc3NhZ2U7XG4gIH1cblxuICBpZiAoZGlzYWJsZUZ1dHVyZSAmJiB1dGlscy5pc0FmdGVyKHBhcnNlZFZhbHVlLCBnZXRDb21wYXJpc29uTWF4RGF0ZSh1dGlscywgISFzdHJpY3RDb21wYXJlRGF0ZXMsIHV0aWxzLmRhdGUoKSkpKSB7XG4gICAgcmV0dXJuIG1heERhdGVNZXNzYWdlO1xuICB9XG5cbiAgaWYgKG1pbkRhdGUgJiYgdXRpbHMuaXNCZWZvcmUocGFyc2VkVmFsdWUsIGdldENvbXBhcmlzb25NaW5EYXRlKHV0aWxzLCAhIXN0cmljdENvbXBhcmVEYXRlcywgdXRpbHMuZGF0ZShtaW5EYXRlKSkpKSB7XG4gICAgcmV0dXJuIG1pbkRhdGVNZXNzYWdlO1xuICB9XG5cbiAgaWYgKGRpc2FibGVQYXN0ICYmIHV0aWxzLmlzQmVmb3JlKHBhcnNlZFZhbHVlLCBnZXRDb21wYXJpc29uTWluRGF0ZSh1dGlscywgISFzdHJpY3RDb21wYXJlRGF0ZXMsIHV0aWxzLmRhdGUoKSkpKSB7XG4gICAgcmV0dXJuIG1pbkRhdGVNZXNzYWdlO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufTtcbmZ1bmN0aW9uIHBpY2sxMmhPcjI0aEZvcm1hdCh1c2VyRm9ybWF0KSB7XG4gIHZhciBhbXBtID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuICB2YXIgZm9ybWF0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuXG4gIGlmICh1c2VyRm9ybWF0KSB7XG4gICAgcmV0dXJuIHVzZXJGb3JtYXQ7XG4gIH1cblxuICByZXR1cm4gYW1wbSA/IGZvcm1hdHNbJzEyaCddIDogZm9ybWF0c1snMjRoJ107XG59XG5mdW5jdGlvbiBtYWtlTWFza0Zyb21Gb3JtYXQoZm9ybWF0LCBudW1iZXJNYXNrQ2hhcikge1xuICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoL1thLXpdL2dpLCBudW1iZXJNYXNrQ2hhcik7XG59XG52YXIgbWFza2VkRGF0ZUZvcm1hdHRlciA9IGZ1bmN0aW9uIG1hc2tlZERhdGVGb3JtYXR0ZXIobWFzaywgbnVtYmVyTWFza0NoYXIsIHJlZnVzZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBwYXJzZWQgPSB2YWx1ZS5yZXBsYWNlKHJlZnVzZSwgJycpO1xuXG4gICAgaWYgKHBhcnNlZCA9PT0gJycpIHtcbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxuXG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBuID0gMDtcblxuICAgIHdoaWxlIChpIDwgbWFzay5sZW5ndGgpIHtcbiAgICAgIHZhciBtYXNrQ2hhciA9IG1hc2tbaV07XG5cbiAgICAgIGlmIChtYXNrQ2hhciA9PT0gbnVtYmVyTWFza0NoYXIgJiYgbiA8IHBhcnNlZC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHBhcnNlZENoYXIgPSBwYXJzZWRbbl07XG4gICAgICAgIHJlc3VsdCArPSBwYXJzZWRDaGFyO1xuICAgICAgICBuICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gbWFza0NoYXI7XG4gICAgICB9XG5cbiAgICAgIGkgKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuZnVuY3Rpb24gb3duS2V5cyQxKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQxKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDEoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxudmFyIEtleWJvYXJkRGF0ZUlucHV0ID0gZnVuY3Rpb24gS2V5Ym9hcmREYXRlSW5wdXQoX3JlZikge1xuICB2YXIgaW5wdXRWYWx1ZSA9IF9yZWYuaW5wdXRWYWx1ZSxcbiAgICAgIGlucHV0VmFyaWFudCA9IF9yZWYuaW5wdXRWYXJpYW50LFxuICAgICAgdmFsaWRhdGlvbkVycm9yID0gX3JlZi52YWxpZGF0aW9uRXJyb3IsXG4gICAgICBLZXlib2FyZEJ1dHRvblByb3BzID0gX3JlZi5LZXlib2FyZEJ1dHRvblByb3BzLFxuICAgICAgSW5wdXRBZG9ybm1lbnRQcm9wcyA9IF9yZWYuSW5wdXRBZG9ybm1lbnRQcm9wcyxcbiAgICAgIG9uT3BlbiA9IF9yZWYub3BlblBpY2tlcixcbiAgICAgIG9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZSxcbiAgICAgIElucHV0UHJvcHMgPSBfcmVmLklucHV0UHJvcHMsXG4gICAgICBtYXNrID0gX3JlZi5tYXNrLFxuICAgICAgX3JlZiRtYXNrQ2hhciA9IF9yZWYubWFza0NoYXIsXG4gICAgICBtYXNrQ2hhciA9IF9yZWYkbWFza0NoYXIgPT09IHZvaWQgMCA/ICdfJyA6IF9yZWYkbWFza0NoYXIsXG4gICAgICBfcmVmJHJlZnVzZSA9IF9yZWYucmVmdXNlLFxuICAgICAgcmVmdXNlID0gX3JlZiRyZWZ1c2UgPT09IHZvaWQgMCA/IC9bXlxcZF0rL2dpIDogX3JlZiRyZWZ1c2UsXG4gICAgICBmb3JtYXQgPSBfcmVmLmZvcm1hdCxcbiAgICAgIGtleWJvYXJkSWNvbiA9IF9yZWYua2V5Ym9hcmRJY29uLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgcmlmbUZvcm1hdHRlciA9IF9yZWYucmlmbUZvcm1hdHRlcixcbiAgICAgIF9yZWYkVGV4dEZpZWxkQ29tcG9uZSA9IF9yZWYuVGV4dEZpZWxkQ29tcG9uZW50LFxuICAgICAgVGV4dEZpZWxkQ29tcG9uZW50ID0gX3JlZiRUZXh0RmllbGRDb21wb25lID09PSB2b2lkIDAgPyBUZXh0RmllbGQgOiBfcmVmJFRleHRGaWVsZENvbXBvbmUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJpbnB1dFZhbHVlXCIsIFwiaW5wdXRWYXJpYW50XCIsIFwidmFsaWRhdGlvbkVycm9yXCIsIFwiS2V5Ym9hcmRCdXR0b25Qcm9wc1wiLCBcIklucHV0QWRvcm5tZW50UHJvcHNcIiwgXCJvcGVuUGlja2VyXCIsIFwib25DaGFuZ2VcIiwgXCJJbnB1dFByb3BzXCIsIFwibWFza1wiLCBcIm1hc2tDaGFyXCIsIFwicmVmdXNlXCIsIFwiZm9ybWF0XCIsIFwia2V5Ym9hcmRJY29uXCIsIFwiZGlzYWJsZWRcIiwgXCJyaWZtRm9ybWF0dGVyXCIsIFwiVGV4dEZpZWxkQ29tcG9uZW50XCJdKTtcblxuICB2YXIgaW5wdXRNYXNrID0gbWFzayB8fCBtYWtlTWFza0Zyb21Gb3JtYXQoZm9ybWF0LCBtYXNrQ2hhcik7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gIHZhciBmb3JtYXR0ZXIgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbWFza2VkRGF0ZUZvcm1hdHRlcihpbnB1dE1hc2ssIG1hc2tDaGFyLCByZWZ1c2UpO1xuICB9LCBbaW5wdXRNYXNrLCBtYXNrQ2hhciwgcmVmdXNlXSk7XG4gIHZhciBwb3NpdGlvbiA9IElucHV0QWRvcm5tZW50UHJvcHMgJiYgSW5wdXRBZG9ybm1lbnRQcm9wcy5wb3NpdGlvbiA/IElucHV0QWRvcm5tZW50UHJvcHMucG9zaXRpb24gOiAnZW5kJztcblxuICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHRleHQpIHtcbiAgICB2YXIgZmluYWxTdHJpbmcgPSB0ZXh0ID09PSAnJyB8fCB0ZXh0ID09PSBpbnB1dE1hc2sgPyBudWxsIDogdGV4dDtcbiAgICBvbkNoYW5nZShmaW5hbFN0cmluZyk7XG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoUmlmbSwge1xuICAgIGtleTogaW5wdXRNYXNrLFxuICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgcmVmdXNlOiByZWZ1c2UsXG4gICAgZm9ybWF0OiByaWZtRm9ybWF0dGVyIHx8IGZvcm1hdHRlclxuICB9LCBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICB2YXIgb25DaGFuZ2UgPSBfcmVmMi5vbkNoYW5nZSxcbiAgICAgICAgdmFsdWUgPSBfcmVmMi52YWx1ZTtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChUZXh0RmllbGRDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgIGVycm9yOiBCb29sZWFuKHZhbGlkYXRpb25FcnJvciksXG4gICAgICBoZWxwZXJUZXh0OiB2YWxpZGF0aW9uRXJyb3JcbiAgICB9LCBvdGhlciwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgICAgdmFyaWFudDogaW5wdXRWYXJpYW50LFxuICAgICAgSW5wdXRQcm9wczogX29iamVjdFNwcmVhZCQxKHt9LCBJbnB1dFByb3BzLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHBvc2l0aW9uLCBcIkFkb3JubWVudFwiKSwgY3JlYXRlRWxlbWVudChJbnB1dEFkb3JubWVudCwgX2V4dGVuZHMoe1xuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgICAgIH0sIElucHV0QWRvcm5tZW50UHJvcHMpLCBjcmVhdGVFbGVtZW50KEljb25CdXR0b24sIF9leHRlbmRzKHtcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gICAgICB9LCBLZXlib2FyZEJ1dHRvblByb3BzLCB7XG4gICAgICAgIG9uQ2xpY2s6IG9uT3BlblxuICAgICAgfSksIGtleWJvYXJkSWNvbikpKSlcbiAgICB9KSk7XG4gIH0pO1xufTtcbktleWJvYXJkRGF0ZUlucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAga2V5Ym9hcmRJY29uOiBjcmVhdGVFbGVtZW50KEtleWJvYXJkSWNvbiwgbnVsbClcbn07XG5cbmZ1bmN0aW9uIHVzZU9wZW5TdGF0ZShfcmVmKSB7XG4gIHZhciBvcGVuID0gX3JlZi5vcGVuLFxuICAgICAgb25PcGVuID0gX3JlZi5vbk9wZW4sXG4gICAgICBvbkNsb3NlID0gX3JlZi5vbkNsb3NlO1xuICB2YXIgc2V0SXNPcGVuU3RhdGUgPSBudWxsO1xuXG4gIGlmIChvcGVuID09PSB1bmRlZmluZWQgfHwgb3BlbiA9PT0gbnVsbCkge1xuICAgIC8vIFRoZSBjb21wb25lbnQgaXMgdW5jb250cm9sbGVkLCBzbyB3ZSBuZWVkIHRvIGdpdmUgaXQgaXRzIG93biBzdGF0ZS5cbiAgICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdmFyIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpO1xuXG4gICAgb3BlbiA9IF91c2VTdGF0ZTJbMF07XG4gICAgc2V0SXNPcGVuU3RhdGUgPSBfdXNlU3RhdGUyWzFdO1xuICB9IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbiAgdmFyIHNldElzT3BlbiA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuZXdJc09wZW4pIHtcbiAgICBzZXRJc09wZW5TdGF0ZSAmJiBzZXRJc09wZW5TdGF0ZShuZXdJc09wZW4pO1xuICAgIHJldHVybiBuZXdJc09wZW4gPyBvbk9wZW4gJiYgb25PcGVuKCkgOiBvbkNsb3NlICYmIG9uQ2xvc2UoKTtcbiAgfSwgW29uT3Blbiwgb25DbG9zZSwgc2V0SXNPcGVuU3RhdGVdKTtcbiAgcmV0dXJuIHtcbiAgICBpc09wZW46IG9wZW4sXG4gICAgc2V0SXNPcGVuOiBzZXRJc09wZW5cbiAgfTtcbn1cblxudmFyIHVzZVZhbHVlVG9EYXRlID0gZnVuY3Rpb24gdXNlVmFsdWVUb0RhdGUodXRpbHMsIF9yZWYpIHtcbiAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIGluaXRpYWxGb2N1c2VkRGF0ZSA9IF9yZWYuaW5pdGlhbEZvY3VzZWREYXRlO1xuICB2YXIgbm93UmVmID0gdXNlUmVmKHV0aWxzLmRhdGUoKSk7XG4gIHZhciBkYXRlID0gdXRpbHMuZGF0ZSh2YWx1ZSB8fCBpbml0aWFsRm9jdXNlZERhdGUgfHwgbm93UmVmLmN1cnJlbnQpO1xuICByZXR1cm4gZGF0ZSAmJiB1dGlscy5pc1ZhbGlkKGRhdGUpID8gZGF0ZSA6IG5vd1JlZi5jdXJyZW50O1xufTtcblxuZnVuY3Rpb24gdXNlRGF0ZVZhbHVlcyhwcm9wcywgb3B0aW9ucykge1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICB2YXIgZGF0ZSA9IHVzZVZhbHVlVG9EYXRlKHV0aWxzLCBwcm9wcyk7XG4gIHZhciBmb3JtYXQgPSBwcm9wcy5mb3JtYXQgfHwgb3B0aW9ucy5nZXREZWZhdWx0Rm9ybWF0KCk7XG4gIHJldHVybiB7XG4gICAgZGF0ZTogZGF0ZSxcbiAgICBmb3JtYXQ6IGZvcm1hdFxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VQaWNrZXJTdGF0ZShwcm9wcywgb3B0aW9ucykge1xuICB2YXIgYXV0b09rID0gcHJvcHMuYXV0b09rLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIHJlYWRPbmx5ID0gcHJvcHMucmVhZE9ubHksXG4gICAgICBvbkFjY2VwdCA9IHByb3BzLm9uQWNjZXB0LFxuICAgICAgX29uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICBvbkVycm9yID0gcHJvcHMub25FcnJvcixcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICB2YXJpYW50ID0gcHJvcHMudmFyaWFudDtcbiAgdmFyIHV0aWxzID0gdXNlVXRpbHMoKTtcblxuICB2YXIgX3VzZU9wZW5TdGF0ZSA9IHVzZU9wZW5TdGF0ZShwcm9wcyksXG4gICAgICBpc09wZW4gPSBfdXNlT3BlblN0YXRlLmlzT3BlbixcbiAgICAgIHNldElzT3BlbiA9IF91c2VPcGVuU3RhdGUuc2V0SXNPcGVuO1xuXG4gIHZhciBfdXNlRGF0ZVZhbHVlcyA9IHVzZURhdGVWYWx1ZXMocHJvcHMsIG9wdGlvbnMpLFxuICAgICAgZGF0ZSA9IF91c2VEYXRlVmFsdWVzLmRhdGUsXG4gICAgICBmb3JtYXQgPSBfdXNlRGF0ZVZhbHVlcy5mb3JtYXQ7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGRhdGUpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBwaWNrZXJEYXRlID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldFBpY2tlckRhdGUgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLy8gaWYgdmFsdWUgd2FzIGNoYW5nZWQgaW4gY2xvc2VkIHN0YXRlIC0gdHJlYXQgaXQgYXMgYWNjZXB0ZWRcbiAgICBpZiAoIWlzT3BlbiAmJiAhdXRpbHMuaXNFcXVhbChwaWNrZXJEYXRlLCBkYXRlKSkge1xuICAgICAgc2V0UGlja2VyRGF0ZShkYXRlKTtcbiAgICB9XG4gIH0sIFtkYXRlLCBpc09wZW4sIHBpY2tlckRhdGUsIHV0aWxzXSk7XG4gIHZhciBhY2NlcHREYXRlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGFjY2VwdGVkRGF0ZSkge1xuICAgIF9vbkNoYW5nZShhY2NlcHRlZERhdGUpO1xuXG4gICAgaWYgKG9uQWNjZXB0KSB7XG4gICAgICBvbkFjY2VwdChhY2NlcHRlZERhdGUpO1xuICAgIH1cblxuICAgIHNldElzT3BlbihmYWxzZSk7XG4gIH0sIFtvbkFjY2VwdCwgX29uQ2hhbmdlLCBzZXRJc09wZW5dKTtcbiAgdmFyIHdyYXBwZXJQcm9wcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb3JtYXQ6IGZvcm1hdCxcbiAgICAgIG9wZW46IGlzT3BlbixcbiAgICAgIG9uQ2xlYXI6IGZ1bmN0aW9uIG9uQ2xlYXIoKSB7XG4gICAgICAgIHJldHVybiBhY2NlcHREYXRlKG51bGwpO1xuICAgICAgfSxcbiAgICAgIG9uQWNjZXB0OiBmdW5jdGlvbiBvbkFjY2VwdCgpIHtcbiAgICAgICAgcmV0dXJuIGFjY2VwdERhdGUocGlja2VyRGF0ZSk7XG4gICAgICB9LFxuICAgICAgb25TZXRUb2RheTogZnVuY3Rpb24gb25TZXRUb2RheSgpIHtcbiAgICAgICAgcmV0dXJuIHNldFBpY2tlckRhdGUodXRpbHMuZGF0ZSgpKTtcbiAgICAgIH0sXG4gICAgICBvbkRpc21pc3M6IGZ1bmN0aW9uIG9uRGlzbWlzcygpIHtcbiAgICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbYWNjZXB0RGF0ZSwgZm9ybWF0LCBpc09wZW4sIHBpY2tlckRhdGUsIHNldElzT3BlbiwgdXRpbHNdKTtcbiAgdmFyIHBpY2tlclByb3BzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IHBpY2tlckRhdGUsXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobmV3RGF0ZSkge1xuICAgICAgICB2YXIgaXNGaW5pc2ggPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG4gICAgICAgIHNldFBpY2tlckRhdGUobmV3RGF0ZSk7XG5cbiAgICAgICAgaWYgKGlzRmluaXNoICYmIGF1dG9Paykge1xuICAgICAgICAgIGFjY2VwdERhdGUobmV3RGF0ZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIHNpbXVsYXRlIGF1dG9PaywgYnV0IGRvIG5vdCBjbG9zZSB0aGUgbW9kYWxcblxuXG4gICAgICAgIGlmICh2YXJpYW50ID09PSAnaW5saW5lJyB8fCB2YXJpYW50ID09PSAnc3RhdGljJykge1xuICAgICAgICAgIF9vbkNoYW5nZShuZXdEYXRlKTtcblxuICAgICAgICAgIG9uQWNjZXB0ICYmIG9uQWNjZXB0KG5ld0RhdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2FjY2VwdERhdGUsIGF1dG9Paywgb25BY2NlcHQsIF9vbkNoYW5nZSwgcGlja2VyRGF0ZSwgdmFyaWFudF0pO1xuICB2YXIgdmFsaWRhdGlvbkVycm9yID0gdmFsaWRhdGUodmFsdWUsIHV0aWxzLCBwcm9wcyk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgIG9uRXJyb3IodmFsaWRhdGlvbkVycm9yLCB2YWx1ZSk7XG4gICAgfVxuICB9LCBbb25FcnJvciwgdmFsaWRhdGlvbkVycm9yLCB2YWx1ZV0pO1xuICB2YXIgaW5wdXRWYWx1ZSA9IGdldERpc3BsYXlEYXRlKGRhdGUsIGZvcm1hdCwgdXRpbHMsIHZhbHVlID09PSBudWxsLCBwcm9wcyk7XG4gIHZhciBpbnB1dFByb3BzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICB2YWxpZGF0aW9uRXJyb3I6IHZhbGlkYXRpb25FcnJvcixcbiAgICAgIG9wZW5QaWNrZXI6IGZ1bmN0aW9uIG9wZW5QaWNrZXIoKSB7XG4gICAgICAgIHJldHVybiAhcmVhZE9ubHkgJiYgIWRpc2FibGVkICYmIHNldElzT3Blbih0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbZGlzYWJsZWQsIGlucHV0VmFsdWUsIHJlYWRPbmx5LCBzZXRJc09wZW4sIHZhbGlkYXRpb25FcnJvcl0pO1xuICB2YXIgcGlja2VyU3RhdGUgPSB7XG4gICAgcGlja2VyUHJvcHM6IHBpY2tlclByb3BzLFxuICAgIGlucHV0UHJvcHM6IGlucHV0UHJvcHMsXG4gICAgd3JhcHBlclByb3BzOiB3cmFwcGVyUHJvcHNcbiAgfTtcbiAgdXNlRGVidWdWYWx1ZShwaWNrZXJTdGF0ZSk7XG4gIHJldHVybiBwaWNrZXJTdGF0ZTtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyQyKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDIodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQyKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDIoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBwYXJzZUlucHV0U3RyaW5nKHZhbHVlLCB1dGlscywgZm9ybWF0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHV0aWxzLnBhcnNlKHZhbHVlLCBmb3JtYXQpO1xuICB9IGNhdGNoIChfdW51c2VkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlS2V5Ym9hcmRQaWNrZXJTdGF0ZShwcm9wcywgb3B0aW9ucykge1xuICB2YXIgX3Byb3BzJGZvcm1hdCA9IHByb3BzLmZvcm1hdCxcbiAgICAgIGZvcm1hdCA9IF9wcm9wcyRmb3JtYXQgPT09IHZvaWQgMCA/IG9wdGlvbnMuZ2V0RGVmYXVsdEZvcm1hdCgpIDogX3Byb3BzJGZvcm1hdCxcbiAgICAgIGlucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlLFxuICAgICAgX29uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlO1xuICB2YXIgdXRpbHMgPSB1c2VVdGlscygpO1xuICB2YXIgZGlzcGxheURhdGUgPSBnZXREaXNwbGF5RGF0ZSh2YWx1ZSwgZm9ybWF0LCB1dGlscywgdmFsdWUgPT09IG51bGwsIHByb3BzKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZGlzcGxheURhdGUpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBpbm5lcklucHV0VmFsdWUgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0SW5uZXJJbnB1dFZhbHVlID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgZGF0ZVZhbHVlID0gaW5wdXRWYWx1ZSA/IHBhcnNlSW5wdXRTdHJpbmcoaW5wdXRWYWx1ZSwgdXRpbHMsIGZvcm1hdCkgOiB2YWx1ZTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdXRpbHMuaXNWYWxpZCh2YWx1ZSkpIHtcbiAgICAgIHNldElubmVySW5wdXRWYWx1ZShkaXNwbGF5RGF0ZSk7XG4gICAgfVxuICB9LCBbZGlzcGxheURhdGUsIHNldElubmVySW5wdXRWYWx1ZSwgdXRpbHMsIHZhbHVlXSk7XG4gIHZhciBoYW5kbGVLZXlib2FyZENoYW5nZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgX29uQ2hhbmdlKGRhdGUsIGRhdGUgPT09IG51bGwgPyBudWxsIDogdXRpbHMuZm9ybWF0KGRhdGUsIGZvcm1hdCkpO1xuICB9LCBbZm9ybWF0LCBfb25DaGFuZ2UsIHV0aWxzXSk7XG5cbiAgdmFyIF91c2VQaWNrZXJTdGF0ZSA9IHVzZVBpY2tlclN0YXRlKCAvLyBFeHRlbmQgcHJvcHMgaW50ZXJmYWNlXG4gIF9vYmplY3RTcHJlYWQkMih7fSwgcHJvcHMsIHtcbiAgICB2YWx1ZTogZGF0ZVZhbHVlLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVLZXlib2FyZENoYW5nZVxuICB9KSwgb3B0aW9ucyksXG4gICAgICBpbm5lcklucHV0UHJvcHMgPSBfdXNlUGlja2VyU3RhdGUuaW5wdXRQcm9wcyxcbiAgICAgIHdyYXBwZXJQcm9wcyA9IF91c2VQaWNrZXJTdGF0ZS53cmFwcGVyUHJvcHMsXG4gICAgICBwaWNrZXJQcm9wcyA9IF91c2VQaWNrZXJTdGF0ZS5waWNrZXJQcm9wcztcblxuICB2YXIgaW5wdXRQcm9wcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDIoe30sIGlubmVySW5wdXRQcm9wcywge1xuICAgICAgLy8gcmV1c2UgdmFsaWRhdGlvbiBhbmQgb3Blbi9jbG9zZSBsb2dpY1xuICAgICAgZm9ybWF0OiB3cmFwcGVyUHJvcHMuZm9ybWF0LFxuICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSB8fCBpbm5lcklucHV0VmFsdWUsXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgc2V0SW5uZXJJbnB1dFZhbHVlKHZhbHVlIHx8ICcnKTtcbiAgICAgICAgdmFyIGRhdGUgPSB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiB1dGlscy5wYXJzZSh2YWx1ZSwgd3JhcHBlclByb3BzLmZvcm1hdCk7XG5cbiAgICAgICAgX29uQ2hhbmdlKGRhdGUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW2lubmVySW5wdXRQcm9wcywgaW5uZXJJbnB1dFZhbHVlLCBpbnB1dFZhbHVlLCBfb25DaGFuZ2UsIHV0aWxzLCB3cmFwcGVyUHJvcHMuZm9ybWF0XSk7XG4gIHJldHVybiB7XG4gICAgaW5wdXRQcm9wczogaW5wdXRQcm9wcyxcbiAgICB3cmFwcGVyUHJvcHM6IHdyYXBwZXJQcm9wcyxcbiAgICBwaWNrZXJQcm9wczogcGlja2VyUHJvcHNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZVBpY2tlcldpdGhTdGF0ZShfcmVmKSB7XG4gIHZhciBJbnB1dCA9IF9yZWYuSW5wdXQsXG4gICAgICB1c2VTdGF0ZSA9IF9yZWYudXNlU3RhdGUsXG4gICAgICB1c2VPcHRpb25zID0gX3JlZi51c2VPcHRpb25zLFxuICAgICAgZ2V0Q3VzdG9tUHJvcHMgPSBfcmVmLmdldEN1c3RvbVByb3BzLFxuICAgICAgRGVmYXVsdFRvb2xiYXJDb21wb25lbnQgPSBfcmVmLkRlZmF1bHRUb29sYmFyQ29tcG9uZW50O1xuXG4gIGZ1bmN0aW9uIFBpY2tlcldpdGhTdGF0ZShwcm9wcykge1xuICAgIHZhciBhbGxvd0tleWJvYXJkQ29udHJvbCA9IHByb3BzLmFsbG93S2V5Ym9hcmRDb250cm9sLFxuICAgICAgICBhbXBtID0gcHJvcHMuYW1wbSxcbiAgICAgICAgYW5pbWF0ZVllYXJTY3JvbGxpbmcgPSBwcm9wcy5hbmltYXRlWWVhclNjcm9sbGluZyxcbiAgICAgICAgYXV0b09rID0gcHJvcHMuYXV0b09rLFxuICAgICAgICBkYXRlUmFuZ2VJY29uID0gcHJvcHMuZGF0ZVJhbmdlSWNvbixcbiAgICAgICAgZGlzYWJsZUZ1dHVyZSA9IHByb3BzLmRpc2FibGVGdXR1cmUsXG4gICAgICAgIGRpc2FibGVQYXN0ID0gcHJvcHMuZGlzYWJsZVBhc3QsXG4gICAgICAgIGRpc2FibGVUb29sYmFyID0gcHJvcHMuZGlzYWJsZVRvb2xiYXIsXG4gICAgICAgIGVtcHR5TGFiZWwgPSBwcm9wcy5lbXB0eUxhYmVsLFxuICAgICAgICBmb3JtYXQgPSBwcm9wcy5mb3JtYXQsXG4gICAgICAgIGZvcndhcmRlZFJlZiA9IHByb3BzLmZvcndhcmRlZFJlZixcbiAgICAgICAgaGlkZVRhYnMgPSBwcm9wcy5oaWRlVGFicyxcbiAgICAgICAgaW5pdGlhbEZvY3VzZWREYXRlID0gcHJvcHMuaW5pdGlhbEZvY3VzZWREYXRlLFxuICAgICAgICBpbnZhbGlkRGF0ZU1lc3NhZ2UgPSBwcm9wcy5pbnZhbGlkRGF0ZU1lc3NhZ2UsXG4gICAgICAgIGludmFsaWRMYWJlbCA9IHByb3BzLmludmFsaWRMYWJlbCxcbiAgICAgICAgbGFiZWxGdW5jID0gcHJvcHMubGFiZWxGdW5jLFxuICAgICAgICBsZWZ0QXJyb3dCdXR0b25Qcm9wcyA9IHByb3BzLmxlZnRBcnJvd0J1dHRvblByb3BzLFxuICAgICAgICBsZWZ0QXJyb3dJY29uID0gcHJvcHMubGVmdEFycm93SWNvbixcbiAgICAgICAgbG9hZGluZ0luZGljYXRvciA9IHByb3BzLmxvYWRpbmdJbmRpY2F0b3IsXG4gICAgICAgIG1heERhdGUgPSBwcm9wcy5tYXhEYXRlLFxuICAgICAgICBtYXhEYXRlTWVzc2FnZSA9IHByb3BzLm1heERhdGVNZXNzYWdlLFxuICAgICAgICBtaW5EYXRlID0gcHJvcHMubWluRGF0ZSxcbiAgICAgICAgbWluRGF0ZU1lc3NhZ2UgPSBwcm9wcy5taW5EYXRlTWVzc2FnZSxcbiAgICAgICAgbWludXRlc1N0ZXAgPSBwcm9wcy5taW51dGVzU3RlcCxcbiAgICAgICAgb25BY2NlcHQgPSBwcm9wcy5vbkFjY2VwdCxcbiAgICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgICAgb25DbG9zZSA9IHByb3BzLm9uQ2xvc2UsXG4gICAgICAgIG9uTW9udGhDaGFuZ2UgPSBwcm9wcy5vbk1vbnRoQ2hhbmdlLFxuICAgICAgICBvbk9wZW4gPSBwcm9wcy5vbk9wZW4sXG4gICAgICAgIG9uWWVhckNoYW5nZSA9IHByb3BzLm9uWWVhckNoYW5nZSxcbiAgICAgICAgb3BlblRvID0gcHJvcHMub3BlblRvLFxuICAgICAgICBvcmllbnRhdGlvbiA9IHByb3BzLm9yaWVudGF0aW9uLFxuICAgICAgICByZW5kZXJEYXkgPSBwcm9wcy5yZW5kZXJEYXksXG4gICAgICAgIHJpZ2h0QXJyb3dCdXR0b25Qcm9wcyA9IHByb3BzLnJpZ2h0QXJyb3dCdXR0b25Qcm9wcyxcbiAgICAgICAgcmlnaHRBcnJvd0ljb24gPSBwcm9wcy5yaWdodEFycm93SWNvbixcbiAgICAgICAgc2hvdWxkRGlzYWJsZURhdGUgPSBwcm9wcy5zaG91bGREaXNhYmxlRGF0ZSxcbiAgICAgICAgc3RyaWN0Q29tcGFyZURhdGVzID0gcHJvcHMuc3RyaWN0Q29tcGFyZURhdGVzLFxuICAgICAgICB0aW1lSWNvbiA9IHByb3BzLnRpbWVJY29uLFxuICAgICAgICBfcHJvcHMkVG9vbGJhckNvbXBvbmUgPSBwcm9wcy5Ub29sYmFyQ29tcG9uZW50LFxuICAgICAgICBUb29sYmFyQ29tcG9uZW50ID0gX3Byb3BzJFRvb2xiYXJDb21wb25lID09PSB2b2lkIDAgPyBEZWZhdWx0VG9vbGJhckNvbXBvbmVudCA6IF9wcm9wcyRUb29sYmFyQ29tcG9uZSxcbiAgICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgICAgdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICAgIHZpZXdzID0gcHJvcHMudmlld3MsXG4gICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhbGxvd0tleWJvYXJkQ29udHJvbFwiLCBcImFtcG1cIiwgXCJhbmltYXRlWWVhclNjcm9sbGluZ1wiLCBcImF1dG9Pa1wiLCBcImRhdGVSYW5nZUljb25cIiwgXCJkaXNhYmxlRnV0dXJlXCIsIFwiZGlzYWJsZVBhc3RcIiwgXCJkaXNhYmxlVG9vbGJhclwiLCBcImVtcHR5TGFiZWxcIiwgXCJmb3JtYXRcIiwgXCJmb3J3YXJkZWRSZWZcIiwgXCJoaWRlVGFic1wiLCBcImluaXRpYWxGb2N1c2VkRGF0ZVwiLCBcImludmFsaWREYXRlTWVzc2FnZVwiLCBcImludmFsaWRMYWJlbFwiLCBcImxhYmVsRnVuY1wiLCBcImxlZnRBcnJvd0J1dHRvblByb3BzXCIsIFwibGVmdEFycm93SWNvblwiLCBcImxvYWRpbmdJbmRpY2F0b3JcIiwgXCJtYXhEYXRlXCIsIFwibWF4RGF0ZU1lc3NhZ2VcIiwgXCJtaW5EYXRlXCIsIFwibWluRGF0ZU1lc3NhZ2VcIiwgXCJtaW51dGVzU3RlcFwiLCBcIm9uQWNjZXB0XCIsIFwib25DaGFuZ2VcIiwgXCJvbkNsb3NlXCIsIFwib25Nb250aENoYW5nZVwiLCBcIm9uT3BlblwiLCBcIm9uWWVhckNoYW5nZVwiLCBcIm9wZW5Ub1wiLCBcIm9yaWVudGF0aW9uXCIsIFwicmVuZGVyRGF5XCIsIFwicmlnaHRBcnJvd0J1dHRvblByb3BzXCIsIFwicmlnaHRBcnJvd0ljb25cIiwgXCJzaG91bGREaXNhYmxlRGF0ZVwiLCBcInN0cmljdENvbXBhcmVEYXRlc1wiLCBcInRpbWVJY29uXCIsIFwiVG9vbGJhckNvbXBvbmVudFwiLCBcInZhbHVlXCIsIFwidmFyaWFudFwiLCBcInZpZXdzXCJdKTtcblxuICAgIHZhciBpbmplY3RlZFByb3BzID0gZ2V0Q3VzdG9tUHJvcHMgPyBnZXRDdXN0b21Qcm9wcyhwcm9wcykgOiB7fTtcbiAgICB2YXIgb3B0aW9ucyA9IHVzZU9wdGlvbnMocHJvcHMpO1xuXG4gICAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKHByb3BzLCBvcHRpb25zKSxcbiAgICAgICAgcGlja2VyUHJvcHMgPSBfdXNlU3RhdGUucGlja2VyUHJvcHMsXG4gICAgICAgIGlucHV0UHJvcHMgPSBfdXNlU3RhdGUuaW5wdXRQcm9wcyxcbiAgICAgICAgd3JhcHBlclByb3BzID0gX3VzZVN0YXRlLndyYXBwZXJQcm9wcztcblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFdyYXBwZXIsIF9leHRlbmRzKHtcbiAgICAgIHZhcmlhbnQ6IHZhcmlhbnQsXG4gICAgICBJbnB1dENvbXBvbmVudDogSW5wdXQsXG4gICAgICBEYXRlSW5wdXRQcm9wczogaW5wdXRQcm9wc1xuICAgIH0sIGluamVjdGVkUHJvcHMsIHdyYXBwZXJQcm9wcywgb3RoZXIpLCBjcmVhdGVFbGVtZW50KFBpY2tlciwgX2V4dGVuZHMoe30sIHBpY2tlclByb3BzLCB7XG4gICAgICBhbGxvd0tleWJvYXJkQ29udHJvbDogYWxsb3dLZXlib2FyZENvbnRyb2wsXG4gICAgICBhbXBtOiBhbXBtLFxuICAgICAgYW5pbWF0ZVllYXJTY3JvbGxpbmc6IGFuaW1hdGVZZWFyU2Nyb2xsaW5nLFxuICAgICAgZGF0ZVJhbmdlSWNvbjogZGF0ZVJhbmdlSWNvbixcbiAgICAgIGRpc2FibGVGdXR1cmU6IGRpc2FibGVGdXR1cmUsXG4gICAgICBkaXNhYmxlUGFzdDogZGlzYWJsZVBhc3QsXG4gICAgICBkaXNhYmxlVG9vbGJhcjogZGlzYWJsZVRvb2xiYXIsXG4gICAgICBoaWRlVGFiczogaGlkZVRhYnMsXG4gICAgICBsZWZ0QXJyb3dCdXR0b25Qcm9wczogbGVmdEFycm93QnV0dG9uUHJvcHMsXG4gICAgICBsZWZ0QXJyb3dJY29uOiBsZWZ0QXJyb3dJY29uLFxuICAgICAgbG9hZGluZ0luZGljYXRvcjogbG9hZGluZ0luZGljYXRvcixcbiAgICAgIG1heERhdGU6IG1heERhdGUsXG4gICAgICBtaW5EYXRlOiBtaW5EYXRlLFxuICAgICAgbWludXRlc1N0ZXA6IG1pbnV0ZXNTdGVwLFxuICAgICAgb25Nb250aENoYW5nZTogb25Nb250aENoYW5nZSxcbiAgICAgIG9uWWVhckNoYW5nZTogb25ZZWFyQ2hhbmdlLFxuICAgICAgb3BlblRvOiBvcGVuVG8sXG4gICAgICBvcmllbnRhdGlvbjogb3JpZW50YXRpb24sXG4gICAgICByZW5kZXJEYXk6IHJlbmRlckRheSxcbiAgICAgIHJpZ2h0QXJyb3dCdXR0b25Qcm9wczogcmlnaHRBcnJvd0J1dHRvblByb3BzLFxuICAgICAgcmlnaHRBcnJvd0ljb246IHJpZ2h0QXJyb3dJY29uLFxuICAgICAgc2hvdWxkRGlzYWJsZURhdGU6IHNob3VsZERpc2FibGVEYXRlLFxuICAgICAgc3RyaWN0Q29tcGFyZURhdGVzOiBzdHJpY3RDb21wYXJlRGF0ZXMsXG4gICAgICB0aW1lSWNvbjogdGltZUljb24sXG4gICAgICBUb29sYmFyQ29tcG9uZW50OiBUb29sYmFyQ29tcG9uZW50LFxuICAgICAgdmlld3M6IHZpZXdzXG4gICAgfSkpKTtcbiAgfVxuXG4gIHJldHVybiBQaWNrZXJXaXRoU3RhdGU7XG59XG5cbmV4cG9ydCB7IEtleWJvYXJkRGF0ZUlucHV0IGFzIEssIFBpY2tlclRvb2xiYXIgYXMgUCwgVG9vbGJhckJ1dHRvbiQxIGFzIFQsIFB1cmVEYXRlSW5wdXQgYXMgYSwgdXNlS2V5Ym9hcmRQaWNrZXJTdGF0ZSBhcyBiLCBUb29sYmFyVGV4dCBhcyBjLCBtYWtlUGlja2VyV2l0aFN0YXRlIGFzIG0sIHBpY2sxMmhPcjI0aEZvcm1hdCBhcyBwLCB1c2VQaWNrZXJTdGF0ZSBhcyB1LCB2YWxpZGF0ZSBhcyB2IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWtlUGlja2VyV2l0aFN0YXRlLTVhNzljYjhhLmpzLm1hcFxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlTWVtbywgY3JlYXRlRWxlbWVudCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZ1bmMsIG9uZU9mVHlwZSwgb2JqZWN0LCBzdHJpbmcsIGVsZW1lbnQsIGFycmF5T2YgfSBmcm9tICdwcm9wLXR5cGVzJztcblxudmFyIE11aVBpY2tlcnNDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcbnZhciBNdWlQaWNrZXJzVXRpbHNQcm92aWRlciA9IGZ1bmN0aW9uIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyKF9yZWYpIHtcbiAgdmFyIFV0aWxzID0gX3JlZi51dGlscyxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGxvY2FsZSA9IF9yZWYubG9jYWxlLFxuICAgICAgbGliSW5zdGFuY2UgPSBfcmVmLmxpYkluc3RhbmNlO1xuICB2YXIgdXRpbHMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFV0aWxzKHtcbiAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgaW5zdGFuY2U6IGxpYkluc3RhbmNlXG4gICAgfSk7XG4gIH0sIFtVdGlscywgbGliSW5zdGFuY2UsIGxvY2FsZV0pO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChNdWlQaWNrZXJzQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB1dGlscyxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSk7XG59O1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICB1dGlsczogZnVuYy5pc1JlcXVpcmVkLFxuICBsb2NhbGU6IG9uZU9mVHlwZShbb2JqZWN0LCBzdHJpbmddKSxcbiAgY2hpbGRyZW46IG9uZU9mVHlwZShbZWxlbWVudC5pc1JlcXVpcmVkLCBhcnJheU9mKGVsZW1lbnQuaXNSZXF1aXJlZCldKS5pc1JlcXVpcmVkXG59IDogdm9pZCAwO1xuXG52YXIgY2hlY2tVdGlscyA9IGZ1bmN0aW9uIGNoZWNrVXRpbHModXRpbHMpIHtcbiAgaWYgKCF1dGlscykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBmaW5kIHV0aWxzIGluIGNvbnRleHQuIFlvdSBlaXRoZXIgYSkgZm9yZ290IHRvIHdyYXAgeW91ciBjb21wb25lbnQgdHJlZSBpbiBNdWlQaWNrZXJzVXRpbHNQcm92aWRlcjsgb3IgYikgbWl4ZWQgbmFtZWQgYW5kIGRpcmVjdCBmaWxlIGltcG9ydHMuICBSZWNvbW1lbmRhdGlvbjogdXNlIG5hbWVkIGltcG9ydHMgZnJvbSB0aGUgbW9kdWxlIGluZGV4LicpO1xuICB9XG59O1xuZnVuY3Rpb24gdXNlVXRpbHMoKSB7XG4gIHZhciB1dGlscyA9IHVzZUNvbnRleHQoTXVpUGlja2Vyc0NvbnRleHQpO1xuICBjaGVja1V0aWxzKHV0aWxzKTtcbiAgcmV0dXJuIHV0aWxzO1xufVxuXG5leHBvcnQgeyBNdWlQaWNrZXJzVXRpbHNQcm92aWRlciBhcyBNLCBNdWlQaWNrZXJzQ29udGV4dCBhcyBhLCB1c2VVdGlscyBhcyB1IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VVdGlscy1jZmI5NmFjOS5qcy5tYXBcbiIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxudmFyIFJpZm0gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoUmlmbSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmlmbShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLl9zdGF0ZSA9IG51bGw7XG4gICAgX3RoaXMuX2RlbCA9IGZhbHNlO1xuXG4gICAgX3RoaXMuX2hhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChldnQudGFyZ2V0LnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignUmlmbSBkb2VzIG5vdCBzdXBwb3J0IGlucHV0IHR5cGU9bnVtYmVyLCB1c2UgdHlwZT10ZWwgaW5zdGVhZC4nKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gLy8gRlVUVVJFOiB1c2UgZXZ0Lm5hdGl2ZUV2ZW50LmlucHV0VHlwZSBmb3IgZGVsIGV2ZW50LCBzZWUgY29tbWVudHMgYXQgb25rZXlkb3duXG5cblxuICAgICAgdmFyIHN0YXRlVmFsdWUgPSBfdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIHZhciB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XG4gICAgICB2YXIgaW5wdXQgPSBldnQudGFyZ2V0O1xuICAgICAgdmFyIG9wID0gdmFsdWUubGVuZ3RoID4gc3RhdGVWYWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgZGVsID0gX3RoaXMuX2RlbDtcblxuICAgICAgdmFyIG5vT3AgPSBzdGF0ZVZhbHVlID09PSBfdGhpcy5wcm9wcy5mb3JtYXQodmFsdWUpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgbG9jYWw6IHRydWVcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIHZhciByZWZ1c2UgPSBfdGhpcy5wcm9wcy5yZWZ1c2UgfHwgL1teXFxkXSsvZztcbiAgICAgICAgdmFyIGJlZm9yZSA9IHZhbHVlLnN1YnN0cigwLCBzZWxlY3Rpb25TdGFydCkucmVwbGFjZShyZWZ1c2UsICcnKTtcbiAgICAgICAgX3RoaXMuX3N0YXRlID0ge1xuICAgICAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgICAgICBiZWZvcmU6IGJlZm9yZSxcbiAgICAgICAgICBvcDogb3AsXG4gICAgICAgICAgZGk6IGRlbCAmJiBub09wLFxuICAgICAgICAgIGRlbDogZGVsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKF90aGlzLnByb3BzLnJlcGxhY2UgJiYgX3RoaXMucHJvcHMucmVwbGFjZShzdGF0ZVZhbHVlKSAmJiBvcCAmJiAhbm9PcCkge1xuICAgICAgICAgIHZhciBzdGFydCA9IC0xO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgIT09IGJlZm9yZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgc3RhcnQgPSBNYXRoLm1heChzdGFydCwgdmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGJlZm9yZVtpXS50b0xvd2VyQ2FzZSgpLCBzdGFydCArIDEpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgYyA9IHZhbHVlLnN1YnN0cihzdGFydCArIDEpLnJlcGxhY2UocmVmdXNlLCAnJylbMF07XG4gICAgICAgICAgc3RhcnQgPSB2YWx1ZS5pbmRleE9mKGMsIHN0YXJ0ICsgMSk7XG4gICAgICAgICAgdmFsdWUgPSBcIlwiICsgdmFsdWUuc3Vic3RyKDAsIHN0YXJ0KSArIHZhbHVlLnN1YnN0cihzdGFydCArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZ2ID0gX3RoaXMucHJvcHMuZm9ybWF0KHZhbHVlKTtcblxuICAgICAgICBpZiAoc3RhdGVWYWx1ZSA9PT0gZnYpIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShmdik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5faEtEID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKGV2dC5jb2RlID09PSAnRGVsZXRlJykge1xuICAgICAgICBfdGhpcy5fZGVsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2hLVSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmIChldnQuY29kZSA9PT0gJ0RlbGV0ZScpIHtcbiAgICAgICAgX3RoaXMuX2RlbCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcbiAgICAgIGxvY2FsOiB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBSaWZtLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHN0YXRlLmxvY2FsID8gc3RhdGUudmFsdWUgOiBwcm9wcy52YWx1ZSxcbiAgICAgIGxvY2FsOiBmYWxzZVxuICAgIH07XG4gIH07XG5cbiAgdmFyIF9wcm90byA9IFJpZm0ucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9oYW5kbGVDaGFuZ2UgPSB0aGlzLl9oYW5kbGVDaGFuZ2UsXG4gICAgICAgIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZSxcbiAgICAgICAgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIHJldHVybiBjaGlsZHJlbih7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBvbkNoYW5nZTogX2hhbmRsZUNoYW5nZVxuICAgIH0pO1xuICB9IC8vIGRlbGV0ZSB3aGVuICBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSW5wdXRFdmVudC9pbnB1dFR5cGUgd2lsbCBiZSBzdXBwb3J0ZWQgYnkgYWxsIG1ham9yIGJyb3dzZXJzXG4gIDtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faEtEKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2hLVSk7XG4gIH0gLy8gZGVsZXRlIHdoZW4gIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JbnB1dEV2ZW50L2lucHV0VHlwZSB3aWxsIGJlIHN1cHBvcnRlZCBieSBhbGwgbWFqb3IgYnJvd3NlcnNcbiAgO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oS0QpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5faEtVKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBfc3RhdGUgPSB0aGlzLl9zdGF0ZTtcblxuICAgIGlmIChfc3RhdGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICB2YXIgc3RhcnQgPSAtMTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgIT09IF9zdGF0ZS5iZWZvcmUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgc3RhcnQgPSBNYXRoLm1heChzdGFydCwgdmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKF9zdGF0ZS5iZWZvcmVbaV0udG9Mb3dlckNhc2UoKSwgc3RhcnQgKyAxKSk7XG4gICAgICB9IC8vIGZvcm1hdCB1c3VhbGx5IGxvb2tzIGJldHRlciB3aXRob3V0IHRoaXNcblxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5yZXBsYWNlICYmIChfc3RhdGUub3AgfHwgX3N0YXRlLmRlbCAmJiAhX3N0YXRlLmRpKSkge1xuICAgICAgICB3aGlsZSAodmFsdWVbc3RhcnQgKyAxXSAmJiAodGhpcy5wcm9wcy5yZWZ1c2UgfHwgL1teXFxkXSsvKS50ZXN0KHZhbHVlW3N0YXJ0ICsgMV0pKSB7XG4gICAgICAgICAgc3RhcnQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfc3RhdGUuaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBfc3RhdGUuaW5wdXQuc2VsZWN0aW9uRW5kID0gc3RhcnQgKyAxICsgKF9zdGF0ZS5kaSA/IDEgOiAwKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGF0ZSA9IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIFJpZm07XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCB7IFJpZm0gfTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IE1vdmllR2FsbGVyeSBmcm9tICcuLi9jb21wb25lbnRzL01vdmllR2FsbGVyeSc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvcGlja2Vycyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgICBoZWFkQ29udGFpbmVyOiB7XHJcbiAgICAgICAgbWFyZ2luOiAnNDVweCBhdXRvJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgdGV4dEZpZWxkOiB7XHJcbiAgICAgICAgd2lkdGg6ICc3MCUnLFxyXG4gICAgICAgIG1hcmdpbjogJzIwcHggYXV0bydcclxuICAgIH0sXHJcbiAgICBtb3ZpZUNvbnRhaW5lcjoge1xyXG4gICAgICAgIG1heFdpZHRoOiAnNzglJyxcclxuICAgICAgICBtYXJnaW46ICcxMHB4IGF1dG8gNDBweCdcclxuICAgIH1cclxufSk7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBtb3ZpZUlucHV0OiAnJyxcclxuICAgICAgICBtb3ZpZUFycmF5OiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAga2V5UHJlc3MgPSAoZSwgc3RhdGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1vdmllSW5wdXQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAgICAgLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT01MGY3YzcyOSZzPScgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb3ZpZUlucHV0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmdHlwZT1zZXJpZXMnXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vdmllQXJyYXkgPSByZXMuZGF0YS5TZWFyY2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmllQXJyYXk6IG1vdmllQXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkRpdlwiPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2ggZm9yIGFueSBtb3ZpZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VhcmNoIG1vdmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmtleVByZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vdmllQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8TW92aWVHYWxsZXJ5IG1vdmllQXJyYXk9e3RoaXMuc3RhdGUubW92aWVBcnJheX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5JbmRleC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShJbmRleCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=