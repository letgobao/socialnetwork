import React from 'react'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import Follower from '../Follower/Follower'
const ProfileLeft = () => {
  return (
    <div className="profileSide">
        <LogoSearch/>
        <InfoCard/>
        <Follower/>
    </div>
  )
}

export default ProfileLeft