
import { useState, useEffect } from 'react'
import './App.css'
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes'; 


import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import Modal from './components/Modal';
import TicketModal from './components/TicketModal';




function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [isTicketModalOpen, setTicketModalOpen] = useState(false);

  const handleOpenTicketModal = () => {
    setTicketModalOpen(true);
  };

  const handleCloseTicketModal = () => {
    setTicketModalOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsFirstMount(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
    const navbarVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          when: "afterChildren", 
          duration: 0.5
        }
      }
    };
  
    return (
      <BrowserRouter>
      <div className="App">
        <AnimatePresence mode='wait'>
          {isLoading ? (
            <SplashScreen key="splash" />
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={navbarVariants}
            >
              <Navbar />
              <AnimatedRoutes onOpenTicketModal={handleOpenTicketModal}/>
              {isTicketModalOpen && (
                <TicketModal
                key="ticket-modal"
                isOpen={isTicketModalOpen}
                onClose={handleCloseTicketModal}
              />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
    );
}

export default App;
