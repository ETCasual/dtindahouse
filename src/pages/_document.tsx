import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <title>#DTINDAHOUSE ♥</title>
        <meta
          name="description"
          content="Come join us and witness our marriage!"
        />
        <meta name="url" content="https://dtindahouse.vercel.app/" />
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
