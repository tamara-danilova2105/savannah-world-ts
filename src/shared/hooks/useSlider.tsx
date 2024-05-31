import { useEffect, useState } from "react";

export const useSlide = (maxLength: number) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        setActiveIndex(0);
    }, [maxLength]);

    const prevImage = () => {
        setActiveIndex((prevIndex) => {
            let newIndex = prevIndex - 1;
            if (newIndex < 0) {
                newIndex = maxLength - 1;
            }
            return newIndex;
        });
    };

    const nextImage = () => {
        setActiveIndex((prevIndex) => {
            let newIndex = prevIndex + 1;
            if (newIndex >= maxLength) {
                newIndex = 0;
            }
            return newIndex;
        });
    };

    return { nextImage, prevImage, activeIndex, setActiveIndex };
};