import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | {process.env.SITE_NAME}</title>
      </Head>
      <main>
        <h1>EDBlog</h1>
        <span>{process.env.API_BLOG}</span>
      </main>
    </div>
  )
}
