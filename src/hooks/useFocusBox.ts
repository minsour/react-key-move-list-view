import { useState, useRef, useLayoutEffect, RefObject, useCallback } from 'react';
import { EVENT } from "../constants";
import { IFocusBox } from '../types';

export const useFocusBox = () => {
  const [state, setState] = useState({offsetWidth: 0, offsetHeight: 0});
  const ref = useRef<HTMLDivElement>(null);
  const focusBox: IFocusBox = {
    ...state,
    ref: ref,
  };
  const setSize = (ref:RefObject<HTMLDivElement>)=> {
    setState({offsetWidth: ref.current!.offsetWidth, offsetHeight: ref.current!.offsetHeight});
  };
  const sizeHandler = useCallback(() => setSize(ref), []);

  useLayoutEffect(() => {
    sizeHandler();
    window.addEventListener(EVENT.resize, sizeHandler);
    return () => {
      window.removeEventListener(EVENT.resize, sizeHandler);
    };
  }, []);

  return focusBox;
};