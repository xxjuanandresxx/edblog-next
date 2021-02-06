import Head from 'next/head'
import Header from '../components/sections/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | {process.env.SITE_NAME}</title>
      </Head>
      <Header/>
      <main>
        <h1>EDBlog</h1>
        <span>{process.env.API_BLOG}</span>
      </main>
    </div>
  )
}
