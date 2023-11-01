//FeatureItem

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FeatureContainer.css';

const FeatureItem = ({ imageUrl, delay, text, onButtonClick }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
      triggerOnce: true,
      rootMargin: '-200px 0px',
    });
  
    React.useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
  
    const variants = {
      hidden: { y: 100, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          delay,
          type: 'spring',
          stiffness: 120,
          damping: 20,
        },
      },
    };
  
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="feature-item"
      >
        <div className="feature-image-container">
          <img src={imageUrl} alt="Feature" className="feature-image" />
          <div className="feature-image-overlay"></div>
          <div className="feature-text">{text}</div>
        </div>
        <button className="feature-button" onClick={onButtonClick}>See More</button>
      </motion.div>
    );
  };

  export default FeatureItem;

