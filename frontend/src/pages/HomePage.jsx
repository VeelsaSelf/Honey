import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import OurStorySection from "@/components/sections/OurStorySection";
import QuotesSection from "@/components/sections/QuotesSection";
import LoveLetterSection from "@/components/sections/LoveLetterSection";
import GallerySection from "@/components/sections/GallerySection";
import Footer from "@/components/sections/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import Navigation from "@/components/Navigation";

const HomePage = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="relative min-h-screen">
            <FloatingHearts />
            <Navigation />
            
            <AnimatePresence>
                {isLoaded && (
                    <motion.main
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <HeroSection />
                        <OurStorySection />
                        <QuotesSection />
                        <GallerySection />
                        <LoveLetterSection />
                        <Footer />
                    </motion.main>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HomePage;
