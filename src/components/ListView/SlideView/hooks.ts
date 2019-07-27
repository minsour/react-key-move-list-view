import { useEffect, useState, useContext } from "react";
import { EVENT, LEFT_KEY, RIGHT_KEY, ENTER, ESC, UP_KEY, DOWN_KEY } from "../../../constants/index";
import { ICurrent } from "../../../types";
import { ViewContainerContext } from "../../ViewContainer/context";

export const useSlideView = (width: number, index: number) => {
  const {currentView, setCurrentView} = useContext(ViewContainerContext);
  const [focus, setFocus] = useState<boolean>(false);
  const [action, setAction] = useState<boolean>(false);
  const isUndefined = (arg: Object) => (arg===void 0);
  const currentContent = useCurrentContent(20, isUndefined(index) ? true : action);
  const slideView = {
    focus, action, currentContent, currentView
  };

  useEffect(() => {
  const isFocused = () => (index === currentView);
  const enter = () => {
      if(isUndefined(index)) return;
      if(!focus || action) return;
      setAction(!action);
    };
    const esc = () => {
      if(isUndefined(index)) return;
      if(!focus || !action) return;
      setAction(!action);
    };
    const up = () => {
      if(currentView! <= 0) return;
      if(action===focus) return;
      setCurrentView!(currentView! - 1);
    }
    const down = () => {
      if(currentView! >= width - 1) return;
      if(action===focus) return;
      setCurrentView!(currentView! + 1);
    }

    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.keyCode) {
        case ENTER:
          enter();
          break;
        case ESC:
          esc();
          break;
        case UP_KEY:
          up();
          break;
        case DOWN_KEY:
          down();
          break;
      };
    };

    setFocus(isFocused);

    window.addEventListener(EVENT.keyDown, onKeyDown);
    return () => {
      window.removeEventListener(EVENT.keyDown, onKeyDown);
    };
  }, [currentView, action, focus]);

  return slideView;
};

export const useCurrentContent = (width: number, action: boolean) => {
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
    
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.keyCode) {
        case LEFT_KEY:
          left();
          break;
        case RIGHT_KEY:
          right();
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