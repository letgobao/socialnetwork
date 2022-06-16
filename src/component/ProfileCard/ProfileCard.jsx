import React from 'react'
import Thumb from '../../img/thumb.jpg'
import Avatar from '../../img/avatar.jpg'
import './ProfileCard.css'

const ProfileCard = () => {

  return (
    <div className='ProfileCard'>
        <div className="ProfileAvatar">
            <img src={Thumb} alt="" />
            <img src={Avatar} alt="" />
        </div>

        <div className="ProfileInfo">
            <span className='user-name'>Hoang Ngoc Bao</span>
            <span>Front End Developer</span>
        </div>

        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>1000</span>
                    <span>Followings</span>
                </div>
                <div className="rightline"></div>
                <div className="follow">
                    <span>1</span>
                    <span>Followers</span>
                </div>

            </div>            
            <hr />
        </div>
            <span className='user-name'> My Profile</span>
         
    </div>
  )
}

export default ProfileCard