import { useEffect, useState } from "react";

interface WindowSize {
    width?: number;
    height?: number;
}

// Credit inspiration: https://usehooks.com/useWindowSize/
const useIsMobile = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (windowSize.width || 0) < 760;
};

export default useIsMobile;
