import React from 'react'
import Follower from '../Follower/Follower'
import ProfileCard from '../ProfileCard/ProfileCard'
import Search from '../LogoSearch/LogoSearch'
import './ProfileSide.css'

const ProfileSide = () => {
  return (
    <div className='profileSide'>
      <Search/>
      <ProfileCard/>
      <Follower/>
    </div>
  )
}

export default ProfileSide