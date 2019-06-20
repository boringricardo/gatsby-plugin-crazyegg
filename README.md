# gatsby-plugin-crazyegg

Easily add Crazy Egg to your Gatsby-powered site!

## Installation

Inside an existing `gatsby` project, run:

```bash
yarn add gatsby-plugin-crazyegg
```

You will need to have your `account number` ready for configuration.

To access your account number, head over to the [Crazy Egg Dashboard](https://app.crazyegg.com).

Go to `Account` > `Your profile`, and copy the account number shown.

## Configuration

```javascript
// Inside your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-crazyegg`,
    options: {
      account: YOUR_CRAZYEGG_ACCOUNT_NUMBER
    }
  }
]
```

## Notes

The Crazy Egg tracking script will only be included in your production build.

