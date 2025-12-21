import { useEffect, useState, useCallback, useMemo } from "react";
import { Heart } from "lucide-react";

const FloatingHearts = () => {
    const [tick, setTick] = useState(0);

    const createHeart = useCallback((index) => {
        const id = index + Math.random() * 1000;
        const left = Math.random() * 100;
        const size = Math.random() * 16 + 12;
        const duration = Math.random() * 8 + 10;
        const delay = Math.random() * 2;
        const opacity = Math.random() * 0.3 + 0.1;

        return { id, left, size, duration, delay, opacity };
    }, []);

    // Create hearts based on tick value
    const hearts = useMemo(() => {
        const baseHearts = Array.from({ length: 8 }, (_, i) => createHeart(i));
        const additionalHearts = Array.from(
            { length: Math.min(tick, 4) }, 
            (_, i) => createHeart(8 + i + tick * 100)
        );
        return [...baseHearts, ...additionalHearts];
    }, [createHeart, tick]);

    useEffect(() => {
        // Add new hearts periodically
        const interval = setInterval(() => {
            setTick((prev) => (prev + 1) % 5);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="floating-hearts">
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="absolute heart-fall"
                    style={{
                        left: `${heart.left}%`,
                        animationDuration: `${heart.duration}s`,
                        animationDelay: `${heart.delay}s`,
                        opacity: heart.opacity,
                    }}
                >
                    <Heart
                        className="text-primary fill-primary/50"
                        style={{
                            width: heart.size,
                            height: heart.size,
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default FloatingHearts;
