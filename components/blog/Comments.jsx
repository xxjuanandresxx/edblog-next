import { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Comments({ id }) {
  const [ comments, setComments ] = useState()
  const [ number, setNumber ] = useState(0)
  useEffect( () => {
    Axios.get(`${process.env.API_BLOG}/posts/${id}/comments`)
      .then( response => {
        setComments(response.data)
      })
  }, [number])

  if (!comments) return (
    <div>
      <a onClick={() => setNumber(number + 1)}>Load Comments</a>
    </div>
  )

  return (
    <div>
      <h2>Comments</h2>
      {
        comments.map(comment => {
          return (
            <div key={comment.id}>
              <h3>{comment.email}</h3>
              <p>{comment.body}</p>
            </div>
          )
        })
      }
    </div>
  )
} 