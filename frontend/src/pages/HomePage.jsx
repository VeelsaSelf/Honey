import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import OurStorySection from "@/components/sections/OurStorySection";
import QuotesSection from "@/components/sections/QuotesSection";
import LoveLetterSection from "@/components/sections/LoveLetterSection";
import GallerySection from "@/components/sections/GallerySection";
import Footer from "@/components/sections/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import Navigation from "@/components/Navigation";

const HomePage = () => {
    return (
        <div className="relative min-h-screen">
            <FloatingHearts />
            <Navigation />
            
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
        </div>
    );
};

export default HomePage;
