import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FeatureContainer.css';
import image1 from '../assets/family-coaster.png';
import image2 from '../assets/festival.png';
import image3 from '../assets/burger.png';
import image4 from '../assets/coaster.png';

const FeatureItem = ({ imageUrl, buttonText, delay, text }) => {
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
      <button className="feature-button">{buttonText}</button>
    </motion.div>
  );
};

const FeatureContainer = () => {
  return (
    <div className="home-feature-container">
      <FeatureItem imageUrl={image1} buttonText="See More" text="Family Tickets" delay={0.1} />
      <FeatureItem imageUrl={image2} buttonText="See More" text="Family Tickets" delay={0.2} />
      <FeatureItem imageUrl={image3} buttonText="See More" text="Family Tickets" delay={0.3} />
      <FeatureItem imageUrl={image4} buttonText="See More" text="Family Tickets" delay={0.4} />
    </div>
  );
};

export default FeatureContainer;
