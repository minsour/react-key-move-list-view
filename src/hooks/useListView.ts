import { useEffect, useState, useContext } from "react";
import { EVENT, ENTER, ESC, UP_KEY, DOWN_KEY } from "../constants";
import { ViewContainerContext } from "../components/organisms/ViewContainer/context";
import { useCurrentContent } from ".";

export const useListView = (type: string, index: number, totalWidthNum: number, totalHeightNum : number) => {
  const viewContainer = useContext(ViewContainerContext);
  const [focus, setFocus] = useState<boolean>(false);
  const [action, setAction] = useState<boolean>(false);
  const isUndefined = (arg: Object) => (arg===void 0);
  const currentContent = useCurrentContent(totalWidthNum,totalHeightNum,isUndefined(index)? true : action);
  const listView = {
    focus, action, currentContent, viewContainer
  };

  useEffect(() => {
    if(isUndefined(index)) return;
    if(viewContainer.containerSize! > index) return;
    viewContainer.setContainerSize!(index);
  }, []);

  useEffect(() => {
  const isFocused = () => (index === viewContainer.currentView);
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
      if(viewContainer.currentView! <= 0) return;
      if(action===focus) return;
      viewContainer.setCurrentView!(viewContainer.currentView! - 1);
    }
    const down = () => {
      if(isUndefined(index)) return;
      if(viewContainer.currentView! >= viewContainer.containerSize!) return;
      if(action===focus) return;
      viewContainer.setCurrentView!(viewContainer.currentView! + 1);
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

    window.addEventListener(EVENT.KEY_DOWN, onKeyDown);
    return () => {
      window.removeEventListener(EVENT.KEY_DOWN, onKeyDown);
    };
  }, [viewContainer, action, focus]);

  return listView;
};