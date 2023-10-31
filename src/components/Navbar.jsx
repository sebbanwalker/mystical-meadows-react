import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import homeImage from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const hoverAnimation = {
        scale: 1.02,
        color: "rgb(8,191,70)",
        transition: {

          scale: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
          color: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
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
                    <Link className="nav-link attractions" to="/attractions">ATTRACTIONS</Link>
                </motion.div>
                <motion.div classname="link-holder" whileHover={hoverAnimation}>
                    <Link className="nav-link services" to="/services">SERVICES</Link>
                </motion.div>
                <motion.div classname="link-holder" whileHover={hoverAnimation}>
                    <Link className="nav-link tickets" to="/tickets">TICKETS</Link>
                </motion.div>
            </div>
            <div className="navbar-controls">
                <button className="icon-button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <Link className="icon-button" to="/login">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
                <Link className="icon-button" to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;


