
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FeatureContainer.css';
import image1 from '../assets/family-coaster.png';
import image2 from '../assets/festival.png';
import image3 from '../assets/burger.png';
import image4 from '../assets/coaster.png';

const FeatureItem = ({ imageUrl, buttonText, delay, text, onSeeMore }) => {
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
      <button className="feature-button" onClick={onSeeMore}>{buttonText}</button>
    </motion.div>
  );
};

const FeatureContainer = ({ onSeeMore }) => {
  // Features array could be defined outside of the component if it doesn't change
  const features = [
    { id: 1, image: image1, text: "Family Deals", delay: 0.1 },
    { id: 2, image: image2, text: "Experience Meadow Festival 2024", delay: 0.2 },
    { id: 3, image: image3, text: "Feast Your Senses", delay: 0.3 },
    { id: 4, image: image4, text: "Rides To Remember", delay: 0.4 },
  ];
  
  return (
    <div className="home-feature-container">
      {features.map((feature, index) => (
        <FeatureItem
          key={feature.id}
          imageUrl={feature.image} // Assuming you have an 'image' field in your features
          buttonText="See More"
          text={feature.title}
          delay={index * 0.1} // Or however you want to calculate delay
          onSeeMore={() => onSeeMore(index)}
        />
      ))}
    </div>
  );
};

export default FeatureContainer;
