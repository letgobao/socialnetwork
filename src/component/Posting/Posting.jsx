import React, {useState,useRef} from 'react'
import PostImg from '../../img/avatar.jpg'
import './Posting.css'
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
const Posting = () => {
    const [image,setImage] = useState(null)
    const imageRef = useRef()

    const handleUpImage = (event) => {
        if(event.target.files &&  event.target.files[0]) {
            let img = event.target.files[0]
            setImage({
                image: URL.createObjectURL(img),
            })
        }
    }
  return (
    <div className='Posting'>
        <img src={PostImg} alt="" />
        <div>
            <input type="text" placeholder='What are you thinking?' />
            <div className="post-option">
                <div className="option" style={{color: '#4CB256'}} onClick={()=>imageRef.current.click()}>
                    <PhotoLibraryOutlinedIcon/>
                    Photo
                </div>
                <div className="option" style={{color: '#4A4EB7'}}>
                    <PlayCircleOutlineOutlinedIcon/>
                    Video
                </div>
                <div className="option" style={{color: '#EF5757'}}>
                    <LocationOnOutlinedIcon/>
                    Location
                </div>
                <div className="option" style={{color: '#E1AE4A'}}>
                    <ScheduleOutlinedIcon/>
                    Schedule
                </div>
                <button className='button pt-btn'>Share</button>
                <div style={{display: 'none'}}>
                    <input type="file" name='upFile' ref={imageRef} onChange={handleUpImage}/>
                </div>
            </div>
            {image && (
                <div className="previewImage">
                    <CloseOutlinedIcon onClick={()=>setImage(null)}/>
                    <img src={image.image} alt="" />
                </div>
            )}
        </div>
    </div>
  )
}

export default Posting