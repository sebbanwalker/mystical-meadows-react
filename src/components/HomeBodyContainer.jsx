//HomeBodyContainer.jsx

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './HomeBodyContainer.css';
import image from '../assets/rollercoaster-fire.png';
import logo from '../assets/logo-rough.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TicketModal from './TicketModal';

const HomeBodyContainer = ( { onOpenTicketModal } ) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const controls = useAnimation();
    const [isTicketModalOpen, setTicketModalOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const position = window.scrollY;
        if (position) {
          controls.start({ y: 0, opacity: 1 });
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [controls]);

    const handleTicketClick = () => {
      onOpenTicketModal();
    };
  
    const handleCloseModal = () => {
      setTicketModalOpen(false);
    };


  return (
    <div className="home-body-container">
        <div className="home-welcome-section">
            <img src={image} alt="Welcome" className="home-background-image" />
            <div className="home-welcome-message">
                <img src={logo} alt="Logo" />
                <h1 className="home-welcome-message__text">Beyond imagination</h1>
            </div>
        </div>
        <motion.div
          className="home-ticket-purchase-container"
          initial={{ y: '100vh', opacity: 0 }}
          animate={controls}
          transition={{ type: 'spring', stiffness: 30, damping: 8, duration: 1}}
          >
          <div className="ticket-message-container">
              <h2 className="ticket-message">Ignite Your Imagination <br></br></h2>
              <h2 className="ticket-message-small">Tickets to a World Beyond Awaits</h2>
          </div>
          <div className="home-calendar-container">
              <DatePicker wrapperClassName="date-picker"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dropdownMode="select"
                  className="date-picker"
                  dateFormat="dd/MM/yyyy"
              />
          </div>
          <button className="home-search-button" onClick={handleTicketClick}>Tickets</button>
        </motion.div>
        {isTicketModalOpen && (
            <TicketModal
              onClose={handleCloseModal}
            />
          )}
      </div>
  );
};

export default HomeBodyContainer;
