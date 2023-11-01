// TicketModal.jsx
import React from 'react';
import './TicketModal.css';
import { motion } from 'framer-motion';

const TicketModal = ({ isOpen, onClose }) => {
  // Variants for the backdrop
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  // Variants for the modal
  const modalVariants = {
    hidden: {
      scale: 0.5,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  // Only render the modal if it's open
  if (!isOpen) return null;

  return (
    <motion.div
      className="ticket-modal-backdrop"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose} // Close modal when backdrop is clicked
    >
      <motion.div
        className="ticket-modal-content"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()} // Stop click event from closing the modal when clicking on the content
      >
        <div>Searching for tickets...</div>
        <button onClick={() => {
            console.log('Close button clicked');
            onClose();
        }}>
            Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default TicketModal;

