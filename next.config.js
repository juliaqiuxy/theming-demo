module.exports = () => ({
  env: {},
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    COOKIE_DOMAIN: process.env.COOKIE_DOMAIN,
  },
});
