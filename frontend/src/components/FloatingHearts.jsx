import { useEffect, useState, useCallback } from "react";
import { Heart } from "lucide-react";

const FloatingHearts = () => {
    const [hearts, setHearts] = useState([]);

    const createHeart = useCallback(() => {
        const id = Date.now() + Math.random();
        const left = Math.random() * 100;
        const size = Math.random() * 16 + 12;
        const duration = Math.random() * 8 + 10;
        const delay = Math.random() * 2;
        const opacity = Math.random() * 0.3 + 0.1;

        return { id, left, size, duration, delay, opacity };
    }, []);

    useEffect(() => {
        // Create initial hearts
        const initialHearts = Array.from({ length: 8 }, createHeart);
        setHearts(initialHearts);

        // Add new hearts periodically
        const interval = setInterval(() => {
            setHearts((prev) => {
                const filtered = prev.filter((h) => h.id > Date.now() - 18000);
                if (filtered.length < 12) {
                    return [...filtered, createHeart()];
                }
                return filtered;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [createHeart]);

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
