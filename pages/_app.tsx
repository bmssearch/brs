import "./global.scss";

import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
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
