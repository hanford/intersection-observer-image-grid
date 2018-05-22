import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const stylesTAG = extractCritical(page.html)

    return {
      ...renderPage(),
      ...stylesTAG
    }
  }

  render () {
    return (
      <html>
        <Head>
          <style>{` body { margin: 0;padding: 0 } `}</style>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
