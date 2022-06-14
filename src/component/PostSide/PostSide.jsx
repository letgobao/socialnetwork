import React from 'react'
import Posting from '../Posting/Posting'
import Posts from '../Posts/Posts'
import './PostSide.css'
const PostSide = () => {
  return (
    <div className='PostSide'>
        <Posting/>
        <Posts/>
    </div>
  )
}

export default PostSide