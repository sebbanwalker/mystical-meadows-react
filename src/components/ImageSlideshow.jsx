// ImageSlideshow.jsx
import React, { useState, useEffect } from 'react';
import './ImageSlideshow.css'; 

const ImageSlideshow = ({ images, interval = 3000 }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, interval);

    return () => clearTimeout(timeoutId);
  }, [currentImage, images.length, interval]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`fade-image ${index === currentImage ? 'visible' : ''}`}
          style={{ backgroundImage: `url(${image.url})` }}
        >
          <div className="text-overlay">{image.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlideshow;

