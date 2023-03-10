import { useState } from "react";

interface IAnimatedText {
    children: string;
}

const AnimatedText = ({ children }: IAnimatedText) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const defaultClass: string = "font-normal";
    const defaultSize: string = "";
    const hoverClasses: string[] = [
        "font-black",
        "font-extrabold",
        "font-bold",
        "font-semibold",
        "font-medium",
    ];

    const addClass = (charIndex: number): string => {
        // not hovering so dont add effects
        if (hoveredIndex == null) {
            return defaultClass;
        }

        // get the index difference between the hovered and current char
        const indexDiff: number = Math.abs(charIndex - hoveredIndex);

        if (indexDiff < 5) {
            // add the correct weight based on the distance from the hovered char
            return hoverClasses[indexDiff];
        }

        return defaultClass;
    };

    // create array of span for each letter
    const chars: React.ReactNode = children.split("").map((char, idx) => {
        return (
            <span
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`transition-all duration-100 ${addClass(idx)}`}
            >
                {char}
            </span>
        );
    });

    return (
        <p className="font-rubik cursor-text text-center text-4xl text-sky-100">
            {chars}
        </p>
    );
};

export default AnimatedText;
