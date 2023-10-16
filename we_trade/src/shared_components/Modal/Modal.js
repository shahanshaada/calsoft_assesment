import React from "react";
import { Modal } from "react-bootstrap";
import styles from './Modal.module.scss'
function SharedModal(props){
    console.log(props)
    const {handleChangeScreen, show, handleClose, size, modalTitle,modalDescription,modalButtonItems } = props;
    return(
        <Modal onClose={handleClose} size={size} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className={styles.modalTitle}>{modalTitle}</div>

          {modalDescription != '' && <div className={styles.modalDescription}>{modalDescription}</div>}
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>{modalButtonItems.map((item)=>{return(
            <button onClick={() =>item.proceed? handleChangeScreen():handleClose()}>{item.label}</button>
        )})}</Modal.Footer>
      </Modal>
    )
  };
  export default SharedModal;