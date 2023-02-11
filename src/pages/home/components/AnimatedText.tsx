import { useState } from "react";

interface IAnimatedText {
    children: string;
}

const AnimatedText = ({ children }: IAnimatedText) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const defaultWeight: string = "medium";
    const weights: string[] = ["extrabold", "bold", "semibold", "medium"];

    const addClass = (charIndex: number): string => {
        // not hovering so dont add effects
        if (hoveredIndex == null) {
            return defaultWeight;
        }

        // get the index difference between the hovered and current char
        const indexDiff: number = Math.abs(charIndex - hoveredIndex);

        if (indexDiff < 4) {
            // add the correct weight based on the distance from the hovered char
            return weights[indexDiff];
        }

        return defaultWeight;
    };

    // create array of span for each letter
    const chars: React.ReactNode = children.split("").map((char, idx) => {
        return (
            <span
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`transition-all duration-200 font-${addClass(idx)}`}
            >
                {char}
            </span>
        );
    });

    return (
        <p className="cursor-text text-center font-mona text-4xl text-sky-100">
            {chars}
        </p>
    );
};

export default AnimatedText;
