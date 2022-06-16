import React,{useRef} from 'react'
import Modal from '@material-ui/core/Modal';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import './InfoModal.css'
const InfoModal = ({open,closeModal}) => {
    const avatarRef = useRef()
    const thumbRef = useRef()
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
                <input type="text" className="modalInput" placeholder='Status' name='status' />
            </div>
            <div>
                <input type="text" className="modalInput" placeholder='Lives in' name='livesin' />
            </div>
            <div>
                <input type="text" className="modalInput" placeholder='Study at' name='studyat' />
            </div>
            <div>
              <div className="update-option" style={{color: '#DC004E'}} onClick={()=>avatarRef.current.click()}>
                      <AccountBoxOutlinedIcon fontSize='large'/>
                      Avatar
              </div>
              <div className="update-option" style={{color: '#4CB256'}} onClick={()=>thumbRef.current.click()}>
                      <PhotoLibraryOutlinedIcon fontSize='large'/>
                      Cover Background
              </div>
            </div>
            <div style={{display:'none'}}>
              Profile Image
              <input type="file" name='avatarImg' ref={avatarRef}/>
              Cover Image
              <input type="file" name='thumbImg' ref={thumbRef}/>
            </div>
            <button className="button md-btn">Save</button>
          </form>
      </Modal>
    </div>
  )
}

export default InfoModal