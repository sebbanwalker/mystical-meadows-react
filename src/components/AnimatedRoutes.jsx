// AnimatedRoutes.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Attractions from '../pages/Attractions';
import Tickets from '../pages/Tickets';
import Services from '../pages/Services';
import './AnimatedRoutes.css';

const AnimatedRoutes = ({ onOpenTicketModal }) => {
  const location = useLocation();

  return (
    <AnimatePresence wait>
      <Routes className="animation-container"location={location} key={location.pathname}>
        <Route path="/" element={<Home onOpenTicketModal={onOpenTicketModal} />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
