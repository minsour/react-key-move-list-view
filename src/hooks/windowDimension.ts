import { useEffect, useState} from 'react';
import { EVENT} from '../constants';

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState({width: window.innerWidth, height:window.innerHeight});
    useEffect(() => {
        const onResize = () => {
            setWindowDimensions({width: window.innerWidth, height:window.innerHeight});
        }
        window.addEventListener(EVENT.RESIZE, onResize);
        return () => {
            window.removeEventListener(EVENT.RESIZE,onResize);
        };
    }, []);
    return windowDimensions;
};