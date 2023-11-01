// App.jsx
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import HomeBodyContainer from './components/HomeBodyContainer';
import SplashScreen from './components/SplashScreen';
import FeatureContainer from './components/FeatureContainer';
import Footer from './components/Footer';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }, []);

    // Variants for the navbar entrance animation
    const navbarVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          delay: 0.5, // Wait for the splash screen to fade out
          duration: 0.5
        }
      }
    };

    return (
        <BrowserRouter>
            <div className="App">
                <AnimatePresence>
                    {isLoading && <SplashScreen />}
                </AnimatePresence>
                {!isLoading && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={navbarVariants}
                    >
                        <Navbar />
                        <HomeBodyContainer />
                        <FeatureContainer />
                        <Footer />
                    </motion.div>
                )}
            </div>
        </BrowserRouter>
    );
}

export default App;
