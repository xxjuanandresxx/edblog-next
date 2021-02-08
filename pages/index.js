import Head from 'next/head'
import fetch from 'node-fetch'
import Post from '../components/blog/Post'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Home | {process.env.SITE_NAME}</title>
      </Head>
      <main>
        <h1>EDBlog</h1>
        <div className="ed-grid m-grid-3 row-gap">
          {
            posts.map(p => <Post key={p.id} post={p}/>)
          }
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_BLOG}/posts`)
  const posts = await response.json() 
  return {
    props: {
      posts
    }
  }
}
