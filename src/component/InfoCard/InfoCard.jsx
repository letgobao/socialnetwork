import React,{useState} from 'react'
import './InfoCard.css'
import CreateIcon from '@material-ui/icons/Create';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RoomIcon from '@material-ui/icons/Room';
import SchoolIcon from '@material-ui/icons/School';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import InfoModal from '../InfoModal/InfoModal';
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
                <b>Status: </b>Single
            </span>
        </div>
        <div className="info">
            <RoomIcon/>
            <span>
                <b>Lives in: </b>Ha Noi, Viet Nam
            </span>
        </div>
        <div className="info">
            <SchoolIcon/>
            <span>
                <b>Studies at: </b>Hanoi University of Science and Technology
            </span>
        </div>
        <div className="info">
            <RssFeedIcon/>
            <span>Has <b>200 followers</b></span>
        </div>
            <button className='button lo-btn'>Log out</button>
       
    </div>
  )
}

export default InfoCard