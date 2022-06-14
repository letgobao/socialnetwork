import React from 'react'
import './RightSide.css'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import TrendCard from '../TrendCard/TrendCard';

const RightSide = () => {
  return (
    <div className="RightSide">
        <div className="navIcon">
            <HomeRoundedIcon fontSize='large' style={{color: '#46AE12'}}/>
            <NotificationsActiveRoundedIcon fontSize='large' style={{color: '#FFCA28'}}/>
            <ChatBubbleOutlineRoundedIcon fontSize='large' style={{color: '#F75894'}}/>
            <SettingsRoundedIcon fontSize='large' style={{color: '#007CF7'}}/>
        </div>

        <TrendCard/>

        <button className='button td-btn'>Share</button>
    </div>
  )
}

export default RightSide