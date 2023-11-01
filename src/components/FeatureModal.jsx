//FeatureModal

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeatureModal = ({ isOpen, onClose, featureContent, goToNext, goToPrevious }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-overlay"
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          onClick={(e) => e.stopPropagation()} // Prevents click from closing the modal
          // Add your variants and animations for the modal here
        >
          <button className="close-modal" onClick={onClose}>
            &times;
          </button>

          {/* Feature Content goes here */}
          {featureContent}

          <button className="previous" onClick={goToPrevious}>
            &lt;
          </button>
          <button className="next" onClick={goToNext}>
            &gt;
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FeatureModal;
