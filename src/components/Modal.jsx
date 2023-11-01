// Modal.jsx
import React from 'react';
import './Modal.css'; // You'll need to create this CSS file for styling
import image1 from '../assets/family-coaster.png';
import image2 from '../assets/festival.png';
import image3 from '../assets/burger.png';
import image4 from '../assets/coaster.png';

const Modal = ({ id, onClose }) => {

  const modalContent = [
    <div>
        <h1>New Family Deals</h1>
        <p>What's up</p>
    </div>,

    <div><p>Hello 2</p></div>,

    <div><p>Hello 3</p></div>,
    
    <div><p>Hello 4</p></div>
  ]

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {modalContent[id-1]}
        <button onClick={() => {
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
