import getConfig from 'next/config';

export { setCookie, destroyCookie, parseCookies } from 'nookies';

const { publicRuntimeConfig: { COOKIE_DOMAIN } } = getConfig();

export const BASE_COOKIE_OPTIONS = {
  path: '/',
  domain: COOKIE_DOMAIN,
};
