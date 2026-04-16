import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-16 px-6 relative overflow-hidden bg-gradient-to-t from-rose-light/20 to-background">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Main Footer Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {/* Decorative Hearts */}
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Sparkles className="w-4 h-4 text-gold" />
                        <Heart className="w-5 h-5 text-primary fill-primary animate-heart-beat" />
                        <Sparkles className="w-4 h-4 text-gold" />
                    </div>

                    {/* Love Message */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                        Made with Love for <span className="romantic-text-gradient">araa cutee</span>
                    </h3>
                    
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                        Every pixel of this website was crafted with love, just for you. 
                        You are my everything.
                    </p>

                    {/* Divider */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/30" />
                        <Heart className="w-4 h-4 text-rose fill-rose/50" />
                        <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/30" />
                    </div>

                    {/* Attribution */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
                        <span>Created by Aldoo</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1">
                            With infinite
                            <Heart className="w-3.5 h-3.5 text-primary fill-primary inline" />
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span>{currentYear}</span>
                    </div>

                    {/* Forever Message */}
                    <p className="mt-8 font-serif text-lg text-primary/80 italic">
                        &ldquo;Forever isn&apos;t long enough with you&rdquo; ♥
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
