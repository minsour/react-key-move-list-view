import { useEffect, useState } from "react";
import { KEY_EVENT, LEFT_KEY, RIGHT_KEY, UP_KEY, DOWN_KEY } from "../constants";

export const useCurrentContent = (width: number, height: number = 0) => {
  const [current, setCurrent] = useState({x: 0, y: 0});
  
  useEffect(() => {
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
    
    window.addEventListener(KEY_EVENT.down, onKeyDown);
    return () => {
      window.removeEventListener(KEY_EVENT.down, onKeyDown);
    };
  }, [current]);

  return current;
};