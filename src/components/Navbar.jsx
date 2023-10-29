import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import homeImage from '../assets/logo.png';

function Navbar() {
    const hoverAnimation = {
        scale: 1.02,
        color: "rgb(8,191,70)", // The color you want to flash
        transition: {
          // Use a tween transition for scale to match the color transition
          scale: {
            duration: 0.5,           // Match the duration with the color transition
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",       // Can be adjusted to match the feel of the color transition
          },
          color: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",       // Ensure both color and scale use the same easing
          },
        },
    };

    return (
        <div className="navbar">
            <Link className="home" to="/">
                <img src={homeImage} alt="Home" className="home-image" />
            </Link>
            <div className="nav-link-group">
                <motion.div classname="link-holder" whileHover={hoverAnimation}>
                    <Link className="nav-link attractions" to="/attractions">Attractions</Link>
                </motion.div>
                <motion.div classname="link-holder" whileHover={hoverAnimation}>
                    <Link className="nav-link services" to="/services">Services</Link>
                </motion.div>
                <motion.div classname="link-holder" whileHover={hoverAnimation}>
                    <Link className="nav-link tickets" to="/tickets">Tickets</Link>
                </motion.div>
            </div>
        </div>
    );
}

export default Navbar;


