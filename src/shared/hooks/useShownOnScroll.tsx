import { useEffect, useState } from "react";

export const useShownOnScroll = () => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsShow(window.scrollY > 100 ? true : false);
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });

    };
    

    return { isShow, handleScrollUp };
}