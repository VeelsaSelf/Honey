import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Calendar, MapPin, Sparkles, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
    {
        id: 1,
        title: "The Day We Met",
        date: "A magical beginning",
        description: "The universe conspired to bring us together. From that first moment, I knew there was something special about you.",
        icon: Sparkles,
        color: "primary",
    },
    {
        id: 2,
        title: "Our First Date",
        date: "When sparks flew",
        description: "Nervous butterflies, shared laughter, and the beginning of our beautiful journey together. Every second felt like magic.",
        icon: Heart,
        color: "rose",
    },
    {
        id: 3,
        title: "Our Anniversary",
        date: "Celebrating us",
        description: "Each year together is a testament to our love. You make every day feel like a celebration.",
        icon: Star,
        color: "gold",
    },
];

const TimelineCard = ({ event, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex items-center gap-4 md:gap-8 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
            } flex-col md:flex-row`}
        >
            {/* Card */}
            <div className="flex-1 w-full md:w-auto">
                <Card className="romantic-card overflow-hidden">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <div
                                className={`p-3 rounded-xl ${
                                    event.color === "primary"
                                        ? "bg-primary/10"
                                        : event.color === "rose"
                                        ? "bg-rose-light/50"
                                        : "bg-champagne/50"
                                }`}
                            >
                                <event.icon
                                    className={`w-6 h-6 ${
                                        event.color === "primary"
                                            ? "text-primary"
                                            : event.color === "rose"
                                            ? "text-rose"
                                            : "text-gold"
                                    }`}
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                                    {event.title}
                                </h3>
                                <p className="text-sm text-primary/80 mb-3 flex items-center gap-1">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {event.date}
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Timeline Dot - Hidden on mobile */}
            <div className="hidden md:flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="timeline-dot"
                />
            </div>

            {/* Spacer for alignment */}
            <div className="flex-1 hidden md:block" />
        </motion.div>
    );
};

const OurStorySection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="story"
            ref={sectionRef}
            className="py-20 md:py-32 px-6 relative overflow-hidden"
        >
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-rose-light/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-champagne/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-light/30 text-primary text-sm font-medium mb-4">
                        <Heart className="w-4 h-4 fill-primary" />
                        Our Journey
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-4">
                        Our Love Story
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Every chapter of our story is written with love. Here are the moments
                        that define us.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line - Hidden on mobile */}
                    <div className="hidden md:block timeline-line" />

                    {/* Timeline Events */}
                    <div className="space-y-12 md:space-y-16">
                        {timelineEvents.map((event, index) => (
                            <TimelineCard key={event.id} event={event} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStorySection;
