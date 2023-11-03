import React from 'react';
import ImageSlideshow from './ImageSlideshow';

//Games images

import games1 from '../assets/services/games1.png'
import games2 from '../assets/services/games2.png'
import games3 from '../assets/services/games3.png'
import games4 from '../assets/services/games4.png'

//Dining images
import dining1 from '../assets/services/dining1.png'
import dining2 from '../assets/services/dining2.png'
import dining3 from '../assets/services/dining3.png'

//Live music images
import live1 from '../assets/services/live1.png'
import live2 from '../assets/services/live2.png'
import live3 from '../assets/services/live3.png'

const gamesSlideshow = [
  {
    id: 1,
    url: games1,
    text: 'Carnival Games',
  },
  {
    id: 2,
    url: games2,
    text: 'Puzzle Games',
  },
  {
    id: 3,
    url: games3,
    text: 'Arcade Games',
  },
  {
    id: 4,
    url: games4,
    text: 'Escape Rooms',
  },
];

const diningSlideshow = [
    {
      id: 1,
      url: dining1,
      text: 'The Michelin Experience',
    },
    {
      id: 2,
      url: dining2,
      text: 'Dining Beyond Imagination',
    },
    {
      id: 3,
      url: dining3,
      text: 'World Class Cuisine',
    },
  ];

  const liveSlideshow = [
    {
      id: 1,
      url: live1,
      text: 'Live Music',
    },
    {
      id: 2,
      url: live2,
      text: 'World Class Musicians',
    },
    {
      id: 3,
      url: live3,
      text: 'Jazz Acts',
    },
  ];

const ServicesContainer = () => {
  return (
    <div>
      <ImageSlideshow images={gamesSlideshow} interval={4000} />
      <ImageSlideshow images={diningSlideshow} interval={4500} />
      <ImageSlideshow images={liveSlideshow} interval={5000} />
    </div>
  );
};

export default ServicesContainer;