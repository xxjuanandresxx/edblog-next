import Head from 'next/head'
import Header from '../components/sections/Header'

export default function About() {
  return (
    <div>
      <Head>
        <title>About | {process.env.SITE_NAME}</title>
      </Head>
      <Header/>
      <main>
        <h1>About Us</h1>
        <span>Lorem ipsum ...</span>
      </main>
    </div>
  )
}
