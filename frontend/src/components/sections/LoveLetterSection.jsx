import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Feather, Send, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const defaultLetter = `My Dearest zilla cuteee my adek gweh,

Every day with you feels like a beautiful dream I never want to wake up from. Your smile lights up my world in ways words can never fully capture.

Thank you for being you — for your kindness, your laughter, your love. You make me want to be a better person, and I'm grateful every single day that I get to call you mine.

This website is just a small token of the infinite love I have for you. I hope it brings a smile to your face and warmth to your heart, just as you bring to mine.

Forever and always yours,
Nexus ♥`;

const LoveLetterSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [letter, setLetter] = useState(defaultLetter);
    const [isEditing, setIsEditing] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    // Typewriter effect
    useEffect(() => {
        if (isInView && !isEditing && !isTyping) {
            setIsTyping(true);
            setDisplayedText("");
            let index = 0;
            const interval = setInterval(() => {
                if (index < letter.length) {
                    setDisplayedText(letter.slice(0, index + 1));
                    index++;
                } else {
                    setIsTyping(false);
                    clearInterval(interval);
                }
            }, 25);
            return () => clearInterval(interval);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView, letter, isEditing]);

    const handleSave = () => {
        setIsEditing(false);
        setIsTyping(false);
        setDisplayedText(letter);
        toast.success("Love letter saved! 💕", {
            description: "Your beautiful words have been saved.",
        });
    };

    return (
        <section
            id="letter"
            ref={sectionRef}
            className="py-20 md:py-32 px-6 relative overflow-hidden bg-gradient-to-b from-background via-champagne/5 to-background"
        >
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-1/4 w-80 h-80 bg-rose-light/15 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-champagne/15 rounded-full blur-3xl" />
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-light/30 text-primary text-sm font-medium mb-4">
                        <Feather className="w-4 h-4" />
                        From My Heart
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-4">
                        A Love Letter
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Words from my heart to yours
                    </p>
                </motion.div>

                {/* Letter Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Card className="romantic-card overflow-hidden relative">
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-rose-light/30 transform rotate-45 translate-x-8 -translate-y-8" />
                        </div>

                        <CardContent className="p-8 md:p-12">
                            {/* Letter Header Decoration */}
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                                <Heart className="w-6 h-6 text-primary fill-primary/50 animate-pulse-soft" />
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                            </div>

                            {isEditing ? (
                                <div className="space-y-4">
                                    <Textarea
                                        value={letter}
                                        onChange={(e) => setLetter(e.target.value)}
                                        className="min-h-[400px] font-serif text-lg leading-relaxed border-primary/20 focus:border-primary/40 resize-none"
                                        placeholder="Write your love letter here..."
                                    />
                                    <div className="flex gap-3 justify-end">
                                        <Button
                                            variant="outline"
                                            onClick={() => {
                                                setIsEditing(false);
                                                setLetter(defaultLetter);
                                            }}
                                            className="border-primary/30 text-primary hover:bg-primary/10"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            onClick={handleSave}
                                            className="romantic-button"
                                        >
                                            <Send className="w-4 h-4 mr-2" />
                                            Save Letter
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="font-serif text-lg text-foreground leading-relaxed whitespace-pre-wrap min-h-[300px]">
                                        {displayedText}
                                        {isTyping && (
                                            <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-primary/10">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Sparkles className="w-4 h-4 text-gold" />
                                            Customize your message
                                        </div>
                                        <Button
                                            variant="outline"
                                            onClick={() => setIsEditing(true)}
                                            className="border-primary/30 text-primary hover:bg-primary/10"
                                        >
                                            <Feather className="w-4 h-4 mr-2" />
                                            Edit Letter
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Letter Footer Decoration */}
                            <div className="flex items-center justify-center gap-3 mt-8">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                                <Heart className="w-4 h-4 text-primary fill-primary/50" />
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default LoveLetterSection;
