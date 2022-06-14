import React from 'react'
import './Post.css'
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
const Post = ({data}) => {
  return (
    <div className='Post'>
        <div className="detail">
            <span className='user-name'>{data.name}</span>
            <span> {data.desc}</span>
        </div>
        
        <img src={data.img} alt="" />
        <div className="postReact">
            <FavoriteOutlinedIcon fontSize='large' style={{color: data.liked?'red':'#aaaaaa'}}/>
            <CommentOutlinedIcon fontSize='large'/>
            <SendOutlinedIcon fontSize='large'/>
        </div>
        <span className='likes'>{data.likes} likes</span>
    </div>
  )
}

export default Post