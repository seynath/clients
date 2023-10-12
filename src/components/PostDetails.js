import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function PostDetails() {

  const [postDetail, setPostDetail] = useState({})


  const { id } = useParams()
  useEffect(() => {
    axios.get(`http://localhost:8000/post/${id}`)
      .then(response => {
        setPostDetail(response.data.post)
        console.log(response)
      })
  }, [])

  

  return (
    <div>
      <h1>Post Details</h1>
      <h2>{postDetail.topic}</h2>
      <h2>{postDetail.description}</h2>

    </div>
  )
}

export default PostDetails