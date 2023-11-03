// AttractionContainer.jsx
import React from 'react';
import Attraction from './Attraction';
import './AttractionContainer.css'; // Again, remember to style this container as well
import image1 from '../assets/flume.png';
import image2 from '../assets/cove.png';
import image3 from '../assets/wizard.png';
import image4 from '../assets/elemental.png';
import image5 from '../assets/flamingo.png';
import image6 from '../assets/elder.png';

const attractions = [
  {
    id: 1,
    title: 'The Flume',
    tag: 'Fly down the creek of the northern forest in our log ride.',
    description: 'Fly down the creek of the northern forest in our log ride.',
    imageUrl: image1
  },
  {
    id: 2,
    title: 'The Cove',
    tag: 'Fly down the creek of the northern forest in our log ride.',
    description: 'Fly down the creek of the northern forest in our log ride.',
    imageUrl: image2
  },
  {
    id: 3,
    title: 'The Wizard',
    tag: 'Fly down the creek of the northern forest in our log ride.',
    description: 'Fly down the creek of the northern forest in our log ride.',
    imageUrl: image3
  },
  {
    id: 4,
    title: 'THE ELEMENTAL',
    tag: 'Fly down the creek of the northern forest in our log ride.',
    description: 'Fly down the creek of the northern forest in our log ride.',
    imageUrl: image4
  },
  {
    id: 5,
    title: 'The Flamingo',
    tag: 'Fly down the creek of the northern forest in our log ride.',
    description: 'Fly down the creek of the northern forest in our log ride.',
    imageUrl: image5
  },
  {
    id: 6,
    title: 'THE ELDER GOD',
    tag: 'Fly down the creek of the northern forest in our log ride.',
    description: 'Fly down the creek of the northern forest in our log ride.',
    imageUrl: image6
  },
];

const AttractionContainer = () => {
  return (
    <div className="attraction-parent">
    
        <div className="attraction-container">
        {attractions.map(attraction => (
            <Attraction
            id={attraction.id}
            title={attraction.title}
            description={attraction.description}
            tag={attraction.tag}
            imageUrl={attraction.imageUrl}
            />
        ))}
        </div>

    </div>
  );
};

export default AttractionContainer;
