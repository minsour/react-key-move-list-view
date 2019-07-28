import { useState } from "react";

export const useViewContainer = () => {
  const [currentView,setCurrentView] = useState<number>(0);

  return {currentView, setCurrentView};
};