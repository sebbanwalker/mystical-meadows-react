//Home.jsx

import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import HomeBodyContainer from '../components/HomeBodyContainer';
import FeatureContainer from '../components/FeatureContainer';
import Footer from '../components/Footer';

// Define the variants inside the component if they need to access props
const Home = ({ isFirstMount }) => {

    useEffect(() => {
        console.log('isFirstMount changed:', isFirstMount);
        }, [isFirstMount]);

  // Conditional variants based on isFirstMount
  const pageVariants = {
    initial: {
      opacity: isFirstMount ? 1 : 0,
      x: isFirstMount ? 0 : "-100vw", // No slide if it's the first mount
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
  console.log(isFirstMount);
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <HomeBodyContainer />
      <FeatureContainer />
      <Footer />
    </motion.div>
  );
};

export default Home;
