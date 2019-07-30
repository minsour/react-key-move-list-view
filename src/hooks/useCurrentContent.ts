import { useEffect, useState } from "react";
import { EVENT, LEFT_KEY, RIGHT_KEY, UP_KEY, DOWN_KEY } from "../constants/index";
import { ICurrentContent } from "../types";

export const useCurrentContent = (width: number, height: number, action: boolean = true) => {
  const [current, setCurrent] = useState<ICurrentContent>({x: 0, y: 0});
  
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
      event.preventDefault()
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
    
    window.addEventListener(EVENT.KEY_DOWN, onKeyDown);
    return () => {
      window.removeEventListener(EVENT.KEY_DOWN, onKeyDown);
    };
  }, [current, action]);

  return current;
};