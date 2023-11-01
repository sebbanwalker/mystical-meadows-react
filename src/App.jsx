// App.jsx
import { useState, useEffect } from 'react'
import './App.css'
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes'; 

//Pages

import Home from './pages/Home';
import Attractions from './pages/Attractions';
import Tickets from './pages/Tickets';
import Services from './pages/Services';

//Components
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';

//Home 


function App() {
  //Splashscreen animation
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstMount, setIsFirstMount] = useState(true);

  

  useEffect(() => {
    // Set a timeout to simulate the loading time of the splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsFirstMount(false);
    }, 3000);
    
    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  

    // Navbar entrance animation
    const navbarVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          when: "afterChildren", // Wait for the splash screen to fade out
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
              <AnimatePresence wait>
                <AnimatedRoutes isFirstMount={isFirstMount} />
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
    );
}

export default App;
