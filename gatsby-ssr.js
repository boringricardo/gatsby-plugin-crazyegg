"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  if (process.env.NODE_ENV !== 'production') {
    var accountNumber = pluginOptions.accountNumber;
    var paddedAccount = String(accountNumber).padStart(8, '0');
    return setHeadComponents([_react["default"].createElement("script", {
      key: "gatsby-plugin-crazyegg",
      type: "text/javascript",
      src: "https://script.crazyegg.com/pages/scripts/" + paddedAccount.slice(0, 4) + "/" + paddedAccount.slice(4),
      async: "async"
    })]);
  }
};