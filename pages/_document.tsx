import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
        <meta name="description" content=""/>
        <meta name="theme-color" content="#f69435"/>
        <title>Coin Converter</title>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
