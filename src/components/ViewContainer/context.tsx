import * as React from 'react';
import { useViewContainer } from '../../hooks/useViewContainer';

interface IViewContainerContextProps {
  children?: any;
}

interface IContainerContext {
  currentView?: number;
  setCurrentView?: React.Dispatch<React.SetStateAction<number>>;
}

const ViewContainerContext = React.createContext<IContainerContext>({});

const ViewContainerProvider = (props: IViewContainerContextProps) => {
  const {currentView, setCurrentView} = useViewContainer();

  return (
    <ViewContainerContext.Provider value={{currentView, setCurrentView}}>
      {props.children}
    </ViewContainerContext.Provider>
  );
};

export { ViewContainerContext, ViewContainerProvider };