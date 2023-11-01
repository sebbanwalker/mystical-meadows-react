import React, { useState, useEffect } from 'react';
import './TicketModal.css';
import { motion, AnimatePresence } from 'framer-motion';

const TicketModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Only render the modal if it's open
  if (!isOpen) return null;

  // Variants for fade in and out
  const messageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
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
        <AnimatePresence wait>
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
              {/* Replace the emoji with your loading spinner if needed */}
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
              No tickets found
            </motion.div>
          )}
        </AnimatePresence>
        <button onClick={onClose}>
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default TicketModal;
