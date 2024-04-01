import { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globalStyle'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
          <title>ChallengJob</title>
    </Head>
    <Component {...pageProps} />
    <GlobalStyle />
    </>
  )
}

export default MyApp
