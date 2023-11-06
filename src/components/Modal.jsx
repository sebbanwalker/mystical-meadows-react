// Modal.jsx
import React from 'react';
import './Modal.css';
import image from '../assets/construction.png';

const Modal = ({ id, onClose }) => {

  const modalContent = [
    <div>
        <img src={image} className="construction-image"></img>
    </div>,

    <div><p>Hello 2</p></div>,

    <div><p>Hello 3</p></div>,
    
    <div><p>Hello 4</p></div>
  ]

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {modalContent[0]}
        <button className="close-button" onClick={() => {
            console.log('Close button clicked');
            onClose();
            }}>
            Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
