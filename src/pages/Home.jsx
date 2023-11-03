// Home.jsx

import { motion } from 'framer-motion';
import React from 'react';
import HomeBodyContainer from '../components/HomeBodyContainer';
import FeatureContainer from '../components/FeatureContainer';
import Footer from '../components/Footer';

const Home = ({ onOpenTicketModal }) => {

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

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <HomeBodyContainer onOpenTicketModal={onOpenTicketModal} />
      <FeatureContainer />
      <Footer />
    </motion.div>
  );
};

export default Home;
