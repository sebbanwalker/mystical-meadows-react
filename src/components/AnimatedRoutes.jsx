// AnimatedRoutes.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Attractions from '../pages/Attractions';
import Tickets from '../pages/Tickets';
import Services from '../pages/Services';

const AnimatedRoutes = ({ isFirstMount }) => {
  const location = useLocation();

  return (
    <AnimatePresence wait>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home isFirstMount={isFirstMount} />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/services" element={<Services />} />
        {/* ... other routes */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
