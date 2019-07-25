import { useEffect, useState } from "react";
import { EVENT, LEFT_KEY, RIGHT_KEY, UP_KEY, DOWN_KEY, ENTER, ESC } from "../constants";
import { ICurrent, IViewState } from "types";

export const useCurrentContent = (width: number, height: number, action: boolean = true) => {
  const [current, setCurrent] = useState<ICurrent>({x: 0, y: 0});
  
  useEffect(() => {
    if(!action) return;

    const left = () => {
      if(current.x <= 0) return;
      setCurrent({...current, x: current.x - 1});
    }
    const right = () => {
      if(current.x >= width - 1) return;
      setCurrent({...current, x: current.x + 1});
    }
    const up = () => {
      if(current.y <= 0) return;
      setCurrent({...current, y: current.y - 1});
    }
    const down = () => {
      if(current.y >= height - 1) return;
      setCurrent({...current, y: current.y + 1});
    }
    
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.keyCode) {
        case LEFT_KEY:
          left();
          break;
        case RIGHT_KEY:
          right();
          break;
        case UP_KEY:
          up();
          break;
        case DOWN_KEY:
          down();
          break;
      }
    };
    
    window.addEventListener(EVENT.keyDown, onKeyDown);
    return () => {
      window.removeEventListener(EVENT.keyDown, onKeyDown);
    };
  }, [current, action]);

  return current;
};

export const useCurrentView = (length: number) => {
  const [viewState,setViewState] = useState<IViewState>({
    current: 0, actions: Array<boolean>(length).fill(false)
  });

  useEffect(() => {
    const setActions = () => {
      const temp: boolean[] = viewState.actions;
      temp[viewState.current] = !temp[viewState.current];
      return temp;
    }

    const up = () => {
      if(viewState.actions[viewState.current] || viewState.current <= 0) return;
      setViewState({...viewState, current: viewState.current - 1});
    }
    const down = () => {
      if(viewState.actions[viewState.current] || viewState.current >= length - 1) return;
      setViewState({...viewState, current: viewState.current + 1});
    }
    const enter = () => {
      if(viewState.actions[viewState.current] === true) return;
      setViewState({...viewState, actions: setActions()});
    }
    const esc = () => {
      if(viewState.actions[viewState.current] === false) return;
      setViewState({...viewState, actions: setActions()});
    }

    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.keyCode) {
        case UP_KEY:
          up();
          break;
        case DOWN_KEY:
          down();
          break;
        case ENTER:
          enter();
          break;
        case ESC:
          esc();
          break;
      }
    };

    window.addEventListener(EVENT.keyDown, onKeyDown);
    return () => {
      window.removeEventListener(EVENT.keyDown, onKeyDown);
    };
  }, [viewState.current, viewState.actions]);

  return viewState;
};