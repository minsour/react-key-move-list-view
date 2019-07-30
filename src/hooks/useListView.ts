import { useEffect, useState, useContext } from "react";
import { EVENT, ENTER, ESC, UP_KEY, DOWN_KEY } from "../constants";
import { ViewContainerContext } from "../components/organisms/ViewContainer/context";
import { useCurrentContent } from ".";

export const useListView = (type: string, width: number, index: number) => {
  const {currentView, setCurrentView} = useContext(ViewContainerContext);
  const [focus, setFocus] = useState<boolean>(false);
  const [action, setAction] = useState<boolean>(false);
  const isUndefined = (arg: Object) => (arg===void 0);
  //const currentContent = useCurrentContent(20, 0, isUndefined(index) ? true : action);
  const currentContent = useCurrentContent(5,4,isUndefined(index)? true : action);
  const listView = {
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
      if(isUndefined(index)) return;
      if(currentView! <= 0) return;
      if(action===focus) return;
      setCurrentView!(currentView! - 1);
    }
    const down = () => {
      if(isUndefined(index)) return;
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

  return listView;
};