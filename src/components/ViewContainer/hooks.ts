import { useState, useEffect } from "react";
import { IViewState } from "../../types";
import { UP_KEY, DOWN_KEY, ENTER, ESC, EVENT } from "../../constants";

export const useContainer = (length: number) => {
  const [container,setContainer] = useState<IViewState>({
    current: 0, actions: Array<boolean>(length).fill(false)
  });

  useEffect(() => {
    const setActions = () => {
      const temp: boolean[] = container.actions;
      temp[container.current] = !temp[container.current];
      return temp;
    }

    const up = () => {
      if(container.actions[container.current] || container.current <= 0) return;
      setContainer({...container, current: container.current - 1});
    }
    const down = () => {
      if(container.actions[container.current] || container.current >= length - 1) return;
      setContainer({...container, current: container.current + 1});
    }
    const enter = () => {
      if(container.actions[container.current] === true) return;
      setContainer({...container, actions: setActions()});
    }
    const esc = () => {
      if(container.actions[container.current] === false) return;
      setContainer({...container, actions: setActions()});
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
  }, [container.current, container.actions]);

  return container;
};