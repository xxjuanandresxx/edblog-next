import Header from '../components/sections/Header'
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
