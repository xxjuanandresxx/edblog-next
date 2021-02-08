import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  } 

  render(){
    return (
      <Html lang="es">
        <Head />
        <body className="ed-grid">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}