import { motion } from 'framer-motion';
import React from 'react';
import ServicesContainer from '../components/ServicesContainer';
import Footer from '../components/Footer';

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    display: 'none'
  },
  in: {
    opacity: 1,
    x: 0,
    display: 'block',
    transition: {
      x: { 
        type: "tween",
        ease: "anticipate",
        duration: 1
      }
    }
  },
  out: {
    opacity: 0,
    x: "100vw",
    transition: {
      opacity: { 
        duration: 0.5
      },
      x: { 
        type: "tween",
        ease: "anticipate",
        duration: 0.5,
      },
      transitionEnd: {
        display: 'none'
      }
    }
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1
};
  
const Services = () => {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >s
        <ServicesContainer/>
        <Footer />
      </motion.div>
    );
  };

  export default Services;