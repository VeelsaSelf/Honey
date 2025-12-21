import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Heart, X, Camera, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Placeholder romantic images using gradient backgrounds
const memoryImages = [
    {
        id: 1,
        title: "Sunset Together",
        gradient: "linear-gradient(135deg, hsl(350 70% 85%), hsl(40 60% 85%))",
        emoji: "🌅",
    },
    {
        id: 2,
        title: "Coffee Dates",
        gradient: "linear-gradient(135deg, hsl(30 60% 80%), hsl(350 50% 88%))",
        emoji: "☕",
    },
    {
        id: 3,
        title: "Beach Walks",
        gradient: "linear-gradient(135deg, hsl(200 50% 85%), hsl(350 60% 90%))",
        emoji: "🏖️",
    },
    {
        id: 4,
        title: "Movie Nights",
        gradient: "linear-gradient(135deg, hsl(280 40% 85%), hsl(350 55% 88%))",
        emoji: "🎬",
    },
    {
        id: 5,
        title: "Adventures",
        gradient: "linear-gradient(135deg, hsl(140 40% 85%), hsl(40 50% 88%))",
        emoji: "🗺️",
    },
    {
        id: 6,
        title: "Stargazing",
        gradient: "linear-gradient(135deg, hsl(240 30% 85%), hsl(350 50% 90%))",
        emoji: "✨",
    },
];

const GallerySection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section
            id="gallery"
            ref={sectionRef}
            className="py-20 md:py-32 px-6 relative overflow-hidden"
        >
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-champagne/15 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-64 h-64 bg-rose-light/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-light/30 text-primary text-sm font-medium mb-4">
                        <Camera className="w-4 h-4" />
                        Our Memories
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-4">
                        Precious Moments
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Every picture tells a story of our love. Add your own photos to make this truly yours.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {memoryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card
                                className="romantic-card overflow-hidden cursor-pointer group aspect-square"
                                onClick={() => setSelectedImage(image)}
                            >
                                <div
                                    className="w-full h-full flex flex-col items-center justify-center relative"
                                    style={{ background: image.gradient }}
                                >
                                    {/* Emoji Icon */}
                                    <span className="text-5xl md:text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {image.emoji}
                                    </span>
                                    
                                    {/* Title Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/20 to-transparent p-4">
                                        <p className="text-foreground font-medium text-sm text-center">
                                            {image.title}
                                        </p>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                                        <Heart className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 fill-primary/50" />
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Add Your Photos CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <p className="text-muted-foreground text-sm mb-4 flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4 text-gold" />
                        Replace these placeholders with your real memories!
                        <Sparkles className="w-4 h-4 text-gold" />
                    </p>
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-6"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-2xl w-full aspect-square rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                            style={{ background: selectedImage.gradient }}
                        >
                            <div className="w-full h-full flex flex-col items-center justify-center">
                                <span className="text-8xl md:text-9xl mb-4">
                                    {selectedImage.emoji}
                                </span>
                                <p className="font-serif text-2xl text-foreground font-semibold">
                                    {selectedImage.title}
                                </p>
                            </div>
                            
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-4 right-4 bg-background/50 hover:bg-background/80 rounded-full"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GallerySection;
