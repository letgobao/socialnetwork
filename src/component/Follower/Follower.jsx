import React from 'react'
import { Followers } from '../../Data/FollowerData'
import './Follower.css'

const Follower = () => {
  return (
    <div className='FollowerCard'>
        <h3>Who is following you?</h3>

        {Followers.map((follower,id)=> {
            return(
                <div key={id} className='follower'>
                    <div>
                        <img src={follower.img}  alt="" className='followeImg'/>
                        <div className="follower-name">
                            <span className='user-name'>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button fl-btn'>Follow</button>
                </div>
            )
        })}
    </div>
  )
}

export default Follower