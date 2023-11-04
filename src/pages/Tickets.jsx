//Tickets.jsx

import { motion } from 'framer-motion';
import React from 'react';
import TicketContainer from '../components/TicketContainer';
import Spacer from '../components/Spacer';

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    display: 'none'
  },
  in: {
    opacity: 1,
    x: 0,
    display: 'block',
    transition: {
      x: { 
        type: "tween",
        ease: "anticipate",
        duration: 1
      }
    }
  },
  out: {
    opacity: 0,
    x: "100vw",
    transition: {
      opacity: { 
        duration: 0.5
      },
      x: { 
        type: "tween",
        ease: "anticipate",
        duration: 0.5,
      },
      transitionEnd: {
        display: 'none'
      }
    }
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1
};

const Tickets = () => {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Spacer />
        <TicketContainer ticketType="Adult" description="Allows entry for one adult." price={599} />
        <TicketContainer ticketType="Under 18" description="Allows entry for one teenager under 18." price={499} />
        <TicketContainer ticketType="Under 13" description="Allows entry one child under 13." price={399} />
      </motion.div>
    );
  };

  export default Tickets;