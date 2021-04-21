import "./global.scss";

import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content="BRS -Bms event Rule Standard-" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brs.bmssearch.net/" />
        <meta property="og:image" content="https://brs.bmssearch.net/ogp.png" />
        <meta
          property="og:description"
          content="BMS イベントにおける最小限のルールを共通化した規格です。"
        />
        <meta property="og:site_name" content="BRS" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <title>BRS -Bms event Rule Standard-</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Noto+Sans+JP:wght@400;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        />
      </Head>
      <MDXProvider components={{}}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}

export default MyApp;
