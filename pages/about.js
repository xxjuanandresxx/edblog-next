import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>About | {process.env.SITE_NAME}</title>
      </Head>
      <main>
        <h1>About Us</h1>
        <span>Lorem ipsum ...</span>
      </main>
    </div>
  )
}
