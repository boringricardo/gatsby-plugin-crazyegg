import React from 'react';

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV !== 'production') {
    const { accountNumber } = pluginOptions;
    const paddedAccount = String(accountNumber).padStart(8, '0');
    return setHeadComponents([
      <script
        key={`gatsby-plugin-crazyegg`}
        type="text/javascript"
        src={`https://script.crazyegg.com/pages/scripts/${paddedAccount.slice(0,4)}/${paddedAccount.slice(4)}`}
        async="async"
      />,
    ])
  }
}
