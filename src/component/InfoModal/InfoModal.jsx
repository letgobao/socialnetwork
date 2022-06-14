import React,{useState} from 'react'
import Modal from '@material-ui/core/Modal';
import './InfoModal.css'
const InfoModal = ({open,closeModal,updateInfo,info}) => {
    const [status,setStatus] = useState(info.Status)
    const [lives,setLives] = useState(info.Lives)
    const [studies,setStudies] = useState(info.School)
    const handleUpdate = () => {
        console.log(status)
        updateInfo({
            Status: status,
            Lives: lives,
            School: studies,
            followers: info.followers
        })
        handleClose(false)
    }
    const handleClose = () => {
        closeModal(false)
    }
  return (
    <div className='InfoModal'>
        <Modal
        className='Modal'
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
          <form className="InfoForm">
            <h3>Your Information</h3>
            <div>
                <input type="text" className="modalInput" placeholder='Status' name='status' onChange={(e)=>setStatus(e.target.value)}/>
            </div>
            <div>
                <input type="text" className="modalInput" placeholder='Lives in' name='livesin' onChange={(e)=>setLives(e.target.value)}/>
            </div>
            <div>
                <input type="text" className="modalInput" placeholder='Study at' name='studyat' onChange={(e)=>setStudies(e.target.value)}/>
            </div>
            <button className="button md-btn" onClick={handleUpdate}>Save</button>
          </form>
      </Modal>
    </div>
  )
}

export default InfoModal