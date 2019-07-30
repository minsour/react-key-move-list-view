import * as React from 'react';
import { ViewContainerProvider } from './context';

interface IViewContainerProps {
  render: () => JSX.Element;
}

const ViewContainer = (props: IViewContainerProps) => {
  return (
    <ViewContainerProvider>
      <div>
        {props.render()}
      </div>
    </ViewContainerProvider>
  );
};

export default ViewContainer;