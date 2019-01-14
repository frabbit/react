'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Link = void 0;

var _objectSpread2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/objectSpread'),
);

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/objectWithoutProperties'),
);

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/classCallCheck'),
);

var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/createClass'),
);

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/possibleConstructorReturn'),
);

var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/getPrototypeOf'),
);

var _inherits2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/inherits'),
);

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/defineProperty'),
);

var _react = _interopRequireWildcard(require('react'));

var _propTypes = require('prop-types');

var _reactRouterDom = require('react-router-dom');

var _classnames = _interopRequireDefault(require('classnames'));

var _constants = require('../../constants');

/**
 * Combines router navigation with standard link, seasoned with some spicy color schemes
 */
var Link =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Link, _PureComponent);

    function Link() {
      (0, _classCallCheck2.default)(this, Link);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(Link).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(Link, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            to = _this$props.to,
            children = _this$props.children,
            className = _this$props.className,
            normal = _this$props.normal,
            props = (0, _objectWithoutProperties2.default)(_this$props, [
              'to',
              'children',
              'className',
              'normal',
            ]); // React routers matchPath will return a match object if the link matches an
          // internal link otherwise it returns null. Uses the "Route" logic to match.

          var match = (0, _reactRouterDom.matchPath)(to, {
            path: '/',
            exact: false,
          });
          var Element = match ? _reactRouterDom.NavLink : 'a';
          return _react.default.createElement(
            Element,
            (0, _objectSpread2.default)(
              {},
              match
                ? {
                    to: to,
                  }
                : {
                    href: to,
                  },
              props,
              {
                className: (0, _classnames.default)(
                  !normal && ''.concat(_constants.OLT_NAMESPACE, 'Link'),
                  className,
                ),
              },
            ),
            children,
          );
        },
      },
    ]);
    return Link;
  })(_react.PureComponent);

exports.Link = Link;
(0, _defineProperty2.default)(Link, 'propTypes', {
  to: _propTypes.string.isRequired,
  normal: _propTypes.bool,
  children: Node,
  className: _propTypes.string,
});
(0, _defineProperty2.default)(Link, 'defaultProps', {
  normal: false,
  className: null,
  children: null,
});
