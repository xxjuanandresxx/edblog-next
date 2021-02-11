import Head from 'next/head'
import fetch from 'node-fetch'
import Comments from '../../components/blog/Comments'

export default function PostBlog({ post }) {
  return (
    <div>
      <Head>
        <title>Post {post.id} | {process.env.SITE_NAME}</title>
      </Head>
      <main>
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
        <Comments id={post.id}/>
      </main>
    </div>
  )
}

PostBlog.getInitialProps = async function(context) {
  const { id } = context.query
  const response = await fetch(`${process.env.API_BLOG}/posts/${id}`)
  const post = await response.json()

  return {
    post
  }
}