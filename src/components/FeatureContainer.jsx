// FeatureContainer.jsx

import React, { useState } from 'react';
import FeatureItem from './FeatureItem';
import Modal from './Modal';
import './FeatureContainer.css';
import image1 from '../assets/family-coaster.png';
import image2 from '../assets/festival.png';
import image3 from '../assets/burger.png';
import image4 from '../assets/coaster.png';

const FeatureContainer = () => {
  const [modalContentId, setModalContentId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSeeMoreClick = (id) => {
    setModalContentId(id);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalContentId(null)
    console.log('handleCloseModal: run')
  };

  return (
    <>
      <div className="home-feature-container">
        <FeatureItem
          id='1'
          imageUrl={image1}
          buttonText="See More"
          text="Family Deals"
          delay={0.1}
          onButtonClick={() => handleSeeMoreClick("1")}
        />
        <FeatureItem
          id='2'
          imageUrl={image2}
          buttonText="See More"
          text="Experience Meadow Festival 2024"
          delay={0.2}
          onButtonClick={() => handleSeeMoreClick("2")}
        />
        <FeatureItem
          id='3'
          imageUrl={image3}
          buttonText="See More"
          text="Feast Your Senses"
          delay={0.3}
          onButtonClick={() => handleSeeMoreClick("3")}
        />
        <FeatureItem
          id='4'
          imageUrl={image4}
          buttonText="See More"
          text="Rides To Remember"
          delay={0.4}
          onButtonClick={() => handleSeeMoreClick("4")}
        />
      </div>
      {isModalOpen && (
        <Modal
          key="feature-modal"
          id={modalContentId}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default FeatureContainer;
