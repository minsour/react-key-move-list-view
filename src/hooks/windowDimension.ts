import { useEffect, useState} from 'react';

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState({width: window.innerWidth, height:window.innerHeight});
    useEffect(() => {
        const onResize = () => {
            setWindowDimensions({width: window.innerWidth, height:window.innerHeight});
        }
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize',onResize);
        };
    }, []);
    return windowDimensions;
};