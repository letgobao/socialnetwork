import React,{useState} from 'react'
import './InfoCard.css'
import CreateIcon from '@material-ui/icons/Create';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RoomIcon from '@material-ui/icons/Room';
import SchoolIcon from '@material-ui/icons/School';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import InfoModal from '../InfoModal/InfoModal';
import { Link } from "react-router-dom";
const InfoCard = () => {
  const [openModal,setOpenModal] = useState(false)
  const [useInfo, setUserInfo] = useState({
    Status: 'Single',
    Lives: 'Ha Noi, Viet Nam',
    School: 'Hanoi University of Science and Technology',
    followers: 200
  })
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Your Infomation</h4>
            <CreateIcon onClick={()=>setOpenModal(true)}/>
        </div>
        <InfoModal open={openModal} updateInfo={setUserInfo} closeModal={setOpenModal} info={useInfo}/>
        <div className="info">
            <FavoriteIcon/>
            <span>
                <b>Status: </b>{useInfo.Status}
            </span>
        </div>
        <div className="info">
            <RoomIcon/>
            <span>
                <b>Lives in: </b>{useInfo.Lives}
            </span>
        </div>
        <div className="info">
            <SchoolIcon/>
            <span>
                <b>Studies at: </b>{useInfo.School}
            </span>
        </div>
        <div className="info">
            <RssFeedIcon/>
            <span>Has <b>{useInfo.followers} followers</b></span>
        </div>
        <Link to='/'>
            <button className='button lo-btn'>Log out</button>
        </Link>
       
    </div>
  )
}

export default InfoCard