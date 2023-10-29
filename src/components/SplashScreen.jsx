// SplashScreen.jsx

import React from 'react';
import { motion } from 'framer-motion';
import logoImage from '../assets/logo.png';
import './SplashScreen.css'; // Ensure you have the CSS file imported

const SplashScreen = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const logoVariants = {
    initial: { scale: 0.8 },
    animate: { scale: 1, transition: { duration: 0.5, yoyo: Infinity, ease: "easeInOut" } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="splash-screen"
    >
      {/* Your logo or any other content you want to display */}
      <motion.img 
        src={logoImage} // Replace with your logo's path
        variants={logoVariants}
        initial="initial"
        animate="animate"
        className="logo"
        alt="Logo"
      />
      <h1 className="slogan">Fantasy awaits at every turn</h1>
    </motion.div>
  );
};

export default SplashScreen;