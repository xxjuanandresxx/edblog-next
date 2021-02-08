import React from 'react'
import Link from 'next/link'

export default function Post({ post }) {
  return (
    <article className="s-radius-1 s-pxy-4 s-shadow-bottom course-card background s-shadow-card-micro white-color nowrap s-column s-mb-0">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <span>{`Escrito por el usuario: ${post.userId}`}</span>
      <Link href={`/blog/${post.id}`}><a>Read more</a></Link>
    </article>
  )
}