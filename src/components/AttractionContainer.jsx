// AttractionContainer.jsx
import React from 'react';
import Attraction from './Attraction';
import './AttractionContainer.css'; 
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
    description: 'Opened in 2016. We pump four million litres of water through this ride every day.',
    imageUrl: image1
  },
  {
    id: 2,
    title: 'The Cove',
    tag: 'Experience slides galore.',
    description: 'Opened in 2018. There are a whopping eight slides.',
    imageUrl: image2
  },
  {
    id: 3,
    title: 'The Wizard',
    tag: "Get cast under The Wizard's spell.",
    description: 'Opened in 2022. This is our most popular ride.',
    imageUrl: image3
  },
  {
    id: 4,
    title: 'THE ELEMENTAL',
    tag: 'Tackle the four elements of nature.',
    description: 'Opened in 2021. This ride cost $22 million to build.',
    imageUrl: image4
  },
  {
    id: 5,
    title: 'The Flamingo',
    tag: 'Relax with your pink friends.',
    description: 'Opened in 2013. There are over 400 flamingos.',
    imageUrl: image5
  },
  {
    id: 6,
    title: 'THE ELDER GOD',
    tag: 'Test your sanity against cosmic horrors.',
    description: 'Opened in 2023. Only 20% of guests get off this ride still sane.',
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
