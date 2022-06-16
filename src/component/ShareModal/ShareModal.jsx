/** @format */

import React from "react";
import Modal from "@material-ui/core/Modal";
import Posting from "../Posting/Posting";
import "./ShareModal.css";
const ShareModal = ({ open, closeModal }) => {
  const handleClose = () => {
    closeModal(false);
  };
  return (
    <div>
      <Modal
        className='ShareModal'
        open={open}
        onClose={handleClose}
        closeAfterTransition>
        <div className='share-container'>
          <Posting />
        </div>
      </Modal>
    </div>
  );
};

export default ShareModal;
