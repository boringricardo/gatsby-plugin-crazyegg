const { onRenderBody } = require('../gatsby-ssr');

describe('Adds <script> for site to head', () => {
  beforeEach(() => {
    process.env = { NODE_ENV: 'production' };
  });

  it('adds the script to head', async () => {
    const pluginOptions = {
      accountNumber: '123',
    };
    const setHeadComponents = jest.fn();

    await onRenderBody({ setHeadComponents }, pluginOptions);

    expect(setHeadComponents).toMatchSnapshot();
    expect(setHeadComponents).toHaveBeenCalledTimes(1);
  });

  it('does not add <script> if the account number is empty', async () => {
    const pluginOptions = {};
    const setHeadComponents = jest.fn();

    await onRenderBody({ setHeadComponents }, pluginOptions);

    expect(setHeadComponents).toMatchSnapshot();
    expect(setHeadComponents).toHaveBeenCalledTimes(0);
  });

  it('correctly sets the account number on the script', async () => {
    const pluginOptions = {
      accountNumber: '123',
    };

    const head = await onRenderBody({ setHeadComponents }, pluginOptions);
    console.log(head);
  });

  it(`doesn't add the script if NODE_ENV is not "production"`, async () => {
    const pluginOptions = {
      accountNumber: '123',
    };
    const setHeadComponents = jest.fn();

    await onRenderBody({ setHeadComponents }, pluginOptions);

    expect(setHeadComponents).toMatchSnapshot();
    expect(setHeadComponents).toHaveBeenCalledTimes(0);
  });
})