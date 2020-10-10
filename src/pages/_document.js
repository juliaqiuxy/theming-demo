import React from 'react';
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(
          <>
            <App
            // eslint-disable-next-line react/jsx-props-no-spreading
              {...props}
            />
          </>,
        ),
      });

      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {
              initialProps.styles
            }
            {
              sheet.getStyleElement()
            }
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    // eslint-disable-next-line no-underscore-dangle
    const pageProps = this.props.__NEXT_DATA__.props;

    let preferredTheme;
    if (pageProps) {
      ({ preferredTheme } = pageProps);
    }

    return (
      <Html lang="en" dir="ltr">
        <Head />
        <body className={preferredTheme}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
