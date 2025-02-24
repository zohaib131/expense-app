import { Html, Head, Main, NextScript } from "next/document";
import { DocumentContext } from 'next/document';

export default function Document(props: DocumentContext) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
