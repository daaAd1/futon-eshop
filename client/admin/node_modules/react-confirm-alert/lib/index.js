'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

exports.confirmAlert = confirmAlert;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactConfirmAlert = (_temp2 = _class = function (_Component) {
  _inherits(ReactConfirmAlert, _Component);

  function ReactConfirmAlert() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactConfirmAlert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactConfirmAlert.__proto__ || Object.getPrototypeOf(ReactConfirmAlert)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickButton = function (button) {
      if (button.onClick) button.onClick();
      _this.close();
    }, _this.close = function () {
      removeBodyClass();
      removeElementReconfirm();
      removeSVGBlurReconfirm();
    }, _this.keyboardClose = function (event) {
      if (event.keyCode === 27) {
        _this.close();
      }
    }, _this.componentDidMount = function () {
      document.addEventListener('keydown', _this.keyboardClose, false);
    }, _this.componentWillUnmount = function () {
      document.removeEventListener('keydown', _this.keyboardClose, false);
      _this.props.willUnmount();
    }, _this.renderCustomUI = function () {
      var _this$props = _this.props,
          title = _this$props.title,
          message = _this$props.message,
          customUI = _this$props.customUI;

      var dataCustomUI = {
        title: title,
        message: message,
        onClose: _this.close
      };

      return customUI(dataCustomUI);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactConfirmAlert, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          title = _props.title,
          message = _props.message,
          buttons = _props.buttons,
          childrenElement = _props.childrenElement,
          customUI = _props.customUI;


      return _react2.default.createElement(
        'div',
        { className: 'react-confirm-alert-overlay' },
        _react2.default.createElement(
          'div',
          { className: 'react-confirm-alert' },
          customUI ? this.renderCustomUI() : _react2.default.createElement(
            'div',
            { className: 'react-confirm-alert-body' },
            title && _react2.default.createElement(
              'h1',
              null,
              title
            ),
            message,
            childrenElement(),
            _react2.default.createElement(
              'div',
              { className: 'react-confirm-alert-button-group' },
              buttons.map(function (button, i) {
                return _react2.default.createElement(
                  'button',
                  {
                    key: i,
                    onClick: function onClick() {
                      return _this2.handleClickButton(button);
                    }
                  },
                  button.label
                );
              })
            )
          )
        )
      );
    }
  }]);

  return ReactConfirmAlert;
}(_react.Component), _class.propTypes = {
  title: _propTypes2.default.string,
  message: _propTypes2.default.string,
  buttons: _propTypes2.default.array.isRequired,
  childrenElement: _propTypes2.default.func,
  customUI: _propTypes2.default.func,
  willUnmount: _propTypes2.default.func
}, _class.defaultProps = {
  buttons: [{
    label: 'Cancel',
    onClick: function onClick() {
      return null;
    }
  }, {
    label: 'Confirm',
    onClick: function onClick() {
      return null;
    }
  }],
  childrenElement: function childrenElement() {
    return null;
  },
  willUnmount: function willUnmount() {
    return null;
  }
}, _temp2);
exports.default = ReactConfirmAlert;


function createSVGBlurReconfirm() {
  var svgNS = 'http://www.w3.org/2000/svg';
  var feGaussianBlur = document.createElementNS(svgNS, 'feGaussianBlur');
  feGaussianBlur.setAttribute('stdDeviation', '0.7');

  var filter = document.createElementNS(svgNS, 'filter');
  filter.setAttribute('id', 'gaussian-blur');
  filter.appendChild(feGaussianBlur);

  var svgElem = document.createElementNS(svgNS, 'svg');
  svgElem.setAttribute('id', 'react-confirm-alert-firm-svg');
  svgElem.setAttribute('class', 'react-confirm-alert-svg');
  svgElem.appendChild(filter);

  document.body.appendChild(svgElem);
}

function removeSVGBlurReconfirm() {
  var svg = document.getElementById('react-confirm-alert-firm-svg');
  svg.parentNode.removeChild(svg);
  document.body.children[0].classList.remove('react-confirm-alert-blur');
}

function createElementReconfirm(properties) {
  document.body.children[0].classList.add('react-confirm-alert-blur');
  var divTarget = document.createElement('div');
  divTarget.id = 'react-confirm-alert';
  document.body.appendChild(divTarget);
  (0, _reactDom.render)(_react2.default.createElement(ReactConfirmAlert, properties), divTarget);
}

function removeElementReconfirm() {
  var target = document.getElementById('react-confirm-alert');
  (0, _reactDom.unmountComponentAtNode)(target);
  target.parentNode.removeChild(target);
}

function addBodyClass() {
  document.body.classList.add('react-confirm-alert-body-element');
}

function removeBodyClass() {
  document.body.classList.remove('react-confirm-alert-body-element');
}

function confirmAlert(properties) {
  addBodyClass();
  createSVGBlurReconfirm();
  createElementReconfirm(properties);
}