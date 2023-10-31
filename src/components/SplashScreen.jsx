
import React from 'react';
import { motion } from 'framer-motion';
import logoImage from '../assets/logo.png';
import './SplashScreen.css';

const SplashScreen = () => {
  const containerVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 3 } },
    exit: { opacity: 0, scale: 1.4, transition: { duration: 1 } },
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
      <motion.img 
        src={logoImage} 
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