import { useState } from "react";

export const useViewContainer = () => {
  const [currentView,setCurrentView] = useState<number>(0);
  const [containerSize, setContainerSize] = useState<number>(0);

  return {currentView, setCurrentView, containerSize, setContainerSize};
};