import { useState, useRef, useLayoutEffect, RefObject } from 'react';
import { EVENT } from "../constants";
import { IFocusBox } from '../types';

export const useFocusbox = () => {
  const [state, setState] = useState({offsetWidth: 0, offsetHeight: 0});
  const ref = useRef<HTMLDivElement>(null);
  const focusBox: IFocusBox = {
    ...state,
    ref: ref,
  };
  const sizeHandler = (ref:RefObject<HTMLDivElement>)=> {
    setState({offsetWidth: ref.current!.offsetWidth, offsetHeight: ref.current!.offsetHeight});
  };

  useLayoutEffect(() => {
    sizeHandler(ref);
    window.addEventListener(EVENT.resize, () => sizeHandler(ref));
    return () => {
      window.removeEventListener(EVENT.resize, () => sizeHandler(ref));
    };
  }, []);

  return focusBox;
};