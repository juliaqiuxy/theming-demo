import React from 'react';
import NextHead from 'next/head';

const META_DESCRIPTION = '';
const TITLE = 'Theming Demo by Julia Qiu';

const GOOGLE_MAX_LENGTH = 160;

export const PageTitle = ({ title = TITLE, prepend = '', append = '' }) => (
  <NextHead>
    <title>{`${prepend}${title}${append}`}</title>
    <meta property="og:title" content={title} key="og:title" />
    <meta name="twitter:title" key="twitter:title" content={title} />
  </NextHead>
);

export const PageDescription = ({ description = META_DESCRIPTION }) => {
  if (description.length > GOOGLE_MAX_LENGTH) {
    // eslint-disable-next-line no-console
    console.warn(`You should keep your page description under ${GOOGLE_MAX_LENGTH} characters`);
  }

  return (
    <NextHead>
      <meta name="description" content={description} />
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
      <meta
        name="twitter:description"
        key="twitter:description"
        content={description}
      />
    </NextHead>
  );
};

const Head = () => (
  <NextHead>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="theme-color" content="#FFFFFF" />

    <link rel="shortcut icon" href="/images/theming.png" />
    <link rel="icon" type="image/x-icon" href="/images/theming.png" />
    <link rel="apple-touch-icon" href="/images/theming.png" />

    <link
      href="https://fonts.googleapis.com/css?family=Lato:100,300&display=swap"
      rel="stylesheet"
    />
  </NextHead>
);

export default Head;
