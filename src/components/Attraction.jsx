// Attraction.jsx
import React from 'react';
import './Attraction.css'; 

const Attraction = ({ id, imageUrl, title, tag, description }) => {

  let font = "";

  switch(id) {
    case 1:
      font = "font-1"
      break;
    case 2:
      font = "font-2"
      break;
    case 3:
      font = "font-3"
      break;
    case 4:
      font = "font-4"
      break;
    case 5:
      font = "font-5"
      break;
    case 6:
      font = "font-6"
      break;
  }

  return (
    
    <div className="attraction" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="attraction-content">
        <h3 className="attraction-title">{title}</h3>
        <p className="attraction-description">{tag}</p>
      </div>
      <div className="overlay">
        <div className="overlay-content">
          <h3 className={font}>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Attraction;
