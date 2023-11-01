//FeatureModalParent

import React, { useState } from 'react';
import FeatureModal from './FeatureModal';

const FeatureModalParent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const features = [
    {
        id: 1,
        title: "Feature 1",
        text: "Family Deals", // Assuming this text is to be displayed
        image: image1, // Assign the correct image for each feature
        delay: 0.1, // Assign the delay you want for the animation
        content: (
          <div>
            <h2>Feature 1 Title</h2>
            <p>Description for feature 1...</p>
            {/* Add more content as needed */}
          </div>
        ),
      },
    {
        id: 2,
        title: "Feature 2",
        text: "Family Deals", // Assuming this text is to be displayed
        image: image2, // Assign the correct image for each feature
        delay: 0.1, // Assign the delay you want for the animation
        content: (
            <div>
            <h2>Feature 1 Title</h2>
            <p>Description for feature 1...</p>
            {/* Add more content as needed */}
            </div>
        ),
    },
    {
        id: 3,
        title: "Feature 2",
        text: "Family Deals", // Assuming this text is to be displayed
        image: image3, // Assign the correct image for each feature
        delay: 0.1, // Assign the delay you want for the animation
        content: (
            <div>
            <h2>Feature 1 Title</h2>
            <p>Description for feature 1...</p>
            {/* Add more content as needed */}
            </div>
        ),
    },
    {
        id: 4,
        title: "Feature 2",
        text: "Family Deals", // Assuming this text is to be displayed
        image: image4, // Assign the correct image for each feature
        delay: 0.1, // Assign the delay you want for the animation
        content: (
            <div>
            <h2>Feature 1 Title</h2>
            <p>Description for feature 1...</p>
            {/* Add more content as needed */}
            </div>
        ),
    },
  ];
  

  const openModal = (index) => {
    setCurrentFeatureIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNextFeature = () => {
    setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const goToPreviousFeature = () => {
    setCurrentFeatureIndex((prevIndex) =>
      prevIndex === 0 ? features.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <FeatureContainer
      features={features} // Make sure this prop is passed
      onSeeMore={openModal}
    />

    <FeatureModal
      isOpen={isModalOpen}
      onClose={closeModal}
      featureContent={features[currentFeatureIndex].content}
      goToNext={goToNextFeature}
      goToPrevious={goToPreviousFeature}
    />
  </>
  );
};

export default FeatureModalParent;
