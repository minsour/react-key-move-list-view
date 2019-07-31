import * as React from 'react';
import { ViewContainerProvider } from './context';

interface IViewContainerProps {
  render: () => JSX.Element;
}

export const ViewContainer = (props: IViewContainerProps) => {
  return (
    <ViewContainerProvider>
      <div>
        {props.render()}
      </div>
    </ViewContainerProvider>
  );
};
