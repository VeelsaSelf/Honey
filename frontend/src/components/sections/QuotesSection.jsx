import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Heart, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const loveQuotes = [
    {
        id: 1,
        text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
        author: "Maya Angelou",
    },
    {
        id: 2,
        text: "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.",
        author: "Gabriel García Márquez",
    },
    {
        id: 3,
        text: "Whatever our souls are made of, his and mine are the same.",
        author: "Emily Brontë",
    },
    {
        id: 4,
        text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss",
    },
    {
        id: 5,
        text: "I would rather spend one lifetime with you, than face all the ages of this world alone.",
        author: "J.R.R. Tolkien",
    },
    {
        id: 6,
        text: "The best thing to hold onto in life is each other.",
        author: "Audrey Hepburn",
    },
];

const QuotesSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextQuote = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % loveQuotes.length);
    };

    const prevQuote = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + loveQuotes.length) % loveQuotes.length);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        }),
    };

    return (
        <section
            id="quotes"
            ref={sectionRef}
            className="py-20 md:py-32 px-6 relative overflow-hidden bg-gradient-to-b from-background via-rose-light/10 to-background"
        >
            {/* Decorative Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-champagne/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-light/30 text-primary text-sm font-medium mb-4">
                        <Quote className="w-4 h-4" />
                        Words of Love
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-4">
                        Love Quotes
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Beautiful words that capture the essence of our love
                    </p>
                </motion.div>

                {/* Quote Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="quote-card min-h-[280px] flex flex-col justify-center">
                        {/* Large Quote Mark */}
                        <div className="absolute top-4 left-6 opacity-20">
                            <Quote className="w-16 h-16 text-primary" />
                        </div>

                        {/* Quote Content */}
                        <div className="relative overflow-hidden">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="text-center px-4 md:px-12"
                                >
                                    <p className="font-serif text-xl sm:text-2xl text-foreground leading-relaxed mb-6 italic">
                                        &ldquo;{loveQuotes[currentIndex].text}&rdquo;
                                    </p>
                                    <p className="text-primary font-medium flex items-center justify-center gap-2">
                                        <Heart className="w-4 h-4 fill-primary" />
                                        {loveQuotes[currentIndex].author}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevQuote}
                            className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary"
                        >
                            <ChevronLeft className="w-5 h-5 text-primary" />
                        </Button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {loveQuotes.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex
                                            ? "bg-primary w-6"
                                            : "bg-primary/30 hover:bg-primary/50"
                                    }`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextQuote}
                            className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary"
                        >
                            <ChevronRight className="w-5 h-5 text-primary" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default QuotesSection;
