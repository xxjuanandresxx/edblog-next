import fetch from 'node-fetch'
import Post from '../components/blog/Post'
import { NextSeo } from 'next-seo'

export default function Home({ posts }) {
  return (
    <div>
      {/* <Head>
        <title>Home | {process.env.SITE_NAME}</title>
      </Head> */}
      <NextSeo
        title = "Bienvenido a mi Blog"
        description = "EDBlog es una creación del curso de NextJS de EDTeam"
        openGraph = {{
          url : "https://ed.team",
          title : "Bienvenido a EDBlog",
          description : "EDBlog es una creación del curso de NextJS de EDTeam",
          images : [
            {
              url : "https://ed.team/images/algo.jpg",
              width : 1280,
              height : 720,
              alt: "Foto de EDTeam"
            }
          ],
          site_name : "EDBlog"
        }}
        twitter = {{
          handle : "@edteamlat",
          site : "@edteamlat",
          cardType : "summary_large_image" 
        }}
      />
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
