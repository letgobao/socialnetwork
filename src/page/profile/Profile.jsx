import React from 'react'
import ProfileLeft from '../../component/ProfileLeft/ProfileLeft'
import ProfileCard from '../../component/ProfileCard/ProfileCard'
import PostSide from '../../component/PostSide/PostSide'
import RightSide from '../../component/RightSide/RightSide'
import './Profile.css'
const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>

        <div className="Profile-center">
          <ProfileCard/>
          <PostSide/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile