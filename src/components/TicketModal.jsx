import React, { useState, useEffect } from 'react';
import './TicketModal.css';
import { motion, AnimatePresence } from 'framer-motion';

const TicketModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  if (!isOpen) return null;

  const messageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.5 } },
    exit: { opacity: 0 }
  };

  return (
    <motion.div
      className="ticket-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="ticket-modal-content"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div class="content-filler">
            <AnimatePresence className="loader" wait>
            {loading ? (
                <motion.div
                key="loading"
                variants={messageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="message"
                >
                Searching for tickets...
                <div className="loading-icon"></div>
                </motion.div>
            ) : (
                <motion.div
                key="no-tickets"
                variants={messageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="message"
                >
                No tickets found :(
                </motion.div>
            )}
            </AnimatePresence>
            <button onClick={onClose} className="close-button">
            Close
            </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TicketModal;
