import { motion } from 'framer-motion';
import React from 'react';

const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "100vw",
    }
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1
  };


const Attractions = () => {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {'Add Content Here'}
      </motion.div>
    );
  };
  

  export default Attractions;