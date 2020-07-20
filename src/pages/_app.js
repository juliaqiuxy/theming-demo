import React from 'react';
import NextApp from 'next/app';

import { createGlobalStyle } from 'styled-components';

import { ThemeProvider, getThemePreference } from '../lib/useTheme';

import Head from '../components/Head/Head';

const lightVars = `
  --bg: #fcffff;
  --fg: #0d0e14;

  --accents-0: #AAAAAA;

  --accents-radius-1: 4px;
  --accents-radius-2: 6px;

  --dashed-border: #9B9B9B;

  --bg-overlay: #FFFFFF;
`;

const darkVars = `
  --bg: #0d0e14; 
  --fg: #EDEDED;

  --accents-0: #9B9B9B;

  --accents-radius-1: 4px;
  --accents-radius-2: 6px;

  --dashed-border: #9B9B9B;

  --bg-overlay: #0d0e14;
 `;

const themeVars = `
  // default theme in case refers-color-scheme is not supported
  :root {
    ${darkVars}
  }

  @media (prefers-color-scheme: light) {
    :root {
      ${lightVars}
    }

    // dark override
    .dark {
      ${darkVars}
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${darkVars}
    }
    
    // light override
    .light {
      ${lightVars}
    }
  }

  @media (prefers-color-scheme: no-preference) {}
`;

const GlobalStyle = createGlobalStyle`
  ${themeVars}

  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    background-color: var(--bg);
  }

  a {
    color: inherit;
  }

  body::-webkit-scrollbar {
      display: none;
  }
`;

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const ssrNow = Date.now();
    const preferredTheme = getThemePreference(ctx);

    return { pageProps, ssrNow, preferredTheme };
  }

  render() {
    const { Component, pageProps, preferredTheme } = this.props;
    return (
      <>
        <Head />
        <GlobalStyle />
        <ThemeProvider preferredTheme={preferredTheme}>
          <Component
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...pageProps}
          />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
