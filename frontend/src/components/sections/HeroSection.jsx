import { motion } from "framer-motion";
import { Heart, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    const scrollToStory = () => {
        const element = document.querySelector("#story");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="hero-section min-h-screen flex flex-col items-center justify-center relative px-6 pt-20"
        >
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 md:left-20"
                    animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Sparkles className="w-8 h-8 text-gold/40" />
                </motion.div>
                <motion.div
                    className="absolute top-40 right-10 md:right-32"
                    animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <Heart className="w-6 h-6 text-primary/30 fill-primary/20" />
                </motion.div>
                <motion.div
                    className="absolute bottom-40 left-20 md:left-40"
                    animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                    <Heart className="w-10 h-10 text-rose/25 fill-rose/15" />
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">
                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-light/50 text-primary text-sm font-medium">
                        <Heart className="w-4 h-4 fill-primary" />
                        A Love Story
                        <Heart className="w-4 h-4 fill-primary" />
                    </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight"
                >
                    For My Dearest
                    <br />
                    <span className="romantic-text-gradient">Keiraa</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Every moment with you is a treasure. This is my gift to you — 
                    a collection of our memories, dreams, and the endless love I have for you.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button
                        onClick={scrollToStory}
                        className="romantic-button px-8 py-6 rounded-full text-base font-medium"
                    >
                        <Heart className="w-5 h-5 mr-2 fill-current" />
                        Explore Our Love
                    </Button>
                    <span className="text-muted-foreground text-sm italic">
                        — With all my love, Aldo
                    </span>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.button
                    onClick={scrollToStory}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
                >
                    <span className="text-xs mb-2">Scroll to discover</span>
                    <ChevronDown className="w-5 h-5" />
                </motion.button>
            </motion.div>
        </section>
    );
};

export default HeroSection;
