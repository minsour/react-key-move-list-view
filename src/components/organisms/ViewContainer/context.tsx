import * as React from 'react';
import { useViewContainer } from '../../../hooks/useViewContainer';

interface IViewContainerContextProps {
  children?: any;
}

export interface IContainerContext {
  currentView?: number;
  setCurrentView?: React.Dispatch<React.SetStateAction<number>>;
  containerSize?: number;
  setContainerSize?: React.Dispatch<React.SetStateAction<number>>;
}

const ViewContainerContext = React.createContext<IContainerContext>({});

const ViewContainerProvider = (props: IViewContainerContextProps) => {
  const viewContainer = useViewContainer();

  return (
    <ViewContainerContext.Provider value={viewContainer}>
      {props.children}
    </ViewContainerContext.Provider>
  );
};

export { ViewContainerContext, ViewContainerProvider };