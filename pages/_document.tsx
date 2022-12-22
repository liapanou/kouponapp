import { Head, Html, Main, NextScript } from "next/document";
export default function Page() {
  return (
    <Html lang="el" data-theme="autumn">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <Head>
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=windows-1251"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
